# KI Kompass by Flovo

Installierbare Web-App für KI-News, Modellvergleiche und Vertriebspraxis im Fahrradhandel. Die bisherigen Werkzeuge, Beispiele und Projektideen stehen in `app/index.html`.

## Auf deinem Mac starten

1. ZIP entpacken und den entpackten Projektordner im Terminal öffnen.
2. Mit Node.js 22 oder neuer `npm run dev` starten. Das Projekt braucht keine npm-Abhängigkeiten und keinen API-Schlüssel.
3. `http://127.0.0.1:4173/` im Browser öffnen. Mit `npm test` die Feed-Parser prüfen.

## Zusätzlich als Claude-Artifact

Wie der GTA- und der Tape-to-Tape-Guide läuft der KI Kompass als privates Claude-Artifact: https://claude.ai/artifact/7TYrYNETpWLagpW83HytCB

- `npm run build:artifact` bündelt die App zu `dist/artifact/ki-kompass.html` und ruft die Feeds als `radar-live.json` und `radar-market.json` ab.
- Claude veröffentlicht diese Dateien unter derselben Adresse neu. Die Live-Meldungen sind deshalb der Stand der letzten Veröffentlichung.
- iPhone: Link in Safari öffnen (bei claude.ai angemeldet) → Teilen → Zum Home-Bildschirm.
- In Artifacts gibt es keinen Service Worker. Für die Seite braucht es Internet und eine Claude-Anmeldung.

## Auf dem Handy über GitHub Pages (Haupt-Weg)

Die App wird bei jedem Push auf `main` und zusätzlich alle 6 Stunden von der GitHub Action `.github/workflows/pages.yml` gebaut und auf GitHub Pages veröffentlicht. Die Action ruft dabei die Live-Feeds ab und legt sie als `radar-live.json` und `radar-market.json` neben die App. GitHub Pages selbst liefert nur statische Dateien aus, einen Server gibt es dort nicht.

- Adresse: https://iamflovo.github.io/kikompass/ (Repository: https://github.com/iamflovo/kikompass)
- iPhone: Adresse in Safari öffnen → Teilen → Zum Home-Bildschirm.
- Android: Adresse in Chrome öffnen → Menü → App installieren.
- Offline: Ein Service Worker (`app/sw.js`) speichert die zuletzt geladene Version, die App startet also auch ohne Netz.
- Lokal prüfen: `npm run build:site` und danach `npm run preview:site`, dann `http://127.0.0.1:4180/ki-kompass/` öffnen.
- Hinweis: GitHub pausiert zeitgesteuerte Actions, wenn ein öffentliches Repository 60 Tage lang keine Änderungen bekommt. Dann reicht ein Commit oder ein manueller Start unter Actions → „Run workflow“.
 Live-Quellen benötigen Internet. Die Merkliste wird pro Browser gespeichert. Ein nativer iOS-Build und App-Store-Vertrieb sind nicht Bestandteil dieses Projekts.

## Inhalte und Technik

- `app/radar-data.js` enthält die geprüften deutschsprachigen Startmeldungen und offiziellen Quellen. Jede kuratierte Meldung hat ein Datum, eine Art, einen Verfügbarkeitsstatus, eine eigene Praxis-Einordnung und einen Quellenlink.
- `app/radar.js` und `app/radar.css` steuern Radar, Filter und Merkliste. Die App unterscheidet Anbieter-Feeds, Pressefeeds und kuratierte Meldungen. Marktbriefing und Pressequellen stehen in `marketNews` und `marketSources`. `germanSource()` verwendet hinterlegte deutsche Fassungen und bietet sonst einen Link zum Google Übersetzer.
- `server/feeds.js` liest erlaubte RSS/Atom-Quellen und den Markdown-Changelog der Claude Platform. Feeds werden beim Öffnen oder Aktualisieren des Live-Bereichs abgefragt. Jede nicht erreichbare Quelle erscheint mit eigenem Status. Direktlinks ergänzen die Feeds.
- `server/index.js` stellt die Oberfläche und `GET /api/radar` bereit. Der Server lädt öffentliche Quellen, keine privaten Konten. Er speichert die Feed-Ergebnisse kurz im Arbeitsspeicher. `npm run build` erstellt einen Worker-Einstiegspunkt unter `dist/server/index.js`.
- Das ZIP enthält keine Hosting-Identität und keine Zugangsdaten. Für eine separate Bereitstellung kannst du einen eigenen Host konfigurieren. Das lokale Startskript verwendet denselben Request-Handler. Ein separat in ChatGPT eingerichtetes Briefing ist nicht Teil des Quellcodes.

## Weiterarbeit in Claude Code

Die [Schritt-für-Schritt-Anleitung für Claude Code auf dem Mac](CLAUDE_ANLEITUNG.md) führt dich vom ZIP bis zur lokalen Vorschau. Die Projekthinweise für Claude stehen in `CLAUDE_STARTPROMPT.md`.
