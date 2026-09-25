import React, { useState, useEffect } from 'react';
import { ArrowDown, AlertOctagon, Clock, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeStepK, setActiveStepK] = useState(0);
  const [activeStepLegacy, setActiveStepLegacy] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStepK((prev) => (prev + 1) % 6);
      setActiveStepLegacy((prev) => (prev + 1) % 6);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const legacySteps = [
    { title: 'ACCIDENT', delay: '00:00', desc: 'Severe collision occurs at signalized junction' },
    { title: 'WITNESS', delay: '+02:30', desc: 'Bystander stops, observes, finds phone' },
    { title: 'REPORT', delay: '+05:00', desc: 'Dialing emergency dispatch center (112/911)' },
    { title: 'DISPATCH', delay: '+08:00', desc: 'Operator triages call and assigns nearest EMS' },
    { title: 'TRAFFIC', delay: '+18:00', desc: 'Ambulance trapped in dense intersection queues' },
    { title: 'HOSPITAL', delay: '+28:00', desc: 'Arrival at trauma bay — golden hour compromised' },
  ];

  const projectKSteps = [
    { title: 'ACCIDENT', delay: '00:00', desc: 'Collision occurs within camera field of view' },
    { title: 'AI DETECTION', delay: '+00:00.8', desc: 'Local Node Box detects kinematic impact anomaly (<800ms)' },
    { title: 'VERIFICATION', delay: '+00:02.1', desc: 'Tier-2 cascade verifies severity & triggers mesh corroboration' },
    { title: 'ROUTE', delay: '+00:03.5', desc: 'Cloud calculates multi-intersection optimal response path' },
    { title: 'GREEN CORRIDOR', delay: '+00:05.0', desc: 'Bounded overrides clear queued vehicles 500m ahead of arrival' },
    { title: 'HOSPITAL', delay: 'TARGET: -38%', desc: 'Uninterrupted transit with continuous signal preemption' },
  ];

  return (
    <section id="problem" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">02</span>
            <span>//</span>
            <span>THE BOTTLENECK CHAIN</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            every cumulative minute increases mortality risk
          </div>
          <div className="hidden sm:block text-[11px]">
            HUMAN-DISPATCH INERTIA vs AUTONOMOUS CORRIDOR
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="font-display text-[52px] sm:text-[76px] md:text-[96px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter">
            THE DELAY IS
            <br />
            <span className="text-[#F4511E]">THE PROBLEM.</span>
          </h2>
          <p className="mt-4 text-[#8A8A8A] max-w-2xl text-base sm:text-lg">
            Emergency survival is a direct mathematical function of transit latency. 
            The traditional emergency response loop is choked by human observation delays, dispatch queues, and impassable red-light vehicle lines.
          </p>
        </div>

        {/* Visual Contrast: Legacy Chain vs Project-K Chain */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Legacy Response Chain */}
          <div className="lg:col-span-5 border border-white/10 bg-[#080808] p-6 flex flex-col justify-between crosshair-corner">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                <span className="text-[#8A8A8A] flex items-center gap-1.5">
                  <AlertOctagon className="w-3.5 h-3.5 text-zinc-500" />
                  LEGACY RESPONSE CHAIN
                </span>
                <span className="text-zinc-500">EST: 20-30 MINS</span>
              </div>

              <div className="mt-6 space-y-4 font-mono">
                {legacySteps.map((step, idx) => {
                  const isActive = idx === activeStepLegacy;
                  return (
                    <div
                      key={step.title}
                      className={`relative p-3 border transition-all duration-300 ${
                        isActive
                          ? 'border-zinc-500 bg-white/5'
                          : 'border-white/5 bg-transparent opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-zinc-300">
                          {idx + 1}. {step.title}
                        </span>
                        <span className="text-xs text-zinc-500">{step.delay}</span>
                      </div>
                      <p className="text-[11px] text-[#8A8A8A] mt-1 font-sans">
                        {step.desc}
                      </p>

                      {idx < legacySteps.length - 1 && (
                        <div className="absolute -bottom-3 left-6 z-10">
                          <ArrowDown className="w-3 h-3 text-zinc-600" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-zinc-500 flex items-center justify-between">
              <span>OUTCOME: CRITICAL DELAY ACCUMULATION</span>
              <span className="text-red-400">UNCOORDINATED</span>
            </div>
          </div>

          {/* Middle Decorative Arrow / Contrast Indicator */}
          <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center border-y lg:border-y-0 lg:border-x border-white/10 py-6 px-2 text-center font-mono">
            <span className="text-[10px] text-[#8A8A8A] tracking-widest uppercase">
              TRANSFORMATION
            </span>
            <div className="my-6 w-full h-[1px] bg-white/10 relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-2 text-xs text-[#F4511E]">
                VS
              </span>
            </div>
            <div className="font-display text-4xl text-[#F4511E] font-black">
              AUTONOMOUS
            </div>
            <div className="font-hand text-[#F4511E] text-base mt-2">
              zero human dispatch lag
            </div>
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F4511E] animate-ping" />
              <span className="text-[9px] text-[#8A8A8A]">BOUNDED OVERRIDE ACTIVATION</span>
            </div>
          </div>

          {/* Right Column: Project-K Responsive Chain */}
          <div className="lg:col-span-5 border border-[#F4511E]/40 bg-[#0a0705] p-6 flex flex-col justify-between crosshair-corner">
            <div>
              <div className="flex items-center justify-between border-b border-[#F4511E]/20 pb-3 text-xs font-mono">
                <span className="text-[#F4511E] font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#F4511E]" />
                  PROJECT-K INTELLIGENT CHAIN
                </span>
                <span className="text-[#F4511E] font-bold">SUB-SECOND TRIGGER</span>
              </div>

              <div className="mt-6 space-y-4 font-mono">
                {projectKSteps.map((step, idx) => {
                  const isActive = idx === activeStepK;
                  return (
                    <div
                      key={step.title}
                      className={`relative p-3 border transition-all duration-300 ${
                        isActive
                          ? 'border-[#F4511E] bg-[#F4511E]/10 shadow-[0_0_12px_rgba(244,81,30,0.2)]'
                          : 'border-white/10 bg-black/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#F3F3F0] flex items-center gap-1.5">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${isActive ? 'text-[#F4511E]' : 'text-zinc-600'}`} />
                          {idx + 1}. {step.title}
                        </span>
                        <span className="text-xs font-bold text-[#F4511E]">{step.delay}</span>
                      </div>
                      <p className="text-[11px] text-[#F3F3F0]/90 mt-1 font-sans">
                        {step.desc}
                      </p>

                      {idx < projectKSteps.length - 1 && (
                        <div className="absolute -bottom-3 left-6 z-10">
                          <ArrowDown className="w-3 h-3 text-[#F4511E]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F4511E]/20 text-xs font-mono text-[#F4511E] flex items-center justify-between">
              <span>TARGET OUTCOME: ACCIDENT-TO-GREEN &lt; 5 SECONDS</span>
              <span className="text-emerald-400 font-bold">GREEN CORRIDOR</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
