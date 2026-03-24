import { Check, MessageSquare, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$127",
    setup: "$197 setup",
    featured: false,
    features: [
      "Agent 1: Never Miss a Job",
      "Agent 2: Lost Jobs Recovery",
      "Email support, 48hr response",
      "Live within 48 hours",
    ],
    note: "Most businesses see a return within the first week.",
  },
  {
    name: "Growth",
    price: "$167",
    setup: "$297 setup",
    featured: true,
    features: [
      "Everything in Starter",
      "Agent 3: Lead Conversion",
      "Monthly performance report",
      "Priority support",
    ],
    note: "Our most popular plan.",
  },
  {
    name: "Full System",
    price: "$247",
    setup: "$397 setup",
    featured: false,
    features: [
      "Agents 1, 2 & 3 included",
      "Agent 4: Social Media Autopilot",
      "Agent 5: Smart Reputation Manager",
      "Monthly strategy call (30 min)",
      "Same-day support",
      "White-glove onboarding",
    ],
    note: null,
  },
];

const addOns = [
  {
    name: "Agent 4: Social Media Autopilot",
    description:
      "Turns your finished jobs into social media content — AI-written posts with before/after captions, scheduled across Facebook, Instagram & Google Business automatically.",
    highlights: [
      "AI-written posts from completed jobs",
      "Auto-scheduled at peak engagement times",
      "Monthly tip & seasonal promo posts included",
    ],
  },
  {
    name: "Agent 5: Smart Reputation Manager",
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
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
        Honest pricing. Real results.
      </h2>
      <p className="text-muted-foreground mb-3 max-w-2xl mx-auto">
        No hidden fees, no long-term contracts. Pick what fits your business today and adjust anytime. We handle all the setup — you don't lift a finger.
      </p>
      <p className="text-sm text-muted-foreground mb-14">
        Live within 48 hours of completing onboarding. Cancel anytime.
      </p>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl p-8 text-left transition-all duration-200 ${
              plan.featured
                ? "bg-primary text-primary-foreground border-2 border-primary md:scale-105 shadow-2xl"
                : "bg-background border border-border hover:border-foreground/20"
            }`}
          >
            <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-black">{plan.price}</span>
              <span className={`text-sm ${plan.featured ? "opacity-70" : "text-muted-foreground"}`}>/mo</span>
            </div>
            <p className={`text-sm mb-6 ${plan.featured ? "opacity-60" : "text-muted-foreground"}`}>
              + {plan.setup}
            </p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "opacity-80" : "text-muted-foreground"}`} />
                  {f}
                </li>
              ))}
            </ul>

            {plan.note && (
              <p className={`text-xs italic ${plan.featured ? "opacity-50" : "text-muted-foreground"}`}>
                {plan.note}
              </p>
            )}

            <a
              href="/contact"
              className={`block text-center mt-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 ${
                plan.featured
                  ? "bg-primary-foreground text-primary"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              Get started
            </a>
          </div>
        ))}
      </div>

      {/* Agent 4 & 5 add-on boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {addOns.map((addon) => (
          <div
            key={addon.name}
            className="rounded-xl border border-dashed border-border p-6 md:p-8 text-left hover:border-foreground/20 transition-all duration-200 bg-muted/50"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Add-on</span>
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
              Request pricing →
            </a>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="p-5 rounded-xl bg-muted border border-border flex flex-col sm:flex-row items-center gap-3 justify-center">
        <MessageSquare className="w-5 h-5 text-muted-foreground shrink-0" />
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          <strong className="text-foreground">Not sure which plan is right?</strong>{" "}
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
