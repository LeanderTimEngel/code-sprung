'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/components/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { getProgress } from '@/lib/progressUtils'
import { problems } from '@/lib/problems-data'
import { Skeleton } from '@/components/ui/skeleton'

interface UserProgress {
  totalProblems: number
  solvedProblems: number[]
  topicProgress: {
    [key: string]: number
  }
}

function ProgressSkeleton() {
  return (
    <div className="space-y-4 p-4 sm:space-y-6 sm:p-0">
      <Skeleton className="h-8 sm:h-10 w-full sm:w-3/4" />
      <Card>
        <CardHeader className="space-y-2">
          <Skeleton className="h-5 sm:h-6 w-2/3 sm:w-1/2" />
          <Skeleton className="h-3 sm:h-4 w-full sm:w-3/4" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-3 sm:h-4 w-full" />
        </CardContent>
      </Card>
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
        {[1, 2, 3, 4].map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <Skeleton className="h-5 sm:h-6 w-2/3 sm:w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-6 sm:h-8 w-1/3 sm:w-1/4 mb-2" />
              <Skeleton className="h-3 sm:h-4 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function ProgressPage() {
  const { user } = useAuth()
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserProgress = async () => {
      setLoading(true)
      const solvedProblems = await getProgress(user?.uid || null)
      
      const topicProgress: { [key: string]: number } = {}
      problems.forEach(problem => {
        if (!topicProgress[problem.category]) {
          topicProgress[problem.category] = 0
        }
        if (solvedProblems.includes(problem.id)) {
          topicProgress[problem.category]++
        }
      })

      setUserProgress({
        totalProblems: problems.length,
        solvedProblems: solvedProblems,
        topicProgress: topicProgress,
      })
      setLoading(false)
    }

    fetchUserProgress()
  }, [user])

  if (loading) {
    return <ProgressSkeleton />
  }

  if (!userProgress) {
    return <div className="text-center py-10">Fortschrittsdaten konnten nicht abgerufen werden.</div>
  }

  const progressPercentage = (userProgress.solvedProblems.length / userProgress.totalProblems) * 100

  return (
    <div className="space-y-4 p-4 sm:space-y-6 sm:p-0">
      <h1 className="text-2xl sm:text-3xl font-bold">Dein JavaScript Lernfortschritt</h1>
      <Card>
        <CardHeader className="space-y-1 sm:space-y-2">
          <CardTitle className="text-lg sm:text-xl">Gesamter Fortschritt</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Du hast {userProgress.solvedProblems.length} von {userProgress.totalProblems} Problemen gelöst
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="w-full" />
        </CardContent>
      </Card>
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
        {Object.entries(userProgress.topicProgress).map(([topic, solved]) => (
          <Card key={topic}>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">{topic}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl sm:text-2xl font-bold">{solved} gelöst</p>
              <Progress 
                value={(solved / problems.filter(p => p.category === topic).length) * 100} 
                className="w-full mt-2" 
              />
            </CardContent>
          </Card>
        ))}
      </div>
      {!user && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Einloggen, um deinen Fortschritt zu speichern</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base">
              Dein Fortschritt wird derzeit lokal gespeichert. Melde dich an, um deinen Fortschritt über Geräte und Sitzungen hinweg zu speichern.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
