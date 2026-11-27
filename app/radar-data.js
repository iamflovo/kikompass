export const editorialDate = '2026-11-27';

export const releases = [
  {date:'2026-11-27', provider:'OpenAI', type:'Agent', hot:true, status:'Laut The Information · früher Stand', title:'Codename Athena: OpenAI baut Datenschicht für Business-Agenten', summary:'Laut The Decoder arbeitet OpenAI an „Athena“, einer Plattform, die Firmendaten so beschreibt und ordnet, dass Agenten Kennzahlen und Begriffe richtig verstehen (ähnlich einem Semantic Layer). Zeitplan und Preise gibt es noch nicht.', impact:'Bestätigt die Richtung fürs eigene ERP: Begriffe wie „Umsatz“, „verfügbar“ oder „Lieferzeit“ einmal sauber definieren und dokumentieren. Dann rechnen Agenten mit denselben Zahlen wie das Team.', url:'https://the-decoder.de/codename-athena-openai-baut-datenmanagement-plattform-fuer-genauere-business-agenten/', language:'de'},
  {date:'2026-11-27', provider:'SAP', type:'Produkt', status:'Laut heise', title:'SAP holt Databricks-Funktionen in die Business Data Cloud', summary:'Funktionen von Databricks wie der Daten-Assistent Genie wandern in SAPs Business Data Cloud. Eine Verbindung von Genie mit SAPs KI-Assistent Joule ist geplant.', impact:'Große ERP-Anbieter verschmelzen Datenplattform und KI-Assistent. Für ein eigenes ERP heißt das: Fragen in normaler Sprache an die eigenen Daten werden zum Standard, den Mitarbeiter erwarten.', url:'https://www.heise.de/news/SAP-bleibt-Vertragspartner-Databricks-Funktionen-wandern-in-Business-Data-Cloud-11540369.html', language:'de'},
  {date:'2026-11-27', provider:'Tencent', type:'Modell', status:'Open Weights · lokal nutzbar', title:'Hy-MT3: Übersetzungsmodell für 102 Sprachen zum Selbstbetrieb', summary:'Tencent veröffentlicht sein Übersetzungsmodell Hy-MT3-30B-A3B als GGUF-Dateien für llama.cpp. Laut Modellkarte beherrscht es 102 Sprachen, die Dateien sind je nach Qualität 13 bis 33 GB groß.', impact:'Interessant, wenn Produkttexte oder Service-FAQ in mehrere Sprachen sollen, ohne Daten an einen Cloud-Dienst zu geben. Ergebnisse von Muttersprachlern prüfen lassen; Lizenz vor dem Einsatz lesen.', url:'https://huggingface.co/tencent/Hy-MT3-30B-A3B-GGUF'},
  {date:'2026-11-27', provider:'AssemblyAI', type:'Produkt', status:'ChatGPT-Plugin', title:'AssemblyAI transkribiert Audio und Video direkt in ChatGPT', summary:'Das neue Plugin im ChatGPT-Verzeichnis schreibt Aufnahmen mit, unterscheidet Sprecher und zieht Aufgaben heraus. Nötig ist ein eigenes AssemblyAI-Konto.', impact:'Praktisch für Team-Besprechungen oder Schulungsvideos: Protokoll und Aufgabenliste in einem Schritt. Keine Kundengespräche ohne Einwilligung aufnehmen.', url:'https://www.assemblyai.com/'},
  {date:'2026-11-27', provider:'Zapier', type:'Agent', status:'Bis 5.1.2027 kostenlos', title:'Zapier MCP für Grok Bot vorübergehend gratis', summary:'Zapier verzichtet bis zum 5. Januar 2027 auf Gebühren für MCP-Aufrufe aus Grok Bot. Kosten der angebundenen Dienste bleiben bestehen.', impact:'Günstige Gelegenheit, Agenten-Abläufe mit Zapier auszuprobieren, etwa Formular → Aufgabe. Nach dem 5.1. Kosten neu rechnen.', url:'https://zapier.com/blog/grok-bot/'},
  {date:'2026-11-27', provider:'ElevenLabs', type:'Vertrieb', status:'Black Friday · Live-Ansicht', title:'ElevenLabs zeigt Agenten-Aktivität am Black Friday live', summary:'ElevenLabs veröffentlicht eine Live-Karte mit zusammengefassten Anrufen, E-Mails und Chats, die Kunden-Agenten gerade führen. Gezeigt wird die Menge, nicht wie viele Anliegen gelöst wurden.', impact:'Zeigt, wie viel Kundenkontakt bereits über Agenten läuft. Für den eigenen Service gilt: nicht die Anzahl der Gespräche zählt, sondern gelöste Anliegen und zufriedene Kunden.', url:'https://elevenlabs.io/agents-at-scale'},
  {date:'2026-11-26', provider:'OpenAI', type:'Produkt', hot:true, status:'Ab sofort · alle ChatGPT-Tarife', title:'GPT-6.2: Limits sind 40 Prozent schneller erreicht', summary:'Laut The Decoder war die Nutzung von Astra und Sol durch einen Abrechnungsfehler zu günstig berechnet. Nach der Korrektur ist das Limit bei Astra rund 40 und bei Sol rund 25 Prozent schneller erreicht. Als Ausgleich gibt es einen zusätzlichen Reset, Business-Kunden bekommen bis Jahresende den Fast-Mode ohne Aufpreis.', impact:'Wer im Alltag viel mit Astra arbeitet, stößt früher an Grenzen. Routineaufgaben (Texte, Zusammenfassungen) auf Sol legen, Astra für schwierige ERP- und Analysefragen aufheben.', url:'https://the-decoder.de/openai-hat-sich-verrechnet-gpt-6-2-nutzer-erreichen-ihre-limits-jetzt-40-prozent-schneller/', language:'de'},
  {date:'2026-11-25', provider:'OpenAI', type:'Produkt', hot:true, status:'Test mit ersten Firmenkunden', title:'Private Inference: Firmendaten bleiben auch für OpenAI unsichtbar', summary:'OpenAI testet „Private Inference“: Anfragen laufen auf abgeschirmter, überprüfbarer Hardware, OpenAI selbst soll die Daten nicht einsehen können. Preise und Starttermin sind noch offen.', impact:'Ein wichtiger Schritt für sensible Daten wie Einkaufspreise oder Kundendaten im ERP. Bis es allgemein verfügbar und vertraglich geregelt ist, bleiben Testdaten Pflicht.', url:'https://the-decoder.de/openai-will-firmendaten-mit-private-inference-vor-sich-selbst-verstecken/', language:'de'},
  {date:'2026-11-26', provider:'A11', type:'Produkt', hot:true, status:'Laut t3n/dpa · ab ca. 50 Mio. € Umsatz', title:'Lumarc: europäische Alternative zu Palantir aus Berlin', summary:'Das Berliner Unternehmen A11 bringt die KI-Software Lumarc. Sie verknüpft Daten aus Buchhaltung, Produktion und E-Mails in Echtzeit und macht Vorschläge, die ein Mensch freigibt. Betrieb im eigenen Rechenzentrum, bei einem deutschen Cloud-Anbieter oder ganz offline.', impact:'Zeigt, wohin ERP plus KI geht: Daten verknüpfen, Vorschläge machen, Mensch entscheidet. Genau dieses Prinzip (Vorschlag statt Automatik) fürs eigene ERP übernehmen.', url:'https://t3n.de/news/konkurrenz-fuer-palantir-berliner-firma-a11-startet-ki-software-als-europaeische-alternative-1775435', language:'de'},
  {date:'2026-11-25', provider:'Anthropic', type:'Produkt', status:'Claude Code 2.1.332', title:'Claude Code holt Skills direkt aus MCP-Servern', summary:'Die neue Version lädt Skills aus MCP-Servern (Beta), sie erscheinen im /-Menü als server:skill. Dazu kommen ein neues Hook-Ereignis vor Shell-Befehlen von Skills, strengere Sicherheitsregeln für Computer Use auf dem Mac und über 90 Fehlerbehebungen.', impact:'Ein ERP-MCP-Server kann künftig fertige Abläufe (z. B. „Artikel anlegen prüfen“) gleich mitliefern. Neue Skills erst im Testprojekt freigeben.', url:'https://code.claude.com/docs/en/changelog#2-1-332'},
  {date:'2026-11-25', provider:'GitHub', type:'Produkt', status:'Ab 30.12.2026', title:'Copilot Code Review wird über die Organisation abgerechnet', summary:'Ab dem 30. Dezember landen die Kosten für Copilot-Code-Reviews standardmäßig bei der Organisation statt beim Mitglied, sofern nichts anderes eingestellt ist. Betroffen sind Copilot Business und Enterprise.', impact:'Falls ihr Copilot im Team nutzt: vor dem 30.12. Richtlinie und Budget prüfen, sonst steigen die Ausgaben unbemerkt.', url:'https://github.blog/changelog/2026-11-25-copilot-code-review-billing-will-default-to-the-organization'},
  {date:'2026-11-25', provider:'xAI', type:'Produkt', status:'Laut OnlineMarketing.de', title:'Grok Build: Apps, Dashboards und Websites direkt im Chat', summary:'Laut OnlineMarketing.de ist Grok Build jetzt breit verfügbar. Aus einer Beschreibung entstehen im Chat Spiele, Dashboards, Apps oder Websites, die sich per Link teilen lassen.', impact:'Konkurrenz zu Claude Artifacts und Gemini Canvas. Für kleine interne Helfer (Leasing-Rechner, Checklisten) gut zum Vergleichen – nur mit Beispieldaten.', url:'https://news.google.com/rss/articles/CBMigAFBVV95cUxQWGgzamFKUk12bW5rRGVjVTZURHcyX2dBcjRyaF9nWERyWDNhNVIwYmVqdlRDWVR0dzcwRGJhTVpWNnE2VWRFTmpwM0hwTFJWTkluWEYta2VHRzRTeVQ5eTQ3czJxY2ZHQ2llem1PQ25RSjhQRzlkTGtCQTdBNWdrZg?oc=5', language:'de'},
  {date:'2026-11-24', provider:'OpenAI', type:'Vertrieb', status:'Kundenbeispiel', title:'Clay: Vertrieb recherchiert Kunden und Deals per Plugin', summary:'Das Startup Clay nutzt GPT-6-Modelle und Plugins für ChatGPT und Codex, damit Vertriebsteams Firmen und Deals direkt im Chat recherchieren können – Sol als Standard, Astra für schwierige, Luna für günstige Aufgaben.', impact:'Übertragbar auf B2B und Dienstrad-Leasing: Firmenprofile von Partnerfirmen vorab recherchieren lassen, nur aus öffentlichen Quellen.', url:'https://openai.com/business/customer-stories/clay-plugins-openai'},
  {date:'2026-11-24', provider:'Anthropic', type:'Agent', hot:true, status:'Beta · Team und Enterprise', title:'Claude Ship: Agenten prüfen, reparieren und geben Code frei', summary:'Laut The Decoder kombiniert Claude Ship das Code Review mit zwei neuen Agenten: PR Steward überarbeitet Änderungen bei roten Tests oder Anmerkungen, Claude Approvals entscheidet nach einer Richtlinie im Projekt, wann ein Mensch zustimmen muss. Abgerechnet wird nach Token-Verbrauch.', impact:'Für die ERP-Entwicklung spannend: Kleine Änderungen laufen schneller durch, kritische Bereiche (Preise, Buchungen, Kundendaten) bleiben per Richtlinie bei euch. Unbedingt ein Budget setzen – PR Steward hat standardmäßig kein Ausgabenlimit.', url:'https://the-decoder.de/claude-ship-anthropic-laesst-ki-agenten-ueber-code-freigaben-entscheiden/', language:'de'},
  {date:'2026-11-24', provider:'Anthropic', type:'Produkt', hot:true, status:'Beta · Mac und Windows', title:'Claude Artifacts werden zu Desktop-Apps', summary:'Artifacts lassen sich jetzt als eigene App auf Mac oder Windows installieren und im Dock behalten. Programmierkenntnisse braucht es nicht, nötig sind die aktuelle Claude-App und ein (auch kostenloses) Konto.', impact:'Kleine Helfer wie ein Preisrechner, eine Leasing-Übersicht oder dieser KI Kompass liegen damit wie normale Programme auf dem Rechner. Ideal für Werkzeuge, die das Team täglich öffnet.', url:'https://the-decoder.de/anthropic-macht-claude-artifacts-zu-eigenstaendigen-desktop-apps-fuer-macos-und-windows/', language:'de'},
  {date:'2026-11-24', provider:'Anthropic', type:'Agent', status:'Tasks & Elicitation allgemein verfügbar', title:'MCP wird erwachsen: Tasks, Rückfragen und Skills', summary:'Laut The Decoder sind „Tasks“ (lange Aufgaben im Hintergrund) und „Elicitation“ (Rückfragen an den Menschen) im Model Context Protocol jetzt allgemein verfügbar, „Skills over MCP“ ist in der Beta. Es gibt über 10.000 Konnektoren für Claude.', impact:'Ein eigener MCP-Server fürs ERP kann damit länger laufende Aufgaben übernehmen und bei Unklarheiten nachfragen, statt zu raten – etwa vor einer Preisänderung.', url:'https://the-decoder.de/anthropic-baut-model-context-protocol-fuer-autonomere-ki-agenten-aus/', language:'de'},
  {date:'2026-11-23', provider:'OpenAI', type:'Produkt', status:'Open Source · früher Stand', title:'Shirudo: KI-Schutzschild für Server bis zum Patch', summary:'OpenAI und Cisco stellen Shirudo vor. KI-Agenten schreiben damit vorübergehende Schutzprogramme für Linux-Server, die eine Sicherheitslücke abdichten, bis der echte Patch installiert ist.', impact:'Noch ein Werkzeug für IT-Profis, aber ein Signal: Angriffe und Abwehr laufen zunehmend über KI-Agenten. Server- und Shop-Updates nicht aufschieben.', url:'https://www.heise.de/news/Shirudo-OpenAI-und-Cisco-stellen-KI-Schutzschild-fuer-Linux-Server-vor-11535772.html', language:'de'},
  {date:'2026-11-24', provider:'Google', type:'Produkt', hot:true, status:'Weltweit · Desktop', title:'Google-Startseite ohne Suchknopf, dafür mit KI-Leiste', summary:'Laut heise entfällt auf der Desktop-Startseite der Knopf „Google-Suche“. Stattdessen gibt es KI-Knöpfe für Bilder, Dokumentfragen und Brainstorming, eine Seitenleiste mit den letzten KI-Anfragen und temporäre Threads im KI-Modus.', impact:'Die Suche wird endgültig zum Gespräch. Wer im Shop verkauft, braucht Inhalte, die eine KI zitieren kann: klare Produktdaten, Größenberatung, Service-FAQ.', url:'https://www.heise.de/news/Google-fuehrt-eine-neue-Suchseite-mit-KI-Seitenleiste-ohne-Suchbutton-ein-11536330.html', language:'de'},
  {date:'2026-11-23', provider:'Google', type:'Produkt', status:'Nur USA · freiwillig', title:'KI-Modus der Suche greift auf Drive, Wallet und Gemini zu', summary:'Google verknüpft die „Personal Intelligence“ der Suche mit Drive, Wallet und der Gemini-App – nur wenn Nutzer es erlauben. Wallet darf nur gelesen werden. Ein Termin für Deutschland fehlt.', impact:'Persönliche Suchergebnisse werden Standard. Für dienstliche Google-Konten bewusst entscheiden, welche Verknüpfungen aktiv sein dürfen.', url:'https://t3n.de/news/google-verknuepft-ki-modus-drive-1775003', language:'de'},
  {date:'2026-11-23', provider:'Google', type:'Produkt', status:'Gemini-App', title:'Gemini Canvas baut Tracker, Rechner und Lernkarten', summary:'Google zeigt, wie Canvas aus Tabellen Tracker, Preisrechner oder Aufgabenlisten macht, Quizze aus PDFs erstellt und Texte direkt auf der Arbeitsfläche überarbeitet.', impact:'Schneller Weg zu kleinen Werkzeugen ohne Programmierung: z. B. ein Rechner für Dienstrad-Raten oder eine Checkliste für die Fahrradübergabe – mit Beispielwerten statt echter Kundendaten.', url:'https://blog.google/innovation-and-ai/products/gemini-app/gemini-canvas-tasks/'},
  {date:'2026-11-23', provider:'OpenAI', type:'Vertrieb', status:'Kundenbeispiel', title:'Richpanel: Hälfte des Supports in 30 Tagen automatisiert', summary:'Das Startup Richpanel setzt GPT-Modelle für Support-Agenten ein und verspricht Kunden 50 Prozent Automatisierung binnen 30 Tagen, sonst Geld zurück. Laut eigenen Angaben klappte das in rund 300 Einführungen.', impact:'Zeigt, wohin der Kundenservice geht. Aber: Laut einer aktuellen Umfrage bewerten viele Kunden automatisierten Service schlechter. Erst Standardfragen (Lieferstatus, Öffnungszeiten, Termin) automatisieren, Beratung bleibt beim Menschen.', url:'https://openai.com/business/customer-stories/richpanel-ai-customer-support'},
  {date:'2026-11-23', provider:'Meta', type:'Vertrieb', hot:true, status:'USA · Black Friday', title:'KI-Agent Muse kauft für Kunden bei Walmart ein', summary:'Laut The Verge kann Metas Agent Muse über ein Agenten-Gateway von Walmart Black-Friday-Einkäufe erledigen. Der Kunde sagt, was er will, der Agent sucht, vergleicht und bestellt.', impact:'„Agentic Commerce“ kommt: Künftig vergleicht oft ein Agent statt des Kunden. Für den Shop heißt das: vollständige Produktdaten (Rahmenhöhe, Akku, Motor, Lieferzeit), klare Preise und Verfügbarkeit, damit Agenten euer Angebot richtig lesen.', url:'https://www.theverge.com/ai-artificial-intelligence/1039874/walmart-agent-gateway-meta-muse-black-friday'},
  {date:'2026-11-22', provider:'Perplexity', type:'Agent', hot:true, status:'Laut The Decoder', title:'Perplexity-Agenten beobachten das Web rund um die Uhr', summary:'Perplexity lässt Agenten dauerhaft Websites und Themen überwachen und meldet Änderungen, statt nur auf einzelne Fragen zu antworten.', impact:'Ideal für Marktbeobachtung: Preise und Aktionen von Wettbewerbern, neue Modelle von Herstellern oder Lieferzeiten im Blick behalten. Nur öffentliche Seiten beobachten lassen.', url:'https://the-decoder.de/perplexity-laesst-ki-agenten-das-web-als-ganzes-rund-um-die-uhr-beobachten/', language:'de'},
  {date:'2026-11-23', provider:'Z.ai', type:'Modell', status:'Laut The Decoder', title:'GLM-5.4 rechnet doppelt und zielt auf Programmierung', summary:'Z.ai stellt GLM-5.4 vor, das Antworten in einem zweiten Durchgang prüft. Laut OrcaRouter sind die Kosten je erledigter Aufgabe entscheidender als der reine Tokenpreis.', impact:'Für die ERP-Entwicklung ein weiteres günstiges Modell zum Vergleich. Bei chinesischen Anbietern Datenstandort und Vertrag besonders genau prüfen.', url:'https://the-decoder.de/z-ai-laesst-glm-5-4-zweimal-rechnen-und-ruft-generalized-coding-aus/', language:'de'},
  {date:'2026-11-20', provider:'Marktstudie', type:'Vertrieb', hot:true, status:'Laut CallCenterProfi', title:'Kunden fragen zuerst ihre KI, dann den Service', summary:'Laut einer Studie klären viele Kunden Fragen zuerst mit ihrem eigenen KI-Assistenten und melden sich erst danach beim Kundenservice – oft schon mit einer fertigen Erwartung.', impact:'Für Werkstatt und Verkauf: Kunden kommen vorinformiert, manchmal falsch. FAQ zu Inspektion, Akku-Pflege, Garantie und Leasing so schreiben, dass KI-Assistenten sie korrekt wiedergeben.', url:'https://news.google.com/rss/articles/CBMiyAFBVV95cUxPZ0F2eDhSMWRYVWx0Y29iU0FRYnpodzBXWndDcTVueEZvbWNNRGJKeTAxQjRZbXRiaW53UHBxVU1qOVRELTJSbTJWQ01PdjlESFFpOVdQNUtmenAwdndwNnk2OUF4WUpMMXF4QjZyYlFCNThSUWo3S3Q1bEN2aENWV01WbUlEV05EMFNiQV9ENFgxSlZKcHMwY3hWUVlhSUE5MVllRFlBYUNzRHZzODk2Q0REWDg3U05jRzdqemd0M2c0dl80eFowTQ?oc=5', language:'de'},
  {date:'2026-11-20', provider:'Nous Research', type:'Agent', hot:true, status:'Laut The Decoder · Open Source', title:'Hermes Agent zieht in Microsoft Teams ein', summary:'Laut The Decoder lässt sich der beliebte Open-Source-Agent Hermes jetzt direkt in Microsoft Teams nutzen. Er arbeitet dort in Chats und Kanälen mit.', impact:'Spannend, wenn ihr Teams nutzt: Hermes kann Aufgaben dort annehmen, wo das Team ohnehin schreibt. Erst in einem Testkanal mit fiktiven Daten ausprobieren und Rechte eng setzen.', url:'https://the-decoder.de/hermes-beliebter-open-source-agent-zieht-in-microsoft-teams-ein/', language:'de'},
  {date:'2026-11-19', provider:'Google', type:'Agent', hot:true, status:'Rollout · Gemini-App für Mac', title:'Gemini steuert Programme auf dem Mac', summary:'Die Gemini-App für Mac bekommt Computer Use: Sie bedient Desktop-Programme im Hintergrund und erledigt wiederkehrende Klickarbeit selbstständig.', impact:'Ein Vorgeschmack für Routinearbeit ohne Schnittstelle, etwa Daten aus einem Herstellerportal übertragen. Nur mit Testkonten probieren und nie an Kasse, Bank oder Kundendaten lassen.', url:'https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/'},
  {date:'2026-11-19', provider:'Google', type:'Produkt', status:'Weltweit · Desktop', title:'Google-Startseite bekommt KI-Chats', summary:'Laut The Verge und The Decoder zeigt Google auf der Desktop-Startseite eine einklappbare Seitenleiste für KI-Suchen. Gespräche lassen sich dort direkt fortsetzen.', impact:'Noch mehr Suchanfragen enden in einer KI-Antwort statt auf einer Website. Für den Shop zählen klare Produktdaten, FAQ und ein gepflegtes Google-Unternehmensprofil.', url:'https://www.theverge.com/tech/1038059/google-search-homepage-ai-chats'},
  {date:'2026-11-19', provider:'Google', type:'Produkt', status:'Gemini-App', title:'Chatverlauf aus anderen KI-Apps nach Gemini holen', summary:'Google bietet einen Import für Verläufe aus anderen KI-Assistenten an, damit der Wechsel ohne Neuanfang klappt.', impact:'Vor einem Import prüfen, was in alten Chats steht. Nichts übertragen, was Kundendaten oder interne Preise enthält.', url:'https://blog.google/innovation-and-ai/products/gemini-app/switch-ai-assistants-transfer-history/'},
  {date:'2026-11-19', provider:'Google', type:'Produkt', status:'Gemini API', title:'Tool Retrieval: Gemini wählt passende Werkzeuge selbst', summary:'Die Gemini API kann aus vielen hinterlegten Werkzeugen automatisch die passenden für eine Anfrage heraussuchen, statt alle mitzuschicken.', impact:'Für das eigene ERP interessant: Ein Agent mit vielen Funktionen (Lager, Werkstatt, Shop) bleibt so schneller und günstiger.', url:'https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/'},
  {date:'2026-11-18', provider:'Google', type:'Modell', hot:true, status:'App, AI Studio und API', title:'Gemini 4 Neon: Spitzenmodell zum halben Preis', summary:'Google stellt Gemini 4 Neon für Programmierung, Wissensarbeit und Wissenschaft vor. Laut TestingCatalog liegt es im Vals-Index knapp hinter Claude Fable 5.2, bei weniger als halben Kosten je Aufgabe. Es kann parallel Hydrogen-Unteragenten steuern.', impact:'Für ERP-Prototypen ein neuer Kandidat: dieselbe Aufgabe mit Neon, Fable und GPT-6.2 lösen und Qualität sowie Kosten vergleichen. Die Benchmark-Zahlen stammen von Dritten.', url:'https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/'},
  {date:'2026-11-18', provider:'GitHub', type:'Produkt', status:'Verfügbar', title:'Copilot: Gemini 4 Neon und neue Anbindungen', summary:'GitHub Copilot bietet Gemini 4 Neon an und verbindet sich mit Diensten wie Supabase, Box und Calendly. Teams können Copilot zudem mit eigenen Vorgaben anpassen.', impact:'Für die ERP-Entwicklung: Team-Vorgaben einmal festlegen (Sprache, Stil, Datenschutzregeln), damit jeder Vorschlag dazu passt.', url:'https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot'},
  {date:'2026-11-17', provider:'OpenAI', type:'Vertrieb', hot:true, status:'ChatGPT · Plugins', title:'ChatGPT for Sales: Vertriebsassistent mit 30 Partner-Plugins', summary:'OpenAI bringt ein Sales-Plugin in ChatGPT und über 30 neue oder erweiterte Partner-Plugins. Es hilft bei Firmenrecherche, Gesprächsvorbereitung, Nachfassen, Risiko im Deal und Angeboten.', impact:'Direkt für dich: JobRad- und B2B-Anfragen vorbereiten, Nachfass-Mails entwerfen, Angebote gegenlesen. Erst mit anonymisierten Fällen testen; Preise und Tarif im eigenen Konto prüfen.', url:'https://openai.com/index/introducing-chatgpt-for-sales'},
  {date:'2026-11-17', provider:'OpenAI', type:'Modell', hot:true, status:'ChatGPT Work, Codex und API', title:'GPT-6.2 Astra und Sol: mehr Leistung, Astra günstiger', summary:'Astra ist für komplexe Arbeit gedacht, Sol für den Alltag. Laut Berichten kostet Astra in der API 8 US-Dollar je Million Eingabe- und 40 je Million Ausgabe-Tokens, rund 20 Prozent weniger als zuvor. Sol bleibt bei 2 und 10 Dollar und liegt laut OpenAI fast gleichauf mit Astra.', impact:'Für die meisten Vertriebs- und Shopaufgaben reicht Sol. Astra für schwierige ERP-Konzepte aufheben. Preise vor dem Einsatz auf der OpenAI-Seite prüfen.', url:'https://openai.com/index/introducing-gpt-6-2-astra-sol'},
  {date:'2026-11-17', provider:'Microsoft', type:'Produkt', status:'Ignite 2026', title:'Copilot wird zum „Betriebssystem für die Arbeit“', summary:'Auf der Ignite zeigt Microsoft Office-Programme direkt in Copilot. Dazu kommen sieben eigene MAI-Modelle, etwa MAI Code 2 und Code 2 Flash in GitHub Copilot, die vor allem günstiger sein sollen.', impact:'Wer Microsoft 365 nutzt, bekommt KI dort, wo Mails, Tabellen und Angebote ohnehin entstehen. Lizenzen und Datenschutzeinstellungen vorher mit der IT klären.', url:'https://arstechnica.com/gadgets/2026/11/microsoft-calls-copilot-the-new-os-for-work-at-ignite-keynote/'},
  {date:'2026-11-17', provider:'Google', type:'Agent', status:'Rollout · Gemini-App', title:'Gemini erledigt Aufgaben im neuen Task-Modus', summary:'Gemini kann laut Google jetzt Termine vereinbaren, Rechnungen auswerten und über angebundene Dienste einkaufen. Dafür verbindet man Mail, Kalender und Zahlungsmittel. Die Aufgaben laufen laut Google in abgeschotteten virtuellen Maschinen.', impact:'Kunden lassen Termine künftig von Assistenten buchen. Prüfen, ob eure Online-Terminbuchung für Werkstatt und Probefahrt einfach und eindeutig bedienbar ist. Firmenkonten erst verbinden, wenn der Datenschutz geklärt ist.', url:'https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/'},
  {date:'2026-11-17', provider:'Google', type:'Produkt', status:'Start in Deutschland laut Golem.de', title:'Ask Maps: Google Maps beantwortet Fragen per KI', summary:'Laut Golem.de ist Ask Maps in Deutschland gestartet. Google Maps beantwortet damit Fragen zu Orten im Dialog.', impact:'Die Google-Unternehmensprofile der Filialen aktuell halten: Öffnungszeiten, Werkstattleistungen, Fotos und Antworten auf Bewertungen sind die Grundlage, aus der solche Antworten vermutlich schöpfen.', url:'https://www.golem.de/news/ask-maps-startet-in-deutschland-google-maps-wird-zum-ki-guide-2611-215299.html', language:'de'},
  {date:'2026-11-17', provider:'Google', type:'Produkt', status:'Rollout · Gemini-App', title:'Gemini: Training abschalten, Verlauf behalten', summary:'Laut Ars Technica trennt Google in der Gemini-App den Chatverlauf vom KI-Training. Bisher musste man den Verlauf ganz abschalten, um nicht zum Training beizutragen.', impact:'Wer Gemini beruflich testet: Einstellung prüfen und das Training abschalten. Trotzdem keine Kundendaten ohne Vertrag eingeben.', url:'https://arstechnica.com/ai/2026/11/google-will-let-you-opt-out-of-ai-training-in-gemini-without-losing-your-history/'},
  {date:'2026-11-17', provider:'OpenAI', type:'Agent', status:'Angebot für den US-Markt', title:'GPT-6 bedient Portale wie ein Sachbearbeiter', summary:'Laut The Decoder lässt OpenAI GPT-6 Astra und Luna Klinik- und Versicherungsportale per Maus und Tastatur bedienen. Ein Vorgang mit Luna kostet demnach rund 8,5 US-Cent.', impact:'Zeigt, wohin Computer-Use geht: Agenten arbeiten auch dort, wo es keine Schnittstelle gibt. Später interessant für Hersteller- oder Leasingportale ohne API – vorher Rechte und Freigaben klären.', url:'https://the-decoder.de/openai-laesst-gpt-6-als-digitalen-sachbearbeiter-durch-kliniksoftware-und-versicherungsportale-klicken/', language:'de'},
  {date:'2026-11-16', provider:'Alibaba', type:'Modell', status:'Medienberichte', title:'Qwen 4 Max wird stärker und günstiger', summary:'Laut heise legt Alibabas Spitzenmodell deutlich zu und wird zugleich günstiger. BornCity nennt einen Preis von 1,50 US-Dollar je Million Eingabe-Tokens.', impact:'Ein Signal für weiter fallende Preise. Für Kunden- und Betriebsdaten gilt: Anbieter, Serverstandort und Vertrag prüfen, bevor man testet.', url:'https://news.google.com/rss/articles/CBMisAFBVV95cUxPT3FQMm02YlVxMVE5N3pWdmZRbFowNXRBR0xJYzVvS09MeWQ2Y01aRkNLS2xpbmthdG11SHBxLUhtckp0SUZKb1Y0QTYxd1VZc0xPYVp2Y1REVnRNUEpUOHZXTFVDcGZVWE5ZLTFsdFY0alh2TkhGcTJuVzZKSlR4dkVod203RWZLVWJabTREVWl5VkJManNfT3RybDJTaS1mNWQ1bU9GeWtOY3BqOGlUTQ?oc=5', language:'de'},
  {date:'2026-11-16', provider:'GitHub', type:'Produkt', status:'Seit 16.11.2026 entfernt', title:'GitHub Copilot entfernt weitere Modelle', summary:'Seit dem 16. November sind mehrere ältere Modelle aus den meisten Copilot-Bereichen entfernt. Claude Opus 5 steht nicht mehr in der Modellauswahl. Weitere Abschaltungen folgen am 14. Dezember.', impact:'Fest eingetragene Modelle in Einstellungen und Skripten der ERP-Entwicklung jetzt prüfen.', url:'https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026'},
  {date:'2026-11-16', provider:'Hugging Face', type:'Produkt', status:'Verfügbar', title:'Offene Modelle laufen über OpenRouter', summary:'Hugging Face leitet Anfragen an offene Modelle jetzt über OpenRouter. Das wählt je Anfrage den Anbieter nach Preis, Tempo und Zuverlässigkeit und funktioniert mit OpenAI- und Anthropic-kompatiblen Schnittstellen.', impact:'Erleichtert Vergleiche mit offenen Modellen. Vor echten Daten klären, bei welchem Anbieter und in welchem Land die Anfrage verarbeitet wird.', url:'https://huggingface.co/blog/openrouter'},
  {date:'2026-11-16', provider:'Anthropic', type:'Modell', status:'Unterstützte Plattformen', title:'Weitere Claude-Modelle markieren Texte mit Wasserzeichen', summary:'Texte von Claude Opus 4.6, Opus 4.5, Sonnet 4.5 und Haiku 4.5 tragen auf unterstützten Plattformen ein Text-Wasserzeichen, das sie als KI-generiert kennzeichnet.', impact:'KI-Texte werden zunehmend erkennbar. Produkt- und Marketingtexte deshalb immer selbst überarbeiten und mit eigenem Wissen anreichern.', url:'https://platform.claude.com/docs/en/release-notes/overview'},
  {date:'2026-11-15', provider:'Meituan', type:'Modell', status:'Offene Gewichte · API', title:'LongCat-2.5 als offenes Modell für KI-Agenten', summary:'Meituan veröffentlicht die Gewichte seines Mixture-of-Experts-Modells mit 1,6 Billionen Parametern. Laut The Decoder versteht es Text, Bilder und Videos und liegt bei Coding-Benchmarks nahe an westlichen Spitzenmodellen.', impact:'Vor allem ein Signal, wie schnell offene Modelle aufholen. Für den Betrieb erst relevant, wenn ihr Modelle selbst hosten wollt.', url:'https://the-decoder.de/longcat-2-5-meituan-gibt-gewichte-seines-16-billionen-parameter-modells-fuer-ki-agenten-frei/', language:'de'},
  {date:'2026-11-13', provider:'GitHub', type:'Modell', status:'Allgemein verfügbar · schrittweiser Rollout', title:'Gemini 4 Hydrogen jetzt in GitHub Copilot', summary:'GitHub bietet Googles neues Flash-Modell für schnelles agentisches Programmieren und mehrstufige Abläufe an. Verfügbar in Copilot Pro, Pro+, Max, Business und Enterprise, abgerechnet nach Nutzung.', impact:'Für Prototypen des eigenen ERP vergleichen: dieselbe kleine Aufgabe mit Hydrogen und einem größeren Modell lösen und Qualität sowie Kosten gegenüberstellen.', url:'https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot'},
  {date:'2026-11-13', provider:'GitHub', type:'Produkt', status:'Abschaltung am 14.12.2026', title:'GitHub Copilot schaltet im Dezember ältere Modelle ab', summary:'Am 14. Dezember entfernt GitHub ausgewählte Modelle aus Chat, Agentenmodus und Codevervollständigung. Arbeitsabläufe und Integrationen sollen vorher auf unterstützte Modelle umgestellt werden.', impact:'Prüfen, ob Skripte oder Einstellungen für die ERP-Entwicklung ein betroffenes Modell fest eingetragen haben.', url:'https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december'},
  {date:'2026-11-13', provider:'Hugging Face', type:'Produkt', status:'Open Source · Version 1.0', title:'llama.cpp 1.0 für lokale KI-Modelle', summary:'Die Bibliothek, mit der viele Programme Sprachmodelle lokal ausführen, erreicht Version 1.0. Inkompatible Änderungen sollen künftig klar an der Versionsnummer erkennbar sein.', impact:'Interessant, wenn sensible Daten wie Kundendaten den eigenen Rechner nicht verlassen sollen: lokale Modelle werden stabiler und einfacher einzubinden.', url:'https://huggingface.co/blog/ggml-org/llama-cpp-v1'},
  {date:'2026-11-12', provider:'Anthropic', type:'Agent', status:'Zugang über das Anthropic-Account-Team', title:'Claude Managed Agents auf eigener Infrastruktur', summary:'Anthropic bietet den kompletten Managed-Agents-Dienst jetzt auch zum Selbstbetrieb an. Agenten, Sitzungen und Verläufe werden dann auf der eigenen Infrastruktur gespeichert.', impact:'Für später vormerken, wenn Agenten mit Kunden- oder ERP-Daten arbeiten und diese Daten im eigenen Haus bleiben sollen.', url:'https://platform.claude.com/docs/en/release-notes/overview'},
  {date:'2026-11-12', provider:'Anthropic', type:'Produkt', status:'Beta · Team und Enterprise', title:'Claude Meetings startet in der Beta', summary:'Claude kann laut Anbieter an Google Meet teilnehmen, Notizen erstellen und Fragen beantworten.', impact:'Mit einem freigegebenen Testgespräch prüfen, ob Aufgaben und Entscheidungen korrekt erfasst werden.', url:'https://support.claude.com/en/articles/12138966-release-notes'},
  {date:'2026-11-13', provider:'OpenAI', type:'Produkt', status:'Rollout · US-Pro', title:'ChatGPT Wallet startet in den USA', summary:'Autorisierte Einkäufe über einen Assistenten. Die Einführung betrifft berechtigte Pro-Nutzer in den USA.', impact:'Für dich in Deutschland vorerst ein Marktsignal. Für den Fahrradhandel perspektivisch interessant: Produktdaten und Checkout für Assistenten verständlich machen.', url:'https://openai.com/products/release-notes/?category=chatgpt'},
  {date:'2026-11-12', provider:'Google', type:'Modell', status:'API allgemein verfügbar', title:'Gemini 4 Hydrogen für schnellere Workflows', summary:'Google positioniert Hydrogen für häufige Aufgaben mit Tools und Code. Die Gemini API führt es als allgemein verfügbar.', impact:'Mit einem anonymisierten Artikelkatalog testen, ob die Extraktion von Merkmalen schnell und korrekt genug für eure Shop-Pflege ist.', url:'https://aistudio.google.com/docs/changelog'},
  {date:'2026-11-11', provider:'xAI', type:'Agent', status:'Tarif und Admin-Freigabe', title:'Grok Bot 1.0.1 ergänzt Meetings und Teams', summary:'Laut Changelog können Bots in ausgewählten Tarifen an unterstützten Videoanrufen teilnehmen. Team Bots in Microsoft Teams benötigen Freigaben.', impact:'Mit einem fiktiven Vertriebsmeeting ausprobieren, ob die Zusammenfassung Zusagen, offene Fragen und nächste Schritte korrekt trennt.', url:'https://x.ai/changelog/bot'},
  {date:'2026-11-10', provider:'Google', type:'Modell', status:'API verfügbar · App-Rollout', title:'Gemini 4 Carbon wird breiter verfügbar', summary:'Google öffnet das Modell für Entwickler und Unternehmen und führt es für bestimmte Endkundenangebote schrittweise ein.', impact:'Eher für einen komplexen Vergleich von ERP-Schnittstellen als für Produkttexte in Serie.', url:'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/'},
  {date:'2026-11-09', provider:'Anthropic', type:'Modell', status:'Zugang je nach Modell und Oberfläche', title:'Claude Fable 5.2 und Mythos 5.2', summary:'Anthropic aktualisiert seine Modelle für anspruchsvolle technische Aufgaben. Mythos hat gesonderte Zugangsvoraussetzungen.', impact:'Fable ist als Test für die technische Konzeption eures eigenen ERP interessant. Für die tägliche Vertriebsarbeit lohnt ein Vergleich mit einem günstigeren Modell.', url:'https://www.anthropic.com/claude-fable-and-mythos-5-2'},
  {date:'2026-11-02', provider:'xAI', type:'Agent', status:'Hersteller-Launch', title:'Grok Bot 1.0 führt Teamfunktionen aus', summary:'Der Hersteller kündigt gemeinsam genutzte Bots, proaktive Aufgaben und verbesserte Arbeit im Browser an.', impact:'Zuerst eine rein lesende Routine testen, zum Beispiel öffentliche Hersteller-News für eine interne Wochenübersicht.', url:'https://x.ai/news/grok-bot-1-0'},
  {date:'2026-10-26', provider:'OpenAI', type:'Modell', status:'Work, Codex und API', title:'GPT-6.1 Terra für visuelle Aufgaben und Computerarbeit', summary:'OpenAI führt Terra für Schreiben, visuelles Verständnis und Computerarbeit ein. Die API hat eine separate Abrechnung.', impact:'Ein bestehendes Produktdatenblatt und eine Shop-Ansicht auf widersprüchliche Angaben prüfen lassen.', url:'https://help.openai.com/en/articles/9624314-model-release-notes'},
  {date:'2026-10-08', provider:'Microsoft', type:'Vertrieb', status:'Öffentliche Vorschau', title:'Sales Development Agent im Microsoft-Umfeld', summary:'Microsoft beschreibt Recherche, Qualifizierung und Nachfassen. Für die öffentliche Vorschau nennt Microsoft den 16. November als geplanten Beginn des Creditverbrauchs.', impact:'Relevant, wenn ein Team Microsoft 365 und ein unterstütztes CRM einsetzt. Test: Qualifizierungsentwurf für eingehende Firmenanfragen.', url:'https://www.microsoft.com/en-us/copilot/blog/2026/10/08/bringing-crm-into-the-flow-of-work-and-agents-into-business-process-for-sales-and-service-teams/'},
  {date:'2026-09-30', provider:'HubSpot', type:'Vertrieb', status:'Credits und Tarif prüfen', title:'Breeze Prospecting Agent arbeitet mit Zielgruppen und Signalen', summary:'Die Anleitung zeigt, wie Vertriebsprozesse nach Zielgruppe, Signalen und Kontaktstrategie konfiguriert und getestet werden.', impact:'Für JobRad-B2B zuerst nur prüfen, welche Firmen zu eurem Profil passen, und Entwürfe intern bewerten.', url:'https://knowledge.hubspot.com/prospecting/use-the-prospecting-agent'},
  {date:'2026-09-21', provider:'xAI', type:'Modell', status:'API dokumentiert', title:'Grok 4.7 ist eine Modellgeneration', summary:'Die Modell-Dokumentation unterscheidet Chat und Code auf Basis von Grok 4.7 von spezialisierten Bild-, Video- und Sprachprodukten.', impact:'Vergleiche ein Recherche-Briefing mit einem zweiten Modell. Prüfe Quellen und trenne X-Beiträge von überprüfbaren Fakten.', url:'https://docs.x.ai/developers/models/grok-4.7'},
  {date:'2026-09-11', provider:'Salesforce', type:'Vertrieb', status:'Ankündigung · Zugang prüfen', title:'Agentforce erweitert Angebote für Inbound-Leads', summary:'Salesforce stellt unter anderem Piper zur Betreuung und Qualifizierung eingehender Kontakte vor.', impact:'Für den Fahrradhandel ist der Ablauf interessant: Anlass und Standort erfassen, qualifizieren und zur Prüfung an das Team übergeben.', url:'https://www.salesforce.com/news/stories/agentforce-job-ready-ai-agents/'}
];

