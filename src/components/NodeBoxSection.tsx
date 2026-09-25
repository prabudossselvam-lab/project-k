import React, { useState } from 'react';
import { Cpu, Server, Wifi, Eye, Radio, Shield, HardDrive, Zap, Info } from 'lucide-react';

interface ComponentAnnotation {
  id: string;
  name: string;
  tag: string;
  x: number;
  y: number;
  specs: string;
  role: string;
}

export const NodeBoxSection: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<string>('npu');

  const components: ComponentAnnotation[] = [
    {
      id: 'arm',
      name: 'ARM SoC (Octa-Core)',
      tag: 'COMPUTE CORE',
      x: 35,
      y: 35,
      specs: 'ARM Cortex-A78AE (Automotive Functional Safety Edition) @ 2.2GHz',
      role: 'Orchestrates OS, RTSP decoding, cyclic queue management, and safety state machines.',
    },
    {
      id: 'npu',
      name: 'Dedicated NPU (Neural Accelerator)',
      tag: 'AI ENGINE',
      x: 55,
      y: 35,
      specs: '32 TOPS INT8 Low-Power Neural Engine with INT4 sparsity support',
      role: 'Executes Tier-1 YOLOv8-nano inference at 30 FPS concurrent across 4 HD camera feeds.',
    },
    {
      id: 'camera',
      name: 'Camera Input Interface',
      tag: 'SENSOR INGEST',
      x: 18,
      y: 20,
      specs: 'Dual Gigabit PoE+ Ports, RTSP / ONVIF Profile S/T/G compatible',
      role: 'Direct zero-copy DMA ring-buffer ingestion from existing municipal CCTV poles.',
    },
    {
      id: 'buffer',
      name: 'Local Circular RAM Buffer',
      tag: 'PRIVACY CORE',
      x: 75,
      y: 20,
      specs: '16GB LPDDR5 ECC RAM with ephemeral 30-second rolling ring memory',
      role: 'Holds video in volatile RAM for kinematic feature verification; permanently purged without disk write.',
    },
    {
      id: 'signal',
      name: 'Signal Controller Interface',
      tag: 'ACTUATION',
      x: 20,
      y: 75,
      specs: 'Optoisolated RS-485 / NEMA TS2 Type 1 / 2070 TEES compatible DB-25',
      role: 'Direct physical actuation of intersection phase relays, green holds, and clearance intervals.',
    },
    {
      id: 'cellular',
      name: '4G / 5G Cellular Modem',
      tag: 'TELEMETRY',
      x: 80,
      y: 75,
      specs: 'Dual SIM failover with eSIM support, sub-6GHz low-latency band',
      role: 'Transmits 2KB telemetry JSON to Kafka cloud ingestion; receives bounded green-corridor advice.',
    },
    {
      id: 'local_ai',
      name: 'Local AI Cascade Engine',
      tag: 'DUAL TIER',
      x: 48,
      y: 55,
      specs: 'ONNX Runtime + TensorRT-embedded inference stack',
      role: 'Executes lightweight continuous anomaly tracking and on-demand heavy verification cascade.',
    },
    {
      id: 'peer',
      name: 'Sub-GHz Peer Link (DSRC/V2X)',
      tag: 'MESH ADJACENCY',
      x: 75,
      y: 55,
      specs: '802.11bd / C-V2X 5.9 GHz low-latency ad-hoc mesh transceivers',
      role: 'Coordinates directly with adjacent upstream/downstream intersections without internet dependency.',
    },
  ];

  const activeCompData = components.find((c) => c.id === selectedComp) || components[1];

  return (
    <section id="nodebox" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">04</span>
            <span>//</span>
            <span>HARDWARE SPECIFICATION</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            industrial grade NEMA-4X enclosure
          </div>
          <div className="hidden sm:block text-[11px]">
            INTERSECTION-MOUNTED EDGE COMPUTER
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-12">
          <h2 className="font-display text-[52px] sm:text-[76px] md:text-[96px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter">
            THE NODE BOX
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <div className="px-3 py-1 bg-[#F4511E] text-black font-mono text-xs font-bold uppercase">
              BLUEPRINT SPECIFICATION
            </div>
            <p className="text-[#F3F3F0] text-lg font-medium">
              "The intersection decides locally. The cloud advises."
            </p>
          </div>
          <p className="mt-2 text-[#8A8A8A] max-w-2xl text-sm sm:text-base">
            Installed inside or beside existing traffic signal cabinets on pole mounts. 
            Ruggedized, passively cooled, with hardware watchdog timers and optoisolated physical relays.
          </p>
        </div>

        {/* Blueprint Visual & Interactive Component Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Blueprint Diagram Box */}
          <div className="lg:col-span-8 border border-white/20 bg-[#06080b] p-4 sm:p-6 crosshair-corner relative overflow-hidden flex flex-col justify-between">
            {/* Blueprint Grid Lines Overlay */}
            <div className="absolute inset-0 bg-blueprint opacity-80 pointer-events-none" />

            {/* Blueprint Top Bar */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#8A8A8A] border-b border-white/10 pb-3 mb-4">
              <span className="text-white font-bold">SCHEMATIC: PK-BOX-REV-4.2 // INDUSTRIAL MOTHERBOARD</span>
              <span className="text-[#F4511E]">OPERATIONAL TEMP: -40°C TO +85°C</span>
            </div>

            {/* Blueprint Canvas SVG Representation */}
            <div className="relative z-10 w-full aspect-[16/10] bg-black/60 border border-white/10 overflow-hidden flex items-center justify-center p-2">
              <svg viewBox="0 0 800 500" className="w-full h-full" fill="none">
                {/* PCB Chassis Outline */}
                <rect x="50" y="40" width="700" height="420" rx="4" fill="#080d12" stroke="#2a4358" strokeWidth="2" />
                <rect x="60" y="50" width="680" height="400" rx="2" fill="none" stroke="#1c3040" strokeWidth="1" strokeDasharray="4 4" />

                {/* Circuit Copper Traces */}
                <path d="M 120 100 L 250 100 L 320 180 L 480 180" stroke="#F4511E" strokeWidth="1.5" opacity="0.6" />
                <path d="M 480 200 L 600 200 L 680 120" stroke="#2563eb" strokeWidth="1.5" opacity="0.4" />
                <path d="M 160 380 L 260 380 L 340 300 L 480 300" stroke="#10b981" strokeWidth="1.5" opacity="0.4" />
                <path d="M 480 320 L 580 320 L 680 400" stroke="#F4511E" strokeWidth="1.5" opacity="0.6" />
                <line x1="400" y1="50" x2="400" y2="450" stroke="#2a4358" strokeWidth="0.8" strokeDasharray="6 6" />

                {/* Component Blocks */}
                {/* ARM SoC */}
                <rect x="240" y="140" width="130" height="130" rx="2" fill="#0c1822" stroke={selectedComp === 'arm' ? '#F4511E' : '#3d5c75'} strokeWidth="2" />
                <text x="305" y="200" fill="#fff" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ARM SoC</text>
                <text x="305" y="220" fill="#F4511E" fontSize="9" fontFamily="monospace" textAnchor="middle">OCTA-CORE 2.2G</text>

                {/* NPU Core */}
                <rect x="420" y="140" width="130" height="130" rx="2" fill="#0c1822" stroke={selectedComp === 'npu' ? '#F4511E' : '#3d5c75'} strokeWidth="2" />
                <text x="485" y="200" fill="#fff" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">32 TOPS NPU</text>
                <text x="485" y="220" fill="#F4511E" fontSize="9" fontFamily="monospace" textAnchor="middle">TENSOR ACCEL</text>

                {/* Camera Input Ports */}
                <rect x="75" y="80" width="90" height="70" fill="#0c1822" stroke={selectedComp === 'camera' ? '#F4511E' : '#3d5c75'} strokeWidth="1.5" />
                <text x="120" y="115" fill="#fff" fontSize="10" fontFamily="monospace" textAnchor="middle">PoE+ INGEST</text>
                <text x="120" y="130" fill="#888" fontSize="8" fontFamily="monospace" textAnchor="middle">DUAL GIGE</text>

                {/* RAM Buffer */}
                <rect x="610" y="80" width="100" height="70" fill="#0c1822" stroke={selectedComp === 'buffer' ? '#F4511E' : '#3d5c75'} strokeWidth="1.5" />
                <text x="660" y="115" fill="#fff" fontSize="10" fontFamily="monospace" textAnchor="middle">16GB ECC</text>
                <text x="660" y="130" fill="#F4511E" fontSize="8" fontFamily="monospace" textAnchor="middle">RING BUFFER</text>

                {/* Signal Interface DB25 */}
                <rect x="75" y="330" width="100" height="80" fill="#0c1822" stroke={selectedComp === 'signal' ? '#F4511E' : '#3d5c75'} strokeWidth="1.5" />
                <text x="125" y="365" fill="#fff" fontSize="10" fontFamily="monospace" textAnchor="middle">NEMA TS2</text>
                <text x="125" y="380" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">ISOLATED RELAY</text>

                {/* 5G Modem */}
                <rect x="610" y="330" width="100" height="80" fill="#0c1822" stroke={selectedComp === 'cellular' ? '#F4511E' : '#3d5c75'} strokeWidth="1.5" />
                <text x="660" y="365" fill="#fff" fontSize="10" fontFamily="monospace" textAnchor="middle">5G MODEM</text>
                <text x="660" y="380" fill="#888" fontSize="8" fontFamily="monospace" textAnchor="middle">DUAL-eSIM</text>

                {/* Local AI Engine Box */}
                <rect x="330" y="310" width="140" height="80" fill="#0c1822" stroke={selectedComp === 'local_ai' ? '#F4511E' : '#3d5c75'} strokeWidth="1.5" />
                <text x="400" y="345" fill="#fff" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">LOCAL AI</text>
                <text x="400" y="362" fill="#F4511E" fontSize="9" fontFamily="monospace" textAnchor="middle">TIER 1 & 2 CASCADE</text>

                {/* Peer Link */}
                <circle cx="560" cy="275" r="22" fill="#0c1822" stroke={selectedComp === 'peer' ? '#F4511E' : '#3d5c75'} strokeWidth="1.5" />
                <text x="560" y="278" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">PEER LINK</text>
                <text x="560" y="288" fill="#F4511E" fontSize="7" fontFamily="monospace" textAnchor="middle">5.9GHz</text>

                {/* Animated Pulsing Data Line */}
                <circle cx="375" cy="205" r="4" fill="#F4511E" className="animate-ping" />
              </svg>
            </div>

            {/* Quick Component Click Chips */}
            <div className="relative z-10 mt-4 flex flex-wrap gap-2 pt-3 border-t border-white/10">
              {components.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComp(comp.id)}
                  className={`px-2.5 py-1 text-xs font-mono transition-colors border ${
                    selectedComp === comp.id
                      ? 'bg-[#F4511E] text-black border-[#F4511E] font-bold'
                      : 'bg-black/50 text-[#8A8A8A] border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {comp.name.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Right Selected Component Spec Panel */}
          <div className="lg:col-span-4 border border-white/20 bg-[#080808] p-6 flex flex-col justify-between crosshair-corner">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                <span className="text-[#F4511E] font-bold">// HARDWARE SUBSYSTEM</span>
                <span className="text-[#8A8A8A]">{activeCompData.tag}</span>
              </div>

              <div className="mt-6">
                <div className="text-xs font-mono text-[#8A8A8A]">SUBSYSTEM IDENTIFIER</div>
                <h3 className="font-display text-3xl font-black text-white mt-1">
                  {activeCompData.name}
                </h3>
              </div>

              <div className="mt-6 p-4 border border-white/10 bg-black/60 font-mono text-xs">
                <div className="text-[#F4511E] font-bold mb-1">TECHNICAL SPECIFICATION:</div>
                <div className="text-[#F3F3F0]">{activeCompData.specs}</div>
              </div>

              <div className="mt-6">
                <div className="text-xs font-mono text-[#8A8A8A] mb-1">SAFETY & ARCHITECTURAL ROLE:</div>
                <p className="text-sm text-[#F3F3F0]/90 leading-relaxed font-sans">
                  {activeCompData.role}
                </p>
              </div>
            </div>

            {/* Node Invariant Badge */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Shield className="w-4 h-4" />
                <span>NEMA TS2 HARDWARE INTERLOCK ENFORCED</span>
              </div>
              <div className="text-[11px] font-mono text-[#8A8A8A] mt-1">
                Firmware refuses any signal phase command that conflicts with mechanical safety interlocks.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
