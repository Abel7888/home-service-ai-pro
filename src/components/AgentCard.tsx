import { type LucideIcon } from "lucide-react";

interface AgentStep {
  text: string;
}

interface AgentCardProps {
  icon: LucideIcon;
  headline: string;
  subheadline: string;
  badge: string;
  steps: AgentStep[];
  roiCallout: string;
  apis: string[];
  accentBg: string;
  accentText: string;
  accentBorder: string;
  featured?: boolean;
  bonusFeatures?: string[];
}

const AgentCard = ({
  icon: Icon,
  headline,
  subheadline,
  badge,
  steps,
  roiCallout,
  apis,
  accentBg,
  accentText,
  accentBorder,
  featured = false,
  bonusFeatures,
}: AgentCardProps) => (
  <div
    className={`agent-card ${featured ? "md:col-span-1" : ""}`}
    style={{ borderLeftWidth: "4px", borderLeftColor: accentBorder }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: accentBg }}
      >
        <Icon className="w-5 h-5" style={{ color: accentText }} />
      </div>
      <span
        className="text-xs font-semibold px-3 py-1 rounded-full"
        style={{ backgroundColor: accentBg, color: accentText }}
      >
        {badge}
      </span>
    </div>

    <h3 className="text-xl md:text-2xl font-bold mb-2">{headline}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{subheadline}</p>

    <div className="space-y-3 mb-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">How it works</p>
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-3">
          <div
            className="step-number mt-0.5"
            style={{ backgroundColor: accentBg, color: accentText }}
          >
            {i + 1}
          </div>
          <p className="text-sm leading-relaxed">{step.text}</p>
        </div>
      ))}
    </div>

    {bonusFeatures && bonusFeatures.length > 0 && (
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Bonus features</p>
        <ul className="space-y-1.5">
          {bonusFeatures.map((f, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span style={{ color: accentText }}>✦</span> {f}
            </li>
          ))}
        </ul>
      </div>
    )}

    <div
      className="roi-callout"
      style={{
        backgroundColor: accentBg,
        borderLeftColor: accentBorder,
        color: accentText,
      }}
    >
      {roiCallout}
    </div>

    <div className="flex flex-wrap gap-2 mt-5">
      {apis.map((api) => (
        <span key={api} className="pill-tag">{api}</span>
      ))}
    </div>
  </div>
);

export default AgentCard;
