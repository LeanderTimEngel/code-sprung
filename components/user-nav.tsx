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
    return (
      <Button 
        variant="ghost" 
        className="custom-button w-full md:w-auto min-h-[44px] text-base"
      >
        loading...
      </Button>
    );
  }

  if (!user) {
    return (
      <Button 
        variant="outline" 
        onClick={handleSignIn} 
        disabled={isLoading}
        className="custom-button font-mono text-base w-full md:w-auto min-h-[44px] px-4"
      >
        {isLoading ? 'signing in...' : 'sign in'}
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="custom-button font-mono text-base w-full md:w-auto min-h-[44px] px-4"
        >
          <span className="block md:hidden">
            {user.email?.split('@')[0]}
          </span>
          <span className="hidden md:block">
            {user.email}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-[calc(100vw-2rem)] md:w-56" 
        align="end"
      >
        <DropdownMenuLabel className="font-mono text-base">
          {user.displayName || user.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={handleSignOut}
          className="font-mono text-base min-h-[44px]"
        >
          {isLoading ? 'logging out...' : 'log out'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

