export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-12">
      <header className="space-y-2">
        <h1 className="font-display text-4xl font-bold">About Us</h1>
        <p className="text-muted-foreground">Get to know our story, beliefs, and leadership.</p>
      </header>
      <section id="story">
        <h2 className="text-2xl font-semibold">Our Story</h2>
        <p className="mt-2 text-muted-foreground">PCEA has a rich history of faith and service across East Africa.</p>
      </section>
      <section id="beliefs">
        <h2 className="text-2xl font-semibold">Our Beliefs</h2>
        <p className="mt-2 text-muted-foreground">We uphold the authority of Scripture and the centrality of Christ.</p>
      </section>
      <section id="leadership">
        <h2 className="text-2xl font-semibold">Our Leadership</h2>
        <p className="mt-2 text-muted-foreground">Elders, deacons, ministers, and lay leaders serve our community.</p>
      </section>
      <section id="heritage">
        <h2 className="text-2xl font-semibold">PCEA Heritage</h2>
        <p className="mt-2 text-muted-foreground">Rooted in the Reformed tradition with a heart for mission.</p>
      </section>
    </div>
  );
}
