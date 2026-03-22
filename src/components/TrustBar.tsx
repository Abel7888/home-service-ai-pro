const trades = [
  { icon: "🔧", label: "Plumbers" },
  { icon: "🌡️", label: "HVAC Techs" },
  { icon: "⚡", label: "Electricians" },
  { icon: "🏠", label: "Roofers" },
  { icon: "🍃", label: "Cleaners" },
];

const TrustBar = () => (
  <section className="section-muted py-14 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-muted-foreground text-sm font-medium mb-8">
        Used by plumbers, HVAC techs, electricians, roofers, and cleaners across North America
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {trades.map((t) => (
          <div key={t.label} className="flex flex-col items-center gap-2">
            <span className="text-3xl">{t.icon}</span>
            <span className="text-xs font-medium text-muted-foreground">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
