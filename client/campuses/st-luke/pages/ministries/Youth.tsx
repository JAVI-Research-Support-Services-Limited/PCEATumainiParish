import React from 'react';

// --- TYPES ---
interface Activity {
  icon: React.ReactNode;
  title: string;
  schedule: string;
  description: string;
}

interface Leader {
  name: string;
  role: string;
  imageUrl?: string;
}

// --- CONSTANTS ---
// Custom SVG icons for activities
const YOUTH_FELLOWSHIP_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-6 text-gray-400 group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V4H2v16h5m5-16v16m5-8h-10" />
  </svg>
);

const TALENT_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-6 text-gray-400 group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-6 0a2 2 0 100-4 2 2 0 000 4zm-6 0a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const ACTIVITIES: Activity[] = [
  {
    icon: YOUTH_FELLOWSHIP_SVG,
    title: 'Youth Fellowship',
    schedule: 'Sundays • After Main Service',
    description: 'A vibrant gathering for worship, word, and sharing aimed at spiritual growth and peer bonding.'
  },
  {
    icon: TALENT_SVG,
    title: 'Talent & Skills Dev',
    schedule: 'Monthly • Saturdays',
    description: 'Empowering youth through workshops in creative arts, leadership, and economic empowerment.'
  }
];

const LEADERS: Leader[] = [
  {
    name: 'Eldr Francis njiri',
    role: 'Patron'
  },
  {
    name: 'Annette Muthoni',
    role: 'Chairperson',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrlUnSGa4tLNHsxNuQaclNo01Ms6Chu_xwBfxN586UZBp1Vd6swqJrOUdaJ_zxrNtU3bQQN1vicBU-Dx5FTNWN_81R6b8uzh1CWtwb61wu4YrOTFeVUPhPLaL1Uwmsng5ZhL23CqJKb43QpNFRSmWlzIKN3fpOWoFVeplC3pQEDTgH8aZDXRyoNTyEuZKxXpqPviFB4SYvwn3gpsKfDvJf0TecKgWDevSne2JYul0v4_HMbvfjJE2ycb14BK8cTBbZ7SX_5VB9DZg'
  },
  {
    name: 'Victoria Njiri',
    role: 'Secretary',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPQWMy7sBT2NMcFv_ntNn2isM47QvHtAFO8SYz3qfl3uUsWzE5823hnyaS93EbuRX24IbbmHTTKbPjjnuklMKGbSX8Ke0iZEQ3Q4YZKGTpwPteEX3AT1pEV4nZHFiDtTFh-nObtMHiRTQq7MdJ14MXBGIiGdgf5TCTtnK0fgFmRwzBox0MxjdD5umN5rQJCFa3Q-FR97f5E-No22IlW9qf_N2F8nN_qnf9Kx6zxvfgxo5NJr_nA4QLoHWn2BgPdilVfBHf-wUEZzs'
  },
  {
    name: 'Dancun Wachania',
    role: 'Treasurer',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKfHPWvLok8H72-B3iBsg0f6xXkboo56t77Gjzf2s2kcR7K-3SVNVRy5_wan2R-LHsKBsCzt1jHZpMgcyF11XJl0dIU3Xo4L5mGlRQMN4pufDRKpthaXWsaPOsN4ecaEaBD28-I9yCPYD2euoeUkH6aaqg3NA2u0RErO_QE6mj4rihcevvDhD9adKDXHzuFDfnoiGzldfCCeO26VvD2fgw8Hjp-1y_VF9b1VKpncqPTbIwcX3Ux47S3iKPIZXVLXSv2rhHkSaOWI0'
  }
];

// --- INTERNAL COMPONENTS ---
const Hero: React.FC = () => (
  <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
    <img 
      alt="PCEA Youth Department" 
      className="absolute inset-0 w-full h-full object-cover brightness-[0.35]" 
      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay"></div>
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <p className="text-white text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 opacity-80">
        Love, Unity, and Service
      </p>
      <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
        Youth Department
      </h1>
      <div className="h-1 w-24 bg-white mx-auto mb-10 opacity-50"></div>
      <p className="text-white text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed opacity-90">
        "Transforming young lives into disciples of Christ"
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

const ActivityCard: React.FC<Activity> = ({ icon, title, schedule, description }) => (
  <div className="bg-gray-50 p-10 group hover:bg-gray-100 transition-colors border-t-2 border-transparent hover:border-gray-900">
    {icon}
    <h3 className="text-xl font-bold uppercase mb-3">{title}</h3>
    <p className="text-gray-500 text-sm mb-4 font-mono">{schedule}</p>
    <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
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
        <span className="inline-block w-full h-full flex items-center justify-center text-6xl text-gray-400 select-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </span>
      )}
    </div>
    <h4 className="text-lg font-bold uppercase tracking-wide">{name}</h4>
    <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">{role}</p>
  </div>
);

const MembershipCTA: React.FC = () => {
  const JoinIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-6 opacity-80 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );

  return (
    <div className="bg-gray-900 text-white p-12 md:p-20 text-center relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        {JoinIcon}
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Get Involved</h2>
        <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">
          The Youth Department is open to all young believers aged 13–35. Whether you are a teenager starting your journey or a young adult in the marketplace, there is a place for you to lead, serve, and grow.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <a className="inline-block bg-white text-gray-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors shadow-lg" href="/ministries">
            Join Fellowship
          </a>
          <a className="inline-block border border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors" href="#">
            YAM Ministry
          </a>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <main className="max-w-[1200px] mx-auto px-6 py-24">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start">
          <div className="md:col-span-4"><SectionHeader title="Who We Are" /></div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              The PCEA Youth Department is a vibrant community of young believers (aged 13–35) dedicated to <span className="font-bold text-indigo-600">"Love, Unity, and Service."</span> We serve as a launchpad for teenagers and young adults—including our Young Adults Ministry (YAM)—to grow holistically. Our goal is to transform young lives into disciples of Christ who are equipped to lead with integrity in the church, the marketplace, and society.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4"><SectionHeader title="Our Vision" /></div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              To be a Christ-centered youth movement that empowers a generation to realize their full potential, impact society through their talents, and remain rooted in the Presbyterian tradition of faith and service.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4"><SectionHeader title="Our Mission" /></div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-gray-600">
              To draw young people into God’s Kingdom and train them as effective disciples through a holistic approach that nurtures Spiritual depth, Economic empowerment, and Talent development.
            </p>
          </div>
        </section>

        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Our Programs</h2>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-4 md:mt-0 font-medium">Holistic Growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACTIVITIES.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </section>

        <section className="mb-32">
          <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-tight mb-16">Youth Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {LEADERS.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
        </section>

        <MembershipCTA />
      </main>
    </div>
  );
}
