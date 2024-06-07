import React, { createContext, useState, useContext, ReactNode } from "react";
import en from "../data/en.json";
import ka from "../data/ka.json";

type Locale = "en" | "ka";

interface Service {
  title: string;
  description: string;
}

interface Commitment {
  title: string;
  description: string;
}

interface AboutUs {
  title: string;
  description: string;
}

interface InnovativeSolutionsAndDigitalImaging {
  title: string;
  description: string;
}

interface EffectiveCommunication {
  title: string;
  description: string;
}

interface SwiftspaceTranslations {
  services: {
    webDevelopmentAndDesign: Service;
    modernFrontEndTechnologies: Service;
    backEndProgramming: Service;
    advancedDatabaseManagement: Service;
    cuttingEdgeFrameworks: Service;
    mobileAppDevelopment: Service;
    maintenanceAndTechnicalSupport: Service;
  };
  commitment: Commitment;
  aboutUs: AboutUs;
  innovativeSolutionsAndDigitalImaging: InnovativeSolutionsAndDigitalImaging;
  effectiveCommunication: EffectiveCommunication;
}

interface Translations {
  SWIFTSPACE: SwiftspaceTranslations;
}
interface TranslationContextType {
  locale: Locale;
  t: Translations;
  changeLanguage: (code: Locale) => void;
}

const TranslationContext = createContext<TranslationContextType>({
  locale: "en",
  t: en,
  changeLanguage: () => {},
});

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>("en");
  const t: Translations = locale === "en" ? en : ka;

  const changeLanguage = (code: Locale) => {
    setLocale(code);
  };

  return (
    <TranslationContext.Provider value={{ locale, t, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType =>
  useContext(TranslationContext);
