'use client';

import { createContext, useContext, ReactNode } from 'react';

type Messages = Record<string, any>;

interface LocaleContextType {
  locale: string;
  messages: Messages;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: string;
  messages: Messages;
}) {
  return (
    <LocaleContext.Provider value={{ locale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}

export function useTranslations() {
  const { messages } = useLocale();
  
  return (key: string) => {
    const keys = key.split('.');
    let value: any = messages;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}

