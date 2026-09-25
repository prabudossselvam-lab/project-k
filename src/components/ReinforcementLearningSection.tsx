import React, { useState, useEffect } from 'react';
import { Network, Activity, Cpu, ArrowLeftRight, TrendingUp, Sliders } from 'lucide-react';

export const ReinforcementLearningSection: React.FC = () => {
  const [activeZone, setActiveZone] = useState<'A' | 'B' | 'C'>('B');
  const [pulseTick, setPulseTick] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 100);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const zones = {
    A: {
      id: 'ZONE_A',
      name: 'ZONE A // COMMERCIAL NORTH',
      intersections: 18,
      agentPolicy: 'Q-MIX DISTRIBUTED AGENT',
      throughput: '1,420 veh/hr',
      avgQueue: '38m',
      rewardScore: '+0.88',
      focus: 'High pedestrian density, staggered bus transit preemption',
    },
    B: {
      id: 'ZONE_B',
      name: 'ZONE B // CENTRAL ARTERIAL CORRIDOR',
      intersections: 24,
      agentPolicy: 'MULTI-AGENT PPO + MARL',
      throughput: '2,890 veh/hr',
      avgQueue: '24m',
      rewardScore: '+0.94',
      focus: 'Emergency corridor priority, cross-arterial queue spillback containment',
    },
    C: {
      id: 'ZONE_C',
      name: 'ZONE C // RESIDENTIAL / HOSPITAL SECTOR',
      intersections: 14,
      agentPolicy: 'GRAPH NEURAL VALUE AGENT',
      throughput: '980 veh/hr',
      avgQueue: '12m',
      rewardScore: '+0.91',
      focus: 'Hospital approach inbound corridor preservation, residential speed stabilization',
    },
  };

  const currentZoneData = zones[activeZone];

  const optimizationVectors = [
    { title: 'WAIT TIME', desc: 'Minimizing cumulative vehicular delay across cross-traffic movements without starvation.', weight: '28%' },
    { title: 'QUEUE LENGTH', desc: 'Preventing spatial queue spillback that deadlocks upstream intersections.', weight: '24%' },
    { title: 'THROUGHPUT', desc: 'Maximizing green-band efficiency and vehicles cleared per phase cycle.', weight: '20%' },
    { title: 'EMERGENCY PROGRESS', desc: 'Absolute priority escalation when verified siren strobe packet arrives.', weight: '18%' },
    { title: 'BOUNDARY CONGESTION', desc: 'Negotiating flow with adjacent perimeter zones to prevent boundary oscillations.', weight: '10%' },
  ];

  return (
    <section id="reinforcement-learning" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">07</span>
            <span>//</span>
            <span>MULTI-AGENT REINFORCEMENT LEARNING</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            decentralized cooperative game theory
          </div>
          <div className="hidden sm:block text-[11px]">
            POLICY COORDINATION: ZONE A ↔ ZONE B ↔ ZONE C
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-12">
          <h2 className="font-display text-[52px] sm:text-[76px] md:text-[96px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter">
            ONE CITY.
            <br />
            <span className="text-[#F4511E]">MANY DECISIONS.</span>
          </h2>
          <p className="mt-4 text-[#8A8A8A] max-w-2xl text-base sm:text-lg">
            A single central brain cannot micromanage tens of thousands of dynamic signal phases across an entire metropolis without latency collapse. 
            Project-K partitions the city into cooperative AI zones that continuously negotiate throughput and queue boundaries.
          </p>
        </div>

        {/* Network Diagram Simulation Canvas */}
        <div className="border border-white/20 bg-[#080808] p-6 crosshair-corner mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-[#8A8A8A] pb-3 border-b border-white/10 mb-4">
            <span className="flex items-center gap-2">
              <Network className="w-4 h-4 text-[#F4511E]" />
              INTER-ZONE MARL COORDINATION TOPOLOGY
            </span>
            <span className="text-[#F4511E]">POLICY TICK: {pulseTick}ms</span>
          </div>

          <div className="relative h-64 sm:h-80 w-full bg-black/80 border border-white/10 overflow-hidden flex items-center justify-center">
            {/* SVG Network Graph */}
            <svg viewBox="0 0 800 300" className="w-full h-full" fill="none">
              {/* Interconnecting policy value conduits */}
              <line x1="200" y1="150" x2="400" y2="150" stroke="#F4511E" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="400" y1="150" x2="600" y2="150" stroke="#F4511E" strokeWidth="2" strokeDasharray="4 4" />

              {/* Data packet pulses between zones */}
              {(() => {
                const p1 = (pulseTick % 100) / 100;
                const x1 = 200 + p1 * 200;
                const x2 = 400 + p1 * 200;
                return (
                  <g>
                    <circle cx={x1} cy="150" r="4" fill="#F4511E" />
                    <circle cx={x2} cy="150" r="4" fill="#F4511E" />
                  </g>
                );
              })()}

              {/* Zone A Cluster */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveZone('A')}
              >
                <circle cx="200" cy="150" r="55" fill="#0d1117" stroke={activeZone === 'A' ? '#F4511E' : '#333'} strokeWidth={activeZone === 'A' ? 2 : 1} />
                <circle cx="200" cy="150" r="45" stroke="#222" strokeWidth="1" strokeDasharray="2 2" />
                <text x="200" y="145" fill="#fff" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">ZONE A</text>
                <text x="200" y="162" fill="#888" fontSize="9" fontFamily="monospace" textAnchor="middle">18 NODES</text>
              </g>

              {/* Zone B Cluster (Center) */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveZone('B')}
              >
                <circle cx="400" cy="150" r="70" fill="#140a06" stroke={activeZone === 'B' ? '#F4511E' : '#444'} strokeWidth={activeZone === 'B' ? 3 : 1} />
                <circle cx="400" cy="150" r="58" stroke="#F4511E" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <text x="400" y="145" fill="#F4511E" fontSize="15" fontFamily="monospace" fontWeight="black" textAnchor="middle">ZONE B</text>
                <text x="400" y="165" fill="#fff" fontSize="10" fontFamily="monospace" textAnchor="middle">24 NODES (CENTRAL)</text>
              </g>

              {/* Zone C Cluster */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveZone('C')}
              >
                <circle cx="600" cy="150" r="55" fill="#0d1117" stroke={activeZone === 'C' ? '#F4511E' : '#333'} strokeWidth={activeZone === 'C' ? 2 : 1} />
                <circle cx="600" cy="150" r="45" stroke="#222" strokeWidth="1" strokeDasharray="2 2" />
                <text x="600" y="145" fill="#fff" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">ZONE C</text>
                <text x="600" y="162" fill="#888" fontSize="9" fontFamily="monospace" textAnchor="middle">14 NODES</text>
              </g>

              {/* Interaction annotations */}
              <text x="300" y="130" fill="#8A8A8A" fontSize="9" fontFamily="monospace" textAnchor="middle">
                BOUNDARY QUEUE HANDSHAKE
              </text>
              <text x="500" y="130" fill="#8A8A8A" fontSize="9" fontFamily="monospace" textAnchor="middle">
                EMERGENCY PRIORITY FORWARD
              </text>
            </svg>

            {/* Zone Switcher Controls */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2 font-mono text-xs">
              {(['A', 'B', 'C'] as const).map((z) => (
                <button
                  key={z}
                  onClick={() => setActiveZone(z)}
                  className={`px-3 py-1 border transition-colors ${
                    activeZone === z
                      ? 'bg-[#F4511E] text-black font-bold border-[#F4511E]'
                      : 'bg-black/80 text-[#8A8A8A] border-white/10 hover:border-white/30'
                  }`}
                >
                  INSPECT ZONE {z}
                </button>
              ))}
            </div>
          </div>

          {/* Active Zone Telemetry Output */}
          <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div>
              <div className="text-[10px] text-[#8A8A8A]">SELECTED ZONE</div>
              <div className="text-white font-bold mt-0.5">{currentZoneData.name}</div>
            </div>
            <div>
              <div className="text-[10px] text-[#8A8A8A]">REINFORCEMENT ALGORITHM</div>
              <div className="text-[#F4511E] font-bold mt-0.5">{currentZoneData.agentPolicy}</div>
            </div>
            <div>
              <div className="text-[10px] text-[#8A8A8A]">THROUGHPUT CAPACITY</div>
              <div className="text-white font-bold mt-0.5">{currentZoneData.throughput}</div>
            </div>
            <div>
              <div className="text-[10px] text-[#8A8A8A]">POLICY REWARD SCORE</div>
              <div className="text-emerald-400 font-bold mt-0.5">{currentZoneData.rewardScore}</div>
            </div>
          </div>
        </div>

        {/* 5 Optimization Vectors Poster Grid */}
        <div className="border border-white/15 bg-[#080808] p-6 crosshair-corner">
          <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-wider mb-4">
            MARL REWARD FUNCTION OPTIMIZATION VECTORS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs">
            {optimizationVectors.map((v) => (
              <div key={v.title} className="p-4 border border-white/10 bg-black/40 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-[#F4511E]">{v.weight} REWARD WEIGHT</div>
                  <div className="font-bold text-white text-sm mt-1">{v.title}</div>
                  <p className="text-[11px] text-[#8A8A8A] mt-2 font-sans leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
