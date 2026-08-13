"use client";

import {
  BookOpen, Calendar, ClipboardList, CreditCard, GraduationCap, 
  BarChart3, Users, Bell, LogOut, ChevronRight, Shield,
  Heart, Landmark, Star, Award, ExternalLink, Sparkles
} from "lucide-react";

interface Props {
  onEnterKhayal: () => void;
}

const serviceCards = [
  {
    icon: <BookOpen size={20} color="white" />,
    iconBg: "bg-[#6366f1]",
    title: "Summer 2026 Courses",
    desc: "Add / Drop / Attendance",
    action: "MANAGE",
    accent: "bg-[#eef2ff]",
  },
  {
    icon: <ClipboardList size={20} color="white" />,
    iconBg: "bg-[#ec4899]",
    title: "Manage Exams",
    desc: "Schedule & Conduct",
    action: "MANAGE",
    accent: "bg-[#fdf2f8]",
  },
  {
    icon: <Calendar size={20} color="white" />,
    iconBg: "bg-[#6366f1]",
    title: "Exams Schedule",
    desc: "Exams Timetable",
    action: "VIEW",
    accent: "bg-[#eef2ff]",
  },
  {
    icon: <BarChart3 size={20} color="white" />,
    iconBg: "bg-[#ec4899]",
    title: "Progress",
    desc: "Attempted Courses Evaluation",
    action: "VIEW",
    accent: "bg-[#fdf2f8]",
  },
];

const academicCards = [
  {
    icon: <BookOpen size={20} color="white" />,
    iconBg: "bg-[#6366f1]",
    title: "Important Info",
    desc: "Academic Calendar / Hand Book",
    action: "VIEW",
    accent: "bg-[#eef2ff]",
  },
  {
    icon: <ClipboardList size={20} color="white" />,
    iconBg: "bg-[#ec4899]",
    title: "Fall 2026–27 Registration",
    desc: "Opens after midterm",
    action: "REGISTER",
    accent: "bg-[#fdf2f8]",
    badge: "Opens after midterm",
  },
];

const adminCards = [
  {
    icon: <CreditCard size={20} color="white" />,
    iconBg: "bg-[#6366f1]",
    title: "Invoices",
    desc: "Invoices & Payment Status",
    action: "VIEW",
    accent: "bg-[#eef2ff]",
  },
  {
    icon: <Bell size={20} color="white" />,
    iconBg: "bg-[#ec4899]",
    title: "Reach Out",
    desc: "Feedback, Grievance & Complaints",
    action: "MANAGE",
    accent: "bg-[#fdf2f8]",
  },
];

