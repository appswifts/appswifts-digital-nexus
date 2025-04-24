
import React, { createContext, useContext, ReactNode, useState } from 'react';

type SiteContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const defaultContext: SiteContextType = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

const SiteContext = createContext<SiteContextType>(defaultContext);

export const useSite = () => useContext(SiteContext);

export const SiteProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SiteContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </SiteContext.Provider>
  );
};
