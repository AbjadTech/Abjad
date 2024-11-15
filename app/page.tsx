'use client'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/languageSelction'

export default function HomePage() {
  const { isArabic, setIsArabic } = useLanguage();

  const content = {
    ar: {
      description: "نحن نصنع أدوات رائعة ومبتكرة لتمكين ودعم المجتمع، ودفع التغيير الإيجابي من خلال التكنولوجيا.",
      cta: "اعرف أكثر",
      copyright: "© " + new Date().getFullYear() + " أبجد التقنية. كل الحقوق محفوظة.",
      langButton: "English",
      path_to_logo: "/abjad_tech_text_ar.svg"
    },
    en: {
      description: "We create innovative tools to empower and support the community, driving positive change through technology.",
      cta: "Learn More",
      copyright: "© " + new Date().getFullYear() + " Abjad Tech. All rights reserved.",
      langButton: "العربية",
      logo_text: "Abjad Tech"
    }
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-[#F2F3F5] text-black p-4 ${!isArabic ? 'ltr' : 'rtl'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <button 
        onClick={() => setIsArabic(!isArabic)}
        className="fixed top-4 right-4 bg-white/80 backdrop-blur-sm border border-black/10 shadow-lg rounded-full p-2.5 hover:bg-white/90 transition-all duration-300 group"
        aria-label="Switch language"
      >
        <div className="relative w-6 h-6 overflow-hidden">
          <div className={`absolute inset-0 transition-transform duration-300 ${isArabic ? 'translate-y-0' : 'translate-y-full'}`} style={{ fontFamily: 'TheYearofTheCamel-Bold', fontSize: '19px' }}>
            A
          </div>
          <div className={`absolute inset-0 transition-transform duration-300 ${isArabic ? '-translate-y-full' : 'translate-y-0'}`} style={{ fontFamily: 'TheYearofTheCamel-Bold' }}>
            ع
          </div>
        </div>
      </button>

      <header className="flex flex-col items-center mb-6 sm:flex-row sm:mb-10 gap-4">
        <Image
          src="/abjd_logo_blue.png?height=150&width=150"
          alt="TechCo logo"
          width={150}
          height={150}
          className="mb-3 sm:mb-0 sm:mr-4"
        />
        {isArabic ? (
          <img src="/abjad_tech_text_ar.svg" alt="أبجد التقنية" className="w-full max-w-xl" />
        ) : (
          <h1 className="font-bold mt-5" style={{ fontFamily: 'TheYearofTheCamel-Bold', fontSize: '64px' }}>{content.en.logo_text}</h1>
        )}
      </header>
      <main className="max-w-2xl text-center mx-auto">
        <p className="text-xl mb-6" style={{ fontFamily: 'TheYearofTheCamel-Bold' }}>
          {isArabic ? content.ar.description : content.en.description}
        </p>
        <div className="w-[180px] mx-auto">
          <Link href="/about" className="block bg-[#2300F7] text-[#F2F3F5] font-bold py-2 px-6 hover:bg-opacity-90 transition-colors shadow-xl w-full" style={{ fontFamily: 'TheYearofTheCamel-Bold' }}>
            {isArabic ? content.ar.cta : content.en.cta}
          </Link>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 py-4 px-5 border-t border-black/10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70" style={{ fontFamily: 'TheYearofTheCamel-Light' }}>
            {isArabic ? content.ar.copyright : content.en.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@abjad.cc" className="text-black/80 hover:text-black transition-colors group relative" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {isArabic ? 'البريد الإلكتروني' : 'Email'}
              </span>
            </a>
            <a href="https://x.com/abjadcc" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black transition-colors group relative" title="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {isArabic ? 'إكس (تويتر)' : 'X (Twitter)'}
              </span>
            </a>
            <a href="https://github.com/AbjadTech" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black transition-colors group relative" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {isArabic ? 'جيت هب' : 'GitHub'}
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}