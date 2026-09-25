export type SystemPlane = 'edge' | 'cloud' | 'override';

export type CorridorPhase = 'IDLE' | 'RESERVE' | 'ACK' | 'GRANT' | 'RELEASE';

export type DegradationState = 'OPTIMAL' | 'DEGRADED' | 'AUTONOMOUS';

export interface IntersectionNode {
  id: string;
  name: string;
  coords: [number, number];
  signalState: 'RED' | 'YELLOW' | 'GREEN';
  density: number; // 0-100
  queueLength: number; // meters
  emergencyCorridorActive: boolean;
  phase: CorridorPhase;
  incidentDetected?: boolean;
}

export interface InferenceCascadeEvent {
  step: 'CCTV' | 'TIER_1' | 'ANOMALY' | 'TIER_2' | 'PEER_LINK' | 'FUSION' | 'VERIFIED';
  title: string;
  timeMs: number;
  confidence: number;
  description: string;
  status: 'pending' | 'active' | 'passed';
}

export interface EdgeTelemetryPayload {
  node_id: string;
  timestamp: string;
  density_percent: number;
  event_class: 'AMBULANCE_APPROACH' | 'ACCIDENT_DETECTED' | 'POTHOLE_HAZARD' | 'NORMAL_FLOW';
  severity: 'LOW' | 'MEDIUM' | 'CRITICAL';
  confidence_score: number;
  active_preemption: boolean;
  ttl_seconds: number;
}
