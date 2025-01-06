'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Code, BookOpen, BarChart, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { problems } from '@/lib/problems-data'
import { cn } from '@/lib/utils'
import { useAuth } from '@/components/AuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

const difficultyColor = {
  Easy: 'syntax-javascript',
  Medium: 'syntax-typescript',
  Hard: 'syntax-rust',
}

const categories = Array.from(new Set(problems.map(problem => problem.category)))
const difficulties = Array.from(new Set(problems.map(problem => problem.difficulty)))

export default function ProblemsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [filteredProblems, setFilteredProblems] = useState(problems)
  const [solvedChallenges, setSolvedChallenges] = useState<number[]>([])
  const { user } = useAuth()

  useEffect(() => {
    const fetchSolvedChallenges = async () => {
      if (user) {
        const userDoc = doc(db, 'users', user.uid)
        const userSnap = await getDoc(userDoc)
        if (userSnap.exists()) {
          const userData = userSnap.data()
          setSolvedChallenges(userData.solvedProblems || [])
        }
      }
    }

    fetchSolvedChallenges()
  }, [user])

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    filterProblems(value, selectedDifficulty)
  }

  const handleDifficultyChange = (value: string) => {
    setSelectedDifficulty(value)
    filterProblems(selectedCategory, value)
  }

  const filterProblems = (category: string, difficulty: string) => {
    setFilteredProblems(problems.filter(problem => 
      (category === 'All' || problem.category === category) &&
      (difficulty === 'All' || problem.difficulty === difficulty)
    ))
  }

  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 py-6">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-mono">
          JavaScript Coding Challenges
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-mono px-4">
          Verbessere deine JavaScript-Fähigkeiten mit unserem sorgfältig zusammengestellten Satz von Coding-Challenges. 
          Von Anfängern bis hin zu fortgeschrittenen Programmierern ist für jeden etwas dabei.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Select onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full sm:w-[200px] custom-button font-mono min-h-[44px]">
            <SelectValue placeholder="Kategorie auswählen" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All" className="font-mono">Alle Kategorien</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category} className="font-mono">{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select onValueChange={handleDifficultyChange}>
          <SelectTrigger className="w-full sm:w-[200px] custom-button font-mono min-h-[44px]">
            <SelectValue placeholder="Schwierigkeit auswählen" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All" className="font-mono">Alle Schwierigkeitsgrade</SelectItem>
            {difficulties.map(difficulty => (
              <SelectItem key={difficulty} value={difficulty} className="font-mono">{difficulty}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <motion.div 
        className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProblems.map((problem, index) => (
          <motion.div
            key={problem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="custom-card h-full flex flex-col">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center justify-between font-mono text-lg sm:text-xl">
                  <span className="flex items-center">
                    {problem.title}
                    {solvedChallenges.includes(problem.id) && (
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                    )}
                  </span>
                  <Badge className={`text-tech ${difficultyColor[problem.difficulty]}`}>
                    {problem.difficulty}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-4 sm:p-6">
                <div className="space-y-3 font-mono">
                  <Badge variant="outline" className={`text-tech ${difficultyColor[problem.difficulty]}`}>
                    {problem.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Code className="w-4 h-4 mr-2" />
                    Programmierfähigkeiten üben
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Kernkonzepte lernen
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BarChart className="w-4 h-4 mr-2" />
                    Dein Wissen testen
                  </div>
                </div>
                <Link 
                  href={`/problems/${problem.id}`} 
                  className="mt-6 custom-button inline-flex items-center justify-center rounded-md text-sm font-medium min-h-[44px] px-4 py-2 w-full font-mono"
                >
                  {solvedChallenges.includes(problem.id) ? 'Herausforderung Überprüfen' : 'Herausforderung Lösen'} 
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
