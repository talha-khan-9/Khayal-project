"use client";

import { useState } from "react";
import {
  Heart, Users, Clock, CheckCircle2,
  Plus, Settings, Building2, AlertCircle, ChevronRight
} from "lucide-react";
import { Screen, Opportunity } from "../types";

interface Props {
  navigate: (s: Screen) => void;
  customOpportunities?: Opportunity[];
}

const recentOpportunities = [
  {
    title: "Psychology Community Outreach",
    partner: "HOPE Foundation",
    volunteers: 18,
    hours: 20,
    status: "Active",
    deadline: "Sep 15, 2026",
  },
  {
    title: "Education Drive — Volunteer Tutors",
    partner: "Teach for Pakistan",
    volunteers: 24,
    hours: 15,
    status: "Active",
    deadline: "Sep 20, 2026",
  },
  {
    title: "Food Drive Coordinator",
    partner: "Edhi Foundation",
    volunteers: 12,
    hours: 8,
    status: "Completed",
    deadline: "Aug 15, 2026",
  },
];

const recentStudents = [
  { name: "Areen Momin", hours: 18, activities: 3, status: "Verified" },
  { name: "Zain Malik", hours: 15, activities: 2, status: "Verified" },
  { name: "Sara Ahmed", hours: 20, activities: 3, status: "Verified" },
  { name: "Omar Tariq", hours: 8, activities: 1, status: "Pending" },
];

const impactByCategory = [
  { label: "Education", value: 42, color: "#3b82f6" },
  { label: "Health & Wellbeing", value: 28, color: "#0A8A6E" },
  { label: "Community Dev.", value: 18, color: "#d97706" },
  { label: "Youth", value: 12, color: "#7C3AED" },
];

