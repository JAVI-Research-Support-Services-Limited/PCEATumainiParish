import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BibleStudy() {
  return (
    <div className="bg-white dark:bg-background-dark text-gray-800 dark:text-gray-200 font-sans antialiased transition-colors duration-300">
      {/* Header */}
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-start">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1490127252417-7c393f9d3139?q=80&w=2940&auto=format&fit=crop")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 dark:from-background-dark/80 dark:to-background-dark/30"></div>
        <div className="relative z-10 max-w-2xl px-6 md:px-12 md:ml-20 text-left text-white mt-20">
          <h1 className="text-5xl md:text-7xl font-display leading-tight mb-6">
            Explore scripture and <br />
            <span className="italic text-black">discover wisdom.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200 mb-10 max-w-lg mr-auto leading-relaxed font-sans">
            Welcome to our study sanctuary. A place to deepen your
            understanding, reconnect with the Word, and nurture your spiritual
            journey.
          </p>
          <a
            className="inline-flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#003366] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#002244] transition-all shadow-lg font-sans"
            href="#studies"
          >
            <span className="truncate">Start a Study Plan</span>
          </a>
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white dark:from-background-dark to-transparent"></div>
      </header>

      {/* Current Series Section */}
      <section
        className="py-24 bg-white dark:bg-background-dark relative overflow-hidden"
        id="studies"
      >
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-4 block font-sans">
            Current Series
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-gray-900 dark:text-white">
            Discover studies designed to nurture your faith.
          </h2>
        </div>
        <div className="flex overflow-x-auto space-x-8 px-6 md:px-12 pb-12 no-scrollbar snap-x items-center justify-start md:justify-center">
          {/* Study 1 */}
          <div className="group relative flex-shrink-0 w-64 md:w-80 snap-center cursor-pointer">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-transparent group-hover:border-gray-400 transition-all duration-500 relative">
              <img
                alt="Person praying"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              />
            </div>
            <div className="text-center mt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-display text-gray-900 dark:text-white italic">
                The Gospel of John
              </h3>
              <p className="text-xs uppercase tracking-widest mt-2 text-black font-sans">
                12 Weeks
              </p>
            </div>
          </div>

          {/* Study 2 - Featured */}
          <div className="group relative flex-shrink-0 w-72 md:w-96 snap-center cursor-pointer transform -translate-y-4">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-gray-300 group-hover:border-gray-500 transition-all duration-500 relative shadow-2xl">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors"></div>
              <img
                alt="Open bible warm light"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
              />
            </div>
            <div className="text-center mt-8">
              <h3 className="text-3xl font-display text-gray-900 dark:text-white italic">
                Psalms of Comfort
              </h3>
              <p className="text-xs uppercase tracking-widest mt-2 text-black font-sans">
                Daily Devotional
              </p>
            </div>
          </div>

          {/* Study 3 */}
          <div className="group relative flex-shrink-0 w-64 md:w-80 snap-center cursor-pointer">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-transparent group-hover:border-gray-400 transition-all duration-500 relative">
              <img
                alt="Hands holding cross"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
                src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800"
              />
            </div>
            <div className="text-center mt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-display text-gray-900 dark:text-white italic">
                Romans Road
              </h3>
              <p className="text-xs uppercase tracking-widest mt-2 text-black font-sans">
                Small Group
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="inline-flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#003366] hover:border-[#003366] hover:text-white transition-all font-sans">
            <span className="truncate">View All Series</span>
          </button>
        </div>
      </section>

      {/* Study Resources Section */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Moody interior"
            className="w-full h-full object-cover opacity-20 filter grayscale"
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1600"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-0 md:px-12 flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/3 p-12 flex items-center justify-start border-r border-white/10">
            <h2 className="text-4xl md:text-5xl font-display leading-tight">
              Our Study
              <br />
              <span className="italic text-black">Resources</span>
            </h2>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2">
            <div className="group border-b border-r border-white/10 p-12 hover:bg-white/5 transition-colors duration-300 cursor-pointer">
              <span className="text-xs text-black uppercase tracking-widest mb-4 block font-sans">
                Resource One
              </span>
              <h3 className="text-xl font-display mb-4 group-hover:text-black transition-colors">
                Weekly Guides
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                Download comprehensive PDFs tailored for individual reflection.
                Each guide includes historical context, cross-references, and
                prayer prompts.
              </p>
            </div>
            <div className="group border-b border-white/10 md:border-r-0 p-12 hover:bg-white/5 transition-colors duration-300 cursor-pointer">
              <span className="text-xs text-black uppercase tracking-widest mb-4 block font-sans">
                Resource Two
              </span>
              <h3 className="text-xl font-display mb-4 group-hover:text-black transition-colors">
                Group Discussion
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                Facilitator notes and ice-breaker questions designed to foster
                deep community and vulnerable conversation within your small
                group.
              </p>
            </div>
            <div className="group border-b md:border-b-0 border-r border-white/10 p-12 hover:bg-white/5 transition-colors duration-300 cursor-pointer">
              <span className="text-xs text-black uppercase tracking-widest mb-4 block font-sans">
                Resource Three
              </span>
              <h3 className="text-xl font-display mb-4 group-hover:text-black transition-colors">
                Video Series
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                Access our library of teaching videos from pastors and guest
                speakers that accompany each major study series.
              </p>
            </div>
            <div className="group p-12 hover:bg-white/5 transition-colors duration-300 cursor-pointer">
              <span className="text-xs text-black uppercase tracking-widest mb-4 block font-sans">
                Resource Four
              </span>
              <h3 className="text-xl font-display mb-4 group-hover:text-black transition-colors">
                Reading Plans
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                Structured daily reading schedules to help you read through
                specific books of the Bible or thematic topics over the course
                of a month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-24 bg-white dark:bg-background-dark text-gray-900 dark:text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-display mb-8">
                Our journey into <br />
                <span className="italic font-light">Understanding...</span>
              </h2>
              <p className="text-sm leading-7 text-gray-600 dark:text-gray-400 mb-6 font-sans">
                Founded with a vision of promoting spiritual literacy, we
                believe in nurturing the mind and soul with diligent study. We
                provide tools not just for reading, but for comprehending the
                depth of scripture.
              </p>
              <p className="text-sm leading-7 text-gray-600 dark:text-gray-400 mb-8 font-sans">
                Our approach combines traditional hermeneutics with modern
                teaching methods, creating an environment where faith and
                understanding grow together.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-black uppercase text-xs font-bold tracking-widest hover:text-gray-600 transition-colors font-sans"
              >
                Learn More About Our Method{" "}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative h-[600px] flex justify-center items-center">
              <div className="absolute top-0 left-10 w-64 h-64 rounded-full border border-gray-300 dark:border-gray-700 opacity-50 z-0"></div>
              <div className="absolute right-0 top-10 w-64 h-96 overflow-hidden rounded-t-full z-10 shadow-2xl">
                <img
                  alt="Silhouette in church"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800"
                />
              </div>
              <div className="absolute left-10 bottom-0 w-56 h-80 overflow-hidden rounded-t-full z-20 shadow-2xl border-4 border-white dark:border-background-dark">
                <img
                  alt="Person studying"
                  className="w-full h-full object-cover filter sepia-[.5]"
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
