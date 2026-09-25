import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cpu, ArrowUpRight, Radio, Layers, Zap } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onArchitectureClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onArchitectureClick,
}) => {
  const [pulsePhase, setPulsePhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] w-full pt-20 pb-16 flex flex-col justify-between border-b border-white/10 overflow-hidden bg-[#050505]"
    >
      {/* Background blueprint grid & scanlines */}
      <div className="absolute inset-0 bg-blueprint opacity-60 pointer-events-none" />
      <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

      {/* Top Technical Header Banner */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 relative z-10 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A]">
          <div className="flex items-center gap-3">
            <span className="text-[#F4511E] font-bold">PROJECT-K / PK-TR-2026-02</span>
            <span className="hidden md:inline text-white/20">/</span>
            <span className="hidden md:inline">SYSTEM SPECIFICATION 0.9.4</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#F4511E] rounded-full animate-ping inline-block" />
              STATUS: PROTOTYPE ARCHITECTURE
            </span>
            <span className="text-white/20">|</span>
            <span>GRID: SECTOR-04</span>
            <span className="text-white/20">|</span>
            <span className="text-white">01 / SYSTEM</span>
          </div>
        </div>
      </div>

      {/* Main Asymmetrical Editorial Body */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-center">
        
        {/* Left Editorial Headline Column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="px-2 py-0.5 border border-[#F4511E]/40 text-[#F4511E] text-[10px] font-mono tracking-widest uppercase bg-[#F4511E]/5">
              HYBRID EDGE–CLOUD INFRASTRUCTURE
            </div>
            <span className="font-hand text-[#F4511E] text-base sm:text-lg">
              // sub-120ms preemption target
            </span>
          </div>

          <h1 className="font-display text-[64px] sm:text-[96px] md:text-[120px] lg:text-[132px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter select-none">
            TRAFFIC
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #F3F3F0' }}>
              SHOULD
            </span>
            <br />
            <span className="text-[#F4511E] relative inline-block">
              RESPOND.
              <span className="absolute -top-3 sm:-top-4 -right-6 sm:-right-8 font-mono text-xs text-white border border-white/20 px-1.5 py-0.5 bg-[#050505]">
                v2.6
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-[#F3F3F0]/90 font-sans leading-relaxed">
            An edge–cloud intelligent traffic system for faster emergency response. 
            Project-K transforms existing passive urban CCTV cameras into an active, 
            autonomous safety network with bounded cloud overrides.
          </p>

          {/* Action and Technical Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#corridor"
              onClick={onExploreClick}
              className="px-6 py-3.5 bg-[#F4511E] text-black font-mono font-bold text-sm tracking-wider uppercase hover:bg-white transition-colors flex items-center gap-2 group"
            >
              <span>EXPLORE CORRIDOR SIMULATOR</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#architecture"
              onClick={onArchitectureClick}
              className="px-6 py-3.5 border border-white/20 hover:border-white font-mono text-sm tracking-wider uppercase text-[#F3F3F0] transition-colors flex items-center gap-2 bg-black/40"
            >
              <Cpu className="w-4 h-4 text-[#F4511E]" />
              <span>SYSTEM ARCHITECTURE</span>
            </a>
          </div>

          {/* Micro Telemetry Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div>
              <div className="text-[10px] text-[#8A8A8A] uppercase">EDGE AUTHORITY</div>
              <div className="text-[#F3F3F0] font-bold mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#F4511E] rounded-full inline-block" />
                LOCAL TIER-1 AI
              </div>
            </div>
            <div>
              <div className="text-[10px] text-[#8A8A8A] uppercase">CLOUD OPTIMIZATION</div>
              <div className="text-[#F3F3F0] font-bold mt-0.5">MULTI-AGENT RL</div>
            </div>
            <div>
              <div className="text-[10px] text-[#8A8A8A] uppercase">BOUNDED OVERRIDE</div>
              <div className="text-[#F3F3F0] font-bold mt-0.5 text-emerald-400">FAIL-SAFE ENVELOPE</div>
            </div>
            <div>
              <div className="text-[10px] text-[#8A8A8A] uppercase">INFERENCE CASCADE</div>
              <div className="text-[#F3F3F0] font-bold mt-0.5">DUAL-TIER VPU</div>
            </div>
          </div>
        </div>

        {/* Right Abstract CCTV & Wireframe Network Art Visualization */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          {/* Main Visual Box with 1px border and corner crosshairs */}
          <div className="relative border border-white/15 bg-black/80 p-4 crosshair-corner overflow-hidden">
            {/* Top metadata row inside CCTV frame */}
            <div className="flex items-center justify-between text-[10px] font-mono text-[#8A8A8A] pb-2 mb-2 border-b border-white/10">
              <span className="flex items-center gap-1.5 text-[#F4511E]">
                <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-pulse" />
                REC [CH-04] INTERSECTION-CENTRAL
              </span>
              <span>24.0 FPS | 1080p RAW</span>
            </div>

            {/* Visual Screen with monochrome graphic + orange wireframe network */}
            <div className="relative h-80 sm:h-96 w-full bg-[#0a0a0a] overflow-hidden border border-white/10 flex items-center justify-center">
              {/* Halftone texture overlay */}
              <div className="absolute inset-0 bg-halftone opacity-75 pointer-events-none" />

              {/* Wireframe City Grid SVG */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full object-cover"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Roads / Corridors */}
                <rect x="0" y="170" width="400" height="60" fill="#111" stroke="#333" strokeWidth="1" />
                <rect x="170" y="0" width="60" height="400" fill="#111" stroke="#333" strokeWidth="1" />

                {/* Diagonal secondary corridors */}
                <line x1="0" y1="40" x2="400" y2="360" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="400" y1="40" x2="0" y2="360" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />

                {/* Road lane dividers */}
                <line x1="0" y1="200" x2="400" y2="200" stroke="#444" strokeWidth="1" strokeDasharray="8 8" />
                <line x1="200" y1="0" x2="200" y2="400" stroke="#444" strokeWidth="1" strokeDasharray="8 8" />

                {/* Active Orange Preemption Path */}
                <path
                  d="M 20 200 L 200 200 L 200 380"
                  stroke="#F4511E"
                  strokeWidth="3"
                  strokeDasharray="6 4"
                  className="animate-pulse"
                />

                {/* Moving Ambulance Beacon on Path */}
                <circle cx={40 + pulsePhase * 40} cy="200" r="6" fill="#F4511E" />
                <circle cx={40 + pulsePhase * 40} cy="200" r="14" stroke="#F4511E" strokeWidth="1" opacity="0.6" />

                {/* Intersection Nodes */}
                {/* Center Node */}
                <rect x="180" y="180" width="40" height="40" fill="#191919" stroke="#F4511E" strokeWidth="2" />
                <circle cx="200" cy="200" r="4" fill="#F4511E" />
                <text x="200" y="170" fill="#F4511E" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  NODE-ALPHA [PREEMPT]
                </text>

                {/* Peripheral Nodes */}
                <circle cx="70" cy="200" r="8" fill="#111" stroke="#888" strokeWidth="1" />
                <circle cx="330" cy="200" r="8" fill="#111" stroke="#888" strokeWidth="1" />
                <circle cx="200" cy="70" r="8" fill="#111" stroke="#888" strokeWidth="1" />
                <circle cx="200" cy="330" r="8" fill="#111" stroke="#888" strokeWidth="1" />

                {/* Traffic Signals */}
                <circle cx="160" cy="160" r="4" fill="#10b981" />
                <circle cx="240" cy="160" r="4" fill="#ef4444" />
                <circle cx="160" cy="240" r="4" fill="#10b981" />
                <circle cx="240" cy="240" r="4" fill="#ef4444" />

                {/* Bounding box computer vision annotations */}
                <rect x="110" y="185" width="30" height="15" fill="none" stroke="#F4511E" strokeWidth="1" strokeDasharray="2 2" />
                <text x="110" y="180" fill="#F4511E" fontSize="7" fontFamily="monospace">
                  EMERG_01 (98.4%)
                </text>

                <rect x="250" y="185" width="25" height="12" fill="none" stroke="#888" strokeWidth="0.8" />
                <text x="250" y="180" fill="#888" fontSize="7" fontFamily="monospace">
                  QUEUE_DRAIN
                </text>

                {/* Crosshairs */}
                <line x1="190" y1="200" x2="210" y2="200" stroke="#F4511E" strokeWidth="1" />
                <line x1="200" y1="190" x2="200" y2="210" stroke="#F4511E" strokeWidth="1" />
              </svg>

              {/* Scanning horizontal line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#F4511E] to-transparent animate-bounce opacity-80" />

              {/* Monospace telemetry HUD overlay in corner */}
              <div className="absolute bottom-2 left-2 bg-black/90 p-2 border border-white/10 text-[9px] font-mono text-[#8A8A8A] space-y-0.5">
                <div>GEO: 12.9716°N / 77.5946°E</div>
                <div>SIGNAL PHASE: GREEN_HOLD (32s)</div>
                <div className="text-[#F4511E] font-semibold">CLEAR CORRIDOR: 420m AHEAD</div>
              </div>

              <div className="absolute top-2 right-2 bg-black/90 px-2 py-1 border border-white/10 text-[9px] font-mono text-emerald-400">
                OVERRIDE BOUNDED ✓
              </div>
            </div>

            {/* Bottom metadata caption */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#8A8A8A]">
              <span>FIG 01.1 — SPATIAL DYNAMIC OVERRIDE</span>
              <span className="text-[#F4511E]">SAFETY ENVELOPE: STRICT</span>
            </div>
          </div>

          {/* Floating brutalist label card */}
          <div className="absolute -bottom-4 -left-4 hidden sm:block bg-[#050505] border border-white/20 p-3 max-w-[220px] shadow-2xl z-20">
            <div className="text-[10px] font-mono text-[#8A8A8A]">FAIL-SAFE PRINCIPLE</div>
            <div className="text-xs font-mono font-bold text-white mt-1">
              "The intersection decides locally. The cloud advises."
            </div>
            <div className="font-hand text-[#F4511E] text-sm mt-1">
              No central point of failure
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Ticker Bar */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 relative z-10 border-t border-white/10 pt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#8A8A8A]">
        <div className="flex items-center gap-6">
          <span>LATENCY BUDGET: &lt;150ms</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="hidden sm:inline">DATA LEAKAGE: 0 BYTES RAW VIDEO</span>
          <span className="hidden md:inline text-white/20">•</span>
          <span className="hidden md:inline">FAILOVER: AUTONOMOUS ACTUATION</span>
        </div>
        <div className="text-[#F4511E] font-medium">
          [SCROLL TO INVESTIGATE] ↓
        </div>
      </div>
    </section>
  );
};
