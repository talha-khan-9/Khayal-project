"use client";

import { useState } from "react";
import {
  Heart, ChevronLeft, MapPin, Clock, Award, Users, ChevronRight,
  Sparkles, BookOpen, Utensils, UserCheck, Info, Bell, Search, 
  FileText, Star
} from "lucide-react";
import { Screen } from "../page";

interface Props {
  navigate: (s: Screen) => void;
}

const opportunities = [
  {
    id: 1,
    title: "Psychology Community Outreach Volunteer",
    partner: "HOPE Foundation",
    hours: 20,
    location: "Karachi",
    skills: ["Communication", "Teamwork"],
    certificate: true,
    category: "Health & Wellbeing",
    deadline: "Sep 15, 2026",
    description: "Support community mental health awareness sessions alongside licensed counsellors.",
    verified: true,
    featured: true,
  },
  {
    id: 2,
    title: "Education Drive — Volunteer Tutor",
    partner: "Teach for Pakistan",
    hours: 15,
    location: "Karachi",
    skills: ["Teaching", "Communication"],
    certificate: true,
    category: "Education",
    deadline: "Sep 20, 2026",
    description: "Teach foundational English and Mathematics to underserved school students.",
    verified: true,
    featured: false,
  },
  {
    id: 3,
    title: "Food Drive Coordinator",
    partner: "Edhi Foundation",
    hours: 8,
    location: "Karachi",
    skills: ["Teamwork", "Coordination"],
    certificate: false,
    category: "Community Development",
    deadline: "Aug 30, 2026",
    description: "Coordinate food collection and distribution in local communities.",
    verified: true,
    featured: false,
  },
  {
    id: 4,
    title: "Youth Mentorship Programme",
    partner: "The Citizens Foundation",
    hours: 30,
    location: "Karachi",
    skills: ["Leadership", "Mentoring"],
    certificate: true,
    category: "Youth",
    deadline: "Oct 1, 2026",
    description: "Mentor high school students from disadvantaged communities on career pathways.",
    verified: true,
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Health & Wellbeing": "#dcfce7",
  "Education": "#dbeafe",
  "Community Development": "#fef3c7",
  "Youth": "#ede9fe",
  "Environment": "#dcfce7",
};

const categoryTextColors: Record<string, string> = {
  "Health & Wellbeing": "#166534",
  "Education": "#1e40af",
  "Community Development": "#92400e",
  "Youth": "#5b21b6",
  "Environment": "#166534",
};

export default function KhayalDashboard({ navigate }: Props) {
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#1E3A5F", padding: "0 16px" }}>
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, paddingBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, background: "rgba(255,255,255,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Heart size={17} color="white" />
            </div>
            <div>
              <span style={{ color: "white", fontWeight: 800, fontSize: 16, letterSpacing: "-0.3px" }}>Khayal</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, marginLeft: 6 }}>via Greenwich University</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={{ background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Bell size={16} color="rgba(255,255,255,0.8)" />
            </button>
          </div>
        </div>

        {/* Welcome + Stats */}
        <div style={{ paddingBottom: 20 }}>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 2 }}>Welcome back,</p>
          <h1 style={{ color: "white", fontWeight: 800, fontSize: 22, marginBottom: 16, letterSpacing: "-0.4px" }}>Areen Momin</h1>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <StatBadge value="18" label="Community Hours" icon="⏱" />
            <StatBadge value="3" label="Activities Completed" icon="✓" />
            <StatBadge value="2" label="Certificates" icon="🏅" />
            <StatBadge value="1" label="Recommendation" icon="⭐" />
          </div>
        </div>
      </div>

      {/* Nav tabs */}
      <div style={{ background: "white", borderBottom: "1px solid #e2e8f0", padding: "0 16px", display: "flex", gap: 4, overflowX: "auto" }}>
        {["Opportunities", "My Record", "Certificates", "Community"].map((tab, i) => (
          <button
            key={tab}
            onClick={() => {
              if (tab === "My Record") navigate("community-record");
            }}
            style={{
              background: "none",
              border: "none",
              padding: "12px 12px",
              fontSize: 13,
              fontWeight: i === 0 ? 700 : 500,
              color: i === 0 ? "#0A8A6E" : "#64748b",
              borderBottom: i === 0 ? "2px solid #0A8A6E" : "2px solid transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.15s",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "16px 16px", paddingBottom: 32 }}>
        
        {/* Verification info bar */}
        <div
          style={{
            background: "#e6f7f3",
            border: "1px solid rgba(10,138,110,0.2)",
            borderRadius: 10,
            padding: "10px 14px",
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => setShowVerifyModal(true)}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 20, height: 20, background: "#0A8A6E", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontSize: 10, fontWeight: 800 }}>✓</span>
            </div>
            <span style={{ color: "#0A8A6E", fontSize: 13, fontWeight: 600 }}>Identity Verified — Greenwich University</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Info size={14} color="#0A8A6E" />
            <span style={{ color: "#0A8A6E", fontSize: 12 }}>How?</span>
          </div>
        </div>

        {/* Quick actions */}
        <div style={{ display: "flex", gap: 10, marginBottom: 24, overflowX: "auto" }}>
          <QuickAction icon={<Search size={16} color="#0A8A6E" />} label="Find Opportunities" onClick={() => {}} />
          <QuickAction icon={<FileText size={16} color="#0A8A6E" />} label="My Record" onClick={() => navigate("community-record")} />
          <QuickAction icon={<Award size={16} color="#0A8A6E" />} label="Certificates" onClick={() => {}} />
          <QuickAction icon={<Users size={16} color="#0A8A6E" />} label="Partners" onClick={() => {}} />
        </div>

        {/* Featured Opportunity */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ fontWeight: 700, fontSize: 16, color: "#1a2332", letterSpacing: "-0.2px" }}>Recommended for You</h2>
          <div style={{ background: "#e6f7f3", borderRadius: 6, padding: "2px 8px" }}>
            <span style={{ color: "#0A8A6E", fontSize: 11, fontWeight: 700 }}>PERSONALISED</span>
          </div>
        </div>

        {/* Featured Card */}
        <div
          style={{
            background: "white",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
            cursor: "pointer",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            borderLeft: "4px solid #0A8A6E",
          }}
          onClick={() => navigate("opportunity-detail")}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <span style={{ background: categoryColors["Health & Wellbeing"] || "#f0fdf4", color: categoryTextColors["Health & Wellbeing"] || "#166534", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, letterSpacing: "0.3px" }}>
                  HEALTH & WELLBEING
                </span>
                <span style={{ background: "#dcfce7", color: "#166534", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, display: "flex", alignItems: "center", gap: 3 }}>
                  ✓ VERIFIED PARTNER
                </span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: "#1a2332", lineHeight: 1.3, marginBottom: 4 }}>
                Psychology Community Outreach Volunteer
              </h3>
              <p style={{ color: "#64748b", fontSize: 13 }}>HOPE Foundation</p>
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
            <MetaItem icon={<Clock size={13} />} text="20 hours" />
            <MetaItem icon={<MapPin size={13} />} text="Karachi" />
            <MetaItem icon={<Award size={13} />} text="Certificate" />
          </div>

          <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
            <SkillChip label="Communication" />
            <SkillChip label="Teamwork" />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); navigate("opportunity-detail"); }}
            style={{
              width: "100%",
              background: "#0A8A6E",
              color: "white",
              border: "none",
              borderRadius: 10,
              padding: "12px",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              letterSpacing: "0.3px",
            }}
          >
            VIEW OPPORTUNITY
          </button>
        </div>

        {/* More Opportunities */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ fontWeight: 700, fontSize: 16, color: "#1a2332", letterSpacing: "-0.2px" }}>More Opportunities</h2>
          <span style={{ color: "#0A8A6E", fontSize: 13, fontWeight: 600 }}>View all</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {opportunities.slice(1).map((opp) => (
            <SmallOpportunityCard
              key={opp.id}
              {...opp}
              onClick={() => navigate("opportunity-detail")}
            />
          ))}
        </div>

        {/* Admin section separator */}
        <div style={{ marginTop: 32, borderTop: "1px solid #e2e8f0", paddingTop: 20 }}>
          <p style={{ color: "#64748b", fontSize: 12, textAlign: "center", marginBottom: 12 }}>Switch View</p>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={() => navigate("admin-dashboard")}
              style={{ flex: 1, background: "#1E3A5F", color: "white", border: "none", borderRadius: 10, padding: "12px", fontWeight: 600, fontSize: 13, cursor: "pointer" }}
            >
              🏛 Institution Admin
            </button>
            <button
              onClick={() => navigate("corporate-csr")}
              style={{ flex: 1, background: "linear-gradient(135deg, #7C3AED, #4F46E5)", color: "white", border: "none", borderRadius: 10, padding: "12px", fontWeight: 600, fontSize: 13, cursor: "pointer" }}
            >
              🏢 Corporate CSR
            </button>
          </div>
        </div>
      </div>

      {/* Verification Modal */}
      {showVerifyModal && (
        <VerificationModal onClose={() => setShowVerifyModal(false)} />
      )}
    </div>
  );
}

