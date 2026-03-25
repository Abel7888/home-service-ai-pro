import { Phone, DollarSign, Target, Megaphone, Star } from "lucide-react";
import AgentCard from "./AgentCard";

const agents = [
  {
    icon: Phone,
    headline: "Never miss a job",
    subheadline:
      "Your 24/7 AI receptionist — answers every call, qualifies the job, books on your calendar, and texts the customer a confirmation. While you're under a sink.",
    badge: "Most popular",
    steps: [
      { text: "Call comes in → AI answers within 2 rings" },
      { text: "Qualifies job type, address, timing preference" },
      { text: "Books calendar slot + fires SMS confirmation" },
    ],
    roiCallout:
      "If you miss even 3 calls a week at $300/job — that's $46,800/year walking out the door.",
    apis: ["Twilio", "OpenAI Realtime", "Google Calendar", "SendGrid"],
    accentBg: "hsl(214, 100%, 95%)",
    accentText: "hsl(217, 91%, 45%)",
    accentBorder: "hsl(217, 91%, 55%)",
    featured: true,
  },
  {
    icon: DollarSign,
    headline: "Lost jobs recovery",
    subheadline:
      "Every missed call gets a text back within 60 seconds. Most owners have no idea how much revenue is sitting in that list.",
    badge: "Fastest ROI",
    steps: [
      { text: "Missed call detected → text fires in 60 seconds" },
      { text: "AI handles the reply conversation" },
      { text: "Booking link closes the job — logged to your dashboard" },
    ],
    roiCallout:
      "Clients recover an average of 2–3 jobs per week from this alone. That's found money.",
    apis: ["Twilio SMS", "OpenAI GPT-4o", "Calendly", "Google Sheets"],
    accentBg: "hsl(152, 70%, 93%)",
    accentText: "hsl(160, 84%, 28%)",
    accentBorder: "hsl(160, 84%, 39%)",
    featured: true,
  },
  {
    icon: Target,
    headline: "Lead conversion",
    subheadline:
      "Turns \"maybe later\" into booked. Every new lead gets an instant SMS and email, then a personalized AI follow-up at 24hr, 72hr, and 5 days. Books → stops. No-show → re-engages once.",
    badge: "Closes the loop",
    steps: [
      { text: "New lead from any source → instant SMS + email" },
      { text: "No booking after 24hrs → AI sends personalized follow-up referencing their specific job" },
      { text: "72hr nudge → final close → sequence stops when booked" },
    ],
    roiCallout:
      "Most businesses convert 10–20% of leads. This system pushes that to 30–40% with zero extra ad spend.",
    apis: ["Twilio", "SendGrid", "OpenAI", "HubSpot CRM", "Calendly", "Google Cal"],
    accentBg: "hsl(45, 100%, 93%)",
    accentText: "hsl(32, 95%, 38%)",
    accentBorder: "hsl(32, 95%, 50%)",
    featured: true,
  },
  {
    icon: Megaphone,
    headline: "Social media autopilot",
    subheadline:
      "Turns your finished jobs into content. Every completed job triggers an AI-written post with a before/after caption, scheduled across Facebook, Instagram, and Google Business — automatically.",
    badge: "New",
    steps: [
      { text: "Job marked complete → AI writes a trade-specific post + caption" },
      { text: "If owner uploads a photo → attaches it automatically" },
      { text: "Schedules and posts across all platforms at peak engagement times" },
    ],
    bonusFeatures: [
      "Monthly \"tip of the month\" post series generated automatically",
      "Seasonal promos written and scheduled (spring tune-up, winter prep etc.)",
      "Responds to comments and DMs with AI — routes booking requests to Agent 1",
    ],
    roiCallout:
      "Most trades businesses have dead social pages. This fills them with real job content — zero effort from the owner.",
    apis: ["OpenAI GPT-4o", "Buffer API", "Facebook/Instagram Graph API", "Google Business Profile API", "Zapier"],
    accentBg: "hsl(270, 80%, 96%)",
    accentText: "hsl(263, 70%, 50%)",
    accentBorder: "hsl(263, 70%, 58%)",
    featured: false,
  },
  {
    icon: Star,
    headline: "Smart reputation manager",
    subheadline:
      "After every job, happy customers get a review request. 5-star reviews get an instant referral ask. Unhappy customers are caught privately before they hit Google. Your reputation grows on autopilot.",
    badge: "Retention engine",
    steps: [
      { text: "Job complete → sentiment-check text fires (\"How did we do?\")" },
      { text: "Positive → routed to Google review link + referral ask" },
      { text: "Negative → flagged privately to owner for personal follow-up, never goes public" },
    ],
    bonusFeatures: [
      "AI drafts responses to every Google review (owner approves in one tap)",
      "Monthly reputation report: new reviews, average rating, referrals generated",
      "Tracks customer lifetime value — flags VIP customers for white-glove treatment",
    ],
    roiCallout:
      "Going from 12 reviews to 80+ reviews increases inbound calls by 3–4× — without spending a dollar on ads.",
    apis: ["Google My Business API", "Twilio SMS", "OpenAI", "Yotpo", "Birdeye", "Make.com"],
    accentBg: "hsl(160, 45%, 93%)",
    accentText: "hsl(168, 82%, 17%)",
    accentBorder: "hsl(168, 82%, 27%)",
    featured: false,
  },
];

const AgentsSection = () => (
  <section id="agents" className="section-light section-padding">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-4">
        Meet your AI workforce
      </h2>
      <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
        Five agents working together, 24/7. Each one solves a specific revenue leak in your business.
      </p>

      {/* Featured agents - top 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {agents.slice(0, 3).map((a) => (
          <AgentCard key={a.headline} {...a} />
        ))}
      </div>

      {/* Standard agents - bottom 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {agents.slice(3).map((a) => (
          <AgentCard key={a.headline} {...a} />
        ))}
      </div>
    </div>
  </section>
);

export default AgentsSection;
