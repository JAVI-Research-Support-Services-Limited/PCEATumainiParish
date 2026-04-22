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
const AutoAwesomeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);

const PsychologyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <path d="M12 17h.01"/>
  </svg>
);

const CampaignIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 18-5v12L3 14v-3z"/>
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
  </svg>
);

const EcoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
  </svg>
);

const PublicIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const ExploreIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);

// --- CONSTANTS ---
const APPROACH_AREAS: ProgramArea[] = [
  {
    icon: <AutoAwesomeIcon />,
    title: 'Holistic Ministry',
    description: 'We believe the Gospel must touch the "whole person," combining the preaching of the Word with social action and community empowerment.'
  },
  {
    icon: <PsychologyIcon />,
    title: 'Discipleship & Nurturing',
    description: "Evangelism doesn't end at the altar. We emphasize rigorous follow-up and mentoring new converts through Bible study and fellowship."
  },
  {
    icon: <CampaignIcon />,
    title: 'Contextual Outreach',
    description: 'Using every tool from traditional crusades to sports evangelism and digital technology to reach a rapidly changing world.'
  },
  {
    icon: <EcoIcon />,
    title: 'Environmental Stewardship',
    description: 'Honoring God by caring for His creation as a divine mandate to responsibly manage the world for His glory.'
  }
];

const LEADERS: Leader[] = [
  {
    name: 'Rev. Dr. Robert Waihenya',
    role: 'Director of Evangelism'
  },
  {
    name: 'Elder Samuel Kamau',
    role: 'National Coordinator'
  },
  {
    name: 'Mrs. Tabitha Njeri',
    role: 'Missionary Liaison'
  },
  {
    name: 'Rev. Faith Wambui',
    role: 'Training & Discipleship'
  }
];

// --- INTERNAL COMPONENTS ---

const Hero: React.FC = () => (
  <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
    <img 
      alt="Evangelism Outreach" 
      className="absolute inset-0 w-full h-full object-cover brightness-[0.35]" 
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <p className="text-white text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 opacity-80">
        The Heartbeat of the Mission
      </p>
      <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
        Evangelism
      </h1>
      <div className="h-1 w-24 bg-white mx-auto mb-10 opacity-50"></div>
      <p className="text-white text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed opacity-90">
        "Proclaiming the Gospel of Jesus Christ to fulfill the Great Commission."
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

const ApproachCard: React.FC<ProgramArea> = ({ icon, title, description }) => (
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
          <PublicIcon />
        </div>
      )}
    </div>
    <h4 className="text-lg font-bold uppercase tracking-wide">{name}</h4>
    <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">{role}</p>
  </div>
);

const BigFiveItem: React.FC<{ letter: string; title: string; description: string }> = ({ letter, title, description }) => (
  <div className="text-center p-8 border border-gray-100 rounded-lg group hover:border-gray-900 transition-all">
    <span className="text-4xl font-black mb-4 block text-gray-300 group-hover:text-gray-900 transition-colors font-mono">{letter}</span>
    <h4 className="text-xl font-black uppercase mb-2 tracking-tighter">{title}</h4>
    <p className="text-xs text-gray-500 uppercase leading-relaxed tracking-wider">{description}</p>
  </div>
);

// --- MAIN APP ---

export default function Evangelism() {
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
              The PCEA Evangelism Department is the <span className="font-bold">heartbeat of our mission</span>, driven by a profound evangelical calling rooted in Reformed theology. Our purpose is simple yet powerful: to fulfill the <span className="font-bold">Great Commission (Matthew 28:19-20)</span> by proclaiming the Gospel of Jesus Christ. We don't just preach; we pursue a holistic transformation of lives, ensuring that the Word of God meets the spiritual, emotional, and physical needs of every individual.
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
              "To invigorate the Church through sound doctrine and the power of the Holy Spirit, creating vibrant, fruitful communities where every soul has experienced the life-changing knowledge of God's grace."
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4">
            <SectionHeader title="Our Mission" />
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-gray-600">
              To <span className="font-bold">equip the saints</span> and spread the true Gospel through intentional evangelism, deep-rooted discipleship, faithful stewardship, and passionate worship. We exist to reach the world for Christ, one heart at a time.
            </p>
          </div>
        </section>

        {/* The Big 5 Strategic Pillars */}
        <section className="mb-32">
          <div className="mb-16 text-center">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-gray-400">Strategic Framework</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">The "Big 5" of PCEA Evangelism</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            <BigFiveItem letter="P" title="Prayer & Praise" description="Igniting a culture of continuous communication with God." />
            <BigFiveItem letter="C" title="Caring & Salvation" description="Meeting people at their point of need to lead them to Christ." />
            <BigFiveItem letter="E" title="Evangelizing" description="Taking the Good News beyond the church walls to the unreached." />
            <BigFiveItem letter="A" title="Action & Development" description="Demonstrating the Gospel through social justice and growth." />
            <BigFiveItem letter="S" title="Saving Souls" description="Ensuring every ministry effort results in eternal impact." />
          </div>
        </section>

        {/* High Impact Quote Section */}
        <section className="mb-32 relative overflow-hidden rounded-xl h-auto md:h-96 py-16 md:py-0 flex items-center justify-center bg-gray-900">
          <img 
            alt="Outreach Crowd" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 brightness-[0.4]" 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.5em] mb-6 text-white/70">The Great Commission</p>
            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight italic text-white leading-relaxed">
              "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
            </h2>
            <p className="text-white text-sm md:text-xl mt-4 font-bold opacity-60 italic">Matthew 28:19</p>
            <div className="h-1 w-20 bg-white mx-auto mt-8 opacity-40"></div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Our Approach</h2>
            <p className="text-sm uppercase tracking-widest text-gray-500 mt-4 md:mt-0 font-medium italic">Reaching a Changing World</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {APPROACH_AREAS.map((area, index) => (
              <ApproachCard key={index} {...area} />
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
            <div className="flex justify-center mb-6 opacity-80 text-blue-400">
              <ExploreIcon />
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Join the Mission</h2>
            <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">
              Every saint is equipped for service. Partner with the Evangelism Department to spread the Gospel across parishes and nations.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <a className="inline-block bg-white text-gray-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors shadow-lg" href="#">
                Request Training
              </a>
              <a className="inline-block border border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors" href="#">
                Partner with Missions
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
