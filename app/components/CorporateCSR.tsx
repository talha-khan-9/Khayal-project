"use client";

import { useState } from "react";
import { ChevronLeft, Building2, Users, Clock, Award, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Screen } from "../types";

interface Props {
  navigate: (s: Screen) => void;
}

const csrActivities = [
  {
    title: "Youth Tech Mentorship Drive",
    companyPartner: "Engro Corporate Foundation",
    volunteers: 45,
    hours: 24,
    impact: "180 Students Mentored",
    category: "Education & Tech",
  },
  {
    title: "Corporate Coastal Restoration & Clean-up",
    companyPartner: "Habib Bank Ltd CSR",
    volunteers: 110,
    hours: 8,
    impact: "2.4 Tons Waste Recycled",
    category: "Environment",
  },
  {
    title: "Community Healthcare Access Camp",
    companyPartner: "Indus Motor CSR Division",
    volunteers: 32,
    hours: 16,
    impact: "450 Patients Served",
    category: "Health & Wellbeing",
  },
];

const departmentLeaderboard = [
  { dept: "Technology & Digital", hours: 420, employees: 68, badge: "🥇 Top Contributor" },
  { dept: "Human Resources & Admin", hours: 380, employees: 54, badge: "🥈 High Engagement" },
  { dept: "Marketing & Strategy", hours: 310, employees: 42, badge: "🥉 Active Impact" },
  { dept: "Finance & Operations", hours: 310, employees: 40, badge: "⭐ Verified Partner" },
];

