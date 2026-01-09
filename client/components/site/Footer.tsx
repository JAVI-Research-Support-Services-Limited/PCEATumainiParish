export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Presbyterian Church of East Africa</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A welcoming community centered on faith, love, and service.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Worship</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="/worship#times" className="hover:text-foreground">Service Times</a></li>
            <li><a href="/worship#live" className="hover:text-foreground">Watch Online</a></li>
            <li><a href="/worship#sermons" className="hover:text-foreground">Sermon Archive</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Get Involved</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="/get-involved#volunteer" className="hover:text-foreground">Volunteer</a></li>
            <li><a href="/get-involved#groups" className="hover:text-foreground">Fellowship Groups</a></li>
            <li><a href="/give" className="hover:text-foreground">Give / Support</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PCEA. All rights reserved.
      </div>
    </footer>
  );
}
