import React from 'react';
import StatusBadge from '../components/StatusBadge';
import { Download, FileText, Brain } from 'lucide-react';

const SeussToCypher: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="mb-16 border-b border-border pb-12">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-primary">Seuss to Cypher</h1>
          <StatusBadge status="complete" />
        </div>
        <p className="text-xl text-secondary font-light mb-8">Technical Analysis of Cognitive Pattern Manipulation</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-secondary leading-relaxed mb-4">
              Formalizing the cognitive mechanics underlying all pattern-based manipulation. The title references the journey from 
              anapestic meter (the da-da-DUM bounce every child knows) to sophisticated deployment of those same principles 
              as strategic communication tools.
            </p>
            <p className="text-secondary leading-relaxed">
              This is neurolinguistic analysis showing how establishing predictable patterns creates cognitive baselines, 
              and how disrupting them forces deeper processing.
            </p>
          </div>
          <div className="bg-surface p-6 rounded-lg border border-border">
            <h3 className="font-mono text-primary font-bold mb-4 flex items-center gap-2">
              <Brain className="text-accent" size={20} />
              Core Mechanisms
            </h3>
            <ul className="space-y-2 text-sm text-secondary/80 font-mono">
              <li className="flex items-start">
                <span className="text-accent mr-2">01.</span>
                <span>Meter creates expectation (Baseline)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">02.</span>
                <span>Syncopation forces engagement (Disruption)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">03.</span>
                <span>Accumulation builds tension (Load)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">04.</span>
                <span>Strategic silence starves attrition (Resolution)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-mono text-primary font-bold mb-8">Technical Reports</h2>
        
        {/* Featured Report */}
        <div className="bg-surface border border-accent/40 rounded-lg p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 bg-accent/10 rounded-bl-lg border-l border-b border-accent/20">
            <span className="text-accent font-mono text-xs font-bold uppercase">Featured Analysis</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-secondary/60 font-mono text-xs uppercase mb-2 block">TR-001 // Status: Complete</span>
            <h3 className="text-2xl font-bold text-primary mb-4">From Single Pulse to Layered Groove: Polyrhythmic Flow</h3>
            <p className="text-secondary mb-6">
              A comprehensive breakdown of how multiple rhythmic timelines can be sustained simultaneously to create 
              defensive depth. Demonstrates the "Grey Rock" technique not as passivity, but as a rigid, unyielding bassline 
              against chaotic treble input.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center px-4 py-2 bg-accent text-background font-bold font-mono text-sm rounded hover:bg-highlight transition-colors">
                <FileText size={16} className="mr-2" />
                Read Online
              </button>
              <button className="flex items-center px-4 py-2 border border-secondary text-secondary font-mono text-sm rounded hover:border-primary hover:text-primary transition-colors">
                <Download size={16} className="mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Future Reports */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-border border-dashed rounded-lg opacity-75">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-xs text-secondary/50 uppercase">TR-002 // In Development</span>
            </div>
            <h3 className="text-lg font-bold text-secondary mb-2">Internal Rhyme & Enjambment Layering</h3>
            <p className="text-sm text-secondary/60">Analysis of syntactic tension and release.</p>
          </div>
          
          <div className="p-6 border border-border border-dashed rounded-lg opacity-75">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-xs text-secondary/50 uppercase">TR-003 // Planned</span>
            </div>
            <h3 className="text-lg font-bold text-secondary mb-2">Semantic Density Manipulation</h3>
            <p className="text-sm text-secondary/60">Overloading processing channels through vocabulary density.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeussToCypher;