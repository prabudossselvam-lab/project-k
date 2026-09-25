import React, { useState, useEffect } from 'react';
import { Shield, Radio, Activity, AlertTriangle } from 'lucide-react';

interface NavigationProps {
  onSimulateEmergency?: () => void;
  isEmergencyActive?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  onSimulateEmergency,
  isEmergencyActive = false,
}) => {
  const [time, setTime] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toISOString().substring(11, 19) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-sm border-white/15'
          : 'bg-[#050505]/80 border-white/10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between font-mono text-xs">
        {/* Brand identifier */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 group text-[#F3F3F0] font-bold tracking-wider"
          >
            <span className="w-2.5 h-2.5 bg-[#F4511E] inline-block group-hover:scale-125 transition-transform"></span>
            <span className="font-display text-lg tracking-normal font-black text-white">
              PROJECT-K
            </span>
            <span className="text-[#8A8A8A] hidden sm:inline text-[11px] font-mono border-l border-white/10 pl-2">
              PK-TR-2026-02
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-2 px-2 py-0.5 border border-white/10 bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] text-[#8A8A8A] tracking-wider">
              EDGE MESH: ACTIVE (12 NODES)
            </span>
          </div>
        </div>

        {/* Technical quick anchors */}
        <nav className="hidden md:flex items-center gap-6 text-[11px] text-[#8A8A8A]">
          <a
            href="#architecture"
            className="hover:text-[#F4511E] transition-colors flex items-center gap-1"
          >
            <span className="text-[#F4511E]/80">01</span> ARCHITECTURE
          </a>
          <a
            href="#nodebox"
            className="hover:text-[#F4511E] transition-colors flex items-center gap-1"
          >
            <span className="text-[#F4511E]/80">02</span> NODE BOX
          </a>
          <a
            href="#corridor"
            className="hover:text-[#F4511E] transition-colors flex items-center gap-1"
          >
            <span className="text-[#F4511E]/80">03</span> CORRIDOR
          </a>
          <a
            href="#privacy"
            className="hover:text-[#F4511E] transition-colors flex items-center gap-1"
          >
            <span className="text-[#F4511E]/80">04</span> PRIVACY
          </a>
          <a
            href="#control-centre"
            className="hover:text-[#F4511E] transition-colors flex items-center gap-1"
          >
            <span className="text-[#F4511E]/80">05</span> TELEMETRY
          </a>
        </nav>

        {/* Live System Trigger & Time */}
        <div className="flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-2 text-[10px] text-[#8A8A8A] border-r border-white/10 pr-3">
            <Radio className="w-3 h-3 text-[#F4511E]" />
            <span>LATENCY: 14MS</span>
            <span className="text-white/20">|</span>
            <span>{time}</span>
          </div>

          <button
            id="emergency-toggle-btn"
            onClick={onSimulateEmergency}
            className={`px-3 py-1.5 flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all border ${
              isEmergencyActive
                ? 'bg-[#F4511E] text-black border-[#F4511E] shadow-[0_0_15px_rgba(244,81,30,0.5)]'
                : 'bg-white/5 text-[#F3F3F0] hover:bg-[#F4511E] hover:text-black border-white/20 hover:border-[#F4511E]'
            }`}
          >
            <AlertTriangle className={`w-3.5 h-3.5 ${isEmergencyActive ? 'animate-bounce' : ''}`} />
            <span>{isEmergencyActive ? 'PREEMPTION ACTIVE' : 'TEST PREEMPTION'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
