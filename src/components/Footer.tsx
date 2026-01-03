import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-mono font-bold text-primary mb-4">
              Ryanreal<span className="text-accent">AF</span>
            </h3>
            <p className="text-secondary text-sm leading-relaxed mb-4">
              A living curriculum in cognitive defense—extracted from documented psychological warfare 
              and formalized into teachable defensive protocols.
            </p>
            <p className="text-xs font-mono text-secondary/70">
              © 2025 RyanrealAF. Doctrine of Dark Elegance Applied.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-mono font-bold text-primary mb-4 uppercase tracking-wider">Doctrine</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/doctrine/foundations" className="text-secondary hover:text-accent transition-colors">Foundations</Link></li>
              <li><Link to="/doctrine/attack" className="text-secondary hover:text-accent transition-colors">Attack Cycle</Link></li>
              <li><Link to="/doctrine/defense" className="text-secondary hover:text-accent transition-colors">Defense</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-mono font-bold text-primary mb-4 uppercase tracking-wider">Modules</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/breadcrumb-web" className="text-secondary hover:text-accent transition-colors">Breadcrumb Web</Link></li>
              <li><Link to="/seuss-to-cypher" className="text-secondary hover:text-accent transition-colors">Seuss to Cypher</Link></li>
              <li><Link to="/music" className="text-secondary hover:text-accent transition-colors">Embodied Mastery</Link></li>
              <li><Link to="/source-code" className="text-secondary hover:text-accent transition-colors">Source Code</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;