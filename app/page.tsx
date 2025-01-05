import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code, BookOpen, Trophy, Zap, Users, Star, CheckCircle, Coffee, Brain } from 'lucide-react'

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
          One Challenge at a Time
        </h2>
      </div>
      <p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
        Interactive coding challenges, real-time feedback, and a structured learning path to take you from beginner to pro.
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild size="lg" className="bg-[#f7df1e] text-black hover:bg-[#f7df1e]/90">
          <Link href="/problems">Start Coding Now</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/approach">Learn More</Link>
        </Button>
      </div>
    </section>

    {/* Feature Highlights */}
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Code, title: 'Interactive Challenges', description: 'Hands-on coding exercises that reinforce your learning and build practical skills.', color: 'javascript' },
          { icon: Zap, title: 'Real-time Feedback', description: 'Instant test results and explanations to help you learn from your mistakes.', color: 'python' },
          { icon: BookOpen, title: 'Structured Learning Path', description: 'A carefully designed curriculum to guide you from basics to advanced concepts.', color: 'rust' },
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
      <h2 className="text-3xl font-bold text-center">Our Learning Process</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Brain, title: 'Learn', description: 'Understand key concepts through concise explanations', color: 'typescript' },
          { icon: Code, title: 'Practice', description: 'Apply your knowledge in interactive coding challenges', color: 'javascript' },
          { icon: CheckCircle, title: 'Test', description: 'Validate your solutions with our test cases', color: 'python' },
          { icon: Coffee, title: 'Master', description: 'Reinforce your skills through repetition and varied exercises', color: 'rust' },
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
      <h2 className="text-3xl font-bold text-center">What You'll Learn</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          'Variables & Data Types',
          'Operators & Expressions',
          'Control Flow',
          'Functions',
          'Arrays',
          'Objects'
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
              Master the fundamentals and advanced concepts through practical coding challenges.
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Call to Action */}
    <section className="text-center space-y-8 bg-muted py-16 rounded-lg">
      <h2 className="text-4xl font-bold">Ready to Start Your JavaScript Journey?</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Join thousands of learners who have leveled up their coding skills with us. Start your journey to JavaScript mastery today!
      </p>
      <Button asChild size="lg" className="bg-[#f7df1e] text-black hover:bg-[#f7df1e]/90">
        <Link href="/problems" className="flex items-center gap-2">
          Get Started <ArrowRight className="h-5 w-5" />
        </Link>
      </Button>
    </section>

    {/* Testimonials or Stats */}
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Our Impact</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          { icon: Trophy, title: '10,000+', description: 'Challenges Completed', color: 'javascript' },
          { icon: Users, title: '5,000+', description: 'Active Learners', color: 'python' },
          { icon: Star, title: '4.9/5', description: 'Average Rating', color: 'rust' },
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

