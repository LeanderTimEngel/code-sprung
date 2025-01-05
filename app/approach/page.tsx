'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Code, Zap, Users, BarChart, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const topics = [
  {
    title: 'Variables and Data Types',
    description: 'Learn about declaring variables and understanding different data types in JavaScript.',
    approach: 'Start with the basics of creating and using variables, then explore various data types like numbers, strings, and booleans.',
    icon: Code,
  },
  {
    title: 'Operators and Expressions',
    description: 'Explore arithmetic, comparison, and logical operators to create expressions.',
    approach: 'Practice using different operators to perform calculations and make comparisons. Focus on operator precedence and how to combine operators effectively.',
    icon: Zap,
  },
  {
    title: 'Control Flow',
    description: 'Master if-else statements and loops to control the flow of your programs.',
    approach: 'Begin with simple if-else statements, then progress to more complex conditions. Introduce loops (for, while) and practice solving problems that require iteration.',
    icon: ArrowRight,
  },
  {
    title: 'Functions',
    description: 'Learn to create and use functions to organize and reuse your code.',
    approach: 'Start with basic function declarations, then move on to function expressions and arrow functions. Practice writing functions with parameters and return values.',
    icon: BookOpen,
  },
  {
    title: 'Arrays',
    description: 'Discover how to work with collections of data using arrays.',
    approach: 'Begin with array creation and basic operations. Progress to array methods like map, filter, and reduce. Practice solving problems that involve manipulating arrays.',
    icon: BarChart,
  },
  {
    title: 'Objects',
    description: 'Understand the basics of objects and how to use them in JavaScript.',
    approach: 'Start with creating and accessing object properties. Move on to methods, this keyword, and object prototypes. Practice creating and manipulating complex data structures using objects.',
    icon: Users,
  },
]

export default function ApproachPage() {
  return (
    <div className="space-y-12 py-8">
      <section className="text-center space-y-4">
        <motion.h1 
          className="text-4xl font-extrabold tracking-tight lg:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Learning Approach
        </motion.h1>
        <motion.p 
          className="mx-auto max-w-[700px] text-lg text-muted-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At JavaScript Basics, we believe in a structured, hands-on approach to learning. 
          Our method is designed to take you from beginner to pro through carefully crafted lessons and practical exercises.
        </motion.p>
      </section>

      <motion.section 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {topics.map((topic, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary rounded-md">
                  <topic.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>{topic.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-4">{topic.description}</CardDescription>
              <p className="text-sm">{topic.approach}</p>
            </CardContent>
          </Card>
        ))}
      </motion.section>

      <motion.section 
        className="bg-secondary p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Our Method</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Introduce concepts with clear explanations",
            "Provide interactive coding challenges",
            "Offer immediate feedback through tests",
            "Reinforce learning with video explanations",
            "Encourage application in real-world scenarios"
          ].map((step, index) => (
            <div key={index} className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <p>{step}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold">Ready to Start Your JavaScript Journey?</h2>
        <p className="text-muted-foreground">
          Join thousands of learners who have leveled up their coding skills with us.
        </p>
        <Button asChild size="lg" className="mt-4">
          <Link href="/problems">
            Start Coding Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.section>
    </div>
  )
}

