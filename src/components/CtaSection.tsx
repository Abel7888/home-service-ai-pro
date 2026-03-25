const CtaSection = () => (
  <section id="cta" className="section-dark section-padding">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
        Your competitor just answered
        <br />a call you missed.
      </h2>
      <p className="opacity-60 mb-10 text-lg">
        Get set up in 48 hours. No tech knowledge needed. We handle everything.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a
          href="https://datashieldtech.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-foreground text-primary font-semibold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity"
        >
          View Live Demo ↗
        </a>
        <a
          href="#pricing"
          className="border border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded-lg text-base hover:border-primary-foreground/60 transition-colors"
        >
          See pricing ↑
        </a>
      </div>

      <p className="text-sm opacity-40">
        Setup takes 48 hours. Month-to-month. Cancel anytime.
      </p>
    </div>
  </section>
);

export default CtaSection;
