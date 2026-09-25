import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, AlertTriangle, ShieldCheck, Zap, Activity } from 'lucide-react';
import { CorridorPhase } from '../types';

interface IntersectionState {
  id: string;
  name: string;
  distanceMeters: number;
  phase: CorridorPhase;
  signal: 'RED' | 'YELLOW' | 'GREEN';
  queueCars: number; // count of waiting cars
  ambulancePassed: boolean;
}

export const EmergencyCorridorSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [ambulanceProgress, setAmbulanceProgress] = useState<number>(10); // 0 to 100%
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);

  const initialIntersections: IntersectionState[] = [
    { id: 'INT-01', name: 'JUNCTION 01 (EAST GATE)', distanceMeters: 200, phase: 'IDLE', signal: 'RED', queueCars: 8, ambulancePassed: false },
    { id: 'INT-02', name: 'JUNCTION 02 (MARKET CIRCLE)', distanceMeters: 600, phase: 'IDLE', signal: 'RED', queueCars: 14, ambulancePassed: false },
    { id: 'INT-03', name: 'JUNCTION 03 (CIVIC SQUARE)', distanceMeters: 1000, phase: 'IDLE', signal: 'RED', queueCars: 11, ambulancePassed: false },
    { id: 'INT-04', name: 'JUNCTION 04 (METRO FLYOVER)', distanceMeters: 1400, phase: 'IDLE', signal: 'RED', queueCars: 16, ambulancePassed: false },
    { id: 'INT-05', name: 'JUNCTION 05 (HOSPITAL GATE)', distanceMeters: 1800, phase: 'IDLE', signal: 'RED', queueCars: 6, ambulancePassed: false },
  ];

  const [intersections, setIntersections] = useState<IntersectionState[]>(initialIntersections);

  // Simulation animation loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setAmbulanceProgress((prev) => {
        if (prev >= 98) {
          return 0; // loop
        }
        return prev + 0.8 * speedMultiplier;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, speedMultiplier]);

  // Update intersection phases according to ambulance distance
  useEffect(() => {
    const totalDistance = 2000;
    const currentAmbulanceMeters = (ambulanceProgress / 100) * totalDistance;

    setIntersections((prev) =>
      prev.map((node) => {
        const delta = node.distanceMeters - currentAmbulanceMeters;

        // Passed intersection
        if (delta < -80) {
          return {
            ...node,
            phase: 'RELEASE',
            signal: 'GREEN',
            queueCars: 0,
            ambulancePassed: true,
          };
        }

        // Ambulance inside or right at intersection
        if (delta <= 50 && delta >= -80) {
          return {
            ...node,
            phase: 'GRANT',
            signal: 'GREEN',
            queueCars: 0,
            ambulancePassed: false,
          };
        }

        // Ambulance 150m to 50m away -> ACK / Draining queue
        if (delta > 50 && delta <= 300) {
          const drainedCars = Math.max(0, Math.floor((delta / 300) * 8));
          return {
            ...node,
            phase: 'ACK',
            signal: 'GREEN',
            queueCars: drainedCars,
            ambulancePassed: false,
          };
        }

        // Ambulance 300m to 600m away -> RESERVE ahead of time
        if (delta > 300 && delta <= 700) {
          return {
            ...node,
            phase: 'RESERVE',
            signal: 'YELLOW',
            queueCars: node.queueCars,
            ambulancePassed: false,
          };
        }

        // Far away -> IDLE standard cycle
        return {
          ...node,
          phase: 'IDLE',
          signal: 'RED',
          queueCars: node.queueCars,
          ambulancePassed: false,
        };
      })
    );
  }, [ambulanceProgress]);

  const handleReset = () => {
    setAmbulanceProgress(0);
    setIntersections(initialIntersections);
  };

  return (
    <section id="corridor" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">06</span>
            <span>//</span>
            <span>REAL-TIME ACTUATION SIMULATOR</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            predictive queue clearance protocol
          </div>
          <div className="hidden sm:block text-[11px]">
            PROTOCOL: RESERVE → ACK → GRANT → RELEASE
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display text-[52px] sm:text-[76px] md:text-[96px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter">
              CLEAR THE ROAD
              <br />
              BEFORE THE
              <br />
              <span className="text-[#F4511E]">AMBULANCE ARRIVES.</span>
            </h2>
            <p className="mt-4 text-[#8A8A8A] max-w-xl text-base sm:text-lg">
              Preemption cannot simply turn red lights to green the second an ambulance appears at a junction. 
              If 40 cars are stalled at the stop line, a green light traps the ambulance behind a standstill queue. 
              Project-K calculates vehicle discharge rates, clearing standing queues 450 meters before arrival.
            </p>
          </div>

          {/* Interactive Simulator Controls */}
          <div className="flex items-center gap-3 bg-[#080808] p-3 border border-white/15 self-start lg:self-end font-mono text-xs">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-2 bg-[#F4511E] text-black font-bold flex items-center gap-1.5 hover:bg-white transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'PAUSE' : 'RESUME'}</span>
            </button>

            <button
              onClick={handleReset}
              className="px-3 py-2 border border-white/10 text-white hover:border-white/30 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESET</span>
            </button>

            <div className="flex items-center gap-1 text-[11px] text-[#8A8A8A] pl-2 border-l border-white/10">
              <span>SPEED:</span>
              <button
                onClick={() => setSpeedMultiplier(1)}
                className={`px-1.5 py-0.5 ${speedMultiplier === 1 ? 'text-[#F4511E] font-bold' : 'text-zinc-500'}`}
              >
                1X
              </button>
              <button
                onClick={() => setSpeedMultiplier(2)}
                className={`px-1.5 py-0.5 ${speedMultiplier === 2 ? 'text-[#F4511E] font-bold' : 'text-zinc-500'}`}
              >
                2X
              </button>
            </div>
          </div>
        </div>

        {/* Live Corridor Grid Visualization Canvas */}
        <div className="border border-white/20 bg-[#080808] p-4 sm:p-6 crosshair-corner mb-8 relative overflow-hidden">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#8A8A8A] pb-3 border-b border-white/10 mb-4">
            <span className="flex items-center gap-2 text-[#F4511E]">
              <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-ping" />
              LIVE ARTERIAL CORRIDOR // METROPOLITAN TRAFFIC CORRIDOR 07
            </span>
            <span>TOTAL LENGTH: 2.0 KM | ACTIVE VEHICLES: 142</span>
          </div>

          {/* Interactive Map Grid Container */}
          <div className="relative h-72 sm:h-96 w-full bg-[#050505] border border-white/10 overflow-hidden flex items-center">
            {/* Blueprint and scanlines */}
            <div className="absolute inset-0 bg-blueprint opacity-60 pointer-events-none" />
            <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

            {/* SVG Corridor Canvas */}
            <svg viewBox="0 0 1000 240" className="w-full h-full" preserveAspectRatio="none">
              {/* Main Arterial Road (West to East) */}
              <rect x="0" y="90" width="1000" height="60" fill="#0d0d0d" stroke="#222" strokeWidth="1" />
              
              {/* Lane Divider Dashed Line */}
              <line x1="0" y1="120" x2="1000" y2="120" stroke="#333" strokeWidth="1.5" strokeDasharray="12 8" />

              {/* Cross Street Cuts for 5 Intersections */}
              {[100, 300, 500, 700, 900].map((cx, idx) => (
                <g key={cx}>
                  {/* North-South road */}
                  <rect x={cx - 20} y="0" width="40" height="240" fill="#0d0d0d" stroke="#1f1f1f" strokeWidth="1" />
                  
                  {/* Intersection junction box */}
                  <rect x={cx - 22} y="88" width="44" height="64" fill="#141414" stroke="#444" strokeWidth="1" />
                  
                  {/* Cross street traffic queue simulation */}
                  <circle cx={cx} cy="45" r="4" fill="#333" />
                  <circle cx={cx} cy="65" r="4" fill="#333" />
                  <circle cx={cx} cy="175" r="4" fill="#333" />
                  <circle cx={cx} cy="195" r="4" fill="#333" />
                </g>
              ))}

              {/* Active Green Corridor Overlay Path */}
              <path
                d="M 0 120 L 1000 120"
                stroke="#F4511E"
                strokeWidth="4"
                opacity="0.3"
                strokeDasharray="4 4"
              />

              {/* Ambulance Moving Marker */}
              {(() => {
                const ambX = (ambulanceProgress / 100) * 980 + 10;
                return (
                  <g>
                    {/* Glowing pulse ripples */}
                    <circle cx={ambX} cy="120" r="18" stroke="#F4511E" strokeWidth="1" opacity="0.6" className="animate-ping" />
                    <circle cx={ambX} cy="120" r="10" fill="#F4511E" />
                    <text x={ambX} y="80" fill="#F4511E" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                      AMBULANCE 01
                    </text>
                    <line x1={ambX} y1="85" x2={ambX} y2="110" stroke="#F4511E" strokeWidth="1" />
                  </g>
                );
              })()}

              {/* Intersection Signal Indicators & Phase Annotations */}
              {[100, 300, 500, 700, 900].map((cx, idx) => {
                const node = intersections[idx];
                const signalColor = node.signal === 'GREEN' ? '#10b981' : node.signal === 'YELLOW' ? '#f59e0b' : '#ef4444';
                return (
                  <g key={node.id}>
                    {/* Signal light indicator */}
                    <circle cx={cx - 15} cy="82" r="5" fill={signalColor} />
                    <circle cx={cx - 15} cy="82" r="9" stroke={signalColor} strokeWidth="1" opacity="0.5" />

                    {/* Waiting queued cars in arterial direction */}
                    {Array.from({ length: Math.min(node.queueCars, 5) }).map((_, cIdx) => (
                      <rect
                        key={cIdx}
                        x={cx - 35 - cIdx * 14}
                        y="114"
                        width="10"
                        height="6"
                        fill="#666"
                        rx="1"
                      />
                    ))}

                    {/* Node status label */}
                    <text x={cx} y="175" fill="#8A8A8A" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      {node.id}
                    </text>
                    <text x={cx} y="190" fill={node.phase === 'GRANT' ? '#F4511E' : '#fff'} fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                      [{node.phase}]
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Protocol Progression Pill */}
            <div className="absolute top-3 left-3 bg-black/90 px-3 py-1.5 border border-white/10 font-mono text-[10px] text-[#8A8A8A] flex items-center gap-3">
              <span className="text-white">ACTIVE PROTOCOL:</span>
              <span className="text-zinc-500">RESERVE</span>
              <span>→</span>
              <span className="text-amber-400">ACK (DRAIN)</span>
              <span>→</span>
              <span className="text-[#F4511E] font-bold">GRANT</span>
              <span>→</span>
              <span className="text-emerald-400">RELEASE</span>
            </div>

            <div className="absolute bottom-3 right-3 bg-black/90 px-3 py-1.5 border border-white/10 font-mono text-[10px] text-white">
              ESTIMATED TIME TO TRAUMA BAY: <span className="text-[#F4511E] font-bold">04:12 MIN</span>
            </div>
          </div>

          {/* 5 Intersections Detailed Status Telemetry */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-3 font-mono text-xs">
            {intersections.map((node) => (
              <div
                key={node.id}
                className={`p-3 border transition-colors ${
                  node.phase === 'GRANT'
                    ? 'border-[#F4511E] bg-[#F4511E]/10'
                    : node.phase === 'ACK'
                    ? 'border-amber-500/50 bg-amber-500/5'
                    : 'border-white/10 bg-black/40'
                }`}
              >
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-[#8A8A8A]">{node.id}</span>
                  <span
                    className={`font-bold ${
                      node.signal === 'GREEN'
                        ? 'text-emerald-400'
                        : node.signal === 'YELLOW'
                        ? 'text-amber-400'
                        : 'text-red-400'
                    }`}
                  >
                    ● {node.signal}
                  </span>
                </div>

                <div className="font-bold text-white mt-1 text-sm">{node.phase}</div>
                <div className="text-[11px] text-[#8A8A8A] mt-1">
                  Queue: <span className="text-white">{node.queueCars} vehicles</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Space-Time Trajectory Diagram */}
        <div className="border border-white/15 bg-[#080808] p-6 crosshair-corner">
          <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3 mb-4">
            <span className="text-white font-bold">// SPACE-TIME TRAJECTORY COMPARISON (DISTANCE vs TIME)</span>
            <span className="text-[#F4511E]">TRAJECTORY SLOPE = VELOCITY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* SVG Trajectory Chart */}
            <div className="lg:col-span-8 bg-black/60 border border-white/10 p-3">
              <svg viewBox="0 0 600 220" className="w-full h-44" fill="none">
                {/* Axes */}
                <line x1="40" y1="180" x2="580" y2="180" stroke="#444" strokeWidth="1" />
                <line x1="40" y1="20" x2="40" y2="180" stroke="#444" strokeWidth="1" />

                {/* Axis Labels */}
                <text x="560" y="200" fill="#888" fontSize="10" fontFamily="monospace">TIME (s)</text>
                <text x="20" y="25" fill="#888" fontSize="10" fontFamily="monospace" transform="rotate(-90 20,25)">DISTANCE (m)</text>

                {/* Grid guidelines */}
                <line x1="40" y1="140" x2="580" y2="140" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="40" y1="100" x2="580" y2="100" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="40" y1="60" x2="580" y2="60" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />

                {/* Legacy Trajectory (Staircase / Stop-and-Go Red Light Delays) */}
                <path
                  d="M 40 180 L 100 160 L 180 160 L 240 120 L 340 120 L 400 70 L 520 70 L 560 30"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <text x="440" y="60" fill="#ef4444" fontSize="9" fontFamily="monospace">
                  LEGACY (STOP-AND-GO)
                </text>

                {/* Project-K Optimized Trajectory (Continuous Linear Green Wave Slope) */}
                <path
                  d="M 40 180 L 320 30"
                  stroke="#F4511E"
                  strokeWidth="3"
                />
                <text x="250" y="45" fill="#F4511E" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  PROJECT-K (PREEMPTIVE GREEN WAVE)
                </text>
              </svg>
            </div>

            {/* Explanation side notes */}
            <div className="lg:col-span-4 font-mono text-xs space-y-3">
              <div className="p-3 border border-white/10 bg-black/40">
                <div className="text-[#F4511E] font-bold">HORIZONTAL FLAT SECTIONS = RED LIGHT QUEUE WAITS</div>
                <div className="text-[#8A8A8A] mt-1 text-[11px] font-sans">
                  In legacy networks, an ambulance idles for up to 90 seconds per junction waiting for traffic to clear manually.
                </div>
              </div>

              <div className="p-3 border border-[#F4511E]/30 bg-[#F4511E]/5">
                <div className="text-white font-bold">CONTINUOUS CONSTANT SLOPE</div>
                <div className="text-[#F3F3F0]/80 mt-1 text-[11px] font-sans">
                  With Project-K, advance queue drainage eliminates zero-velocity stagnation periods, keeping transit speed steady.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
