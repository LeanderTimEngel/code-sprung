'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, BookOpen, Code, Globe, Video, FileText, Users } from 'lucide-react'
import Link from 'next/link'

interface Resource {
  title: string;
  description: string;
  url: string;
  type: string;
  icon: React.ElementType;
}

const resources = [
  {
    title: 'MDN Web Docs',
    description: 'Umfassende Dokumentation für Webtechnologien, einschließlich JavaScript.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    type: 'Dokumentation',
    icon: FileText,
  },
  {
    title: 'JavaScript.info',
    description: 'Modernes JavaScript-Tutorial mit einfachen Erklärungen und praktischen Beispielen.',
    url: 'https://javascript.info/',
    type: 'Tutorial',
    icon: BookOpen,
  },
  {
    title: 'freeCodeCamp',
    description: 'Kostenloses Coding-Bootcamp mit umfangreichem JavaScript-Lehrplan.',
    url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
    type: 'Kurs',
    icon: Code,
  },
  {
    title: 'Eloquent JavaScript',
    description: 'Ein umfassendes Buch über JavaScript, kostenlos online verfügbar.',
    url: 'https://eloquentjavascript.net/',
    type: 'Buch',
    icon: BookOpen,
  },
  {
    title: 'JavaScript30',
    description: '30-tägige Vanilla JS Coding Challenge von Wes Bos.',
    url: 'https://javascript30.com/',
    type: 'Herausforderung',
    icon: Code,
  },
  {
    title: 'You Don\'t Know JS',
    description: 'Eine Buchreihe, die tief in die Kernmechanismen von JavaScript eintaucht.',
    url: 'https://github.com/getify/You-Dont-Know-JS',
    type: 'Buch',
    icon: BookOpen,
  },
  {
    title: 'JavaScript: Understanding the Weird Parts',
    description: 'Ein fortgeschrittener JavaScript-Kurs auf Udemy.',
    url: 'https://www.udemy.com/course/understand-javascript/',
    type: 'Kurs',
    icon: Video,
  },
  {
    title: 'JavaScript Weekly',
    description: 'Ein wöchentlicher E-Mail-Rundbrief mit JavaScript-Nachrichten und Artikeln.',
    url: 'https://javascriptweekly.com/',
    type: 'Newsletter',
    icon: Globe,
  },
  {
    title: 'Stack Overflow',
    description: 'Q&A-Plattform für Entwickler, um JavaScript-Fragen zu stellen und zu beantworten.',
    url: 'https://stackoverflow.com/questions/tagged/javascript',
    type: 'Gemeinschaft',
    icon: Users,
  },
]

function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-2 flex-wrap">
              <div className="p-2 bg-primary rounded-md">
                <resource.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg sm:text-xl">{resource.title}</CardTitle>
            </div>
            <Badge className="whitespace-nowrap">{resource.type}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <CardDescription className="mb-4 text-sm sm:text-base">{resource.description}</CardDescription>
          <Button asChild variant="outline" className="w-full mt-4">
            <Link 
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <span className="text-sm sm:text-base">Ressource besuchen</span>
              <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ResourcesPage() {
  const [error, setError] = useState<Error | null>(null)

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="space-y-8 sm:space-y-12 py-4 sm:py-8 px-4 sm:px-8">
      <section className="text-center space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">
          JavaScript Lernressourcen
        </h1>
        <p className="mx-auto max-w-[700px] text-base sm:text-lg text-muted-foreground px-2">
          Erkunde unsere sorgfältig zusammengestellte Sammlung hochwertiger Ressourcen, um deine JavaScript-Lernreise zu verbessern.
        </p>
      </section>

      <section className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} index={index} />
        ))}
      </section>

      <section className="bg-secondary p-4 sm:p-8 rounded-lg text-center space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold">Kannst du nicht finden, wonach du suchst?</h2>
        <p className="text-sm sm:text-base text-muted-foreground px-2">
          Unser Team aktualisiert diese Liste ständig mit den besten JavaScript-Ressourcen. 
          Wenn du einen Vorschlag hast, würden wir gerne von dir hören!
        </p>
        <Button asChild size="lg" className="mt-4">
          <Link href="/contact" className="flex items-center justify-center text-sm sm:text-base">
            Ressource vorschlagen <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
