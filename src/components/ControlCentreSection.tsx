import React, { useState, useEffect } from 'react';
import { Activity, Radio, AlertOctagon, ShieldAlert, Cpu, Terminal, Compass, Eye } from 'lucide-react';

export const ControlCentreSection: React.FC = () => {
  const [ticker, setTicker] = useState(0);
  const [selectedJunction, setSelectedJunction] = useState('NODE-BLR-04');
  const [countdownSeconds, setCountdownSeconds] = useState(18);

  useEffect(() => {
    const timer = setInterval(() => {
      setTicker((t) => (t + 1) % 100);
      setCountdownSeconds((prev) => (prev <= 1 ? 30 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const junctionList = [
    { id: 'NODE-BLR-01', name: 'RICHMOND CIRCLE', density: 84, signal: 'GREEN', preemption: false, fps: 29.8, status: 'NOMINAL' },
    { id: 'NODE-BLR-02', name: 'TRINITY JUNCTION', density: 92, signal: 'RED', preemption: false, fps: 30.0, status: 'NOMINAL' },
    { id: 'NODE-BLR-03', name: 'BRIGADE ROAD INTERSECT', density: 71, signal: 'GREEN', preemption: false, fps: 28.5, status: 'NOMINAL' },
    { id: 'NODE-BLR-04', name: 'INDIRANAGAR 100FT ROAD', density: 64, signal: 'GREEN', preemption: true, fps: 30.1, status: 'PREEMPTION_ACTIVE' },
    { id: 'NODE-BLR-05', name: 'OLD AIRPORT ROAD HUB', density: 89, signal: 'YELLOW', preemption: false, fps: 29.4, status: 'NOMINAL' },
  ];

  const currentJunction = junctionList.find((j) => j.id === selectedJunction) || junctionList[3];

  return (
    <section id="control-centre" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">10</span>
            <span>//</span>
            <span>CENTRAL TRAFFIC OPERATIONS CENTER</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            industrial telemetry & supervisory console
          </div>
          <div className="hidden sm:block text-[11px]">
            TOC-INTERFACE // LEVEL-4 DISPATCH
          </div>
        </div>

        {/* Dashboard Title */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-[42px] sm:text-[64px] font-black uppercase text-white tracking-tighter leading-none">
              CONTROL CENTRE
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#8A8A8A]">
              ADVANCED INDUSTRIAL CONTROL TERMINAL // REAL-TIME COORDINATE SURVEILLANCE
            </p>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-[#8A8A8A]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CLOUD UPLINK: 14ms (KAFKA)</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="text-[#F4511E] font-bold">
              ACTIVE OVERRIDES: 01 BOUNDED
            </div>
          </div>
        </div>

        {/* Advanced Industrial Console Grid Container */}
        <div className="border border-white/20 bg-[#07090c] p-4 sm:p-6 crosshair-corner">
          
          {/* Top Console Status Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pb-4 mb-4 border-b border-white/10 font-mono text-xs">
            <div className="p-2 border border-white/10 bg-black/40">
              <div className="text-[10px] text-[#8A8A8A]">CITY COORDINATE</div>
              <div className="text-white font-bold mt-0.5">12.9716°N 77.5946°E</div>
            </div>
            <div className="p-2 border border-white/10 bg-black/40">
              <div className="text-[10px] text-[#8A8A8A]">MONITORED NODES</div>
              <div className="text-white font-bold mt-0.5">84 ACTIVE / 0 FAIL</div>
            </div>
            <div className="p-2 border border-white/10 bg-black/40">
              <div className="text-[10px] text-[#8A8A8A]">ACTIVE INCIDENTS</div>
              <div className="text-[#F4511E] font-bold mt-0.5">01 CRITICAL EMERGENCY</div>
            </div>
            <div className="p-2 border border-white/10 bg-black/40">
              <div className="text-[10px] text-[#8A8A8A]">CORRIDOR DURATION</div>
              <div className="text-emerald-400 font-bold mt-0.5">00:03:42 ELAPSED</div>
            </div>
            <div className="p-2 border border-white/10 bg-black/40">
              <div className="text-[10px] text-[#8A8A8A]">SAFETY BOUNDS</div>
              <div className="text-white font-bold mt-0.5">ENFORCED 100%</div>
            </div>
            <div className="p-2 border border-white/10 bg-black/40">
              <div className="text-[10px] text-[#8A8A8A]">EST TIME TO DEST</div>
              <div className="text-[#F4511E] font-bold mt-0.5">180s (MANIPAL HOSP)</div>
            </div>
          </div>

          {/* Main Dashboard Layout: Map Canvas + Live Node Telemetry Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left 8 Cols: City Map Vector Display */}
            <div className="lg:col-span-8 border border-white/15 bg-black/80 p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8A8A8A] pb-2 border-b border-white/10 mb-3">
                <span className="flex items-center gap-2 text-white">
                  <Compass className="w-3.5 h-3.5 text-[#F4511E]" />
                  VECTOR RADAR // SECTOR 04 ARTERIAL MATRIX
                </span>
                <span className="text-[#F4511E] font-bold">EMERGENCY CORRIDOR: ROUTE ALPHA-9</span>
              </div>

              {/* Vector City Radar Canvas SVG */}
              <div className="relative h-80 sm:h-96 w-full bg-[#050608] border border-white/10 overflow-hidden flex items-center justify-center">
                {/* Scanlines & Grid */}
                <div className="absolute inset-0 bg-blueprint opacity-80 pointer-events-none" />
                <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

                <svg viewBox="0 0 700 400" className="w-full h-full" fill="none">
                  {/* Outer Sector Boundary Box */}
                  <rect x="20" y="20" width="660" height="360" stroke="#222" strokeWidth="1" strokeDasharray="6 6" />

                  {/* Arterial Road Network Lines */}
                  {/* Horizontal Roads */}
                  <line x1="20" y1="120" x2="680" y2="120" stroke="#1f2937" strokeWidth="16" />
                  <line x1="20" y1="260" x2="680" y2="260" stroke="#1f2937" strokeWidth="16" />
                  <line x1="20" y1="120" x2="680" y2="120" stroke="#374151" strokeWidth="1" strokeDasharray="6 4" />
                  <line x1="20" y1="260" x2="680" y2="260" stroke="#374151" strokeWidth="1" strokeDasharray="6 4" />

                  {/* Vertical Arteries */}
                  <line x1="160" y1="20" x2="160" y2="380" stroke="#1f2937" strokeWidth="16" />
                  <line x1="360" y1="20" x2="360" y2="380" stroke="#1f2937" strokeWidth="16" />
                  <line x1="540" y1="20" x2="540" y2="380" stroke="#1f2937" strokeWidth="16" />

                  {/* Diagonal Flyover Corridor */}
                  <line x1="100" y1="360" x2="600" y2="60" stroke="#17212d" strokeWidth="10" />

                  {/* Active Preemption Path (Orange Glowing Line) */}
                  <path
                    d="M 60 120 L 360 120 L 360 260 L 620 260"
                    stroke="#F4511E"
                    strokeWidth="3.5"
                    strokeDasharray="8 6"
                    className="animate-pulse"
                  />

                  {/* Moving Ambulance Beacon */}
                  <circle cx="360" cy="190" r="8" fill="#F4511E" />
                  <circle cx="360" cy="190" r="20" stroke="#F4511E" strokeWidth="1" opacity="0.6" className="animate-ping" />
                  <text x="360" y="160" fill="#F4511E" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    AMB-108 [72 KM/H]
                  </text>

                  {/* Monitored Intersection Nodes */}
                  {[
                    { id: 'NODE-BLR-01', x: 160, y: 120, name: 'RICHMOND', signal: '#10b981' },
                    { id: 'NODE-BLR-02', x: 160, y: 260, name: 'TRINITY', signal: '#ef4444' },
                    { id: 'NODE-BLR-03', x: 360, y: 120, name: 'BRIGADE', signal: '#10b981' },
                    { id: 'NODE-BLR-04', x: 360, y: 260, name: 'INDIRANAGAR', signal: '#10b981' },
                    { id: 'NODE-BLR-05', x: 540, y: 120, name: 'OLD AIRPORT', signal: '#f59e0b' },
                    { id: 'NODE-BLR-06', x: 540, y: 260, name: 'MANIPAL HOSP', signal: '#10b981' },
                  ].map((node) => {
                    const isTarget = node.id === selectedJunction;
                    return (
                      <g
                        key={node.id}
                        className="cursor-pointer"
                        onClick={() => setSelectedJunction(node.id)}
                      >
                        <rect
                          x={node.x - 18}
                          y={node.y - 18}
                          width="36"
                          height="36"
                          fill="#0c1017"
                          stroke={isTarget ? '#F4511E' : '#334155'}
                          strokeWidth={isTarget ? 2 : 1}
                        />
                        <circle cx={node.x} cy={node.y} r="5" fill={node.signal} />
                        <text x={node.x} y={node.y + 28} fill="#8A8A8A" fontSize="8" fontFamily="monospace" textAnchor="middle">
                          {node.name}
                        </text>
                        {isTarget && (
                          <rect
                            x={node.x - 22}
                            y={node.y - 22}
                            width="44"
                            height="44"
                            fill="none"
                            stroke="#F4511E"
                            strokeWidth="0.8"
                            strokeDasharray="2 2"
                          />
                        )}
                      </g>
                    );
                  })}

                  {/* Destination Marker */}
                  <circle cx="620" cy="260" r="10" stroke="#10b981" strokeWidth="2" fill="none" />
                  <text x="620" y="295" fill="#10b981" fontSize="9" fontFamily="monospace" textAnchor="middle">
                    DEST: TRAUMA ER
                  </text>
                </svg>

                {/* Corner Coordinates Overlay */}
                <div className="absolute top-2 left-2 bg-black/90 px-2 py-1 border border-white/10 font-mono text-[9px] text-[#8A8A8A]">
                  GRID_ID: IND-BLR-SEC4 // ELEVATION: 920m
                </div>

                <div className="absolute bottom-2 right-2 bg-black/90 px-2 py-1 border border-white/10 font-mono text-[9px] text-white">
                  SELECTED: <span className="text-[#F4511E] font-bold">{selectedJunction}</span>
                </div>
              </div>

              {/* Bottom Quick-Switch Junction Buttons */}
              <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-white/10 font-mono text-xs">
                {junctionList.map((j) => (
                  <button
                    key={j.id}
                    onClick={() => setSelectedJunction(j.id)}
                    className={`px-2.5 py-1 text-[11px] border transition-colors ${
                      selectedJunction === j.id
                        ? 'bg-[#F4511E] text-black font-bold border-[#F4511E]'
                        : 'bg-black/50 text-[#8A8A8A] border-white/10 hover:border-white/30'
                    }`}
                  >
                    {j.id.split('-')[2]}: {j.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right 4 Cols: Live Telemetry Feeds & Signal Phase Countdown */}
            <div className="lg:col-span-4 border border-white/15 bg-black/60 p-4 flex flex-col justify-between font-mono text-xs">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="text-[#F4511E] font-bold flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#F4511E]" />
                    NODE TELEMETRY METRICS
                  </span>
                  <span className="text-[#8A8A8A]">{currentJunction.id}</span>
                </div>

                <div className="space-y-3">
                  {/* Signal State & Countdown Box */}
                  <div className="p-3 border border-white/10 bg-black/40">
                    <div className="text-[10px] text-[#8A8A8A]">SIGNAL PHASE STATE</div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-base font-bold text-white">GREEN_PREEMPTION</span>
                      </div>
                      <span className="text-xl font-black text-[#F4511E]">{countdownSeconds}s</span>
                    </div>
                  </div>

                  {/* Traffic Density Bar */}
                  <div className="p-3 border border-white/10 bg-black/40">
                    <div className="flex justify-between text-[10px] text-[#8A8A8A]">
                      <span>TRAFFIC DENSITY</span>
                      <span className="text-white font-bold">{currentJunction.density}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 mt-1.5 overflow-hidden">
                      <div
                        className="h-full bg-[#F4511E]"
                        style={{ width: `${currentJunction.density}%` }}
                      />
                    </div>
                  </div>

                  {/* Camera & FPS Status */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 border border-white/10 bg-black/40">
                      <div className="text-[9px] text-[#8A8A8A]">INFERENCE RATE</div>
                      <div className="text-white font-bold mt-0.5">{currentJunction.fps} FPS</div>
                    </div>
                    <div className="p-2.5 border border-white/10 bg-black/40">
                      <div className="text-[9px] text-[#8A8A8A]">LOCAL NPU LOAD</div>
                      <div className="text-emerald-400 font-bold mt-0.5">42% (14.2W)</div>
                    </div>
                  </div>

                  {/* Safety Envelope Status */}
                  <div className="p-3 border border-[#F4511E]/30 bg-[#F4511E]/5">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#F4511E] font-bold">
                      <ShieldAlert className="w-3 h-3 text-[#F4511E]" />
                      BOUNDED ENVELOPE VERIFICATION
                    </div>
                    <div className="text-[11px] text-[#F3F3F0]/90 mt-1 font-sans">
                      Pedestrian clearance satisfied (14s minimum green elapsed). No conflict signals detected.
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Raw Terminal Trace */}
              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-[#8A8A8A] font-mono leading-tight space-y-1">
                <div>[ACK] CORRIDOR_ADVANCE // NEXT HOOP 520M</div>
                <div>[NEMA-TS2] RELAY_ACTUATE // PHASE 02 HOLD</div>
                <div className="text-emerald-400">[CRC32] CHECKSUM_VERIFIED_VALID</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
