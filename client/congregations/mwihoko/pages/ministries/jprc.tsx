import React from 'react';

// --- TYPES ---
export interface CorePillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProgramArea extends CorePillar {}

interface Leader {
  name: string;
  role: string;
  imageUrl?: string;
}

// --- SVG ICONS ---
const BalanceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const NaturePeopleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20"/>
    <path d="m15 19-3 3-3-3"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M5 8c1.5-2 3.5-3 7-3s5.5 1 7 3"/>
    <path d="M5 16c1.5 2 3.5 3 7 3s5.5-1 7-3"/>
  </svg>
);

const HandshakeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
    <path d="m21 3 1 11h-2"/>
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>
    <path d="M3 4h8"/>
  </svg>
);

const ParkIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l-1.1 11c-.15 1.5.65 2 1.6 2h6c.95 0 1.75-.5 1.6-2L11 8h2Z"/>
    <path d="M13 8c0-2.76 2.46-5 5.5-5S24 5.24 24 8h-2l1.1 11c.15 1.5-.65 2-1.6 2h-6c-.95 0-1.75-.5-1.6-2L15 8h-2Z"/>
  </svg>
);

const GavelIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"/>
    <path d="m16 16 6-6"/>
    <path d="m8 8 6-6"/>
    <path d="m9 7 8 8"/>
    <path d="m21 11-8-8"/>
  </svg>
);

const PublicIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

// --- CONSTANTS ---
const CORE_PILLARS: CorePillar[] = [
  {
    icon: <BalanceIcon />,
    title: 'Justice',
    description: 'Driving civic education and enlightenment, empowering members to understand their rights and duties while advocating for fair administration of justice.'
  },
  {
    icon: <NaturePeopleIcon />,
    title: 'Peace',
    description: 'Serving as messengers of harmony through advocacy and peace-building initiatives to prevent conflict and foster community unity.'
  },
  {
    icon: <HandshakeIcon />,
    title: 'Reconciliation',
    description: 'Restoring broken bonds by training specialized mediators in Alternative Dispute Resolution (ADR) and mentoring youth as agents of change.'
  },
  {
    icon: <ParkIcon />,
    title: 'Creation',
    description: 'Championing environmental protection and climate change advocacy as a divine mandate, recognizing the earth as the Lord\'s.'
  }
];

const LEADERS: Leader[] = [
  {
    name: 'Rev. Dr. Nelson Makanda',
    role: 'Director, JPRC'
  },
  {
    name: 'Elder Elizabeth Wangari',
    role: 'National Coordinator'
  },
  {
    name: 'Mr. John Githongo',
    role: 'Governance & Advocacy Lead'
  },
  {
    name: 'Mrs. Sarah Njoki',
    role: 'Environmental Stewardship'
  }
];

// --- INTERNAL COMPONENTS ---

const Hero: React.FC = () => (
  <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
    <img 
      alt="Scales of Justice and Peace" 
      className="absolute inset-0 w-full h-full object-cover brightness-[0.35]" 
      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <p className="text-white text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 opacity-80">
        Social Justice & Civic Engagement
      </p>
      <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
        JPRC
      </h1>
      <div className="h-1 w-24 bg-white mx-auto mb-10 opacity-50"></div>
      <p className="text-white text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed opacity-90">
        "Justice, Peace, Reconciliation, and Creation" — The Voice of the Voiceless.
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

const PillarCard: React.FC<CorePillar> = ({ icon, title, description }) => (
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
          <GavelIcon />
        </div>
      )}
    </div>
    <h4 className="text-lg font-bold uppercase tracking-wide">{name}</h4>
    <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">{role}</p>
  </div>
);

// --- MAIN APP ---

export default function Jprc() {
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
              The Justice, Peace, Reconciliation, and Creation (JPRC) department is the PCEA's <span className="font-bold">strategic arm for social justice and civic engagement</span>. Anchored in the PCEA Practice and Procedure Manual (Act 26), JPRC serves as the bridge between the Church, the State, and Non-State Actors. We are the <span className="font-bold">voice of the voiceless</span>, working to ensure that the light of the Gospel shines through fair governance, peaceful coexistence, and the protection of God's creation.
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
              "To realize a just and caring society built upon Christian and Godly values."
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4">
            <SectionHeader title="Our Mission" />
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-gray-600">
              To glorify God by furthering His Kingdom through the pursuit of <span className="font-bold">justice</span>, the restoration of <span className="font-bold">peace</span>, and the faithful stewardship of <span className="font-bold">all creation</span>.
            </p>
          </div>
        </section>

        {/* Governance & Conscience Section */}
        <section className="mb-32 relative overflow-hidden rounded-xl h-auto md:h-96 py-16 md:py-0 flex items-center justify-center bg-gray-900">
          <img 
            alt="Olive Branch and Peace" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 brightness-[0.4]" 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.5em] mb-6 text-white/70">Governance & Conscience</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight italic text-white leading-relaxed">
              "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God."
            </h2>
            <p className="text-white text-sm md:text-xl mt-4 font-bold opacity-60 italic">Micah 6:8</p>
            <div className="h-1 w-20 bg-white mx-auto mt-8 opacity-40"></div>
          </div>
        </section>

        {/* Core Pillars of Impact */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Core Pillars of Impact</h2>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-4 md:mt-0 font-medium italic">Transforming Society & Nature</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CORE_PILLARS.map((item, index) => (
              <PillarCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* The Church's Mandate */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-8 bg-gray-50 border border-gray-100 rounded-lg">
            <h4 className="text-lg font-bold uppercase mb-4 tracking-tight">Educate</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Inform the church on critical matters of governance and policy, ensuring an enlightened and active membership.</p>
          </div>
          <div className="p-8 bg-gray-50 border border-gray-100 rounded-lg">
            <h4 className="text-lg font-bold uppercase mb-4 tracking-tight">Advocate</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Engage with leadership to promote accountability and integrity, standing firm as the society's moral conscience.</p>
          </div>
          <div className="p-8 bg-gray-50 border border-gray-100 rounded-lg">
            <h4 className="text-lg font-bold uppercase mb-4 tracking-tight">Restore</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Actively participate in healing the social fabric through mediation, reconciliation, and alternative dispute resolution.</p>
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
            <div className="flex justify-center mb-6 opacity-80 text-blue-400">
              <PublicIcon />
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Be a Peace Maker</h2>
            <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">
              Join our network of mediators, environmental stewards, and civic educators. Together, we can build the just and caring society we envision.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <a className="inline-block bg-white text-gray-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors shadow-lg" href="#">
                Mediation Training
              </a>
              <a className="inline-block border border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors" href="#">
                Advocacy Toolkits
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}