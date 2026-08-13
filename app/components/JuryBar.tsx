"use client";

import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Screen } from "../types";

export const JURY_BAR_HEIGHT = 76;

interface ScreenItem {
  id: Screen;
  num: number;
  label: string;
  tag: string;
}

interface Props {
  screen: Screen;
  screensList: ScreenItem[];
  showJuryBar: boolean;
  onToggle: () => void;
  onNavigate: (screen: Screen) => void;
}

export default function JuryBar({ screen, screensList, showJuryBar, onToggle, onNavigate }: Props) {
  const currentScreenObj = screensList.find((s) => s.id === screen);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 12,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        width: "94%",
        maxWidth: 720,
        background: "rgba(15, 23, 42, 0.94)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: 18,
        padding: "10px 14px",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
        color: "white",
        fontFamily: "Inter, sans-serif",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: showJuryBar ? 8 : 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              background: "#0A8A6E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sparkles size={14} color="white" />
          </div>
          <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.5px", color: "#f8fafc" }}>
            JURY DEMO SWITCHER
          </span>
          <span
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "#94a3b8",
              fontSize: 10,
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: 12,
            }}
          >
            SCREEN {currentScreenObj?.num}/8: {currentScreenObj?.tag}
          </span>
        </div>

        <button
          onClick={onToggle}
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "none",
            borderRadius: 6,
            padding: "4px 8px",
            color: "#cbd5e1",
            fontSize: 11,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          {showJuryBar ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          {showJuryBar ? "Hide" : "Screens (1-8)"}
        </button>
      </div>

      {showJuryBar && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            gap: 6,
            paddingTop: 4,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {screensList.map((item) => {
            const isActive = screen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                title={`Screen ${item.num}: ${item.label}`}
                style={{
                  background: isActive ? "#0A8A6E" : "rgba(255, 255, 255, 0.08)",
                  border: isActive ? "1px solid #34d399" : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 10,
                  padding: "6px 2px",
                  color: isActive ? "white" : "#cbd5e1",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.15s ease",
                }}
              >
                <div style={{ fontWeight: 800, fontSize: 13 }}>{item.num}</div>
                <div
                  style={{
                    fontSize: 9,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    opacity: 0.9,
                  }}
                >
                  {item.label.split(" ")[0]}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
