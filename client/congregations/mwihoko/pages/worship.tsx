import React, { useState } from "react";

// --- Types & Constants ---
interface Sermon {
  series: string;
  title: string;
  info: string;
  img: string;
}

// --- SVG Icons ---
const ExpandMoreIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const PlayCircleIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// --- Sub-components ---

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img
          alt="Atmospheric sanctuary"
          className="w-full h-full object-cover scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa6RkGAWzHmVeSk8NgTP1qU9zonP4BytKXTL3R1RxZCi8DNH45goC0MDRMTwxDN3qWfoeRb_Fiqiqyd7DsFVQjflt-mre6tm23zcsWaUGEu1fzUHWA8gmS9xlFB1srGxfJPt3BIcOwn0ZM5s63BCv0eLYQ5IO39JcEuuBA1V4NYODx_c2rA_M5eKr_JCOMlt97wLJmAP8McQK19uaI0wmlbb7sLZim3hHac2AIqZyGN8m6uFz4YOoNg-Ek88gAtcq_5p1FvRcgTdk"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12 animate-fade-up">
        <h1 className="font-['Abril_Fatface'] text-5xl md:text-7xl lg:text-8xl text-white font-light mb-8 tracking-tight leading-tight">
          Seek peace and <br />
          <span className="italic text-navy-900 font-normal">
            discover faith.
          </span>
        </h1>
        <p className="text-gray-200 text-base md:text-lg font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed opacity-90 font-['Montserrat']">
          Welcome to a space of reflection and spiritual renewal. Join us as we
          journey together in worship, learning, and prayer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#latest-sermons"
            className="inline-block bg-[#003366] hover:bg-[#002244] text-white px-10 py-5 rounded-lg text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl transform hover:-translate-y-1 font-['Montserrat']"
          >
            Begin Your Journey
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ExpandMoreIcon />
      </div>
    </header>
  );
};

const SermonCard: React.FC<Sermon> = ({ series, title, info, img }) => (
  <div className="group bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">
    <div className="relative h-64 overflow-hidden">
      <img
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
        src={img}
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
    </div>
    <div className="p-8">
      <span className="text-navy-900 text-[10px] font-bold uppercase tracking-widest block mb-2 font-['Montserrat']">
        {series}
      </span>
      <h3 className="font-['Abril_Fatface'] text-2xl text-black mb-2 italic">
        {title}
      </h3>
      <p className="text-gray-600 text-xs mb-6 font-light font-['Montserrat']">
        {info}
      </p>
      <a
        href="#"
        className="inline-flex items-center text-navy-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-black transition-all group/link font-['Montserrat']"
      >
        Watch Now
        <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
          <PlayCircleIcon />
        </span>
      </a>
    </div>
  </div>
);

