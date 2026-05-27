### Next.js Language Translator Store 🌍

A modern multilingual product landing page built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Magic UI, React Query, and i18next.
The application supports dynamic language translation for both static UI text and API product data using google-translate-api-x.


### 🚀 Features
---
### 🌐 Multi-language support
- English
- Hindi
- Bengali
### 🎨 Modern UI using:
- Tailwind CSS
- shadcn/ui
- Magic UI
### 📦 Product listing using FakeStore API
### 🔄 Dynamic product translation
- Product title
- Description
- Category
### ⚡ React Query caching
### 🌍 Language auto-detection using:
- i18next-browser-languagedetector
### 🧠 Custom translation hooks

---
### 🛠 Tech Stack

| Technology             | Purpose                 |
| ---------------------- | ----------------------- |
| Next.js                | React Framework         |
| TypeScript             | Type Safety             |
| Tailwind CSS           | Styling                 |
| shadcn/ui              | UI Components           |
| Magic UI               | Animation/UI Effects    |
| i18next                | Internationalization    |
| React Query            | API State Management    |
| FakeStore API          | Product Data            |
| google-translate-api-x | Dynamic Translation API |

---
### 📂 Project Structure

```
├── 📁 public/
│   ├── 🖼️ file.svg
│   ├── 🖼️ globe.svg
│   ├── 🖼️ next.svg
│   ├── 🖼️ vercel.svg
│   └── 🖼️ window.svg
├── 📁 src/
│   ├── 📁 @type/
│   │   └── 📄 product.ts
│   ├── 📁 JSON/
│   │   ├── 📁 data/
│   │   │   ├── 📄 about.ts
│   │   │   └── 📄 contact.ts
│   │   └── 📁 lottie/
│   ├── 📁 api/
│   │   ├── 📄 api.function.ts
│   │   └── 📄 axios.instance.ts
│   ├── 📁 app/
│   │   ├── 📁 (userpannel)/
│   │   │   ├── 📄 layout.tsx
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 api/
│   │   │   └── 📁 translate/
│   │   │       └── 📄 route.ts
│   │   ├── 📄 favicon.ico
│   │   ├── 🎨 globals.css
│   │   ├── 📄 layout.tsx
│   │   └── 📄 providers.tsx
│   ├── 📁 assets/
│   │   ├── 📁 json/
│   │   │   └── ⚙️ about.json
│   │   ├── 🖼️ banner1.jpg
│   │   ├── 🖼️ banner2.jpg
│   │   └── 🖼️ banner3.jpg
│   ├── 📁 components/
│   │   ├── 📁 ui/
│   │   │   ├── 📄 badge.tsx
│   │   │   ├── 📄 border-beam.tsx
│   │   │   ├── 📄 button.tsx
│   │   │   ├── 📄 card.tsx
│   │   │   ├── 📄 input.tsx
│   │   │   ├── 📄 lens.tsx
│   │   │   ├── 📄 magic-card.tsx
│   │   │   ├── 📄 morphing-text.tsx
│   │   │   ├── 📄 scroll-area.tsx
│   │   │   ├── 📄 select.tsx
│   │   │   ├── 📄 separator.tsx
│   │   │   ├── 📄 shimmer-button.tsx
│   │   │   ├── 📄 sparkles-text.tsx
│   │   │   ├── 📄 textarea.tsx
│   │   │   └── 📄 tooltip.tsx
│   │   ├── 📄 LanguageSwitcher.tsx
│   │   ├── 📄 ProductCard.tsx
│   │   ├── 📄 ProductSkleton.tsx
│   │   └── 📄 ThemeToggle.tsx
│   ├── 📁 hook/
│   │   ├── 📄 useProducts.ts
│   │   └── 📄 useTranslate.ts
│   ├── 📁 i18n/
│   │   ├── 📁 locales/
│   │   │   ├── ⚙️ bn.json
│   │   │   ├── ⚙️ en.json
│   │   │   └── ⚙️ hi.json
│   │   └── 📄 index.ts
│   ├── 📁 layout/
│   │   ├── 📄 Footer.tsx
│   │   └── 📄 Navbar.tsx
│   ├── 📁 lib/
│   │   └── 📄 utils.ts
│   └── 📁 section/
│       ├── 📄 About.tsx
│       ├── 📄 Banner.tsx
│       ├── 📄 Contact.tsx
│       └── 📄 Products.tsx
├── ⚙️ .gitignore
├── 📝 AGENTS.md
├── 📝 CLAUDE.md
├── 📝 README.md
├── ⚙️ components.json
├── 📄 eslint.config.mjs
├── 📄 next.config.ts
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 postcss.config.mjs
└── ⚙️ tsconfig.json
```
---
### 📌 Step 1 — Install Dependencies
```
npm install i18next react-i18next i18next-browser-languagedetector
npm install @tanstack/react-query
npm install google-translate-api-x
npx shadcn@latest init
```
---
### 📌 Step 2 — Configure i18next
---
## What is i18next? 🌍
i18next is an internationalization library used for translating static UI text.

Example:
```
t("About Us")
```
Depending on selected language:
| Language | Output          |
| -------- | --------------- |
| English  | About Us        |
| Hindi    | हमारे बारे में  |
| Bengali  | আমাদের সম্পর্কে |

---
## Why Use i18next?
Because:
- Easy translation management
- Multi-language support
- Automatic language detection
- Reusable translation keys
- Supports React perfectly
---
## i18n Configuration
```
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/locales/en/common.json";
import hi from "@/locales/hi/common.json";
import bn from "@/locales/bn/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      hi: {
        translation: hi,
      },
      bn: {
        translation: bn,
      },
    },

    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```
---
### Step 3 — Translation JSON Files
---
## locales/en/common.json
```
{
  "About Us": "About Us",
  "Contact": "Contact",
  "Add To Cart": "Add To Cart"
}
```
## locales/hi/common.json
```
{
  "About Us": "हमारे बारे में",
  "Contact": "संपर्क करें",
  "Add To Cart": "कार्ट में जोड़ें"
}
```
## locales/bn/common.json
```
{
  "About Us": "আমাদের সম্পর্কে",
  "Contact": "যোগাযোগ",
  "Add To Cart": "কার্টে যোগ করুন"
}
```
---
