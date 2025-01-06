import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function ImprintPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Impressum</h1>

      {/* Firmeninformationen */}
      <Card>
        <CardHeader>
          <CardTitle>Firmeninformationen</CardTitle>
        </CardHeader>
        <CardContent>
          <p>JavaScript Basics GmbH</p>
          <p>Musterstraße 123</p>
          <p>12345 Musterstadt</p>
          <p>Land: Digitalien</p>
        </CardContent>
      </Card>

      {/* Kontakt */}
      <Card>
        <CardHeader>
          <CardTitle>Kontakt</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: kontakt@javascriptbasics.de</p>
          <p>Telefon: +49 123 456 7890</p>
        </CardContent>
      </Card>

      {/* Rechtliches */}
      <Card>
        <CardHeader>
          <CardTitle>Rechtliches</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Eingetragen in Digitalien</p>
          <p>Firmenbuchnummer: JS12345</p>
          <p>Umsatzsteuer-ID: DE123456789</p>
        </CardContent>
      </Card>

      {/* Verantwortlich für den Inhalt */}
      <Card>
        <CardHeader>
          <CardTitle>Verantwortlich für den Inhalt</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Max Mustermann, Geschäftsführer</p>
          <p>JavaScript Basics GmbH</p>
          <p>Musterstraße 123, 12345 Musterstadt</p>
        </CardContent>
      </Card>

      {/* Haftungsausschluss */}
      <Card>
        <CardHeader>
          <CardTitle>Haftungsausschluss</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </CardContent>
      </Card>

      {/* Urheberrecht */}
      <Card>
        <CardHeader>
          <CardTitle>Urheberrecht</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

