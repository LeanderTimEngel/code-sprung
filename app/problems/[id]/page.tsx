'use client'

import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { problems } from '@/lib/problems-data'
import { cn } from '@/lib/utils'
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from 'framer-motion'
import { Confetti } from '@/components/Confetti'
import { useProblem } from '@/hooks/useProblem'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

const difficultyColor = {
  Easy: 'syntax-javascript',
  Medium: 'syntax-typescript',
  Hard: 'syntax-rust',
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-card rounded-md p-4 font-mono text-sm overflow-x-auto border border-border">
      <code>{children}</code>
    </pre>
  )
}

export default function ProblemPage({ params }: { params: { id: string } }) {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"

  const {
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
  } = useProblem(params.id)

  if (!problem) {
    return <div className="text-center py-10 font-mono">Problem not found</div>
  }

  const isFirstProblem = problem.id === problems[0].id
  const isLastProblem = problem.id === problems[problems.length - 1].id

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      {showConfetti && <Confetti />}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center space-x-2">
          <Button
            onClick={goToPreviousChallenge}
            disabled={isFirstProblem}
            variant="outline"
            size="sm"
            className={cn(
              "w-8 h-8 p-0 rounded-full custom-button",
              isFirstProblem && "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="sr-only">Previous Challenge</span>
          </Button>
          <h1 className="text-3xl font-bold font-mono">
            {problem.id}. {problem.title}
          </h1>
          {isSolved && (
            <CheckCircle className="w-6 h-6 text-green-500" />
          )}
          <Button
            onClick={goToNextChallenge}
            disabled={isLastProblem}
            variant="outline"
            size="sm"
            className={cn(
              "w-8 h-8 p-0 rounded-full custom-button",
              isLastProblem && "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronRight className="w-4 h-4" />
            <span className="sr-only">Next Challenge</span>
          </Button>
        </div>
        <Badge className={cn("text-tech", difficultyColor[problem.difficulty])}>
          {problem.difficulty}
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="custom-card">
          <CardHeader>
            <CardTitle className="font-mono">Problem Description</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-mono whitespace-pre-wrap">{problem.description}</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="custom-card">
          <CardHeader>
            <CardTitle className="font-mono">Examples</CardTitle>
          </CardHeader>
          <CardContent>
            {problem.examples.map((example, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="font-semibold font-mono">Example {index + 1}:</h3>
                <CodeBlock>{`Input: ${example.input}
Output: ${example.output}
Explanation: ${example.explanation}`}</CodeBlock>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="custom-card">
          <CardHeader>
            <CardTitle className="font-mono">Your Code</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden border border-border">
              <MonacoEditor
                height="400px"
                language="javascript"
                theme={isDarkMode ? "vs-dark" : "vs-light"}
                value={code}
                onChange={(value) => setCode(value)}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  readOnly: false,
                  cursorStyle: 'line',
                  automaticLayout: true,
                  tabSize: 2,
                  wordWrap: 'on',
                  wrappingIndent: 'same',
                  padding: { top: 16, bottom: 16 },
                  renderLineHighlight: 'all',
                  colorDecorators: true,
                  scrollbar: {
                    vertical: 'visible',
                    horizontal: 'visible',
                    useShadows: false,
                    verticalScrollbarSize: 10,
                    horizontalScrollbarSize: 10,
                  },
                }}
              />
            </div>
            <div className="flex justify-between mt-4">
              <Button 
                onClick={runTests} 
                className="custom-button font-mono"
              >
                <Play className="w-4 h-4 mr-2" />
                Run Tests
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowSolution(!showSolution)}
                className="custom-button font-mono"
              >
                {showSolution ? 'Hide Solution' : 'Show Solution'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="custom-card">
              <CardHeader>
                <CardTitle className="font-mono">Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={cn(
                        "p-4 rounded-md border",
                        result.passed 
                          ? "bg-green-500/20 border-green-500/50" 
                          : "bg-red-500/20 border-red-500/50"
                      )}
                    >
                      <div className="flex items-center">
                        {result.passed ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        <span className={cn(
                          "font-medium font-mono",
                          result.passed 
                            ? "text-green-700 dark:text-green-300" 
                            : "text-red-700 dark:text-red-300"
                        )}>
                          {result.description}
                        </span>
                      </div>
                      {result.error && (
                        <p className="mt-2 text-red-600 dark:text-red-400 font-mono text-sm">
                          {result.error}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
                {allTestsPassed && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-6"
                  >
                    <Button onClick={goToNextChallenge} className="w-full custom-button font-mono">
                      Next Challenge
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSolution && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="custom-card">
              <CardHeader>
                <CardTitle className="font-mono">Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock>{problem.solution}</CodeBlock>
                <div className="mt-6">
                  <h3 className="font-semibold font-mono mb-2">Video Explanation</h3>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${problem.videoExplanation.split('v=')[1]}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <a
                    href={problem.videoExplanation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-600 hover:underline transition-colors duration-200 font-mono"
                  >
                    {/* Youtube className="w-4 h-4 mr-1" */}
                    Watch on YouTube
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      {showCongratulations && <Congratulations />}
    </div>
  )
}

