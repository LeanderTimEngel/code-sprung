'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, BookOpen, Code, Globe, Video, FileText, Users } from 'lucide-react'
import Link from 'next/link'

const resources = [
  {
    title: 'MDN Web Docs',
    description: 'Comprehensive documentation for web technologies, including JavaScript.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    type: 'Documentation',
    icon: FileText,
  },
  {
    title: 'JavaScript.info',
    description: 'Modern JavaScript tutorial with simple explanations and practical examples.',
    url: 'https://javascript.info/',
    type: 'Tutorial',
    icon: BookOpen,
  },
  {
    title: 'freeCodeCamp',
    description: 'Free coding bootcamp with an extensive JavaScript curriculum.',
    url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
    type: 'Course',
    icon: Code,
  },
  {
    title: 'Eloquent JavaScript',
    description: 'A comprehensive book on JavaScript, available for free online.',
    url: 'https://eloquentjavascript.net/',
    type: 'Book',
    icon: BookOpen,
  },
  {
    title: 'JavaScript30',
    description: '30 Day Vanilla JS Coding Challenge by Wes Bos.',
    url: 'https://javascript30.com/',
    type: 'Challenge',
    icon: Code,
  },
  {
    title: 'You Don\'t Know JS',
    description: 'A book series diving deep into the core mechanisms of JavaScript.',
    url: 'https://github.com/getify/You-Dont-Know-JS',
    type: 'Book',
    icon: BookOpen,
  },
  {
    title: 'JavaScript: Understanding the Weird Parts',
    description: 'An advanced JavaScript course on Udemy.',
    url: 'https://www.udemy.com/course/understand-javascript/',
    type: 'Course',
    icon: Video,
  },
  {
    title: 'JavaScript Weekly',
    description: 'A weekly email roundup of JavaScript news and articles.',
    url: 'https://javascriptweekly.com/',
    type: 'Newsletter',
    icon: Globe,
  },
  {
    title: 'Stack Overflow',
    description: 'Q&A platform for developers to ask and answer JavaScript questions.',
    url: 'https://stackoverflow.com/questions/tagged/javascript',
    type: 'Community',
    icon: Users,
  },
]

function ResourceCard({ resource, index }) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-md">
                <resource.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle>{resource.title}</CardTitle>
            </div>
            <Badge>{resource.type}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <CardDescription className="mb-4">{resource.description}</CardDescription>
          <Button asChild variant="outline" className="w-full mt-4">
            <Link 
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Visit Resource <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ResourcesPage() {
  const [error, setError] = useState(null)

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
      <div className="space-y-12 py-8">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            JavaScript Learning Resources
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
            Explore our curated collection of high-quality resources to enhance your JavaScript learning journey.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} index={index} />
          ))}
        </section>

        <section className="bg-secondary p-8 rounded-lg text-center space-y-4">
          <h2 className="text-2xl font-bold">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground">
            Our team is constantly updating this list with the best JavaScript resources. 
            If you have a suggestion, we'd love to hear from you!
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">
              Suggest a Resource <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
      </div>
  )
}

