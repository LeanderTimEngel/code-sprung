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
import { Congratulations } from '@/components/congratulations'

interface TestResult {
  passed: boolean;
  description: string;
  error?: string;
}

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
    return <div className="text-center py-10 font-mono">Problem nicht gefunden</div>
  }

  const isFirstProblem = problem.id === problems[0].id
  const isLastProblem = problem.id === problems[problems.length - 1].id

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 p-3 sm:p-4">
      {showConfetti && <Confetti />}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2"
      >
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Button
            onClick={goToPreviousChallenge}
            disabled={isFirstProblem}
            variant="outline"
            size="sm"
            className={cn(
              "w-10 h-10 sm:w-8 sm:h-8 p-0 rounded-full custom-button",
              isFirstProblem && "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="w-5 h-5 sm:w-4 sm:h-4" />
            <span className="sr-only">Vorherige Herausforderung</span>
          </Button>
          <h1 className="text-xl sm:text-3xl font-bold font-mono break-words">
            {problem.id}. {problem.title}
          </h1>
          {isSolved && (
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
          )}
          <Button
            onClick={goToNextChallenge}
            disabled={isLastProblem}
            variant="outline"
            size="sm"
            className={cn(
              "w-10 h-10 sm:w-8 sm:h-8 p-0 rounded-full custom-button",
              isLastProblem && "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronRight className="w-5 h-5 sm:w-4 sm:h-4" />
            <span className="sr-only">Nächste Herausforderung</span>
          </Button>
        </div>
        <Badge className={cn("text-tech self-start sm:self-center", difficultyColor[problem.difficulty])}>
          {problem.difficulty}
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="custom-card">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="font-mono text-lg sm:text-xl">Problembeschreibung</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <p className="font-mono whitespace-pre-wrap text-sm sm:text-base">{problem.description}</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="custom-card">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="font-mono text-lg sm:text-xl">Beispiele</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            {problem.examples.map((example, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="font-semibold font-mono mb-2">Beispiel {index + 1}:</h3>
                <CodeBlock>{`Eingabe: ${example.input}
Ausgabe: ${example.output}
Erläuterung: ${example.explanation}`}</CodeBlock>
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
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="font-mono text-lg sm:text-xl">Dein Code</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="rounded-lg overflow-hidden border border-border">
              <MonacoEditor
                height="300px"
                language="javascript"
                theme={isDarkMode ? "vs-dark" : "vs-light"}
                value={code}
                onChange={(value) => setCode(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 12,
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
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button 
                onClick={runTests} 
                className="custom-button font-mono w-full sm:w-auto min-h-[44px]"
              >
                <Play className="w-4 h-4 mr-2" />
                Tests Ausführen
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowSolution(!showSolution)}
                className="custom-button font-mono w-full sm:w-auto min-h-[44px]"
              >
                {showSolution ? 'Lösung Verbergen' : 'Lösung Anzeigen'}
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
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-mono text-lg sm:text-xl">Testergebnisse</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-4">
                  {(results as TestResult[]).map((result: TestResult, index: number) => (
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
                      Nächste Herausforderung
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
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="font-mono text-lg sm:text-xl">Lösung</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-6">
                <div className="rounded-lg overflow-hidden border border-border">
                  <MonacoEditor
                    height="300px"
                    language="javascript"
                    theme={isDarkMode ? "vs-dark" : "vs-light"}
                    value={problem.solution}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 12,
                      lineNumbers: 'on',
                      readOnly: true,
                      wordWrap: 'on',
                      wrappingIndent: 'same',
                      padding: { top: 16, bottom: 16 },
                    }}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold font-mono text-lg">Videoerklärung</h3>
                  <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden border border-border">
                    <iframe
                      src={`https://www.youtube.com/embed/${problem.videoExplanation.split('v=')[1]}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>
                  <a
                    href={problem.videoExplanation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline transition-colors duration-200 font-mono text-sm"
                  >
                    Auf YouTube ansehen →
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
