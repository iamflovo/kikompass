# KI Kompass by Flovo in Claude Code weiterentwickeln

## 1. Projekt auf deinem Mac vorbereiten

1. Lade `KI-Kompass_Claude-Quellcode.zip` aus ChatGPT herunter und öffne die ZIP-Datei im Finder per Doppelklick.
2. Verschiebe den entpackten Ordner an einen festen Ort, zum Beispiel in „Dokumente“. Du kannst ihn dort `KI-Kompass-by-Flovo` nennen. Der richtige Ordner enthält direkt `package.json`, `app/`, `server/` und `CLAUDE_STARTPROMPT.md`.
3. Installiere [Claude Desktop für macOS](https://claude.com/download), falls du es noch nicht hast. Melde dich mit deinem Claude-Konto an. Laut Anthropic benötigt der Code-Tab ein passendes Claude-Abo, etwa Pro.
4. Für die lokale Vorschau des KI-Kompasses brauchst du [Node.js](https://nodejs.org/en/download) ab Version 22. Wähle auf deinem Apple-Silicon-Mac das macOS-Installationspaket für ARM64. Prüfe danach im Terminal mit `node -v`, ob die Version mindestens 22 ist.

[Offizielle Anleitung für Claude Code in der Desktop-App](https://code.claude.com/docs/en/desktop-quickstart)

## 2. Ordner in Claude Code öffnen

1. Öffne Claude Desktop auf dem Mac und wähle oben in der Seitenleiste **Code**.
2. Starte eine neue Sitzung. Wähle unter dem Eingabefeld die Umgebung **Local**.
3. Klicke daneben auf die Ordnerauswahl und wähle **Open folder …**. Öffne den entpackten Projektordner, in dem die `package.json` liegt.
4. Kopiere diesen Auftrag in die neue Sitzung.

> Lies zuerst CLAUDE_STARTPROMPT.md und README.md in diesem Ordner. Verschaffe dir einen Überblick und führe npm test und npm run build aus. Zeige mir, wie ich die App lokal starte. Warte danach mit Codeänderungen auf meine erste konkrete Aufgabe.

Die Dateien liegen im Ordner, den du in Claude Code ausgewählt hast. Du kannst in derselben Sitzung später einen konkreten Änderungswunsch erteilen und dir die bearbeiteten Dateien und Testergebnisse zeigen lassen.

## 3. App im Browser testen

Öffne **Terminal** auf dem Mac. Tippe `cd ` mit einem Leerzeichen, ziehe den Projektordner aus dem Finder ins Terminal und drücke Enter. Führe anschließend diese Befehle aus.

```bash
npm test
npm run build
npm run dev
```

Öffne danach [http://127.0.0.1:4173/](http://127.0.0.1:4173/) in Safari oder Chrome. Solange der Server läuft, bleibt das Terminal beschäftigt. Stoppe ihn mit **Ctrl+C**. Nach Änderungen startest du den Server erneut und lädst die Seite neu. Falls der Port 4173 bereits belegt ist, starte mit `PORT=4174 npm run dev` und öffne `http://127.0.0.1:4174/`.

Das Projekt hat keine npm-Abhängigkeiten und braucht für seine bestehenden Funktionen keinen API-Schlüssel.

## 4. In Claude weiterarbeiten

Als erste konkrete Änderung kannst du zum Beispiel schreiben:

> Ergänze im KI-Radar einen Filter „Für den Betrieb relevant“. Erhalte das Rot-Weiß-Design, die vier Hauptbereiche und die deutschen Quellenlinks. Prüfe die Änderung und zeige mir, wie ich sie lokal kontrolliere.

Claude bearbeitet deine lokale Kopie. Damit die Änderungen später auch online oder über das Home-Bildschirm-Icon auf dem iPhone erreichbar sind, musst du diese Kopie separat bereitstellen. Das ZIP enthält dafür keine Zugangsdaten. Die aktuell veröffentlichte ChatGPT-Site und der dort eingerichtete tägliche Task werden durch lokale Änderungen nicht automatisch aktualisiert.
