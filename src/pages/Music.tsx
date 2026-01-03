import React, { useState } from 'react';
import { TRACKS } from '../constants';
import StatusBadge from '../components/StatusBadge';
import { Play, Pause, SkipForward, Volume2, Info, Share2 } from 'lucide-react';

const Music: React.FC = () => {
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = (id: string) => {
    if (activeTrackId === id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrackId(id);
      setIsPlaying(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="mb-16 border-b border-border pb-12">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-primary">Embodied Mastery</h1>
          <StatusBadge status="in-development" />
        </div>
        <p className="text-xl text-secondary font-light mb-8">Performance as Proof-of-Concept</p>
        
        <p className="text-secondary max-w-3xl leading-relaxed">
          Music is proof. Someone can study pattern recognition and understand cognitive mechanics, 
          but embodied confidence only comes through demonstration. This catalog proves the techniques work when internalized.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Track List */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-mono font-bold text-primary mb-6">Catalog</h2>
          {TRACKS.map((track) => (
            <div 
              key={track.id} 
              className={`border rounded-lg p-6 transition-all duration-300 ${
                activeTrackId === track.id 
                  ? 'bg-surface border-accent shadow-[0_0_10px_rgba(205,127,50,0.1)]' 
                  : 'bg-background border-border hover:border-secondary'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => handlePlayToggle(track.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      activeTrackId === track.id && isPlaying
                        ? 'bg-accent text-background'
                        : 'bg-border text-primary hover:bg-secondary/20'
                    }`}
                  >
                    {activeTrackId === track.id && isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
                  </button>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{track.title}</h3>
                    <span className="text-xs font-mono text-secondary">{track.duration}</span>
                  </div>
                </div>
                {track.isFeatured && (
                  <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-mono rounded uppercase">Featured</span>
                )}
              </div>

              <p className="text-secondary/90 text-sm mb-4 leading-relaxed pl-16">
                {track.description}
              </p>

              <div className="pl-16">
                <h4 className="text-xs font-mono text-accent uppercase mb-2 flex items-center gap-2">
                  <Info size={12} />
                  Technical Annotation
                </h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {track.technicalAnnotation.map((note, idx) => (
                    <li key={idx} className="text-xs text-secondary/60 border-l border-border pl-2">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Player Sidebar / Visualizer Placeholder */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-surface border border-border rounded-lg p-6">
            <h3 className="text-sm font-mono text-secondary uppercase mb-6 text-center">Now Playing</h3>
            
            <div className="aspect-square bg-background rounded-lg mb-6 flex items-center justify-center border border-border relative overflow-hidden group">
               {/* Visualizer bars simulation */}
               <div className="flex items-end justify-center gap-1 h-1/2 w-3/4">
                 {[...Array(12)].map((_, i) => (
                   <div 
                     key={i} 
                     className={`w-2 bg-accent/60 rounded-t-sm transition-all duration-100 ${
                       isPlaying && activeTrackId ? 'animate-pulse' : 'h-2'
                     }`}
                     style={{ 
                       height: isPlaying && activeTrackId ? `${Math.random() * 80 + 20}%` : '10%',
                       animationDuration: `${Math.random() * 0.5 + 0.2}s`
                     }}
                   ></div>
                 ))}
               </div>
               {!activeTrackId && <span className="absolute text-secondary/30 font-mono text-xs">Select a track</span>}
            </div>

            <div className="space-y-2 mb-6">
              <h4 className="text-lg font-bold text-primary text-center truncate">
                {activeTrackId ? TRACKS.find(t => t.id === activeTrackId)?.title : 'Waiting for Input...'}
              </h4>
              <p className="text-xs text-secondary text-center font-mono">
                {activeTrackId ? 'Module 3: Embodied Mastery' : 'System Idle'}
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <button className="p-2 text-secondary hover:text-primary"><Share2 size={18} /></button>
              <button className="p-2 text-secondary hover:text-primary"><SkipForward size={18} /></button>
              <button className="p-2 text-secondary hover:text-primary"><Volume2 size={18} /></button>
            </div>

            <div className="w-full bg-border h-1 rounded-full overflow-hidden">
               <div className={`h-full bg-accent transition-all duration-1000 ${isPlaying ? 'w-1/3' : 'w-0'}`}></div>
            </div>
            <div className="flex justify-between text-xs font-mono text-secondary mt-2">
              <span>{isPlaying ? '1:12' : '0:00'}</span>
              <span>{activeTrackId ? TRACKS.find(t => t.id === activeTrackId)?.duration : '--:--'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;