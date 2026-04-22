import React from 'react';

// --- TYPES ---
export interface StrategicInitiative {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProgramArea extends StrategicInitiative {}

interface Leader {
  name: string;
  role: string;
  imageUrl?: string;
}

// --- SVG ICONS ---
const HistoryEduIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const LocalShippingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

const FamilyRestroomIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const WorkHistoryIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const AutoStoriesIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const SchoolIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

// --- CONSTANTS ---
const STRATEGIC_INITIATIVES: StrategicInitiative[] = [
  {
    icon: <HistoryEduIcon />,
    title: 'TEE Studies',
    description: 'Theological Education by Extension (TEE) providing accessible, decentralized theological training for clergy and laity, empowering the priesthood of all believers.'
  },
  {
    icon: <LocalShippingIcon />,
    title: 'Expanded Chaplaincy',
    description: 'Moving beyond the sanctuary to reach learning institutions, medical centers, and the transport industry (Motorbikes, Matatus, Aviation).'
  },
  {
    icon: <FamilyRestroomIcon />,
    title: 'Family Programs',
    description: 'Life-stage ministries covering courtship, parenting, domestic workers, and support for widows, orphans, and senior citizens.'
  },
  {
    icon: <WorkHistoryIcon />,
    title: 'Professional Fellowships',
    description: 'Mobilizing experts—Teachers, Lawyers, Accountants—to serve God through their specific vocations.'
  }
];

const LEADERS: Leader[] = [
  {
    name: 'Rev. Dr. Samuel K. Njogu',
    role: 'Director, Christian Education'
  },
  {
    name: 'Mrs. Lydia M. Wambui',
    role: 'CE National Coordinator'
  },
  {
    name: 'Mr. David N. Maina',
    role: 'Curriculum Specialist'
  },
  {
    name: 'Elder Ruth G. Njeri',
    role: 'Professional Fellowships'
  }
];

// --- INTERNAL COMPONENTS ---

const Hero: React.FC = () => (
  <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
    <img 
      alt="Education and Learning" 
      className="absolute inset-0 w-full h-full object-cover brightness-[0.35]" 
      src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-stone-900/20 mix-blend-overlay"></div>
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <p className="text-white text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 opacity-80">
        Nurturing Faith Through Holistic Instruction
      </p>
      <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
        Christian Education
      </h1>
      <div className="h-1 w-24 bg-white mx-auto mb-10 opacity-50"></div>
      <p className="text-white text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed opacity-90">
        "Education for Life" — Bridging the Word of God to practical application.
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

const InitiativeCard: React.FC<StrategicInitiative> = ({ icon, title, description }) => (
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
    <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-gray-100 group-hover:border-gray-300 transition-colors bg-gray-200 shadow-inner flex items-center justify-center">
      {imageUrl ? (
        <img 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
          src={imageUrl} 
        />
      ) : (
        <div className="text-gray-400">
          <AutoStoriesIcon />
        </div>
      )}
    </div>
    <h4 className="text-lg font-bold uppercase tracking-wide">{name}</h4>
    <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">{role}</p>
  </div>
);

// --- MAIN APP ---

export default function ChristianEducation() {
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
              The PCEA Christian Education Department is a <span className="font-bold">Bible-based, Christ-centered ministry</span> dedicated to the intellectual and spiritual formation of the church. We believe that a strong faith requires a foundation of sound doctrine. By nurturing faith through holistic instruction for all ages, we act as the bridge between the Word of God and its practical application in every sphere of life—from the classroom to the boardroom.
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
              "To foster a society of children and adults who are God-fearing and who steadfastly uphold the Christian values of love, moral integrity, self-control, and respect."
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4">
            <SectionHeader title="Our Mission" />
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-gray-600">
              To endeavor to make disciples by instilling knowledge through <span className="font-bold">"Education for Life,"</span> ensuring every member is equipped to live out their faith with wisdom and conviction.
            </p>
          </div>
        </section>

        {/* Core Motto Section */}
        <section className="mb-32 relative overflow-hidden rounded-xl h-auto md:h-96 py-16 md:py-0 flex items-center justify-center bg-gray-900">
          <img 
            alt="Learning Environment" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 brightness-[0.4]" 
            src="https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=2070&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.5em] mb-6 text-white/70">Our Core Motto</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight italic text-white leading-relaxed">
              "My people are destroyed from lack of knowledge."
            </h2>
            <p className="text-white text-sm md:text-xl mt-4 font-bold opacity-60 italic">Hosea 4:6</p>
            <div className="h-1 w-20 bg-white mx-auto mt-8 opacity-40"></div>
          </div>
        </section>

        {/* Strategic Directions & Initiatives */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Strategic Initiatives</h2>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-4 md:mt-0 font-medium italic">Impact Across All Sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STRATEGIC_INITIATIVES.map((item, index) => (
              <InitiativeCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-32">
          <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-tight mb-16">Department Leadership</h2>
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
            <div className="flex justify-center mb-6 opacity-80 text-amber-500">
              <SchoolIcon />
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Equip Your Faith</h2>
            <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">
              Join our professional fellowships or enroll in life-stage programs. Together, we are building a foundation for a God-fearing society.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <a className="inline-block bg-white text-gray-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors shadow-lg" href="#">
                Join a Fellowship
              </a>
              <a className="inline-block border border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors" href="#">
                Download Materials
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}