const Sermons: React.FC = () => {
  const sermons = [
    {
      series: "Series: Foundations",
      title: "The Power of Stillness",
      info: "Pastor David Miller • Oct 22, 2023",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnSUyDx808uS7Ve6BoYXl3V0FOvxmB08VSOh3LyY05qmZDWO-Y-RhVp7YzH-l_gYNzVjpMHpDx4R54ccB3c5Z-BsfmiuVPzgJuqIQvEJAXWUptaiP0ASBduyl3ZgX8YyX81V8hYgulDhVXw-ybhrcMfmsxEdqSbhdkPgdW2aekVivjBRNB-CzHZr0da-Fa4s0fRRAXNWVKHu9wEaW1itxMu98ZMaGyEd8APaObGG_7Ib2w2xw0Sed_bbEF_K1bzmzAGsNNbfMGTcU",
    },
    {
      series: "Series: Grace Abounds",
      title: "Finding Light in Shadows",
      info: "Pastor Sarah Jenkins • Oct 15, 2023",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxaOTPnDJ4cwAOQXI8Xg8VhFKwTt8bsCSxrRQAgIFG7CMq0XbOa8gdIVFbWUhmdJHW_ggZISmnIPS6XplsBDjni3aSjqkWxLF1mM6YukaWWGMrmTMY0pFN9Jl80HN3_pA1ELqPfoke1xC7ZQIgeugcfaW7BvxU2YDJtHfOH2LXrMN1j5kRKfWxBV02dZ2AvVTbeRUVJSg6E7Y5KZEvAmUUgs92atScF4fp06_efi5f6DUwnEt5E-Wn7g91g2MDT2wyvYT2_bGZd0k",
    },
    {
      series: "Series: Community",
      title: "Walking Together",
      info: "Pastor James Wilson • Oct 08, 2023",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZU815-IP-OhRrNmxKenqNhfbS9E-QBtOvG7HYkXiMFmctzXXV-h_22EF8RmAz4Zl-0UplzmYC5kk7ub3TZ7XnX0-jr0x1NJrO8Q_kZGiO9FxyUeU2HyqXLN-DeCnzd5BKTmoXYkkpbszyNeUWFGa20_146Eb97ebSgh5MniwQqQo4Z3B3m2BoLNSsZ-t7nUneVketwhgOrAUkaLa-UHAMuByYDoOayIYjyDgYqouwWMGT23OrSff2UOy_b0vZlKJ7vDVkQkbiCxE",
    },
  ];

  return (
    <section className="py-32 bg-white" id="latest-sermons">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-navy-900 text-xs font-bold uppercase tracking-[0.3em] mb-4 block font-['Montserrat']">
            Weekly Messages
          </span>
          <h2 className="font-['Abril_Fatface'] text-4xl md:text-5xl text-black font-light">
            Latest Sermons
          </h2>
          <div className="h-0.5 w-16 bg-navy-900 mx-auto mt-8 opacity-60"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {sermons.map((s, idx) => (
            <SermonCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgressBar: React.FC<{ label: string; progress: number }> = ({
  label,
  progress,
}) => (
  <div className="mb-10">
    <div className="flex justify-between items-end mb-3">
      <span className="text-black font-['Abril_Fatface'] text-xl tracking-wide">
        {label}
      </span>
      <span className="text-[#c05621] text-[10px] font-bold tracking-[0.2em] font-['Montserrat']">
        {progress}% COMPLETE
      </span>
    </div>
    <div className="w-full h-[1px] bg-gray-200 overflow-hidden">
      <div
        className="bg-[#c05621] h-full transition-all duration-[2000ms] ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  </div>
);

const Ministries: React.FC = () => {
  const [formState, setFormState] = useState({ name: "", request: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", request: "" });
    }, 4000);
  };

  return (
    <section
      className="py-32 bg-gray-50 border-y border-gray-200"
      id="ministries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="font-['Abril_Fatface'] text-3xl md:text-4xl text-black mb-8 italic">
              Bible Study Groups
            </h2>
            <p className="text-gray-600 font-light mb-12 leading-relaxed max-w-lg font-['Montserrat']">
              Join our active groups as we navigate through the Word together.
              Track our progress in each seasonal study as we dive deep into
              scripture.
            </p>

            <div className="space-y-4">
              <ProgressBar label="Romans: A Deep Dive" progress={75} />
              <ProgressBar label="The Psalms of Ascent" progress={40} />
              <ProgressBar label="Acts: The Early Church" progress={90} />
            </div>

            <div className="mt-14">
              <a
                href="#"
                className="inline-flex items-center text-navy-900 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-black transition-all group font-['Montserrat']"
              >
                Explore All Groups
                <span className="ml-4 w-8 h-[1px] bg-navy-900 group-hover:w-16 transition-all duration-500"></span>
              </a>
            </div>
          </div>

          <div
            id="contact"
            className="bg-white p-10 md:p-14 rounded-2xl border border-gray-200 shadow-2xl relative"
          >
            <h2 className="font-['Abril_Fatface'] text-3xl text-black mb-4 italic">
              Prayer Requests
            </h2>
            <p className="text-gray-600 text-sm font-light mb-10 leading-relaxed font-['Montserrat']">
              How can we support you in prayer this week? All requests are
              handled with confidentiality and care by our pastoral team.
            </p>

            {submitted ? (
              <div className="h-64 flex flex-col items-center justify-center text-center">
                <div className="text-navy-900 mb-4">
                  <CheckCircleIcon />
                </div>
                <h4 className="text-black font-['Abril_Fatface'] text-2xl mb-2">
                  Request Received
                </h4>
                <p className="text-gray-600 text-sm font-['Montserrat']">
                  We are holding you in our prayers.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    className="block text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900 mb-3 font-['Montserrat']"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:ring-navy-900 focus:border-navy-900 transition-all p-4 text-sm font-['Montserrat']"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900 mb-3 font-['Montserrat']"
                    htmlFor="request"
                  >
                    Your Prayer Request
                  </label>
                  <textarea
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:ring-navy-900 focus:border-navy-900 transition-all p-4 text-sm min-h-[140px] font-['Montserrat']"
                    id="request"
                    value={formState.request}
                    onChange={(e) =>
                      setFormState({ ...formState, request: e.target.value })
                    }
                    placeholder="Share your heart with us..."
                  ></textarea>
                </div>
                <button
                  className="w-full bg-[#003366] hover:bg-[#002244] text-white py-5 rounded-lg text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 shadow-lg transform active:scale-95 font-['Montserrat']"
                  type="submit"
                >
                  Submit Prayer Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueBlock: React.FC<{
  num: string;
  title: string;
  desc: string;
  bgImg?: string;
  isDark?: boolean;
}> = ({ num, title, desc, bgImg, isDark }) => (
  <div
    className={`relative min-h-[450px] group overflow-hidden border-r border-b border-gray-200 flex flex-col justify-end p-10 ${!bgImg ? "bg-white" : ""}`}
  >
    {bgImg && (
      <>
        <img
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-[3s]"
          src={bgImg}
        />
        <div className="absolute inset-0 bg-white/60 group-hover:bg-white/40 transition-colors duration-700"></div>
      </>
    )}
    {!bgImg && isDark && (
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-80"></div>
    )}

    <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
      <span className="text-navy-900 text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block opacity-60 font-['Montserrat']">
        Value {num}
      </span>
      <h3 className="font-['Abril_Fatface'] text-3xl text-black mb-6 tracking-wide italic">
        {title}
      </h3>
      <p className="text-gray-600 text-sm font-light leading-relaxed max-w-xs opacity-80 group-hover:opacity-100 transition-opacity font-['Montserrat']">
        {desc}
      </p>
    </div>
  </div>
);

const Values: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 p-8 md:p-16 z-20 pointer-events-none">
        <h2 className="font-['Abril_Fatface'] text-4xl md:text-5xl text-black/90">
          Our Values
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ValueBlock
          num="One"
          title="Authentic Worship"
          desc="We believe in worship that is spirited, truthful, and deeply connecting to the divine presence."
          bgImg="https://lh3.googleusercontent.com/aida-public/AB6AXuDtr6bIQ7HvRGyQ-5qfeGRoWnoB5cMdVgjEJ9Q49bdd8d-pqgcHsJoqDV4xSm6YZy-rvIchnVaYwM1PB_Ky07Q2Gjz4DmoCIZ29qUCF3VZsUHJPmsvn2b2y0v9tDwcfVk9-0-_UheZx5rwJEsGz38pTkX1B6yvwHaZX2gpJDJ_GH3tJx8oRdeYAYRgh_RTNzeHXn6PzHl6A1LibHQ7bFfu2V6dRb8sUB0bEPisGmvSRzqsycwDvfFZ8PbV8zGBJSMGXjMaawgIU9tQ"
        />
        <ValueBlock
          num="Two"
          title="Biblical Truth"
          desc="Our foundation is built on the timeless wisdom of scripture, guiding our modern lives with ancient truth."
          isDark
        />
        <ValueBlock
          num="Three"
          title="Community Care"
          desc="Loving our neighbors as ourselves through acts of service, compassion, and tangible support."
          bgImg="https://lh3.googleusercontent.com/aida-public/AB6AXuB4kEcd5y5kSY8YOA9XYiIMNuS_hv2st_yDksgBx19SIJUgVci8rEbskgN6ePPY8aHc0kClwI1nzuFpeT6P8kj0yTETjhIN-2DYBkqD063JX3T3zRZk-GntyDZcCGq8k-SxyV_cyFMC8fny3NlCU3bG08TqfedLtLOyiF5HxqgwjmvvtlW2dRvH75BClfRj-tvw4Lamg422-ZwlFHsZHaueCYKYlfA2fZwBz2QdidDQiI4wbAy7wj-c2MLXtZYUQNS0zr8FZV9ZES8"
        />
        <ValueBlock
          num="Four"
          title="Spiritual Growth"
          desc="Constant pursuit of maturity in faith, hope, and love through discipline, study, and daily practice."
        />
      </div>
    </section>
  );
};

// --- Main App Component ---

export default function Worship() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main>
        <Hero />
        <Sermons />
        <Ministries />
        <Values />
      </main>
    </div>
  );
}
