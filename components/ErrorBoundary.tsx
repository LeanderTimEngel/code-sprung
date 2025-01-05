'use client'

import React, { ErrorInfo, ReactNode } from 'react'
import { Button } from '@/components/ui/button'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-10">
          <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h1>
          <p className="text-red-500 mb-4">{this.state.error?.message}</p>
          <Button onClick={() => this.setState({ hasError: false })}>Try again</Button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

