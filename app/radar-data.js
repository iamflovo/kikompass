export const editorialDate = '2026-11-17';

export const releases = [
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
  {id:'claude-app', provider:'Anthropic', label:'Claude Apps · Versionshinweise', url:'https://support.claude.com/en/articles/12138966-release-notes'},
  {id:'grok-api', provider:'xAI', label:'Grok API · Versionshinweise', url:'https://docs.x.ai/developers/release-notes'},
  {id:'microsoft', provider:'Microsoft', label:'Dynamics 365 · Vertriebsupdates', url:'https://learn.microsoft.com/en-us/dynamics365/release-plan/'},
  {id:'salesforce', provider:'Salesforce', label:'Salesforce · Unternehmensmeldungen', url:'https://www.salesforce.com/news/'},
  {id:'hubspot', provider:'HubSpot', label:'HubSpot Breeze · Produktupdates', url:'https://www.hubspot.com/spotlight/all-releases?product=breeze'}
];

export const marketNews = [
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
