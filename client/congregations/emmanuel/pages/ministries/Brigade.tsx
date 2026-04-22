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
// Custom SVGs for activities
const DRILL_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-6 text-gray-400 group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const BAND_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-6 text-gray-400 group-hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6h13M9 6l-4 3m0 0l4 3m-4-3h12" />
  </svg>
);

const ACTIVITIES: Activity[] = [
  {
    icon: DRILL_SVG,
    title: 'Drills Practice',
    schedule: 'Saturdays • 11:00 AM',
    description: 'Developing discipline, teamwork, and precision through structured marching and drill exercises.'
  },
  {
    icon: BAND_SVG,
    title: 'Band Practice',
    schedule: 'Saturdays • 2:00 PM',
    description: 'Training youth in musical excellence with drums, bugles, and other instruments to lead our processions.'
  }
];

const LEADERS: Leader[] = [
  {
    name: 'Eldr Erick Kirimi',
    role: 'Patron'
  },
  {
    name: 'Jemmimah Waithera',
    role: 'Chairperson',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrlUnSGa4tLNHsxNuQaclNo01Ms6Chu_xwBfxN586UZBp1Vd6swqJrOUdaJ_zxrNtU3bQQN1vicBU-Dx5FTNWN_81R6b8uzh1CWtwb61wu4YrOTFeVUPhPLaL1Uwmsng5ZhL23CqJKb43QpNFRSmWlzIKN3fpOWoFVeplC3pQEDTgH8aZDXRyoNTyEuZKxXpqPviFB4SYvwn3gpsKfDvJf0TecKgWDevSne2JYul0v4_HMbvfjJE2ycb14BK8cTBbZ7SX_5VB9DZg'
  },
  {
    name: 'Faith Wanjiku',
    role: 'Secretary',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPQWMy7sBT2NMcFv_ntNn2isM47QvHtAFO8SYz3qfl3uUsWzE5823hnyaS93EbuRX24IbbmHTTKbPjjnuklMKGbSX8Ke0iZEQ3Q4YZKGTpwPteEX3AT1pEV4nZHFiDtTFh-nObtMHiRTQq7MdJ14MXBGIiGdgf5TCTtnK0fgFmRwzBox0MxjdD5umN5rQJCFa3Q-FR97f5E-No22IlW9qf_N2F8nN_qnf9Kx6zxvfgxo5NJr_nA4QLoHWn2BgPdilVfBHf-wUEZzs'
  },
  {
    name: 'Agnes Waweru',
    role: 'Treasurer',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKfHPWvLok8H72-B3iBsg0f6xXkboo56t77Gjzf2s2kcR7K-3SVNVRy5_wan2R-LHsKBsCzt1jHZpMgcyF11XJl0dIU3Xo4L5mGlRQMN4pufDRKpthaXWsaPOsN4ecaEaBD28-I9yCPYD2euoeUkH6aaqg3NA2u0RErO_QE6mj4rihcevvDhD9adKDXHzuFDfnoiGzldfCCeO26VvD2fgw8Hjp-1y_VF9b1VKpncqPTbIwcX3Ux47S3iKPIZXVLXSv2rhHkSaOWI0'
  }
];

// --- INTERNAL COMPONENTS ---
const Hero: React.FC = () => (
  <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
    <img 
      alt="PCEA Boys' and Girls' Brigade" 
      className="absolute inset-0 w-full h-full object-cover brightness-[0.35]" 
      src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <p className="text-white text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 opacity-80">
        Mentoring the Next Generation
      </p>
      <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
        Boys' & Girls' Brigade
      </h1>
      <div className="h-1 w-24 bg-white mx-auto mb-10 opacity-50"></div>
      <p className="text-white text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed opacity-90">
        "Sure and Steadfast"
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
        <span className="material-icons inline-block w-full h-full flex items-center justify-center text-6xl text-gray-400 select-none">
          person
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
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Join the Brigade</h2>
        <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">
          The Brigade is open to all boys and girls from age 5 to 19. Our training is based on the 4-Square model: Spiritual, Physical, Educational, and Social. Become part of a movement that builds character and faith.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <a className="inline-block bg-white text-gray-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors shadow-lg" href="/ministries">
            Back to Ministries
          </a>
          <a className="inline-block border border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors" href="#">
            Brigade Handbook
          </a>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function Brigade() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <main className="max-w-[1200px] mx-auto px-6 py-24">
        {/* Who We Are */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start">
          <div className="md:col-span-4"><SectionHeader title="Who We Are" /></div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              The PCEA Boys’ and Girls’ Brigade is a premier uniformed Christian youth organization dedicated to mentoring the next generation. Established in Kenya in 1909 at Thogoto, we are a standing committee of the PCEA Youth Department. We bridge the gap between Sunday School and adulthood by combining discipline, adventure, and faith, training our youth to embody true Christian manliness and womanliness.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4"><SectionHeader title="Our Vision" /></div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
              To be a leading Christian youth movement that produces disciplined, self-respecting, and God-fearing leaders who are "Sure and Steadfast" in their faith and service to humanity.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4"><SectionHeader title="Our Mission" /></div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-gray-600">
              To advance Christ’s Kingdom among the youth by promoting habits of obedience, reverence, and discipline through a holistic 4-Square Training Programme—focusing on Spiritual, Physical, Social, and Educational development.
            </p>
          </div>
        </section>

        {/* Weekly Activities */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Weekly Training</h2>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-4 md:mt-0">Join us in discipline</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACTIVITIES.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </section>

        {/* Leaders */}
        <section className="mb-32">
          <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-tight mb-16">Brigade Officers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {LEADERS.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <MembershipCTA />
      </main>
    </div>
  );
}
