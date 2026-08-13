"use client";

import { CheckCircle2, Clock, MapPin, Heart, ChevronLeft, GraduationCap } from "lucide-react";
import { Screen } from "../types";

interface Props {
  opportunityName: string;
  navigate: (s: Screen) => void;
}

export default function ApplicationSubmitted({ opportunityName, navigate }: Props) {
  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: "#1E3A5F", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={() => navigate("khayal-dashboard")}
          style={{ background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <ChevronLeft size={18} color="white" />
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Heart size={14} color="rgba(255,255,255,0.7)" />
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Khayal</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Application</span>
        </div>
      </div>

      {/* Success animation section */}
      <div style={{ background: "linear-gradient(180deg, #e6f7f3 0%, #F8FAFC 100%)", padding: "40px 20px 32px", textAlign: "center" }}>
        <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: 88, height: 88, background: "#0A8A6E", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(10,138,110,0.3)" }}>
              <CheckCircle2 size={44} color="white" />
            </div>
            {/* Pulse ring */}
            <div style={{ position: "absolute", inset: -8, border: "2px solid rgba(10,138,110,0.2)", borderRadius: "50%", animation: "pulse 2s infinite" }} />
          </div>
        </div>
        <h1 style={{ fontWeight: 800, fontSize: 24, color: "#1a2332", marginBottom: 6, letterSpacing: "-0.4px" }}>Application Submitted!</h1>
        <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>Your application has been submitted successfully.<br />The institution or approved partner will confirm your participation.</p>
      </div>

      <div style={{ padding: "0 16px 32px", flex: 1 }}>
        {/* Application Card */}
        <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 18, padding: 22, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          {/* Opportunity name */}
          <div style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: 16, marginBottom: 16 }}>
            <p style={{ color: "#64748b", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>Opportunity</p>
            <h2 style={{ fontWeight: 700, fontSize: 16, color: "#1a2332", lineHeight: 1.4 }}>{opportunityName}</h2>
          </div>

          {/* Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <DetailRow label="Institution" value="Greenwich University" icon={<GraduationCap size={16} color="#0A8A6E" />} />
            <DetailRow label="Partner Organisation" value="HOPE Foundation" icon={<Heart size={16} color="#0A8A6E" />} />
            <DetailRow label="Duration" value="20 hours" icon={<Clock size={16} color="#0A8A6E" />} />
            <DetailRow label="Location" value="Karachi" icon={<MapPin size={16} color="#0A8A6E" />} />
            <DetailRow label="Deadline" value="Sep 15, 2026" icon={<Clock size={16} color="#0A8A6E" />} />
          </div>

          {/* Status Banner */}
          <div style={{ marginTop: 20, background: "#fef3c7", border: "1px solid #f59e0b", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, background: "#f59e0b", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Clock size={18} color="white" />
            </div>
            <div>
              <p style={{ color: "#92400e", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.5px" }}>⏳ Pending Approval</p>
              <p style={{ color: "#78350f", fontSize: 12, marginTop: 2, lineHeight: 1.4 }}>Awaiting confirmation from Greenwich University & HOPE Foundation</p>
            </div>
          </div>
        </div>

        {/* What happens next */}
        <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332", marginBottom: 14 }}>What Happens Next</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <NextStep
              number={1}
              title="Partner Reviews Application"
              desc="HOPE Foundation will review your application within 2–3 working days."
              done={false}
              active={true}
            />
            <StepConnector />
            <NextStep
              number={2}
              title="Institution Confirms"
              desc="Greenwich University co-approves and schedules your onboarding session."
              done={false}
              active={false}
            />
            <StepConnector />
            <NextStep
              number={3}
              title="Activity Completed"
              desc="After completing the programme, your record is updated as Verified."
              done={false}
              active={false}
            />
          </div>
        </div>

        {/* Action buttons */}
        <button
          onClick={() => navigate("community-record")}
          style={{
            width: "100%",
            background: "#0A8A6E",
            color: "white",
            border: "none",
            borderRadius: 12,
            padding: "16px",
            fontWeight: 800,
            fontSize: 15,
            cursor: "pointer",
            marginBottom: 10,
            letterSpacing: "0.3px",
            boxShadow: "0 4px 12px rgba(10,138,110,0.25)",
          }}
        >
          VIEW MY COMMUNITY RECORD →
        </button>
        <button
          onClick={() => navigate("khayal-dashboard")}
          style={{
            width: "100%",
            background: "transparent",
            color: "#64748b",
            border: "1.5px solid #e2e8f0",
            borderRadius: 12,
            padding: "14px",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

function DetailRow({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ width: 32, height: 32, background: "#e6f7f3", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <p style={{ color: "#94a3b8", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.4px" }}>{label}</p>
        <p style={{ color: "#1a2332", fontWeight: 600, fontSize: 14 }}>{value}</p>
      </div>
    </div>
  );
}

function NextStep({ number, title, desc, done, active }: { number: number; title: string; desc: string; done: boolean; active: boolean }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <div style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: done ? "#0A8A6E" : active ? "#fef3c7" : "#f8fafc",
        border: `2px solid ${done ? "#0A8A6E" : active ? "#f59e0b" : "#e2e8f0"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color: done ? "white" : active ? "#92400e" : "#94a3b8",
        fontWeight: 800,
        fontSize: 13,
      }}>
        {done ? "✓" : number}
      </div>
      <div style={{ paddingTop: 4 }}>
        <p style={{ fontWeight: 700, fontSize: 14, color: active ? "#1a2332" : "#64748b", marginBottom: 2 }}>{title}</p>
        <p style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.5 }}>{desc}</p>
      </div>
    </div>
  );
}

function StepConnector() {
  return <div style={{ width: 2, height: 20, background: "#e2e8f0", marginLeft: 15, marginTop: 4, marginBottom: 4 }} />;
}
