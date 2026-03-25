import { Check, MessageSquare, Sparkles, ArrowUpRight } from "lucide-react";

const agents = [
  {
    number: 1,
    name: "Never miss a job",
    tagline: "24/7 AI call answering",
    price: "$127",
    setup: "$197 one-time setup",
    featured: false,
    features: [
      "Answers every call 24/7 — nights + weekends",
      "Qualifies job type, address, timing",
      "Books directly into your calendar",
      "SMS confirmation to customer",
      "Owner ping on every new booking",
      "Email support — 48hr response",
    ],
    roi: "1 recovered call/week at $300/job = $1,200/mo. This costs $127.",
    supportLabel: "Email support",
    supportDetail: "48hr response",
  },
  {
    number: 2,
    name: "Lost jobs recovery",
    tagline: "Missed call → text back → book",
    price: "$167",
    setup: "$297 one-time setup",
    featured: true,
    features: [
      "Texts missed callers within 60 seconds",
      "AI handles reply conversations",
      "3-touch follow-up sequence (24hr, 48hr, 72hr)",
      "Booking link sent automatically",
      "Weekly recovery report to owner",
      "Priority support — 24hr response",
    ],
    roi: "Clients recover 2–3 jobs/week on average. That's $800–$1,200 extra monthly.",
    supportLabel: "Priority support",
    supportDetail: "24hr response",
  },
  {
    number: 3,
    name: "Lead conversion",
    tagline: "New lead → nurture → book",
    price: "$247",
    setup: "$397 one-time setup",
    featured: false,
    features: [
      "Instant SMS + email on every new lead",
      "AI-personalized follow-up at 24hr, 72hr, 5 days",
      "Works from any lead source (ads, forms, referrals)",
      "HubSpot CRM — every lead logged automatically",
      "No-show re-engagement fires automatically",
      "Same-day support + monthly report",
    ],
    roi: "Conversion rate goes from 12% → 34% on average. Same leads, more booked jobs.",
    supportLabel: "Same-day support",
    supportDetail: "Monthly report",
  },
];

const addOns = [
  {
    number: 4,
    name: "Social Media Autopilot",
    description:
      "Turns your finished jobs into social media content — AI-written posts with before/after captions, scheduled across Facebook, Instagram & Google Business automatically.",
    highlights: [
      "AI-written posts from completed jobs",
      "Auto-scheduled at peak engagement times",
      "Monthly tip & seasonal promo posts included",
    ],
  },
  {
    number: 5,
    name: "Smart Reputation Manager",
    description:
      "After every job, happy customers get a review request. 5-star reviews trigger a referral ask. Unhappy customers are caught privately before they hit Google.",
    highlights: [
      "Automated review requests after every job",
      "AI-drafted review responses",
      "Monthly reputation report",
    ],
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-light section-padding">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
        Simple pricing.
        <br />
        <span className="text-muted-foreground">Serious ROI.</span>
      </h2>
      <p className="text-muted-foreground mb-3 max-w-2xl mx-auto">
        One agent or all three. Month-to-month. Setup in 48 hours.
      </p>
      <p className="text-sm text-muted-foreground mb-14">
        Live within 48 hours of completing onboarding. Cancel anytime.
      </p>

      {/* Agent cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {agents.map((agent) => (
          <div
            key={agent.number}
            className={`rounded-xl text-left transition-all duration-200 overflow-hidden ${
              agent.featured
                ? "bg-primary text-primary-foreground border-2 border-primary lg:scale-105 shadow-2xl"
                : "bg-background border border-border hover:border-foreground/20"
            }`}
          >
            {agent.featured && (
              <div className="bg-primary-foreground/10 text-center py-1.5 text-xs font-semibold uppercase tracking-wider">
                Most popular
              </div>
            )}

            <div className="p-8">
              {/* Header */}
              <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${agent.featured ? "opacity-60" : "text-muted-foreground"}`}>
                Agent {agent.number}
              </p>
              <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
              <p className={`text-sm mb-5 ${agent.featured ? "opacity-60" : "text-muted-foreground"}`}>
                {agent.tagline}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black">{agent.price}</span>
                <span className={`text-sm ${agent.featured ? "opacity-70" : "text-muted-foreground"}`}>/mo</span>
              </div>
              <p className={`text-sm mb-6 ${agent.featured ? "opacity-50" : "text-muted-foreground"}`}>
                + {agent.setup}
              </p>

              {/* Divider */}
              <div className={`border-t mb-6 ${agent.featured ? "border-primary-foreground/20" : "border-border"}`} />

              {/* What's included */}
              <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${agent.featured ? "opacity-60" : "text-muted-foreground"}`}>
                What's included
              </p>
              <ul className="space-y-3 mb-6">
                {agent.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${agent.featured ? "opacity-80" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* ROI box */}
              <div className={`rounded-lg p-4 mb-6 ${agent.featured ? "bg-primary-foreground/10" : "bg-muted"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${agent.featured ? "opacity-60" : "text-muted-foreground"}`}>
                  ROI anchor
                </p>
                <p className="text-sm leading-relaxed">{agent.roi}</p>
              </div>

              {/* CTA */}
              <a
                href="/contact"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 ${
                  agent.featured
                    ? "bg-primary-foreground text-primary"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Get Agent {agent.number} <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Support badge */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className={`inline-block text-xs px-3 py-1 rounded-full ${agent.featured ? "bg-primary-foreground/10 opacity-70" : "bg-muted text-muted-foreground"}`}>
                  {agent.supportLabel}
                </span>
                <span className={`text-xs ${agent.featured ? "opacity-50" : "text-muted-foreground"}`}>
                  {agent.supportDetail}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Agent 4 & 5 add-on boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {addOns.map((addon) => (
          <div
            key={addon.number}
            className="rounded-xl border border-dashed border-border p-6 md:p-8 text-left hover:border-foreground/20 transition-all duration-200 bg-muted/50"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Agent {addon.number} · Add-on
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2">{addon.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{addon.description}</p>
            <ul className="space-y-2 mb-6">
              {addon.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
                  {h}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-block border border-border text-foreground font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-muted transition-colors"
            >
              Contact for pricing →
            </a>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="p-5 rounded-xl bg-muted border border-border flex flex-col sm:flex-row items-center gap-3 justify-center">
        <MessageSquare className="w-5 h-5 text-muted-foreground shrink-0" />
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          <strong className="text-foreground">Not sure which agent is right?</strong>{" "}
          <a href="/contact" className="underline text-foreground font-medium hover:opacity-80 transition-opacity">
            Let's chat
          </a>{" "}
          — we'll help you figure out what makes sense for your business. No pressure.
        </p>
      </div>
    </div>
  </section>
);

export default PricingSection;
