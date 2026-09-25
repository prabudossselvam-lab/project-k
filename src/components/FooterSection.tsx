import React from 'react';
import { ArrowUpRight, Cpu, Radio, Shield, Terminal, Heart } from 'lucide-react';

interface FooterSectionProps {
  onExploreClick?: () => void;
  onArchitectureClick?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onExploreClick,
  onArchitectureClick,
}) => {
  return (
    <footer className="relative w-full bg-[#050505] text-[#F3F3F0] overflow-hidden">
      {/* Dramatic Final Call To Action */}
      <div className="border-b border-white/10 py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-blueprint opacity-60 pointer-events-none" />
        <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
          <div className="text-xs font-mono text-[#F4511E] tracking-widest uppercase mb-4">
            PROJECT-K / INTELLIGENT EMERGENCY TRAFFIC INFRASTRUCTURE
          </div>

          <h2 className="font-display text-[60px] sm:text-[96px] md:text-[132px] leading-[0.85] font-black uppercase tracking-tighter text-white max-w-5xl">
            THE CITY
            <br />
            IS ALREADY
            <br />
            <span className="text-[#F4511E]">CONNECTED.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base sm:text-lg text-[#8A8A8A] font-sans">
            Transform dormant urban cameras into active life-saving corridors. 
            Local authority at the pole. Bounded guidance from the cloud.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
            <a
              href="#corridor"
              onClick={onExploreClick}
              className="px-8 py-4 bg-[#F4511E] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 group"
            >
              <span>EXPLORE THE SYSTEM</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#architecture"
              onClick={onArchitectureClick}
              className="px-8 py-4 border border-white/20 hover:border-white font-bold uppercase tracking-wider text-white transition-colors flex items-center gap-2 bg-black/40"
            >
              <Cpu className="w-4 h-4 text-[#F4511E]" />
              <span>VIEW ARCHITECTURE</span>
            </a>
          </div>
        </div>
      </div>

      {/* Minimal Brutalist Footer */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-12 font-mono text-xs text-[#8A8A8A]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Identity */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
              <span className="w-2.5 h-2.5 bg-[#F4511E] inline-block"></span>
              <span>PROJECT-K</span>
            </div>
            <div className="text-[11px] text-[#8A8A8A]">
              DOCUMENT REF: PK-TR-2026-02
            </div>
            <div className="text-[11px] text-[#F4511E] mt-1">
              EDGE × CLOUD × EMERGENCY RESPONSE
            </div>
          </div>

          {/* Coordinates & Specification */}
          <div>
            <div className="text-white text-xs font-bold mb-2">SYSTEM METRICS</div>
            <div className="space-y-1 text-[11px]">
              <div>COORDINATE: 12.9716° N, 77.5946° E</div>
              <div>REVISION: STABLE ARCH 0.9.4</div>
              <div>FAIL-SAFE ENVELOPE: STRICT</div>
            </div>
          </div>

          {/* Quick Jumps */}
          <div>
            <div className="text-white text-xs font-bold mb-2">MODULE REGISTRY</div>
            <div className="space-y-1 text-[11px]">
              <div><a href="#hero" className="hover:text-[#F4511E]">01 // OVERVIEW</a></div>
              <div><a href="#architecture" className="hover:text-[#F4511E]">02 // TRI-PLANE ARCHITECTURE</a></div>
              <div><a href="#nodebox" className="hover:text-[#F4511E]">03 // NODE BOX SPECIFICATION</a></div>
              <div><a href="#corridor" className="hover:text-[#F4511E]">04 // EMERGENCY CORRIDOR</a></div>
            </div>
          </div>

          {/* Verification Disclaimer */}
          <div>
            <div className="text-white text-xs font-bold mb-2">INTEGRITY COMMITMENT</div>
            <p className="text-[11px] text-[#8A8A8A] font-sans leading-relaxed">
              Design concept and prototype architecture. Performance figures are design targets for municipal pilot validation.
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            PROJECT-K // RESEARCH & EXPERIMENTAL ARCHITECTURE FOR URBAN SURVIVAL.
          </div>
          <div className="flex items-center gap-4 text-[#8A8A8A]">
            <span>SYSTEM STATUS: NORMAL</span>
            <span className="text-white/20">•</span>
            <span className="text-emerald-400">SAFETY CONTRACT: VALIDATED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
