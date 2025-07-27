# 💼 Mein Portfolio – Krazius Solutions

Ein modernes, responsives Web-Portfolio zur professionellen Präsentation von Lebenslauf, Dienstleistungen und technischen Kompetenzen.

## 📌 Projektübersicht

Dieses Portfolio dient als zentrale Plattform zur Darstellung meiner beruflichen Laufbahn, meiner Angebote in den Bereichen Coaching & Softwareentwicklung sowie meiner fachlichen und persönlichen Stärken. Die Seite ist vollständig responsive, modular aufgebaut und wird kontinuierlich weiterentwickelt.

## 🌟 Features

- **Responsives Design** für alle Bildschirmgrößen
- **Modularisierung via JavaScript**: Header & Footer dynamisch eingebunden
- **Dark-/Light-Theme Toggle** mit lokalem Speicher
- **Animierte UI-Elemente** via Intersection Observer
- **Strukturierte Navigation & Mobilmenü (Burger-Menü)**
- **Barriereoptimierte Gestaltung**

## 🔧 Technologie-Stack

- HTML5
- CSS3 (modularisiert pro Seite)
- JavaScript (DOM-Manipulation, Komponenten-Logik)

## 🗂️ Projektstruktur

```
portfolio/
│
├── index.html                # Startseite
├── cv.html                   # Lebenslauf
├── services.html             # Dienstleistungen
├── skills.html              # Skills und Technologien
├── contact.html              # Kontaktformular
├── about.html                # Über mich
├── impressum.html            # Rechtliches
├── datenschutz.html          # Datenschutz
│
├── css/
│   ├── *.css                 # Jeweils seitenbezogenes Styling
│
├── js/
│   ├── include.js            # Header & Footer Einbindung
│   ├── header.js             # Burger-Menü & Navigation
│   ├── theme-switcher.js     # Light-/Darkmode
│   └── element-animation.js  # Animation beim Scrollen
│
├── components/
│   ├── header.html           # Header-Markup
│   └── footer.html           # Footer-Markup
│
└── img/
    └── *.webp                # Logos, Illustrationen, Fotos
```

## 🔍 Seitenübersicht

| Seite                                | Inhalt                                                              |
| ------------------------------------ | ------------------------------------------------------------------- |
| `index.html`                         | Hero-Bereich, Übersicht der Dienstleistungen, Einstieg in Portfolio |
| `cv.html`                            | Berufserfahrung, Projekte, Ausbildung, Zertifikate                  |
| `services.html`                      | Coaching & individuelle Webentwicklung                              |
| `skills.html`                        | Tech-Stack, Soft Skills                                             |
| `contact.html`                       | Kontaktformular & Kontaktinformationen                              |
| `about.html`                         | Persönliche Vorstellung, Motivation                                 |
| `impressum.html`, `datenschutz.html` | Rechtliche Angaben                                                  |

## 💡 Code-Snippets

### 🔁 Dynamische Einbindung von Komponenten (JS)

```javascript
// include.js
document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "components/header.html");
  includeHTML("footer", "components/footer.html");
});

function includeHTML(elementId, file) {
  return fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Include error:", error));
}
```

### 🎨 Theme-Umschaltung

```javascript
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "dark") {
    html.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}
```

### ✨ Element-Animation beim Scrollen

```javascript
function initCardAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -80px 0px",
    }
  );

  document.querySelectorAll(".animate-element").forEach((el) => {
    observer.observe(el);
  });
}
```

## 📈 Aktuelle Projektphase

- ✅ Konzeptionsphase
- ✅ Erarbeitungs-/Reflexionsphase
- ✅ Finalisierungsphase

## 📋 Erledigte Aufgaben

- ✅ Struktur & Navigation aufgebaut
- ✅ Inhalte eingefügt und optimiert
- ✅ Bilder und Assets komprimiert
- ✅ Theme-Umschaltung (Dark/Light) implementiert
- ✅ Barrierefreiheit & Kontraste verbessert
- ✅ Desktop- & Mobile-Ansicht überarbeitet
- ✅ Modularisierung mit `include.js`
- ✅ Animationen integriert
- ✅ Responsiveness

## 🔧 Geplante Verbesserungen

- 🔜 Feintuning Optik
- 🔜 Internationalisierung (EN/DE)
- 🔜 SEO-Optimierung
- 🔜 Erfolgreiches Senden über Kontakformular

## 📞 Kontakt

- 📧 E-Mail: [kevin@krazius-solutions.com](mailto:kevin@krazius-solutions.com)
- 🌐 Live-Demo: [Zum Portfolio](https://iu-webprogrammierung.github.io/webprogrammierung-dieKrake/)

---

© 2025 Krazius Solutions. Alle Rechte vorbehalten.
