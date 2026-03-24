import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/mjkvvgng", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <main className="pt-20">
      <section className="section-light section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Get in Touch</h1>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Whether you have questions, want a demo, or you're ready to get started — we'd love to hear from you. No pressure, no sales pitch. Just a friendly conversation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Phone</p>
                  <a href="tel:5712512195" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    (571) 251-2195
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Location</p>
                  <p className="text-muted-foreground text-sm">Fort McMurray, Alberta</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <p className="text-muted-foreground text-sm">Send us a message using the form and we'll reply within 24 hours.</p>
                </div>
              </div>

              <div className="mt-8 p-5 rounded-xl bg-muted border border-border">
                <p className="text-sm font-semibold mb-1">Office Hours</p>
                <p className="text-sm text-muted-foreground">
                  Mon – Fri: 8 AM – 6 PM MST<br />
                  Our AI agents work 24/7, though 😉
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-xl border border-border p-8 text-center">
                  <p className="text-xl font-bold mb-2">Thank you! 🎉</p>
                  <p className="text-muted-foreground text-sm">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone <span className="text-muted-foreground">(optional)</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1">What type of service do you offer?</label>
                    <input
                      type="text"
                      id="service"
                      name="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="e.g. Plumbing, HVAC, Electrical"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Tell us about your business and what you're looking for…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    We'll get back to you within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
