import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from '@/components/theme-provider'
import { MainNav } from '@/components/main-nav'
import { UserNav } from '@/components/user-nav'
import { AuthProvider } from '@/components/AuthContext'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'
import './globals.css'
import { Code, Github, Linkedin, Twitter } from 'lucide-react'
import dynamic from 'next/dynamic'

const DynamicErrorBoundary = dynamic(() => import('@/components/ErrorBoundary'), { ssr: false })

export const metadata = {
  title: 'JavaScript Basics',
  description: 'Learn and practice fundamental JavaScript concepts through interactive coding challenges',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <DynamicErrorBoundary>
              <div className="flex flex-col min-h-screen">
                <header className="border-b border-border">
                  <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                      <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2 font-mono">
                          <Code className="h-5 w-5" />
                          <span className="font-bold">codesprung.dev</span>
                        </Link>
                        <div className="hidden md:block">
                          <MainNav />
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ModeToggle />
                        <UserNav />
                      </div>
                    </div>
                    <div className="md:hidden pb-4">
                      <MainNav />
                    </div>
                  </div>
                </header>
                <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
                <footer className="border-t border-border py-8">
                  <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div className="flex items-center gap-2 font-mono">
                        <Code className="h-4 w-4" />
                        <span>codesprung.dev</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <a href="https://github.com/LeanderTimEngel/code-sprung" target="_blank" rel="noopener noreferrer" className="nav-link">
                          <Github className="h-4 w-4" />
                        </a>
                        <a href="https://www.linkedin.com/in/leander-engel/" target="_blank" rel="noopener noreferrer" className="nav-link">
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a href="https://x.com/leander_engel" target="_blank" rel="noopener noreferrer" className="nav-link">
                          <Twitter className="h-4 w-4" />
                        </a>
                      </div>
                      <div className="flex gap-4 text-sm font-mono text-muted-foreground">
                        <Link href="/privacy" className="nav-link">Datenschutz</Link>
                        <Link href="/terms" className="nav-link">AGBs</Link>
                        <Link href="/imprint" className="nav-link">Impressum</Link>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </DynamicErrorBoundary>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

