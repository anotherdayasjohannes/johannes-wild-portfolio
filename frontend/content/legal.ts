import type { LegalSection } from "./types";

// Entwurf für eine private, nicht kommerzielle Seite mit einem kleinen kostenlosen
// Werkzeug. Keine Rechtsberatung. Kontaktdaten hier zentral pflegen.

export const legalContact = {
  name: "Johannes Wild",
  street: "Bahnhofstraße 11",
  city: "83677 Reichersbeuern",
  country: "Deutschland",
  email: "johannes.wild@me.com",
  phone: "+49 171 9319346",
};

export const legalUpdated = "Stand: September 2026";

const host = {
  name: "Vercel Inc.",
  address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
  privacyUrl: "https://vercel.com/legal/privacy-policy",
};

const authority = {
  name: "Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)",
  address: "Promenade 18, 91522 Ansbach",
  email: "poststelle@lda.bayern.de",
  url: "https://www.lda.bayern.de",
};

const addressLine = `${legalContact.name}, ${legalContact.street}, ${legalContact.city}, ${legalContact.country}`;

export const impressum = {
  title: "Impressum",
  intro: "Angaben gemäß § 5 DDG und § 18 Abs. 2 MStV.",
  sections: [
    {
      heading: "Anbieter",
      paragraphs: [
        legalContact.name,
        legalContact.street,
        legalContact.city,
        legalContact.country,
      ],
    },
    {
      heading: "Kontakt",
      paragraphs: [
        `E-Mail: ${legalContact.email}`,
        `Telefon: ${legalContact.phone}`,
      ],
    },
    {
      heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      paragraphs: [addressLine],
    },
    {
      heading: "Art der Seite",
      paragraphs: [
        "Diese Website ist ein privates, nicht kommerzielles Angebot. Sie stellt die Person Johannes Wild vor und informiert über ein kostenlos bereitgestelltes Werkzeug für Vereinstrainerinnen und -trainer. Es werden keine Waren oder Dienstleistungen angeboten, eine Umsatzsteuer-Identifikationsnummer besteht nicht.",
      ],
    },
    {
      heading: "Bildnachweis",
      paragraphs: [
        "Fotografien: Bernhard Huber, bernhardhuber.com. Die Nutzung auf dieser Website erfolgt mit Lizenz des Fotografen.",
      ],
    },
    {
      heading: "Haftung für Inhalte",
      paragraphs: [
        "Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
        "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.",
      ],
    },
    {
      heading: "Haftung für Links",
      paragraphs: [
        "Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
        "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.",
      ],
    },
    {
      heading: "Urheberrecht",
      paragraphs: [
        "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
        "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.",
      ],
    },
    {
      heading: "Verbraucherstreitbeilegung",
      paragraphs: [
        "Als Betreiber einer privaten Website bin ich nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      ],
    },
  ] satisfies LegalSection[],
};

export const datenschutz = {
  title: "Datenschutzerklärung",
  intro:
    "Diese Erklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden, zu welchem Zweck und welche Rechte Sie haben.",
  sections: [
    {
      heading: "1. Verantwortlicher",
      paragraphs: [
        "Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
        addressLine,
        `E-Mail: ${legalContact.email}, Telefon: ${legalContact.phone}`,
        "Ein Datenschutzbeauftragter ist nicht bestellt, da keine gesetzliche Pflicht dazu besteht.",
      ],
    },
    {
      heading: "2. Überblick",
      paragraphs: [
        "Diese Website ist ein privates, nicht kommerzielles Angebot. Sie setzt keine Cookies, verwendet keine Analyse-, Tracking- oder Werbedienste und bindet keine Inhalte von Drittanbietern ein, die beim Aufruf Daten übertragen. Personenbezogene Daten fallen nur in dem Umfang an, der für den technischen Betrieb notwendig ist, sowie dann, wenn Sie selbst Kontakt aufnehmen.",
      ],
    },
    {
      heading: "3. Hosting und Server-Logdateien",
      paragraphs: [
        `Die Website wird bei ${host.name}, ${host.address}, gehostet. Beim Aufruf einer Seite verarbeitet der Hoster automatisch Informationen, die Ihr Browser übermittelt, und speichert sie in Server-Logdateien. Dazu gehören:`,
      ],
      items: [
        "IP-Adresse des anfragenden Geräts",
        "Datum und Uhrzeit der Anfrage",
        "aufgerufene Seite bzw. Datei und übertragene Datenmenge",
        "Referrer-URL, sofern vom Browser übermittelt",
        "Browsertyp und -version, Betriebssystem (User Agent)",
      ],
    },
    {
      heading: "3.1 Zweck und Rechtsgrundlage",
      paragraphs: [
        "Die Verarbeitung dient der Auslieferung der Website, der Sicherstellung von Stabilität und Sicherheit sowie der Abwehr von Angriffen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und funktionsfähigen Betrieb der Website. Die Logdaten werden nicht mit anderen Datenquellen zusammengeführt und nicht zur Identifizierung einzelner Personen ausgewertet.",
      ],
    },
    {
      heading: "3.2 Auftragsverarbeitung und Drittlandtransfer",
      paragraphs: [
        `Mit ${host.name} besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO. Da der Anbieter seinen Sitz in den USA hat, kann eine Verarbeitung außerhalb der EU stattfinden. Die Übermittlung ist abgesichert durch die Zertifizierung des Anbieters unter dem EU-US Data Privacy Framework (Angemessenheitsbeschluss der EU-Kommission nach Art. 45 DSGVO) sowie ergänzend durch die Standardvertragsklauseln der EU-Kommission nach Art. 46 Abs. 2 lit. c DSGVO. Die Auslieferung erfolgt in der Regel über Server innerhalb der EU.`,
        `Weitere Informationen: ${host.privacyUrl}`,
      ],
    },
    {
      heading: "3.3 Speicherdauer",
      paragraphs: [
        "Server-Logdateien werden vom Hoster für einen begrenzten Zeitraum vorgehalten und anschließend automatisch gelöscht. Eine darüber hinausgehende Speicherung findet nicht statt.",
      ],
    },
    {
      heading: "4. Cookies und Analyse",
      paragraphs: [
        "Diese Website setzt keine Cookies. Es kommen keine Webanalyse-Dienste, kein Tracking, keine Werbenetzwerke und keine Social-Media-Plugins zum Einsatz. Ein Einwilligungsbanner ist deshalb nicht erforderlich.",
      ],
    },
    {
      heading: "5. Schriften",
      paragraphs: [
        "Die verwendeten Schriften werden lokal von dieser Website ausgeliefert. Beim Aufruf wird keine Verbindung zu Google Fonts oder anderen Schriftanbietern aufgebaut, es werden keine Daten an solche Anbieter übertragen.",
      ],
    },
    {
      heading: "6. Kontaktaufnahme per E-Mail",
      paragraphs: [
        "Diese Website enthält kein Kontaktformular. Wenn Sie mir per E-Mail schreiben, werden Ihre Angaben (E-Mail-Adresse, Name, Inhalt der Nachricht, Zeitpunkt) zur Bearbeitung der Anfrage und für mögliche Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage auf die Anbahnung oder Durchführung eines Vertrags gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO auf Grundlage meines berechtigten Interesses an der Beantwortung von Anfragen.",
        "Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Eine Weitergabe an Dritte erfolgt nicht. Bitte beachten Sie, dass unverschlüsselte E-Mails auf dem Übertragungsweg nicht vollständig gegen Einsichtnahme geschützt sind.",
      ],
    },
    {
      heading: "7. Externe Links",
      paragraphs: [
        "Die Website verlinkt auf externe Angebote, insbesondere auf mein Profil bei LinkedIn (LinkedIn Ireland Unlimited Company) und auf Quellcode bei GitHub (GitHub, Inc.). Es handelt sich um einfache Verweise ohne eingebettete Inhalte. Beim Aufruf dieser Website werden keine Daten an diese Anbieter übertragen. Erst wenn Sie einem Link folgen, gelten die Datenschutzbestimmungen des jeweiligen Anbieters.",
      ],
    },
    {
      heading: "8. SCR Trainer-Abrechnung",
      paragraphs: [
        "Die auf dieser Website vorgestellte App SCR Trainer-Abrechnung läuft vollständig im Browser des eigenen Geräts. Alle Eingaben werden ausschließlich im lokalen Speicher des Browsers (localStorage) abgelegt. Es gibt keinen Server, kein Nutzerkonto und keine Übertragung der eingegebenen Daten an mich oder an Dritte. Werden der Browser-Speicher gelöscht oder die App entfernt, sind auch die erfassten Daten gelöscht.",
      ],
    },
    {
      heading: "9. Ihre Rechte",
      paragraphs: [
        "Sie haben gegenüber mir als Verantwortlichem folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:",
      ],
      items: [
        "Recht auf Auskunft (Art. 15 DSGVO)",
        "Recht auf Berichtigung (Art. 16 DSGVO)",
        "Recht auf Löschung (Art. 17 DSGVO)",
        "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
        "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
        "Recht auf Widerspruch gegen Verarbeitungen, die auf Art. 6 Abs. 1 lit. f DSGVO beruhen (Art. 21 DSGVO)",
      ],
    },
    {
      heading: "10. Beschwerderecht bei der Aufsichtsbehörde",
      paragraphs: [
        "Unbeschadet anderer Rechtsbehelfe haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig für mich ist:",
        `${authority.name}, ${authority.address}, E-Mail: ${authority.email}, ${authority.url}`,
      ],
    },
    {
      heading: "11. Sicherheit",
      paragraphs: [
        "Die Übertragung zwischen Ihrem Browser und dieser Website ist per TLS (HTTPS) verschlüsselt.",
      ],
    },
    {
      heading: "12. Änderungen",
      paragraphs: [
        "Diese Datenschutzerklärung wird angepasst, wenn sich die Website oder die rechtlichen Anforderungen ändern. Es gilt die jeweils hier veröffentlichte Fassung.",
        legalUpdated,
      ],
    },
  ] satisfies LegalSection[],
};
