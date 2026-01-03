import React, { createContext, useState, useContext, ReactNode } from 'react';

export type ExpandedSectionType = 'attack' | 'foundations' | 'defense' | null;

interface ExpandedSectionContextProps {
  expanded: ExpandedSectionType;
  setExpanded: (section: ExpandedSectionType) => void;
}

const ExpandedSectionContext = createContext<ExpandedSectionContextProps | undefined>(undefined);

export const ExpandedSectionProvider = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState<ExpandedSectionType>(null);

  return <ExpandedSectionContext.Provider value={{ expanded, setExpanded }}>{children}</ExpandedSectionContext.Provider>;
};

export const useExpandedSection = () => {
  const context = useContext(ExpandedSectionContext);
  if (!context) throw new Error('useExpandedSection must be used within an ExpandedSectionProvider');
  return context;
};