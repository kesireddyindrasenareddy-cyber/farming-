import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../translations';

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string, replacements?: { [key: string]: string | number }) => string;
  availableLanguages: { [key: string]: { name: string } };
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<string>(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: string) => {
    if (translations[lang]) {
      setLanguageState(lang);
    }
  };

  const t = (key: string, replacements?: { [key: string]: string | number }): string => {
    let translation = translations[language]?.[key] || translations['en']?.[key] || key;

    if (replacements) {
        Object.keys(replacements).forEach(placeholder => {
            translation = translation.replace(`{{${placeholder}}}`, String(replacements[placeholder]));
        });
    }

    return translation;
  };

  const availableLanguages = Object.keys(translations).reduce((acc, langCode) => {
    acc[langCode] = { name: translations[langCode].name };
    return acc;
  }, {});


  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};
