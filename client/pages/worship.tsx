import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Heart, Send, Sparkles, PlayCircle } from "lucide-react";

export default function Worship() {
  return (
    <div className="bg-white font-display text-gray-900 overflow-x-hidden">
      {/* Hero Section - Full Width */}
      <section className="w-full relative">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-8 relative overflow-hidden group shadow-lg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1600")`,
          }}
        >
          <div className="flex flex-col gap-2 text-center z-10 max-w-4xl px-4">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl drop-shadow-lg">
              Deepen Your Faith Daily
            </h1>
            <h2 className="text-gray-200 text-sm font-normal leading-relaxed @[480px]:text-lg mt-4 max-w-2xl mx-auto font-sans">
              Your central hub for worship, community, and spiritual growth. Join us
              online or in person.
            </h2>
          </div>
          <div className="flex gap-4 z-10 mt-4 flex-wrap justify-center px-4">
            <Link
              to="/give"
              className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-black text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-800 transition-all shadow-lg font-sans"
            >
              <span className="truncate">Start Today</span>
            </Link>
            <Link
              to="/worship#live"
              className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-all font-sans"
            >
              <span className="truncate">Watch Live</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Verse of the Day - Full Width */}
      <section className="w-full relative py-16 bg-black">
        <div
          className="w-full relative rounded-none overflow-hidden py-16 px-4 md:px-40 text-center bg-cover bg-center shadow-xl"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.85) 100%), url("https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=1600")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90 mix-blend-multiply"></div>
          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-white text-xl">auto_awesome</span>
              <h3 className="text-gray-300 uppercase tracking-widest text-xs font-bold font-sans">
                Verse of the Day
              </h3>
              <span className="material-symbols-outlined text-white text-xl">auto_awesome</span>
            </div>
            <blockquote className="text-white text-2xl md:text-4xl font-serif italic mb-6 leading-relaxed max-w-3xl">
              "The Lord is my shepherd; I shall not want. He makes me lie down in green
              pastures."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-white"></div>
              <p className="text-white font-bold text-lg font-sans">Psalm 23:1-2</p>
              <div className="h-[1px] w-12 bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermons - Full Width */}
      <section className="w-full py-8 px-4 md:px-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-4 pb-6 pt-2 border-b border-gray-200 mb-6">
            <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-[-0.015em] font-sans">
              Latest Sermons
            </h2>
            <Link
              to="/sermons"
              className="text-black text-sm font-bold hover:text-gray-600 flex items-center gap-1 group font-sans"
            >
              View All Sermons
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sermon 1 */}
            <div className="flex flex-col h-full rounded-xl bg-white border border-gray-200 overflow-hidden hover:border-gray-400 transition-colors group shadow-sm hover:shadow-md">
              <div
                className="w-full aspect-video bg-cover bg-center relative"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800")`,
                }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1 font-sans">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  45:00
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h3 className="text-gray-900 text-lg font-bold leading-tight mb-1 group-hover:text-black transition-colors font-sans">
                    Walking in Faith
                  </h3>
                  <p className="text-gray-500 text-sm font-medium font-sans">
                    Pastor John Doe • Oct 12
                  </p>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 font-sans">
                  Discovering the steps to trust God completely in uncertain times through
                  scripture.
                </p>
                <div className="mt-auto pt-2">
                  <button className="w-full h-9 rounded-lg bg-gray-100 text-gray-900 text-sm font-semibold hover:bg-gray-200 transition-colors border border-gray-200 font-sans">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>

            {/* Sermon 2 */}
            <div className="flex flex-col h-full rounded-xl bg-white border border-gray-200 overflow-hidden hover:border-gray-400 transition-colors group shadow-sm hover:shadow-md">
              <div
                className="w-full aspect-video bg-cover bg-center relative"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1548625361-195feee130d5?auto=format&fit=crop&q=80&w=800")`,
                }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1 font-sans">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  38:15
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h3 className="text-gray-900 text-lg font-bold leading-tight mb-1 group-hover:text-black transition-colors font-sans">
                    The Power of Prayer
                  </h3>
                  <p className="text-gray-500 text-sm font-medium font-sans">
                    Pastor Jane Doe • Oct 5
                  </p>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 font-sans">
                  Understanding how prayer changes our perspective and aligns us with God's
                  will.
                </p>
                <div className="mt-auto pt-2">
                  <button className="w-full h-9 rounded-lg bg-gray-100 text-gray-900 text-sm font-semibold hover:bg-gray-200 transition-colors border border-gray-200 font-sans">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>

            {/* Sermon 3 */}
            <div className="flex flex-col h-full rounded-xl bg-white border border-gray-200 overflow-hidden hover:border-gray-400 transition-colors group shadow-sm hover:shadow-md">
              <div
                className="w-full aspect-video bg-cover bg-center relative"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1523050335456-adabbf72c766?auto=format&fit=crop&q=80&w=800")`,
                }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1 font-sans">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  52:30
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h3 className="text-gray-900 text-lg font-bold leading-tight mb-1 group-hover:text-black transition-colors font-sans">
                    Community First
                  </h3>
                  <p className="text-gray-500 text-sm font-medium font-sans">Guest Speaker • Sep 28</p>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 font-sans">
                  Building strong relationships within the church body is essential for
                  spiritual health.
                </p>
                <div className="mt-auto pt-2">
                  <button className="w-full h-9 rounded-lg bg-gray-100 text-gray-900 text-sm font-semibold hover:bg-gray-200 transition-colors border border-gray-200 font-sans">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Study Groups & Prayer Requests - Full Width */}
      <section className="w-full py-8 px-4 md:px-40 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bible Study Groups */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 px-4">
              <h2 className="text-gray-900 text-2xl font-bold font-sans">Bible Study Groups</h2>
              <Link to="/bible-study" className="text-black text-sm font-bold hover:text-gray-600 font-sans">
                View All
              </Link>
            </div>
            <div className="bg-white rounded-xl p-4 flex gap-4 items-center border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
              <div
                className="w-20 h-20 shrink-0 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200")`,
                }}
              ></div>
              <div className="flex-1 min-w-0">
                <h4 className="text-gray-900 font-bold truncate font-sans">Romans: A Deep Dive</h4>
                <p className="text-gray-500 text-sm mb-2 font-sans">Wednesdays • 7:00 PM</p>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-black h-full w-2/3 rounded-full"></div>
                </div>
                <p className="text-gray-500 mt-1 uppercase font-bold tracking-wider text-[10px] font-sans">
                  Session 8 of 12
                </p>
              </div>
              <button className="size-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-white rounded-xl p-4 flex gap-4 items-center border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
              <div
                className="w-20 h-20 shrink-0 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=200")`,
                }}
              ></div>
              <div className="flex-1 min-w-0">
                <h4 className="text-gray-900 font-bold truncate font-sans">Young Adults Fellowship</h4>
                <p className="text-gray-500 text-sm mb-2 font-sans">Fridays • 6:30 PM</p>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-black h-full w-1/4 rounded-full"></div>
                </div>
                <p className="text-gray-500 mt-1 uppercase font-bold tracking-wider text-[10px] font-sans">
                  Session 3 of 10
                </p>
              </div>
              <button className="size-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 text-center mt-2">
              <p className="text-sm text-gray-600 font-sans">
                Looking for something else?{" "}
                <Link
                  to="/ministries"
                  className="text-black font-bold underline decoration-gray-400 underline-offset-2"
                >
                  Browse all 12 groups
                </Link>
              </p>
            </div>
          </div>

          {/* Prayer Requests */}
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between pb-4 px-4">
              <h2 className="text-gray-900 text-2xl font-bold font-sans">Prayer Requests</h2>
            </div>
            <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-center items-center shadow-sm text-center">
              <div className="flex flex-col items-center gap-6 max-w-md">
                <div className="p-4 bg-gray-100 rounded-lg text-black">
                  <span className="material-symbols-outlined text-5xl">volunteer_activism</span>
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-2xl font-sans mb-3">How can we pray for you?</h3>
                  <p className="text-gray-600 text-base font-sans leading-relaxed">
                    Share your prayer requests with our community. Your requests are handled with care and confidentiality.
                  </p>
                </div>
                <Link
                  to="/prayer"
                  className="inline-flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-black text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-800 transition-all shadow-lg gap-2 font-sans"
                >
                  <span className="truncate">Submit Prayer Request</span>
                  <span className="material-symbols-outlined text-lg">send</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
