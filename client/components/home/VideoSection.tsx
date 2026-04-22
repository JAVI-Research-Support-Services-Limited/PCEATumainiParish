interface VideoSectionProps {
  youtubeUrl?: string;
}

export function VideoSection({
  youtubeUrl = "https://www.youtube.com/watch?v=M7lc1UVf-VE",
}: VideoSectionProps) {
  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(youtubeUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&playsinline=1`;

  return (
    <section id="video" className="w-full bg-neutral-50 py-24 lg:py-32">
      <div className="max-w-7xl px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-8 text-left">
          <h2 className="text-[#003366] font-display text-4xl md:text-6xl font-bold leading-tight">
            Watch our most <br /> recent sermon
          </h2>
          <p className="font-sans text-neutral-500 text-lg md:text-xl font-light leading-relaxed max-w-lg">
            Stay connected and grow in the Word anytime, anywhere through our
            archive of messages.
          </p>
          <div className="pt-4">
            <a
              href="https://youtube.com/@PCEAStLukeChurch"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans inline-flex items-center justify-center bg-[#003366] text-white hover:bg-[#002244] active:bg-[#001122] h-10 px-6 text-sm transition-colors rounded-sm border-b-2 border-[#c05621]"
            >
              Watch All Sermons
            </a>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="aspect-video rounded-sm overflow-hidden bg-neutral-900 shadow-2xl border-8 border-white">
            <iframe
              id="player"
              width="100%"
              height="100%"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#003366] rounded-full -z-10 opacity-10 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
