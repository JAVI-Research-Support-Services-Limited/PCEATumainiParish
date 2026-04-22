import React from 'react';

// --- TYPES ---
export interface ChoirValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Maintaining export for consistency with project structure
export interface ProgramArea extends ChoirValue {}

interface Leader {
  name: string;
  role: string;
  imageUrl?: string;
}

// --- SVG ICONS ---
const AutoAwesomeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    <line x1="12" y1="2" x2="12" y2="6"/>
    <line x1="12" y1="18" x2="12" y2="22"/>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
  </svg>
);

const CampaignIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l18-5v12L3 14v-3z"/>
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
  </svg>
);

const MusicNoteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>
);

const GroupsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const PersonIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const LyricsIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 16v-4"/>
    <path d="M12 8h.01"/>
    <path d="M8 12h8"/>
  </svg>
);

// --- CONSTANTS ---
const CHOIR_VALUES: ChoirValue[] = [
  {
    icon: <AutoAwesomeIcon />,
    title: 'Liturgical Leadership',
    description: 'We anchor the Sunday service, guiding the congregation through hymns, psalms, and spiritual songs that align with the sermon.'
  },
  {
    icon: <CampaignIcon />,
    title: 'Evangelism',
    description: 'We take the Gospel outside the four walls of the church through music crusades, hospital visits, and recording ministry.'
  },
  {
    icon: <MusicNoteIcon />,
    title: 'Discipline & Training',
    description: 'We are committed to musical excellence, holding regular practices to sharpen our vocals, learn music theory, and master the art of choral performance.'
  },
  {
    icon: <GroupsIcon />,
    title: 'Mentorship',
    description: 'We actively mentor the next generation (Brigade and Church School choirs), passing down the rich musical heritage of the PCEA tradition.'
  }
];

const LEADERS: Leader[] = [
  {
    name: 'Mr. James K. Mwangi',
    role: 'Choirmaster'
  },
  {
    name: 'Mrs. Anne W. Njenga',
    role: 'Chairlady'
  },
  {
    name: 'Mr. Stephen Ochieng',
    role: 'Pianist & Music Director'
  },
  {
    name: 'Miss Grace Wambui',
    role: 'Secretary & Coordinator'
  }
];

// --- INTERNAL COMPONENTS ---

const Hero: React.FC = () => (
  <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-primary">
    <img 
      alt="Choir in worship" 
      className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" 
      src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <p className="text-white text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 opacity-80">
        Ministers of the Gospel Through Song
      </p>
      <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
        St. Luke Choir
      </h1>
      <div className="h-1 w-24 bg-white mx-auto mb-10 opacity-70 shadow-sm"></div>
      <p className="text-white text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed opacity-90">
        "Preparing the hearts of the people to receive the Word." — Utawala Parish.
      </p>
    </div>
  </section>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="mb-2 border-l-4 border-primary pl-4">
    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2 text-black">{title}</h2>
  </div>
);

const ValueCard: React.FC<ChoirValue> = ({ icon, title, description }) => (
  <div className="bg-white p-10 group transition-all border border-gray-100 shadow-sm hover:shadow-xl relative overflow-hidden">
    <div className="absolute top-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500 ease-out"></div>
    <div className="inline-block text-primary transition-colors mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-black uppercase mb-4 text-black">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const LeaderCard: React.FC<Leader> = ({ name, role, imageUrl }) => (
  <div className="flex flex-col items-center group">
    <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-gray-100 group-hover:border-primary transition-colors bg-gray-50 shadow-inner flex items-center justify-center relative">
      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
      {imageUrl ? (
        <img 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
          src={imageUrl} 
        />
      ) : (
        <div className="text-gray-300">
          <PersonIcon />
        </div>
      )}
    </div>
    <h4 className="text-lg font-black uppercase tracking-wide text-black">{name}</h4>
    <p className="text-[10px] text-primary font-medium uppercase tracking-widest mt-2">{role}</p>
  </div>
);

// --- MAIN APP ---

export default function Choir() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <Hero />
      
      <main className="max-w-[1200px] mx-auto px-6 py-24">
        {/* Who We Are Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start">
          <div className="md:col-span-4">
            <SectionHeader title="Who We Are" />
          </div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed text-black font-light">
              The PCEA St. Luke Utawala Choir is a <span className="font-bold">disciplined body of levites</span> called to lead the congregation in the worship of God. Far more than just singers, we are <span className="font-bold border-b-2 border-primary">ministers of the Gospel through song</span>. Whether leading the majestic hymns of the <span className="italic">Nyimbo cia Kûgooca</span> or contemporary praise, our role is to prepare the hearts of the people to receive the Word and to proclaim the glory of God to the world.
            </p>
          </div>
        </section>

        {/* Vision & Mission Sections */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4">
            <SectionHeader title="Our Vision" />
          </div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed text-black font-light italic">
              "To be a dynamic, Spirit-filled music ministry that leads St. Luke Utawala in true worship and uses the power of music to evangelize, edify, and transform lives."
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4">
            <SectionHeader title="Our Mission" />
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-gray-700">
              To <span className="font-bold text-primary">preach the Gospel through music</span>, pursuing excellence in skill and spirit, and ensuring that every service is an encounter with the Divine presence.
            </p>
          </div>
        </section>

        {/* Motto Section */}
        <section className="mb-32 relative overflow-hidden rounded-xl h-auto md:h-96 py-16 md:py-0 flex items-center justify-center bg-black">
          <img 
            alt="Musical instruments" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 brightness-[0.2]" 
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.5em] mb-6 text-primary">Our Motto</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic text-white leading-relaxed">
              "Make a joyful noise unto the Lord, all ye lands. Serve the Lord with gladness."
            </h2>
            <p className="text-white text-sm md:text-xl mt-4 font-bold opacity-60 italic">Psalm 100:1-2</p>
            <div className="h-1 w-20 bg-primary mx-auto mt-8"></div>
          </div>
        </section>

        {/* Core Values & Activities */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-black pb-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black">Core Values & Activities</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary mt-4 md:mt-0 font-black italic">Music as a Ministry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CHOIR_VALUES.map((item, index) => (
              <ValueCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-32">
          <h2 className="text-center text-3xl md:text-4xl font-black uppercase tracking-tight mb-16 text-black">Choir Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {LEADERS.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
        </section>

        {/* Engagement CTA */}
        <div className="bg-black text-white p-12 md:p-20 text-center relative overflow-hidden rounded-none border-t-8 border-primary">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6 opacity-80 text-primary">
              <LyricsIcon />
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight">Join the Harmony</h2>
            <p className="text-lg text-gray-400 mb-6 font-light leading-relaxed">
              Do you have a voice for the Lord? The St. Luke Utawala Choir is open to disciplined singers who are ready to minister through choral excellence.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <a className="inline-block bg-primary text-white px-8 py-4 text-xs font-black tracking-widest uppercase hover:bg-white hover:text-black transition-colors shadow-lg" href="#">
                Audition Now
              </a>
              <a className="inline-block border border-white text-white px-8 py-4 text-xs font-black tracking-widest uppercase hover:bg-white/10 transition-colors" href="#">
                Practice Schedule
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
