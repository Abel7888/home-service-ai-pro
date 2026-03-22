import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$297",
    setup: "$497 setup",
    featured: false,
    features: [
      "Agent 1: Never Miss a Job",
      "Agent 2: Lost Jobs Recovery",
      "Email support, 48hr response",
      "Setup in 48 hours",
    ],
    note: "Most businesses recover this in week 1",
  },
  {
    name: "Growth",
    price: "$497",
    setup: "$797 setup",
    featured: true,
    features: [
      "Everything in Starter",
      "Agent 3: Lead Conversion",
      "Agent 5: Reputation Manager",
      "Monthly performance report",
      "Priority support",
    ],
    note: null,
  },
  {
    name: "Full System",
    price: "$797",
    setup: "$1,497 setup",
    featured: false,
    features: [
      "All 5 agents",
      "Social Media Autopilot included",
      "Monthly strategy call (30 min)",
      "Same-day support",
      "White-glove onboarding",
    ],
    note: null,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-light section-padding">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
        Simple pricing. Serious ROI.
      </h2>
      <p className="text-muted-foreground mb-14">
        No contracts. Cancel anytime. Setup fee covers full configuration — you don't touch anything.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              href="#cta"
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
    </div>
  </section>
);

export default PricingSection;
