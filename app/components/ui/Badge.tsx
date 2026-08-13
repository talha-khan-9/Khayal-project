type BadgeVariant = "verified" | "pending" | "demo" | "future" | "category" | "neutral";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  verified: { background: "#dcfce7", color: "#166534" },
  pending: { background: "#fef3c7", color: "#92400e" },
  demo: { background: "#ede9fe", color: "#5b21b6" },
  future: { background: "#ede9fe", color: "#6d28d9" },
  category: { background: "#e6f7f3", color: "#0A8A6E" },
  neutral: { background: "#f1f5f9", color: "#64748b" },
};

export default function Badge({ children, variant = "neutral", className = "" }: BadgeProps) {
  return (
    <span
      className={className}
      style={{
        ...variantStyles[variant],
        fontSize: 10,
        fontWeight: 800,
        padding: "3px 10px",
        borderRadius: 20,
        letterSpacing: "0.4px",
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}
