import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    slug: "how-to-stop-missing-calls",
    title: "How to Stop Missing Calls and Start Booking More Jobs — Even When You're on a Ladder",
    excerpt:
      "If you're a home service pro, you already know: every missed call is a missed paycheck. Here's a practical guide to making sure no job slips through the cracks.",
    date: "March 20, 2026",
    readTime: "5 min read",
  },
  {
    slug: "how-to-get-more-google-reviews",
    title: "How to Get More Google Reviews Without Awkwardly Asking Every Customer",
    excerpt:
      "Google reviews are the #1 trust signal for local businesses. This step-by-step guide shows you how to build a review engine that runs on autopilot.",
    date: "March 18, 2026",
    readTime: "6 min read",
  },
];

const Blog = () => (
  <main className="pt-20">
    <section className="section-light section-padding">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Blog</h1>
        <p className="text-muted-foreground mb-12">
          Practical guides to help home service businesses grow — written by folks who actually get it.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group rounded-xl border border-border p-6 md:p-8 hover:border-foreground/20 transition-all duration-200"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span>{post.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:underline">{post.title}</h2>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <span className="text-sm font-semibold flex items-center gap-1">
                Read more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Blog;
