import React from 'react';

// --- TYPES ---
export interface ProgramArea {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Leader {
  name: string;
  role: string;
  imageUrl?: string;
}

// --- SVG ICONS ---
const MenuBookIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const EventAvailableIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <path d="M9 14l2 2 4-4"/>
  </svg>
);

const DiversityIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const PaletteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5"/>
    <circle cx="17.5" cy="10.5" r=".5"/>
    <circle cx="8.5" cy="7.5" r=".5"/>
    <circle cx="6.5" cy="12.5" r=".5"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
);

const HistoryEduIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <path d="M12 6v6l4 2"/>
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

const AutoStoriesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const SchoolIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const ChildCareIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
    <circle cx="12" cy="8" r="4"/>
    <path d="M12 14c-4 0-7 2-7 5v2h14v-2c0-3-3-5-7-5z"/>
  </svg>
);

// --- CONSTANTS ---
const PROGRAM_AREAS: ProgramArea[] = [
  {
    icon: <MenuBookIcon />,
    title: 'Spiritual Foundation',
    description: 'Specialized liturgy, Bible memorization, and Pastoral Instruction tailored for young hearts to know Christ intimately.'
  },
  {
    icon: <EventAvailableIcon />,
    title: 'Annual Highlights',
    description: 'Engaging seasonal programs including Vacation Bible Study (VBS), Church School Week, and high-energy Talents Week.'
  },
  {
    icon: <DiversityIcon />,
    title: 'Mentorship',
    description: 'Unique initiatives like the Fathers & Sons Breakfast to build strong family bonds and pass down godly values.'
  },
  {
    icon: <PaletteIcon />,
    title: 'Holistic Values',
    description: 'Nurturing environmental consciousness, inclusivity, and the arts to build well-rounded Christian character.'
  }
];

const LEADERS: Leader[] = [
  {
    name: 'Rev. Catherine Wambui',
    role: 'Patron'
  },
  {
    name: 'Mrs. Grace Maina',
    role: 'Superintendent'
  },
  {
    name: 'Peter Kihara',
    role: 'Secretary'
  },
  {
    name: 'Jane Waweru',
    role: 'Treasurer'
  }
];

// --- INTERNAL COMPONENTS ---

const Hero: React.FC = () => (
  <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
    <img 
      alt="PCEA Church School" 
      className="absolute inset-0 w-full h-full object-cover brightness-[0.35]" 
      src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-yellow-900/10 mix-blend-overlay"></div>
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <p className="text-white text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 opacity-80">
        Nurturing Future Generations
      </p>
      <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
        Church School
      </h1>
      <div className="h-1 w-24 bg-white mx-auto mb-10 opacity-50"></div>
      <p className="text-white text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed opacity-90">
        "Education for Life" — Equipping children spiritually, socially, and academically.
      </p>
    </div>
  </section>
);

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="mb-2">
    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">{title}</h2>
    <div className="h-1 w-12 bg-gray-900 opacity-20"></div>
  </div>
);

const ProgramCard: React.FC<ProgramArea> = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-10 group hover:bg-gray-100 transition-colors border-t-2 border-transparent hover:border-gray-900">
    <div className="inline-block text-gray-400 group-hover:text-gray-900 transition-colors mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold uppercase mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const LeaderCard: React.FC<Leader> = ({ name, role, imageUrl }) => (
  <div className="flex flex-col items-center group">
    <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-gray-100 group-hover:border-gray-300 transition-colors bg-gray-200 shadow-inner">
      {imageUrl ? (
        <img 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
          src={imageUrl} 
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <SchoolIcon />
        </div>
      )}
    </div>
    <h4 className="text-lg font-bold uppercase tracking-wide">{name}</h4>
    <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">{role}</p>
  </div>
);

const GrowthPillar: React.FC<{ title: string; subtitle: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="text-center p-8 border border-gray-100 rounded-lg group hover:border-gray-900 transition-all">
    <div className="text-gray-400 group-hover:text-gray-900 transition-colors mb-4 flex justify-center">{icon}</div>
    <h4 className="text-2xl font-black uppercase mb-2 italic tracking-tighter">{title}</h4>
    <p className="text-xs text-gray-500 uppercase tracking-widest">{subtitle}</p>
  </div>
);

// --- MAIN APP ---

export default function Kids() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      
      <main className="max-w-[1200px] mx-auto px-6 py-24">
        {/* Who We Are Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start">
          <div className="md:col-span-4">
            <SectionHeader title="Who We Are" />
          </div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              The PCEA Church School is the foundational ministry of our church, dedicated to <span className="font-bold">nurturing children aged 2–14 years</span>. We believe that the early years are the most critical for spiritual formation. Led by committed, Spirit-filled teachers, we provide a safe and vibrant environment where children don't just learn about God—they <span className="font-bold">experience His love</span>. We are the architects of a future generation rooted in the Presbyterian tradition and the Word of God.
            </p>
          </div>
        </section>

        {/* Vision & Mission Sections */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4">
            <SectionHeader title="Our Vision" />
          </div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light italic">
              "To raise a God-fearing society where children grow into adults who uphold the Christian values of love, moral integrity, self-control, and mutual respect."
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4">
            <SectionHeader title="Our Mission" />
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-gray-600">
              To fulfill the Great Commission by making disciples of all children, instilling <span className="font-bold">"Education for Life"</span> that equips them spiritually, socially, and academically to stand firm in a changing world.
            </p>
          </div>
        </section>

        {/* Journey of Growth Highlights */}
        <section className="mb-32">
          <div className="mb-16 text-center">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-gray-400">Holistic Curriculum</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">The Journey of Growth</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GrowthPillar icon={<HistoryEduIcon />} title="Spiritual" subtitle="Bible Memorization & Liturgy" />
            <GrowthPillar icon={<GroupsIcon />} title="Social" subtitle="Moral Integrity & Respect" />
            <GrowthPillar icon={<AutoStoriesIcon />} title="Academic" subtitle="Aligned with CBC Models" />
          </div>
        </section>

        {/* Creed Background Section */}
        <section className="mb-32 relative overflow-hidden rounded-xl h-auto md:h-96 py-16 md:py-0 flex items-center justify-center bg-gray-900">
          <img 
            alt="Children in worship" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 brightness-[0.4]" 
            src="https://images.unsplash.com/photo-1491843330267-f050b1247421?q=80&w=2070&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.5em] mb-6 text-white/70">Children's Creed</p>
            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight italic text-white leading-relaxed">
              I believe in God the Father, who loves me and hates sin. And his son Jesus Christ who died for my sins, I believe if I repent, He will forgive me and give me His Holy Spirit. I will pray to him diligently.
            </h2>
            <div className="h-1 w-20 bg-white mx-auto mt-8 opacity-40"></div>
          </div>
        </section>

        {/* Key Programs Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Our Key Programs</h2>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-4 md:mt-0 font-medium italic">Nurturing from age 2 to 14</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROGRAM_AREAS.map((area, index) => (
              <ProgramCard key={index} {...area} />
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-32">
          <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-tight mb-16">Church School Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {LEADERS.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
        </section>

        {/* Engagement CTA */}
        <div className="bg-gray-900 text-white p-12 md:p-20 text-center relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6 opacity-80">
              <ChildCareIcon />
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Partner With Us</h2>
            <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">
              We invite parents and guardians to actively participate in their children's spiritual journey. Join us every Sunday as we shape the hearts and minds of the next generation.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <a className="inline-block bg-white text-gray-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors shadow-lg" href="#">
                Enroll Your Child
              </a>
              <a className="inline-block border border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors" href="#">
                Volunteer as Teacher
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}