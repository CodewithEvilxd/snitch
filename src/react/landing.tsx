import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { Hero } from '../components/blocks/hero';
import { Features } from '../components/blocks/features';
import { FooterMinimal } from '../components/blocks/footer-minimal';
import './globals.css';

export default function Landing() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="landing-page min-h-screen font-sans antialiased selection:bg-neutral-900/10 dark:selection:bg-white/10 bg-white dark:bg-[#0c0d12] text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
        <Hero />
        <Features />
        <FooterMinimal />
      </div>
      <Analytics />
    </ThemeProvider>
  );
}
