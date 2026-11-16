// Begriffe aus Vertrieb, Marketing, E-Commerce, ERP und KI – erklärt für den Fahrradhandel.
// Jeder Eintrag: Begriff, Zusatz (englisch/Abkürzung), Bereich, Erklärung, Beispiel, Prompt, verwandte Begriffe.
// Beispiele sind fiktiv und anonymisiert. In Prompts gehören keine echten Kundendaten.
(() => {
const begriffe = [
  // Kunde & Marketing
  {name:'Persona', alias:'Buyer Persona', bereich:'Kunde & Marketing',
   erklaerung:'Ein erfundener, aber realistischer Steckbrief einer typischen Kundin oder eines typischen Kunden: Alter, Alltag, Ziele, Sorgen, Kaufgründe. Hilft, Texte, Beratung und Angebote gezielt auf echte Bedürfnisse auszurichten.',
   beispiel:'„Pendler-Paul“, 42, fährt 18 km zur Arbeit, möchte nicht verschwitzt ankommen, interessiert sich für Dienstrad-Leasing und fürchtet Diebstahl. Für ihn zählen Reichweite, Schloss-Konzept und schneller Service.',
   prompt:'Du bist Marketing-Experte für einen Fahrrad- und E-Bike-Händler mit Werkstatt. Erstelle 4 Personas für unsere wichtigsten Zielgruppen: [z. B. Pendler, Familien mit Lastenrad, sportliche E-MTB-Fahrer, Senioren]. Gib pro Persona an: Name, Alter, Alltag, Ziele, Sorgen, typische Fragen im Laden, bevorzugte Kanäle, Kaufauslöser und einen Satz, der sie überzeugt. Antworte als Tabelle. Markiere Annahmen, die wir mit echten Daten prüfen sollten.',
   verwandt:['Zielgruppe','Customer Journey','USP']},
  {name:'Customer Journey', alias:'Kundenreise', bereich:'Kunde & Marketing',
   erklaerung:'Der gesamte Weg einer Person vom ersten Gedanken an ein neues Rad bis nach dem Kauf: Inspiration, Recherche, Beratung, Kauf, Nutzung, Service, Wiederkauf oder Empfehlung. Wer die Reise kennt, sieht, wo Kunden abspringen.',
   beispiel:'Instagram-Video zum Lastenrad → Vergleich auf der Website → Probefahrt-Termin online buchen → Beratung im Laden → Kauf mit Leasing → Erstinspektion nach 6 Wochen → Bewertung bei Google → Zubehörkauf im Frühjahr.',
   prompt:'Skizziere die Customer Journey für [Persona, z. B. Familie, die ein E-Lastenrad sucht] bei einem Fahrradhändler mit Onlineshop und Filialen. Gliedere in Phasen (Inspiration, Recherche, Beratung, Kauf, Übergabe, Nutzung, Service, Empfehlung). Nenne pro Phase: Touchpoints, Fragen und Gefühle der Kunden, typische Abbruchgründe und eine konkrete Verbesserung, die wir mit KI oder Automatisierung umsetzen könnten. Ausgabe als Tabelle.',
   verwandt:['Touchpoint','Persona','Funnel']},
  {name:'Touchpoint', alias:'Kontaktpunkt', bereich:'Kunde & Marketing',
   erklaerung:'Jede Stelle, an der jemand mit dem Betrieb in Berührung kommt: Website, Anzeige, Telefon, Schaufenster, Beratung, Rechnung, Werkstatt-SMS, Bewertung. Jeder Kontaktpunkt prägt das Gesamtbild.',
   beispiel:'Die automatische Nachricht „Dein Rad ist abholbereit“ ist ein Touchpoint. Klingt sie freundlich und nennt Öffnungszeiten und Rechnungsbetrag, spart das Rückfragen am Telefon.',
   prompt:'Liste alle Touchpoints auf, die ein Kunde bei einem Fahrradhändler vom ersten Kontakt bis zur Inspektion nach einem Jahr hat (online und offline). Bewerte jeden nach Wichtigkeit für die Kaufentscheidung (hoch/mittel/niedrig) und schlage für die 5 wichtigsten je eine schnelle Verbesserung vor.',
   verwandt:['Customer Journey','Omnichannel']},
  {name:'Zielgruppe', alias:'Segmentierung', bereich:'Kunde & Marketing',
   erklaerung:'Eine Gruppe von Menschen mit ähnlichen Merkmalen und Bedürfnissen, die man gezielt anspricht. Segmentierung heißt, den Kundenstamm in solche Gruppen aufzuteilen, etwa nach Radtyp, Kaufhistorie oder Wohnort.',
   beispiel:'Ein Newsletter nur an Kunden, die in den letzten 2 Jahren ein E-Bike gekauft haben: Hinweis auf den Akku-Check vor dem Winter. Wer ein Rennrad hat, bekommt stattdessen Infos zu Rollentrainern.',
   prompt:'Schlage 6 sinnvolle Kundensegmente für einen Fahrrad- und E-Bike-Händler vor, die wir aus ERP- und Shopdaten bilden können (z. B. Radtyp, Kaufdatum, Werkstattbesuche, Bestellwert). Nenne pro Segment die Datenfelder, die wir brauchen, ein passendes Angebot und den besten Kanal. Hinweis: Wir arbeiten DSGVO-konform und nur mit Einwilligung für Werbung.',
   verwandt:['Persona','Newsletter','DSGVO']},
  {name:'USP', alias:'Unique Selling Proposition', bereich:'Kunde & Marketing',
   erklaerung:'Das Alleinstellungsmerkmal: der Grund, warum jemand gerade bei euch kauft und nicht beim Online-Discounter oder Mitbewerber. Ein guter USP ist konkret und für Kunden spürbar.',
   beispiel:'„Probefahrt auf eurer Pendelstrecke, Werkstatttermin innerhalb von 48 Stunden für alle bei uns gekauften Räder.“ Das ist greifbarer als „Top-Service“.',
   prompt:'Hilf mir, die USPs eines regionalen Fahrrad- und E-Bike-Händlers mit mehreren Filialen und eigener Werkstatt herauszuarbeiten. Stelle mir zuerst 8 Fragen zu unseren Stärken. Formuliere danach 5 USP-Varianten in je einem Satz und bewerte, wie gut sie sich gegen Onlinehändler abgrenzen.',
   verwandt:['Persona','Landingpage']},
  {name:'Funnel', alias:'Marketing-/Verkaufstrichter', bereich:'Kunde & Marketing',
   erklaerung:'Modell, das zeigt, wie aus vielen Interessierten wenige Käufer werden: Aufmerksamkeit → Interesse → Wunsch → Handlung (AIDA). An jeder Stufe gehen Menschen verloren; man misst, wo es am meisten hakt.',
   beispiel:'10.000 sehen die Anzeige für das Lastenrad, 600 öffnen die Produktseite, 80 buchen eine Probefahrt, 20 kaufen. Der größte Verlust liegt zwischen Produktseite und Probefahrt – also dort ansetzen.',
   prompt:'Hier sind die Zahlen unseres Funnels für [Produkt/Kampagne]: [Impressionen], [Klicks], [Produktseitenaufrufe], [Anfragen/Probefahrten], [Käufe]. Berechne die Conversion Rate jeder Stufe, zeige die größte Schwachstelle und schlage 3 Tests vor, um sie zu verbessern.',
   verwandt:['Conversion Rate','Customer Journey','A/B-Test']},
  {name:'SEO', alias:'Suchmaschinenoptimierung', bereich:'Kunde & Marketing',
   erklaerung:'Maßnahmen, damit Website und Produktseiten bei Google ohne bezahlte Anzeigen weit oben erscheinen: gute Texte, passende Suchbegriffe, schnelle Seiten, saubere Struktur, lokale Einträge.',
   beispiel:'Eine Ratgeberseite „E-Bike-Akku im Winter richtig lagern“ zieht jedes Jahr ab Oktober Besucher an, die danach den Akku-Check in der Werkstatt buchen.',
   prompt:'Erstelle eine SEO-Gliederung für einen Ratgeberartikel zum Thema [z. B. „E-Bike oder S-Pedelec für den Arbeitsweg?“] für die Website eines Fahrradhändlers. Nenne Haupt-Suchbegriff, 8 verwandte Suchbegriffe, Title (max. 60 Zeichen), Meta-Description (max. 155 Zeichen), H2-Struktur, häufige Fragen (FAQ) und einen Hinweis, wo wir auf Beratung oder Probefahrt verlinken.',
   verwandt:['SEA','Landingpage','Bewertungsmanagement']},
  {name:'SEA', alias:'Suchmaschinenwerbung', bereich:'Kunde & Marketing',
   erklaerung:'Bezahlte Anzeigen in Suchmaschinen, z. B. Google Ads. Man zahlt meist pro Klick. Schnell wirksam, aber nur solange Budget läuft – im Gegensatz zu SEO.',
   beispiel:'Anzeige auf „Lastenrad Probefahrt [Stadt]“ führt direkt zum Buchungsformular. Gemessen wird, was ein gebuchter Termin kostet.',
   prompt:'Schreibe 5 Google-Ads-Anzeigen (je 3 Überschriften bis 30 Zeichen, 2 Beschreibungen bis 90 Zeichen) für [Produkt/Aktion] eines Fahrradhändlers. Zielgruppe: [Persona]. Ziel: [z. B. Probefahrt buchen]. Schlage außerdem 10 Keywords und 10 ausschließende Keywords vor.',
   verwandt:['SEO','CTR','Retargeting']},
  {name:'CTR', alias:'Click-Through-Rate / Klickrate', bereich:'Kunde & Marketing',
   erklaerung:'Anteil der Menschen, die etwas sehen und darauf klicken. Formel: Klicks ÷ Impressionen × 100. Wichtig für Anzeigen, Newsletter-Links und Suchergebnisse.',
   beispiel:'Ein Newsletter geht an 4.000 Empfänger, 120 klicken auf „Frühjahrscheck buchen“: CTR = 3 %. Mit einem Bild der Werkstatt statt eines Stockfotos steigt sie im Test auf 4,2 %.',
   prompt:'Unser Newsletter hatte [Öffnungsrate] Öffnungen und [CTR] Klickrate. Hier sind Betreffzeile und Text: [einfügen]. Analysiere, warum die Klickrate so ist, und schreibe 3 bessere Betreffzeilen und 2 klarere Handlungsaufforderungen (Buttons).',
   verwandt:['Conversion Rate','A/B-Test','Newsletter']},
  {name:'Retargeting', alias:'Remarketing', bereich:'Kunde & Marketing',
   erklaerung:'Werbung für Menschen, die schon einmal auf der Website waren, aber nicht gekauft haben. Braucht Einwilligung über das Cookie-Banner (DSGVO).',
   beispiel:'Wer sich drei E-MTBs angesehen hat, sieht eine Woche später eine Anzeige „E-MTB-Testtag am Samstag – jetzt Platz sichern“.',
   prompt:'Entwirf eine Retargeting-Strategie für Besucher, die Produktseiten von E-Bikes über 3.000 € angesehen, aber nicht angefragt haben. Nenne 3 Anzeigenbotschaften nach Zeitabstand (1, 7, 21 Tage), Frequenzgrenzen und Hinweise zur DSGVO-konformen Umsetzung.',
   verwandt:['SEA','Warenkorbabbruch','DSGVO']},
  {name:'Newsletter', alias:'E-Mail-Marketing', bereich:'Kunde & Marketing',
   erklaerung:'Regelmäßige E-Mails an Kunden mit Einwilligung (Double-Opt-in). Wichtige Kennzahlen: Öffnungsrate, Klickrate, Abmelderate, Umsatz pro Versand.',
   beispiel:'Monatlicher Newsletter mit Saison-Tipp, Werkstatt-Angebot und neuen Modellen – segmentiert nach Radtyp, damit Rennradfahrer keine Kinderrad-Werbung bekommen.',
   prompt:'Schreibe einen Newsletter für [Monat] für Kunden eines Fahrradhändlers, die ein [Radtyp] besitzen. Aufbau: Betreff (3 Varianten), Vorschautext, kurzer Einstieg, 1 Praxis-Tipp, 1 Werkstatt-Angebot, 1 Produkt-Highlight, klarer Button. Ton: persönlich, kompetent, nicht marktschreierisch. Max. 180 Wörter.',
   verwandt:['Zielgruppe','CTR','DSGVO']},

  // Vertrieb
  {name:'Lead', alias:'Interessent', bereich:'Vertrieb',
   erklaerung:'Eine Person oder Firma, die Interesse gezeigt und Kontaktdaten hinterlassen hat, aber noch nicht gekauft hat. Leads entstehen z. B. über Kontaktformulare, Probefahrt-Buchungen, Messen oder Anrufe.',
   beispiel:'Eine Personalabteilung fragt über das Formular nach Dienstrad-Leasing für 60 Mitarbeitende. Das ist ein B2B-Lead mit hohem Potenzial.',
   prompt:'Hier ist eine anonymisierte Anfrage aus unserem Kontaktformular: [Text einfügen, ohne Namen/Kontaktdaten]. Fasse zusammen: Was will die Person, wie dringend ist es, welches Budget ist realistisch, welche Infos fehlen? Schlage eine Antwortmail vor (max. 120 Wörter) mit 2 Rückfragen und einem konkreten Terminvorschlag.',
   verwandt:['Lead Scoring','MQL / SQL','CRM','Follow-up']},
  {name:'MQL / SQL', alias:'Marketing / Sales Qualified Lead', bereich:'Vertrieb',
   erklaerung:'Zwei Reifegrade eines Leads. MQL: hat Interesse gezeigt (z. B. Ratgeber geladen), ist aber noch nicht kaufbereit. SQL: vom Vertrieb geprüft, hat Bedarf, Budget und Zeitplan – lohnt ein persönliches Gespräch.',
   beispiel:'Jemand lädt die Checkliste „Welches Lastenrad passt?“ herunter (MQL). Zwei Wochen später bucht er eine Probefahrt und nennt sein Budget (SQL).',
   prompt:'Definiere für einen Fahrradhändler klare Kriterien, wann ein Lead als MQL und wann als SQL gilt – getrennt für Privatkunden (B2C) und Firmenkunden für Dienstrad-Leasing (B2B). Gib für jede Stufe 3–5 messbare Signale und die nächste Aktion an.',
   verwandt:['Lead','Lead Scoring','Pipeline']},
  {name:'Lead Scoring', alias:'Lead-Bewertung', bereich:'Vertrieb',
   erklaerung:'Leads bekommen Punkte nach Merkmalen und Verhalten, damit das Team zuerst die vielversprechendsten bearbeitet. KI kann Vorschläge machen, die Regeln sollten aber nachvollziehbar bleiben.',
   beispiel:'+20 Punkte für Probefahrt gebucht, +15 für Budget über 4.000 €, +10 für Firmenkunde, −10 wenn seit 30 Tagen keine Reaktion. Ab 40 Punkten ruft jemand an.',
   prompt:'Entwirf ein einfaches Lead-Scoring-Modell (max. 10 Kriterien) für einen Fahrrad- und E-Bike-Händler. Nutze nur Daten, die wir in Formular, Shop und ERP haben könnten. Gib Punkte, Begründung und Schwellenwerte für „sofort anrufen“, „E-Mail-Strecke“ und „beobachten“ an. Erkläre, wie wir das Modell nach 3 Monaten überprüfen.',
   verwandt:['Lead','MQL / SQL','CRM']},
  {name:'Pipeline', alias:'Vertriebspipeline', bereich:'Vertrieb',
   erklaerung:'Übersicht aller offenen Verkaufschancen nach Phase, z. B. Anfrage → Beratung → Angebot → Verhandlung → Gewonnen/Verloren. Zeigt, wie viel Umsatz wahrscheinlich kommt und wo Deals hängen bleiben.',
   beispiel:'Im B2B-Leasing stehen 8 Firmen in „Angebot verschickt“, aber nur 1 in „Verhandlung“. Das Team baut daraufhin eine Nachfass-Routine nach 5 Tagen ein.',
   prompt:'Hilf mir, eine Vertriebspipeline für das B2B-Geschäft (Dienstrad-Leasing für Firmen) eines Fahrradhändlers aufzubauen. Definiere 6 Phasen mit Eintritts- und Austrittskriterien, typischer Dauer, Verantwortlichen und einer automatischen Aktion pro Phase (z. B. Erinnerung, Vorlage, Aufgabe im ERP).',
   verwandt:['Lead','CRM','Follow-up']},
  {name:'Conversion Rate', alias:'Umwandlungsrate', bereich:'Vertrieb',
   erklaerung:'Anteil der Besucher oder Interessenten, die eine gewünschte Handlung ausführen (kaufen, anfragen, Termin buchen). Formel: Abschlüsse ÷ Besucher × 100.',
   beispiel:'Von 50 Probefahrten im Monat werden 18 Käufe: Conversion Rate 36 %. Im Onlineshop liegt sie für Zubehör bei 2,1 %.',
   prompt:'Unsere Conversion Rate im Bereich [Onlineshop/Probefahrt/Werkstattbuchung] liegt bei [Wert]. Typische Werte im Fahrradhandel? Nenne 10 mögliche Ursachen für eine niedrige Rate, sortiert nach Aufwand und Wirkung, und wie wir jede mit Daten prüfen können.',
   verwandt:['Funnel','A/B-Test','CTR']},
  {name:'Upselling / Cross-Selling', alias:'Höherwertig / ergänzend verkaufen', bereich:'Vertrieb',
   erklaerung:'Upselling: ein höherwertiges Produkt anbieten (größerer Akku, besseres Modell). Cross-Selling: passendes Zubehör oder Service dazu (Helm, Schloss, Versicherung, Inspektionspaket). Gut gemacht ist es echte Beratung.',
   beispiel:'Zum E-Bike für 3.800 € passend: Rahmenschloss, Versicherung und ein Inspektionspaket für 2 Jahre. Der durchschnittliche Bestellwert steigt um 340 €.',
   prompt:'Erstelle für [Radtyp, z. B. E-Trekkingrad für Pendler] eine Cross- und Upselling-Liste: 5 Zubehörartikel, 2 Serviceleistungen, 1 Upgrade-Option. Pro Vorschlag: Nutzen für den Kunden in einem Satz und eine natürliche Formulierung für das Beratungsgespräch, die nicht nach Verkaufsdruck klingt.',
   verwandt:['AOV','Persona']},
  {name:'Follow-up', alias:'Nachfassen', bereich:'Vertrieb',
   erklaerung:'Geplanter erneuter Kontakt nach einer Anfrage, einem Angebot oder einem Kauf. Viele Abschlüsse kommen erst nach dem zweiten oder dritten Kontakt – vorausgesetzt, er ist hilfreich und nicht aufdringlich.',
   beispiel:'3 Tage nach der Probefahrt: kurze Mail mit Datenblatt, Leasingrechnung und Link zur Terminbuchung. Nach 10 Tagen ein Anruf.',
   prompt:'Schreibe eine Follow-up-Sequenz (3 Nachrichten) nach einer Probefahrt mit [Modell], ohne Kauf. Abstände: 2, 7 und 14 Tage. Jede Nachricht max. 80 Wörter, mit einem echten Mehrwert (z. B. Leasing-Beispielrechnung, Kundenstimme, Testtag) und einer klaren, freundlichen Frage.',
   verwandt:['Lead','Pipeline','CRM']},
  {name:'CRM', alias:'Customer Relationship Management', bereich:'Vertrieb',
   erklaerung:'System (oder Modul im ERP), in dem alle Kontakte, Anfragen, Gespräche, Angebote und Aufgaben zu Kunden gespeichert werden. So weiß jede Filiale, was zuletzt besprochen wurde.',
   beispiel:'Im eigenen ERP sieht die Beratung: Kunde hat 2022 ein Trekkingrad gekauft, war im Mai zur Inspektion und hat letzte Woche nach Lastenrädern gefragt.',
   prompt:'Wir entwickeln ein eigenes ERP für einen Fahrradhändler mit Werkstatt. Welche CRM-Funktionen und Datenfelder braucht es für Vertrieb (B2C und B2B-Leasing) im ersten Schritt? Unterscheide Muss, Soll, Kann. Nenne zu jedem Feld den Zweck und ob es personenbezogen (DSGVO) ist.',
   verwandt:['ERP','Lead','Pipeline']},
  {name:'B2B / B2C', alias:'Business-to-Business / -Consumer', bereich:'Vertrieb',
   erklaerung:'B2C: Verkauf an Privatkunden. B2B: Verkauf an Firmen, z. B. Dienstrad-Leasing, Firmenflotten oder Wiederverkäufer. B2B hat längere Entscheidungswege, mehrere Ansprechpartner und andere Argumente (Kosten, Mitarbeiterbindung, Verwaltung).',
   beispiel:'B2C: Familie kauft ein Kinderrad. B2B: Ein Pflegedienst least 12 E-Bikes für Hausbesuche und braucht einen Wartungsvertrag.',
   prompt:'Erstelle eine Gegenüberstellung B2C vs. B2B für einen Fahrradhändler: Entscheider, Kaufgründe, Einwände, Verkaufszyklus, Kanäle, benötigte Unterlagen. Schreibe dann einen Kurz-Pitch (5 Sätze) für Firmen, die über Dienstrad-Leasing nachdenken.',
   verwandt:['Lead','Pipeline','Einwandbehandlung']},
  {name:'Einwandbehandlung', alias:'Objection Handling', bereich:'Vertrieb',
   erklaerung:'Professioneller Umgang mit Bedenken im Verkaufsgespräch („zu teuer“, „online günstiger“, „ich überlege noch“). Ziel ist, den echten Grund zu verstehen und ehrlich zu beantworten.',
   beispiel:'Einwand „Im Internet ist das Rad 200 € günstiger.“ Antwort: Montage, Ergonomie-Einstellung, Erstinspektion und Werkstatt vor Ort sind dabei – plus Probefahrt auf eigener Strecke.',
   prompt:'Liste die 10 häufigsten Einwände beim Kauf eines E-Bikes im Fachhandel auf. Formuliere zu jedem eine ehrliche, kurze Antwort (max. 3 Sätze) und eine Rückfrage, die den eigentlichen Grund klärt. Ton: beratend, nicht drängend.',
   verwandt:['USP','B2B / B2C','Persona']},

  // E-Commerce & Shop
  {name:'Omnichannel', alias:'Verzahnung aller Kanäle', bereich:'E-Commerce & Shop',
   erklaerung:'Online-Shop, Filialen, Telefon, Social Media und Werkstatt greifen nahtlos ineinander: gleiche Preise, gleicher Bestand, gleiche Kundenhistorie. Kunden wechseln den Kanal, ohne von vorn anzufangen.',
   beispiel:'Online Verfügbarkeit in der nächsten Filiale prüfen, Rad reservieren, im Laden probefahren, mit Leasing kaufen, Inspektion per WhatsApp-Erinnerung buchen.',
   prompt:'Bewerte den Omnichannel-Reifegrad eines Fahrradhändlers anhand von 10 Kriterien (z. B. Filialbestand online sichtbar, Click & Collect, einheitliche Kundenhistorie). Gib für jedes Kriterium Stufe 1–3 und einen nächsten Schritt an, der mit einem eigenen ERP realistisch ist.',
   verwandt:['Click & Collect','Touchpoint','ERP']},
  {name:'Click & Collect', alias:'Online reservieren, im Laden abholen', bereich:'E-Commerce & Shop',
   erklaerung:'Kunden bestellen oder reservieren online und holen in der Filiale ab. Spart Versand, bringt Menschen in den Laden und ist bei großen Rädern besonders sinnvoll.',
   beispiel:'Ein Kinderrad wird online reserviert, die Werkstatt montiert und stellt es ein, bei Abholung kauft die Familie noch Helm und Klingel.',
   prompt:'Beschreibe einen Click-&-Collect-Prozess für Fahrräder und Zubehör in einem Betrieb mit mehreren Filialen: Schritte, Statusmeldungen an Kunden, Fristen, Verantwortliche, Daten im ERP. Schreibe außerdem die 3 automatischen Kunden-Nachrichten (Eingang, abholbereit, Erinnerung).',
   verwandt:['Omnichannel','ERP']},
  {name:'Warenkorbabbruch', alias:'Cart Abandonment', bereich:'E-Commerce & Shop',
   erklaerung:'Kunden legen etwas in den Warenkorb, kaufen aber nicht. Häufige Gründe: Versandkosten, Lieferzeit, fehlende Zahlungsart, Unsicherheit bei Größe oder Montage.',
   beispiel:'Bei Rädern über 2.000 € brechen viele ab, weil die Rahmengröße unklar ist. Ein Größenrechner und der Hinweis „kostenlose Einstellung bei Abholung“ senken die Abbrüche.',
   prompt:'Unsere Warenkorbabbruchrate liegt bei [Wert], besonders bei [Produktgruppe]. Nenne die 8 wahrscheinlichsten Gründe im Fahrrad-E-Commerce, wie wir sie mit Shopdaten prüfen, und schreibe eine DSGVO-konforme Erinnerungsmail für eingeloggte Kunden mit Einwilligung.',
   verwandt:['Conversion Rate','Retargeting','A/B-Test']},
  {name:'AOV', alias:'Average Order Value / Ø-Bestellwert', bereich:'E-Commerce & Shop',
   erklaerung:'Durchschnittlicher Umsatz pro Bestellung. Formel: Umsatz ÷ Anzahl Bestellungen. Steigt durch sinnvolles Cross-Selling, Bundles oder Versandkostenfrei-Schwellen.',
   beispiel:'Zubehör-Shop: 2.400 € Umsatz aus 60 Bestellungen = AOV 40 €. Mit „versandkostenfrei ab 49 €“ steigt er auf 47 €.',
   prompt:'Unser durchschnittlicher Bestellwert im Zubehör-Shop liegt bei [Wert]. Schlage 6 Maßnahmen vor, ihn zu erhöhen (Bundles, Schwellen, Empfehlungen), und schätze für jede Aufwand und Risiko ein. Nenne die Kennzahlen, die wir parallel beobachten müssen.',
   verwandt:['Upselling / Cross-Selling','Conversion Rate']},
  {name:'Produktdaten / PIM', alias:'Product Information Management', bereich:'E-Commerce & Shop',
   erklaerung:'Alle Informationen zu einem Artikel: Titel, Beschreibung, Merkmale (Rahmengröße, Motor, Akku, Gewicht), Bilder, Preise. Ein PIM hält sie zentral und spielt sie in Shop, Marktplätze und Kassen aus. Gute Produktdaten sind auch die Grundlage, damit KI-Assistenten eure Produkte verstehen.',
   beispiel:'Ein E-Bike hat beim Hersteller 40 Merkmale. Im Shop stehen nur 12, das Akku-Gewicht fehlt. KI kann aus dem Datenblatt fehlende Felder vorschlagen, ein Mensch prüft.',
   prompt:'Hier ist ein Hersteller-Datenblatt (Text): [einfügen]. Extrahiere alle technischen Merkmale in eine Tabelle mit den Spalten Merkmal, Wert, Einheit, Quelle im Text. Markiere fehlende oder widersprüchliche Angaben. Schreibe danach eine Shop-Beschreibung (120 Wörter) ohne Angaben zu erfinden.',
   verwandt:['Stammdaten','SKU / EAN','SEO']},
  {name:'Retourenquote', alias:'Rücksendequote', bereich:'E-Commerce & Shop',
   erklaerung:'Anteil der Bestellungen, die zurückgeschickt werden. Hohe Quoten kosten Geld (Versand, Prüfung, Wertverlust). Ursachen sind oft falsche Größe oder ungenaue Produktbeschreibungen.',
   beispiel:'Bei Fahrradbekleidung liegt die Retourenquote bei 22 %, fast immer wegen der Größe. Eine Größentabelle mit Körpermaßen und Kundenbewertungen „fällt klein aus“ senkt sie.',
   prompt:'Analysiere diese anonymisierten Retourengründe aus dem letzten Quartal: [Liste einfügen]. Gruppiere sie in Kategorien, zeige die Top 3 Ursachen und schlage pro Ursache eine Maßnahme im Shop (Text, Bild, Größenhilfe) vor.',
   verwandt:['Produktdaten / PIM','Conversion Rate']},
  {name:'A/B-Test', alias:'Split-Test', bereich:'E-Commerce & Shop',
   erklaerung:'Zwei Varianten (A und B) einer Seite, Mail oder Anzeige werden gleichzeitig an zufällig geteilte Gruppen ausgespielt. Gemessen wird, welche besser funktioniert. Nur eine Sache auf einmal ändern.',
   beispiel:'Variante A: Button „Jetzt kaufen“. Variante B: „Probefahrt buchen“. Bei E-Bikes über 3.000 € bringt B doppelt so viele Kontakte.',
   prompt:'Plane einen A/B-Test für [Seite/Mail/Anzeige] eines Fahrradhändlers. Nenne Hypothese, die eine Änderung, Hauptkennzahl, nötige Mindestanzahl Besucher (grobe Schätzung), Testdauer und woran wir erkennen, dass das Ergebnis nicht Zufall ist. Erkläre es so, dass es auch Nicht-Statistiker verstehen.',
   verwandt:['Conversion Rate','CTR','Landingpage']},
  {name:'Landingpage', alias:'Zielseite', bereich:'E-Commerce & Shop',
   erklaerung:'Eine Seite mit genau einem Ziel, auf die eine Anzeige, ein Newsletter oder ein QR-Code führt – z. B. Probefahrt buchen oder für den Testtag anmelden. Keine Ablenkung, klare Handlungsaufforderung.',
   beispiel:'QR-Code auf dem Flyer „Lastenrad-Testwochenende“ führt auf eine Seite mit 3 Modellen, Terminwahl und kurzem Formular.',
   prompt:'Schreibe den Text für eine Landingpage: Ziel [z. B. Anmeldung zum E-MTB-Testtag], Zielgruppe [Persona]. Aufbau: Überschrift, Unterzeile, 3 Nutzenpunkte, Ablauf in 3 Schritten, Formularfelder (so wenige wie möglich), 3 FAQ, Button-Text. Max. 250 Wörter.',
   verwandt:['A/B-Test','SEA','USP']},

  // Daten & ERP
  {name:'ERP', alias:'Enterprise Resource Planning', bereich:'Daten & ERP',
   erklaerung:'Das zentrale System für Artikel, Bestand, Einkauf, Verkauf, Werkstatt, Kunden und Buchhaltung. Ihr entwickelt euer ERP selbst – damit könnt ihr Schnittstellen für KI von Anfang an mitplanen.',
   beispiel:'Ein Werkstattauftrag im ERP bucht automatisch Ersatzteile aus dem Lager, informiert den Kunden bei Fertigstellung und erzeugt die Rechnung.',
   prompt:'Wir entwickeln ein eigenes ERP für einen Fahrrad- und E-Bike-Händler mit Werkstätten und Onlineshop. Erstelle eine Modulübersicht (Artikel, Bestand, Einkauf, Verkauf, Werkstatt, CRM, Leasing, Auswertungen) mit je 5 Kernfunktionen und markiere, wo KI später sinnvoll andocken kann (lesend vs. schreibend).',
   verwandt:['Stammdaten','API','CRM']},
  {name:'Stammdaten', alias:'Master Data', bereich:'Daten & ERP',
   erklaerung:'Grunddaten, die sich selten ändern und überall genutzt werden: Artikel, Lieferanten, Kunden, Filialen, Preise. Fehler in Stammdaten ziehen sich durch Shop, Kasse und Auswertungen.',
   beispiel:'Ist bei einem Akku die Kapazität einmal mit 625 Wh und einmal mit 625 W eingetragen, sind Filter im Shop und Auswertungen falsch.',
   prompt:'Hier ist ein Auszug aus unseren Artikelstammdaten (anonymisiert, CSV): [einfügen]. Prüfe auf Dubletten, uneinheitliche Einheiten, fehlende Pflichtfelder und Tippfehler. Gib eine Liste der Probleme mit Zeilennummer und Korrekturvorschlag aus. Ändere nichts eigenmächtig.',
   verwandt:['Produktdaten / PIM','SKU / EAN','ERP']},
  {name:'SKU / EAN', alias:'Artikelnummer / GTIN-Barcode', bereich:'Daten & ERP',
   erklaerung:'SKU (Stock Keeping Unit) ist die interne Artikelnummer für jede Variante. EAN bzw. GTIN ist die weltweit eindeutige Barcode-Nummer des Herstellers. Pro Farbe und Rahmengröße gibt es eine eigene SKU.',
   beispiel:'Ein Trekkingrad in 3 Farben und 4 Größen = 12 SKUs mit 12 EANs. Nur so stimmen Bestand und Bestellungen.',
   prompt:'Schlage ein einheitliches Schema für interne Artikelnummern (SKU) bei einem Fahrradhändler vor, das Hersteller, Modell, Modelljahr, Farbe und Rahmengröße abbildet. Zeige 5 Beispiele und erkläre, wie wir es mit Hersteller-EANs verknüpfen.',
   verwandt:['Stammdaten','Lagerumschlag']},
  {name:'Lagerumschlag', alias:'Inventory Turnover', bereich:'Daten & ERP',
   erklaerung:'Wie oft der Lagerbestand pro Jahr verkauft und ersetzt wird. Formel: Wareneinsatz ÷ durchschnittlicher Lagerwert. Niedriger Umschlag heißt: Geld liegt in Rädern, die herumstehen.',
   beispiel:'E-MTBs drehen sich 4-mal im Jahr, Kinderräder nur 1,5-mal. Für Kinderräder lohnt kleinerer Bestand und schnellere Nachbestellung.',
   prompt:'Hier sind anonymisierte Zahlen je Warengruppe: [Wareneinsatz, Ø-Lagerwert, Bestand >180 Tage]. Berechne den Lagerumschlag, zeige Problemgruppen und schlage Maßnahmen vor (Abverkauf, Bestellmengen, Umlagerung zwischen Filialen). Erkläre die Rechnung kurz.',
   verwandt:['KPI','SKU / EAN','Dashboard']},
  {name:'KPI', alias:'Key Performance Indicator / Kennzahl', bereich:'Daten & ERP',
   erklaerung:'Eine Kennzahl, die zeigt, ob ein Ziel erreicht wird. Gute KPIs sind wenige, klar definiert und regelmäßig gemessen.',
   beispiel:'Werkstatt-KPIs: Auslastung in %, durchschnittliche Durchlaufzeit in Tagen, Anteil Aufträge mit Nachbesserung.',
   prompt:'Schlage für [Bereich: Onlineshop / Werkstatt / Filialverkauf / B2B-Leasing] eines Fahrradhändlers 6 KPIs vor. Pro KPI: Definition, Formel, Datenquelle im ERP, Messintervall, sinnvoller Zielwert und welche Entscheidung daraus folgt.',
   verwandt:['Dashboard','Conversion Rate','Lagerumschlag']},
  {name:'Dashboard', alias:'Kennzahlen-Übersicht', bereich:'Daten & ERP',
   erklaerung:'Eine Übersicht, die die wichtigsten Kennzahlen auf einen Blick zeigt, meist automatisch aktualisiert. Hilft, Entscheidungen auf Zahlen statt Bauchgefühl zu stützen.',
   beispiel:'Montags-Dashboard: Umsatz je Filiale, offene Werkstattaufträge, Probefahrten, Leads aus dem Web, Bestand mit über 180 Tagen.',
   prompt:'Entwirf ein Wochen-Dashboard für die Geschäftsleitung eines Fahrradhändlers mit Werkstätten und Onlineshop. Max. 8 Kacheln. Pro Kachel: Kennzahl, Vergleich (Vorwoche/Vorjahr), Darstellung (Zahl, Linie, Balken) und Datenquelle im eigenen ERP.',
   verwandt:['KPI','ERP']},
  {name:'API', alias:'Programmierschnittstelle', bereich:'Daten & ERP',
   erklaerung:'Eine definierte Schnittstelle, über die Programme miteinander sprechen, z. B. Shop ↔ ERP oder KI-Agent ↔ ERP. API-Schlüssel sind wie Passwörter und gehören nur auf den Server.',
   beispiel:'Der Onlineshop fragt per API alle 5 Minuten den Bestand im ERP ab. Ein KI-Assistent darf per API nur lesen, nicht buchen.',
   prompt:'Wir planen für unser eigenes ERP eine REST-API, damit Shop und KI-Assistenten darauf zugreifen können. Schlage die ersten 10 Endpunkte für Artikel, Bestand und Werkstatttermine vor, mit Methode, Zweck, Berechtigung (nur lesen/schreiben) und Beispielantwort in JSON. Berücksichtige Sicherheit und Protokollierung.',
   verwandt:['Webhook','MCP','ERP']},
  {name:'Webhook', alias:'Ereignis-Benachrichtigung', bereich:'Daten & ERP',
   erklaerung:'Ein System meldet sich automatisch bei einem anderen, wenn etwas passiert („Bestellung eingegangen“, „Auftrag fertig“). Grundlage für Automatisierungen mit Make oder n8n.',
   beispiel:'Werkstattauftrag wird auf „fertig“ gesetzt → Webhook an Make → Make schickt dem Kunden eine SMS mit Abholzeit.',
   prompt:'Liste 10 Ereignisse in einem Fahrrad-ERP auf, bei denen ein Webhook sinnvoll wäre (z. B. Auftrag fertig, Lead eingegangen). Beschreibe je die Folgeaktion, das Werkzeug (Make/n8n) und welche Daten im Webhook mitgesendet werden müssen – so wenig personenbezogene Daten wie möglich.',
   verwandt:['API','Automation']},
  {name:'DSGVO', alias:'Datenschutz-Grundverordnung', bereich:'Daten & ERP',
   erklaerung:'EU-Regeln für den Umgang mit personenbezogenen Daten. Für KI wichtig: Keine Kundendaten in öffentliche KI-Tools ohne Vertrag, Einwilligungen für Werbung, Löschfristen, Auftragsverarbeitungsvertrag (AVV) mit Dienstleistern.',
   beispiel:'Statt eine echte Kundenmail in ChatGPT zu kopieren, werden Name, Adresse und Rahmennummer vorher entfernt oder durch Platzhalter ersetzt.',
   prompt:'Erstelle eine einfache Checkliste (max. 12 Punkte), die Mitarbeitende eines Fahrradhändlers vor dem Einsatz eines KI-Tools prüfen sollen: welche Daten erlaubt sind, wie man anonymisiert, wann ein AVV nötig ist, wen man fragt. Hinweis: Das ist keine Rechtsberatung, sondern eine Arbeitshilfe zur Abstimmung mit dem Datenschutz.',
   verwandt:['Anonymisierung','Zielgruppe']},

  // KI & Automatisierung
  {name:'Prompt', alias:'Arbeitsanweisung an die KI', bereich:'KI & Automatisierung',
   erklaerung:'Der Text, mit dem du der KI sagst, was sie tun soll. Gute Prompts nennen Rolle, Aufgabe, Kontext, gewünschtes Format und Grenzen. Faustregel: so erklären wie einer neuen Kollegin am ersten Tag.',
   beispiel:'Schwach: „Schreib was über E-Bikes.“ Stark: „Du bist Verkaufsberater. Schreibe für Pendler 3 Gründe für ein E-Trekkingrad, je 1 Satz, ohne Fachjargon.“',
   prompt:'Verbessere meinen Prompt: [deinen Prompt einfügen]. Ergänze fehlende Angaben zu Rolle, Ziel, Kontext, Format und Grenzen. Stelle mir zuerst bis zu 3 Rückfragen, falls etwas Wichtiges fehlt. Gib danach die verbesserte Version und erkläre kurz, was du geändert hast.',
   verwandt:['Kontext','Halluzination']},
  {name:'Kontext', alias:'Context / Kontextfenster', bereich:'KI & Automatisierung',
   erklaerung:'Alle Informationen, die die KI für eine Aufgabe sieht: dein Prompt, angehängte Dateien, vorherige Nachrichten. Je besser der Kontext, desto passender die Antwort. Das Kontextfenster ist die maximale Menge Text, die ein Modell auf einmal verarbeiten kann.',
   beispiel:'Mit angehängter Preisliste, Leasingbedingungen und Öffnungszeiten beantwortet die KI eine Kundenanfrage korrekt. Ohne diese Infos rät sie.',
   prompt:'Ich möchte, dass du mir bei [Aufgabe] hilfst. Frag mich zuerst nach allen Informationen und Unterlagen, die du dafür brauchst (max. 6 Fragen), und warte auf meine Antworten, bevor du loslegst.',
   verwandt:['Prompt','RAG / Wissensbasis','Token']},
  {name:'Halluzination', alias:'erfundene KI-Antwort', bereich:'KI & Automatisierung',
   erklaerung:'Die KI gibt überzeugend klingende, aber falsche Informationen aus, z. B. erfundene technische Daten oder Quellen. Deshalb: Fakten prüfen, Quellen verlangen, Datenblätter mitgeben.',
   beispiel:'Die KI nennt für ein E-Bike 750 Wh Akku, laut Hersteller sind es 625 Wh. In einer Produktbeschreibung wäre das ein Reklamationsgrund.',
   prompt:'Prüfe den folgenden Text auf Aussagen, die du nicht sicher belegen kannst: [Text einfügen]. Markiere jede Aussage als „belegt durch beigefügte Quelle“, „Allgemeinwissen“ oder „unsicher – bitte prüfen“. Erfinde keine Quellen.',
   verwandt:['Prompt','Human in the Loop','Kontext']},
  {name:'KI-Agent', alias:'AI Agent', bereich:'KI & Automatisierung',
   erklaerung:'Eine KI, die nicht nur antwortet, sondern selbstständig mehrere Schritte erledigt und dabei Werkzeuge nutzt (suchen, Dateien lesen, im ERP nachschauen, Mails entwerfen). Wichtig: klare Rechte und Freigaben.',
   beispiel:'Ein Agent liest jeden Morgen neue Leasing-Anfragen, prüft im ERP die Verfügbarkeit der Wunschmodelle und legt Antwortentwürfe zur Freigabe ab.',
   prompt:'Beschreibe einen KI-Agenten für [Aufgabe, z. B. Vorqualifizierung von B2B-Anfragen] bei einem Fahrradhändler: Ziel, Auslöser, Schritte, benötigte Werkzeuge und Daten, was er darf (lesen) und was nicht (buchen, senden), wo ein Mensch freigibt, und wie wir Fehler erkennen.',
   verwandt:['Automation','Human in the Loop','MCP']},
  {name:'Automation', alias:'Workflow / Automatisierung', bereich:'KI & Automatisierung',
   erklaerung:'Fest definierte Abläufe, die ein Werkzeug wie Make oder n8n automatisch ausführt: Wenn X passiert, dann tue Y. Anders als ein Agent entscheidet eine Automation nicht selbst, sie folgt Regeln. Oft ist die Kombination am besten.',
   beispiel:'Neue Probefahrt-Buchung im Formular → Termin im Kalender der Filiale → Bestätigungsmail an Kunden → Aufgabe „Rad vorbereiten“ in der Werkstatt.',
   prompt:'Ich möchte diesen Ablauf automatisieren: [Ablauf in eigenen Worten beschreiben]. Zerlege ihn in Auslöser, Schritte und Bedingungen. Schlage vor, was Make oder n8n regelbasiert erledigt und wo KI sinnvoll hilft (z. B. Text verstehen). Nenne Fehlerfälle und wer benachrichtigt wird.',
   verwandt:['Webhook','KI-Agent','API']},
  {name:'RAG / Wissensbasis', alias:'Retrieval-Augmented Generation', bereich:'KI & Automatisierung',
   erklaerung:'Die KI sucht vor dem Antworten in euren eigenen Dokumenten (Handbücher, Preislisten, FAQ) und stützt ihre Antwort darauf. So antwortet sie mit eurem Wissen statt mit allgemeinem Internetwissen.',
   beispiel:'Ein interner Assistent beantwortet „Welches Drehmoment für die Sattelstütze bei Modell X?“ mit Verweis auf die Seite im Herstellerhandbuch.',
   prompt:'Wir wollen eine interne Wissensbasis für Verkauf und Werkstatt aufbauen. Welche 15 Dokumenttypen sollten zuerst hinein? Wie strukturieren wir sie (Ordner, Benennung, Stand-Datum), damit eine KI zuverlässig darin sucht? Was darf auf keinen Fall hinein?',
   verwandt:['Kontext','Halluzination','KI-Agent']},
  {name:'Human in the Loop', alias:'Mensch gibt frei', bereich:'KI & Automatisierung',
   erklaerung:'Ein Mensch prüft und bestätigt, bevor die KI etwas Wichtiges tut, etwa eine Mail an Kunden sendet, einen Preis ändert oder eine Bestellung auslöst. Besonders am Anfang unverzichtbar.',
   beispiel:'Die KI schreibt die Antwort auf eine Reklamation, das Werkstatt-Team liest gegen und klickt auf „Senden“.',
   prompt:'Für folgende KI-Aufgaben in unserem Betrieb: [Liste]. Ordne jede einer Freigabestufe zu: „KI darf selbst“, „KI entwirft, Mensch gibt frei“, „nur Mensch“. Begründe kurz mit Risiko und Auswirkung auf Kunden.',
   verwandt:['KI-Agent','Halluzination']},
  {name:'Token', alias:'Texteinheit der KI', bereich:'KI & Automatisierung',
   erklaerung:'KI-Modelle zerlegen Text in kleine Stücke (Tokens), etwa ein Wortteil. Abrechnung über APIs und die Größe des Kontextfensters werden in Tokens gemessen. Deutsch braucht meist etwas mehr Tokens als Englisch.',
   beispiel:'1.000 Produktbeschreibungen à 150 Wörter sind grob 250.000 Tokens Ausgabe. Daraus lassen sich die API-Kosten vorab abschätzen.',
   prompt:'Schätze grob die Tokens und API-Kosten für folgende Aufgabe: [z. B. 2.000 Produkttexte à 120 Wörter aus Datenblättern à 400 Wörtern erzeugen]. Nimm aktuelle Listenpreise als Platzhalter an, zeige die Rechnung und nenne 3 Wege, Kosten zu senken.',
   verwandt:['Kontext','API']},
  {name:'MCP', alias:'Model Context Protocol', bereich:'KI & Automatisierung',
   erklaerung:'Ein offener Standard, über den KI-Assistenten wie Claude sicher auf eure Systeme zugreifen können, z. B. „Bestand abfragen“ im eigenen ERP. Ihr legt fest, welche Werkzeuge es gibt und was sie dürfen.',
   beispiel:'Ein MCP-Server für das ERP bietet nur „Artikel suchen“ und „Bestand je Filiale anzeigen“ an – lesend. Die Beratung fragt Claude: „Haben wir das Lastenrad in Größe M irgendwo vorrätig?“',
   prompt:'Wir wollen unser eigenes ERP per MCP an einen KI-Assistenten anbinden. Schlage 8 Werkzeuge für den ersten, rein lesenden Schritt vor (Name, Beschreibung, Eingaben, Ausgaben) und nenne die Sicherheitsregeln (Benutzerrechte, Protokollierung, keine personenbezogenen Daten ohne Bedarf).',
   verwandt:['API','KI-Agent','ERP']},
  {name:'Anonymisierung', alias:'Pseudonymisierung', bereich:'KI & Automatisierung',
   erklaerung:'Personenbezogene Daten entfernen (anonym) oder durch Platzhalter ersetzen (pseudonym), bevor man Texte oder Tabellen in ein KI-Tool gibt. So lassen sich echte Fälle üben, ohne Kundendaten preiszugeben.',
   beispiel:'Aus „Herr Maier, Rahmennummer WAW12345, Musterstraße 3“ wird „[Kunde A], [Rahmennummer], [Adresse]“.',
   prompt:'Anonymisiere den folgenden Text, bevor ich ihn weiterverwende: Ersetze Namen, Adressen, Telefonnummern, E-Mail-Adressen, Rahmennummern, Kunden- und Auftragsnummern durch Platzhalter wie [Kunde A]. Gib den bereinigten Text und eine Liste der ersetzten Kategorien (ohne die Originalwerte) aus. Text: [einfügen]',
   verwandt:['DSGVO','Prompt']},

  // Service & Werkstatt
  {name:'NPS', alias:'Net Promoter Score', bereich:'Service & Werkstatt',
   erklaerung:'Kennzahl für Weiterempfehlung. Frage: „Wie wahrscheinlich empfehlen Sie uns weiter? (0–10)“. NPS = Anteil 9–10 minus Anteil 0–6. Wichtiger als die Zahl sind die Begründungen.',
   beispiel:'Nach der Inspektion antworten 200 Kunden: 120 geben 9–10, 30 geben 0–6. NPS = 60 % − 15 % = 45.',
   prompt:'Hier sind anonymisierte Freitext-Antworten aus unserer Kundenbefragung nach Werkstattbesuchen: [einfügen]. Gruppiere sie nach Themen, zähle die Häufigkeit, trenne Lob und Kritik und schlage für die 3 häufigsten Kritikpunkte je eine Maßnahme vor.',
   verwandt:['Bewertungsmanagement','KPI']},
  {name:'Bewertungsmanagement', alias:'Review Management', bereich:'Service & Werkstatt',
   erklaerung:'Systematisch Bewertungen sammeln (z. B. bei Google), beantworten und daraus lernen. Gute Bewertungen helfen bei der lokalen Suche, Antworten zeigen Kundennähe.',
   beispiel:'Bei einer 2-Sterne-Bewertung wegen langer Wartezeit antwortet die Filiale sachlich, entschuldigt sich und nennt die neue Online-Terminbuchung.',
   prompt:'Schreibe eine Antwort auf diese Google-Bewertung unserer Fahrradwerkstatt: [Bewertung einfügen, ohne Namen]. Ton: freundlich, sachlich, nicht rechtfertigend. Max. 70 Wörter. Biete einen konkreten nächsten Schritt an. Gib zusätzlich eine kürzere Variante aus.',
   verwandt:['NPS','Touchpoint','SEO']},
  {name:'CLV', alias:'Customer Lifetime Value / Kundenwert', bereich:'Service & Werkstatt',
   erklaerung:'Der gesamte Umsatz oder Gewinn, den ein Kunde über die ganze Beziehung bringt – Rad, Zubehör, Werkstatt, Folgekauf. Zeigt, warum guter Service sich lohnt, auch wenn er einzeln wenig einbringt.',
   beispiel:'E-Bike 3.500 € + jährlich 180 € Werkstatt über 6 Jahre + 400 € Zubehör + Folgerad nach 7 Jahren: Der Kunde ist weit mehr wert als der erste Kauf.',
   prompt:'Erkläre an einem fiktiven Beispiel, wie sich der Kundenwert (CLV) eines E-Bike-Kunden bei einem Fachhändler über 8 Jahre zusammensetzt. Zeige dann, welche 5 Maßnahmen den CLV am stärksten erhöhen und welche Daten wir dafür im ERP erfassen müssen.',
   verwandt:['Wiederkaufrate','Upselling / Cross-Selling']},
  {name:'Wiederkaufrate', alias:'Retention / Churn', bereich:'Service & Werkstatt',
   erklaerung:'Anteil der Kunden, die wiederkommen (Retention). Das Gegenteil ist Churn: Kunden, die nicht mehr kommen. Im Fahrradhandel oft an Werkstattbesuchen messbar.',
   beispiel:'Von 500 E-Bike-Käufen aus 2024 kamen 340 im Folgejahr zur Inspektion: 68 % Retention. Die anderen 160 bekommen eine Erinnerung mit Angebot.',
   prompt:'Entwirf eine Rückhol-Aktion für Kunden, die vor über 18 Monaten ein Rad gekauft haben und seitdem nicht in der Werkstatt waren. Nenne Zielgruppe (Datenfelder), Botschaft, Kanal, Angebot und wie wir den Erfolg messen. Schreibe die Nachricht (max. 90 Wörter).',
   verwandt:['CLV','Zielgruppe','Newsletter']},
  {name:'Werkstattauslastung', alias:'Kapazitätsplanung', bereich:'Service & Werkstatt',
   erklaerung:'Verhältnis von gebuchter zu verfügbarer Werkstattzeit. Zu niedrig kostet Geld, zu hoch führt zu Wartezeiten und Stress – besonders im Frühjahr.',
   beispiel:'Im April liegt die Auslastung bei 115 %, im Januar bei 55 %. Ein Winter-Check-Angebot mit Rabatt verlagert Inspektionen in die ruhige Zeit.',
   prompt:'Unsere Werkstattauslastung je Monat: [Werte einfügen]. Schlage 6 Maßnahmen vor, um Spitzen zu glätten (Angebote, Terminlogik, Personaleinsatz), und schreibe eine kurze Kundenansprache für ein Winter-Inspektionsangebot.',
   verwandt:['KPI','Dashboard','Automation']}
];

const bereiche = ['Alle',...new Set(begriffe.map(b => b.bereich))];
const root = document.getElementById('begriffe');
if (!root) return;
const search = root.querySelector('#begriff-suche');
const chips = root.querySelector('#begriff-bereiche');
const list = root.querySelector('#begriff-liste');
const count = root.querySelector('#begriff-anzahl');
let bereich = 'Alle';

const el = (tag, text, cls) => {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (cls) node.className = cls;
  return node;
};

async function copy(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = 'Kopiert ✓';
  } catch {
    const pre = button.parentElement.querySelector('.begriff-prompt');
    const range = document.createRange();
    range.selectNodeContents(pre);
    const selection = getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    button.textContent = 'Markiert – jetzt kopieren';
  }
  setTimeout(() => { button.textContent = 'Prompt kopieren'; }, 2200);
}

function card(b) {
  const node = el('article', null, 'card begriff');
  node.id = 'begriff-' + b.name.toLowerCase().replace(/[^a-z0-9äöüß]+/g, '-');
  const top = el('div', null, 'cardtop');
  const icon = el('div', b.name.replace(/[^A-Za-zÄÖÜ]/g, '').slice(0, 2).toUpperCase(), 'icon');
  const head = el('div');
  head.append(el('h3', b.name), el('span', b.alias + ' · ' + b.bereich, 'type'));
  top.append(icon, head);
  const example = el('div', null, 'examples');
  example.append(el('b', 'Beispiel aus dem Fahrradhandel'), el('br'), document.createTextNode(b.beispiel));
  const details = el('details', null, 'examples');
  details.append(el('summary', null));
  details.querySelector('summary').append(el('b', 'Prompt für dich'));
  const pre = el('p', b.prompt, 'begriff-prompt');
  const button = el('button', 'Prompt kopieren', 'button');
  button.type = 'button';
  button.addEventListener('click', () => void copy(b.prompt, button));
  details.append(pre, button);
  const related = el('div', null, 'badges');
  for (const name of b.verwandt) {
    const chip = el('button', name, 'badge begriff-link');
    chip.type = 'button';
    chip.addEventListener('click', () => { bereich = 'Alle'; search.value = name; render(); search.scrollIntoView({block:'center', behavior:'smooth'}); });
    related.append(chip);
  }
  node.append(top, el('p', b.erklaerung, 'fact'), example, details, el('span', 'Verwandt', 'label'), related);
  return node;
}

function render() {
  const q = search.value.toLowerCase().trim();
  chips.replaceChildren(...bereiche.map(name => {
    const chip = el('button', name, 'chip' + (name === bereich ? ' on' : ''));
    chip.type = 'button';
    chip.setAttribute('aria-pressed', String(name === bereich));
    chip.addEventListener('click', () => { bereich = name; render(); });
    return chip;
  }));
  const items = begriffe.filter(b => (bereich === 'Alle' || b.bereich === bereich)
    && [b.name, b.alias, b.erklaerung, b.beispiel].join(' ').toLowerCase().includes(q))
    .sort((a, b) => {
      const exact = x => x.name.toLowerCase() === q ? 0 : 1;
      return exact(a) - exact(b) || a.name.localeCompare(b.name, 'de');
    });
  count.textContent = items.length + ' von ' + begriffe.length + ' Begriffen';
  list.replaceChildren(...(items.length ? items.map(card) : [el('div', 'Kein Begriff gefunden. Versuche ein anderes Stichwort.', 'empty')]));
}

search.addEventListener('input', render);
render();
})();
