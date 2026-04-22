import { Heart } from "lucide-react";

export default function Prayer() {
  return (
    <div className="bg-white dark:bg-background-dark text-gray-800 dark:text-gray-200 font-sans antialiased transition-colors duration-300">
      {/* Header */}
      <header className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1512406932453-3e8ea8e60057?q=80&w=2070&auto=format&fit=crop")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white dark:to-background-dark"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-20 pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
            Share your <span className="italic text-black">burden</span>,<br />
            find your <span className="italic text-black">peace</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light tracking-wide leading-relaxed font-sans">
            Welcome to our prayer wall. A sacred space where your worries are
            shared and carried by a community of faith. You are not alone.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 py-16 md:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Column - Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="border-l-2 border-black pl-6 py-2">
            <h2 className="text-3xl md:text-4xl font-display mb-4 text-gray-900 dark:text-white">
              Why We Pray
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light font-sans">
              Prayer connects our hearts to God and to one another. Whether you
              are celebrating a joy or navigating a valley of shadow, we believe
              in the power of lifting each other up.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="group relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]">
              <img
                alt="Hands clasped in prayer with soft lighting"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                src="https://images.unsplash.com/photo-1459505728515-52a36a10a50b?auto=format&fit=crop&q=80&w=800"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                <span className="font-display italic text-2xl text-white">
                  "Come to me, all you who are weary..."
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-display mb-4 text-black">
              Confidentiality Promise
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed font-sans">
              Your privacy is sacred to us. Requests marked as "Private" are
              shared only with our pastoral care team. "Public" requests are
              shared with our verified prayer warriors community.
            </p>
            <div className="flex items-center text-black text-sm font-semibold tracking-wide font-sans">
              <span className="material-symbols-outlined text-lg mr-2">
                verified_user
              </span>
              Safe & Secure
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-xl shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100/50 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display mb-2 text-gray-900 dark:text-white">
                Submit a Prayer Request
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-10 font-light font-sans">
                Let us walk this journey with you.
              </p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label
                      className="block text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 font-semibold font-sans"
                      htmlFor="name"
                    >
                      Your Name (Optional)
                    </label>
                    <input
                      className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-black focus:ring-0 text-gray-900 dark:text-white pb-2 px-0 placeholder-gray-400 dark:placeholder-gray-600 transition-colors font-sans"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="relative">
                    <label
                      className="block text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 font-semibold font-sans"
                      htmlFor="email"
                    >
                      Email Address (Optional)
                    </label>
                    <input
                      className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-black focus:ring-0 text-gray-900 dark:text-white pb-2 px-0 placeholder-gray-400 dark:placeholder-gray-600 transition-colors font-sans"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-semibold font-sans">
                    Privacy Preference
                  </span>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input
                        className="peer sr-only"
                        name="privacy"
                        type="radio"
                        value="public"
                        defaultChecked
                      />
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-black dark:hover:border-white peer-checked:border-black peer-checked:bg-gray-100 dark:peer-checked:bg-gray-800 transition-all flex items-center group">
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-black mr-3">
                          groups
                        </span>
                        <div>
                          <div className="font-display text-gray-900 dark:text-white">
                            Public Prayer
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-sans">
                            Share with the community
                          </div>
                        </div>
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input
                        className="peer sr-only"
                        name="privacy"
                        type="radio"
                        value="private"
                      />
                      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-black dark:hover:border-white peer-checked:border-black peer-checked:bg-gray-100 dark:peer-checked:bg-gray-800 transition-all flex items-center group">
                        <span className="material-symbols-outlined text-gray-400 group-hover:text-black mr-3">
                          lock
                        </span>
                        <div>
                          <div className="font-display text-gray-900 dark:text-white">
                            Private Request
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-sans">
                            Pastoral team only
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 font-semibold font-sans"
                    htmlFor="request"
                  >
                    Your Prayer Request
                  </label>
                  <textarea
                    className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-lg p-4 focus:border-black focus:ring-1 focus:ring-black text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all resize-none font-sans"
                    id="request"
                    name="request"
                    placeholder="Share your heart here..."
                    rows={5}
                  ></textarea>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700"
                      id="updates"
                      name="updates"
                      type="checkbox"
                    />
                    <label
                      className="ml-2 block text-sm text-gray-500 dark:text-gray-400 font-sans"
                      htmlFor="updates"
                    >
                      Notify me when prayed for
                    </label>
                  </div>
                  <button
                    className="bg-[#003366] hover:bg-[#002244] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 font-sans"
                    type="submit"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Recent Prayers Section */}
      <section className="bg-white dark:bg-surface-dark py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-3 block font-sans">
              Community Support
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-gray-900 dark:text-white">
              Recent Prayers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Prayer Card 1 */}
            <div className="group">
              <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-gray-400">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-black font-display text-4xl opacity-50">
                      "
                    </span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-sans">
                      Today
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-light italic mb-6 font-sans">
                    For healing and strength for my mother during her upcoming
                    surgery. Praying for the doctors' hands to be guided.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white font-sans">
                    Anonymous
                  </span>
                  <div className="flex items-center text-xs text-gray-500 font-sans">
                    <Heart className="w-4 h-4 mr-1 text-red-400 fill-red-400" />{" "}
                    12 praying
                  </div>
                </div>
              </div>
            </div>

            {/* Prayer Card 2 */}
            <div className="group">
              <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-gray-400">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-black font-display text-4xl opacity-50">
                      "
                    </span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-sans">
                      Yesterday
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-light italic mb-6 font-sans">
                    Guidance for my son as he makes decisions about college.
                    That he may find the path intended for him.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white font-sans">
                    Sarah M.
                  </span>
                  <div className="flex items-center text-xs text-gray-500 font-sans">
                    <Heart className="w-4 h-4 mr-1 text-red-400 fill-red-400" />{" "}
                    8 praying
                  </div>
                </div>
              </div>
            </div>

            {/* Prayer Card 3 */}
            <div className="group">
              <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-gray-400">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-black font-display text-4xl opacity-50">
                      "
                    </span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-sans">
                      2 days ago
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-light italic mb-6 font-sans">
                    Gratitude for a new job opportunity after months of
                    searching. Praise be to God for His provision.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white font-sans">
                    Michael T.
                  </span>
                  <div className="flex items-center text-xs text-gray-500 font-sans">
                    <Heart className="w-4 h-4 mr-1 text-red-400 fill-red-400" />{" "}
                    24 praying
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#003366] hover:text-white hover:border-[#003366] transition-all font-sans">
              <span className="truncate">View All Prayers</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
