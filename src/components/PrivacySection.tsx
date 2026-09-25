import React, { useState } from 'react';
import { ShieldCheck, Lock, ArrowRight, EyeOff, FileText, Check, Database } from 'lucide-react';
import { EdgeTelemetryPayload } from '../types';

export const PrivacySection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const samplePayload: EdgeTelemetryPayload = {
    node_id: 'PK-NODE-BLR-0412',
    timestamp: '2026-09-21T11:08:42.118Z',
    density_percent: 78.4,
    event_class: 'AMBULANCE_APPROACH',
    severity: 'CRITICAL',
    confidence_score: 0.982,
    active_preemption: true,
    ttl_seconds: 45,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(samplePayload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="privacy" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">08</span>
            <span>//</span>
            <span>DATA SOVEREIGNTY & PRIVACY AIRGAP</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            zero facial recognition, zero license plate streaming
          </div>
          <div className="hidden sm:block text-[11px]">
            ARCHITECTURAL PRIVACY BY DESIGN
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-12">
          <h2 className="font-display text-[52px] sm:text-[76px] md:text-[96px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter">
            THE CLOUD DOESN'T
            <br />
            <span className="text-[#F4511E]">NEED THE PICTURE.</span>
          </h2>
          <p className="mt-4 text-[#8A8A8A] max-w-2xl text-base sm:text-lg">
            Municipal surveillance programs routinely face severe public privacy backlash due to invasive facial tracking and central bulk storage of vehicle movements. 
            Project-K enforces a hardware-enforced airgap: <strong className="text-white">Raw video never leaves the pole</strong>. Only mathematical JSON telemetry is transmitted.
          </p>
        </div>

        {/* Strong Vertical Dividing Line Schematic */}
        <div className="border border-white/20 bg-[#080808] p-6 sm:p-8 crosshair-corner">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
            
            {/* Left Side: Inside The Intersection */}
            <div className="lg:col-span-5 flex flex-col justify-between p-4 sm:p-6 border border-white/10 bg-black/50">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                  <span className="text-white font-bold flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-[#F4511E]" />
                    INSIDE THE INTERSECTION (POLE HARDWARE)
                  </span>
                  <span className="text-emerald-400">ISOLATED</span>
                </div>

                <div className="mt-6 space-y-4 font-mono text-xs">
                  <div className="p-3 border border-white/10 bg-white/[0.02]">
                    <div className="text-[10px] text-[#8A8A8A]">HIGH-BANDWIDTH OPTICAL</div>
                    <div className="text-white font-bold text-sm mt-0.5">RAW VIDEO FEEDS (1080p)</div>
                    <p className="text-[11px] text-[#8A8A8A] font-sans mt-1">
                      Continuous RTSP camera stream ingested directly into physical RAM over shielded copper.
                    </p>
                  </div>

                  <div className="p-3 border border-white/10 bg-white/[0.02]">
                    <div className="text-[10px] text-[#8A8A8A]">VOLATILE MEMORY ONLY</div>
                    <div className="text-white font-bold text-sm mt-0.5">30-SEC ROLLING RAM BUFFER</div>
                    <p className="text-[11px] text-[#8A8A8A] font-sans mt-1">
                      No disk or solid-state writes. Once frames are interpreted by the NPU, bits are overwritten in memory.
                    </p>
                  </div>

                  <div className="p-3 border border-white/10 bg-white/[0.02]">
                    <div className="text-[10px] text-[#8A8A8A]">LOCAL COMPUTE</div>
                    <div className="text-white font-bold text-sm mt-0.5">LOCAL NEURAL EMBEDDING</div>
                    <p className="text-[11px] text-[#8A8A8A] font-sans mt-1">
                      Extracts non-reversible spatial vectors: vehicle count, velocity vectors, and strobe wavelengths.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#F4511E] flex items-center gap-2">
                <EyeOff className="w-4 h-4 shrink-0" />
                <span>ZERO PIXELS EXPORTED BEYOND POLE CABINET</span>
              </div>
            </div>

            {/* Center Divider: Strict Data Boundary Firewall */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-6 px-2 border-y lg:border-y-0 lg:border-x border-white/15 bg-[#050505] text-center font-mono">
              <div className="w-2.5 h-2.5 bg-[#F4511E] rounded-full animate-ping mb-3" />
              <div className="text-xs font-black text-[#F4511E] uppercase tracking-widest">
                DATA
                <br />
                BOUNDARY
              </div>
              <div className="text-[10px] text-[#8A8A8A] mt-2">
                CRYPTOGRAPHIC
                <br />
                FILTER
              </div>
              <div className="my-4 w-full h-[1px] bg-white/10" />
              <div className="text-[9px] text-zinc-500 font-sans">
                Non-reversible mathematical abstraction
              </div>
            </div>

            {/* Right Side: Outside The Intersection (Cloud Metadata Ingestion) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-4 sm:p-6 border border-[#F4511E]/40 bg-[#0a0705]">
              <div>
                <div className="flex items-center justify-between border-b border-[#F4511E]/20 pb-3 text-xs font-mono">
                  <span className="text-[#F4511E] font-bold flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-[#F4511E]" />
                    OUTSIDE (CLOUD METADATA INGESTION)
                  </span>
                  <span className="text-white font-bold">&lt; 2 KB PAYLOAD</span>
                </div>

                {/* Structured JSON Payload Inspector */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#8A8A8A] mb-2">
                    <span>STRUCTURED TELEMETRY PAYLOAD</span>
                    <button
                      onClick={handleCopy}
                      className="text-[#F4511E] hover:text-white transition-colors flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                      <span>{copied ? 'COPIED' : 'COPY JSON'}</span>
                    </button>
                  </div>

                  <pre className="p-3 bg-black/90 border border-white/10 text-emerald-400 font-mono text-[11px] overflow-x-auto leading-relaxed">
{JSON.stringify(samplePayload, null, 2)}
                  </pre>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4511E]/20 text-xs font-mono text-white flex items-center justify-between">
                <span>GDPR / DPDP ACT COMPLIANT</span>
                <span className="text-[#F4511E] font-bold">ANONYMIZED BY DESIGN</span>
              </div>
            </div>

          </div>

          {/* Bottom Statement Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="text-base sm:text-lg font-display font-black text-white uppercase tracking-wide">
              "RAW VIDEO STAYS LOCAL. ONLY STRUCTURED INSIGHTS PROPAGATE."
            </div>
            <div className="text-[#F4511E] font-bold">
              BANDWIDTH REDUCTION: 99.8% VS STREAMING NVR
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
