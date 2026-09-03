import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { Hero } from '../components/blocks/hero';
import { Features } from '../components/blocks/features';
import { ShortcutsMatrix } from '../components/blocks/shortcuts-matrix';
import { FooterMinimal } from '../components/blocks/footer-minimal';
import './globals.css';

export default function Landing() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="landing-page min-h-screen font-sans antialiased selection:bg-neutral-900/10 dark:selection:bg-white/10 bg-[#fafafa] dark:bg-[#090a0f] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <Hero />
        <Features />
        <ShortcutsMatrix />
        <FooterMinimal />
      </div>
      <Analytics />
    </ThemeProvider>
  );
}
