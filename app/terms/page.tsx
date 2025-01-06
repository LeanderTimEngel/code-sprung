import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function NutzungsbedingungenPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Nutzungsbedingungen</h1>
      <Card>
        <CardHeader>
          <CardTitle>Annahme der Bedingungen</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Durch den Zugriff auf und die Nutzung von JavaScript Basics erklären Sie sich mit diesen Nutzungsbedingungen und allen geltenden Gesetzen und Vorschriften einverstanden.</p>
        </CardContent>
      </Card>
      {/* Weitere Abschnitte hinzufügen nach Bedarf */}
    </div>
  )
}
