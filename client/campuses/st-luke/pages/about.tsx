import { Link } from "react-router-dom";

export default function About() {
  const campusName = "PCEA St Luke";

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-gray-200">
      {/* Header */}
      <header className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            alt="Soft-focus light-filled church interior"
            className="w-full h-full object-cover filter blur-sm brightness-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO02tQFU8VdEyDpm1PG47TQof_TayEli_gYBaE4ZdCWYNZfpUmbEJ1XnmES8QlwK7b-_I-D3RUXEmaC-83304mlyw2gkhy8pAeQgfR9i_CtdIj_PBgHKSkHnHGwDQJBl1TWSlYdR6Q1R2Tamhvrplqf2dzFegGmrJoyV1l89ebDfcCftdyGeL_Wr-i2MqAVRCe4gUisD7N88t1Wh6vph49FwUyVyvDiWZTctb01JNjz6kogULia3dKCUSSQWTRlldPHACIhTc-sQs"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-white"></div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="text-xs uppercase tracking-[0.4em] text-white mb-6 block font-['Montserrat']">
            Our Heritage & Heart
          </span>
          <h1 className="text-6xl md:text-8xl text-white mb-8 leading-tight font-['Abril_Fatface'] italic">
            Our Story
          </h1>
          <div className="w-24 h-[1px] bg-white/50 mx-auto"></div>
        </div>
      </header>

      {/* Story Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10 border border-gray-300 p-2">
                <img
                  alt="Light streaming through church window"
                  className="w-full aspect-[4/5] object-cover grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAyiDA_bwDS9hJNRe_j9ICI9GeaZcZ7B2Wo7iOBq96KRqtV4fpxAvXqR-MFNEECR5F_Lcs1H97kNkAmSYn1EmdpwdMnoy9lObRMstqoq8Q02vS3WKXGAfm7LlPmNH0WunwvIws57GQNwcY2uz3KtORkEpXeWnoR-Ke_Omt967gAITp6MmUHSIr5r33b6RPVtks0fKQLdtqOXloSANyj07TNCWGvh3QFAihJ1rFv6hV8FSNeNsb6ncK-hYhAAS8Da9FRp-ErDjEN0k"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-navy-900/30 -z-0"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-navy-900 font-['Montserrat']">
                Founding Principles
              </span>
              <h2 className="text-4xl md:text-5xl text-black leading-tight font-['Abril_Fatface']">
                The Vision Behind <br />
                <span className="italic text-navy-900">{campusName}</span>
              </h2>
              <div className="space-y-6 text-gray-700 font-light leading-relaxed text-sm md:text-base font-['Montserrat']">
                <p>
                  {campusName} was established over five decades ago with a simple yet profound mission: to create a sanctuary where the ancient truths of scripture could meet the modern soul's longing for peace.
                </p>
                <p>
                  Our foundation is built upon the pillars of scriptural depth, communal restoration, and a radical commitment to grace. We believe that spiritual growth is not a destination, but a lifelong journey of returning to the light.
                </p>
                <p className="italic text-xl text-black/70">
                  "In every shadow, there is a promise of light. In every silence, a word of hope."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-40 relative flex flex-col items-center justify-center text-center px-6 mb-16 bg-white">
        <h2 className="text-5xl md:text-7xl text-black mb-8 italic font-['Abril_Fatface']">
          Walk with us
        </h2>
        <p className="text-gray-700 max-w-lg mb-12 text-sm md:text-base font-light tracking-wide font-['Montserrat']">
          Whether you are searching for answers or seeking a place to rest, our doors and hearts are open. Experience the journey of faith in person.
        </p>

        <Link
          to="/st-luke"
          className="group relative px-12 py-5 bg-black text-white text-xs uppercase tracking-[0.3em] rounded-full hover:bg-navy-900 transition-all duration-500 overflow-hidden font-['Montserrat']"
        >
          <span className="relative z-10">Visit Us This Sunday</span>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </Link>
      </section>
    </div>
  );
}
