import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Commitment to Privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <p>At JavaScript Basics, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.</p>
        </CardContent>
      </Card>
      {/* Add more sections as needed */}
    </div>
  )
}

