import React from 'react';

/* ================= SVG ICONS (REACT) ================= */

const FellowshipIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11c1.66 0 3-1.57 3-3.5S17.66 4 16 4s-3 1.57-3 3.5S14.34 11 16 11ZM8 11c1.66 0 3-1.57 3-3.5S9.66 4 8 4 5 5.57 5 7.5 6.34 11 8 11Zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45v1h6v-1c0-2.66-5.33-4-7-4Z"/>
  </svg>
);

const CleaningIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M9 6v14m6-14v14M6 6l1-2h10l1 2"/>
  </svg>
);

const PersonIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"/>
  </svg>
);

const HeartIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.5c0-2.49-2.01-4.5-4.5-4.5-1.86 0-3.46 1.13-4.12 2.75C11.96 5.13 10.36 4 8.5 4 6.01 4 4 6.01 4 8.5c0 7 8 11.5 8 11.5S21 15.5 21 8.5Z"/>
  </svg>
);

/* ================= TYPES ================= */

interface Activity {
  icon: 'fellowship' | 'cleaning';
  title: string;
  schedule: string;
  description: string;
}

interface Leader {
  name: string;
  role: string;
  imageUrl?: string;
}

/* ================= DATA ================= */

const ACTIVITIES: Activity[] = [
  {
    icon: 'fellowship',
    title: 'Fellowship',
    schedule: 'Wednesdays • 8:00 AM',
    description: 'A dedicated time for spiritual communion and togetherness among members.'
  },
  {
    icon: 'cleaning',
    title: 'Church Cleaning',
    schedule: 'Saturdays • 7:00 AM',
    description: 'Coming together to maintain the sanctuary, ensuring a clean and welcoming environment for worship.'
  }
];

const LEADERS: Leader[] = [
  {
    name: 'Rev Faith K Henry',
    role: 'Chaplain'
  },
  {
    name: 'Esther Gicho',
    role: 'Chairperson',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrlUnSGa4tLNHsxNuQaclNo01Ms6Chu_xwBfxN586UZBp1Vd6swqJrOUdaJ_zxrNtU3bQQN1vicBU-Dx5FTNWN_81R6b8uzh1CWtwb61wu4YrOTFeVUPhPLaL1Uwmsng5ZhL23CqJKb43QpNFRSmWlzIKN3fpOWoFVeplC3pQEDTgH8aZDXRyoNTyEuZKxXpqPviFB4SYvwn3gpsKfDvJf0TecKgWDevSne2JYul0v4_HMbvfjJE2ycb14BK8cTBbZ7SX_5VB9DZg'
  },
  {
    name: 'Mercy Njiri',
    role: 'Secretary',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPQWMy7sBT2NMcFv_ntNn2isM47QvHtAFO8SYz3qfl3uUsWzE5823hnyaS93EbuRX24IbbmHTTKbPjjnuklMKGbSX8Ke0iZEQ3Q4YZKGTpwPteEX3AT1pEV4nZHFiDtTFh-nObtMHiRTQq7MdJ14MXBGIiGdgf5TCTtnK0fgFmRwzBox0MxjdD5umN5rQJCFa3Q-FR97f5E-No22IlW9qf_N2F8nN_qnf9Kx6zxvfgxo5NJr_nA4QLoHWn2BgPdilVfBHf-wUEZzs'
  },
  {
    name: 'Helen Maina',
    role: 'Treasurer',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKfHPWvLok8H72-B3iBsg0f6xXkboo56t77Gjzf2s2kcR7K-3SVNVRy5_wan2R-LHsKBsCzt1jHZpMgcyF11XJl0dIU3Xo4L5mGlRQMN4pufDRKpthaXWsaPOsN4ecaEaBD28-I9yCPYD2euoeUkH6aaqg3NA2u0RErO_QE6mj4rihcevvDhD9adKDXHzuFDfnoiGzldfCCeO26VvD2fgw8Hjp-1y_VF9b1VKpncqPTbIwcX3Ux47S3iKPIZXVLXSv2rhHkSaOWI0'
  }
];

