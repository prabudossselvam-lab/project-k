import React from 'react';
import { Eye, Video, AlertCircle, HardDrive, Cpu, ShieldAlert } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section id="introduction" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      {/* Editorial Grid Structure */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Section Header with Section ID */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">01</span>
            <span>//</span>
            <span>FOUNDATIONAL CONFLICT</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            billions spent on passive surveillance
          </div>
          <div className="hidden sm:block text-[11px]">
            ARCHIVAL_MODE vs REAL_TIME_ACTUATION
          </div>
        </div>

        {/* Big Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Massive Headline & Concept Statement */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-[56px] sm:text-[80px] md:text-[96px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter">
              THE CITY
              <br />
              ALREADY
              <br />
              <span className="text-[#F4511E]">HAS EYES.</span>
            </h2>

            <div className="mt-8 border-l-2 border-[#F4511E] pl-6">
              <p className="text-xl sm:text-2xl text-[#F3F3F0] font-medium leading-snug">
                Existing urban CCTV cameras mostly observe and record traffic without actively interpreting it.
              </p>
              <p className="mt-4 text-[#8A8A8A] text-sm sm:text-base leading-relaxed">
                Millions of optical sensors silently stream gigabytes of raw video to dark data silos, where footage sits unexamined until after a tragedy has already occurred. Project-K transforms this latent optical grid into an active, distributed edge intelligence network that intervenes in milliseconds.
              </p>
            </div>

            {/* Visual Contrast: Passive vs Project-K */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-white/10 p-4 bg-white/[0.01]">
                <div className="flex items-center gap-2 text-[#8A8A8A] font-mono text-xs mb-2">
                  <HardDrive className="w-3.5 h-3.5 text-zinc-500" />
                  <span>CONVENTIONAL MUNICIPAL CCTV</span>
                </div>
                <div className="text-sm font-bold text-zinc-400 font-mono">DUMB RECORDER</div>
                <p className="text-xs text-[#8A8A8A] mt-2 leading-normal">
                  High bandwidth wasted streaming to NVR servers. 0% proactive signal intervention. Forensic post-incident only.
                </p>
              </div>

              <div className="border border-[#F4511E]/40 p-4 bg-[#F4511E]/5">
                <div className="flex items-center gap-2 text-[#F4511E] font-mono text-xs mb-2">
                  <Cpu className="w-3.5 h-3.5 text-[#F4511E]" />
                  <span>PROJECT-K NODE NETWORK</span>
                </div>
                <div className="text-sm font-bold text-white font-mono">EDGE REASONING ENGINE</div>
                <p className="text-xs text-[#F3F3F0]/80 mt-2 leading-normal">
                  Local neural models interpret accidents, lane blockage, and emergency strobes at the pole. Signals preempt automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: CCTV Grain Visual & Oversized Visual Typography Statistics */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Massive Grain/Halftone CCTV Art Box */}
            <div className="relative border border-white/15 p-4 bg-[#0a0a0a] crosshair-corner overflow-hidden">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#8A8A8A] mb-3 pb-2 border-b border-white/10">
                <span className="flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5 text-[#F4511E]" />
                  CCTV_SENSOR_SURFACE // SPECTRAL OPTICS
                </span>
                <span className="text-[#F4511E]">OPTICAL INTERPRETATION DEFICIT</span>
              </div>

              <div className="relative h-64 sm:h-72 w-full bg-black border border-white/10 overflow-hidden flex items-center justify-center">
                {/* Halftone & Scanlines */}
                <div className="absolute inset-0 bg-halftone opacity-80 pointer-events-none" />
                <div className="absolute inset-0 scanlines opacity-50 pointer-events-none" />

                {/* Conceptual eye / lens vector diagram */}
                <svg viewBox="0 0 300 200" className="w-full h-full opacity-90" fill="none">
                  {/* Outer lens aperture circles */}
                  <circle cx="150" cy="100" r="80" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="150" cy="100" r="60" stroke="#555" strokeWidth="1" />
                  <circle cx="150" cy="100" r="40" stroke="#F4511E" strokeWidth="1.5" />
                  
                  {/* Iris Blades */}
                  <line x1="110" y1="100" x2="190" y2="100" stroke="#F4511E" strokeWidth="0.75" />
                  <line x1="150" y1="60" x2="150" y2="140" stroke="#F4511E" strokeWidth="0.75" />
                  <line x1="120" y1="70" x2="180" y2="130" stroke="#888" strokeWidth="0.75" />
                  <line x1="120" y1="130" x2="180" y2="70" stroke="#888" strokeWidth="0.75" />

                  {/* Center Pupil Core */}
                  <circle cx="150" cy="100" r="16" fill="#111" stroke="#F4511E" strokeWidth="2" />
                  <circle cx="150" cy="100" r="4" fill="#F4511E" />

                  {/* Optical Ray Cones */}
                  <polygon points="0,0 150,100 0,200" fill="rgba(255,255,255,0.02)" stroke="#333" strokeWidth="0.5" />
                  <polygon points="300,0 150,100 300,200" fill="rgba(244,81,30,0.03)" stroke="#F4511E" strokeWidth="0.5" strokeDasharray="3 3" />

                  {/* Computer vision inference tags */}
                  <rect x="18" y="24" width="70" height="18" fill="#111" stroke="#444" strokeWidth="0.8" />
                  <text x="24" y="36" fill="#888" fontSize="8" fontFamily="monospace">RAW PIXELS 1080p</text>

                  <rect x="200" y="160" width="85" height="18" fill="#111" stroke="#F4511E" strokeWidth="0.8" />
                  <text x="206" y="172" fill="#F4511E" fontSize="8" fontFamily="monospace">NEURAL METADATA</text>
                </svg>

                {/* Watermark label */}
                <div className="absolute top-3 left-3 bg-black/80 px-2 py-1 border border-white/10 text-[9px] font-mono text-[#8A8A8A]">
                  PASSIVE CAMERA GRID → ACTIVE SENSOR
                </div>

                <div className="absolute bottom-3 right-3 font-hand text-[#F4511E] text-sm">
                  // 99.8% of frames recorded are never seen
                </div>
              </div>

              {/* Sub-caption */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#8A8A8A]">
                <span>FIELD OF REGARD: 180° WIDE ANGLE</span>
                <span>METADATA CONVERSION: REAL-TIME</span>
              </div>
            </div>

            {/* Oversized Orange Visual Typography Posters (NOT ordinary dashboard cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Poster Stat 01 */}
              <div className="relative border border-white/10 bg-[#080808] p-6 flex flex-col justify-between overflow-hidden group hover:border-[#F4511E] transition-colors">
                <div className="text-[10px] font-mono text-[#8A8A8A] flex justify-between">
                  <span>METRIC // INFRASTRUCTURE DEPTH</span>
                  <span className="text-[#F4511E]">01</span>
                </div>

                <div className="my-4">
                  <div className="font-display text-6xl sm:text-7xl font-black text-[#F4511E] tracking-tight leading-none">
                    1.3M+
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-black text-white tracking-normal uppercase mt-1">
                    TRAFFIC CAMERAS
                  </div>
                </div>

                <div className="text-xs text-[#8A8A8A] font-mono border-t border-white/10 pt-3">
                  Installed in Tier-1 & Tier-2 cities. Currently dormant for active traffic control.
                </div>
              </div>

              {/* Poster Stat 02 */}
              <div className="relative border border-white/10 bg-[#080808] p-6 flex flex-col justify-between overflow-hidden group hover:border-[#F4511E] transition-colors">
                <div className="text-[10px] font-mono text-[#8A8A8A] flex justify-between">
                  <span>METRIC // CRITICAL GOLDEN HOUR</span>
                  <span className="text-[#F4511E]">02</span>
                </div>

                <div className="my-4">
                  <div className="font-display text-6xl sm:text-7xl font-black text-[#F4511E] tracking-tight leading-none">
                    SECONDS
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-black text-white tracking-normal uppercase mt-1">
                    MATTER
                  </div>
                </div>

                <div className="text-xs text-[#8A8A8A] font-mono border-t border-white/10 pt-3">
                  Emergency response delay compounds non-linearly with gridlocked intersection queues.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