export default function AdminDashboard({ navigate, customOpportunities = [] }: Props) {
  const [activeNav, setActiveNav] = useState("Dashboard");
  
  const navItems = ["Dashboard", "Opportunities", "Students", "Impact", "Reports"];

  return (
    <div style={{ background: "#F0F4F8", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#1E3A5F" }}>
        <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, background: "rgba(255,255,255,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Heart size={17} color="white" />
            </div>
            <div>
              <span style={{ color: "white", fontWeight: 800, fontSize: 15, letterSpacing: "-0.3px" }}>Khayal</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginLeft: 4 }}>Institution Dashboard</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "4px 10px" }}>
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 11, fontWeight: 600 }}>Greenwich University</span>
            </div>
            <button style={{ background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Settings size={16} color="rgba(255,255,255,0.8)" />
            </button>
          </div>
        </div>

        {/* Nav */}
        <div style={{ display: "flex", padding: "0 16px", gap: 4, overflowX: "auto", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveNav(item);
                if (item === "Opportunities") navigate("create-opportunity");
              }}
              style={{
                background: "none",
                border: "none",
                padding: "11px 14px",
                fontSize: 13,
                fontWeight: activeNav === item ? 700 : 500,
                color: activeNav === item ? "white" : "rgba(255,255,255,0.55)",
                borderBottom: activeNav === item ? "2px solid rgba(255,255,255,0.9)" : "2px solid transparent",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "16px 16px", paddingBottom: 40 }}>
        {/* Demo data notice */}
        <div style={{ background: "#ede9fe", border: "1px solid #c4b5fd", borderRadius: 10, padding: "10px 14px", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
          <AlertCircle size={15} color="#7C3AED" />
          <span style={{ color: "#5b21b6", fontSize: 12, fontWeight: 700, letterSpacing: "0.3px" }}>DEMO DATA — Illustrative numbers for presentation purposes only.</span>
        </div>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          <AdminStat value="1,248" label="Active Students" icon={<Users size={18} color="#1d4ed8" />} color="#dbeafe" textColor="#1d4ed8" />
          <AdminStat value="347" label="Volunteers" icon={<Heart size={18} color="#0A8A6E" />} color="#e6f7f3" textColor="#0A8A6E" />
          <AdminStat value="5,820" label="Community Hours" icon={<Clock size={18} color="#d97706" />} color="#fef3c7" textColor="#d97706" />
          <AdminStat value="86" label="Completed Activities" icon={<CheckCircle2 size={18} color="#059669" />} color="#dcfce7" textColor="#059669" />
        </div>

        {/* Partner organizations */}
        <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 14, padding: "16px 20px", marginBottom: 16, display: "flex", alignItems: "center", gap: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ width: 48, height: 48, background: "#fdf4ff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Building2 size={22} color="#a855f7" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ color: "#64748b", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.4px" }}>Partner Organizations</p>
            <p style={{ fontWeight: 800, fontSize: 24, color: "#1a2332" }}>14</p>
          </div>
          <ChevronRight size={18} color="#94a3b8" />
        </div>

        {/* Community Impact Chart */}
        <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332" }}>Impact by Category</h3>
            <div style={{ background: "#ede9fe", borderRadius: 20, padding: "3px 10px" }}>
              <span style={{ color: "#7C3AED", fontSize: 10, fontWeight: 700 }}>DEMO DATA</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {impactByCategory.map((cat) => (
              <div key={cat.label}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontSize: 13, color: "#1a2332", fontWeight: 500 }}>{cat.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: cat.color }}>{cat.value}%</span>
                </div>
                <div style={{ height: 8, background: "#f1f5f9", borderRadius: 4 }}>
                  <div style={{ height: "100%", width: `${cat.value}%`, background: cat.color, borderRadius: 4, transition: "width 0.8s ease" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Opportunities */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ fontWeight: 700, fontSize: 16, color: "#1a2332", letterSpacing: "-0.2px" }}>Active Opportunities</h2>
          <button
            onClick={() => navigate("create-opportunity")}
            style={{
              background: "#0A8A6E",
              color: "white",
              border: "none",
              borderRadius: 8,
              padding: "7px 12px",
              fontWeight: 700,
              fontSize: 12,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Plus size={14} />
            Create New
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
          {[...customOpportunities.map((o) => ({
            title: o.title,
            partner: o.partner,
            volunteers: 0,
            hours: o.hours,
            status: "Active" as const,
            deadline: o.deadline,
          })), ...recentOpportunities].map((opp, i) => (
            <div key={i} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 14, padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
                <h4 style={{ fontWeight: 700, fontSize: 14, color: "#1a2332", flex: 1, lineHeight: 1.3 }}>{opp.title}</h4>
                <span style={{
                  background: opp.status === "Active" ? "#dcfce7" : "#f1f5f9",
                  color: opp.status === "Active" ? "#166534" : "#64748b",
                  fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20, marginLeft: 8, whiteSpace: "nowrap"
                }}>
                  {opp.status === "Active" ? "● " : "✓ "}{opp.status.toUpperCase()}
                </span>
              </div>
              <p style={{ color: "#64748b", fontSize: 12, marginBottom: 8 }}>{opp.partner}</p>
              <div style={{ display: "flex", gap: 16 }}>
                <span style={{ color: "#64748b", fontSize: 12 }}><strong style={{ color: "#1a2332" }}>{opp.volunteers}</strong> volunteers</span>
                <span style={{ color: "#64748b", fontSize: 12 }}><strong style={{ color: "#1a2332" }}>{opp.hours}</strong> hrs each</span>
                <span style={{ color: "#64748b", fontSize: 12 }}>Due: {opp.deadline}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Students */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ fontWeight: 700, fontSize: 16, color: "#1a2332", letterSpacing: "-0.2px" }}>Recent Volunteers</h2>
          <span style={{ color: "#0A8A6E", fontSize: 13, fontWeight: 600 }}>View all</span>
        </div>

        <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          {recentStudents.map((s, i) => (
            <div key={i} style={{ padding: "14px 16px", borderBottom: i < recentStudents.length - 1 ? "1px solid #f1f5f9" : "none", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 36, height: 36, background: "#e6f7f3", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontWeight: 700, fontSize: 13, color: "#0A8A6E" }}>{s.name.split(" ").map(n => n[0]).join("")}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600, fontSize: 14, color: "#1a2332" }}>{s.name}</p>
                <p style={{ color: "#64748b", fontSize: 12 }}>{s.hours} hrs · {s.activities} activities</p>
              </div>
              <span style={{
                background: s.status === "Verified" ? "#dcfce7" : "#fef3c7",
                color: s.status === "Verified" ? "#166534" : "#92400e",
                fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20
              }}>
                {s.status === "Verified" ? "✓ " : "⏳ "}{s.status.toUpperCase()}
              </span>
            </div>
          ))}
        </div>

        {/* CTA: Create Opportunity */}
        <button
          onClick={() => navigate("create-opportunity")}
          style={{
            width: "100%",
            marginTop: 24,
            background: "#1E3A5F",
            color: "white",
            border: "none",
            borderRadius: 14,
            padding: "18px",
            fontWeight: 800,
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            letterSpacing: "0.3px",
            boxShadow: "0 4px 12px rgba(30,58,95,0.25)",
          }}
        >
          <Plus size={20} />
          CREATE OPPORTUNITY
        </button>

        {/* Back to student view */}
        <button
          onClick={() => navigate("khayal-dashboard")}
          style={{ width: "100%", marginTop: 10, background: "transparent", border: "1.5px solid #e2e8f0", borderRadius: 12, padding: "14px", fontWeight: 600, fontSize: 14, color: "#64748b", cursor: "pointer" }}
        >
          ← Student View
        </button>
      </div>
    </div>
  );
}

function AdminStat({ value, label, icon, color, textColor }: { value: string; label: string; icon: React.ReactNode; color: string; textColor: string }) {
  return (
    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 14, padding: "16px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
      <div style={{ width: 40, height: 40, background: color, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
        {icon}
      </div>
      <p style={{ fontWeight: 800, fontSize: 22, color: "#1a2332", letterSpacing: "-0.5px" }}>{value}</p>
      <p style={{ color: "#64748b", fontSize: 12, marginTop: 2, lineHeight: 1.3 }}>{label}</p>
    </div>
  );
}
