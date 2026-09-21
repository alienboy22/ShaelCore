export const supportedLocales = ["en-CH", "en-US", "en-NG", "en-GB", "de-DE"] as const;

export type AppLocale = (typeof supportedLocales)[number];

export const localeForCountry = (countryCode?: string): AppLocale => {
  switch (countryCode?.toUpperCase()) {
    case "US": return "en-US";
    case "NG": return "en-NG";
    case "GB": return "en-GB";
    case "DE": return "de-DE";
    default: return "en-CH";
  }
};

export const localeLabel = (locale: AppLocale) => ({
  "en-CH": "EN-CH",
  "en-US": "EN-US",
  "en-NG": "EN-NG",
  "en-GB": "EN-UK",
  "de-DE": "DE-DE",
}[locale]);
