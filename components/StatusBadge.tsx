import React from 'react';
import { ModuleStatus } from '../types';
import { CheckCircle, Clock, Construction } from 'lucide-react';

interface StatusBadgeProps {
  status: ModuleStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  switch (status) {
    case 'complete':
      return (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-900/30 border border-green-600/50 rounded-full text-green-400 text-xs font-mono uppercase tracking-wider">
          <CheckCircle size={12} />
          <span>Complete</span>
        </div>
      );
    case 'in-development':
      return (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-accent text-xs font-mono uppercase tracking-wider">
          <Construction size={12} />
          <span>Active Dev</span>
        </div>
      );
    case 'planned':
      return (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/20 border border-secondary/50 rounded-full text-secondary text-xs font-mono uppercase tracking-wider">
          <Clock size={12} />
          <span>Planned</span>
        </div>
      );
    default:
      return null;
  }
};

export default StatusBadge;