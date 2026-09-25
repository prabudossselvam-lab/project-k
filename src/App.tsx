import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { ProblemSection } from './components/ProblemSection';
import { SystemArchitecture } from './components/SystemArchitecture';
import { NodeBoxSection } from './components/NodeBoxSection';
import { AiCascadeSection } from './components/AiCascadeSection';
import { EmergencyCorridorSection } from './components/EmergencyCorridorSection';
import { ReinforcementLearningSection } from './components/ReinforcementLearningSection';
import { PrivacySection } from './components/PrivacySection';
import { DigitalTwinSection } from './components/DigitalTwinSection';
import { ControlCentreSection } from './components/ControlCentreSection';
import { DegradationSection } from './components/DegradationSection';
import { TechStackSection } from './components/TechStackSection';
import { EvaluationSection } from './components/EvaluationSection';
import { FooterSection } from './components/FooterSection';
import { AlertTriangle, CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const toggleEmergency = () => {
    const nextState = !isEmergencyActive;
    setIsEmergencyActive(nextState);
    if (nextState) {
      setShowNotification(true);
      // Auto dismiss banner after 6s
      setTimeout(() => setShowNotification(false), 6000);
    } else {
      setShowNotification(false);
    }
  };

  const scrollToCorridor = () => {
    document.getElementById('corridor')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToArchitecture = () => {
    document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F3F3F0] font-sans selection:bg-[#F4511E] selection:text-black relative">
      {/* Film grain noise overlay for authentic print publication aesthetic */}
      <div className="grain-overlay fixed inset-0 pointer-events-none z-50 opacity-40" />

      {/* Global Navigation */}
      <Navigation
        isEmergencyActive={isEmergencyActive}
        onSimulateEmergency={toggleEmergency}
      />

      {/* Active Preemption Banner Notification */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-[#0c0806] border-2 border-[#F4511E] p-4 shadow-[0_0_25px_rgba(244,81,30,0.4)] crosshair-corner animate-in fade-in slide-in-from-bottom-5 font-mono text-xs">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-[#F4511E] shrink-0 animate-bounce" />
              <div>
                <div className="font-bold text-white uppercase tracking-wider">
                  PREEMPTION PROTOCOL INITIATED
                </div>
                <p className="text-[11px] text-[#F3F3F0]/90 font-sans mt-1">
                  Arterial corridor 07 has received a priority grant. Queues at 4 downstream intersections are draining. Safety envelope: 45s TTL.
                </p>
                <div className="mt-2 text-[10px] text-[#F4511E]">
                  STATUS: RESERVE → ACK → GRANT ACTIVE
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-[#8A8A8A] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection
          onExploreClick={scrollToCorridor}
          onArchitectureClick={scrollToArchitecture}
        />

        <IntroSection />

        <ProblemSection />

        <SystemArchitecture />

        <NodeBoxSection />

        <AiCascadeSection />

        <EmergencyCorridorSection />

        <ReinforcementLearningSection />

        <PrivacySection />

        <DigitalTwinSection />

        <ControlCentreSection />

        <DegradationSection />

        <TechStackSection />

        <EvaluationSection />
      </main>

      {/* Final CTA and Minimal Brutalist Footer */}
      <FooterSection
        onExploreClick={scrollToCorridor}
        onArchitectureClick={scrollToArchitecture}
      />
    </div>
  );
}
