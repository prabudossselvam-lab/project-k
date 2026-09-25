import React, { useState } from 'react';
import { Box, Layers, RefreshCw, AlertTriangle, CloudRain, Shield, ArrowRight } from 'lucide-react';

export const DigitalTwinSection: React.FC = () => {
  const [activeEdgeCase, setActiveEdgeCase] = useState<string>('mixed_traffic');

  const edgeCases = [
    {
      id: 'mixed_traffic',
      title: 'HETEROGENEOUS MIXED TRAFFIC',
      tag: 'COMPLEX DENSITY',
      desc: 'Simultaneous coexistence of auto-rickshaws, city buses, cycles, e-rickshaws, and two-wheelers weaving between lanes without fixed vehicle headway.',
      simulationSolution: 'Volumetric bounding cylinders and continuous trajectory probability density rather than rigid single-car lane slots.',
    },
    {
      id: 'wrong_way',
      title: 'WRONG-WAY CONTRARY TRAFFIC',
      tag: 'ANOMALY DETECT',
      desc: 'Vehicles or motorcycles traveling against designated one-way flows or turning across blind median dividers during peak congestion.',
      simulationSolution: 'Directional optical flow vectors immediately flag opposing kinematic vectors and withhold clearance grants to prevent T-bone collisions.',
    },
    {
      id: 'animals',
      title: 'STRAY ANIMAL & PEDESTRIAN SPILL',
      tag: 'NON-VEHICULAR',
      desc: 'Cattle, dogs, and spontaneous crowds encroaching into intersection clearance boxes outside marked zebra crossings.',
      simulationSolution: 'Biological entity segmentation dynamically expands intersection clearance margins before initiating cross-traffic phase green.',
    },
    {
      id: 'monsoon',
      title: 'MONSOON & WATERLOGGING HAZARDS',
      tag: 'ENVIRONMENTAL',
      desc: 'Severe torrential rainfall causing reflective puddle glare, obscured lane markings, and submerged road surfaces reducing tire traction.',
      simulationSolution: 'Reflective specular suppression algorithms estimate water depth from curb immersion metrics and throttle approach speed limits.',
    },
    {
      id: 'potholes',
      title: 'POTHOLES & UNPAVED SURFACES',
      tag: 'INFRASTRUCTURE DECAY',
      desc: 'Sudden braking maneuvers and erratic swerving caused by craters, speed-breaker anomalies, and ongoing unbarricaded municipal road cuts.',
      simulationSolution: 'Micro-deceleration telemetry maps roadway craters into digital twin surface meshes to alert emergency dispatch of rough routes.',
    },
    {
      id: 'poor_markings',
      title: 'ABSENT OR FADED LANE MARKINGS',
      tag: 'GEOMETRIC UNCERTAINTY',
      desc: 'Complete absence of thermo-plastic lane strips, causing informal dynamic lane formation (4 vehicles packed abreast in 2 theoretical lanes).',
      simulationSolution: 'Geometric clustering models virtual dynamic corridors from moving vehicle centroid envelopes rather than static painted lines.',
    },
  ];

  const selectedCase = edgeCases.find((e) => e.id === activeEdgeCase) || edgeCases[0];

  return (
    <section id="digital-twin" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">09</span>
            <span>//</span>
            <span>CHAOS SIMULATION & EDGE CASES</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            synthesizing complex Global South urban realities
          </div>
          <div className="hidden sm:block text-[11px]">
            REAL DATA → 3D SCENE → DIGITAL TWIN → SIMULATION
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-12">
          <h2 className="font-display text-[52px] sm:text-[76px] md:text-[96px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter">
            THE CITY BECOMES
            <br />
            <span className="text-[#F4511E]">A SIMULATION.</span>
          </h2>
          <p className="mt-4 text-[#8A8A8A] max-w-2xl text-base sm:text-lg">
            Western traffic models assume homogeneous car fleets, strict lane discipline, and immaculate painted lines. 
            Real urban environments are dense, chaotic, and non-linear. 
            Project-K feeds edge metadata into high-fidelity digital twins to train resilient emergency dispatch algorithms against extreme real-world edge cases.
          </p>
        </div>

        {/* Pipeline Progression Ribbon */}
        <div className="border border-white/15 bg-[#080808] p-4 sm:p-6 mb-8 crosshair-corner">
          <div className="text-xs font-mono text-[#8A8A8A] uppercase mb-3">
            CONTINUOUS REINFORCEMENT CYCLE
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
            {[
              { step: '01', title: 'REAL TRAFFIC DATA', desc: 'Continuous anonymized edge node vectors' },
              { step: '02', title: '3D SCENE RECON', desc: 'Synthetic spatial coordinate mesh' },
              { step: '03', title: 'DIGITAL TWIN', desc: 'Dynamic physics & queue replication' },
              { step: '04', title: 'SIMULATION ENGINE', desc: 'Stress-testing 10,000 extreme edge runs' },
              { step: '05', title: 'AI MODEL TRAINING', desc: 'Over-the-air verified weight updates' },
            ].map((p, idx) => (
              <div key={p.step} className="p-3 border border-white/10 bg-black/40 relative">
                <div className="text-[10px] text-[#F4511E] font-bold">{p.step} // STAGE</div>
                <div className="font-bold text-white mt-1">{p.title}</div>
                <p className="text-[11px] text-[#8A8A8A] mt-1 font-sans">{p.desc}</p>
                {idx < 4 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-white/20">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3D Wireframe Visualizer & Edge Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Wireframe Simulation Art Canvas */}
          <div className="lg:col-span-6 border border-white/20 bg-[#06080a] p-4 sm:p-6 crosshair-corner relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-blueprint opacity-80 pointer-events-none" />
            <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#8A8A8A] border-b border-white/10 pb-3 mb-4">
              <span className="text-white font-bold flex items-center gap-1.5">
                <Box className="w-3.5 h-3.5 text-[#F4511E]" />
                SYNTHETIC TWIN CANVAS // 3D ISOMETRIC JUNCTION
              </span>
              <span className="text-[#F4511E]">{selectedCase.tag}</span>
            </div>

            {/* Isometric Wireframe SVG */}
            <div className="relative z-10 w-full aspect-[4/3] bg-black/80 border border-white/10 overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 500 380" className="w-full h-full" fill="none">
                {/* Isometric Grid Floor Plane */}
                <g stroke="#1a2634" strokeWidth="0.75">
                  <line x1="250" y1="40" x2="450" y2="180" />
                  <line x1="250" y1="40" x2="50" y2="180" />
                  <line x1="50" y1="180" x2="250" y2="320" />
                  <line x1="450" y1="180" x2="250" y2="320" />

                  {/* Internal Grid Lines */}
                  <line x1="150" y1="110" x2="350" y2="250" />
                  <line x1="350" y1="110" x2="150" y2="250" />
                  <line x1="200" y1="75" x2="400" y2="215" />
                  <line x1="300" y1="75" x2="100" y2="215" />
                </g>

                {/* Isometric Road Ribbons */}
                <polygon points="210,70 290,70 340,290 160,290" fill="#0d141e" stroke="#F4511E" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <polygon points="90,150 410,150 410,210 90,210" fill="#0d141e" stroke="#F4511E" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />

                {/* Center Wireframe Intersection Cube */}
                <polygon points="250,150 290,175 250,200 210,175" fill="#141c28" stroke="#F4511E" strokeWidth="1.5" />
                <polygon points="210,175 250,200 250,240 210,215" fill="#0f1620" stroke="#F4511E" strokeWidth="1" />
                <polygon points="250,200 290,175 290,215 250,240" fill="#1a2536" stroke="#F4511E" strokeWidth="1" />

                {/* Mixed Traffic Entity Wireframes */}
                {/* Auto Rickshaw 3D bounding box */}
                <g stroke="#F4511E" strokeWidth="1.2">
                  <polygon points="170,165 195,178 185,195 160,182" fill="rgba(244,81,30,0.15)" />
                  <line x1="170" y1="165" x2="170" y2="150" />
                  <line x1="195" y1="178" x2="195" y2="163" />
                  <line x1="185" y1="195" x2="185" y2="180" />
                  <line x1="160" y1="182" x2="160" y2="167" />
                  <polygon points="170,150 195,163 185,180 160,167" fill="none" />
                  <text x="145" y="145" fill="#F4511E" fontSize="8" fontFamily="monospace">ENTITY: AUTO_3W</text>
                </g>

                {/* Ambulance Wireframe Cube with Pulsing Beacon */}
                <g stroke="#fff" strokeWidth="1.5">
                  <polygon points="280,190 330,220 310,245 260,215" fill="rgba(255,255,255,0.1)" />
                  <line x1="280" y1="190" x2="280" y2="170" />
                  <line x1="330" y1="220" x2="330" y2="200" />
                  <line x1="310" y1="245" x2="310" y2="225" />
                  <line x1="260" y1="215" x2="260" y2="195" />
                  <polygon points="280,170 330,200 310,225 260,195" fill="none" />
                  
                  {/* Glowing siren beacon */}
                  <circle cx="295" cy="195" r="4" fill="#F4511E" className="animate-ping" />
                  <text x="320" y="180" fill="#fff" fontSize="9" fontFamily="monospace" fontWeight="bold">EMS_PRIORITY</text>
                </g>

                {/* Edge case specific markings */}
                {activeEdgeCase === 'potholes' && (
                  <g>
                    <ellipse cx="230" cy="185" rx="14" ry="7" fill="rgba(239,68,68,0.3)" stroke="#ef4444" strokeWidth="1.5" />
                    <text x="210" y="170" fill="#ef4444" fontSize="8" fontFamily="monospace">HAZARD_POTHOLE (45cm)</text>
                  </g>
                )}

                {activeEdgeCase === 'monsoon' && (
                  <g stroke="#38bdf8" strokeWidth="0.8" opacity="0.6">
                    <line x1="120" y1="80" x2="100" y2="120" strokeDasharray="3 3" />
                    <line x1="220" y1="90" x2="200" y2="130" strokeDasharray="3 3" />
                    <line x1="340" y1="100" x2="320" y2="140" strokeDasharray="3 3" />
                    <line x1="180" y1="160" x2="160" y2="200" strokeDasharray="3 3" />
                    <text x="300" y="100" fill="#38bdf8" fontSize="8" fontFamily="monospace">WATERLOGGING: 12CM</text>
                  </g>
                )}

                {/* Coordinate marker */}
                <text x="30" y="360" fill="#888" fontSize="9" fontFamily="monospace">
                  ROTATION: 45° AZIMUTH | TILT: 30° ELEVATION | SYNTHETIC FRAMES: 1.4M
                </text>
              </svg>
            </div>

            <div className="relative z-10 mt-3 flex items-center justify-between text-[11px] font-mono text-[#8A8A8A]">
              <span>SIMULATOR: CARLA 0.9.15 + SUMO CO-SIMULATION</span>
              <span className="text-emerald-400">PHYSICS RIGID BODY: ACTIVE</span>
            </div>
          </div>

          {/* Right Edge Cases Interactive Selector */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-mono text-[#8A8A8A] uppercase tracking-wider mb-2">
                SELECT INDIAN-ROAD UNCERTAINTY PROFILE:
              </div>

              {edgeCases.map((ec) => {
                const isSelected = activeEdgeCase === ec.id;
                return (
                  <button
                    key={ec.id}
                    onClick={() => setActiveEdgeCase(ec.id)}
                    className={`w-full p-3.5 text-left border transition-all duration-200 font-mono text-xs ${
                      isSelected
                        ? 'border-[#F4511E] bg-[#0c0806] shadow-[0_0_12px_rgba(244,81,30,0.2)]'
                        : 'border-white/10 bg-[#080808] hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-bold ${isSelected ? 'text-[#F4511E]' : 'text-white'}`}>
                        {ec.title}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 border ${
                        isSelected ? 'border-[#F4511E]/40 text-[#F4511E]' : 'border-white/10 text-zinc-500'
                      }`}>
                        {ec.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8A8A8A] font-sans mt-1.5 leading-relaxed">
                      {ec.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Simulation Solution Output */}
            <div className="mt-4 p-4 border border-[#F4511E]/30 bg-[#F4511E]/5 font-mono text-xs">
              <div className="text-[#F4511E] font-bold mb-1">
                PROJECT-K ADAPTIVE MITIGATION STRATEGY:
              </div>
              <div className="text-[#F3F3F0] leading-relaxed font-sans text-xs">
                {selectedCase.simulationSolution}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
