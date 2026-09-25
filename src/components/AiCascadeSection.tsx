import React, { useState, useEffect } from 'react';
import { Eye, Zap, AlertTriangle, ShieldCheck, CheckCircle2, RefreshCw, Layers } from 'lucide-react';

export const AiCascadeSection: React.FC = () => {
  const [cascadeState, setCascadeState] = useState<'idle' | 'scanning' | 'anomaly' | 'tier2' | 'corroborating' | 'fused'>('fused');
  const [confidenceScore, setConfidenceScore] = useState(96.4);
  const [isSimulating, setIsSimulating] = useState(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setCascadeState('scanning');
    setConfidenceScore(12.0);

    setTimeout(() => {
      setCascadeState('anomaly');
      setConfidenceScore(48.5);
    }, 900);

    setTimeout(() => {
      setCascadeState('tier2');
      setConfidenceScore(81.2);
    }, 1800);

    setTimeout(() => {
      setCascadeState('corroborating');
      setConfidenceScore(91.8);
    }, 2600);

    setTimeout(() => {
      setCascadeState('fused');
      setConfidenceScore(97.8);
      setIsSimulating(false);
    }, 3400);
  };

  return (
    <section id="ai-cascade" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">05</span>
            <span>//</span>
            <span>INFERENCE CASCADE ARCHITECTURE</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            power-conscious multi-stage verification
          </div>
          <div className="hidden sm:block text-[11px]">
            TIER-1 (18W) → TIER-2 (EVENT-TRIGGERED)
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-[52px] sm:text-[76px] md:text-[96px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter">
              AI THAT
              <br />
              KNOWS WHEN
              <br />
              <span className="text-[#F4511E]">TO LOOK CLOSER.</span>
            </h2>
            <p className="mt-4 text-[#8A8A8A] max-w-xl text-base sm:text-lg">
              Running heavy transformer architectures 24/7 across every camera wastes megawatts and overheats edge cabinets. 
              Project-K uses an intelligent two-tier inference cascade: lightweight continuous spatial filtering, escalating to heavy optical verification only on trigger.
            </p>
          </div>

          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="px-6 py-3.5 bg-[#F4511E] text-black font-mono font-bold text-sm tracking-wider uppercase hover:bg-white transition-colors flex items-center gap-2 self-start lg:self-end"
          >
            <RefreshCw className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'SIMULATING CASCADE...' : 'TRIGGER CASCADE SIMULATION'}</span>
          </button>
        </div>

        {/* Two Tier Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Tier 1 Card */}
          <div className="border border-white/15 bg-[#080808] p-6 relative overflow-hidden crosshair-corner">
            <div className="flex items-center justify-between text-xs font-mono mb-4 border-b border-white/10 pb-3">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                TIER 01 // CONTINUOUS
              </span>
              <span className="text-[#8A8A8A]">LATENCY: ~18ms | 30 FPS</span>
            </div>

            <div className="font-display text-3xl sm:text-4xl font-black text-white uppercase">
              ALWAYS-ON
              <br />
              <span className="text-[#F4511E]">LIGHTWEIGHT DETECTION</span>
            </div>

            <p className="text-sm text-[#8A8A8A] mt-4 leading-relaxed font-sans">
              Ultra-compact YOLOv8-nano neural networks running on low power. Tracks bounding boxes, vehicle classifications, headway spacing, velocity vectors, and queue congestion meters without burning excessive watts.
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2 border border-white/5 bg-black/40">
                <div className="text-[10px] text-[#8A8A8A]">MODEL WEIGHT</div>
                <div className="text-white font-bold mt-0.5">3.2 MB (INT8)</div>
              </div>
              <div className="p-2 border border-white/5 bg-black/40">
                <div className="text-[10px] text-[#8A8A8A]">DETECTION TARGETS</div>
                <div className="text-white font-bold mt-0.5">SPEED, DENSITY, QUEUE</div>
              </div>
            </div>
          </div>

          {/* Tier 2 Card */}
          <div className="border border-[#F4511E]/40 bg-[#0a0705] p-6 relative overflow-hidden crosshair-corner">
            <div className="flex items-center justify-between text-xs font-mono mb-4 border-b border-[#F4511E]/20 pb-3">
              <span className="text-[#F4511E] font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#F4511E]" />
                TIER 02 // EVENT TRIGGERED
              </span>
              <span className="text-[#8A8A8A]">HIGH-RES VERIFICATION</span>
            </div>

            <div className="font-display text-3xl sm:text-4xl font-black text-white uppercase">
              ON-TRIGGER
              <br />
              <span className="text-[#F4511E]">SPECIALIZED VERIFICATION</span>
            </div>

            <p className="text-sm text-[#F3F3F0]/90 mt-4 leading-relaxed font-sans">
              Awakens immediately upon sudden deceleration, kinematic trajectory anomalies, or optical siren flicker. Executes heavy spatial-temporal transformers to classify emergency vehicles and collision severity.
            </p>

            <div className="mt-6 pt-4 border-t border-[#F4511E]/20 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2 border border-[#F4511E]/20 bg-[#F4511E]/5">
                <div className="text-[10px] text-[#8A8A8A]">MODEL ARCHITECTURE</div>
                <div className="text-[#F4511E] font-bold mt-0.5">CONVNEXT-T + ST-GCN</div>
              </div>
              <div className="p-2 border border-[#F4511E]/20 bg-[#F4511E]/5">
                <div className="text-[10px] text-[#8A8A8A]">FALSE POSITIVE REJECTION</div>
                <div className="text-emerald-400 font-bold mt-0.5">&gt; 99.2% ACCURACY</div>
              </div>
            </div>
          </div>

        </div>

        {/* Live Step-By-Step Cascade Pipe with Animation */}
        <div className="border border-white/20 bg-[#080808] p-6 sm:p-8 crosshair-corner">
          <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-4 mb-6">
            <span className="text-[#8A8A8A]">
              END-TO-END VERIFICATION FLOW: CCTV → TIER 1 → ANOMALY → TIER 2 → PEER MESH → FUSED ACTION
            </span>
            <span className="text-[#F4511E] font-bold">
              CURRENT STATUS: {cascadeState.toUpperCase()}
            </span>
          </div>

          {/* Interactive Steps Visual */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
            
            {/* Step 1 */}
            <div className={`p-3 border transition-colors ${
              cascadeState !== 'idle' ? 'border-white/30 bg-white/5' : 'border-white/10 opacity-50'
            }`}>
              <div className="text-[10px] text-[#F4511E]">STAGE 01</div>
              <div className="font-bold text-white mt-1">CCTV FEED</div>
              <div className="text-[11px] text-[#8A8A8A] mt-1 font-sans">Raw optical frames at 30 FPS</div>
            </div>

            {/* Step 2 */}
            <div className={`p-3 border transition-colors ${
              ['anomaly', 'tier2', 'corroborating', 'fused'].includes(cascadeState) ? 'border-white/40 bg-white/5' : 'border-white/10 opacity-50'
            }`}>
              <div className="text-[10px] text-[#F4511E]">STAGE 02</div>
              <div className="font-bold text-white mt-1">TIER 1 DETECT</div>
              <div className="text-[11px] text-[#8A8A8A] mt-1 font-sans">Kinematic delta &gt; threshold</div>
            </div>

            {/* Step 3 */}
            <div className={`p-3 border transition-colors ${
              ['anomaly', 'tier2', 'corroborating', 'fused'].includes(cascadeState) ? 'border-[#F4511E] bg-[#F4511E]/10' : 'border-white/10 opacity-50'
            }`}>
              <div className="text-[10px] text-[#F4511E]">STAGE 03</div>
              <div className="font-bold text-[#F4511E] mt-1">ANOMALY TRIGGER</div>
              <div className="text-[11px] text-white/80 mt-1 font-sans">Wake-up signal to Tier-2 NPU</div>
            </div>

            {/* Step 4 */}
            <div className={`p-3 border transition-colors ${
              ['tier2', 'corroborating', 'fused'].includes(cascadeState) ? 'border-white/40 bg-white/5' : 'border-white/10 opacity-50'
            }`}>
              <div className="text-[10px] text-[#F4511E]">STAGE 04</div>
              <div className="font-bold text-white mt-1">TIER 2 VERIFY</div>
              <div className="text-[11px] text-[#8A8A8A] mt-1 font-sans">Siren / impact classification</div>
            </div>

            {/* Step 5 */}
            <div className={`p-3 border transition-colors ${
              ['corroborating', 'fused'].includes(cascadeState) ? 'border-white/40 bg-white/5' : 'border-white/10 opacity-50'
            }`}>
              <div className="text-[10px] text-[#F4511E]">STAGE 05</div>
              <div className="font-bold text-white mt-1">PEER CORROBORATION</div>
              <div className="text-[11px] text-[#8A8A8A] mt-1 font-sans">Mesh ping to adjacent pole</div>
            </div>

            {/* Step 6 */}
            <div className={`p-3 border transition-colors ${
              cascadeState === 'fused' ? 'border-[#F4511E] bg-[#F4511E] text-black font-bold' : 'border-white/10 opacity-50'
            }`}>
              <div className={`text-[10px] ${cascadeState === 'fused' ? 'text-black' : 'text-[#F4511E]'}`}>STAGE 06</div>
              <div className="mt-1">EMERGENCY EVENT</div>
              <div className={`text-[11px] mt-1 font-sans ${cascadeState === 'fused' ? 'text-black' : 'text-[#8A8A8A]'}`}>
                Signal Preemption Authorized
              </div>
            </div>

          </div>

          {/* Confidence Meter Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-[#8A8A8A]">FUSED CONFIDENCE SCORE:</span>
              <span className="text-xl font-bold text-[#F4511E]">{confidenceScore.toFixed(1)}%</span>
              <span className="text-zinc-500">[MIN THRESHOLD: 85.0%]</span>
            </div>

            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>PREEMPTION THRESHOLD SURPASSED</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
