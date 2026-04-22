import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function MwihokoWorship() {
  return (
    <div className="bg-background-light font-display text-gray-900">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-40 py-5 flex justify-center">
        <div className="w-full max-w-[960px]">
          <div className="@container">
            <div className="@[480px]:p-4 p-0">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-center justify-center p-8 relative overflow-hidden group shadow-lg"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1548625361-195feee130d5?auto=format&fit=crop&q=80&w=1600")`,
                }}
              >
                <div className="flex flex-col gap-2 text-center z-10 max-w-2xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl drop-shadow-lg">
                    Deepen Your Faith Daily
                  </h1>
                  <h2 className="text-gray-100 text-sm font-normal leading-relaxed @[480px]:text-lg mt-4 max-w-lg mx-auto">
                    Your central hub for worship, community, and spiritual
                    growth. Join us online or in person.
                  </h2>
                </div>
                <div className="flex gap-4 z-10 mt-4 flex-wrap justify-center">
                  <Link
                    to="/mwihoko/give"
                    className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#003366] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#002244] transition-all shadow-lg"
                  >
                    <span className="truncate">Start Today</span>
                  </Link>
                  <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-all">
                    <span className="truncate">Watch Live</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verse of the Day */}
      <section className="w-full px-4 md:px-40 py-6 flex justify-center">
        <div className="w-full max-w-[960px] px-4">
          <div
            className="relative rounded-xl overflow-hidden py-16 px-8 text-center bg-cover bg-center shadow-xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=1600")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90 mix-blend-multiply"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-xl">
                  auto_awesome
                </span>
                <h3 className="text-gray-300 uppercase tracking-widest text-xs font-bold">
                  Verse of the Day
                </h3>
                <span className="material-symbols-outlined text-primary text-xl">
                  auto_awesome
                </span>
              </div>
              <blockquote className="text-white text-2xl md:text-4xl font-serif italic mb-6 leading-relaxed max-w-3xl">
                "For where two or three gather in my name, there am I with
                them."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-[#003366]"></div>
                <p className="text-white font-bold text-lg">Matthew 18:20</p>
                <div className="h-[1px] w-12 bg-[#003366]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="w-full px-4 md:px-40 py-8 flex justify-center">
        <div className="w-full max-w-[960px]">
          <div className="flex items-center justify-between px-4 pb-6 pt-2 border-b border-border-dark mb-6">
            <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-[-0.015em]">
              Latest Sermons
            </h2>
            <Link
              to="/mwihoko"
              className="text-[#003366] text-sm font-bold hover:text-[#002244] flex items-center gap-1 group"
            >
              View All Sermons
              <ChevronRight className="text-lg group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* Sermon 1 */}
            <div className="flex flex-col h-full rounded-xl bg-surface-dark border border-border-dark overflow-hidden hover:border-primary/50 transition-colors group shadow-sm hover:shadow-md">
              <div
                className="w-full aspect-video bg-cover bg-center relative"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800")`,
                }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    play_circle
                  </span>
                  42:00
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h3 className="text-gray-900 text-lg font-bold leading-tight mb-1 group-hover:text-primary transition-colors">
                    Growing in Faith
                  </h3>
                  <p className="text-text-secondary text-sm font-medium">
                    Pastor James • Oct 11
                  </p>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  Steps to spiritual growth and deeper relationship with God.
                </p>
                <div className="mt-auto pt-2">
                  <button className="w-full h-9 rounded-lg bg-background-dark text-gray-900 text-sm font-semibold hover:bg-gray-200 transition-colors border border-border-dark">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>

            {/* Sermon 2 */}
            <div className="flex flex-col h-full rounded-xl bg-surface-dark border border-border-dark overflow-hidden hover:border-primary/50 transition-colors group shadow-sm hover:shadow-md">
              <div
                className="w-full aspect-video bg-cover bg-center relative"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1548625361-195feee130d5?auto=format&fit=crop&q=80&w=800")`,
                }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    play_circle
                  </span>
                  35:30
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h3 className="text-gray-900 text-lg font-bold leading-tight mb-1 group-hover:text-primary transition-colors">
                    United in Love
                  </h3>
                  <p className="text-text-secondary text-sm font-medium">
                    Pastor Mary • Oct 4
                  </p>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  The power of unity in the body of Christ.
                </p>
                <div className="mt-auto pt-2">
                  <button className="w-full h-9 rounded-lg bg-background-dark text-gray-900 text-sm font-semibold hover:bg-gray-200 transition-colors border border-border-dark">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>

            {/* Sermon 3 */}
            <div className="flex flex-col h-full rounded-xl bg-surface-dark border border-border-dark overflow-hidden hover:border-primary/50 transition-colors group shadow-sm hover:shadow-md">
              <div
                className="w-full aspect-video bg-cover bg-center relative"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1523050335456-adabbf72c766?auto=format&fit=crop&q=80&w=800")`,
                }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    play_circle
                  </span>
                  48:15
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h3 className="text-gray-900 text-lg font-bold leading-tight mb-1 group-hover:text-primary transition-colors">
                    Serving Our Community
                  </h3>
                  <p className="text-text-secondary text-sm font-medium">
                    Elder Samuel • Sep 27
                  </p>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  How we can make a difference in our local community.
                </p>
                <div className="mt-auto pt-2">
                  <button className="w-full h-9 rounded-lg bg-background-dark text-gray-900 text-sm font-semibold hover:bg-gray-200 transition-colors border border-border-dark">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Study Groups & Prayer Requests */}
      <section className="w-full px-4 md:px-40 py-8 flex justify-center mb-10">
        <div className="w-full max-w-[960px] grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {/* Bible Study Groups */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-gray-900 text-2xl font-bold">
                Bible Study Groups
              </h2>
              <Link
                to="/mwihoko"
                className="text-[#003366] text-sm font-bold hover:text-[#002244]"
              >
                View All
              </Link>
            </div>

            <div className="bg-surface-dark rounded-xl p-4 flex gap-4 items-center border border-border-dark hover:border-gray-400 transition-colors shadow-sm">
              <div
                className="w-20 h-20 shrink-0 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200")`,
                }}
              ></div>
              <div className="flex-1 min-w-0">
                <h4 className="text-gray-900 font-bold truncate">
                  Ephesians: Living God's Way
                </h4>
                <p className="text-text-secondary text-sm mb-2">
                  Tuesdays • 6:30 PM
                </p>
                <div className="w-full bg-background-dark h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#c05621] h-full w-1/2 rounded-full"></div>
                </div>
                <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-wider">
                  Session 6 of 12
                </p>
              </div>
              <button className="size-10 rounded-full bg-background-dark flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <ChevronRight />
              </button>
            </div>

            <div className="bg-surface-dark rounded-xl p-4 flex gap-4 items-center border border-border-dark hover:border-gray-400 transition-colors shadow-sm">
              <div
                className="w-20 h-20 shrink-0 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=200")`,
                }}
              ></div>
              <div className="flex-1 min-w-0">
                <h4 className="text-gray-900 font-bold truncate">
                  Mwihoko Youth Group
                </h4>
                <p className="text-text-secondary text-sm mb-2">
                  Saturdays • 5:00 PM
                </p>
                <div className="w-full bg-background-dark h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#c05621] h-full w-3/4 rounded-full"></div>
                </div>
                <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-wider">
                  Week 8 of 10
                </p>
              </div>
              <button className="size-10 rounded-full bg-background-dark flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <ChevronRight />
              </button>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center mt-2">
              <p className="text-sm text-gray-600">
                Looking for something else?{" "}
                <Link
                  to="/mwihoko"
                  className="text-primary font-bold underline decoration-primary/50 underline-offset-2"
                >
                  Browse all 10 groups
                </Link>
              </p>
            </div>
          </div>

          {/* Prayer Requests */}
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-gray-900 text-2xl font-bold">
                Prayer Requests
              </h2>
            </div>
            <div className="flex-1 bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <div className="p-2 bg-[#003366]/10 rounded-lg text-[#003366]">
                    <span className="material-symbols-outlined">
                      volunteer_activism
                    </span>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg">
                      How can we pray for you?
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Your requests are shared with our pastoral team in
                      confidence.
                    </p>
                  </div>
                </div>
                <form className="flex flex-col gap-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Your Name (Optional)
                    </label>
                    <input
                      className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      id="name"
                      placeholder="Your Name (Optional)"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="request">
                      Prayer Request
                    </label>
                    <textarea
                      className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      id="request"
                      placeholder="Share your prayer request here..."
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      className="rounded bg-background-dark border-border-dark text-primary focus:ring-primary/50"
                      id="private"
                      type="checkbox"
                    />
                    <label className="text-sm text-gray-500" htmlFor="private">
                      Keep this request private (Pastors only)
                    </label>
                  </div>
                </form>
              </div>
              <button className="w-full mt-6 bg-[#003366] text-white font-bold h-12 rounded-lg hover:bg-[#002244] transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                <span>Submit Prayer Request</span>
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
