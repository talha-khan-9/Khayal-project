"use client";

import { useState } from "react";
import {
  Heart, MapPin, Clock, Award, Users, ChevronRight,
  Info, Bell, Search, FileText
} from "lucide-react";
import { Screen, Opportunity } from "../types";
import {
  opportunities as defaultOpportunities,
  getFeaturedOpportunity,
  STUDENT,
  STUDENT_STATS,
  categoryColors,
  categoryTextColors,
} from "../data/mockData";
import Badge from "./ui/Badge";

interface Props {
  navigate: (s: Screen) => void;
  customOpportunities?: Opportunity[];
  onSelectOpportunity: (id: number) => void;
}

export default function KhayalDashboard({ navigate, customOpportunities = [], onSelectOpportunity }: Props) {
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const allOpportunities = [...customOpportunities, ...defaultOpportunities];
  const featured = getFeaturedOpportunity(customOpportunities);
  const moreOpportunities = allOpportunities.filter((o) => o.id !== featured.id);

  return (
    <div className="page-enter" style={{ background: "#F8FAFC", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#1E3A5F", padding: "0 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, paddingBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, background: "rgba(255,255,255,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Heart size={17} color="white" />
            </div>
            <div>
              <span style={{ color: "white", fontWeight: 800, fontSize: 16, letterSpacing: "-0.3px" }}>Khayal</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, marginLeft: 6 }}>via {STUDENT.institution}</span>
            </div>
          </div>
          <button aria-label="Notifications" style={{ background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <Bell size={16} color="rgba(255,255,255,0.8)" />
          </button>
        </div>

        <div style={{ paddingBottom: 20 }}>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 2 }}>Welcome back,</p>
          <h1 style={{ color: "white", fontWeight: 800, fontSize: 22, marginBottom: 16, letterSpacing: "-0.4px" }}>{STUDENT.name}</h1>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
            <StatBadge value={String(STUDENT_STATS.communityHours)} label="Community Hours" icon="⏱" />
            <StatBadge value={String(STUDENT_STATS.activitiesCompleted)} label="Activities Completed" icon="✓" />
            <StatBadge value={String(STUDENT_STATS.certificates)} label="Certificates" icon="🏅" />
            <StatBadge value={String(STUDENT_STATS.recommendations)} label="Recommendation" icon="⭐" />
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
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ padding: "16px", paddingBottom: 32 }}>
        {/* Verification info bar */}
        <button
          type="button"
          className="card-hover"
          style={{
            width: "100%",
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
            <span style={{ color: "#0A8A6E", fontSize: 13, fontWeight: 600 }}>Identity Verified — {STUDENT.institution}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Info size={14} color="#0A8A6E" />
            <span style={{ color: "#0A8A6E", fontSize: 12 }}>How?</span>
          </div>
        </button>

        {/* Quick actions */}
        <div style={{ display: "flex", gap: 10, marginBottom: 24, overflowX: "auto" }}>
          <QuickAction icon={<Search size={16} color="#0A8A6E" />} label="Find Opportunities" onClick={() => window.scrollTo({ top: 400, behavior: "smooth" })} />
          <QuickAction icon={<FileText size={16} color="#0A8A6E" />} label="My Record" onClick={() => navigate("community-record")} />
          <QuickAction icon={<Award size={16} color="#0A8A6E" />} label="Certificates" onClick={() => navigate("community-record")} />
          <QuickAction icon={<Users size={16} color="#0A8A6E" />} label="Partners" onClick={() => setShowVerifyModal(true)} />
        </div>

        {/* Featured */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ fontWeight: 700, fontSize: 16, color: "#1a2332", letterSpacing: "-0.2px" }}>Recommended for You</h2>
          <Badge variant="category">PERSONALISED</Badge>
        </div>

        <div
          className="card-hover"
          style={{
            background: "white",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
            cursor: "pointer",
            boxShadow: "var(--kh-shadow-md)",
            borderLeft: "4px solid #0A8A6E",
          }}
          onClick={() => onSelectOpportunity(featured.id)}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6, flexWrap: "wrap" }}>
            <span style={{ background: categoryColors[featured.category] || "#f0fdf4", color: categoryTextColors[featured.category] || "#166534", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>
              {featured.category.toUpperCase()}
            </span>
            <Badge variant="verified">✓ VERIFIED PARTNER</Badge>
          </div>
          <h3 style={{ fontWeight: 700, fontSize: 16, color: "#1a2332", lineHeight: 1.3, marginBottom: 4 }}>{featured.title}</h3>
          <p style={{ color: "#64748b", fontSize: 13, marginBottom: 12 }}>{featured.partner}</p>

          <div style={{ display: "flex", gap: 16, marginBottom: 14, flexWrap: "wrap" }}>
            <MetaItem icon={<Clock size={13} />} text={`${featured.hours} hours`} />
            <MetaItem icon={<MapPin size={13} />} text={featured.location} />
            {featured.certificate && <MetaItem icon={<Award size={13} />} text="Certificate" />}
          </div>

          <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
            {featured.skills.slice(0, 2).map((skill) => (
              <SkillChip key={skill} label={skill} />
            ))}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); onSelectOpportunity(featured.id); }}
            style={{ width: "100%", background: "#0A8A6E", color: "white", border: "none", borderRadius: 10, padding: "12px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
          >
            VIEW OPPORTUNITY
          </button>
        </div>

        {/* More opportunities */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ fontWeight: 700, fontSize: 16, color: "#1a2332", letterSpacing: "-0.2px" }}>More Opportunities</h2>
          <span style={{ color: "#0A8A6E", fontSize: 13, fontWeight: 600 }}>{allOpportunities.length} available</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {moreOpportunities.map((opp) => (
            <SmallOpportunityCard key={opp.id} opportunity={opp} onClick={() => onSelectOpportunity(opp.id)} />
          ))}
        </div>

        {/* Admin switch */}
        <div style={{ marginTop: 32, borderTop: "1px solid #e2e8f0", paddingTop: 20 }}>
          <p style={{ color: "#64748b", fontSize: 12, textAlign: "center", marginBottom: 12 }}>Switch View (Demo)</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("admin-dashboard")}
              style={{ flex: 1, minWidth: 140, background: "#1E3A5F", color: "white", border: "none", borderRadius: 10, padding: "12px", fontWeight: 600, fontSize: 13, cursor: "pointer" }}
            >
              Institution Admin
            </button>
            <button
              onClick={() => navigate("corporate-csr")}
              style={{ flex: 1, minWidth: 140, background: "linear-gradient(135deg, #7C3AED, #4F46E5)", color: "white", border: "none", borderRadius: 10, padding: "12px", fontWeight: 600, fontSize: 13, cursor: "pointer" }}
            >
              Corporate CSR
            </button>
          </div>
        </div>
      </div>

      {showVerifyModal && <VerificationModal onClose={() => setShowVerifyModal(false)} />}
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
      className="card-hover"
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