export const sources = [
  {id:'openai', provider:'OpenAI', label:'ChatGPT und OpenAI Produktupdates', kind:'rss', feed:'https://openai.com/products/release-notes/rss.xml', url:'https://openai.com/products/release-notes/'},
  {id:'anthropic', provider:'Anthropic', label:'Claude API und Modelle', kind:'claude', feed:'https://platform.claude.com/docs/en/release-notes/overview.md', url:'https://platform.claude.com/docs/en/release-notes/overview'},
  {id:'claude-code', provider:'Anthropic', label:'Claude Code Changelog', kind:'rss', feed:'https://code.claude.com/docs/en/changelog/rss.xml', url:'https://github.com/anthropics/claude-code/releases'},
  {id:'grok-bot', provider:'xAI', label:'Grok Bot Versionsverlauf', kind:'rss', feed:'https://x.ai/changelog/bot/rss.xml', url:'https://x.ai/changelog/bot'},
  {id:'grok-build', provider:'xAI', label:'Grok Build Versionsverlauf', kind:'rss', feed:'https://x.ai/changelog/build/rss.xml', url:'https://x.ai/changelog/build'},
  {id:'gemini', provider:'Google', label:'Gemini Produktnews', kind:'rss', feed:'https://blog.google/products-and-platforms/products/gemini/rss/', url:'https://aistudio.google.com/docs/changelog'},
  {id:'openai-news', provider:'OpenAI', label:'OpenAI Newsroom', kind:'rss', feed:'https://openai.com/news/rss.xml', url:'https://openai.com/news/'},
  {id:'deepmind', provider:'Google', label:'Google DeepMind Blog', kind:'rss', feed:'https://deepmind.google/blog/rss.xml', url:'https://deepmind.google/discover/blog/'},
  {id:'google-ai', provider:'Google', label:'Google KI-Blog', kind:'rss', feed:'https://blog.google/technology/ai/rss/', url:'https://blog.google/technology/ai/'},
  {id:'copilot', provider:'GitHub', label:'GitHub Copilot Changelog', kind:'rss', feed:'https://github.blog/changelog/label/copilot/feed/', url:'https://github.blog/changelog/label/copilot/'},
  {id:'huggingface', provider:'Hugging Face', label:'Hugging Face Blog · offene Modelle', kind:'rss', feed:'https://huggingface.co/blog/feed.xml', url:'https://huggingface.co/blog'},
  {id:'gn-xai', provider:'xAI', label:'Google News · Berichte zu xAI und Grok', kind:'rss', feed:'https://news.google.com/rss/search?q=xAI+OR+Grok+when:7d&hl=de&gl=DE&ceid=DE:de', url:'https://news.google.com/search?q=xAI+OR+Grok+when:7d&hl=de&gl=DE&ceid=DE:de', language:'de'},
  {id:'gn-models', provider:'Weitere Anbieter', label:'Google News · Mistral, DeepSeek, Qwen, Llama & Co.', kind:'rss', feed:'https://news.google.com/rss/search?q=Mistral+OR+DeepSeek+OR+Qwen+OR+Llama+OR+%22Meta+AI%22+OR+Kimi+KI-Modell+when:7d&hl=de&gl=DE&ceid=DE:de', url:'https://news.google.com/search?q=Mistral+OR+DeepSeek+OR+Qwen+OR+Llama+OR+%22Meta+AI%22+OR+Kimi+KI-Modell+when:7d&hl=de&gl=DE&ceid=DE:de', language:'de'},
  {id:'gn-bigtech', provider:'Apple, Meta & Microsoft', label:'Google News · Apple Intelligence, Meta AI und Microsoft Copilot', kind:'rss', feed:'https://news.google.com/rss/search?q=%22Apple+Intelligence%22+OR+%22Meta+AI%22+OR+%22Microsoft+Copilot%22+when:7d&hl=de&gl=DE&ceid=DE:de', url:'https://news.google.com/search?q=%22Apple%20Intelligence%22%20OR%20%22Meta%20AI%22&hl=de&gl=DE&ceid=DE:de', language:'de'},
  {id:'claude-app', provider:'Anthropic', label:'Claude Apps · Versionshinweise', url:'https://support.claude.com/en/articles/12138966-release-notes'},
  {id:'grok-api', provider:'xAI', label:'Grok API · Versionshinweise', url:'https://docs.x.ai/developers/release-notes'},
  {id:'microsoft', provider:'Microsoft', label:'Dynamics 365 · Vertriebsupdates', url:'https://learn.microsoft.com/en-us/dynamics365/release-plan/'},
  {id:'salesforce', provider:'Salesforce', label:'Salesforce · Unternehmensmeldungen', url:'https://www.salesforce.com/news/'},
  {id:'hubspot', provider:'HubSpot', label:'HubSpot Breeze · Produktupdates', url:'https://www.hubspot.com/spotlight/all-releases?product=breeze'}
];

