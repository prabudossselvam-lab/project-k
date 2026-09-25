import React, { useState } from 'react';
import { Cpu, Cloud, ShieldAlert, CheckCircle, ArrowRight, Activity, Terminal } from 'lucide-react';
import { SystemPlane } from '../types';

export const SystemArchitecture: React.FC = () => {
  const [activePlane, setActivePlane] = useState<SystemPlane>('edge');

  const planes = [
    {
      id: 'edge' as SystemPlane,
      num: '01',
      title: 'EDGE DECISION AUTHORITY',
      headline: 'LOCAL AUTONOMY AT THE POLE',
      tagline: 'CCTV → Node Box → AI → Signal Controller',
      badge: 'LATENCY &lt; 80MS',
      flow: [
        { label: 'CCTV FEED', sub: '1080p RTSP / GigE' },
        { label: 'NODE BOX', sub: 'ARM SoC + NPU' },
        { label: 'LOCAL AI', sub: 'Tier-1 + Tier-2 Models' },
        { label: 'SIGNAL CONTROLLER', sub: 'NEMA TS2 / 2070 Interface' },
      ],
      responsibilities: [
        'Accident detection & kinematic anomaly identification',
        'Real-time vehicle detection & classification (2-wheelers, cars, buses)',
        'Queue-length estimation & dynamic clearance timing',
        'Optical emergency vehicle strobe/siren identification',
        'Immediate local preemption with green-wave initiation',
        'Pothole, debris, and waterlogging hazard tagging',
      ],
      safetyRule: 'Autonomous execution: Works unconditionally even if backhaul fibre is cut.',
    },
    {
      id: 'cloud' as SystemPlane,
      num: '02',
      title: 'CLOUD INTELLIGENCE',
      headline: 'GLOBAL CORRIDOR STRATEGY',
      tagline: 'Node Metadata → Cloud → Multi-Agent RL → Corridor Plan',
      badge: 'MACRO REASONING',
      flow: [
        { label: 'NODE METADATA', sub: 'Structured JSON &lt; 2KB' },
        { label: 'KAFKA INGESTION', sub: 'High-throughput stream' },
        { label: 'MULTI-AGENT RL', sub: 'Zone Policy Network' },
        { label: 'CORRIDOR DISPATCH', sub: 'Multi-hop Green Wave' },
      ],
      responsibilities: [
        'Network-wide traffic flow & bottleneck propagation forecasting',
        'Multi-intersection green corridor pre-clearing for EMS',
        'Multi-agent reinforcement learning (MARL) for urban balance',
        'Continuous incident hotspot & road wear spatial analytics',
        'Federated training from aggregated edge metadata features',
        'Over-the-Air (OTA) verified neural weight distribution',
      ],
      safetyRule: 'Zero raw video ingress. Cloud receives only non-reversible mathematical telemetry.',
    },
    {
      id: 'override' as SystemPlane,
      num: '03',
      title: 'BOUNDED DYNAMIC OVERRIDE',
      headline: 'SAFEGUARDED ACTUATION ENVELOPE',
      tagline: 'Cloud Directive → Safety Envelope → Edge Validation → Signal Change',
      badge: 'FAIL-SAFE CONTRACT',
      flow: [
        { label: 'CLOUD DIRECTIVE', sub: 'Corridor Preemption Request' },
        { label: 'SAFETY ENVELOPE', sub: 'Pedestrian & Minimum Green Check' },
        { label: 'EDGE VALIDATION', sub: 'Local Sensor Veto Authority' },
        { label: 'SAFE ACTUATION', sub: 'Actuated Phase Transition' },
      ],
      responsibilities: [
        'Bounded duration: Overrides have hard TTL expiry (e.g., max 60s)',
        'Minimum pedestrian clearance enforcement (never truncates crosswalks)',
        'Local edge veto: Edge drops cloud instruction if local anomaly conflicts',
        'Interlock validation: Hardware conflict monitor prevents illegal dual greens',
        'Graceful decay: Auto-reverts to isolated Webster optimization if link drops',
        'Audit immutability: Every override command signed with cryptographic hash',
      ],
      safetyRule: 'Overrides are bounded, expiring, and ignorable. Safety envelope cannot be breached.',
    },
  ];

  const currentPlaneData = planes.find((p) => p.id === activePlane)!;

  return (
    <section id="architecture" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">03</span>
            <span>//</span>
            <span>SYSTEM TOPOLOGY</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            separation of concerns between latency & coordination
          </div>
          <div className="hidden sm:block text-[11px]">
            TRI-PLANE COOPERATION MODEL
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-12">
          <h2 className="font-display text-[52px] sm:text-[76px] md:text-[96px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter">
            THREE PLANES.
            <br />
            <span className="text-[#F4511E]">ONE RESPONSE.</span>
          </h2>
          <p className="mt-4 text-[#8A8A8A] max-w-2xl text-base sm:text-lg">
            Project-K splits urban traffic management into three strictly decoupled operational planes. 
            Local safety lives on the edge pole; macro corridor intelligence lives in the cloud; safety contracts govern every interaction.
          </p>
        </div>

        {/* Interactive Plane Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {planes.map((plane) => {
            const isSelected = activePlane === plane.id;
            return (
              <button
                key={plane.id}
                onClick={() => setActivePlane(plane.id)}
                className={`p-5 text-left border transition-all duration-200 relative ${
                  isSelected
                    ? 'border-[#F4511E] bg-[#0c0806] shadow-[0_0_15px_rgba(244,81,30,0.15)]'
                    : 'border-white/10 bg-[#080808] hover:border-white/30'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#F4511E]" />
                )}
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={isSelected ? 'text-[#F4511E] font-bold' : 'text-[#8A8A8A]'}>
                    PLANE {plane.num}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 border ${
                    isSelected ? 'border-[#F4511E]/50 text-[#F4511E]' : 'border-white/10 text-zinc-500'
                  }`}>
                    {plane.badge}
                  </span>
                </div>
                <div className="font-display text-xl font-bold text-white tracking-wide">
                  {plane.title}
                </div>
                <div className="text-xs text-[#8A8A8A] font-mono mt-1">
                  {plane.headline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Plane Technical Interactive Inspector */}
        <div className="border border-white/15 bg-[#080808] p-6 sm:p-8 crosshair-corner">
          
          {/* Plane Pipeline Visualization */}
          <div className="border border-white/10 p-4 sm:p-6 bg-black/60 mb-8">
            <div className="text-xs font-mono text-[#8A8A8A] mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#F4511E]" />
                PIPELINE EXECUTION FLOW // PLANE {currentPlaneData.num}
              </span>
              <span className="text-[#F4511E] font-bold">{currentPlaneData.tagline}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {currentPlaneData.flow.map((node, idx) => (
                <div
                  key={node.label}
                  className="relative p-4 border border-white/10 bg-white/[0.02] flex flex-col justify-between"
                >
                  <div className="text-[10px] font-mono text-[#F4511E]">
                    STAGE 0{idx + 1}
                  </div>
                  <div className="font-mono text-sm font-bold text-white mt-1">
                    {node.label}
                  </div>
                  <div className="text-xs text-[#8A8A8A] font-mono mt-1">
                    {node.sub}
                  </div>

                  {idx < currentPlaneData.flow.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-[#080808] p-0.5 border border-white/10 text-[#F4511E]">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Plane Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Responsibilities list */}
            <div className="lg:col-span-8">
              <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-wider mb-4">
                CORE TECHNICAL CAPABILITIES & EDGE FUNCTIONS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {currentPlaneData.responsibilities.map((resp, i) => (
                  <div
                    key={i}
                    className="p-3 border border-white/10 bg-black/40 flex items-start gap-2.5"
                  >
                    <CheckCircle className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
                    <span className="text-[#F3F3F0]/90 leading-snug">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Invariant Rule Poster */}
            <div className="lg:col-span-4 border border-[#F4511E]/40 p-6 bg-[#F4511E]/5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#F4511E] mb-2">
                  <ShieldAlert className="w-4 h-4 text-[#F4511E]" />
                  <span>SAFETY INVARIANT CONTRACT</span>
                </div>
                <div className="font-display text-2xl font-bold text-white mt-2 leading-tight">
                  {currentPlaneData.safetyRule}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4511E]/20 text-[11px] font-mono text-[#8A8A8A]">
                <div className="font-hand text-[#F4511E] text-sm">
                  // verified against NTCIP & NEMA standards
                </div>
                <div className="mt-1 text-white/50">
                  OVERRIDE TIMEOUT: 60s HARD REVERT
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
