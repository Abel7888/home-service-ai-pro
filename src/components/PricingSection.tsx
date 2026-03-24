import { Check, MessageSquare } from "lucide-react";

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
    note: "Most businesses see a return within the first week — we're proud of that.",
  },
  {
    name: "Growth",
    price: "$497",
    setup: "$797 setup",
    featured: true,
    features: [
      "Everything in Starter",
      "Agent 3: Lead Conversion",
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

const PricingSection = () => (
  <section id="pricing" className="section-light section-padding">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
        Honest pricing. Real results.
      </h2>
      <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
        We keep things straightforward — no hidden fees, no long-term contracts. Pick what fits your business today, and adjust anytime. The setup fee covers everything so you don't have to lift a finger.
      </p>
      <p className="text-muted-foreground mb-14 text-sm">
        Need Agents 4 or 5 on their own?{" "}
        <a href="/contact" className="underline text-foreground font-medium hover:opacity-80 transition-opacity">
          Reach out for custom pricing
        </a>{" "}
        — we're happy to chat.
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

      <div className="mt-10 p-6 rounded-xl bg-muted border border-border flex flex-col sm:flex-row items-center gap-4 justify-center">
        <MessageSquare className="w-5 h-5 text-muted-foreground shrink-0" />
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          <strong className="text-foreground">Looking for just Agents 4 &amp; 5?</strong>{" "}
          Social Media Autopilot and Reputation Manager are available as add-ons or standalone packages.{" "}
          <a href="/contact" className="underline text-foreground font-medium hover:opacity-80 transition-opacity">
            Request custom pricing →
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default PricingSection;
