'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Menu, ShoppingCart, X } from 'lucide-react'

import LanguageSwitcher from '@/components/LanguageSwitcher'
import ThemeToggle from '@/components/ThemeToggle'
import { SparklesText } from '@/components/ui/sparkles-text'

export default function Navbar() {
  const { t } = useTranslation()
  const [mobileMenu, setMobileMenu] = useState(false)

  const navLinks = [
    { label: t('home'), href: '#home' },
    { label: t('product'), href: '#products' },
    { label: t('about'), href: '#about' },
    { label: t('contact'), href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <div className="max-w-[170px] sm:max-w-[220px] lg:max-w-full">
              <SparklesText
                className="whitespace-normal wrap-break-word leading-tight text-lg sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white"
              >{t('title')}</SparklesText>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />

            <ThemeToggle />

            <button className="hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
              <ShoppingCart size={18} />
              <span>{t('cart')} (0)</span>
            </button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden flex items-center justify-center rounded-xl p-2 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenu
              ? 'max-h-[400px] opacity-100 py-4'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg p-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Cart */}
              <button className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-4 py-3 text-sm font-semibold text-white dark:text-black hover:opacity-90 transition">
                <ShoppingCart size={18} />
                Cart (0)
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}