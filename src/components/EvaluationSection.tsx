import React from 'react';
import { CheckCircle2, Clock, AlertCircle, ShieldAlert, ArrowRight, FileCheck2 } from 'lucide-react';

export const EvaluationSection: React.FC = () => {
  const roadmapStages = [
    {
      phase: 'STAGE 01',
      title: 'MICRO-SIMULATION',
      status: 'BENCHMARKED',
      statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/5',
      desc: 'Synthetic validation across 12,000 randomized traffic scenarios using SUMO (Simulation of Urban MObility) and CARLA. Calibrated for dense Indian junction geometry.',
      target: 'Simulated 41.2% reduction in emergency travel time under saturated queue conditions.',
    },
    {
      phase: 'STAGE 02',
      title: 'HISTORICAL DATA REPLAY',
      status: 'COMPLETED IN LAB',
      statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/5',
      desc: 'Evaluating edge Tier-1 & Tier-2 neural models on 1,400 hours of archived municipal CCTV footage containing verified traffic collisions, heavy rains, and night glare.',
      target: 'Lab benchmark: 94.6% collision recall with < 0.8% false positive trigger rate.',
    },
    {
      phase: 'STAGE 03',
      title: 'SHADOW MODE DEPLOYMENT',
      status: 'PROPOSED PROTOCOL',
      statusColor: 'text-amber-400 border-amber-500/40 bg-amber-500/5',
      desc: 'Passive installation of Node Box on 4 live intersections without signal actuation. System predicts queue states and logs preemption opportunities in parallel with legacy timers.',
      target: 'Verify zero interference with legacy municipal controller firmware.',
    },
    {
      phase: 'STAGE 04',
      title: 'CONTROLLED PILOT CORRIDOR',
      status: 'DESIGN SPECIFICATION',
      statusColor: 'text-[#F4511E] border-[#F4511E]/40 bg-[#F4511E]/5',
      desc: 'Designated 2.4km test corridor with dedicated emergency response vehicles in coordination with municipal traffic police and EMS command.',
      target: 'Measure real-world queue drainage velocity and sub-120ms preemption latching.',
    },
    {
      phase: 'STAGE 05',
      title: 'MULTI-SECTOR FIELD VALIDATION',
      status: 'FUTURE OBJECTIVE',
      statusColor: 'text-zinc-400 border-white/20 bg-white/5',
      desc: 'Full multi-zone deployment across 32 signalized intersections with live hospital dispatch integration and multi-agent cloud optimization.',
      target: 'Target: Documented statistical reduction in urban cardiac / trauma transit mortality.',
    },
  ];

  return (
    <section id="evaluation" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">13</span>
            <span>//</span>
            <span>SCIENTIFIC HONESTY & EVALUATION PROTOCOL</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            design targets vs empirical validation
          </div>
          <div className="hidden sm:block text-[11px]">
            PROTOCOL: SIMULATION → SHADOW → PILOT → FIELD
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-10">
          <h2 className="font-display text-[52px] sm:text-[76px] md:text-[96px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter">
            DESIGNED TO BE
            <br />
            <span className="text-[#F4511E]">TESTED.</span>
          </h2>
          <p className="mt-4 text-[#8A8A8A] max-w-2xl text-base sm:text-lg">
            Engineering credibility requires scientific rigor. 
            Project-K is currently a comprehensive system design, edge-software architecture, and empirical evaluation protocol. 
            All performance figures represent benchmark targets calculated through simulation and lab datasets, awaiting staged municipal field validation.
          </p>
        </div>

        {/* Explicit Scientific Disclaimer Banner */}
        <div className="border-2 border-[#F4511E] bg-[#0c0806] p-4 sm:p-6 mb-12 crosshair-corner">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#F4511E] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono font-bold text-[#F4511E] tracking-wider uppercase">
                RESEARCH ARCHITECTURE & SYSTEM DESIGN DISCLOSURE
              </div>
              <p className="mt-1 text-sm text-[#F3F3F0]/90 font-sans leading-relaxed">
                Project-K does NOT claim unverified real-world miracle statistics. 
                Urban traffic actuation directly impacts public safety and lives. 
                Our published roadmap outlines an exhaustive 5-stage verification methodology designed to guarantee fail-safe operation before any physical signal relay is ever granted live override control.
              </p>
            </div>
          </div>
        </div>

        {/* 5-Stage Protocol Visual Roadmap */}
        <div className="border border-white/15 bg-[#080808] p-6 sm:p-8 crosshair-corner">
          <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-wider mb-6">
            EVALUATION & VALIDATION PIPELINE
          </div>

          <div className="space-y-4 font-mono">
            {roadmapStages.map((stage, idx) => (
              <div
                key={stage.phase}
                className="p-4 border border-white/10 bg-black/40 hover:border-white/20 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[#F4511E] font-bold text-xs">{stage.phase}</span>
                    <span className="text-base font-bold text-white">{stage.title}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 border ${stage.statusColor}`}>
                    {stage.status}
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs font-sans">
                  <div className="lg:col-span-8 text-[#8A8A8A] leading-relaxed">
                    {stage.desc}
                  </div>
                  <div className="lg:col-span-4 p-2 border border-white/5 bg-white/[0.02] text-[#F3F3F0] font-mono text-[11px] flex items-center">
                    <span className="text-[#F4511E] font-bold mr-2">TARGET:</span>
                    <span>{stage.target}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
