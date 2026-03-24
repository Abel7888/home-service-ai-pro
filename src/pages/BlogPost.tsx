import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const articles: Record<string, { title: string; date: string; content: string }> = {
  "how-to-stop-missing-calls": {
    title: "How to Stop Missing Calls and Start Booking More Jobs — Even When You're on a Ladder",
    date: "March 20, 2026",
    content: `
## The Problem Every Trades Pro Knows Too Well

You're elbow-deep in a job. Your phone buzzes. By the time you can check it, the caller already found someone else. Sound familiar?

Research shows that **30–40% of calls to home service businesses go unanswered**. That's not just an inconvenience — it's real money walking out the door. At $300 per average job, missing just 3 calls a week adds up to nearly **$47,000 a year** in lost revenue.

## Step 1: Understand When You're Missing Calls

Before you can fix the problem, you need to see it. Pull up your phone's call log and look at the last 30 days. How many calls came in while you were:

- On a job site
- Driving between appointments
- After hours or on weekends

If you're honest, the number is probably higher than you'd like. And that's okay — it's the reality of being a one-person (or small) operation.

## Step 2: Set Up a Reliable Call-Answering System

You have a few options:

1. **Hire a receptionist** — Great if you can afford $2,500–$4,000/month. Not realistic for most small operators.
2. **Use a virtual answering service** — Better, but many just take messages. They don't book jobs.
3. **Use an AI answering agent** — The newest option. An AI agent answers within 2 rings, qualifies the job (type, location, timing), and books it directly onto your calendar. The customer gets an instant text confirmation.

Option 3 is what we offer with **Agent 1: Never Miss a Job**. It runs 24/7 and costs a fraction of a human receptionist.

## Step 3: Automate Your Missed-Call Follow-Up

Even with the best system, some calls will slip through. What matters is what happens next.

The golden rule: **respond within 60 seconds**. Studies show that leads contacted within 1 minute are **391% more likely to convert** than those contacted after 5 minutes.

Set up an automatic text-back for every missed call. Something simple like:

> "Hey! Sorry we missed your call. We're on a job right now — what can we help you with? Reply here and we'll get you booked in."

This is exactly what **Agent 2: Lost Jobs Recovery** handles. It fires a text within 60 seconds, manages the reply conversation, and sends a booking link.

## Step 4: Track Your Results

Once your system is in place, keep an eye on:

- **Calls answered vs. missed** (aim for 95%+ answer rate)
- **Jobs booked from missed-call texts** (2–3 per week is typical)
- **Revenue recovered** (most clients see $800–$1,200/month extra)

## The Bottom Line

You didn't get into this trade to sit by a phone. But every unanswered call is a customer choosing your competitor. A simple, affordable system can make sure that doesn't happen — and it pays for itself many times over.

If you'd like to see how it works for your business, [get in touch](/contact). We're always happy to walk you through it.
    `,
  },
  "how-to-get-more-google-reviews": {
    title: "How to Get More Google Reviews Without Awkwardly Asking Every Customer",
    date: "March 18, 2026",
    content: `
## Why Google Reviews Matter More Than You Think

When someone searches "plumber near me" or "HVAC repair Fort McMurray," Google doesn't just show the closest business — it shows the most **trusted** one. And trust, in Google's eyes, comes down to reviews.

Businesses with **50+ reviews** get significantly more clicks and calls than those with 10 or fewer. Going from 12 reviews to 80+ can increase your inbound calls by **3–4×** — without spending a single dollar on ads.

## Step 1: Make It Ridiculously Easy

The #1 reason customers don't leave reviews? It's not that they don't want to — it's that they forget, or it's too much effort.

Here's how to fix that:

1. **Get your direct Google review link.** Go to your Google Business Profile, click "Ask for reviews," and copy the link.
2. **Send it via text right after the job.** Timing is everything. The customer is happiest right when the job's done well.

A simple message like this works great:

> "Thanks for choosing us today! If you were happy with the work, a quick Google review would mean the world to us: [link]"

## Step 2: Catch Unhappy Customers Before They Go Public

Not every job goes perfectly. And that's okay — what matters is how you handle it.

Instead of sending every customer straight to Google, use a **sentiment check** first:

> "How did we do today? Reply 1–5."

- **4 or 5?** Send them the Google review link + a referral ask.
- **1, 2, or 3?** Flag it privately so the owner can follow up personally.

This simple filter protects your public reputation while giving you a chance to make things right. It's what **Agent 5: Smart Reputation Manager** does automatically after every completed job.

## Step 3: Respond to Every Review

Google rewards businesses that **engage** with their reviews. Responding to reviews (positive and negative) signals that you're active and you care.

But who has time to write thoughtful responses to every review? This is where AI can help — drafting a personalized response that the owner can approve with one tap.

## Step 4: Turn Happy Customers into Referrals

A 5-star review is great. But what if that same happy customer also referred a friend?

After a positive review, send a simple follow-up:

> "Thank you so much for the kind words! If you know anyone who needs [your service], we'd love to take care of them too."

This costs nothing and creates a compounding growth loop. More reviews → more trust → more calls → more jobs → more reviews.

## Step 5: Track and Celebrate Your Progress

Set a monthly check-in:

- How many new reviews this month?
- What's your average rating?
- How many referrals came in?

Watching these numbers grow is genuinely motivating — and it shows you that the system is working.

## The Bottom Line

You don't need to be pushy to get reviews. You just need a system that asks at the right time, makes it easy, and protects you from public complaints. Set it up once and let it run.

Want help getting this set up for your business? [Let's talk](/contact).
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <main className="pt-20 section-light section-padding text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-sm underline">← Back to blog</Link>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <article className="section-light section-padding">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to blog
          </Link>
          <p className="text-sm text-muted-foreground mb-3">{article.date}</p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-8 leading-tight">{article.title}</h1>
          <div className="prose prose-neutral max-w-none">
            {article.content.split("\n").map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("## "))
                return <h2 key={i} className="text-xl font-bold mt-8 mb-3">{trimmed.slice(3)}</h2>;
              if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. "))
                return <p key={i} className="ml-4 mb-1 text-foreground/90">{trimmed}</p>;
              if (trimmed.startsWith("- "))
                return <p key={i} className="ml-4 mb-1 text-foreground/90">• {trimmed.slice(2)}</p>;
              if (trimmed.startsWith("> "))
                return (
                  <blockquote key={i} className="border-l-4 border-border pl-4 italic text-muted-foreground my-4">
                    {trimmed.slice(2)}
                  </blockquote>
                );
              // Handle bold
              const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="mb-3 text-foreground/90 leading-relaxed">
                  {parts.map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j}>{part.slice(2, -2)}</strong>
                    ) : (
                      // handle links
                      part.split(/(\[[^\]]+\]\([^)]+\))/g).map((seg, k) => {
                        const linkMatch = seg.match(/\[([^\]]+)\]\(([^)]+)\)/);
                        if (linkMatch) return <Link key={k} to={linkMatch[2]} className="underline font-medium">{linkMatch[1]}</Link>;
                        return <span key={k}>{seg}</span>;
                      })
                    )
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