function SmallOpportunityCard({ opportunity, onClick }: { opportunity: Opportunity; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="card-hover"
      style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 14, padding: 16, cursor: "pointer", display: "flex", alignItems: "center", gap: 14 }}
    >
      <div style={{ width: 44, height: 44, background: "#e6f7f3", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Heart size={20} color="#0A8A6E" />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4 style={{ fontWeight: 600, fontSize: 14, color: "#1a2332", marginBottom: 2, lineHeight: 1.3 }}>{opportunity.title}</h4>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ color: "#64748b", fontSize: 12 }}>{opportunity.hours} hrs</span>
          <span style={{ color: "#cbd5e1", fontSize: 12 }}>·</span>
          <span style={{ color: "#64748b", fontSize: 12 }}>{opportunity.location}</span>
          {opportunity.verified && (
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
      className="modal-in"
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
      onClick={onClose}
    >
      <div
        style={{ background: "white", borderRadius: 20, padding: 28, maxWidth: 380, width: "100%", boxShadow: "0 24px 60px rgba(0,0,0,0.15)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ fontWeight: 800, fontSize: 18, color: "#1a2332", marginBottom: 6 }}>How Verification Works</h2>
        <p style={{ color: "#64748b", fontSize: 13, marginBottom: 24, lineHeight: 1.6 }}>
          Khayal uses two distinct verification layers. University login confirms identity — not activity completion.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <VerifyStep icon="🏛" color="#1E3A5F" lightColor="#EFF6FF" title="Institutional Identity" desc="Your account is connected to Greenwich University. Only enrolled students can access Khayal." />
          <div style={{ width: 2, height: 24, background: "#e2e8f0", marginLeft: 22 }} />
          <VerifyStep icon="🤝" color="#0A8A6E" lightColor="#e6f7f3" title="Activity Verification" desc="The institution or approved partner confirms your participation and completion before any activity is recorded." />
          <div style={{ width: 2, height: 24, background: "#e2e8f0", marginLeft: 22 }} />
          <VerifyStep icon="✅" color="#059669" lightColor="#dcfce7" title="Verified Record" desc="Only confirmed activities appear as verified community engagement in your permanent record." />
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

function VerifyStep({ icon, color, lightColor, title, desc }: { icon: string; color: string; lightColor: string; title: string; desc: string }) {
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
