# 📄 RFP Agent — AI-Powered Proposal Intelligence

> **Win More RFPs in Less Time.**  
> An intelligent RFP response agent that learns from your past proposals, identifies winning patterns, and generates tailored responses — turning days of work into hours.

---

## 🚀 Live Demo

Open `rfp-agent/index.html` in your browser to explore the full site locally.

---

## 📁 Project Structure

```
hack/
└── rfp-agent/
    ├── index.html          # Home page — hero, features preview, how it works, testimonials
    ├── features.html       # Full features breakdown
    ├── how-it-works.html   # Detailed 4-step process walkthrough
    ├── use-cases.html      # Industry-specific use cases
    ├── pricing.html        # Pricing tiers (monthly/annual toggle)
    ├── about.html          # Team & mission
    ├── contact.html        # Book a demo / contact form
    ├── css/
    │   └── style.css       # Complete design system & component styles
    └── js/
        └── main.js         # All interactive JS (animations, counters, nav, etc.)
```

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🧠 **Memory of Past Proposals** | Indexes your entire proposal history; surfaces the most relevant content for every new RFP with win/loss context |
| 📊 **Win/Loss Analysis** | Automatically identifies language and arguments that correlate with winning — and flags what doesn't |
| 🎯 **Client Personalization** | Builds per-client profiles remembering preferences, priorities, and communication style |
| 💡 **Smart Boilerplate** | Auto-suggests proven content blocks from past winning proposals, contextually matched |
| ⚡ **70% Time Savings** | Reduces proposal creation from 3–5 days to under 2 hours |

---

## 📈 Impact Metrics

- **70%** average time saved per proposal
- **+30%** increase in win rate
- **5,000+** proposals processed monthly
- **98%** customer satisfaction score

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic) |
| Styling | Vanilla CSS (custom design system, glassmorphism, CSS variables) |
| Logic | Vanilla JavaScript (ES6+, no dependencies) |
| Fonts | Google Fonts (Inter) |
| Animations | CSS keyframes + Intersection Observer API |

---

## 🎨 Design System

The UI is built on a custom dark-mode design system in `css/style.css`:

- **Color Palette** — Deep navy backgrounds with indigo/violet gradients (`--primary`, `--primary-light`)
- **Typography** — Inter font family with fluid type scale
- **Glassmorphism** — Frosted glass cards with backdrop filters and subtle borders
- **Micro-animations** — Scroll-triggered fade-ins, floating particles, counter roll-ups, typing effect
- **Components** — Buttons, badges, feature cards, testimonial cards, step flow, before/after grid, pricing cards

---

## ⚙️ JavaScript Modules (`main.js`)

| Function | Purpose |
|---|---|
| `initNavbar()` | Scroll-aware sticky nav with active link detection |
| `initScrollProgress()` | Reading progress bar at the top of the page |
| `initScrollAnimations()` | IntersectionObserver for `.animate-on-scroll` elements |
| `initParticles()` | 30 floating particles in the hero section |
| `initCounters()` | Animated number counters triggered on scroll |
| `initMobileNav()` | Hamburger menu for mobile viewports |
| `initTypingEffect()` | Cycling typewriter effect in the hero headline |
| `initDemoBar()` | Dismissible announcement banner |
| `initFormSubmit()` | Demo booking form with loading state |
| `initTabs()` | Reusable tab switcher component |
| `initPricingToggle()` | Monthly ↔ Annual billing price switcher |

---

## 📄 Pages Overview

### `index.html` — Home
- Announcement bar → Sticky navbar → Hero with typing animation & AI chat mockup
- Trust logos bar → Animated stats → Feature cards preview → 4-step process
- Before/After comparison → Testimonials → CTA banner → Footer

### `features.html`
Deep-dive into all AI capabilities with visual demos.

### `how-it-works.html`
Detailed walkthrough of the 4-step onboarding and usage process.

### `use-cases.html`
Industry-specific scenarios: Consulting, Government Contracting, IT Services, etc.

### `pricing.html`
Three tiers — **Starter ($49/mo)**, **Pro ($149/mo)**, **Enterprise ($399/mo)** — with annual discount toggle.

### `about.html`
Company mission, founding story, and team.

### `contact.html`
Demo booking form with name, email, company, team size, and message fields.

---

## 🏃 Getting Started

No build step required. This is a pure HTML/CSS/JS site.

```bash
# Clone the repo
git clone <your-repo-url>

# Open the site
# Simply open rfp-agent/index.html in any modern browser
# Or serve it locally:
npx serve rfp-agent
# → Visit http://localhost:3000
```

---

## 📱 Responsive Design

Fully responsive across:
- 🖥️ Desktop (1440px+)
- 💻 Laptop (1024px)
- 📱 Tablet (768px)
- 📲 Mobile (375px)

Mobile navigation is handled via a slide-in hamburger menu overlay.

---

## ♿ Accessibility

- Semantic HTML5 elements (`<nav>`, `<section>`, `<footer>`, etc.)
- ARIA labels on interactive elements
- Keyboard-navigable hamburger menu (`tabindex`, `role="button"`)
- Color contrast compliant text on all backgrounds

---

## 🔮 Roadmap / Future Enhancements

- [ ] Backend API integration (proposal ingestion, AI response generation)
- [ ] User authentication & dashboard
- [ ] Real-time proposal editor with AI suggestions
- [ ] CRM integrations (Salesforce, HubSpot)
- [ ] PDF/DOCX export of generated proposals
- [ ] Analytics dashboard for win/loss tracking

---

## 📜 License

MIT License — free to use, modify, and distribute.

---

> Built with ❤️ for the hackathon · © 2025 RFP Agent
