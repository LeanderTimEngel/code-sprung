import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsOfServicePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <Card>
        <CardHeader>
          <CardTitle>Acceptance of Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <p>By accessing and using JavaScript Basics, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
        </CardContent>
      </Card>
      {/* Add more sections as needed */}
    </div>
  )
}

