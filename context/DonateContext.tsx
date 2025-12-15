'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface DonateContextType {
  isDonateOpen: boolean;
  openDonate: () => void;
  closeDonate: () => void;
}

const DonateContext = createContext<DonateContextType | undefined>(undefined);

export function DonateProvider({ children }: { children: ReactNode }) {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const openDonate = () => setIsDonateOpen(true);
  
  const closeDonate = () => {
    setIsDonateOpen(false);
    // Remove hash from URL if it exists without triggering scroll or reload
    if (window.location.hash === '#donate') {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  // Listen for #donate hash on mount and URL changes
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#donate') {
        setIsDonateOpen(true);
      }
    };

    // Check initial hash
    if (window.location.hash === '#donate') {
      setIsDonateOpen(true);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname, searchParams]);

  return (
    <DonateContext.Provider value={{ isDonateOpen, openDonate, closeDonate }}>
      {children}
    </DonateContext.Provider>
  );
}

export function useDonate() {
  const context = useContext(DonateContext);
  if (context === undefined) {
    throw new Error('useDonate must be used within a DonateProvider');
  }
  return context;
}
