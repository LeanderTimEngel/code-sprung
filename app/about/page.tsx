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
        <h1 className="text-4xl font-bold mb-4">About JavaScript Basics</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn and practice fundamental JavaScript concepts through interactive coding challenges.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              JavaScript Basics is dedicated to helping beginners learn the core concepts of JavaScript
              through hands-on practice. Our platform offers a series of carefully crafted coding
              challenges that cover the most important aspects of JavaScript programming.
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
            <CardTitle>What You'll Learn</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Variables and Data Types</li>
              <li>Operators and Expressions</li>
              <li>Control Flow (if-else statements, loops)</li>
              <li>Functions</li>
              <li>Arrays</li>
              <li>Objects</li>
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
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Choose a challenge from our list of problems</li>
              <li>Read the problem description and explanation</li>
              <li>Write your JavaScript code in the provided editor</li>
              <li>Run the tests to check your solution</li>
              <li>Learn from the feedback and improve your code</li>
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
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Ready to begin your JavaScript journey? Head over to the Challenges page and start
              coding! Don't forget to track your progress on the My Progress page.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

