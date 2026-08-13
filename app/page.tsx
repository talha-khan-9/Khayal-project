"use client";

import { useState, useEffect } from "react";
import { Screen, Opportunity } from "./types";
import GreenwichPortal from "./components/GreenwichPortal";
import KhayalDashboard from "./components/KhayalDashboard";
import OpportunityDetail from "./components/OpportunityDetail";
import ApplicationSubmitted from "./components/ApplicationSubmitted";
import CommunityRecord from "./components/CommunityRecord";
import AdminDashboard from "./components/AdminDashboard";
import CreateOpportunity from "./components/CreateOpportunity";
import CorporateCSR from "./components/CorporateCSR";
import JuryBar, { JURY_BAR_HEIGHT } from "./components/JuryBar";
import { FEATURED_OPPORTUNITY_ID } from "./data/mockData";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("portal");
  const [selectedOpportunityId, setSelectedOpportunityId] = useState(FEATURED_OPPORTUNITY_ID);
  const [appliedOpportunity, setAppliedOpportunity] = useState<string>(
    "Psychology Community Outreach Volunteer"
  );
  const [hasApplied, setHasApplied] = useState(false);
  const [customOpportunities, setCustomOpportunities] = useState<Opportunity[]>([]);
  const [showJuryBar, setShowJuryBar] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [screen]);

  const screensList: { id: Screen; num: number; label: string; tag: string }[] = [
    { id: "portal", num: 1, label: "Student Portal", tag: "EMBEDDED PORTAL" },
    { id: "khayal-dashboard", num: 2, label: "Khayal Dashboard", tag: "STUDENT VIEW" },
    { id: "opportunity-detail", num: 3, label: "Opportunity Details", tag: "VERIFIED OPPORTUNITY" },
    { id: "application-submitted", num: 4, label: "Application Status", tag: "DUAL VERIFICATION" },
    { id: "community-record", num: 5, label: "My Community Record", tag: "VERIFIED RECORD" },
    { id: "admin-dashboard", num: 6, label: "Admin Dashboard", tag: "INSTITUTION ADMIN" },
    { id: "create-opportunity", num: 7, label: "Create Opportunity", tag: "ADMIN FORM" },
    { id: "corporate-csr", num: 8, label: "Corporate CSR", tag: "FUTURE EXPANSION" },
  ];

  const bottomPadding = showJuryBar ? JURY_BAR_HEIGHT + 24 : 24;

  const handleApply = (name: string) => {
    setAppliedOpportunity(name);
    setHasApplied(true);
    setScreen("application-submitted");
  };

  const handleSelectOpportunity = (id: number) => {
    setSelectedOpportunityId(id);
    setScreen("opportunity-detail");
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative", paddingBottom: bottomPadding }}>
      {screen === "portal" && (
        <GreenwichPortal onEnterKhayal={() => setScreen("khayal-dashboard")} />
      )}
      {screen === "khayal-dashboard" && (
        <KhayalDashboard
          navigate={setScreen}
          customOpportunities={customOpportunities}
          onSelectOpportunity={handleSelectOpportunity}
        />
      )}
      {screen === "opportunity-detail" && (
        <OpportunityDetail
          opportunityId={selectedOpportunityId}
          customOpportunities={customOpportunities}
          navigate={setScreen}
          onApply={handleApply}
          juryBarVisible={showJuryBar}
        />
      )}
      {screen === "application-submitted" && (
        <ApplicationSubmitted
          opportunityName={appliedOpportunity}
          navigate={setScreen}
        />
      )}
      {screen === "community-record" && (
        <CommunityRecord navigate={setScreen} hasPendingApplication={hasApplied} />
      )}
      {screen === "admin-dashboard" && (
        <AdminDashboard navigate={setScreen} customOpportunities={customOpportunities} />
      )}
      {screen === "create-opportunity" && (
        <CreateOpportunity
          navigate={setScreen}
          onAddOpportunity={(opp) => setCustomOpportunities((prev) => [opp, ...prev])}
        />
      )}
      {screen === "corporate-csr" && (
        <CorporateCSR navigate={setScreen} />
      )}

      <JuryBar
        screen={screen}
        screensList={screensList}
        showJuryBar={showJuryBar}
        onToggle={() => setShowJuryBar(!showJuryBar)}
        onNavigate={setScreen}
      />
    </div>
  );
}
