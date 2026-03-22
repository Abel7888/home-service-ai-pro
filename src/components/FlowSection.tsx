import { ChevronRight } from "lucide-react";

const steps = [
  "Call answered",
  "Lead logged",
  "Follow-up sent",
  "Review requested",
  "Post published",
];

const FlowSection = () => (
  <section className="section-muted section-padding">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
        One system. Five agents.
        <br />
        <span className="text-muted-foreground">Everything talking to each other.</span>
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0 my-12">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center">
            <span className="px-5 py-3 rounded-full bg-background border border-border text-sm font-semibold whitespace-nowrap">
              {step}
            </span>
            {i < steps.length - 1 && (
              <ChevronRight className="w-5 h-5 text-muted-foreground mx-1 hidden md:block" />
            )}
          </div>
        ))}
      </div>

      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Every agent feeds the next. A booked job triggers a review request. A 5-star review
        triggers a referral ask. A completed job triggers a social post. The system compounds
        over time.
      </p>
    </div>
  </section>
);

export default FlowSection;
