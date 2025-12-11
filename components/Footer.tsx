import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-mono font-semibold text-secondary tracking-wider uppercase">Legal & Ethical</h3>
            <p className="mt-4 text-xs text-secondary/60 leading-relaxed max-w-md">
              This curriculum teaches cognitive defense techniques extracted from documented experience. 
              Content is provided for educational purposes only. Application of these techniques is the 
              reader's responsibility. This is not legal advice, psychological counseling, or encouragement 
              to engage in harmful behavior.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-sm font-mono font-semibold text-secondary tracking-wider uppercase">Status</h3>
            <p className="mt-4 text-xs text-accent">
              <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              Archive Processing Active
            </p>
            <p className="mt-2 text-xs text-secondary/60">
              New material publishes upon forensic verification.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-secondary/40 font-mono">
            &copy; {new Date().getFullYear()} RyanrealAF. All rights reserved.
          </p>
          <p className="text-xs text-secondary/40 font-mono mt-2 md:mt-0">
            Design System: Dark Elegance v1.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;