"use client";

import { useState } from "react";
import GreenwichPortal from "@/components/GreenwichPortal";
import KhayalDashboard from "@/components/KhayalDashboard";
import OpportunityDetail from "@/components/OpportunityDetail";
import ApplicationSubmitted from "@/components/ApplicationSubmitted";
import CommunityRecord from "@/components/CommunityRecord";
import AdminDashboard from "@/components/AdminDashboard";
import CreateOpportunity from "@/components/CreateOpportunity";
import CorporateCSR from "@/components/CorporateCSR";

export type Screen =
  | "portal"
  | "khayal-dashboard"
  | "opportunity-detail"
  | "application-submitted"
  | "community-record"
  | "admin-dashboard"
  | "create-opportunity"
  | "corporate-csr";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("portal");
  const [appliedOpportunity, setAppliedOpportunity] = useState<string | null>(null);

  const navigate = (s: Screen) => setScreen(s);

  const handleApply = (opportunityName: string) => {
    setAppliedOpportunity(opportunityName);
    setScreen("application-submitted");
  };

  const screens: Record<Screen, React.ReactNode> = {
    "portal": <GreenwichPortal onEnterKhayal={() => navigate("khayal-dashboard")} />,
    "khayal-dashboard": <KhayalDashboard navigate={navigate} />,
    "opportunity-detail": <OpportunityDetail navigate={navigate} onApply={handleApply} />,
    "application-submitted": (
      <ApplicationSubmitted
        opportunityName={appliedOpportunity || "Psychology Community Outreach Volunteer"}
        navigate={navigate}
      />
    ),
    "community-record": <CommunityRecord navigate={navigate} />,
    "admin-dashboard": <AdminDashboard navigate={navigate} />,
    "create-opportunity": <CreateOpportunity navigate={navigate} />,
    "corporate-csr": <CorporateCSR navigate={navigate} />,
  };

  return (
    <div className="container-app">
      {screens[screen]}
    </div>
  );
}
