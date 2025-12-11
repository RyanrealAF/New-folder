import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Target, Lock, ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';

const DOCTRINE_CONTENT: Record<string, {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  content: React.ReactNode;
  status: 'complete' | 'in-development';
}> = {
  foundations: {
    title: 'Foundations',
    subtitle: 'The Asymmetric HUMINT Network',
    icon: Shield,
    status: 'complete',
    content: (
      <div className="space-y-6 text-primary/90 leading-relaxed">
        <p>
          The core threat model is not a single bad actor, but an <strong>Asymmetric HUMINT (Human Intelligence) Network</strong>. 
          Standard conflict resolution fails because it assumes a dyadic (1-on-1) conflict. In reality, the target is engaged 
          in a polyadic conflict where the "Orchestrator" has deputized a network of proxies who are often unaware of their role.
        </p>
        <h3 className="text-xl font-bold font-mono text-accent mt-8 mb-4">The Trust Proxy</h3>
        <p>
          The network utilizes "Trust Proxies"—individuals the target loves or respects—to deliver payloads. 
          Because the target's firewall is down for these individuals, the psychological payload (doubt, shame, confusion) 
          bypasses critical analysis.
        </p>
        <div className="bg-surface border-l-4 border-accent p-6 my-8 rounded-r-lg">
          <p className="font-mono text-sm text-secondary italic">
            "They utilize your own morality as a weapon against you. Your desire to be 'fair' is the vulnerability they exploit 
            to introduce false equivalencies."
          </p>
        </div>
        <p>
          <strong>Defense Implication:</strong> You must decouple the message from the messenger. Analyze data packets 
          (words/actions) based on their content, not the source's historic reliability.
        </p>
      </div>
    )
  },
  attack: {
    title: 'Attack Cycle',
    subtitle: 'The Exploitation Cascade',
    icon: Target,
    status: 'complete',
    content: (
      <div className="space-y-6 text-primary/90 leading-relaxed">
        <p>
          Attacks are not random; they follow a cyclical "Exploitation Cascade" designed to harvest emotional output (supply) 
          or social capital (reputation).
        </p>
        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="bg-background p-4 rounded border border-border">
            <span className="text-accent font-mono font-bold text-xl block mb-2">01. Provocation</span>
            <p className="text-sm text-secondary">Subtle boundary violation designed to trigger a visible reaction.</p>
          </div>
          <div className="bg-background p-4 rounded border border-border">
            <span className="text-accent font-mono font-bold text-xl block mb-2">02. Capture</span>
            <p className="text-sm text-secondary">The target's reaction is documented (recorded/witnessed) while the context is omitted.</p>
          </div>
          <div className="bg-background p-4 rounded border border-border">
            <span className="text-accent font-mono font-bold text-xl block mb-2">03. Broadcast</span>
            <p className="text-sm text-secondary">The "evidence" of the target's instability is distributed to the network.</p>
          </div>
        </div>
        <p>
          <strong>The Double Bind:</strong> If you react, you are crazy. If you don't react, you are submissive. 
          The only winning move is to exit the game board entirely (see Defense).
        </p>
      </div>
    )
  },
  defense: {
    title: 'Defense',
    subtitle: 'Counter-Offensive Protocols',
    icon: Lock,
    status: 'in-development',
    content: (
      <div className="space-y-6 text-primary/90 leading-relaxed">
        <p>
          Defensive doctrine is built on <strong>Radical Autonomy</strong> and <strong>Response Control</strong>. 
          The goal is not to win the argument, but to starve the opponent of the engagement they require to function.
        </p>
        <h3 className="text-xl font-bold font-mono text-accent mt-8 mb-4">Technique: The Grey Rock</h3>
        <p>
          Often misunderstood as passivity, Grey Rock is actually an aggressive withholding of validation. 
          It involves becoming uninteresting, unreactive, and textured like a stone—offering no emotional "hooks" 
          for the manipulator to grab.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-secondary marker:text-accent">
          <li>Stick to facts and logistics.</li>
          <li>Remove all emotional adjectives from speech.</li>
          <li>Use non-committal answers ("I see," "Okay").</li>
          <li>Maintain a flat affect (Poker Face).</li>
        </ul>
        <div className="mt-8 p-4 bg-accent/10 rounded border border-accent/20">
          <p className="text-sm text-accent font-mono">
            <strong>System Note:</strong> Full defensive protocols are currently being codified into the "Music" module 
            as rhythmic exercises.
          </p>
        </div>
      </div>
    )
  }
};

