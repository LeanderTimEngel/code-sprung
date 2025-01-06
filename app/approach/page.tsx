'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Code, Zap, Users, BarChart, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const topics = [
  {
    title: 'Variablen und Datentypen',
    description: 'Lerne, wie man Variablen deklariert und verschiedene Datentypen in JavaScript versteht.',
    approach: 'Beginne mit den Grundlagen der Erstellung und Verwendung von Variablen, dann erkunde verschiedene Datentypen wie Zahlen, Zeichenketten und Booleans.',
    icon: Code,
  },
  {
    title: 'Operatoren und Ausdrücke',
    description: 'Erkunde arithmetische, Vergleichs- und logische Operatoren, um Ausdrücke zu erstellen.',
    approach: 'Übe die Verwendung verschiedener Operatoren, um Berechnungen durchzuführen und Vergleiche anzustellen. Konzentriere dich auf die Operatorrangfolge und wie man Operatoren effektiv kombiniert.',
    icon: Zap,
  },
  {
    title: 'Kontrollfluss',
    description: 'Meistere if-else-Anweisungen und Schleifen, um den Ablauf deiner Programme zu steuern.',
    approach: 'Beginne mit einfachen if-else-Anweisungen und arbeite dich dann zu komplexeren Bedingungen vor. Führe Schleifen (for, while) ein und übe das Lösen von Problemen, die Iteration erfordern.',
    icon: ArrowRight,
  },
  {
    title: 'Funktionen',
    description: 'Lerne, Funktionen zu erstellen und zu verwenden, um deinen Code zu organisieren und wiederzuverwenden.',
    approach: 'Beginne mit grundlegenden Funktionsdeklarationen, dann gehe über zu Funktionsausdrücken und Pfeilfunktionen. Übe das Schreiben von Funktionen mit Parametern und Rückgabewerten.',
    icon: BookOpen,
  },
  {
    title: 'Arrays',
    description: 'Entdecke, wie man mit Arrays arbeitet, um Datenkollektionen zu verwalten.',
    approach: 'Beginne mit der Erstellung von Arrays und grundlegenden Operationen. Arbeite dich zu Array-Methoden wie map, filter und reduce vor. Übe das Lösen von Problemen, die die Manipulation von Arrays erfordern.',
    icon: BarChart,
  },
  {
    title: 'Objekte',
    description: 'Verstehe die Grundlagen von Objekten und wie man sie in JavaScript verwendet.',
    approach: 'Beginne mit der Erstellung und dem Zugriff auf Objekteigenschaften. Gehe zu Methoden, dem Schlüsselwort this und Objektprototypen über. Übe das Erstellen und Manipulieren komplexer Datenstrukturen mit Objekten.',
    icon: Users,
  },
]

export default function ApproachPage() {
  return (
    <div className="space-y-8 sm:space-y-12 py-4 sm:py-8 px-4 sm:px-0">
      <section className="text-center space-y-4">
        <motion.h1 
          className="text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unser Lernansatz
        </motion.h1>
        <motion.p 
          className="mx-auto max-w-[700px] text-base sm:text-lg text-muted-foreground px-4 sm:px-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bei JavaScript Basics glauben wir an einen strukturierten, praxisnahen Ansatz zum Lernen. 
          Unsere Methode ist darauf ausgelegt, dich von einem Anfänger zum Profi durch sorgfältig gestaltete Lektionen und praktische Übungen zu führen.
        </motion.p>
      </section>

      <motion.section 
        className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {topics.map((topic, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-1.5 sm:p-2 bg-primary rounded-md">
                  <topic.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg sm:text-xl">{topic.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-3 sm:mb-4 text-sm sm:text-base">{topic.description}</CardDescription>
              <p className="text-xs sm:text-sm">{topic.approach}</p>
            </CardContent>
          </Card>
        ))}
      </motion.section>

      <motion.section 
        className="bg-secondary p-4 sm:p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Unsere Methode</h2>
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Konzepte mit klaren Erklärungen",
            "Interaktive Coding-Challenges",
            "Sofortiges Feedback durch Tests",
            "Verstehe die Lösung mit Videoerklärungen",
            "Realitätsnahe Szenarien",
            "Eine Menge Spaß :)"
          ].map((step, index) => (
            <div key={index} className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base">{step}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="text-center space-y-4 px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold">Bereit, deine JavaScript-Reise zu beginnen?</h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Tritt hunderten von Lernenden bei, die ihre Programmierfähigkeiten mit uns verbessert haben.
        </p>
        <Button asChild size="lg" className="mt-4 w-full sm:w-auto">
          <Link href="/problems">
            Jetzt Programmieren Starten <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.section>
    </div>
  )
}
