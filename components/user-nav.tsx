'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from './AuthContext';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { transferLocalProgressToFirebase } from '@/lib/progressUtils'

export function UserNav() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await transferLocalProgressToFirebase(result.user.uid);
      router.push('/problems');
    } catch (error) {
      console.error('Error signing in:', error);
    }
    setIsLoading(false);
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
    setIsLoading(false);
  };

  if (loading) {
    return <Button variant="ghost" className="custom-button">loading...</Button>;
  }

  if (!user) {
    return (
      <Button 
        variant="outline" 
        onClick={handleSignIn} 
        disabled={isLoading}
        className="custom-button font-mono text-sm"
      >
        {isLoading ? 'signing in...' : 'sign in'}
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="custom-button font-mono text-sm px-4">
          {user.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="font-mono text-sm">
          {user.displayName || user.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={handleSignOut}
          className="font-mono text-sm"
        >
          {isLoading ? 'logging out...' : 'log out'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

