"use client";

import { useState } from "react";
import { ChevronLeft, Heart, Plus, CheckCircle2 } from "lucide-react";
import { Screen, Opportunity } from "../types";

interface Props {
  navigate: (s: Screen) => void;
  onAddOpportunity?: (opp: Opportunity) => void;
}

export default function CreateOpportunity({ navigate, onAddOpportunity }: Props) {
  const [formData, setFormData] = useState({
    title: "Environmental Awareness & Tree Plantation Drive",
    partner: "Green Pakistan Initiative",
    hours: "12",
    location: "Karachi — Malir Cantonment",
    category: "Environment",
    skills: "Teamwork, Field Work, Community Organizing",
    deadline: "Oct 10, 2026",
    description: "Lead tree planting efforts and run community eco-awareness workshops with local residents.",
    certificate: true,
    volunteersNeeded: "25",
  });

  const [published, setPublished] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOpp: Opportunity = {
      id: Date.now(),
      title: formData.title,
      partner: formData.partner,
      hours: Number(formData.hours) || 10,
      location: formData.location,
      skills: formData.skills.split(",").map((s) => s.trim()).filter(Boolean),
      certificate: formData.certificate,
      category: formData.category,
      deadline: formData.deadline,
      description: formData.description,
      verified: true,
      featured: false,
    };

    if (onAddOpportunity) {
      onAddOpportunity(newOpp);
    }

    setPublished(true);
    setTimeout(() => {
      navigate("admin-dashboard");
    }, 1800);
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "#1E3A5F", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={() => navigate("admin-dashboard")}
          style={{ background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <ChevronLeft size={18} color="white" />
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Heart size={14} color="rgba(255,255,255,0.7)" />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>Institution Admin</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>/</span>
            <span style={{ color: "white", fontSize: 12, fontWeight: 600 }}>Create Opportunity</span>
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 6, padding: "3px 8px" }}>
          <span style={{ color: "white", fontSize: 10, fontWeight: 700 }}>SCREEN 7</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #0A8A6E 100%)", padding: "20px 20px 24px" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "3px 10px", marginBottom: 8 }}>
          <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>GREENWICH UNIVERSITY ADMIN</span>
        </div>
        <h1 style={{ color: "white", fontWeight: 800, fontSize: 22, letterSpacing: "-0.4px", marginBottom: 4 }}>Create New Opportunity</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>Publish verified community engagement activities for students</p>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "20px 16px 60px" }}>
        
        {/* Success Alert */}
        {published && (
          <div style={{ background: "#dcfce7", border: "1px solid #86efac", borderRadius: 14, padding: "16px 20px", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, background: "#166534", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <CheckCircle2 size={20} color="white" />
            </div>
            <div>
              <p style={{ fontWeight: 800, fontSize: 15, color: "#14532d" }}>Opportunity Published Successfully!</p>
              <p style={{ fontSize: 12, color: "#166534", marginTop: 2 }}>Redirecting to Institution Admin Dashboard...</p>
            </div>
          </div>
        )}

        {/* Form Container */}
        <form onSubmit={handleSubmit} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 18, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, borderBottom: "1px solid #f1f5f9", paddingBottom: 12 }}>
            <h2 style={{ fontWeight: 800, fontSize: 16, color: "#1a2332" }}>Opportunity Details Form</h2>
            <span style={{ background: "#fef3c7", color: "#92400e", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 6 }}>DEMO FORM</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Title */}
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a2332", marginBottom: 6 }}>
                Opportunity Name <span style={{ color: "#e11d48" }}>*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #cbd5e1", fontSize: 14, outline: "none", color: "#1a2332" }}
                placeholder="e.g. Psychology Community Outreach Volunteer"
              />
            </div>

            {/* Partner NGO */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a2332", marginBottom: 6 }}>
                  Partner Organization <span style={{ color: "#e11d48" }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.partner}
                  onChange={(e) => setFormData({ ...formData, partner: e.target.value })}
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #cbd5e1", fontSize: 14, outline: "none", color: "#1a2332" }}
                  placeholder="e.g. HOPE Foundation"
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a2332", marginBottom: 6 }}>
                  Category <span style={{ color: "#e11d48" }}>*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #cbd5e1", fontSize: 14, outline: "none", background: "white", color: "#1a2332" }}
                >
                  <option value="Health & Wellbeing">Health & Wellbeing</option>
                  <option value="Education">Education</option>
                  <option value="Community Development">Community Development</option>
                  <option value="Youth">Youth</option>
                  <option value="Environment">Environment</option>
                </select>
              </div>
            </div>

            {/* Hours & Spots */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a2332", marginBottom: 6 }}>
                  Required Hours
                </label>
                <input
                  type="number"
                  value={formData.hours}
                  onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #cbd5e1", fontSize: 14, outline: "none", color: "#1a2332" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a2332", marginBottom: 6 }}>
                  Volunteers Needed
                </label>
                <input
                  type="number"
                  value={formData.volunteersNeeded}
                  onChange={(e) => setFormData({ ...formData, volunteersNeeded: e.target.value })}
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #cbd5e1", fontSize: 14, outline: "none", color: "#1a2332" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a2332", marginBottom: 6 }}>
                  Deadline
                </label>
                <input
                  type="text"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #cbd5e1", fontSize: 14, outline: "none", color: "#1a2332" }}
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a2332", marginBottom: 6 }}>
                Location / Region
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #cbd5e1", fontSize: 14, outline: "none", color: "#1a2332" }}
              />
            </div>

            {/* Required Skills */}
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a2332", marginBottom: 6 }}>
                Skills Required (comma separated)
              </label>
              <input
                type="text"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #cbd5e1", fontSize: 14, outline: "none", color: "#1a2332" }}
              />
            </div>

            {/* Description */}
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a2332", marginBottom: 6 }}>
                Description & Objectives
              </label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #cbd5e1", fontSize: 14, outline: "none", resize: "none", fontFamily: "inherit", color: "#1a2332" }}
              />
            </div>

            {/* Certificate toggle */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f8fafc", padding: "12px 16px", borderRadius: 10, border: "1px solid #e2e8f0" }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: 13, color: "#1a2332" }}>Digital Certificate Offered</p>
                <p style={{ fontSize: 12, color: "#64748b" }}>Greenwich University co-branded certificate on completion</p>
              </div>
              <input
                type="checkbox"
                checked={formData.certificate}
                onChange={(e) => setFormData({ ...formData, certificate: e.target.checked })}
                style={{ width: 20, height: 20, accentColor: "#0A8A6E", cursor: "pointer" }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={published}
            style={{
              marginTop: 24,
              width: "100%",
              background: "#0A8A6E",
              color: "white",
              border: "none",
              borderRadius: 12,
              padding: "16px",
              fontWeight: 800,
              fontSize: 15,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              boxShadow: "0 4px 14px rgba(10,138,110,0.3)",
              letterSpacing: "0.3px",
            }}
          >
            <Plus size={18} />
            PUBLISH OPPORTUNITY
          </button>
        </form>

        {/* Live Card Preview */}
        <div style={{ marginTop: 24 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>Student View Live Preview</p>
          <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 18, borderLeft: "4px solid #0A8A6E", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
              <span style={{ background: "#dcfce7", color: "#166534", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>
                {formData.category.toUpperCase()}
              </span>
              <span style={{ background: "#dcfce7", color: "#166534", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>
                ✓ VERIFIED PARTNER
              </span>
            </div>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1a2332", marginBottom: 4 }}>{formData.title || "Opportunity Title"}</h3>
            <p style={{ color: "#64748b", fontSize: 12, marginBottom: 10 }}>{formData.partner || "Partner NGO"} · {formData.location}</p>
            <div style={{ display: "flex", gap: 12, fontSize: 12, color: "#64748b" }}>
              <span>⏱ {formData.hours} hrs</span>
              <span>👥 {formData.volunteersNeeded} spots</span>
              {formData.certificate && <span>🏅 Certificate</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
