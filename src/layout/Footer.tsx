'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa'

import { SparklesText } from '@/components/ui/sparkles-text'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const { t } = useTranslation()

  const footerLinks = [
    {
      title: t('company') || 'Company',
      links: [
        { label: t('about') || 'About', href: '#about' },
        { label: t('product') || 'Products', href: '#products' },
        { label: t('contact') || 'Contact', href: '#contact' },
      ],
    },
    {
      title: t('support') || 'Support',
      links: [
        { label: t('FAQs'), href: '#' },
        { label: t('help_center'), href: '#' },
        { label: t('privacy_policy'), href: '#' },
        { label: t('terms_conditions'), href: '#' },
      ],
    },
  ]

  const socials = [
    { icon: FaFacebookF, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaGithub, href: '#' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-black/10 dark:border-white/10 bg-linear-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full bg-slate-300/20 blur-3xl dark:bg-slate-700/20" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-slate-400/10 blur-3xl dark:bg-slate-600/10" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="space-y-5">
            <Link href="/">
              <SparklesText className="text-3xl font-bold text-slate-900 dark:text-white">
                {t('title')}
              </SparklesText>
            </Link>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
             {t('Explore premium quality products with modern design,affordable pricing, and fast delivery experience.')}
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Icon className="h-5 w-5 text-slate-700 dark:text-slate-300 transition group-hover:scale-110" />
                  </Link>
                )
              })}
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
                {t(section.title)}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-black dark:text-slate-400 dark:hover:text-white"
                    >
                      {t(link.label)}
                      <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
              {t('newsletter')}
            </h3>

            <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
           {t('get_updates_about_latest_products_offers_and_exclusive_deals')}
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder={t("enter_your_email")}
                className="h-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 px-4 text-sm text-slate-900 dark:text-white outline-none backdrop-blur placeholder:text-slate-400 focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700"
              />
              <Button className="h-12 rounded-2xl text-sm font-semibold">
               {t('subscribe_now')}
              </Button>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Mail size={16} />
                support@example.com
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Phone size={16} />
                +91 **********
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <MapPin size={16} />
                {t("India")}
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-slate-200 dark:bg-slate-800" />
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} {t('title')} . {t('rights_reserved')}.
          </p>

          <div className="flex items-center gap-5 text-sm text-slate-600 dark:text-slate-400">
            <Link href="#" className="hover:text-black dark:hover:text-white">
            {t('privacy')}
            </Link>

            <Link href="#" className="hover:text-black dark:hover:text-white">
             {t('terms')}
            </Link>

            <Link href="#" className="hover:text-black dark:hover:text-white">
              {t('cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}