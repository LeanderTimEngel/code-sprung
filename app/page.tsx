import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code, BookOpen, Trophy, Zap, Users, Star, CheckCircle, Coffee, Brain } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="space-y-20 py-10">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
            Master <span className="text-tech javascript">JavaScript</span>
          </h1>
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Eine Herausforderung nach der anderen
          </h2>
        </div>
        <p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
          Interaktive Coding-Challenges, Echtzeit-Feedback und ein strukturierter Lernpfad, der dich vom Anfänger zum Profi bringt.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-[#f7df1e] text-black hover:bg-[#f7df1e]/90">
            <Link href="/problems">Jetzt Programmieren Starten</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/approach">Mehr Erfahren</Link>
          </Button>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Warum uns wählen?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Code, title: 'Interaktive Herausforderungen', description: 'Praktische Coding-Übungen, die dein Lernen vertiefen und praktische Fähigkeiten aufbauen.', color: 'javascript' },
            { icon: Zap, title: 'Echtzeit-Feedback', description: 'Sofortige Testergebnisse und Erklärungen, die dir helfen, aus deinen Fehlern zu lernen.', color: 'python' },
            { icon: BookOpen, title: 'Strukturierter Lernpfad', description: 'Ein sorgfältig entwickelter Lehrplan, der dich von den Grundlagen zu fortgeschrittenen Konzepten führt.', color: 'rust' },
          ].map((feature, index) => (
            <Card key={index} className="border-2 border-muted">
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 text-tech ${feature.color}`}>
                  <feature.icon className="h-5 w-5" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning Process */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Unser Lernprozess</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Brain, title: 'Lernen', description: 'Verstehe Schlüsselkonzepte durch prägnante Erklärungen', color: 'typescript' },
            { icon: Code, title: 'Praktizieren', description: 'Wende dein Wissen in interaktiven Coding-Challenges an', color: 'javascript' },
            { icon: CheckCircle, title: 'Testen', description: 'Validiere deine Lösungen mit unseren Testfällen', color: 'python' },
            { icon: Coffee, title: 'Meistern', description: 'Verstärke deine Fähigkeiten durch Wiederholung und vielfältige Übungen', color: 'rust' },
          ].map((step, index) => (
            <Card key={index} className="border-2 border-muted">
              <CardHeader>
                <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4`}>
                  <step.icon className={`h-6 w-6 text-tech ${step.color}`} />
                </div>
                <CardTitle className={`text-tech ${step.color}`}>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Topics Overview */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Was du lernen wirst</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            'Variablen & Datentypen',
            'Operatoren & Ausdrücke',
            'Kontrollfluss',
            'Funktionen',
            'Arrays',
            'Objekte'
          ].map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 border-muted">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-tech javascript font-bold">{index + 1}</span>
                  </div>
                  {topic}
                </CardTitle>
              </CardHeader>
              <CardContent>
                Beherrsche die Grundlagen und fortgeschrittenen Konzepte durch praktische Coding-Challenges.
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-8 bg-muted py-16 rounded-lg">
        <h2 className="text-4xl font-bold">Bereit, deine JavaScript-Reise zu beginnen?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tritt tausenden von Lernenden bei, die ihre Programmierfähigkeiten mit uns verbessert haben. Starte noch heute deine Reise zur JavaScript-Meisterschaft!
        </p>
        <Button asChild size="lg" className="bg-[#f7df1e] text-black hover:bg-[#f7df1e]/90">
          <Link href="/problems" className="flex items-center gap-2">
            Loslegen <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </section>

      {/* Testimonials or Stats */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Unser Einfluss</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Trophy, title: '10.000+', description: 'Herausforderungen abgeschlossen', color: 'javascript' },
            { icon: Users, title: '5.000+', description: 'Aktive Lernende', color: 'python' },
            { icon: Star, title: '4,9/5', description: 'Durchschnittliche Bewertung', color: 'rust' },
          ].map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-2 border-muted">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <stat.icon className={`h-8 w-8 text-tech ${stat.color}`} />
                  <span className={`text-4xl font-bold text-tech ${stat.color}`}>{stat.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">{stat.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