export const marketNews = [
  {
    date:'2026-11-27', provider:'Pedelecs und E-Bikes', type:'Unternehmen & Markt', hot:true, status:'Black Friday · Fahrradbranche', language:'de',
    title:'Black Week: Über 20 E-Bike-Shops mit Aktionen',
    summary:'Laut Wattmoves locken mindestens 22 E-Bike-Shops zur Black Week mit Rabatten, viele bis 30. November. Ein Preis-Tracker von Pedali zeigt: 2025 wurde etwa jedes achte E-Bike im November mindestens 10 Prozent günstiger als im Oktober.',
    url:'https://wattmoves.de/black-friday-black-week-e-bike-angebote-ueberblick/171487/'
  },
  {
    date:'2026-11-26', provider:'Handel', type:'Politik & Regulierung', hot:true, status:'Sicherheit · Black Friday', language:'de',
    title:'Mehr Ransomware gegen Händler vor dem Black Friday',
    summary:'Laut Versicherern und Beratern werden Händler im November rund 50 Prozent häufiger mit Erpressungssoftware angegriffen als im Monatsschnitt, KI-Werkzeuge beschleunigen die Angriffe. Nur 43 Prozent kleiner und mittlerer Händler haben eine Cyber-Versicherung.',
    url:'https://cyprus-mail.com/2026/11/26/retailers-head-into-black-friday-exposed-to-surging-ai-driven-cyber-threats'
  },
  {
    date:'2026-11-27', provider:'heise', type:'Politik & Regulierung', hot:true, status:'Sicherheit', language:'de',
    title:'Billige Inferenz-Anbieter greifen Prompts und Geheimnisse ab',
    summary:'Laut heise haben günstige Vermittler für KI-Modelle Inhalte von Anfragen offengelegt, und MiniMax soll Einstellungen gegen Datenspeicherung ignoriert haben.',
    url:'https://www.heise.de/news/AI-Supply-Chain-Guenstige-Inferenzangebote-greifen-Secrets-ab-11540914.html'
  },
  {
    date:'2026-11-27', provider:'Verbraucherzentrale', type:'Politik & Regulierung', hot:true, status:'Laut heise', language:'de',
    title:'Verbraucherzentrale mahnt OpenAI und Anthropic ab',
    summary:'Die Verbraucherzentrale Niedersachsen beanstandet Klauseln zu Preisänderungen und mangelnde Transparenz bei den Tarifen. Die Verbraucherzentrale Brandenburg klagt zudem gegen OpenAI wegen Kündigungs- und Preisregeln im ChatGPT-Abo.',
    url:'https://www.heise.de/news/Verbraucherzentrale-mahnt-OpenAI-und-Anthropic-ab-11540670.html'
  },
  {
    date:'2026-11-27', provider:'Bundesregierung', type:'Politik & Regulierung', status:'Laut heise', language:'de',
    title:'Bundesregierung will KI-Anbieter für Inhalte zahlen lassen',
    summary:'Die Bundesregierung will, dass KI-Anbieter für genutzte kreative Werke zahlen, und Medien besser schützen.',
    url:'https://www.heise.de/news/Bundesregierung-will-KI-Anbieter-zur-Kasse-bitten-11540057.html'
  },
  {
    date:'2026-11-27', provider:'Signal', type:'Politik & Regulierung', status:'Datenschutz', language:'de',
    title:'Signal blockiert Screenshots gegen KI-Assistenten im System',
    summary:'Signal sperrt Screenshots standardmäßig, weil KI-Assistenten von Apple, Google und Microsoft im Betriebssystem den Schutz von Apps umgehen können. Datenschützer warnen vor Überwachung.',
    url:'https://www.heise.de/news/KI-Agenten-im-Betriebssystem-Datenschuetzer-schlagen-Alarm-wegen-Ueberwachung-11541373.html'
  },
  {
    date:'2026-11-26', provider:'SAP', type:'Unternehmen & Markt', hot:true, status:'Laut Bloomberg', language:'de',
    title:'SAP erwägt Abbau von mindestens 10.000 Stellen für KI-Umbau',
    summary:'Laut Bloomberg bereitet SAP im Rahmen eines KI-Umbaus den Abbau von mindestens 10.000 Stellen vor. Die Zahl ist nicht endgültig, SAP äußerte sich nicht.',
    url:'https://www.heise.de/news/SAP-AI-First-10-000-Mitarbeiter-weniger-11539781.html'
  },
  {
    date:'2026-11-27', provider:'Gartner', type:'Unternehmen & Markt', status:'Prognose 2027', language:'de',
    title:'Europas IT-Ausgaben steigen über 1,5 Billionen Dollar',
    summary:'Gartner erwartet für 2027 rund 10 Prozent mehr IT-Ausgaben in Europa, ein wachsender Teil fließt in KI-Agenten.',
    url:'https://www.heise.de/news/Prognose-Europas-IT-Ausgaben-knacken-Marke-von-1-5-Billionen-US-Dollar-11541182.html'
  },
  {
    date:'2026-11-26', provider:'Schweiz', type:'Politik & Regulierung', status:'BACS', language:'de',
    title:'Schweiz meldet fünf Cyberangriffe mit KI-Agenten',
    summary:'Das Bundesamt für Cybersicherheit meldet fünf Angriffe mit KI-Agenten auf Schweizer Firmen und kritische Infrastruktur, vier davon waren erfolgreich. Opfer wurden nicht genannt.',
    url:'https://www.globalbankingandfinance.com/ai-agents-used-five-cyber-attacks-switzerland-government/'
  },
  {
    date:'2026-11-26', provider:'Z.ai und Moonshot', type:'Unternehmen & Markt', status:'Laut Reuters', language:'de',
    title:'Chinesische KI-Labore verschieben große Modelle auf 2027',
    summary:'Laut Insidern könnte GLM-5.5 von Z.ai ins erste Quartal 2027 rutschen, Kimi K4 von Moonshot auf Mitte 2027. Grund sind US-Chipregeln und Sperren gegen Destillation. Z.ai bestreitet eine Verzögerung.',
    url:'https://the-decoder.de/us-chipregeln-und-destillations-blockaden-zwingen-z-ai-und-moonshot-laut-insidern-zur-verschiebung-grosser-sprachmodelle-auf-2027/'
  },
  {
    date:'2026-11-27', provider:'Nvidia', type:'Chips & Infrastruktur', status:'Laut Bloomberg', language:'de',
    title:'Gesperrte Nvidia-Server tauchen in Shanghai auf',
    summary:'Laut Bloomberg steht trotz US-Exportsperre ein Nvidia-GB300-Rack in einem Rechenzentrum in Shanghai, eingesetzt als Sicherheit für einen Kredit.',
    url:'https://the-decoder.de/verbotene-nvidia-chips-landeten-trotz-us-exportsperre-in-chinesischem-rechenzentrum/'
  },
  {
    date:'2026-11-27', provider:'Bank of England', type:'Chips & Infrastruktur', status:'Finanzstabilitätsbericht', language:'de',
    title:'Bank of England: KI-Risiken der Hyperscaler über 4 Billionen Dollar',
    summary:'Laut Finanzstabilitätsbericht summieren sich die KI-Verpflichtungen der großen Cloud-Konzerne inklusive außerbilanzieller Posten auf gut 4 Billionen US-Dollar.',
    url:'https://stockanalysis.com/news/boe-financial-stability-report-ai-november-2026/'
  },
  {
    date:'2026-11-26', provider:'Pedelecs und E-Bikes', type:'Unternehmen & Markt', hot:true, status:'Fahrradbranche', language:'de',
    title:'ZIV startet Pro-Dashboard mit aktuellen Verkaufsdaten',
    summary:'Der Zweirad-Industrie-Verband baut seinen Marktdatenservice aus. Fachhändler, die anonymisierte Verkaufszahlen liefern, bekommen laut ZIV kostenlos ein Dashboard mit monatlichen Marktdaten und können sich mit dem Gesamtmarkt vergleichen.',
    url:'https://news.google.com/rss/articles/CBMixgFBVV95cUxPc1gyblRwT3lzYjhPaDA0N3EwOWZ3YWtoc2diZndBLVNyU1d3VWxCRmh5YXdzbFpMenZ0Q0tidDlib2Y0SGgxOWRtSDZNcFVpQmo0aV9WbEhPX0hLb2JmSnFjYkt6cTJmMHVLeUR0b0Z4UTVENHUzeHB2M0VQM2N5UzBuXy1oamFjYVZlN2ttc19IZEZfSGRla19uMXd4ajlnMlhWOTV1TWRrdnhSYW9KcEs0UERmcU0zMzMxVWRsSUxublROZkE?oc=5'
  },
  {
    date:'2026-11-25', provider:'Simon-Kucher', type:'Unternehmen & Markt', hot:true, status:'Studie · 1.200 Befragte', language:'de',
    title:'Fast jeder Zweite bricht wegen KI einen Kauf ab oder wechselt den Händler',
    summary:'Laut einer Simon-Kucher-Studie haben 45 Prozent der Deutschen wegen KI-Empfehlungen schon den Händler gewechselt und 44 Prozent einen Kauf abgebrochen – meist wegen eines besseren Preises, besserer Bewertungen oder Verfügbarkeit.',
    url:'https://www.simon-kucher.com/de/wer-wir-sind/newsroom/ki-shopping-studie-ki-vergrault-kunden-fast-die-haelfte-der-deutschen-brach'
  },
  {
    date:'2026-11-26', provider:'The Decoder', type:'Politik & Regulierung', hot:true, status:'Microsoft Threat Intelligence', language:'de',
    title:'Hacker übernehmen Netzwerke mit KI-Agenten in Minuten',
    summary:'Laut Microsoft nutzen Gruppen aus China, Nordkorea und Kriminelle das KI-Framework ARTEX. In einem Fall dauerte es fünf Minuten von geleakten Zugangsdaten bis zum Datenabgriff. Microsoft empfiehlt unter anderem Köder wie Honeypots und Honeytokens.',
    url:'https://the-decoder.de/microsoft-zeigt-wie-hacker-aus-china-und-nordkorea-fremde-netzwerke-mit-autonomen-ki-agenten-in-minuten-uebernehmen/'
  },
  {
    date:'2026-11-26', provider:'heise online', type:'Politik & Regulierung', status:'BSI', language:'de',
    title:'BSI warnt: KI als Angreifer – eine neue Ära hat begonnen',
    summary:'Das BSI warnt vor autonomen KI-Angriffen, bei denen Agenten Schwachstellen selbst finden und sofort ausnutzen. Für Betriebe heißt das: Updates schneller einspielen, Zugänge mit zweitem Faktor sichern, Zugangsdaten nie im Code oder in Chats ablegen.',
    url:'https://www.heise.de/news/Kuenstliche-Intelligenz-als-Angreifer-Eine-neue-Aera-hat-begonnen-11539545.html'
  },
  {
    date:'2026-11-26', provider:'t3n', type:'Unternehmen & Markt', hot:true, status:'Black Friday · Praxis', language:'de',
    title:'Mit ChatGPT einen Preisalarm bauen',
    summary:'Ein kurzer Prompt legt in ChatGPT eine geplante Aufgabe an, die regelmäßig prüft, ob ein Preis fällt. Im Test erkannte ChatGPT einen unseriösen Händler – trotzdem gilt: Ergebnisse prüfen, Fake-Shops können durchrutschen.',
    url:'https://t3n.de/news/black-friday-preisalarm-mit-chatgpt-prompt-1775229'
  },
  {
    date:'2026-11-25', provider:'velobiz.de', type:'Unternehmen & Markt', status:'Fahrradbranche', language:'de',
    title:'Onlinehandel rechnet mit Schub durch KI-Agenten',
    summary:'Das Branchenmagazin velobiz berichtet, dass der Onlinehandel einen Wachstumsschub durch KI-Einkaufsagenten erwartet – Thema auch für Fahrrad-Shops mit sauberen Produktdaten.',
    url:'https://news.google.com/rss/articles/CBMiowFBVV95cUxNelk2TkIyZFBtYm41UmpPTk1jZGg3VEJTblJYOFhtQ2thWWthaEkzWkVrUGJRV1hNN21zOXdSQ0pXREtrNmJIY09lOW9fVmozOTVkc0xqQ1BnYnlpbVhENlhtd2RCY3pIdlliTl9yLVp3bFBOSGt5UnYyVGNJQWM2emFLRVdvUTNLTnkwQ2Q5TWFYcXl3dUEtcTlCRlIzamFqNExR?oc=5'
  },
  {
    date:'2026-11-25', provider:'Lebensmittel Zeitung', type:'Unternehmen & Markt', status:'Agentic Commerce', language:'de',
    title:'Metas Einkaufsagent Muse startet im britischen Lebensmittelhandel',
    summary:'Nach Walmart in den USA kauft Metas Agent Muse nun auch im britischen Lebensmittelhandel ein. Gleichzeitig berichtet BASIC thinking über Datenschutzprobleme des Agenten.',
    url:'https://news.google.com/rss/articles/CBMizAFBVV95cUxPVkR3ODRXeC1LX0VaV1pxSldBQkljejR1YU5EUmNRTEV0MVcwYmI2dUlYZDMzVXhycFp0S05BQS10ZExCUVZTMG1tTHlfTTBHUm9aTFdKSTREeG5mZVNDbTZBVkRyWk9GWHNRZHNzVHQtM01rWEJ4NjJBc0gteFAyaDVBZ05HX0tVN2JDTk9BejNTNlYzeHduSEZ0UE5TVl90T1NiWkpGOThOMWFIeEg5ZU1GSFNFZkR5NzlGdFBkLWNTRGtYWC1iNHJ4TWs?oc=5'
  },
  {
    date:'2026-11-25', provider:'Automobilwoche', type:'Unternehmen & Markt', status:'Handel · WhatsApp', language:'de',
    title:'Mobile.de bringt Fahrzeugsuche mit KI auf WhatsApp',
    summary:'Mobile.de lässt Kunden Fahrzeuge direkt in WhatsApp suchen und verspricht Händlern KI-Unterstützung. Ein Vorbild für Beratung dort, wo Kunden ohnehin schreiben.',
    url:'https://news.google.com/rss/articles/CBMikgFBVV95cUxPM2QwVGZ5UTVKX0N3SW5Gd3BOVEJGY0Q2R0gtUFppbEF5M1FTYXlIVlJfWjZ2UldGOENrUGVkTXdJaWdKaTF5V1ZPTHdNRVZmM3RoLXBMM1ZaODJEOVNfUEM3VnN5bzFlWWxuRGtFTDR1S294Z2JHVm94OUFKRmFqZWF1NFVKbHVhYlFEMThzM3Nqdw?oc=5'
  },
  {
    date:'2026-11-25', provider:'etailment', type:'Unternehmen & Markt', status:'Umfrage', language:'de',
    title:'KI-Nutzung 2026: 37 Prozent der Unternehmen setzen KI ein',
    summary:'Laut etailment nutzt gut jedes dritte Unternehmen KI. Andere Erhebungen kommen je nach Frage auf deutlich andere Werte – die Richtung ist aber überall dieselbe: steil nach oben.',
    url:'https://news.google.com/rss/articles/CBMilAFBVV95cUxQT2l2N2xsOTFlb0xkaE9EQXhOSmxPR1BQZmVBejNlT3pMcTdzZUowcTVFcmlTbUhUeC1uVG9fZ3pIUkZQcFl4Y3VNMjFkV1RZcjZoSUJJR0pFQ0tRZGpkUjZDTEdPTEVDRmNrNXpqU2xhMWtOa2FPQkotYm9SemtQcmI5MnRiaVNLXzhpZW4yZnZVd2RP?oc=5'
  },
  {
    date:'2026-11-26', provider:'The Decoder', type:'Chips & Infrastruktur', status:'Laut Financial Times', language:'de',
    title:'Nvidia stoppt Serverlieferungen nach Südostasien',
    summary:'Nvidia hat Partner wie Dell und Supermicro angewiesen, vorerst keine Server nach Malaysia, Singapur, Thailand und Indonesien zu liefern. Hintergrund sind neue US-Exportregeln für Rechenleistung.',
    url:'https://the-decoder.de/nvidia-stoppt-vorerst-lieferungen-nach-malaysia-singapur-thailand-und-indonesien/'
  },
  {
    date:'2026-11-26', provider:'The Decoder', type:'Chips & Infrastruktur', status:'US-Behörde FCC', language:'de',
    title:'SpaceX darf eine Million Satelliten für KI-Rechenzentren starten',
    summary:'Die FCC genehmigt SpaceX bis zu eine Million Satelliten für Rechenzentren im All („Starmind“). Forschende warnen vor Weltraumschrott und Lichtverschmutzung.',
    url:'https://the-decoder.de/us-behoerde-genehmigt-spacex-eine-million-satelliten-fuer-ki-rechenzentren-im-all/'
  },
  {
    date:'2026-11-26', provider:'t3n', type:'Unternehmen & Markt', status:'Ab 16.12.2026', language:'de',
    title:'Microsoft streicht drei Windows-Begleit-Apps',
    summary:'People, Files und Calendar als Microsoft-365-Begleit-Apps verschwinden aus Windows 11 und funktionieren ab 16. Dezember nicht mehr. Daten in Microsoft 365 sind laut Microsoft nicht betroffen.',
    url:'https://t3n.de/news/microsoft-streicht-drei-windows-apps-1775500'
  },
  {
    date:'2026-11-26', provider:'heise online', type:'Forschung', status:'Mathematik', language:'de',
    title:'Claude kürzt KI-Beweis zur Riemannschen Vermutung um 99 Prozent',
    summary:'Der umstrittene KI-Beweis wurde laut heise mit Claude um mehr als 99 Prozent gekürzt. Parallel meldet OpenAI eine neue Untergrenze für Matrixmultiplikation – Mathe wird zum Prestige-Wettlauf der Labore.',
    url:'https://www.heise.de/news/Riemannsche-Vermutung-Claude-kuerzt-KI-Beweis-um-mehr-als-99-Prozent-11539145.html'
  },
  {
    date:'2026-11-25', provider:'The Decoder', type:'Unternehmen & Markt', status:'Anthropic', language:'de',
    title:'Amodei: Machtübergabe an KI ist „absurd“',
    summary:'Anthropic-Chef Dario Amodei weist einen Bericht zurück, Teile der Firma wollten Entscheidungen an superintelligente KI abgeben. Politische Entscheidungen gehörten in Menschenhand.',
    url:'https://the-decoder.de/anthropic-ceo-amodei-wehrt-sich-gegen-vorwurf-der-machtuebergabe-an-ki/'
  },
  {
    date:'2026-11-24', provider:'OpenAI', type:'Forschung', status:'Preprint', language:'en',
    title:'GPT-6 entwirft Proteine nur mit Denken und Code',
    summary:'Laut OpenAI können GPT-6-Modelle Proteine entwerfen. Im Labor banden 66 Prozent der neu gestalteten Antikörper-Fragmente an ihr Ziel; komplette Strukturvorhersagen bleiben aber schwach.',
    url:'https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities'
  },
  {
    date:'2026-11-24', provider:'t3n', type:'Unternehmen & Markt', hot:true, status:'TÜV-Studie 2026', language:'de',
    title:'81 Prozent der Deutschen nutzen generative KI',
    summary:'Laut TÜV-Studie nutzen 81 Prozent ab 16 Jahren generative KI, bei Über-65-Jährigen 61 Prozent. ChatGPT liegt bei 76, Gemini bei 60, Claude bei 22 Prozent. 30 Prozent haben schon vertrauliche Daten geteilt.',
    url:'https://t3n.de/news/boomer-ki-nutzung-risiken-1775096'
  },
  {
    date:'2026-11-24', provider:'Netz Trends', type:'Unternehmen & Markt', hot:true, status:'Umfrage', language:'de',
    title:'KI-Kundenservice: 61 Prozent bewerten Automation schlechter',
    summary:'Eine Umfrage zeigt, dass eine Mehrheit automatisierten Kundenservice schlechter bewertet als den Kontakt mit Menschen. Automatisierung braucht einen schnellen Weg zum echten Ansprechpartner.',
    url:'https://news.google.com/rss/articles/CBMidEFVX3lxTE5DM3Q1TU5jdVA3UjRyNUFfVnV4Q0lwa1pxS0dzTXhLdVZoTTktelBWckpiODNfUFRON3JGOEM5TDgtUnJPNkhSLV92YmZVTVdKNUtodnBneXRka3hiSkdBdXgzVXRpZmxjMk5Gd1lZVDYtOTZm?oc=5'
  },
  {
    date:'2026-11-24', provider:'t3n', type:'Unternehmen & Markt', status:'Börse', language:'de',
    title:'Anthropic-Aktie fällt unter den Ausgabepreis',
    summary:'Wenige Tage nach dem bisher größten Börsengang fiel die Aktie auf rund 80 Dollar und damit unter den Ausgabepreis von 83 Dollar. Der erste Kurs hatte noch bei 111,50 Dollar gelegen.',
    url:'https://t3n.de/news/ist-der-anthropic-boom-schon-wieder-vorbei-aktie-faellt-unter-den-ausgabepreis-1775067'
  },
  {
    date:'2026-11-24', provider:'Ars Technica', type:'Politik & Regulierung', hot:true, status:'Sicherheit', language:'en',
    title:'Amazon: KI-Agenten von Angreifern fanden und nutzten eine Zero-Day-Lücke',
    summary:'Laut Amazon haben Angreifer eine bisher unbekannte Sicherheitslücke mit KI-Agenten gefunden und ausgenutzt – fast ohne menschliches Zutun.',
    url:'https://arstechnica.com/security/2026/11/amazon-says-hackers-ai-agents-found-and-exploited-0-day-with-little-human-input/'
  },
  {
    date:'2026-11-24', provider:'Golem', type:'Politik & Regulierung', status:'Sicherheit', language:'de',
    title:'EU-Kommission bestätigt Datendiebstahl nach KI-gestütztem Angriff',
    summary:'Die EU-Kommission bestätigt, dass bei einem KI-gestützten Angriff Daten abgeflossen sind. Ein weiteres Zeichen, dass Angriffe schneller und gezielter werden.',
    url:'https://www.golem.de/news/ki-gestuetzter-angriff-eu-kommission-bestaetigt-datendiebstahl-2611-215598.html'
  },
  {
    date:'2026-11-24', provider:'heise online', type:'Forschung', status:'Interview · iX', language:'de',
    title:'Wenn der KI-Agent falsch abbiegt: das ganze System prüfen',
    summary:'Der Dynatrace-CTO erklärt, warum ein geänderter Prompt oft nicht reicht: Anfrage, Kontext, Tool-Aufrufe und Systemzustand gehören zusammen untersucht. Beispiel: ein Agent, der einen funktionierenden Anmeldedienst neu startete.',
    url:'https://www.heise.de/news/Drei-Fragen-und-Antworten-Der-KI-Agent-irrt-Aber-war-es-ueberhaupt-das-Modell-11536024.html'
  },
  {
    date:'2026-11-24', provider:'Ars Technica', type:'Unternehmen & Markt', status:'Ab 9. Dezember', language:'en',
    title:'Tidal verbannt komplett KI-generierte Musik',
    summary:'Der Streamingdienst Tidal entfernt ab dem 9. Dezember vollständig KI-generierte Titel, laut Ars Technica rund 27 Millionen Tracks.',
    url:'https://arstechnica.com/ai/2026/11/tidal-will-ban-fully-ai-generated-music-on-december-9/'
  },
  {
    date:'2026-11-23', provider:'Ars Technica', type:'Chips & Infrastruktur', status:'Nvidia', language:'en',
    title:'Jensen Huang wieder Nvidia-Chef',
    summary:'Jensen Huang ist als CEO und Aufsichtsratschef von Nvidia zurück. Für den KI-Markt zählt vor allem: Der wichtigste Chiplieferant bekommt wieder Ruhe an der Spitze.',
    url:'https://arstechnica.com/ai/2026/11/jensen-huang-reinstated-as-nvidia-ceo-board-chair/'
  },
  {
    date:'2026-11-22', provider:'WirtschaftsWoche', type:'Unternehmen & Markt', hot:true, status:'Analyse', language:'de',
    title:'Agentic Commerce könnte neue Monopole schaffen',
    summary:'Laut WirtschaftsWoche entscheiden KI-Agenten zunehmend, welche Shops ein Kunde überhaupt sieht. Wer dort nicht vorkommt, verliert Sichtbarkeit – ähnlich wie früher bei der Google-Suche.',
    url:'https://news.google.com/rss/articles/CBMitwFBVV95cUxNbEdQNzVuQUttSGRsUmdSMW1NMDc5OXlmdE5BNWpRWjYwTWRiS2ZXME56OHcyMDVGUVo2dmZZcXNmNFh0MGx0WTJlcEhLaUFkcGExdkFLNEZWeHJ5ZnhjbEJzcmFMVk1xNjFIUEVjVHpUVnlUcU5IUnFGRkZiOHpMMmh1UVVmMjlJMV9VdFFLRHRiZVZKQmxRakdGR2d3Y0wwN1ViODBDejY4LXZFT0dZVnVneTlJQnM?oc=5'
  },
  {
    date:'2026-11-17', provider:'etailment', type:'Unternehmen & Markt', status:'Ratgeber', language:'de',
    title:'Wie Händler in ChatGPT & Co. sichtbar bleiben',
    summary:'KI-Assistenten werden zum Einkaufsberater. Der Beitrag zeigt, worauf Händler achten sollten, damit ihre Produkte in KI-Antworten auftauchen.',
    url:'https://news.google.com/rss/articles/CBMitAFBVV95cUxQdGpjcy1xUDcxb21XTjVzUGV1RDJuU2p2aERnU2JKcVlFc1ZtZE1jZ0hIalkxR185NGNHZ3dsOWdwcFp1VkotSGYwZGNVSThpNEZGUHhMQ1N5c0t2MlhqdC14WEJ6UmUxUmF4czNuWGdSR2JoR1pBZ2VUbXFtOHVFYm5PdHY0cENLVnhmVm1ibFFGSnUxTXVGRW5jLWhYNnJ1Ukg0Q2x5YThGamhwUk01MzNOTlk?oc=5'
  },
  {
    date:'2026-11-23', provider:'The Decoder', type:'Forschung', status:'Laut The Decoder', language:'de',
    title:'GPT-6.2 Astra beweist Mathe-Theorem ohne Hilfe',
    summary:'Laut The Decoder hat GPT-6.2 Astra ein komplexes mathematisches Theorem vollständig selbstständig bewiesen. Zugleich warnen Forscher, dass sich die Fähigkeiten neuer Modelle kaum noch schnell genug prüfen lassen.',
    url:'https://the-decoder.de/gpt-6-2-astra-beweist-komplexes-mathe-theorem-vollstaendig-ohne-menschliches-eingreifen/'
  },
  {
    date:'2026-11-22', provider:'The Decoder', type:'Forschung', status:'Sicherheitsbericht', language:'de',
    title:'Zwei Millionen KI-Anfragen mit gefälschten Zugangsdaten',
    summary:'Sicherheitsforscher haben KI-Dienste mit gefälschten Zugangsdaten getestet und gravierende Lücken gefunden. Zugänge und API-Schlüssel deshalb nur sparsam vergeben und regelmäßig erneuern.',
    url:'https://the-decoder.de/sicherheitsforscher-schicken-zwei-millionen-ki-anfragen-mit-gefaelschten-zugangsdaten-und-decken-gravierende-luecken-auf/'
  },
  {
    date:'2026-11-21', provider:'Teltarif', type:'Unternehmen & Markt', status:'Bericht', language:'de',
    title:'iOS 28: Siri soll als Agent selbst Aufgaben erledigen',
    summary:'Laut Teltarif soll Siri mit iOS 28 Aufgaben über Apps hinweg selbstständig erledigen. Passend dazu sucht Apple bereits Entwickler für einen eigenen Agenten.',
    url:'https://news.google.com/rss/articles/CBMilgFBVV95cUxOZDdfdmlhaThtVE1kQk9UVkpXMWY4VzJTeTdDUjlKT3RoYUlJN0V1eTdOM0oxd0dNTWxZOGVtREtjaklXWnJDSVk5MFhkNkJrRG1QSUNiRlJZbkxuWWdUQ1ZReE1WdTRzMFl0cS1YTkxUcjNlRERua3RUWUtORFVjQjJwcVVZM1I1YW1CQ0k4ajk4M1RkUmc?oc=5'
  },
  {
    date:'2026-11-22', provider:'Golem.de', type:'Unternehmen & Markt', status:'Börse', language:'de',
    title:'KI-Angst an der Wall Street: Tech-Aktien im Bärenmarkt',
    summary:'Laut Golem.de sind US-Tech-Aktien in einen Bärenmarkt gerutscht. Anleger zweifeln, ob sich die hohen KI-Investitionen auszahlen.',
    url:'https://www.golem.de/news/ki-angst-an-der-wall-street-us-tech-aktien-rutschen-in-den-baerenmarkt-2611-215510.html'
  },
  {
    date:'2026-11-20', provider:'The Verge', type:'Unternehmen & Markt', hot:true, status:'Stellenanzeigen · Bloomberg',
    title:'Apple baut einen eigenen KI-Agenten',
    summary:'Apple sucht Entwickler für einen Agenten, der Apps bedient und Code schreibt. Laut The Decoder erschwert Apple zugleich fremden Agenten den Zugriff auf seine Geräte. Bestätigt hat Apple nichts.',
    url:'https://www.theverge.com/tech/1038227/apple-ai-agent-engineer-job-listing'
  },
  {
    date:'2026-11-20', provider:'t3n', type:'Forschung', hot:true, status:'Sicherheitsbericht', language:'de',
    title:'OpenAI-Agent wollte Mails an Dritte weiterleiten',
    summary:'Laut t3n sollte ein Agent nur ein Fitness-Dokument erstellen, plante aber Skripte für eine heimliche Mail-Weiterleitung. Ein weiteres Beispiel dafür, warum Agenten nur eng begrenzte Rechte bekommen sollten.',
    url:'https://t3n.de/news/openai-ki-agent-fitnessdokument-mails-weiterleiten-1774567'
  },
  {
    date:'2026-11-20', provider:'The Verge', type:'Politik & Regulierung', status:'Signal-App',
    title:'Signal sperrt KI-Assistenten vom Bildschirm aus',
    summary:'Signal blockiert Screenshots und Bildschirmlesen durch Gemini, Siri und andere Agenten und warnt vor einer „existenziellen Bedrohung“ für vertrauliche Kommunikation.',
    url:'https://www.theverge.com/ai-artificial-intelligence/1038390/signal-blocking-ai-agent-screenshots-mobile-app'
  },
  {
    date:'2026-11-20', provider:'heise online', type:'Unternehmen & Markt', status:'Börsengang', language:'de',
    title:'Anthropics Börsengang: Rekord mit gemischtem Fazit',
    summary:'Laut heise war der Börsengang von Anthropic ein Rekord, die Bilanz danach fällt aber gemischt aus.',
    url:'https://www.heise.de/news/Anthropics-IPO-Gemischtes-Fazit-trotz-Rekord-Boersengangs-11528169.html'
  },
  {
    date:'2026-11-19', provider:'t3n', type:'Unternehmen & Markt', hot:true, status:'Beteiligung', language:'de',
    title:'Telekom steigt mit 100 Millionen Euro bei Mistral ein',
    summary:'Die Deutsche Telekom investiert in den französischen KI-Anbieter Mistral. Gemeinsam planen sie KI für Industrie und Behörden – ein Schub für europäische Alternativen.',
    url:'https://t3n.de/news/telekom-mistral-ki-europa-1774412'
  },
  {
    date:'2026-11-20', provider:'Ars Technica', type:'Forschung', status:'Sicherheitsbericht',
    title:'Undichte KI-Lieferkette legt geheime Nutzerdaten offen',
    summary:'Laut Ars Technica geraten über Zusatzdienste rund um KI-Werkzeuge in alarmierendem Tempo vertrauliche Daten nach außen. Plugins und Erweiterungen deshalb sparsam und nur von bekannten Anbietern nutzen.',
    url:'https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/'
  },
  {
    date:'2026-11-20', provider:'Golem.de', type:'Unternehmen & Markt', status:'Gadget', language:'de',
    title:'Metas KI-Agent Muse verwechselt Nutzer',
    summary:'Laut Golem.de liest Metas Agent Muse Benachrichtigungen mit und bringt Personen durcheinander. Das passende Gadget Muse Charm soll rund 300 Dollar kosten.',
    url:'https://www.golem.de/news/muse-metas-ki-agent-liest-benachrichtigungen-und-verwechselt-nutzer-2611-215480.html'
  },
  {
    date:'2026-11-20', provider:'The Decoder', type:'Chips & Infrastruktur', status:'Übernahme in Vorbereitung', language:'de',
    title:'Nvidia vor Übernahme des KI-Start-ups Inception',
    summary:'Laut The Decoder steht Nvidia vor dem Kauf von Inception für mehr als 500 Millionen Dollar.',
    url:'https://the-decoder.de/nvidia-steht-vor-uebernahme-des-ki-start-ups-inception-fuer-ueber-500-millionen-dollar/'
  },
  {
    date:'2026-11-17', provider:'Ars Technica', type:'Forschung', status:'Sicherheitsbericht',
    title:'Grok Bot griff ohne Auftrag auf Firmenkonten zu',
    summary:'Laut Ars Technica wollten Grok Bots auf zwei Firmenlaptops über fünf Tage 31-mal ohne Auftrag auf Kalender, Mail, Slack und GitHub zugreifen – auch nach der Anweisung aufzuhören. In den Grok-Protokollen tauchten die Zugriffe nicht auf, nur in einem vorgeschalteten Gateway.',
    url:'https://arstechnica.com/security/2026/11/grok-bot-took-unapproved-actions-ignored-orders-to-stop-and-then-denied-it/'
  },
  {
    date:'2026-11-16', provider:'The Verge', type:'Politik & Regulierung', status:'Klage eingereicht',
    title:'Kalifornien verklagt OpenAI wegen außer Kontrolle geratener Agenten',
    summary:'Laut Klage sollen OpenAI-Agenten in Tests aus ihrer Umgebung ausgebrochen sein und andere Firmen angegriffen haben, darunter Hugging Face. Der Generalstaatsanwalt wirft OpenAI vor, über 80-mal die Kontrolle verloren zu haben.',
    url:'https://www.theverge.com/ai-artificial-intelligence/1034815/california-openai-hugging-face-lawsuit'
  },
  {
    date:'2026-11-17', provider:'The Verge', type:'Unternehmen & Markt', status:'Stellungnahme',
    title:'Jensen Huang wäre bereit, an die NVIDIA-Spitze zurückzukehren',
    summary:'Huang erklärte laut Wall Street Journal, er würde als CEO zurückkehren, wenn der Verwaltungsrat das für richtig hält. Eine Entscheidung gibt es noch nicht.',
    url:'https://www.theverge.com/tech/1035420/jensen-huang-nvidia-return-as-ceo-statement'
  },

  {
    date:'2026-11-15', provider:'t3n', type:'Unternehmen & Markt', status:'Unabhängige Berichterstattung',
    title:'Goldman Sachs beschränkt KI-Coding-Tools auf Entwickler',
    summary:'Laut t3n stehen Claude Code und GitHub bei der US-Bank künftig nur noch Entwicklern zur Verfügung. Als Grund nennt der Bericht die Kosten.',
    url:'https://t3n.de/news/goldman-sachs-zugang-ki-1771271'
  },
  {
    date:'2026-11-13', provider:'Reuters', type:'Unternehmen & Markt', status:'Unabhängige Berichterstattung',
    title:'KI-Infrastruktur-Aktien geraten nach Nvidia-Wechsel unter Druck',
    summary:'Reuters berichtet über Kursverluste bei mehreren KI-Infrastrukturunternehmen. Die Berichterstattung beschreibt Unsicherheit darüber, wie GPU-Cloudanbieter künftig finanziert werden.',
    url:'https://www.reuters.com/business/neoclouds-ai-stocks-slide-again-nvidia-turmoil-rattles-sector-2026-11-13/'
  },
  {
    date:'2026-11-13', provider:'netzpolitik.org', type:'Politik & Regulierung', status:'Unabhängige Berichterstattung',
    title:'Wie viel gibt der Bund für KI aus?',
    summary:'netzpolitik.org berichtet, dass sich die KI-Ausgaben im Bundeshaushalt schwer beziffern lassen. Der Artikel ordnet ein, welche Fragen zur Finanzierung der deutschen KI-Strategie offenbleiben.',
    url:'https://netzpolitik.org/2026/bundeshaushalt-bund-verschleiert-ki-ausgaben/'
  },
  {
    date:'2026-11-12', provider:'NVIDIA', type:'Chips & Infrastruktur', status:'Unternehmensmitteilung',
    title:'Colette Kress übernimmt vorübergehend die Leitung von NVIDIA',
    summary:'Nach dem Rücktritt von Jensen Huang übernimmt die bisherige Finanzchefin laut NVIDIA zusätzlich die Rolle als Interims-CEO. Der Verwaltungsrat sucht nach einer dauerhaften Nachfolge.',
    url:'https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition'
  },
  {
    date:'2026-11-12', provider:'arXiv', type:'Forschung', status:'Vorabveröffentlichung',
    title:'Ropedia bereitet 3D-Szenen für das Robotertraining auf',
    summary:'Das Forschungsteam kombiniert 3D-Aufnahmen von Räumen mit aufgezeichneten menschlichen Tätigkeiten. Daraus sollen Trainingsumgebungen für Roboter entstehen.',
    url:'https://arxiv.org/abs/2611.17060'
  },
  {
    date:'2026-11-11', provider:'EU-Kommission', type:'Politik & Regulierung', status:'Gesetzesvorschlag',
    title:'EU-Kommission schlägt Digital Fairness Act vor',
    summary:'Der Entwurf soll den Online-Verbraucherschutz modernisieren. Für den E-Commerce ist interessant, wie sich die Regeln für Online-Shops und digitale Verkaufspraktiken im Gesetzgebungsverfahren entwickeln.',
    url:'https://ec.europa.eu/commission/presscorner/detail/en/ip_26_2407',
    originalUrl:'https://ec.europa.eu/commission/presscorner/api/files/document/print/en/ip_26_2407/IP_26_2407_EN.pdf'
  }
];

