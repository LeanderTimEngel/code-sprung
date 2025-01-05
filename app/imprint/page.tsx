import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ImprintPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Imprint</h1>
      <Card>
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>JavaScript Basics Ltd.</p>
          <p>123 Coding Street</p>
          <p>Web City, Internet 12345</p>
          <p>Country: Digital Land</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: contact@javascriptbasics.com</p>
          <p>Phone: +1 234 567 890</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Legal</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Registered in Digital Land</p>
          <p>Company Registration Number: JS12345</p>
          <p>VAT ID: DE123456789</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Responsible for Content</CardTitle>
        </CardHeader>
        <CardContent>
          <p>John Doe, CEO</p>
          <p>JavaScript Basics Ltd.</p>
          <p>123 Coding Street, Web City, Internet 12345</p>
        </CardContent>
      </Card>
    </div>
  )
}

