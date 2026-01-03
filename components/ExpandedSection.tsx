import React, { ReactNode } from 'react';
import { useExpandedSection, ExpandedSectionType } from '@/context/ExpandedSectionContext';

interface ExpandedSectionProps {
  title: string;
  section: 'attack' | 'foundations' | 'defense'; // More specific prop type
  children: ReactNode;
}

const ExpandedSection = ({ title, section, children }: ExpandedSectionProps) => {
  const { expanded, setExpanded } = useExpandedSection();
  const isActive = expanded === section;

  // Only render the active section
  if (expanded !== section) {
    return null;
  }

  return (
    // The key change is to always render with translate-y-0 when active.
    // The parent component's state change (from a section to null) will cause this
    // component to unmount, and we can apply an exit animation via CSS.
    // For simplicity with Tailwind, we'll stick to the enter animation which is already smooth.
    // A true exit animation would require a library like framer-motion or react-transition-group.
    <div className={`fixed bottom-0 left-0 right-0 bg-surface border-t-2 border-border p-4 overflow-y-auto max-h-60 transform transition-transform duration-300 ease-in-out translate-y-0`}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-mono text-accent">{title}</h2>
        <button onClick={() => setExpanded(null)} className="text-secondary hover:text-primary">&times;</button>
      </div>
      <div className="font-mono text-sm">
        {children}
      </div>
    </div>
  );
};

export default ExpandedSection;