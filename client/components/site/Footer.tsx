import { cn } from "@/lib/utils";

interface FooterProps {
  size?: 'small' | 'default';
}

export default function Footer({ size = 'default' }: FooterProps) {
  const isSmall = size === 'small';

  return (
    <footer className="border-t border-border/40 bg-background/80">
      {!isSmall && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-lg leading-tight mb-4">Presbyterian Church of East Africa</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              A welcoming community centered on faith, love, and service.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-6">Worship</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/worship#times" className="hover:text-foreground transition-colors block py-1">Service Times</a></li>
              <li><a href="/worship#live" className="hover:text-foreground transition-colors block py-1">Watch Online</a></li>
              <li><a href="/worship#sermons" className="hover:text-foreground transition-colors block py-1">Sermon Archive</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-6">Get Involved</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/get-involved#volunteer" className="hover:text-foreground transition-colors block py-1">Volunteer</a></li>
              <li><a href="/get-involved#groups" className="hover:text-foreground transition-colors block py-1">Fellowship Groups</a></li>
              <li><a href="/give" className="hover:text-foreground transition-colors block py-1">Give / Support</a></li>
            </ul>
          </div>
        </div>
      )}
      <div className="border-t border-border/40 py-8 text-center text-xs text-muted-foreground font-medium">
        © 2026 PCEA Tumaini Parish. All rights reserved.
      </div>
    </footer>
  );
}
