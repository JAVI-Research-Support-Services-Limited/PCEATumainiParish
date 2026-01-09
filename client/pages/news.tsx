export default function News() {
  const items = [
    { title: 'Community Clean-Up Success', date: 'Aug 5, 2024', excerpt: 'Volunteers gathered and cleaned the neighborhood park.' },
    { title: 'New Youth Program Launch', date: 'Jul 20, 2024', excerpt: 'A new weekly mentorship program for teens.' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="mx-auto w-[90%] max-w-[1246px]">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">Church News</h1>
        <div className="grid gap-6">
          {items.map((it, idx) => (
            <article key={idx} className="p-6 border border-gray-100">
              <h2 className="text-lg font-semibold">{it.title}</h2>
              <p className="text-sm text-muted-foreground mb-2">{it.date}</p>
              <p className="text-sm">{it.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
