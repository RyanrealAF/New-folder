import React from 'react';
import { MODULES } from '../constants';
import ModuleCard from '../components/ModuleCard';
import { Shield, Target, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-4 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-block px-3 py-1 mb-6 border border-accent/30 rounded-full bg-accent/5">
            <span className="text-accent font-mono text-xs uppercase tracking-widest">Active Intelligence Research</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-mono font-bold text-primary mb-6 tracking-tighter leading-tight">
            THEY TEST ME, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">I TEACH.</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-secondary font-light max-w-2xl leading-relaxed mb-8">
            A Living Curriculum in Cognitive Defense—Extracted from Documented Psychological Warfare, Formalized into Transmissible Knowledge.
          </h2>
          
          <div className="text-secondary/80 space-y-4 max-w-3xl border-l-2 border-accent pl-6 py-2">
            <p>
              This is not therapy. This is not memoir. This is operational intelligence extracted from systematic 
              psychological warfare and reverse-engineered into teachable defensive protocols.
            </p>
            <p>
              What you're looking at is a living curriculum—complete enough to be immediately useful, 
              explicitly unfinished because I'm still processing archive material and field-testing techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-mono font-bold text-primary mb-2">Choose Your Entry Point</h2>
            <p className="text-secondary">Based on your immediate tactical need.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MODULES.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Doctrine Section */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-mono font-bold text-primary mb-2">Built on Doctrine</h2>
              <p className="text-secondary max-w-xl">
                All learning modules derive from stable foundational doctrine that explains threat architecture, 
                operational tactics, and strategic defense.
              </p>
            </div>
            <Link to="/doctrine" className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 border border-accent text-accent font-mono text-sm hover:bg-accent hover:text-background transition-colors rounded-md">
              Review Core Doctrine
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background/50 hover:border-secondary transition-colors">
              <Shield className="text-secondary mb-4" />
              <h3 className="text-lg font-mono font-bold text-primary mb-2">Foundations</h3>
              <p className="text-sm text-secondary">The asymmetric HUMINT network and non-kinetic warfare doctrine.</p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-background/50 hover:border-secondary transition-colors">
              <Target className="text-secondary mb-4" />
              <h3 className="text-lg font-mono font-bold text-primary mb-2">Attack Cycle</h3>
              <p className="text-sm text-secondary">Exploitation cascade, psychological weaponization, systemic co-option.</p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-background/50 hover:border-secondary transition-colors">
              <Lock className="text-secondary mb-4" />
              <h3 className="text-lg font-mono font-bold text-primary mb-2">Defense</h3>
              <p className="text-sm text-secondary">Counter-offensive doctrine, psychological hardening, response control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Context Link */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-mono font-bold text-primary mb-4">For Those Who Want to Understand the Source Code</h2>
        <p className="text-secondary max-w-2xl mx-auto mb-8">
          A forensic analysis mapping core doctrines, formative traumas, and relational archetypes—the psychological blueprint that generated this entire teaching framework.
        </p>
        <Link to="/source-code" className="text-accent border-b border-accent hover:text-highlight transition-colors font-mono">
          View Forensic Mind Map &rarr;
        </Link>
      </section>
    </div>
  );
};

export default Landing;