export function VideoSection() {
  return (
    <section className="w-full bg-neutral-50 py-24 lg:py-32">
      <div className="max-w-7xl px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-8 text-left">
          <h2 className="text-black font-display text-4xl md:text-6xl font-bold leading-tight">
            Watch our most <br/> recent sermon
          </h2>
          <p className="font-sans text-neutral-500 text-lg md:text-xl font-light leading-relaxed max-w-lg">
            Stay connected and grow in the Word anytime, anywhere through our archive of messages.
          </p>
          <div className="pt-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans inline-flex items-center justify-center bg-black text-white hover:bg-neutral-600 active:bg-neutral-800 h-12 px-8 text-base transition-colors rounded-sm"
            >
              Watch All Sermons
            </a>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="aspect-video rounded-sm overflow-hidden bg-neutral-900 shadow-2xl border-8 border-white">
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/fbe65b7c973a843d09f5306f1dae3b8de1333f62?width=1844"
                alt="Recent sermon"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-primary border-b-[15px] border-b-transparent ml-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10 opacity-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
