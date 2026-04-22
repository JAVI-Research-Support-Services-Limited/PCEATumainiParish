import React from 'react';

// --- TYPES ---
export interface ImpactArea {
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
const ChildCareIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M12 14c-4 0-7 2-7 5v2h14v-2c0-3-3-5-7-5z"/>
  </svg>
);

const AccountBalanceIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18"/>
    <path d="M5 21V10"/>
    <path d="M9 21V10"/>
    <path d="M13 21V10"/>
    <path d="M17 21V10"/>
    <path d="M2 10l10-7 10 7"/>
  </svg>
);

const SportsSoccerIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
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

const StyleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M7 7h10"/>
    <path d="M7 12h10"/>
    <path d="M7 17h10"/>
  </svg>
);

const VerifiedIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12l2 2 4-4"/>
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const StraightenIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="8" width="20" height="8" rx="1"/>
    <path d="M6 8v8"/>
    <path d="M10 8v8"/>
    <path d="M14 8v8"/>
    <path d="M18 8v8"/>
  </svg>
);

const HandshakeIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5l-8 8 2.5 2.5L12 21l5.5-5.5L20 13l-8-8z"/>
    <path d="M16 8L8 16"/>
    <path d="M12.5 12.5L16 16"/>
  </svg>
);

const PersonIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="5"/>
    <path d="M3 21v-2a7 7 0 0 1 14 0v2"/>
  </svg>
);

// --- CONSTANTS ---
const IMPACT_AREAS: ImpactArea[] = [
  {
    icon: <ChildCareIcon />,
    title: 'The Boy Child',
    description: 'Leading the Rite of Passage programs to mentor young boys into godly men and responsible citizens.'
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Financial Stewardship',
    description: 'Hosting seminars on investment, business, and wealth management to empower men economically.'
  },
  {
    icon: <SportsSoccerIcon />,
    title: 'Sports Evangelism',
    description: 'Using physical activity and healthy competition as a platform to reach out to men in our community.'
  },
  {
    icon: <FamilyRestroomIcon />,
    title: 'Family Strength',
    description: 'Providing a robust support system for husbands and fathers to lead their homes effectively and with love.'
  }
];

const LEADERS: Leader[] = [
  {
    name: 'Rev. Dr. Patrick Githu',
    role: 'Patron'
  },
  {
    name: 'Elder Samuel Kamau',
    role: 'Parish Chairman'
  },
  {
    name: 'George Mwangi',
    role: 'Secretary'
  },
  {
    name: 'David Njoroge',
    role: 'Treasurer'
  }
];

// --- INTERNAL COMPONENTS ---

const Hero: React.FC = () => (
  <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
    <img 
      alt="PCEA Men's Fellowship" 
      className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" 
      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-slate-900/40 mix-blend-overlay"></div>
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <p className="text-white text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 opacity-80">
        United Force for Christ
      </p>
      <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
        Men's Fellowship
      </h1>
      <div className="h-1 w-24 bg-white mx-auto mb-10 opacity-50"></div>
      <p className="text-white text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed opacity-90">
        "Never be lacking in zeal, but keep your spiritual fervor, serving the Lord." — Romans 12:11
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

const ImpactCard: React.FC<ImpactArea> = ({ icon, title, description }) => (
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
          <PersonIcon />
        </div>
      )}
    </div>
    <h4 className="text-lg font-bold uppercase tracking-wide">{name}</h4>
    <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">{role}</p>
  </div>
);

const MembershipPillar: React.FC<{ title: string; subtitle: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="text-center p-8 border border-gray-100 rounded-lg group hover:border-gray-900 transition-all">
    <div className="text-gray-400 group-hover:text-gray-900 transition-colors mb-4 flex justify-center">{icon}</div>
    <h4 className="text-2xl font-black uppercase mb-2 italic tracking-tighter">{title}</h4>
    <p className="text-xs text-gray-500 uppercase tracking-widest">{subtitle}</p>
  </div>
);

// --- MAIN APP ---

export default function MensFellowship() {
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
              The Presbyterian Church Men's Fellowship (PCMF) is a vibrant, biblically-based movement established in <span className="font-bold">1973/1974</span> to unite and empower men. We serve as the primary platform for men in the PCEA to grow spiritually, mentor one another, and take their rightful place as leaders in their families and the church. Our fellowship is a <span className="font-bold">"united force"</span> dedicated to transforming men into faithful witnesses of Christ.
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
              "To be a leading fellowship that brings every man to Christ, fostering a community of spiritually mature and socially responsible men who lead with integrity."
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4">
            <SectionHeader title="Our Mission" />
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-gray-600">
              To mentor and empower men through the Word of God, promoting Christian maturity, strengthening family units, and championing the holistic development of the boy child. We are guided by <span className="font-bold">Romans 12:11</span>: "Never be lacking in zeal, but keep your spiritual fervor, serving the Lord."
            </p>
          </div>
        </section>

        {/* Three Pillars of Membership Section */}
        <section className="mb-32">
          <div className="mb-16 text-center">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-gray-400">The Journey of Commitment</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Three Pillars of Membership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MembershipPillar icon={<StyleIcon />} title="The Card" subtitle="Identification & Initial Commitment" />
            <MembershipPillar icon={<VerifiedIcon />} title="The Badge" subtitle="Dedication & Spiritual Growth" />
            <MembershipPillar icon={<StraightenIcon />} title="The Tie" subtitle="Full Commissioning & Leadership" />
          </div>
        </section>

        {/* Theme Background Section */}
        <section className="mb-32 relative overflow-hidden rounded-xl h-64 md:h-96 flex items-center justify-center bg-gray-900">
          <img 
            alt="Men in fellowship" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 brightness-[0.4]" 
            src="https://images.unsplash.com/photo-1509059852496-f3822ae057bf?q=80&w=2070&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-center px-4">
            <p className="text-xs font-black uppercase tracking-[0.5em] mb-4 text-white/70">Our Motto</p>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic text-white leading-tight">Akiniita Nitaitika</h2>
            <div className="h-1 w-20 bg-white mx-auto mt-8 opacity-40"></div>
          </div>
        </section>

        {/* Impact Areas Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Key Impact Areas</h2>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-4 md:mt-0 font-medium italic">Mentoring a Generation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {IMPACT_AREAS.map((area, index) => (
              <ImpactCard key={index} {...area} />
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-32">
          <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-tight mb-16">PCMF Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {LEADERS.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
        </section>

        {/* Membership CTA */}
        <div className="bg-gray-900 text-white p-12 md:p-20 text-center relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6 opacity-80">
              <HandshakeIcon />
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Become a Member</h2>
            <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">
              Every man in the PCEA is called to join the fellowship. Start your journey today, grow in faith, and become the leader God designed you to be.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <a className="inline-block bg-white text-gray-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors shadow-lg" href="#">
                Join the Fellowship
              </a>
              <a className="inline-block border border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors" href="#">
                Download Program
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}