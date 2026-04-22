import { Link } from "react-router-dom";
import { Search, Calendar, User, Headphones, Share2, Play } from "lucide-react";

export default function Sermons() {
  return (
    <div className="bg-white dark:bg-background-dark text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
      {/* Header */}
      <header className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Abstract light texture in dark room"
            className="w-full h-full object-cover opacity-90 dark:opacity-60 brightness-75"
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1600"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white dark:to-background-dark"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <span className="block text-black uppercase tracking-[0.2em] text-sm mb-4 font-sans">
            Worship & Spiritual Growth
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight text-shadow">
            Sermon <span className="italic font-light text-black">Archive</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Explore our library of teachings designed to nurture your faith.
            Reconnect with the Word, find peace, and discover spiritual balance.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 border-b border-gray-200 dark:border-white/10 pb-4">
            <div>
              <h2 className="font-display text-3xl text-gray-900 dark:text-white font-sans">
                Latest Teachings
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-sans">
                Browse by series, speaker, or date.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-4 h-4 text-gray-400" />
                </span>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg leading-5 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black sm:text-sm transition-colors font-sans"
                  placeholder="Search sermons..."
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <select className="form-select appearance-none bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-2 pl-4 pr-8 rounded-lg text-sm focus:outline-none focus:border-black transition-colors cursor-pointer hover:border-black font-sans">
              <option>All Speakers</option>
              <option>Pastor John Doe</option>
              <option>Rev. Sarah Smith</option>
              <option>Guest Speakers</option>
            </select>
            <select className="form-select appearance-none bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-2 pl-4 pr-8 rounded-lg text-sm focus:outline-none focus:border-black transition-colors cursor-pointer hover:border-black font-sans">
              <option>All Series</option>
              <option>Book of Romans</option>
              <option>Kingdom Culture</option>
              <option>Advent 2023</option>
            </select>
            <select className="form-select appearance-none bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-2 pl-4 pr-8 rounded-lg text-sm focus:outline-none focus:border-black transition-colors cursor-pointer hover:border-black font-sans">
              <option>Most Recent</option>
              <option>Oldest First</option>
              <option>Popular</option>
            </select>
            <button className="ml-auto text-sm text-black hover:text-gray-600 transition-colors underline decoration-1 underline-offset-4 font-sans">
              Reset Filters
            </button>
          </div>
        </div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Sermon Card 1 */}
          <article className="group relative flex flex-col h-full bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-transparent hover:border-gray-400">
            <div className="relative h-64 overflow-hidden">
              <img
                alt="Open Bible on wooden table"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider font-sans">
                Video
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-black text-xs font-bold uppercase tracking-widest mb-1 block font-sans">
                  Romans Series • Part 4
                </span>
                <h3 className="font-display text-2xl text-white leading-tight">
                  Walking in the Spirit
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <button className="bg-[#003366]/90 text-white rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                  <Play className="w-8 h-8 ml-1 text-[#c05621]" />
                </button>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4 space-x-4 font-sans">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> Oct 24, 2023
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" /> Pastor John Doe
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 font-sans">
                  Understanding the transformative power of the Holy Spirit in
                  our daily lives. An exploration of Romans 8 and what it means
                  to be led by the Spirit rather than the flesh.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-400 font-mono font-sans">
                  ROM 8:1-17
                </span>
                <div className="flex space-x-2">
                  <button
                    className="text-gray-400 hover:text-[#003366] transition-colors"
                    title="Download Audio"
                  >
                    <Headphones className="w-5 h-5" />
                  </button>
                  <button
                    className="text-gray-400 hover:text-[#003366] transition-colors"
                    title="Share"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sermon Card 2 */}
          <article className="group relative flex flex-col h-full bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-transparent hover:border-gray-400">
            <div className="relative h-64 overflow-hidden">
              <img
                alt="Person praying in quiet light"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider font-sans">
                Audio Only
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-black text-xs font-bold uppercase tracking-widest mb-1 block font-sans">
                  Prayer Series • Part 1
                </span>
                <h3 className="font-display text-2xl text-white leading-tight">
                  The Silence of God
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <button className="bg-[#003366]/90 text-white rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                  <Play className="w-8 h-8 ml-1 text-[#c05621]" />
                </button>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4 space-x-4 font-sans">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> Oct 17, 2023
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" /> Rev. Sarah Smith
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 font-sans">
                  When prayers seem unanswered and the heavens feel like brass,
                  how do we maintain faith? Exploring the Psalms of lament and
                  finding hope in the silence.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-400 font-mono font-sans">
                  PSALM 22
                </span>
                <div className="flex space-x-2">
                  <button
                    className="text-gray-400 hover:text-[#003366] transition-colors"
                    title="Download Audio"
                  >
                    <Headphones className="w-5 h-5" />
                  </button>
                  <button
                    className="text-gray-400 hover:text-[#003366] transition-colors"
                    title="Share"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sermon Card 3 */}
          <article className="group relative flex flex-col h-full bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-transparent hover:border-gray-400">
            <div className="relative h-64 overflow-hidden">
              <img
                alt="Starry night sky over mountains"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider font-sans">
                Video
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-black text-xs font-bold uppercase tracking-widest mb-1 block font-sans">
                  Creation • Part 2
                </span>
                <h3 className="font-display text-2xl text-white leading-tight">
                  Stars & Dust
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <button className="bg-[#003366]/90 text-white rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                  <Play className="w-8 h-8 ml-1 text-[#c05621]" />
                </button>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4 space-x-4 font-sans">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> Oct 10, 2023
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" /> Pastor John Doe
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 font-sans">
                  We are made of dust, yet filled with the breath of God. A look
                  at the creation narrative and our responsibility as stewards
                  of the earth.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-400 font-mono font-sans">
                  GEN 1:26
                </span>
                <div className="flex space-x-2">
                  <button
                    className="text-gray-400 hover:text-[#003366] transition-colors"
                    title="Download Audio"
                  >
                    <Headphones className="w-5 h-5" />
                  </button>
                  <button
                    className="text-gray-400 hover:text-[#003366] transition-colors"
                    title="Share"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Add more sermon cards as needed... */}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 mb-24">
          <nav className="inline-flex rounded-md shadow-sm isolate space-x-2">
            <button className="relative inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-10 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans">
              <span className="sr-only">Previous</span>
              <span className="material-icons text-sm">chevron_left</span>
            </button>
            <button
              aria-current="page"
              className="relative z-10 inline-flex items-center px-4 py-2 rounded-lg border border-[#003366] bg-[#003366]/10 text-sm font-medium text-[#003366] focus:z-10 focus:outline-none focus:ring-1 focus:ring-[#003366] focus:border-[#003366] font-sans"
            >
              1
            </button>
            <button className="relative inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-10 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans">
              2
            </button>
            <button className="relative inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-10 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans">
              3
            </button>
            <button className="relative inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-10 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-colors font-sans">
              <span className="sr-only">Next</span>
              <span className="material-icons text-sm">chevron_right</span>
            </button>
          </nav>
        </div>
      </main>
    </div>
  );
}
