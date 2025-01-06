'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="space-y-8 py-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Über die Grundlagen von JavaScript</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Lerne und übe grundlegende JavaScript-Konzepte durch interaktive Coding-Challenges.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Unsere Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              JavaScript Basics widmet sich der Unterstützung von Anfängern beim Erlernen der Kernkonzepte von JavaScript
              durch praktische Übungen. Unsere Plattform bietet eine Reihe sorgfältig gestalteter Coding-Challenges, die
              die wichtigsten Aspekte der JavaScript-Programmierung abdecken.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Was du lernen wirst</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Variablen und Datentypen</li>
              <li>Operatoren und Ausdrücke</li>
              <li>Kontrollfluss (if-else-Anweisungen, Schleifen)</li>
              <li>Funktionen</li>
              <li>Arrays</li>
              <li>Objekte</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Wie es funktioniert</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Wähle eine Herausforderung aus unserer Liste von Problemen</li>
              <li>Lies die Problembeschreibung und Erläuterung</li>
              <li>Schreibe deinen JavaScript-Code im bereitgestellten Editor</li>
              <li>Führe die Tests aus, um deine Lösung zu überprüfen</li>
              <li>Lerne aus dem Feedback und verbessere deinen Code</li>
            </ol>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Loslegen</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Bereit, deine JavaScript-Reise zu beginnen? Gehe zur Seite mit den Herausforderungen und starte das
              Programmieren! Vergiss nicht, deinen Fortschritt auf der Seite "Mein Fortschritt" zu verfolgen.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
