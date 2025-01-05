import { doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export const saveProgress = async (userId: string | null, problemId: number) => {
  if (userId) {
    // User is logged in, save to Firebase
    const userDoc = doc(db, 'users', userId);
    await setDoc(userDoc, {
      solvedProblems: arrayUnion(problemId)
    }, { merge: true });
  } else {
    // User is not logged in, save to local storage
    const localProgress = JSON.parse(localStorage.getItem('solvedProblems') || '[]');
    if (!localProgress.includes(problemId)) {
      localProgress.push(problemId);
      localStorage.setItem('solvedProblems', JSON.stringify(localProgress));
    }
  }
};

export const getProgress = async (userId: string | null): Promise<number[]> => {
  if (userId) {
    // User is logged in, get progress from Firebase
    const userDoc = doc(db, 'users', userId);
    const userSnap = await getDoc(userDoc);
    if (userSnap.exists()) {
      return userSnap.data().solvedProblems || [];
    }
    return [];
  } else {
    // User is not logged in, get progress from local storage
    return JSON.parse(localStorage.getItem('solvedProblems') || '[]');
  }
};

export const clearLocalProgress = () => {
  localStorage.removeItem('solvedProblems');
};

export const transferLocalProgressToFirebase = async (userId: string) => {
  const localProgress = JSON.parse(localStorage.getItem('solvedProblems') || '[]');
  if (localProgress.length > 0) {
    const userDoc = doc(db, 'users', userId);
    await setDoc(userDoc, {
      solvedProblems: arrayUnion(...localProgress)
    }, { merge: true });
    clearLocalProgress();
  }
};

