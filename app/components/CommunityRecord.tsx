"use client";

import { useState } from "react";
import {
  ChevronLeft, Heart, Award, Clock, CheckCircle2, Download,
  Star, Shield
} from "lucide-react";
import { Screen } from "../types";
import { activities as defaultActivities, STUDENT, STUDENT_STATS } from "../data/mockData";

interface Props {
  navigate: (s: Screen) => void;
  hasPendingApplication?: boolean;
}

export default function CommunityRecord({ navigate, hasPendingApplication = false }: Props) {
  const activities = hasPendingApplication
    ? defaultActivities
    : defaultActivities.filter((a) => !a.pending);
  const [toast, setToast] = useState<string | null>(null);
  const [showVerifyInfo, setShowVerifyInfo] = useState(false);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#1E3A5F", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={() => navigate("khayal-dashboard")}
          style={{ background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <ChevronLeft size={18} color="white" />
        </button>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Heart size={14} color="rgba(255,255,255,0.7)" />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Khayal</span>
          </div>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <button
            onClick={() => setShowVerifyInfo(true)}
            style={{ background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 8, padding: "6px 12px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4, color: "rgba(255,255,255,0.8)", fontSize: 12 }}
          >
            <Shield size={13} />
            Verification
          </button>
        </div>
      </div>

      {/* Page title banner */}
      <div style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #0f4c81 100%)", padding: "20px 20px 28px" }}>
        <h1 style={{ color: "white", fontWeight: 800, fontSize: 22, marginBottom: 4, letterSpacing: "-0.4px" }}>My Community Record</h1>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>{STUDENT.name} · {STUDENT.department} · {STUDENT.institution}</p>

        {/* Verified badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#dcfce7", borderRadius: 20, padding: "4px 12px" }}>
            <CheckCircle2 size={13} color="#166534" />
            <span style={{ color: "#166534", fontSize: 12, fontWeight: 700 }}>INSTITUTIONAL RECORD</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "4px 10px" }}>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>Verified by Greenwich University</span>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div style={{ background: "#1E3A5F", paddingBottom: 0 }}>
        <div style={{ background: "#F8FAFC", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: "20px 16px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
            <SummaryCard value={String(STUDENT_STATS.communityHours)} label="Total Hours" icon="⏱" textColor="#0A8A6E" />
            <SummaryCard value={String(STUDENT_STATS.activitiesCompleted)} label="Completed" icon="✅" textColor="#1d4ed8" />
            <SummaryCard value={String(STUDENT_STATS.certificates)} label="Certificates" icon="🏅" textColor="#d97706" />
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ background: "#F8FAFC", padding: "0 16px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
          <button
            onClick={() => showToast("📄 Certificate downloading... (demo)")}
            style={{
              background: "white",
              border: "1.5px solid #e2e8f0",
              borderRadius: 12,
              padding: "14px 12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontWeight: 700,
              fontSize: 13,
              color: "#1E3A5F",
            }}
          >
            <Download size={16} color="#1E3A5F" />
            Download Certificate
          </button>
          <button
            onClick={() => showToast("⭐ Recommendation request sent! (demo)")}
            style={{
              background: "#0A8A6E",
              border: "none",
              borderRadius: 12,
              padding: "14px 12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontWeight: 700,
              fontSize: 13,
              color: "white",
              boxShadow: "0 4px 12px rgba(10,138,110,0.25)",
            }}
          >
            <Star size={16} />
            Request Recommendation
          </button>
        </div>

        {/* Activity History */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <h2 style={{ fontWeight: 700, fontSize: 16, color: "#1a2332", letterSpacing: "-0.2px" }}>Activity History</h2>
          <div style={{ background: "#e6f7f3", borderRadius: 20, padding: "3px 10px" }}>
            <span style={{ color: "#0A8A6E", fontSize: 11, fontWeight: 700 }}>4 activities</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {activities.map((act) => (
            <ActivityCard
              key={act.id}
              title={act.title}
              partner={act.partner}
              hours={act.hours}
              date={act.date}
              verified={act.verified}
              certificate={act.certificate}
              onDownload={() => showToast("📄 Certificate downloading... (demo)")}
            />
          ))}
        </div>

        {/* Record explanation */}
        <div style={{ marginTop: 24, background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <Shield size={18} color="#0A8A6E" />
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332" }}>About Your Record</h3>
          </div>
          <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7 }}>
            Your Khayal Community Record is an official document co-maintained by Greenwich University and its approved partners. Only confirmed activities appear as Verified. Pending activities await confirmation from the institution or partner.
          </p>
        </div>

        {/* Back nav */}
        <button
          onClick={() => navigate("khayal-dashboard")}
          style={{ width: "100%", marginTop: 16, background: "transparent", border: "1.5px solid #e2e8f0", borderRadius: 12, padding: "14px", fontWeight: 600, fontSize: 14, color: "#64748b", cursor: "pointer" }}
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Toast */}
      {toast && (
        <div style={{ position: "fixed", bottom: 24, right: 16, left: 16, background: "#1a2332", color: "white", padding: "14px 18px", borderRadius: 12, display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 500, zIndex: 9999, boxShadow: "0 8px 24px rgba(0,0,0,0.2)", maxWidth: 448, margin: "0 auto" }}>
          <CheckCircle2 size={18} color="#0A8A6E" />
          {toast}
        </div>
      )}

      {/* Verification modal */}
      {showVerifyInfo && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
          onClick={() => setShowVerifyInfo(false)}
        >
          <div
            style={{ background: "white", borderRadius: 20, padding: 28, maxWidth: 380, width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontWeight: 800, fontSize: 18, color: "#1a2332", marginBottom: 20 }}>Verification Layers</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <VerifyCard
                icon="🏛"
                color="#dbeafe"
                iconColor="#1d4ed8"
                title="Layer 1: Institutional Identity"
                desc="Access is tied to your Greenwich University account. Only enrolled students can participate."
                status="VERIFIED"
                statusColor="#059669"
                statusBg="#dcfce7"
              />
              <VerifyCard
                icon="🤝"
                color="#e6f7f3"
                iconColor="#0A8A6E"
                title="Layer 2: Activity Confirmation"
                desc="The institution or approved partner confirms participation before any activity is recorded as verified."
                status="PARTNER APPROVED"
                statusColor="#0A8A6E"
                statusBg="#e6f7f3"
              />
              <VerifyCard
                icon="📋"
                color="#fef3c7"
                iconColor="#d97706"
                title="Result: Verified Record"
                desc="Only dual-confirmed activities appear as verified community engagement in your permanent record."
                status="PERMANENT RECORD"
                statusColor="#d97706"
                statusBg="#fef3c7"
              />
            </div>

            <button
              onClick={() => setShowVerifyInfo(false)}
              style={{ marginTop: 24, width: "100%", background: "#1E3A5F", color: "white", border: "none", borderRadius: 10, padding: "12px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function SummaryCard({ value, label, icon, textColor }: { value: string; label: string; icon: string; textColor: string }) {
  return (
    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 14, padding: "16px 12px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
      <div style={{ fontSize: 22, marginBottom: 4 }}>{icon}</div>
      <p style={{ fontWeight: 800, fontSize: 22, color: textColor, lineHeight: 1 }}>{value}</p>
      <p style={{ color: "#64748b", fontSize: 11, marginTop: 4, lineHeight: 1.3 }}>{label}</p>
    </div>
  );
}

function ActivityCard({ title, partner, hours, date, verified, certificate, onDownload }: { title: string; partner: string; hours: number; date: string; verified: boolean; certificate: boolean; onDownload: () => void }) {
  return (
    <div style={{ background: "white", border: `1px solid ${verified ? "#e2e8f0" : "#fef3c7"}`, borderRadius: 14, padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div style={{ width: 42, height: 42, borderRadius: 10, background: verified ? "#e6f7f3" : "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          {verified ? (
            <CheckCircle2 size={20} color="#0A8A6E" />
          ) : (
            <Clock size={20} color="#d97706" />
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 4 }}>
            <h4 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332", lineHeight: 1.3 }}>{title}</h4>
            {verified ? (
              <span style={{ background: "#dcfce7", color: "#166534", fontSize: 10, fontWeight: 800, padding: "3px 8px", borderRadius: 20, whiteSpace: "nowrap", letterSpacing: "0.5px" }}>
                ✓ VERIFIED
              </span>
            ) : (
              <span style={{ background: "#fef3c7", color: "#92400e", fontSize: 10, fontWeight: 800, padding: "3px 8px", borderRadius: 20, whiteSpace: "nowrap", letterSpacing: "0.5px" }}>
                ⏳ PENDING
              </span>
            )}
          </div>
          <p style={{ color: "#64748b", fontSize: 12, marginBottom: 8 }}>{partner} · {date}</p>
          
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {hours > 0 && (
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Clock size={12} color="#0A8A6E" />
                <span style={{ color: "#0A8A6E", fontSize: 12, fontWeight: 700 }}>{hours} hrs</span>
              </div>
            )}
            {certificate && verified && (
              <button
                onClick={onDownload}
                style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", color: "#1E3A5F", fontSize: 12, fontWeight: 600, padding: 0 }}
              >
                <Award size={13} color="#1E3A5F" />
                Certificate
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function VerifyCard({ icon, color, iconColor, title, desc, status, statusColor, statusBg }: { icon: string; color: string; iconColor: string; title: string; desc: string; status: string; statusColor: string; statusBg: string }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <div style={{ width: 44, height: 44, background: color, color: iconColor, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>
        {icon}
      </div>
      <div>
        <h4 style={{ fontWeight: 700, fontSize: 14, color: "#1a2332", marginBottom: 2 }}>{title}</h4>
        <p style={{ color: "#64748b", fontSize: 12, lineHeight: 1.5, marginBottom: 6 }}>{desc}</p>
        <span style={{ background: statusBg, color: statusColor, fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 20, letterSpacing: "0.5px" }}>
          {status}
        </span>
      </div>
    </div>
  );
}
