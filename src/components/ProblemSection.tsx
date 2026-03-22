import { Phone, Clock, Eye } from "lucide-react";

const problems = [
  {
    icon: Phone,
    title: "Missed calls while on a job",
    desc: "= lost revenue",
  },
  {
    icon: Clock,
    title: "Leads that never got a follow-up",
    desc: "= money left behind",
  },
  {
    icon: Eye,
    title: "No time to post, market, or ask for reviews",
    desc: "= invisible online",
  },
];

const ProblemSection = () => (
  <section id="problem" className="section-light section-padding">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-14 text-balance">
        You're great at the job.
        <br />
        <span className="text-muted-foreground">The office work is killing you.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((p) => (
          <div key={p.title} className="text-center px-4">
            <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
              <p.icon className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="font-bold text-lg mb-1">{p.title}</h3>
            <p className="text-muted-foreground text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
