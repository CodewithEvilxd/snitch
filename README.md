<div align="center">

# ⚡ Snitch

### *Catch your screen red-handed.*

Lightweight, aesthetic screen-capture and visual annotation studio for the modern web.

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=flat-square)](LICENSE)
[![Built with React 19](https://img.shields.io/badge/React-19-blue.svg?style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF.svg?style=flat-square)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/TailwindCSS-v4-38B2AC.svg?style=flat-square)](https://tailwindcss.com/)

[**Live Studio**](https://codewithevilxd.github.io/snitch/) · [**Report Bug**](https://github.com/codewithevilxd/snitch/issues) · [**Request Feature**](https://github.com/codewithevilxd/snitch/issues)

</div>

---

## ✨ Features

- 🎯 **Browser-Native Screen Capture**: Capture active display, individual windows, or specific regions using modern Screen Capture APIs (`getDisplayMedia`).
- 🎨 **Studio Annotation Canvas**:
  - **Drawing & Shapes**: Rectangle, Ellipse, Arrows, Lines, and Freehand markers.
  - **Text Tool**: Clean typography overlay with instant positioning.
  - **Pixelate & Blur**: Redact private keys, passwords, and sensitive areas with one drag.
  - **Crop & Re-frame**: Non-destructive cropping with intuitive corner handles.
- 🖼️ **Aesthetic Studio Framing**:
  - Customizable canvas backgrounds: Gradients, solid colors, mesh, or custom wallpaper upload.
  - Granular control over padding, corner radius, drop shadows, and border strokes.
  - Filter presets: *Mono Ink*, *Crisp Pop*, *Warm Glow*, *Sepia Film*, *Cool Mint*, *Cyber Neon*, and *Noir Blue*.
- 🏷️ **Watermark & Badge**: Add subtle handle branding (`@snitch` or your personal handle) on export.
- ⚡ **Zero-Friction Sharing**: Instant 1-click **Copy to Clipboard** (`⌘C` / `Ctrl+C`) or direct **Download** (`⌘E` / `Ctrl+E`).
- 🌓 **Dark & Light Mode**: Seamless theme switching with high-contrast studio layout.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: TailwindCSS v4 + Radix UI Primitives
- **Animations**: GSAP + Framer Motion
- **Icons**: Lucide React
- **Canvas Engine**: HTML5 Canvas with custom high-performance 2D renderer

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/codewithevilxd/snitch.git
   cd snitch
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   Production build will be generated in `dist/`.

---

## 📁 Project Structure

```text
snitch/
├── index.html                  # Marketing landing page
├── capture.html                # Web Studio & screen capture engine
├── src/
│   ├── components/
│   │   ├── blocks/             # Landing page hero, features, and showcase
│   │   ├── editor/             # React studio sidebar (tools, appearance, export)
│   │   └── ui/                 # Reusable UI primitives (Radix UI)
│   ├── react/                  # React entrypoints & mounts
│   └── renderer/
│       ├── renderer.js         # Core HTML5 canvas annotation & export engine
│       ├── web-preview.js      # Web DisplayMedia & clipboard polyfill
│       └── styles.css          # Studio aesthetic styling & glassmorphism
├── public/                     # Static assets & sample presets
├── package.json
└── vite.config.ts
```

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">
  Crafted with care by <strong><a href="https://github.com/codewithevilxd">codewithevilxd</a></strong>
</div>
