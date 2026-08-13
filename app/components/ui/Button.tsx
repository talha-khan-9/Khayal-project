type ButtonVariant = "primary" | "secondary" | "ghost" | "admin" | "future";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "#0A8A6E",
    color: "white",
    border: "none",
    boxShadow: "0 4px 12px rgba(10,138,110,0.3)",
  },
  secondary: {
    background: "white",
    color: "#1E3A5F",
    border: "1.5px solid #e2e8f0",
    boxShadow: "none",
  },
  ghost: {
    background: "transparent",
    color: "#64748b",
    border: "1.5px solid #e2e8f0",
    boxShadow: "none",
  },
  admin: {
    background: "#1E3A5F",
    color: "white",
    border: "none",
    boxShadow: "0 4px 12px rgba(30,58,95,0.25)",
  },
  future: {
    background: "#4f46e5",
    color: "white",
    border: "none",
    boxShadow: "0 4px 12px rgba(79,70,229,0.25)",
  },
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  children,
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`btn-press ${props.className ?? ""}`}
      style={{
        ...variantStyles[variant],
        borderRadius: 12,
        padding: "14px 20px",
        fontWeight: 800,
        fontSize: 15,
        cursor: props.disabled ? "not-allowed" : "pointer",
        opacity: props.disabled ? 0.6 : 1,
        letterSpacing: "0.3px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        transition: "transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease",
        width: fullWidth ? "100%" : undefined,
        ...style,
      }}
    >
      {children}
    </button>
  );
}