/* ================= COMPONENTS ================= */

const Hero: React.FC = () => (
  <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
    <img 
      alt="Women's Guild Members in Worship" 
      className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" 
      src="https://pcea.or.ke/wp-content/uploads/2021/08/womens-guild-1024x683.jpg"
      referrerPolicy="no-referrer"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (!target.src.includes('unsplash')) {
          target.src = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2070&auto=format&fit=crop";
        }
      }}
    />
    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <p className="text-white text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 opacity-80">
        Beautiful Ministry
      </p>
      <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
        Women's Guild
      </h1>
      <div className="h-1 w-24 bg-white mx-auto mb-10 opacity-50"></div>
      <p className="text-white text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed opacity-90">
        "To be a welcoming Christian women’s organization that enables women to change the world."
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

const ActivityCard: React.FC<Activity> = ({ icon, title, schedule, description }) => {
  const Icon = icon === 'fellowship' ? FellowshipIcon : CleaningIcon;
  return (
    <div className="bg-gray-50 p-10 group hover:bg-gray-100 transition-colors border-t-2 border-transparent hover:border-gray-900">
      <Icon className="w-10 h-10 mb-6 text-gray-400 group-hover:text-gray-900 transition-colors" />
      <h3 className="text-xl font-bold uppercase mb-3">{title}</h3>
      <p className="text-gray-500 text-sm mb-4 font-mono">{schedule}</p>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

const LeaderCard: React.FC<Leader> = ({ name, role, imageUrl }) => (
  <div className="flex flex-col items-center group">
    <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-gray-100 group-hover:border-gray-300 transition-colors bg-gray-200 shadow-inner flex items-center justify-center">
      {imageUrl ? (
        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={imageUrl} alt={name} />
      ) : (
        <PersonIcon className="w-20 h-20 text-gray-400" />
      )}
    </div>
    <h4 className="text-lg font-bold uppercase tracking-wide">{name}</h4>
    <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">{role}</p>
  </div>
);

const MembershipCTA: React.FC = () => (
  <div className="bg-gray-900 text-white p-12 md:p-20 text-center relative overflow-hidden rounded-lg">
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    <div className="relative z-10 max-w-3xl mx-auto">
      <HeartIcon className="w-12 h-12 mx-auto mb-6 opacity-80" />
      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
        Guild Membership
      </h2>
      <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">
        Guild membership is open to all ladies and girls who are committed. One needs to fellowship with other Guild members for 2 years. After that, one is commissioned in a church service officiated by the Parish Minister.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
        <a className="inline-block bg-white text-gray-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors shadow-lg" href="#">
          Contact Leadership
        </a>
        <a className="inline-block border border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors" href="#">
          Download Schedule
        </a>
      </div>
    </div>
  </div>
);

/* ================= MAIN APP ================= */

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <main className="max-w-[1200px] mx-auto px-6 py-24">
        {/* Who We Are */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start">
          <div className="md:col-span-4">
            <SectionHeader title="Who We Are" />
          </div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              Woman’s Guild is a fellowship of ladies and girls of the PCEA church. In Kenya, the group was started in 1922 with the goal of rescuing young girls from the oppressive traditions and bringing them to Christianity. The group is founded on God’s Word from Romans 12:11-13.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4">
            <SectionHeader title="Our Mission" />
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-gray-600">
              To empower Christian women holistically so that they may effectively influence society through worship, fellowship, networking, partnerships, advocacy and communication, resource mobilization, research, and training based on Christian ideals.
            </p>
          </div>
        </section>

        {/* Weekly Activities */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Weekly Activities</h2>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-4 md:mt-0">Join us in fellowship</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACTIVITIES.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </section>

        {/* Meet the Leaders */}
        <section className="mb-32">
          <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-tight mb-16">Meet the Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {LEADERS.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
        </section>

        {/* Guild Membership CTA */}
        <MembershipCTA />
      </main>
    </div>
  );
}