export default function CorporateCSR({ navigate }: Props) {
  const [joinedActivity, setJoinedActivity] = useState<string | null>(null);

  const handleJoin = (title: string) => {
    setJoinedActivity(title);
    setTimeout(() => setJoinedActivity(null), 3500);
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={() => navigate("khayal-dashboard")}
          style={{ background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <ChevronLeft size={18} color="white" />
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Building2 size={15} color="#a5b4fc" />
            <span style={{ color: "#a5b4fc", fontSize: 12 }}>Khayal Corporate</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>/</span>
            <span style={{ color: "white", fontSize: 12, fontWeight: 600 }}>CSR Dashboard</span>
          </div>
        </div>
        <div style={{ background: "#7C3AED", borderRadius: 6, padding: "3px 8px" }}>
          <span style={{ color: "white", fontSize: 10, fontWeight: 800 }}>SCREEN 8</span>
        </div>
      </div>

      {/* Future Module Banner Callout */}
      <div style={{ background: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%)", padding: "20px 20px 24px", color: "white" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.18)", borderRadius: 20, padding: "4px 12px", marginBottom: 10 }}>
          <Sparkles size={13} color="#fef08a" />
          <span style={{ color: "#fef08a", fontSize: 11, fontWeight: 800, letterSpacing: "0.5px" }}>FUTURE EXPANSION MODULE</span>
        </div>
        <h1 style={{ color: "white", fontWeight: 800, fontSize: 22, letterSpacing: "-0.4px", marginBottom: 6 }}>Employee Portal & CSR Impact</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, lineHeight: 1.5, maxWidth: 540 }}>
          Extending Khayal&apos;s embedded verification framework into corporate employee portals to track, verify, and report ESG &amp; CSR community engagement.
        </p>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "20px 16px 60px" }}>
        
        {/* Jury Strategy Callout Box */}
        <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 14, padding: "14px 16px", marginBottom: 20, display: "flex", alignItems: "flex-start", gap: 12 }}>
          <ShieldCheck size={20} color="#1d4ed8" style={{ flexShrink: 0, marginTop: 2 }} />
          <div>
            <p style={{ fontWeight: 700, fontSize: 13, color: "#1e40af", marginBottom: 2 }}>Why Corporate CSR Expansion?</p>
            <p style={{ color: "#1e3a8a", fontSize: 12, lineHeight: 1.5 }}>
              The same embedded architecture used for universities can replicate across corporate HR portals. Companies get verified ESG impact reports, employees engage seamlessly, and Khayal secures enterprise subscription revenue.
            </p>
          </div>
        </div>

        {/* Joined Notification */}
        {joinedActivity && (
          <div style={{ background: "#dcfce7", border: "1px solid #86efac", borderRadius: 12, padding: "12px 16px", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <CheckCircle2 size={18} color="#166534" />
            <span style={{ color: "#14532d", fontSize: 13, fontWeight: 700 }}>Joined {joinedActivity} — Added to your CSR Record!</span>
          </div>
        )}

        {/* Corporate Metrics Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
          <CSRStatCard value="243" label="Employees Participating" icon={<Users size={18} color="#6366f1" />} bg="#e0e7ff" />
          <CSRStatCard value="1,420" label="Volunteer Hours" icon={<Clock size={18} color="#059669" />} bg="#dcfce7" />
          <CSRStatCard value="32" label="CSR Activities" icon={<Award size={18} color="#d97706" />} bg="#fef3c7" />
          <CSRStatCard value="18" label="NGO Partners" icon={<Building2 size={18} color="#7c3aed" />} bg="#ede9fe" />
        </div>

        {/* Active Corporate CSR Drives */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ fontWeight: 800, fontSize: 16, color: "#1a2332" }}>Active CSR Drives</h2>
          <span style={{ background: "#ede9fe", color: "#6d28d9", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 12 }}>ENTERPRISE DEMO</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
          {csrActivities.map((act, i) => (
            <div key={i} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ background: "#ede9fe", color: "#6d28d9", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>
                  {act.category.toUpperCase()}
                </span>
                <span style={{ color: "#059669", fontSize: 11, fontWeight: 700 }}>✓ Verified Partner</span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332", marginBottom: 4 }}>{act.title}</h3>
              <p style={{ color: "#64748b", fontSize: 12, marginBottom: 12 }}>{act.companyPartner}</p>
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fafc", padding: "10px 12px", borderRadius: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 12, color: "#475569" }}>👥 <strong>{act.volunteers}</strong> employees</span>
                <span style={{ fontSize: 12, color: "#475569" }}>⏱ <strong>{act.hours}</strong> hrs</span>
                <span style={{ fontSize: 12, color: "#0A8A6E", fontWeight: 700 }}>🎯 {act.impact}</span>
              </div>

              <button
                onClick={() => handleJoin(act.title)}
                style={{
                  width: "100%",
                  background: "#4f46e5",
                  color: "white",
                  border: "none",
                  borderRadius: 10,
                  padding: "11px",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  letterSpacing: "0.3px",
                }}
              >
                JOIN CSR ACTIVITY <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Department Leaderboard */}
        <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, marginBottom: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332" }}>Department CSR Leaderboard</h3>
            <span style={{ color: "#64748b", fontSize: 12 }}>Q3 2026</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {departmentLeaderboard.map((row, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", background: "#f8fafc", borderRadius: 10 }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 13, color: "#1a2332" }}>{row.dept}</p>
                  <p style={{ fontSize: 11, color: "#64748b" }}>{row.employees} active employees</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontWeight: 800, fontSize: 14, color: "#4f46e5" }}>{row.hours} hrs</p>
                  <span style={{ fontSize: 10, fontWeight: 600, color: "#6d28d9" }}>{row.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Switchers */}
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => navigate("khayal-dashboard")}
            style={{ flex: 1, background: "white", border: "1.5px solid #cbd5e1", borderRadius: 12, padding: "14px", fontWeight: 600, fontSize: 13, color: "#334155", cursor: "pointer" }}
          >
            ← Student Portal
          </button>
          <button
            onClick={() => navigate("admin-dashboard")}
            style={{ flex: 1, background: "#1E3A5F", border: "none", borderRadius: 12, padding: "14px", fontWeight: 700, fontSize: 13, color: "white", cursor: "pointer" }}
          >
            Institution Admin →
          </button>
        </div>
      </div>
    </div>
  );
}

function CSRStatCard({ value, label, icon, bg }: { value: string; label: string; icon: React.ReactNode; bg: string }) {
  return (
    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 14, padding: "16px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
      <div style={{ width: 38, height: 38, background: bg, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
        {icon}
      </div>
      <p style={{ fontWeight: 800, fontSize: 22, color: "#1a2332", letterSpacing: "-0.5px" }}>{value}</p>
      <p style={{ color: "#64748b", fontSize: 12, marginTop: 2 }}>{label}</p>
    </div>
  );
}
