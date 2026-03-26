import PhoneMockup from "./PhoneMockup";

const HeroSection = () => {
  return (
    <section className="section-dark section-padding min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Copy */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-balance mb-6">
            Your phone rings at 2am.
            <br />
            You're asleep.{" "}
            <span className="opacity-60">We answer it.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto lg:mx-0 opacity-70 leading-relaxed mb-14">
            5 AI agents running 24/7 for your home service business — answering calls,
            recovering lost jobs, converting leads, growing your reputation, and marketing
            you online. All on autopilot.
          </p>

          <div className="grid grid-cols-3 gap-6 md:gap-10 mb-14 max-w-3xl mx-auto lg:mx-0">
            {[
              { stat: "30–40%", desc: "of calls go unanswered — we fix that" },
              { stat: "2–3 jobs", desc: "recovered per week on average" },
              { stat: "$800–$1,200", desc: "extra revenue per month, per client" },
            ].map((item) => (
              <div key={item.stat} className="text-center lg:text-left">
                <div className="text-2xl md:text-4xl font-black mb-2">{item.stat}</div>
                <div className="text-xs md:text-sm opacity-50">{item.desc}</div>
              </div>
            ))}
          </div>

          <a
            href="#problem"
            className="inline-block bg-primary-foreground text-primary font-semibold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity"
          >
            See how it works ↓
          </a>
        </div>

        {/* Right — Phone Mockup */}
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