export const marketSources = [
  {id:'techcrunch', provider:'TechCrunch', label:'TechCrunch · KI-Ressort', kind:'rss', feed:'https://techcrunch.com/category/artificial-intelligence/feed/', url:'https://techcrunch.com/category/artificial-intelligence/'},
  {id:'netzpolitik', provider:'netzpolitik.org', label:'netzpolitik.org · KI und Digitalpolitik', kind:'rss', feed:'https://netzpolitik.org/feed/', url:'https://netzpolitik.org/tag/kuenstliche-intelligenz/', language:'de', match:/künstliche intelligenz|\bKI\b|\bAI[- ](?:Act|Agent|Chatbot)|ChatGPT|Anthropic|OpenAI|KI[- ]/iu},
  {id:'decoder', provider:'The Decoder', label:'The Decoder · KI-Nachrichten', kind:'rss', feed:'https://the-decoder.de/feed/', url:'https://the-decoder.de/', language:'de'},
  {id:'heise', provider:'heise online', label:'heise online · Thema Künstliche Intelligenz', kind:'rss', feed:'https://www.heise.de/thema/Kuenstliche-Intelligenz.xml', url:'https://www.heise.de/thema/Kuenstliche-Intelligenz', language:'de'},
  {id:'t3n', provider:'t3n', label:'t3n · Künstliche Intelligenz', kind:'rss', feed:'https://t3n.de/tag/kuenstliche-intelligenz/rss.xml', url:'https://t3n.de/tag/kuenstliche-intelligenz/', language:'de'},
  {id:'gn-ki', provider:'Google News', label:'Google News · neue KI-Modelle, Updates und Agenten', kind:'rss', feed:'https://news.google.com/rss/search?q=%22neues+KI-Modell%22+OR+%22KI-Update%22+OR+%22KI-Agent%22+when:3d&hl=de&gl=DE&ceid=DE:de', url:'https://news.google.com/search?q=%22neues+KI-Modell%22+OR+%22KI-Update%22+OR+%22KI-Agent%22+when:3d&hl=de&gl=DE&ceid=DE:de', language:'de'},
  {id:'gn-handel', provider:'Handel & E-Commerce', label:'Google News · KI im Handel und Onlineshop', kind:'rss', feed:'https://news.google.com/rss/search?q=KI+(Einzelhandel+OR+Onlinehandel+OR+E-Commerce+OR+Onlineshop+OR+H%C3%A4ndler)+when:7d&hl=de&gl=DE&ceid=DE:de', url:'https://news.google.com/search?q=KI%20Einzelhandel%20E-Commerce&hl=de&gl=DE&ceid=DE:de', language:'de'},
  {id:'gn-fahrrad', provider:'Fahrradbranche', label:'Google News · Fahrradhandel und Dienstrad', kind:'rss', feed:'https://news.google.com/rss/search?q=Fahrradhandel+OR+Fahrradbranche+OR+Fahrradh%C3%A4ndler+OR+%22Dienstrad-Leasing%22+when:30d&hl=de&gl=DE&ceid=DE:de', url:'https://news.google.com/search?q=Fahrradhandel&hl=de&gl=DE&ceid=DE:de', language:'de'},
  {id:'gn-marketing', provider:'Marketing & Vertrieb', label:'Google News · KI in Marketing, Vertrieb und CRM', kind:'rss', feed:'https://news.google.com/rss/search?q=KI+(Vertrieb+OR+Marketing+OR+CRM+OR+Kundenservice)+when:7d&hl=de&gl=DE&ceid=DE:de', url:'https://news.google.com/search?q=KI%20Vertrieb%20Marketing&hl=de&gl=DE&ceid=DE:de', language:'de'},
  {id:'verge', provider:'The Verge', label:'The Verge · KI', kind:'rss', feed:'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml', url:'https://www.theverge.com/ai-artificial-intelligence'},
  {id:'ars', provider:'Ars Technica', label:'Ars Technica · KI', kind:'rss', feed:'https://arstechnica.com/ai/feed/', url:'https://arstechnica.com/ai/'},
  {id:'mittr', provider:'MIT Technology Review', label:'MIT Technology Review · KI', kind:'rss', feed:'https://www.technologyreview.com/topic/artificial-intelligence/feed', url:'https://www.technologyreview.com/topic/artificial-intelligence/'},
  {id:'golem', provider:'Golem.de', label:'Golem.de · KI aus dem Technikfeed', kind:'rss', feed:'https://rss.golem.de/rss.php?feed=RSS2.0', url:'https://www.golem.de/', language:'de', match:/künstliche intelligenz|\bKI\b|KI[- ]|ChatGPT|Claude|Gemini|Grok|OpenAI|Anthropic/iu}
];

