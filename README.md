# Mein Portfolio

Ein responsives persönliches Portfolio zur Präsentation von Lebenslauf, Dienstleistungen und Skills.

## 📋 Projektübersicht

Dieses Portfolio ist eine persönliche Website zur Darstellung meiner beruflichen Erfahrungen, angebotenen Dienstleistungen und technischen Fähigkeiten. Die Website befindet sich aktuell noch in der Entwicklungsphase und wird laufend erweitert.

## 🌟 Features

- **Responsive Design**: Optimiert für Desktop und mobile Geräte
- **Modulares Layout**: Header und Footer werden via JavaScript eingebunden
- **Mehrere Themenbereiche**:
  - Startseite mit Überblick
  - Detaillierter Lebenslauf
  - Dienstleistungen (Coaching & Softwareentwicklung)
  - Skills und Technologien
  - Kontaktformular
  - Über Mich

## 🔧 Technologie-Stack

- HTML5
- CSS3
- JavaScript (für Komponenten-Einbindung)

## 📁 Projektstruktur

```
portfolio/
│
├── index.html                # Startseite
├── cv.html                   # Lebenslauf
├── services.html             # Dienstleistungen
├── skills.html               # Fähigkeiten und Tech-Stack
├── contact.html              # Kontaktformular
├── about.html                # Über mich
├── impressum.html            # Impressum
├── datenschutz.html          # Datenschutz
│
├── css/
│   ├── index.css             # Styling für Startseite
│   ├── cv.css                # Styling für Lebenslauf
│   ├── services.css          # Styling für Dienstleistungen
│   ├── skills.css            # Styling für Skills
│   ├── contact.css           # Styling für Kontaktformular
│   ├── about.css             # Styling für Über mich
│   └── footer.css            # Styling für Footer
│
├── js/
│   └── include.js            # Script für das Einbinden von Header und Footer
│
└── img/
    └── Krazius Solutions Logo weiß.png  # Logo und weitere Bilder
```

## 📄 Seitenübersicht

### Startseite (index.html)

- Hero-Sektion mit Willkommensnachricht
- Übersicht der angebotenen Dienstleistungen

### Lebenslauf (cv.html)

- Berufserfahrung
- Abgeschlossene Projekte
- Bildungshintergrund
- Zertifikate

### Dienstleistungen (services.html)

- Coaching-Angebote
- Software-Entwicklung

### Skills (skills.html)

- Tech-Stack
- Soft Skills

### Kontakt (contact.html)

- Kontaktformular
- Direkte Kontaktinformationen

### Über mich (about.html)

- Persönliche Vorstellung
- Motivation

## 💻 Code-Beispiel

Das Projekt verwendet ein einfaches JavaScript-System, um Header und Footer in alle Seiten einzubinden:

```javascript
// Beispiel aus include.js
document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");
});

function includeHTML(elementId, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Include error:", error));
}
```

## ⌨️ Aktuelle Projektphase

- [✅] Konzeptionsphase
- [✅] Erarbeitungs-/Reflexionsphase
- [ ] Finalisierungsphase

## 📝 Aktuelle To-Dos

- [✅] Fertigstellung der Inhalte (Platzhaltertexte wurden ersetzt)
- [✅] Alt Texte der Bilder überarbeitet
- [✅] Inhalte eingefügt
- [✅] Bilder & Logos komprimiert
- [✅] CSS-Styling der einzelnen Seiten abgeschlossen (weiteres Feintuning geplant)
- [⚠️] Optimierung der Bilder und Medien (teilweise zu klein auf großen Bildschirmen)
- [⚠️] Responsives Design teilweise abgeschlossen (Breakpoint bei 1024 px noch problematisch)
- [ ] Verbesserung der Barrierefreiheit ‼️‼️‼️
- [ ] Font vereinheitlichen
- [ ] Überarbeitung der Gestaltung von Karten und Skill-Elementen
- [ ] Überarbeitung der Desktop-Ansicht der Landing Page
- [ ] Überarbeitung der Desktop-Ansicht der About Page
- [ ] Überarbeitung der Desktop-Ansicht der Services Page

## 📞 Kontakt

- E-Mail: kevin@krazius-solutions.com
- Website: [Portfoliolink](https://iu-webprogrammierung.github.io/webprogrammierung-dieKrake/)

---

© 2025 Mein Portfolio. Alle Rechte vorbehalten.
