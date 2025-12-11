import React from 'react';
import { GitCommit, GitBranch, GitMerge, Database, Terminal, Cpu, AlertTriangle } from 'lucide-react';

const SourceCode: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="mb-12 border-b border-border pb-12">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-primary mb-4">The Psychological Source Code</h1>
        <p className="text-xl text-secondary font-light mb-8">Forensic Mind Map & Methodology Genesis</p>
        
        <p className="text-secondary max-w-3xl leading-relaxed">
          This forensic analysis maps the psychological architecture underlying the entire curriculum. 
          It explains how documented betrayal coded the doctrine, how that doctrine spawned survival philosophies, 
          and how it converged to create the "Unkillable Truth" persona.
        </p>
      </div>

      <div className="relative pl-4 md:pl-0">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-border/50"></div>

        <div className="space-y-16 relative pb-20">
          
          {/* Node 1: The Origin */}
          <div className="md:pl-32 relative group">
            <div className="absolute left-6 md:left-10 top-0 w-5 h-5 -ml-2.5 rounded-full bg-background border-2 border-red-900/50 group-hover:border-red-500 transition-colors z-10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-red-900/50 group-hover:bg-red-500 transition-colors"></div>
            </div>
            
            <div className="bg-surface/50 border border-border p-6 rounded-lg hover:border-red-900/50 transition-colors max-w-3xl">
              <div className="flex items-center gap-3 mb-3 border-b border-border pb-3">
                <AlertTriangle size={16} className="text-red-700" />
                <span className="font-mono text-xs text-red-700 uppercase tracking-widest">System Event: Initial Breach</span>
                <span className="ml-auto font-mono text-xs text-secondary/40">Timestamp: Archive Origin</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Asymmetric Information Discovery</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                Discovery of a parallel reality constructed by a trusted network. The realization that "reality" was being curated by an external author (The Orchestrator) using affection as a masking protocol for extraction.
              </p>
              <div className="bg-background/50 p-3 rounded border border-border/50 font-mono text-xs text-red-400">
                &gt; ERROR: Baseline Trust Protocol compromised.<br/>
                &gt; WARN: Reality testing logic corrupted by gaslighting inputs.
              </div>
            </div>
          </div>

          {/* Node 2: The Fork */}
          <div className="md:pl-32 relative group">
             <div className="absolute left-6 md:left-10 top-0 w-5 h-5 -ml-2.5 rounded-full bg-background border-2 border-secondary group-hover:border-primary transition-colors z-10 flex items-center justify-center">
              <GitBranch size={12} className="text-secondary" />
            </div>

            <div className="bg-surface/50 border border-border p-6 rounded-lg max-w-3xl">
              <div className="flex items-center gap-3 mb-3 border-b border-border pb-3">
                <GitBranch size={16} className="text-secondary" />
                <span className="font-mono text-xs text-secondary uppercase tracking-widest">Process Fork: Survival</span>
                <span className="ml-auto font-mono text-xs text-secondary/40">Commit: defense_v1</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">The Documentation Imperative</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                The psyche splits to survive. Part A continues to perform the role of "compliant subject" to avoid triggering the network. Part B begins the Breadcrumb Web—systematic, timestamped logging of discrepancies.
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-xs font-mono text-secondary">
                  <Database size={14} className="text-accent" />
                  <span>Logging Evidence (Breadcrumb Web)</span>
                </li>
                 <li className="flex items-center gap-2 text-xs font-mono text-secondary">
                  <Cpu size={14} className="text-accent" />
                  <span>Pattern Analysis (Seuss to Cypher)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Node 3: The Synthesis */}
          <div className="md:pl-32 relative group">
             <div className="absolute left-6 md:left-10 top-0 w-5 h-5 -ml-2.5 rounded-full bg-background border-2 border-accent group-hover:border-highlight transition-colors z-10 flex items-center justify-center">
              <GitMerge size={12} className="text-accent" />
            </div>

            <div className="bg-surface border border-accent/20 p-6 rounded-lg max-w-3xl shadow-[0_0_20px_rgba(205,127,50,0.05)]">
              <div className="flex items-center gap-3 mb-3 border-b border-accent/10 pb-3">
                <GitMerge size={16} className="text-accent" />
                <span className="font-mono text-xs text-accent uppercase tracking-widest">Merge: Integration</span>
                <span className="ml-auto font-mono text-xs text-secondary/40">Current Runtime</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">RyanrealAF: The Unkillable Truth</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">
                The gathered intelligence is no longer used merely for survival; it is compiled into a teaching architecture. The target becomes the teacher. The "Test" becomes the "Lesson."
              </p>
              <div className="flex flex-col gap-2">
                <div className="bg-background p-3 rounded border border-border flex items-center justify-between">
                  <span className="font-mono text-xs text-primary">Input: Psychological Warfare</span>
                  <span className="font-mono text-xs text-accent">Output: Educational Curriculum</span>
                </div>
                <div className="bg-background p-3 rounded border border-border flex items-center justify-between">
                  <span className="font-mono text-xs text-primary">Input: Isolation Tactics</span>
                  <span className="font-mono text-xs text-accent">Output: Radical Autonomy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal / Code Block */}
          <div className="md:pl-32 relative mt-12">
            <div className="bg-black border border-border rounded-lg p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4 text-secondary/50 border-b border-secondary/20 pb-2">
                <Terminal size={14} />
                <span>mission_config.json</span>
              </div>
              <pre className="text-secondary/80 overflow-x-auto">
{`{
  "operator": "RyanrealAF",
  "status": "ACTIVE",
  "directives": [
    "Observe without absorbing",
    "Document without reacting",
    "Transmute pain into protocol"
  ],
  "outcome": "They test me, I teach."
}`}
              </pre>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SourceCode;