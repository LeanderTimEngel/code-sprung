import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Congratulations() {
  return (
    <Card className="bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-gray-100">Congratulations!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You've completed all the challenges! Great job on your progress in learning JavaScript.
        </p>
        <Link href="/problems">
          <Button className="w-full">Return to All Challenges</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

