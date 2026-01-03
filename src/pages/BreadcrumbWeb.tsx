import React from 'react';
import { CASE_STUDIES } from '../constants';
import { AlertCircle, FileText, ShieldCheck, Zap } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';

const BreadcrumbWeb: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      {/* Module Header */}
      <div className="mb-16 border-b border-border pb-12">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-primary">The Breadcrumb Web</h1>
          <StatusBadge status="in-development" />
        </div>
        <p className="text-xl text-secondary font-light mb-8">Pattern Recognition Through Primary Evidence</p>
        
        <div className="bg-surface p-6 rounded-lg border-l-4 border-accent max-w-3xl">
          <h3 className="text-accent font-mono text-sm uppercase mb-2">Methodology</h3>
          <p className="text-primary/90 leading-relaxed">
            The Breadcrumb Web protocol is systematic counter-surveillance—meticulous, timestamped logging of every 
            suspicious interaction. This documentation serves two functions: it validates your lived experience against 
            gaslighting, and it reveals operational signatures visible only in aggregate.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid gap-12">
        {CASE_STUDIES.map((study) => (
          <div key={study.id} className="bg-surface border border-border rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-background/50 p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-1">{study.id} // {study.date}</span>
                <h2 className="text-2xl font-bold text-primary">{study.title}</h2>
              </div>
              <div className="px-3 py-1 border border-secondary/30 rounded text-xs font-mono text-secondary">
                Verified Archive
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: The Event */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-secondary/80">
                    <FileText size={16} />
                    <span className="font-mono text-xs uppercase font-bold">The Incident</span>
                  </div>
                  <p className="text-primary/90 bg-background p-4 rounded border border-border/50 text-sm leading-relaxed font-mono">
                    "{study.incident}"
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2 text-secondary/80">
                    <AlertCircle size={16} />
                    <span className="font-mono text-xs uppercase font-bold">Recognition Markers</span>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">
                    {study.recognition}
                  </p>
                </div>
              </div>

              {/* Right Column: Analysis */}
              <div className="space-y-6 lg:border-l lg:border-border lg:pl-8">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-accent">
                    <Zap size={16} />
                    <span className="font-mono text-xs uppercase font-bold">Tactical Analysis</span>
                  </div>
                  <p className="text-primary/90 text-sm leading-relaxed mb-2">
                    {study.tactic}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 text-green-500">
                    <ShieldCheck size={16} />
                    <span className="font-mono text-xs uppercase font-bold">Counter-Protocol</span>
                  </div>
                  <p className="text-primary/90 text-sm leading-relaxed">
                    {study.counter}
                  </p>
                </div>

                <div className="bg-accent/10 border border-accent/20 p-4 rounded mt-4">
                  <span className="block text-accent font-mono text-xs uppercase mb-1">Pedagogical Extraction</span>
                  <p className="text-highlight text-sm italic">
                    {study.lesson}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination / Loading */}
      <div className="mt-16 text-center border-t border-border pt-8">
        <p className="text-secondary text-sm mb-4 font-mono">
          Archive Processing Ongoing. New cases added monthly.
        </p>
        <button className="px-6 py-2 border border-secondary text-secondary hover:text-primary hover:border-primary font-mono text-sm transition-colors rounded">
          Load Historical Archive
        </button>
      </div>
    </div>
  );
};

export default BreadcrumbWeb;