"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  isArabic: boolean;
  setIsArabic: (value: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  isArabic: true,
  setIsArabic: () => {}
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [isArabic, setIsArabic] = useState(true);

  return (
    <LanguageContext.Provider value={{ isArabic, setIsArabic }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
