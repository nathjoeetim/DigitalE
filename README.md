# Digital Equity Africa Web Platform

A premium, immersive, technology-forward web experience built to represent **Digital Equity Africa** as a world-class technology, AI, innovation, and digital transformation ecosystem.

This platform transitions the legacy static application into a modern Next.js 16 + React 19 application utilizing Tailwind CSS v4 and Framer Motion for high-fidelity animations.

## 🚀 Tech Stack

- **Core Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Logic & Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Transitions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

- **`src/app/`**: Root App Router pages
  - **`page.tsx`**: Home Page containing:
    - Interactive 5-scene vertical storytelling hero (transitions, morphing nodes, cyber dashboards, and Afrofuturistic energy systems).
    - Split-screen about preview with scroll-triggered capability cards.
    - Live counts-up metrics dashboard for pan-African impact indicators.
    - Interactive service connection network linking all 6 service nodes.
    - Rich, case study highlights with metrics.
    - Infinite looping partners marquee slider (colorizes on hover).
  - **`about/page.tsx`**: Editorial manifesto, interactive growth timeline, custom clickable SVG map of African tech nodes (Lagos, Nairobi, Kigali, Accra, Cape Town), and leadership values.
  - **`services/page.tsx`**: Sticky side navigation catalog of productized solutions (Corporate Digitization, AI Immersions, AI Literacy, Kids Tech Fest, PR, and Tech Event Management), featuring custom live SVG dashboard widget previews.
  - **`contact/page.tsx`**: Conversational split-column enquiry layout featuring smart category drop-down targets, glowing focus transitions, and a premium success overlay state.
  - **`globals.css`**: Design tokens, glassmorphism templates, tech-grids, glowing particles, scrollbar styling, and ambient light values.
- **`src/components/`**: Layout and structural component libraries (`Header`, `Footer`).
- **`public/assets/`**: High-resolution cinematic AI assets (Africa night network map, command center visual).
- **`legacy/`**: Houses the old static website code (`index.html`, `styles.css`, `app.js`, `server.js`, etc.) for git preservation.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your browser.

### 3. Verify Production Compilation
```bash
npm run build
```
This runs the TypeScript compiler and exports optimized static production bundles.
