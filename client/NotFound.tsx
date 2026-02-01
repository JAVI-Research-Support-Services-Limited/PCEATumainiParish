export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4">
            404
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Sorry, the page you are looking for does not exist.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Go back home
          </a>
        </div>
      </div>
    );
  }
  