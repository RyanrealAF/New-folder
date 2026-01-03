import React from 'react';
import StatusBadge from '../components/StatusBadge';
import { Brain, FileText, GitBranch } from 'lucide-react';

const SourceCode: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="mb-16 border-b border-border pb-12">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-primary">Source Code</h1>
          <StatusBadge status="in-development" />
        </div>
        <p className="text-xl text-secondary font-light mb-8">Forensic Mind Map & Psychological Blueprint</p>
        
        <p className="text-secondary max-w-3xl leading-relaxed">
          A comprehensive analysis mapping the core doctrines to their psychological origins, formative traumas, 
          and relational archetypes. This is the meta-analysis that generated the entire teaching framework.
        </p>
      </div>

      {/* Featured Analysis */}
      <div className="mb-16">
        <div className="bg-surface border border-accent/40 rounded-lg p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 bg-accent/10 rounded-bl-lg border-l border-b border-accent/20">
            <span className="text-accent font-mono text-xs font-bold uppercase">Primary Research</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-secondary/60 font-mono text-xs uppercase mb-2 block">FM-001 // Status: In Development</span>
            <h2 className="text-3xl font-bold text-primary mb-6">The Psychological Architecture Behind the Doctrine</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-mono font-bold text-accent mb-4">Core Formative Events</h3>
                <ul className="space-y-3 text-sm text-secondary/80">
                  <li className="border-l border-border pl-3">
                    <span className="text-primary font-medium">Early Humiliation Patterns:</span>
                    <br />How early social rejection shaped defensive mechanisms
                  </li>
                  <li className="border-l border-border pl-3">
                    <span className="text-primary font-medium">Trust Betrayal Sequences:</span>
                    <br />The evolution from naive trust to strategic skepticism
                  </li>
                  <li className="border-l border-border pl-3">
                    <span className="text-primary font-medium">Systematic Gaslighting Events:</span>
                    <br />Catalog of manipulation tactics and their documented effects
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-mono font-bold text-accent mb-4">Doctrinal Genesis</h3>
                <ul className="space-y-3 text-sm text-secondary/80">
                  <li className="border-l border-border pl-3">
                    <span className="text-primary font-medium">Non-Kinetic Warfare Doctrine:</span>
                    <br />Extracted from personal experience of psychological operations
                  </li>
                  <li className="border-l border-border pl-3">
                    <span className="text-primary font-medium">HUMINT Network Analysis:</span>
                    <br />First-hand observation of coordination patterns
                  </li>
                  <li className="border-l border-border pl-3">
                    <span className="text-primary font-medium">Counter-Offensive Protocols:</span>
                    <br />Battle-tested defensive strategies and their outcomes
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-background p-6 rounded border border-border/50">
              <h4 className="text-sm font-mono text-accent uppercase mb-3">Methodology Note</h4>
              <p className="text-secondary text-sm leading-relaxed italic">
                "This analysis emerged from necessity. When you're under systematic psychological attack, 
                you either develop a framework to understand and counter it, or you don't survive the process. 
                This is the framework that kept me functional while documenting the attack patterns that were being used against me."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Research Areas */}
      <div className="mb-12">
        <h2 className="text-2xl font-mono font-bold text-primary mb-8">Research Archives</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-background border border-border rounded-lg p-6">
            <Brain className="text-accent mb-4" size={24} />
            <h3 className="text-lg font-bold text-primary mb-2">Neurolinguistic Patterns</h3>
            <p className="text-sm text-secondary/80 mb-4">
              Analysis of how language patterns create cognitive vulnerabilities and defensive mechanisms.
            </p>
            <span className="text-xs font-mono text-secondary/50">FM-002 // Planned</span>
          </div>

          <div className="bg-background border border-border rounded-lg p-6">
            <FileText className="text-accent mb-4" size={24} />
            <h3 className="text-lg font-bold text-primary mb-2">Case Study Compilation</h3>
            <p className="text-sm text-secondary/80 mb-4">
              Detailed documentation of specific attack patterns with tactical breakdowns and outcomes.
            </p>
            <span className="text-xs font-mono text-secondary/50">FM-003 // In Progress</span>
          </div>

          <div className="bg-background border border-border rounded-lg p-6">
            <GitBranch className="text-accent mb-4" size={24} />
            <h3 className="text-lg font-bold text-primary mb-2">Network Topology</h3>
            <p className="text-sm text-secondary/80 mb-4">
              Mapping the structural relationships between orchestrators, handlers, and unwitting operatives.
            </p>
            <span className="text-xs font-mono text-secondary/50">FM-004 // Planned</span>
          </div>
        </div>
      </div>

      {/* Access Notice */}
      <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 text-center">
        <h3 className="text-lg font-mono font-bold text-primary mb-4">Research Access</h3>
        <p className="text-secondary text-sm mb-6 max-w-2xl mx-auto">
          This represents the psychological and tactical foundation that generated the defensive curriculum. 
          Access is restricted to ensure the methodology remains focused on protection rather than attack.
        </p>
        <button className="px-6 py-3 bg-accent text-background font-bold font-mono text-sm rounded hover:bg-highlight transition-colors">
          Request Access
        </button>
      </div>
    </div>
  );
};

export default SourceCode;