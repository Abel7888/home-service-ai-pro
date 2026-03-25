import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Agents", href: "/#agents" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/" className="text-lg font-black tracking-tight">
          Home Service<span className="text-muted-foreground"> AI</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <button
                key={l.label}
                onClick={() => handleClick(l.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </button>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
          <a
            href="https://datashieldtech.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            View Live Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          {links.map((l) =>
            l.href.startsWith("/#") ? (
              <button
                key={l.label}
                onClick={() => handleClick(l.href)}
                className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </button>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
