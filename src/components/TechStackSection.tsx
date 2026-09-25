import React from 'react';
import { Cpu, Cloud, Database, Layout, Layers, Terminal } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const stackLayers = [
    {
      category: 'EDGE INFERENCE RUNTIME',
      plane: 'PLANE 01',
      icon: Cpu,
      technologies: [
        { name: 'ARMv8-A / Cortex-A78AE', role: 'Functional safety automotive compute cores' },
        { name: 'Dedicated NPU (INT8/INT4)', role: '32 TOPS hardware neural tensor accelerator' },
        { name: 'OpenCV C++ Pipeline', role: 'Zero-copy frame extraction & optical flow vectors' },
        { name: 'YOLOv8-nano (Custom)', role: 'Lightweight continuous spatial bounding inference' },
        { name: 'TensorFlow Lite / Micro', role: 'Embedded anomaly trigger models for strobe detection' },
        { name: 'ONNX Runtime Embedded', role: 'Cross-vendor unified neural model deployment' },
      ],
    },
    {
      category: 'CLOUD ORCHESTRATION',
      plane: 'PLANE 02',
      icon: Cloud,
      technologies: [
        { name: 'FastAPI (Python 3.12)', role: 'High-throughput async event ingestion gateway' },
        { name: 'Apache Kafka Cluster', role: 'Low-latency distributed telemetry log streaming' },
        { name: 'Docker / OCI Containers', role: 'Immutable microservices packaging & edge simulation' },
        { name: 'Kubernetes (K8s)', role: 'Multi-region auto-scaling policy orchestration' },
        { name: 'Redis Streams & Cache', role: 'Sub-millisecond corridor reservation state cache' },
      ],
    },
    {
      category: 'DATA & TOPOLOGY STORES',
      plane: 'DATA PLANE',
      icon: Database,
      technologies: [
        { name: 'InfluxDB (Time-Series)', role: 'Micro-second vehicular density & velocity series' },
        { name: 'Neo4j Graph Database', role: 'Arterial road network topology & multi-hop routing' },
        { name: 'MongoDB (Encrypted)', role: 'Metadata event classification & incident audit logs' },
      ],
    },
    {
      category: 'OPERATIONAL INTERFACES',
      plane: 'SUPERVISORY',
      icon: Layout,
      technologies: [
        { name: 'React 19 + TypeScript', role: 'Brutalist operations console with low-latency HUD' },
        { name: 'React Native', role: 'First-responder in-ambulance corridor telemetry HUD' },
        { name: 'WebSocket (WSS)', role: 'Bidirectional streaming telemetry & bounded overrides' },
      ],
    },
  ];

  return (
    <section id="technology" className="relative w-full py-20 border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-[#8A8A8A] mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#F4511E] font-bold">12</span>
            <span>//</span>
            <span>SOFTWARE & SYSTEMS STACK</span>
          </div>
          <div className="font-hand text-sm text-[#F4511E]">
            production-hardened open primitives
          </div>
          <div className="hidden sm:block text-[11px]">
            ARCHITECTURAL SPECIFICATION MANIFEST
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-12">
          <h2 className="font-display text-[52px] sm:text-[76px] md:text-[96px] leading-[0.88] font-black uppercase text-[#F3F3F0] tracking-tighter">
            THE SYSTEM
            <br />
            <span className="text-[#F4511E]">FABRIC.</span>
          </h2>
          <p className="mt-4 text-[#8A8A8A] max-w-2xl text-base sm:text-lg">
            Built on rugged industrial standards, low-overhead runtimes, and high-concurrency stream architectures. 
            No speculative bloatware — every component is selected for deterministic real-time reliability.
          </p>
        </div>

        {/* Poster Grid of Stack Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {stackLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.category}
                className="border border-white/15 bg-[#080808] p-6 flex flex-col justify-between crosshair-corner"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono mb-4">
                    <span className="text-white font-bold flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-[#F4511E]" />
                      {layer.category}
                    </span>
                    <span className="text-[#F4511E]">{layer.plane}</span>
                  </div>

                  <div className="space-y-3 font-mono">
                    {layer.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-3 border border-white/5 bg-black/40 hover:border-white/20 transition-colors"
                      >
                        <div className="text-sm font-bold text-white flex items-center justify-between">
                          <span>{tech.name}</span>
                          <span className="text-[10px] text-[#F4511E]">// NATIVE</span>
                        </div>
                        <div className="text-[11px] text-[#8A8A8A] font-sans mt-1">
                          {tech.role}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#8A8A8A]">
                  <span>STANDARD: POSIX / LINUX KERNEL 6.x</span>
                  <span className="text-emerald-400">HARDWARE ACCELERATED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
