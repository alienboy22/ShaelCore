"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supportedLocales, type AppLocale } from "@/lib/locale";

type RequesterLocation = { city: string; country: string; latitude: number; longitude: number } | null;
type NetworkContext = { detected: boolean; checked: boolean };
type RequesterResponse = Omit<LocaleContextValue, "ready" | "setLocale">;
type LocaleContextValue = {
  locale: AppLocale;
  location: RequesterLocation;
  tunnel: NetworkContext;
  ready: boolean;
  setLocale: (locale: AppLocale) => void;
};

const defaultValue: LocaleContextValue = {
  locale: "en-CH",
  location: null,
  tunnel: { detected: false, checked: false },
  ready: false,
  setLocale: () => undefined,
};

const LocaleContext = createContext<LocaleContextValue>(defaultValue);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [context, setContext] = useState(defaultValue);

  const setLocale = (locale: AppLocale) => {
    localStorage.setItem("preferred-locale", locale);
    document.documentElement.lang = locale;
    setContext((current) => ({ ...current, locale }));
  };

  useEffect(() => {
    const controller = new AbortController();
    const savedLocale = localStorage.getItem("preferred-locale");
    const preferredLocale = supportedLocales.includes(savedLocale as AppLocale) ? savedLocale as AppLocale : null;
    fetch("/api/requester-context", { signal: controller.signal, cache: "no-store" })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data: RequesterResponse) => {
        const locale = preferredLocale ?? data.locale;
        setContext({ ...data, locale, ready: true, setLocale });
        document.documentElement.lang = locale;
      })
      .catch(() => setContext((current) => ({ ...current, locale: preferredLocale ?? current.locale, ready: true, setLocale })));
    return () => controller.abort();
  }, []);

  return <LocaleContext.Provider value={context}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);
