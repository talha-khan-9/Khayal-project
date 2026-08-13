"use client";

import {
  ChevronLeft, MapPin, Clock, Award, Users, CheckCircle2,
  Calendar, Heart, Share2
} from "lucide-react";
import { Screen, Opportunity } from "../types";
import { getOpportunityById, STUDENT } from "../data/mockData";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import { JURY_BAR_HEIGHT } from "./JuryBar";

interface Props {
  opportunityId: number;
  customOpportunities?: Opportunity[];
  navigate: (s: Screen) => void;
  onApply: (name: string) => void;
  juryBarVisible?: boolean;
}

export default function OpportunityDetail({
  opportunityId,
  customOpportunities = [],
  navigate,
  onApply,
  juryBarVisible = true,
}: Props) {
  const opportunity = getOpportunityById(opportunityId, customOpportunities);

  if (!opportunity) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <p>Opportunity not found.</p>
        <Button variant="secondary" onClick={() => navigate("khayal-dashboard")}>
          Back to Dashboard
        </Button>
      </div>
    );
  }

  const stickyBottom = juryBarVisible ? JURY_BAR_HEIGHT + 12 : 0;

  return (
    <div className="page-enter" style={{ background: "#F8FAFC", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#1E3A5F", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={() => navigate("khayal-dashboard")}
          aria-label="Back to dashboard"
          style={{ background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <ChevronLeft size={18} color="white" />
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Heart size={14} color="rgba(255,255,255,0.7)" />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Khayal</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Opportunity</span>
          </div>
        </div>
        <button
          aria-label="Share opportunity"
          style={{ background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <Share2 size={15} color="rgba(255,255,255,0.8)" />
        </button>
      </div>

      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #0A8A6E 0%, #065f46 100%)", padding: "24px 20px" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
          <Badge variant="category">{opportunity.category.toUpperCase()}</Badge>
          <Badge variant="verified">✓ VERIFIED PARTNER</Badge>
        </div>
        <h1 style={{ color: "white", fontWeight: 800, fontSize: 22, lineHeight: 1.3, letterSpacing: "-0.4px", marginBottom: 8 }}>
          {opportunity.title}
        </h1>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
          {opportunity.partner} — {opportunity.location}
        </p>
      </div>

      <div style={{ padding: "20px 16px", paddingBottom: stickyBottom + 120 }}>
        {/* Key stats */}
        <div className="card-hover" style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "var(--kh-shadow)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
            <StatRow icon={<Clock size={16} color="#0A8A6E" />} label="Duration" value={`${opportunity.hours} hours`} />
            <StatRow icon={<MapPin size={16} color="#0A8A6E" />} label="Location" value={opportunity.location} />
            <StatRow icon={<Calendar size={16} color="#0A8A6E" />} label="Deadline" value={opportunity.deadline} />
            <StatRow icon={<Users size={16} color="#0A8A6E" />} label="Spots Available" value="12 remaining" />
            <StatRow icon={<Award size={16} color="#0A8A6E" />} label="Certificate" value={opportunity.certificate ? "Available" : "Not offered"} />
            <StatRow icon={<Heart size={16} color="#0A8A6E" />} label="Community Hours" value={`${opportunity.hours} hrs`} />
          </div>
        </div>

        {/* Description */}
        <div className="card-hover" style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "var(--kh-shadow)" }}>
          <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332", marginBottom: 10 }}>About this Opportunity</h3>
          <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7 }}>{opportunity.description}</p>
          <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, marginTop: 10 }}>
            No prior clinical experience is required. An orientation session will be provided. Participants will complete at least {opportunity.hours} hours over 4–6 weeks.
          </p>
        </div>

        {/* Skills */}
        <div className="card-hover" style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "var(--kh-shadow)" }}>
          <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332", marginBottom: 12 }}>Skills You&apos;ll Use</h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {opportunity.skills.map((skill) => (
              <span key={skill} style={{ background: "#e6f7f3", color: "#0A8A6E", fontSize: 13, fontWeight: 600, padding: "6px 14px", borderRadius: 20, border: "1px solid rgba(10,138,110,0.2)" }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Partner */}
        <div className="card-hover" style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "var(--kh-shadow)" }}>
          <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332", marginBottom: 12 }}>Partner Organisation</h3>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 52, height: 52, background: "#e6f7f3", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Heart size={24} color="#0A8A6E" />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2, flexWrap: "wrap" }}>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332" }}>{opportunity.partner}</h4>
                <Badge variant="verified">✓ APPROVED</Badge>
              </div>
              <p style={{ color: "#64748b", fontSize: 13 }}>Verified NGO — Community Partner</p>
              <p style={{ color: "#64748b", fontSize: 12, marginTop: 2 }}>Approved by {STUDENT.institution}</p>
            </div>
          </div>
        </div>

        {/* What you'll gain */}
        <div className="card-hover" style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, marginBottom: 24, boxShadow: "var(--kh-shadow)" }}>
          <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332", marginBottom: 12 }}>What You&apos;ll Gain</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              `${opportunity.hours} verified community hours added to your Khayal record`,
              opportunity.certificate ? "Digital certificate of completion from Greenwich University" : "Community engagement experience",
              "Eligible for institutional recommendation letter",
              "Experience in community impact work",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ width: 20, height: 20, background: "#dcfce7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <CheckCircle2 size={12} color="#166534" />
                </div>
                <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* In-content primary CTA — always visible above jury bar */}
        <Button fullWidth onClick={() => onApply(opportunity.title)} style={{ fontSize: 16, padding: "18px 24px" }}>
          APPLY NOW →
        </Button>
        <p style={{ color: "#94a3b8", fontSize: 12, textAlign: "center", marginTop: 10 }}>
          Your application will be sent to {STUDENT.institution} for approval
        </p>
      </div>

      {/* Sticky Apply Bar — positioned above jury dock */}
      <div
        style={{
          position: "fixed",
          bottom: stickyBottom,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 480,
          background: "white",
          borderTop: "1px solid #e2e8f0",
          padding: "14px 20px",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
          zIndex: 9998,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
          <div>
            <p style={{ color: "#64748b", fontSize: 12 }}>Community Hours</p>
            <p style={{ fontWeight: 800, fontSize: 18, color: "#1a2332" }}>
              {opportunity.hours} hrs{" "}
              {opportunity.certificate && <span style={{ color: "#0A8A6E", fontSize: 13 }}>+ certificate</span>}
            </p>
          </div>
          <Button onClick={() => onApply(opportunity.title)} style={{ padding: "12px 24px", fontSize: 14 }}>
            APPLY NOW →
          </Button>
        </div>
        <p style={{ color: "#94a3b8", fontSize: 11, textAlign: "center" }}>
          Deadline: {opportunity.deadline} · 12 spots remaining
        </p>
      </div>
    </div>
  );
}

function StatRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
        {icon}
        <span style={{ color: "#64748b", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.4px" }}>{label}</span>
      </div>
      <p style={{ color: "#1a2332", fontWeight: 700, fontSize: 14 }}>{value}</p>
    </div>
  );
}