const Doctrine: React.FC = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  // Determine if we are on a sub-page (e.g. /doctrine/foundations)
  const currentKey = pathParts.length > 2 && pathParts[1] === 'doctrine' ? pathParts[2] : null;
  const activeModule = currentKey ? DOCTRINE_CONTENT[currentKey] : null;

  // Detail View
  if (activeModule) {
    const Icon = activeModule.icon;
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
        <Link to="/doctrine" className="inline-flex items-center text-secondary hover:text-accent transition-colors mb-8 font-mono text-sm">
          <ArrowLeft size={16} className="mr-2" />
          Return to Doctrine Hub
        </Link>
        
        <div className="border-b border-border pb-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-surface rounded-lg border border-border">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-mono font-bold text-primary">{activeModule.title}</h1>
              <p className="text-secondary font-mono text-sm uppercase tracking-wider mt-1">{activeModule.subtitle}</p>
            </div>
          </div>
          <StatusBadge status={activeModule.status} />
        </div>

        <div className="prose prose-invert prose-headings:font-mono prose-p:font-sans max-w-none">
          {activeModule.content}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <span className="text-secondary/50 text-xs font-mono">RyanrealAF Doctrine v1.0</span>
          <div className="flex gap-4">
             <Link to="/seuss-to-cypher" className="text-accent text-sm font-mono hover:text-highlight transition-colors flex items-center">
               <BookOpen size={16} className="mr-2" />
               View Technical Analysis
             </Link>
          </div>
        </div>
      </div>
    );
  }

  // Hub View
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="mb-12 border-b border-border pb-8">
        <h1 className="text-4xl font-mono font-bold text-primary mb-4">Core Doctrine</h1>
        <p className="text-xl text-secondary font-light">The Theoretical Framework of Cognitive Defense</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Foundations */}
        <Link to="/doctrine/foundations" className="group">
          <div className="h-full bg-surface border border-border p-8 rounded-lg transition-all hover:border-accent hover:translate-y-[-2px]">
            <Shield className="w-10 h-10 text-secondary mb-6 group-hover:text-accent transition-colors" />
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-mono font-bold text-primary">Foundations</h2>
              <StatusBadge status="complete" />
            </div>
            <p className="text-secondary text-sm leading-relaxed mb-6">
              Understanding the Asymmetric HUMINT network. How trust is weaponized and why standard logic fails against coordinated fabrication.
            </p>
            <div className="flex items-center text-xs font-mono text-accent uppercase tracking-wider">
              Access Module <ChevronRight size={14} className="ml-1" />
            </div>
          </div>
        </Link>

        {/* Attack Cycle */}
        <Link to="/doctrine/attack" className="group">
          <div className="h-full bg-surface border border-border p-8 rounded-lg transition-all hover:border-accent hover:translate-y-[-2px]">
            <Target className="w-10 h-10 text-secondary mb-6 group-hover:text-accent transition-colors" />
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-mono font-bold text-primary">Attack Cycle</h2>
              <StatusBadge status="complete" />
            </div>
            <p className="text-secondary text-sm leading-relaxed mb-6">
              The anatomy of the "Exploitation Cascade". From initial provocation to reaction capture and reputational liquidity.
            </p>
            <div className="flex items-center text-xs font-mono text-accent uppercase tracking-wider">
              Access Module <ChevronRight size={14} className="ml-1" />
            </div>
          </div>
        </Link>

        {/* Defense */}
        <Link to="/doctrine/defense" className="group">
          <div className="h-full bg-surface border border-border p-8 rounded-lg transition-all hover:border-accent hover:translate-y-[-2px]">
            <Lock className="w-10 h-10 text-secondary mb-6 group-hover:text-accent transition-colors" />
             <div className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-mono font-bold text-primary">Defense</h2>
              <StatusBadge status="in-development" />
            </div>
            <p className="text-secondary text-sm leading-relaxed mb-6">
              Counter-offensive protocols. Response control, Gray Rock polyrhythms, and the art of becoming an uncooperative target.
            </p>
            <div className="flex items-center text-xs font-mono text-accent uppercase tracking-wider">
              Access Module <ChevronRight size={14} className="ml-1" />
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-16 p-8 bg-surface/30 border border-dashed border-border rounded-lg text-center">
        <p className="text-secondary font-mono text-sm">
          Full doctrinal texts are currently being digitized from the source notebooks. <br/>
          Select sections are available within the "Seuss to Cypher" module.
        </p>
      </div>
    </div>
  );
};

export default Doctrine;