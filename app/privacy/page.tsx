import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Datenschutzerklärung</h1>

      {/* Einleitung */}
      <Card>
        <CardHeader>
          <CardTitle>Unser Engagement für den Datenschutz</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Bei JavaScript Basics nehmen wir den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten sammeln, verwenden und schützen.
          </p>
        </CardContent>
      </Card>

      {/* Verantwortlicher für die Datenverarbeitung */}
      <Card>
        <CardHeader>
          <CardTitle>Verantwortlicher für die Datenverarbeitung</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            JavaScript Basics GmbH<br />
            Musterstraße 123<br />
            12345 Musterstadt<br />
            Deutschland<br />
            Email: datenschutz@javascriptbasics.de<br />
            Telefon: +49 123 456 7890
          </p>
        </CardContent>
      </Card>

      {/* Welche Daten wir sammeln */}
      <Card>
        <CardHeader>
          <CardTitle>Welche Daten wir sammeln</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Wir sammeln folgende Arten von personenbezogenen Daten:
          </p>
          <ul className="list-disc pl-6">
            <li>Kontaktdaten wie Name, E-Mail-Adresse und Telefonnummer.</li>
            <li>Nutzungsdaten wie IP-Adresse, Browsertyp und Zugriffszeiten.</li>
            <li>Benutzerdaten wie gelöste Probleme und Fortschritte.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Wie wir Daten verwenden */}
      <Card>
        <CardHeader>
          <CardTitle>Wie wir Daten verwenden</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Wir verwenden Ihre Daten, um:
          </p>
          <ul className="list-disc pl-6">
            <li>Unsere Dienste bereitzustellen und zu verbessern.</li>
            <li>Ihre Anfragen zu bearbeiten und mit Ihnen zu kommunizieren.</li>
            <li>Ihre Fortschritte zu verfolgen und personalisierte Lerninhalte anzubieten.</li>
            <li>Statistiken zu erstellen und unsere Plattform zu analysieren.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Weitergabe von Daten */}
      <Card>
        <CardHeader>
          <CardTitle>Weitergabe von Daten</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Wir geben Ihre personenbezogenen Daten nur in folgenden Fällen weiter:
          </p>
          <ul className="list-disc pl-6">
            <li>Wenn es gesetzlich vorgeschrieben ist.</li>
            <li>Um unsere Rechte zu schützen.</li>
            <li>Mit Ihrer ausdrücklichen Zustimmung.</li>
            <li>An vertrauenswürdige Drittanbieter, die uns bei der Bereitstellung unserer Dienste unterstützen.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Datensicherheit */}
      <Card>
        <CardHeader>
          <CardTitle>Datensicherheit</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Wir setzen angemessene technische und organisatorische Maßnahmen ein, um Ihre personenbezogenen Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen.
          </p>
        </CardContent>
      </Card>

      {/* Cookies und Tracking-Technologien */}
      <Card>
        <CardHeader>
          <CardTitle>Cookies und Tracking-Technologien</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Unsere Website verwendet Cookies und ähnliche Tracking-Technologien, um Ihre Benutzererfahrung zu verbessern und unsere Dienste zu analysieren. Sie können die Verwendung von Cookies in Ihren Browsereinstellungen deaktivieren, beachten Sie jedoch, dass dies die Funktionalität unserer Website beeinträchtigen kann.
          </p>
        </CardContent>
      </Card>

      {/* Rechte der Nutzer */}
      <Card>
        <CardHeader>
          <CardTitle>Rechte der Nutzer</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Sie haben das Recht:
          </p>
          <ul className="list-disc pl-6">
            <li>Auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten.</li>
            <li>Die Berichtigung unrichtiger Daten zu verlangen.</li>
            <li>Die Löschung Ihrer Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</li>
            <li>Die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen.</li>
            <li>Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
            <li>Ihre Einwilligung jederzeit zu widerrufen.</li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte können Sie uns unter den oben angegebenen Kontaktdaten erreichen.
          </p>
        </CardContent>
      </Card>

      {/* Änderungen der Datenschutzerklärung */}
      <Card>
        <CardHeader>
          <CardTitle>Änderungen der Datenschutzerklärung</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Änderungen werden auf dieser Seite veröffentlicht. Bitte überprüfen Sie regelmäßig diese Datenschutzerklärung, um über Änderungen informiert zu bleiben.
          </p>
        </CardContent>
      </Card>

      {/* Kontakt zur Datenschutzanfrage */}
      <Card>
        <CardHeader>
          <CardTitle>Kontakt zur Datenschutzanfrage</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Wenn Sie Fragen zu dieser Datenschutzerklärung haben oder Ihre Rechte ausüben möchten, können Sie uns wie folgt kontaktieren:
          </p>
          <p>Email: datenschutz@javascriptbasics.de</p>
          <p>Telefon: +49 123 456 7890</p>
        </CardContent>
      </Card>
    </div>
  )
}