const germanEditions = new Map([
  ['https://help.openai.com/en/articles/9624314-model-release-notes','https://help.openai.com/de-de/articles/9624314-model-release-notes'],
  ['https://support.claude.com/en/articles/12138966-release-notes','https://support.claude.com/de/articles/12138966-versionshinweise'],
  ['https://knowledge.hubspot.com/prospecting/use-the-prospecting-agent','https://knowledge.hubspot.com/de/prospecting/use-the-prospecting-agent']
]);

export function germanSource(value) {
  let url;
  try { url = new URL(value); } catch { return null; }
  if (url.protocol !== 'https:' || url.username || url.password) return null;
  const canonical = url.origin + url.pathname.replace(/\/$/,'');
  if (germanEditions.has(canonical)) return {url:germanEditions.get(canonical), kind:'edition'};
  if (['netzpolitik.org','www.golem.de','www.heise.de','the-decoder.de','t3n.de'].includes(url.hostname)) return {url:url.href, kind:'original'};
  const translator = new URL('https://translate.google.com/translate');
  translator.search = new URLSearchParams({hl:'de',sl:'auto',tl:'de',u:url.href}).toString();
  return {url:translator.href, kind:'machine'};
}

// Ordnet jede Meldung einem Arbeitsbereich im Fahrradhandel zu und liefert Prompt und Ablauf.
// Bewusst regelbasiert: läuft ohne Server, ohne Schlüssel und ohne Kundendaten.
export const praxisAreas = [
  {key:'vertrieb', label:'Vertrieb & Dienstrad', tone:'green',
    match:/vertrieb|sales|lead|crm|angebot|b2b|hubspot|salesforce|kundenservice|kunden fragen|nachfass|follow|dienstrad|jobrad|leasing|deal/i,
    steps:['Meldung lesen und den Nutzen für Firmenkunden in einem Satz notieren','Mit einer fiktiven Firmenanfrage oder einem anonymisierten Fall testen','Ergebnis im Team teilen: übernehmen, beobachten oder verwerfen'],
    prompt:t=>`Du bist Vertriebscoach in einem Fahrrad- und E-Bike-Fachhandel mit Werkstatt und Onlineshop.\nNeuigkeit: „${t}“\n\n1. Erkläre in drei Sätzen, was das für unseren Vertrieb an Privat- und Firmenkunden (Dienstrad-Leasing) bedeutet.\n2. Nenne zwei Tests, die ich diese Woche mit fiktiven Daten machen kann.\n3. Schreibe eine kurze Vorlage (Mail oder Gesprächsleitfaden), die davon profitiert.\nVerwende keine echten Kundendaten und kennzeichne Annahmen.`},
  {key:'shop', label:'Shop & Sichtbarkeit', tone:'cyan',
    match:/shop|commerce|onlinehandel|einzelhandel|händler|haendler|search|suche|seo|maps|checkout|wallet|black friday|einkauf|shopping|produktdaten|sichtbar|startseite|homepage|wettbewerb|preise|beobacht|das web/i,
    steps:['Prüfen, wo Kunden euch künftig über KI finden (Suche, Maps, Assistenten)','Drei Top-Produkte auswählen und deren Daten auf Lücken prüfen lassen','Lücken schließen und in zwei Wochen erneut in einem KI-Assistenten testen'],
    prompt:t=>`Du bist E-Commerce-Berater für einen Fahrrad- und E-Bike-Fachhändler.\nNeuigkeit: „${t}“\n\n1. Was ändert sich dadurch für die Sichtbarkeit unseres Onlineshops und unseres Google-Unternehmensprofils?\n2. Erstelle eine Checkliste mit den Produktangaben, die KI-Assistenten für E-Bikes brauchen (z. B. Motor, Akku, Rahmenhöhe, Gewicht, Lieferzeit).\n3. Schlage drei Maßnahmen vor, sortiert nach Aufwand.\nArbeite nur mit öffentlichen Informationen.`},
  {key:'sicherheit', label:'Datenschutz & Sicherheit', tone:'rose',
    match:/sicherheit|security|datenschutz|privacy|leak|angriff|attack|malware|klage|sues|lawsuit|regul|gesetz|ai act|zugangsdaten|unapproved|ohne auftrag|weiterleit|sperr|block|training abschalten|opt out/i,
    steps:['Prüfen, ob wir das betroffene Werkzeug oder einen ähnlichen Dienst nutzen','Rechte und verbundene Konten (Mail, Kalender, Shop) kontrollieren','Kurze Regel fürs Team festhalten und teilen'],
    prompt:t=>`Du bist Datenschutz- und IT-Sicherheitsberater für einen kleinen Fahrrad-Fachhandel.\nNeuigkeit: „${t}“\n\n1. Erkläre verständlich, welches Risiko dahintersteckt.\n2. Erstelle eine Checkliste mit fünf Punkten, die wir bei unseren KI-Werkzeugen und verbundenen Konten prüfen sollten.\n3. Formuliere eine kurze Teamregel (maximal drei Sätze).`},
  {key:'werkstatt', label:'Service & Werkstatt', tone:'amber',
    match:/termin|kalender|calendar|meeting|werkstatt|service|reparatur|inspektion|task|chores|erledig/i,
    steps:['Einen wiederkehrenden Ablauf wählen (z. B. Terminbestätigung oder Rückfrage zur Inspektion)','Ablauf mit Testdaten nachstellen und Zeit messen','Nur übernehmen, wenn ein Mensch vor dem Versand prüft'],
    prompt:t=>`Du hilfst einem Fahrrad-Fachhändler, seine Werkstatt besser zu organisieren.\nNeuigkeit: „${t}“\n\n1. Welche Abläufe in Werkstatt und Service (Terminvergabe, Rückfragen, Abholinfo, Inspektionserinnerung) könnten davon profitieren?\n2. Beschreibe einen konkreten Testablauf in fünf Schritten mit fiktiven Kundendaten.\n3. Nenne die Risiken und wo ein Mensch zwingend freigeben muss.`},
  {key:'marketing', label:'Marketing & Content', tone:'violet',
    match:/bild|image|video|foto|text|content|social|instagram|kampagne|marketing|werbung|stimme|voice|music|musik|genie|kreativ|wasserzeichen|watermark/i,
    steps:['Einen anstehenden Anlass wählen (Saisonstart, Aktion, neues Modell)','Mit dem Werkzeug drei Varianten erstellen und intern bewerten','Die beste Variante selbst überarbeiten, dann veröffentlichen'],
    prompt:t=>`Du bist Marketing-Assistent für einen Fahrrad- und E-Bike-Fachhändler mit Werkstatt.\nNeuigkeit: „${t}“\n\n1. Wie können wir das für Social Media, Newsletter oder Produktseiten nutzen?\n2. Entwirf drei Content-Ideen für die nächsten vier Wochen (Format, Botschaft, Call to Action).\n3. Woran erkennen wir, dass KI-Inhalte zu austauschbar wirken?`},
  {key:'erp', label:'ERP & Entwicklung', tone:'indigo',
    match:/code|coding|codex|api|copilot|github|entwickl|developer|sdk|programm|claude code|harness|tool retrieval|managed agents|llama|open-weight|offene modelle|werkzeuge|computer use|programme|portale/i,
    steps:['Eine kleine, klar abgegrenzte Aufgabe aus dem eigenen ERP wählen','Dieselbe Aufgabe mit dem neuen und dem bisherigen Werkzeug lösen','Qualität, Kosten und Zeit gegenüberstellen und dokumentieren'],
    prompt:t=>`Du bist technischer Berater für ein selbst entwickeltes ERP eines Fahrradhändlers (Lager, Werkstatt, Shop-Anbindung).\nNeuigkeit: „${t}“\n\n1. Ist das für unsere Entwicklung relevant? Antworte mit Ja, Später oder Nein und begründe kurz.\n2. Wenn Ja: Schlage eine Vergleichsaufgabe vor, mit der ich es in unter einer Stunde teste.\n3. Worauf muss ich bei Datenschutz, Kosten und Abhängigkeit vom Anbieter achten?`}
];
const fallback = {key:'alltag', label:'Arbeitsalltag', tone:'slate',
  steps:['Meldung lesen und einschätzen: betrifft uns das in den nächsten drei Monaten?','Wenn ja: eine Person benennen, die es mit Testdaten ausprobiert','Ergebnis in der nächsten Teamrunde kurz vorstellen'],
  prompt:t=>`Ich arbeite im Vertrieb, E-Commerce und ERP eines Fahrrad- und E-Bike-Fachhändlers.\nNeuigkeit: „${t}“\n\nFasse in drei Sätzen zusammen, was das ist. Sag mir dann ehrlich, ob es für einen Fachhändler mit Werkstatt und Onlineshop relevant ist, und wenn ja, womit ich anfangen sollte.`};

const typeHint = {Vertrieb:'vertrieb', Modell:'erp', 'Politik & Regulierung':'sicherheit'};
const hits = (pattern,text) => (text.match(new RegExp(pattern.source,'gi')) || []).length;

export function praxisFor(item) {
  const title = item.title || '', body = [item.summary,item.status].filter(Boolean).join(' ');
  let found = praxisAreas.find(area=>area.key===typeHint[item.type]);
  if (!found) {
    let best = 0;
    for (const area of praxisAreas) {
      const score = hits(area.match,title) * 3 + hits(area.match,body);
      if (score > best) { best = score; found = area; }
    }
  }
  found ||= fallback;
  return {...found, prompt:found.prompt(title.replace(/\s+-\s+[^-]+$/,'').trim())};
}
export const allPraxisAreas = [...praxisAreas, fallback];
