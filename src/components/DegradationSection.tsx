import React, { useState } from 'react';
import { Wifi, WifiOff, AlertTriangle, ShieldCheck, Cpu, RefreshCw, Layers } from 'lucide-react';
import { DegradationState } from '../types';

export const DegradationSection: React.FC = () => {
  const [state, setState] = useState<DegradationState>('OPTIMAL');

  const modes = [
    {
      id: 'OPTIMAL' as DegradationState,
      title: 'OPTIMAL STATE',
      sub: 'CLOUD CONNECTED // FULL MACRO OPTIMIZATION',
      badge: 'GLOBAL RL ACTIVE',
      badgeColor: 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10',
      networkStatus: 'Fibre + 5G Active (14ms RTT)',
      edgeStatus: 'Local Tier-1 + Tier-2 operational; receiving global multi-intersection green waves',
      cloudStatus: 'Active multi-agent reinforcement learning; 5-corridor lookahead scheduling',
      safetyGuarantee: 'Bounded overrides valid for up to 60 seconds with strict pedestrian envelope',
      diagramColor: '#10b981',
    },
    {
      id: 'DEGRADED' as DegradationState,
      title: 'DEGRADED STATE',
      sub: 'HIGH LATENCY // INTERMITTENT BACKHAUL LINK',
      badge: 'PEER MESH FALLBACK',
      badgeColor: 'border-amber-500/50 text-amber-400 bg-amber-500/10',
      networkStatus: 'Packet drop > 35%, Latency > 1800ms (Fibre cut, failover 4G cell congested)',
      edgeStatus: 'Node ignores delayed cloud directives; activates sub-GHz peer-to-peer adjacent mesh',
      cloudStatus: 'Corridor recommendations flagged as STALE; edge automatically demotes cloud authority',
      safetyGuarantee: 'Autonomous local cycle length adjustment; adjacent intersections synchronize via radio',
      diagramColor: '#f59e0b',
    },
    {
      id: 'AUTONOMOUS' as DegradationState,
      title: 'AUTONOMOUS STATE',
      sub: 'CLOUD UNAVAILABLE // 100% ISOLATED LOCAL SURVIVAL',
      badge: 'ISOLATED WEBSTER CONTROL',
      badgeColor: 'border-[#F4511E] text-[#F4511E] bg-[#F4511E]/10',
      networkStatus: 'Zero connectivity (Complete blackout / severed backhaul lines)',
      edgeStatus: 'Node Box assumes absolute intersection authority; actuates signals via local camera feeds',
      cloudStatus: 'OFFLINE / UNREACHABLE — Zero control impact on physical intersection',
      safetyGuarantee: 'Hardware mechanical interlock prevents conflict greens; emergency vehicles preempt locally via optical siren detection',
      diagramColor: '#F4511E',
    },
  ];

  const currentMode = modes.find((m) => m.id === state)!;

  return (
    <section id="degradation" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">11</span>
            <span>//</span>
            <span>FAIL-SAFE GRACEFUL DEGRADATION</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            zero dependence on uninterrupted internet
          </div>
          <div className="hidden sm:block text-[11px]">
            FAIL-SAFE LEVEL 4 AUTONOMY
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-12">
          <h2 className="font-display text-[52px] sm:text-[76px] md:text-[96px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter">
            WHEN THE CLOUD
            <br />
            GOES DARK,
            <br />
            <span className="text-[#F4511E]">THE CITY DOESN'T.</span>
          </h2>
          <p className="mt-4 text-[#8A8A8A] max-w-2xl text-base sm:text-lg">
            A traffic system that halts when Amazon AWS or cellular networks hiccup is a public hazard. 
            Project-K is strictly architected for bounded autonomy: if connectivity collapses entirely, every intersection gracefully degrades to sovereign local operation without missing a phase.
          </p>
        </div>

        {/* State Interactive Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {modes.map((mode) => {
            const isSelected = state === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setState(mode.id)}
                className={`p-5 text-left border transition-all duration-200 relative font-mono ${
                  isSelected
                    ? 'border-[#F4511E] bg-[#0c0806] shadow-[0_0_15px_rgba(244,81,30,0.15)]'
                    : 'border-white/10 bg-[#080808] hover:border-white/30'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#F4511E]" />
                )}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className={`px-2 py-0.5 border text-[10px] ${mode.badgeColor}`}>
                    {mode.badge}
                  </span>
                  {mode.id === 'OPTIMAL' ? (
                    <Wifi className="w-4 h-4 text-emerald-400" />
                  ) : mode.id === 'DEGRADED' ? (
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  ) : (
                    <WifiOff className="w-4 h-4 text-[#F4511E]" />
                  )}
                </div>

                <div className="font-display text-2xl font-black text-white mt-2">
                  {mode.title}
                </div>
                <div className="text-[11px] text-[#8A8A8A] mt-1 font-sans">
                  {mode.sub}
                </div>
              </button>
            );
          })}
        </div>

        {/* State Dynamic Transition Visualization Panel */}
        <div className="border border-white/20 bg-[#080808] p-6 sm:p-8 crosshair-corner">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Vector Schematic of Topology for Current State */}
            <div className="lg:col-span-6 bg-black/80 border border-white/10 p-6 flex flex-col items-center justify-center relative min-h-[300px]">
              <div className="absolute top-3 left-3 text-[10px] font-mono text-[#8A8A8A]">
                ACTIVE DATA TOPOLOGY // {state}
              </div>

              {/* Dynamic SVG link diagram */}
              <svg viewBox="0 0 400 240" className="w-full h-56" fill="none">
                {/* Cloud Node */}
                <rect x="150" y="20" width="100" height="40" rx="2" fill="#0d1117" stroke={state === 'AUTONOMOUS' ? '#ef4444' : '#3b82f6'} strokeWidth="1.5" />
                <text x="200" y="45" fill={state === 'AUTONOMOUS' ? '#ef4444' : '#fff'} fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  {state === 'AUTONOMOUS' ? 'CLOUD SEVERED' : 'CLOUD PLANE'}
                </text>

                {/* Connection link */}
                <line
                  x1="200"
                  y1="60"
                  x2="200"
                  y2="140"
                  stroke={state === 'OPTIMAL' ? '#10b981' : state === 'DEGRADED' ? '#f59e0b' : '#ef4444'}
                  strokeWidth={state === 'AUTONOMOUS' ? 1 : 2}
                  strokeDasharray={state === 'AUTONOMOUS' ? '4 4' : 'none'}
                />

                {state === 'AUTONOMOUS' && (
                  <g>
                    <line x1="190" y1="90" x2="210" y2="110" stroke="#ef4444" strokeWidth="2" />
                    <line x1="210" y1="90" x2="190" y2="110" stroke="#ef4444" strokeWidth="2" />
                    <text x="220" y="105" fill="#ef4444" fontSize="9" fontFamily="monospace">LINK TERMINATED</text>
                  </g>
                )}

                {/* Edge Node */}
                <rect x="140" y="140" width="120" height="60" rx="2" fill="#140a06" stroke="#F4511E" strokeWidth="2" />
                <text x="200" y="165" fill="#F4511E" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="black">
                  NODE BOX
                </text>
                <text x="200" y="185" fill="#fff" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  LOCAL ACTUATOR
                </text>

                {/* Local Signal Controller */}
                <line x1="200" y1="200" x2="200" y2="230" stroke="#10b981" strokeWidth="2" />
                <circle cx="200" cy="230" r="5" fill="#10b981" />
                <text x="200" y="240" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">
                  PHYSICAL TRAFFIC LIGHTS
                </text>

                {/* Sub-GHz Peer links in Degraded Mode */}
                {state === 'DEGRADED' && (
                  <g stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3">
                    <line x1="140" y1="170" x2="50" y2="170" />
                    <line x1="260" y1="170" x2="350" y2="170" />
                    <text x="70" y="160" fill="#f59e0b" fontSize="8" fontFamily="monospace">PEER 5.9GHz</text>
                    <text x="310" y="160" fill="#f59e0b" fontSize="8" fontFamily="monospace">PEER 5.9GHz</text>
                  </g>
                )}
              </svg>

              <div className="text-[10px] font-mono text-[#8A8A8A] text-center mt-2">
                RECOVERY ACTION: AUTOMATIC ZERO-TOUCH RESTORATION ONCE FIBRE RECONNECTS
              </div>
            </div>

            {/* Right Detailed Operational Matrix */}
            <div className="lg:col-span-6 font-mono text-xs space-y-4">
              <div className="p-4 border border-white/10 bg-black/40">
                <div className="text-[10px] text-[#8A8A8A] uppercase">NETWORK TRANSPORT STATUS</div>
                <div className="text-white font-bold text-sm mt-1">{currentMode.networkStatus}</div>
              </div>

              <div className="p-4 border border-white/10 bg-black/40">
                <div className="text-[10px] text-[#8A8A8A] uppercase">LOCAL INTERSECTION BEHAVIOR</div>
                <div className="text-[#F3F3F0] font-sans mt-1 text-xs sm:text-sm leading-relaxed">
                  {currentMode.edgeStatus}
                </div>
              </div>

              <div className="p-4 border border-[#F4511E]/40 bg-[#F4511E]/5">
                <div className="text-[10px] text-[#F4511E] uppercase font-bold">SAFETY GUARANTEE CONTRACT</div>
                <div className="text-white font-sans mt-1 text-xs sm:text-sm leading-relaxed">
                  {currentMode.safetyGuarantee}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
