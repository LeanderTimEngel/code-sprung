import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/AuthContext'
import { problems } from '@/lib/problems-data'
import { saveProgress, getProgress } from '@/lib/progressUtils'

interface TestResult {
  description: string;
  passed: boolean;
  error: string | null;
}

export function useProblem(problemId: string) {
  const router = useRouter()
  const [problem, setProblem] = useState(problems.find(p => p.id === parseInt(problemId)))
  const [code, setCode] = useState(problem?.initialCode || '')
  const [results, setResults] = useState<TestResult[] | null>(null)
  const [showSolution, setShowSolution] = useState(false)
  const [allTestsPassed, setAllTestsPassed] = useState(false)
  const [showCongratulations, setShowCongratulations] = useState(false)
  const [isSolved, setIsSolved] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const { user } = useAuth()

  useEffect(() => {
    const currentProblem = problems.find(p => p.id === parseInt(problemId))
    setProblem(currentProblem)
    setCode(currentProblem?.initialCode || '')
    setResults(null)
    setShowSolution(false)
    setAllTestsPassed(false)
    setShowCongratulations(false)
    setShowConfetti(false)
    checkIfSolved()
  }, [problemId, user])

  const checkIfSolved = useCallback(async () => {
    if (problem) {
      const solvedProblems = await getProgress(user?.uid || null)
      setIsSolved(solvedProblems.includes(problem.id))
    }
  }, [user, problem])

  const runTests = useCallback(() => {
    if (!problem) return;
    
    const testResults = problem.testCases.map((testCase) => {
      try {
        const sandbox = {
          assert: function(condition: boolean, message: string) {
            if (!condition) {
              throw new Error(message);
            }
          }
        };

        const testFunction = new Function('assert', `
          ${code}
          ${testCase.test}
        `);

        testFunction.call(sandbox, sandbox.assert);

        return {
          description: testCase.description,
          passed: true,
          error: null
        };
      } catch (error: unknown) {
        return {
          description: testCase.description,
          passed: false,
          error: error instanceof Error ? error.message : String(error)
        };
      }
    });

    setResults(testResults);
    const allPassed = testResults.every(result => result.passed);
    setAllTestsPassed(allPassed);
    if (allPassed) {
      markAsSolved();
      setShowConfetti(true);
    }
  }, [code, problem]);

  const markAsSolved = useCallback(async () => {
    if (problem) {
      await saveProgress(user?.uid || null, problem.id);
      setIsSolved(true);
    }
  }, [user, problem]);

  const goToNextChallenge = useCallback(() => {
    if (!problem) return;
    const currentIndex = problems.findIndex(p => p.id === problem.id)
    const nextProblem = problems[currentIndex + 1]
    if (nextProblem) {
      router.push(`/problems/${nextProblem.id}`)
    } else {
      setShowCongratulations(true)
    }
  }, [problem, router]);

  const goToPreviousChallenge = useCallback(() => {
    if (!problem) return;
    const currentIndex = problems.findIndex(p => p.id === problem.id)
    const previousProblem = problems[currentIndex - 1]
    if (previousProblem) {
      router.push(`/problems/${previousProblem.id}`)
    }
  }, [problem, router]);

  return {
    problem,
    code,
    setCode,
    results,
    showSolution,
    setShowSolution,
    allTestsPassed,
    showCongratulations,
    isSolved,
    showConfetti,
    runTests,
    goToNextChallenge,
    goToPreviousChallenge
  }
}

