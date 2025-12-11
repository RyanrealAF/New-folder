import React from 'react';
import { ModuleData } from '../types';
import StatusBadge from './StatusBadge';
import { ArrowRight, Brain, Network, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModuleCardProps {
  module: ModuleData;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const Icon = () => {
    switch (module.id) {
      case 'breadcrumb': return <Network className="text-accent w-6 h-6" />;
      case 'seuss': return <Brain className="text-accent w-6 h-6" />;
      case 'music': return <Music className="text-accent w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <Link to={module.path} className="block h-full group">
      <div className="h-full bg-surface border border-border p-6 rounded-lg transition-all duration-300 hover:border-accent hover:shadow-[0_0_15px_rgba(205,127,50,0.1)] relative overflow-hidden flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-background rounded-md border border-border group-hover:border-accent/50 transition-colors">
            <Icon />
          </div>
          <StatusBadge status={module.status} />
        </div>
        
        <h3 className="text-xl font-mono font-bold text-primary mb-1 group-hover:text-accent transition-colors">
          {module.title}
        </h3>
        <p className="text-sm font-mono text-secondary/80 mb-4 uppercase tracking-tight">
          {module.subtitle}
        </p>
        
        <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
          {module.description}
        </p>

        <div className="border-t border-border pt-4 mt-auto">
          <div className="mb-3">
            <span className="text-xs font-mono text-accent uppercase block mb-1">For:</span>
            <span className="text-xs text-secondary/70">{module.audience}</span>
          </div>
          <div className="flex items-center text-primary text-sm font-mono group-hover:translate-x-1 transition-transform">
            <span>Enter Module</span>
            <ArrowRight size={16} className="ml-2 text-accent" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;