export default function GreenwichPortal({ onEnterKhayal }: Props) {
  return (
    <div style={{ background: "#f0f4f8", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      {/* Top status bar area */}
      <div style={{ background: "#1B3A6B", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Greenwich coat of arms - simple placeholder */}
          <div style={{ width: 36, height: 36, background: "rgba(255,255,255,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <GraduationCap size={20} color="white" />
          </div>
          <span style={{ color: "white", fontWeight: 700, fontSize: 16, letterSpacing: "-0.3px" }}>Greenwich University</span>
        </div>
        <button style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <LogOut size={16} color="white" />
        </button>
      </div>

      {/* Profile Banner */}
      <div style={{ background: "linear-gradient(135deg, #1B3A6B 0%, #2d5fb0 100%)", padding: "20px 16px 28px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <div style={{ width: 64, height: 64, borderRadius: 12, background: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
            {/* Student avatar */}
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #60a5fa, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, color: "white" }}>AM</div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 2 }}>Good Evening,</p>
            <h2 style={{ color: "white", fontWeight: 800, fontSize: 20, marginBottom: 6, letterSpacing: "-0.3px" }}>Areen Momin</h2>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "4px 10px", display: "inline-block" }}>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 12, fontWeight: 500 }}>BS | PSYCHOLOGY | BS82 11361</p>
            </div>
          </div>
          <button style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 8, padding: "6px 10px", color: "white", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
            ✏️ Edit
          </button>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
            <p style={{ color: "white", fontWeight: 800, fontSize: 20 }}>12</p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>Cleared Courses</p>
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
            <p style={{ color: "white", fontWeight: 800, fontSize: 20 }}>34.0</p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>Earned Hours</p>
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
            <p style={{ color: "white", fontWeight: 800, fontSize: 20 }}>3.9</p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>CGPA</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "16px 16px", paddingBottom: 32 }}>
        
        {/* Announcement */}
        <div style={{ background: "#dbeafe", border: "1px solid #93c5fd", borderRadius: 10, padding: "10px 14px", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
          <Bell size={14} color="#1d4ed8" />
          <p style={{ color: "#1e40af", fontSize: 13, fontWeight: 500 }}>Your ID Card photo has been approved for printing.</p>
        </div>

        {/* ============================================ */}
        {/* KHAYAL MODULE CARD — Featured at top         */}
        {/* ============================================ */}
        <div style={{ marginBottom: 24 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #1E3A5F 0%, #0A6B55 100%)",
              borderRadius: 16,
              padding: "20px",
              color: "white",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(30,58,95,0.3)",
            }}
            onClick={onEnterKhayal}
          >
            {/* Background decoration */}
            <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, background: "rgba(255,255,255,0.06)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: -30, right: 40, width: 80, height: 80, background: "rgba(255,255,255,0.04)", borderRadius: "50%" }} />
            
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{ width: 48, height: 48, background: "rgba(255,255,255,0.15)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(255,255,255,0.2)" }}>
                <Heart size={22} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <h3 style={{ color: "white", fontWeight: 800, fontSize: 17, letterSpacing: "-0.3px" }}>Khayal</h3>
                  <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 6, padding: "2px 8px" }}>
                    <span style={{ color: "white", fontSize: 10, fontWeight: 700, letterSpacing: "0.5px" }}>NEW</span>
                  </div>
                </div>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginBottom: 10, lineHeight: 1.5 }}>
                  Community Engagement — Discover verified volunteer opportunities and build your community record.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "4px 10px", display: "flex", alignItems: "center", gap: 4 }}>
                    <Sparkles size={12} color="rgba(255,255,255,0.9)" />
                    <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 12, fontWeight: 600 }}>3 new opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onEnterKhayal}
              style={{
                marginTop: 16,
                width: "100%",
                background: "rgba(255,255,255,0.95)",
                color: "#1E3A5F",
                border: "none",
                borderRadius: 10,
                padding: "12px",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transition: "all 0.2s",
                letterSpacing: "0.3px",
              }}
            >
              OPEN KHAYAL <ExternalLink size={15} />
            </button>
          </div>
        </div>

        {/* Current Semester */}
        <SectionTitle title="Current Semester" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          {serviceCards.map((c, i) => (
            <PortalServiceCard key={i} {...c} />
          ))}
        </div>

        {/* Academic Services */}
        <SectionTitle title="Academic Services" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          {academicCards.map((c, i) => (
            <PortalServiceCard key={i} {...c} />
          ))}
        </div>

        {/* Administrative */}
        <SectionTitle title="Administrative" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          {adminCards.map((c, i) => (
            <PortalServiceCard key={i} {...c} />
          ))}
        </div>

        {/* Announcements */}
        <SectionTitle title="Announcements" rightContent={
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "#0A8A6E", fontSize: 13, fontWeight: 600 }}>View All</span>
            <ChevronRight size={14} color="#0A8A6E" />
          </div>
        } />
        <div style={{ background: "white", borderRadius: 12, border: "1px solid #e2e8f0", padding: 16 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332", marginBottom: 4 }}>MoU Signed between GGI & SBTE</h4>
              <p style={{ color: "#64748b", fontSize: 12, lineHeight: 1.5 }}>Karachi, August 30, 2023: Greenwich Global Institute (Constituent College of Greenwich University) and...</p>
            </div>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <ChevronRight size={14} color="#64748b" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title, rightContent }: { title: string; rightContent?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
      <h3 style={{ fontWeight: 700, fontSize: 17, color: "#1a2332", letterSpacing: "-0.2px" }}>{title}</h3>
      {rightContent}
    </div>
  );
}

function PortalServiceCard({
  icon, iconBg, title, desc, action, accent, badge
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  desc: string;
  action: string;
  accent: string;
  badge?: string;
}) {
  return (
    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 14, padding: 14, minHeight: 130 }}>
      <div className={`${iconBg} ${accent}`} style={{ width: 44, height: 44, borderRadius: 10, background: iconBg.replace("bg-", ""), display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
        {icon}
      </div>
      <h4 style={{ fontWeight: 700, fontSize: 14, color: "#1a2332", marginBottom: 4, lineHeight: 1.3 }}>{title}</h4>
      <p style={{ color: "#64748b", fontSize: 12, marginBottom: badge ? 6 : 12, lineHeight: 1.4 }}>{desc}</p>
      {badge && (
        <div style={{ background: "#fef3c7", borderRadius: 6, padding: "3px 8px", display: "inline-block", marginBottom: 8 }}>
          <span style={{ color: "#92400e", fontSize: 11, fontWeight: 600 }}>{badge}</span>
        </div>
      )}
      <button style={{ background: "#1B3A6B", color: "white", fontSize: 11, fontWeight: 700, padding: "6px 12px", borderRadius: 7, border: "none", cursor: "pointer", letterSpacing: "0.3px" }}>
        {action}
      </button>
    </div>
  );
}