function StatBadge({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "10px 14px", border: "1px solid rgba(255,255,255,0.1)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 16 }}>{icon}</span>
        <span style={{ color: "white", fontWeight: 800, fontSize: 20 }}>{value}</span>
      </div>
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, marginTop: 2 }}>{label}</p>
    </div>
  );
}

function QuickAction({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{ flexShrink: 0, background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 12, fontWeight: 600, color: "#1a2332", whiteSpace: "nowrap" }}
    >
      {icon}
      {label}
    </button>
  );
}

function MetaItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#64748b", fontSize: 12 }}>
      {icon}
      {text}
    </div>
  );
}

function SkillChip({ label }: { label: string }) {
  return (
    <span style={{ background: "#e6f7f3", color: "#0A8A6E", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, border: "1px solid rgba(10,138,110,0.2)" }}>
      {label}
    </span>
  );
}

function SmallOpportunityCard({
  title, partner, hours, location, skills, certificate, category, deadline, verified, onClick
}: any) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "white",
        border: "1px solid #e2e8f0",
        borderRadius: 14,
        padding: 16,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 14,
        transition: "all 0.2s",
      }}
    >
      <div style={{
        width: 44,
        height: 44,
        background: "#e6f7f3",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <Heart size={20} color="#0A8A6E" />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4 style={{ fontWeight: 600, fontSize: 14, color: "#1a2332", marginBottom: 2, lineHeight: 1.3 }}>{title}</h4>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#64748b", fontSize: 12 }}>{hours} hrs</span>
          <span style={{ color: "#cbd5e1", fontSize: 12 }}>·</span>
          <span style={{ color: "#64748b", fontSize: 12 }}>{location}</span>
          {verified && (
            <>
              <span style={{ color: "#cbd5e1", fontSize: 12 }}>·</span>
              <span style={{ color: "#059669", fontSize: 11, fontWeight: 700 }}>✓ Verified</span>
            </>
          )}
        </div>
      </div>
      <ChevronRight size={16} color="#94a3b8" />
    </div>
  );
}

function VerificationModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
      onClick={onClose}
    >
      <div
        style={{ background: "white", borderRadius: 20, padding: 28, maxWidth: 380, width: "100%", boxShadow: "0 24px 60px rgba(0,0,0,0.15)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ fontWeight: 800, fontSize: 18, color: "#1a2332", marginBottom: 6, letterSpacing: "-0.3px" }}>How Verification Works</h2>
        <p style={{ color: "#64748b", fontSize: 13, marginBottom: 24, lineHeight: 1.6 }}>Khayal uses two distinct verification layers to ensure authenticity.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <VerifyStep
            number="01"
            icon="🏛"
            color="#1E3A5F"
            lightColor="#EFF6FF"
            title="Institutional Identity"
            desc="Your account is connected to Greenwich University. Only enrolled students can access Khayal."
          />
          <div style={{ width: 2, height: 24, background: "#e2e8f0", marginLeft: 22 }} />
          <VerifyStep
            number="02"
            icon="🤝"
            color="#0A8A6E"
            lightColor="#e6f7f3"
            title="Activity Verification"
            desc="The institution or approved partner confirms your participation and completion before any activity is recorded."
          />
          <div style={{ width: 2, height: 24, background: "#e2e8f0", marginLeft: 22 }} />
          <VerifyStep
            number="03"
            icon="✅"
            color="#059669"
            lightColor="#dcfce7"
            title="Verified Record"
            desc="Only confirmed activities appear as verified community engagement in your permanent record."
          />
        </div>

        <button
          onClick={onClose}
          style={{ marginTop: 24, width: "100%", background: "#1E3A5F", color: "white", border: "none", borderRadius: 10, padding: "12px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
        >
          Got it
        </button>
      </div>
    </div>
  );
}

function VerifyStep({ number, icon, color, lightColor, title, desc }: any) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div style={{ width: 44, height: 44, borderRadius: "50%", background: lightColor, border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>
        {icon}
      </div>
      <div style={{ paddingTop: 4 }}>
        <h4 style={{ fontWeight: 700, fontSize: 14, color: "#1a2332", marginBottom: 3 }}>{title}</h4>
        <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.5 }}>{desc}</p>
      </div>
    </div>
  );
}
