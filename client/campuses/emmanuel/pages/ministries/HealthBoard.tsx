import React from 'react';

// --- TYPES ---
export interface HealthPillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Maintaining export for consistency with project structure
export interface ProgramArea extends HealthPillar {}

interface Leader {
  name: string;
  role: string;
  imageUrl?: string;
}

// --- SVG ICONS ---
const HealthSafetyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M12 8v4"/>
    <path d="M12 16h.01"/>
  </svg>
);

const PsychologyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <path d="M12 17h.01"/>
  </svg>
);

const MedicalServicesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
    <path d="M12 8v8"/>
    <path d="M8 12h8"/>
  </svg>
);

const SanitizerIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);

const MedicationIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <path d="M9 9h6"/>
    <path d="M9 15h6"/>
    <path d="M12 9v6"/>
  </svg>
);

const VolunteerIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

// --- CONSTANTS ---
const HEALTH_PILLARS: HealthPillar[] = [
  {
    icon: <HealthSafetyIcon />,
    title: 'Preventive Care',
    description: 'Bringing healthcare to the people by organizing Medical Camps, cancer screenings, and vaccination drives directly within our parish.'
  },
  {
    icon: <PsychologyIcon />,
    title: 'Health Education',
    description: 'Raising awareness on lifestyle diseases (diabetes, hypertension) and mental health, with specialized "Health Sundays" for community learning.'
  },
  {
    icon: <MedicalServicesIcon />,
    title: 'Emergency Response',
    description: 'Training and managing First Aid teams to handle medical emergencies effectively during services and church events.'
  },
  {
    icon: <SanitizerIcon />,
    title: 'Sanitation & Hygiene',
    description: 'Ensuring that church facilities maintain high hygiene standards to protect the flock and promote a safe community environment.'
  }
];

const LEADERS: Leader[] = [
  {
    name: 'Dr. Samuel Gathua',
    role: 'Chairman, Health Board'
  },
  {
    name: 'Dr. Mary Muthoni',
    role: 'Medical Director'
  },
  {
    name: 'Sister Grace Wanjiru',
    role: 'Nursing & First Aid Lead'
  },
  {
    name: 'Mr. Patrick Njenga',
    role: 'Public Health Coordinator'
  }
];

// --- INTERNAL COMPONENTS ---

const Hero: React.FC = () => (
  <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
    <img 
      alt="Health and Wellness" 
      className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" 
      src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay"></div>
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <p className="text-white text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 opacity-80">
        Nurturing Holistic Well-being
      </p>
      <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
        Health Board
      </h1>
      <div className="h-1 w-24 bg-white mx-auto mb-10 opacity-50"></div>
      <p className="text-white text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed opacity-90">
        "Nurturing the body to serve the spirit." — Quality Holistic Healthcare.
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

const PillarCard: React.FC<HealthPillar> = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-10 group hover:bg-gray-100 transition-colors border-t-2 border-transparent hover:border-emerald-600 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-500 ease-out"></div>
    <div className="inline-block text-gray-400 group-hover:text-emerald-600 transition-colors mb-6">
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
    <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-gray-100 group-hover:border-emerald-200 transition-colors bg-gray-200 shadow-inner flex items-center justify-center">
      {imageUrl ? (
        <img 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
          src={imageUrl} 
        />
      ) : (
        <div className="text-gray-400">
          <MedicationIcon />
        </div>
      )}
    </div>
    <h4 className="text-lg font-bold uppercase tracking-wide">{name}</h4>
    <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">{role}</p>
  </div>
);

// --- MAIN APP ---

export default function HealthBoard() {
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
              The Health Board is the <span className="font-bold">specialized arm of our church</span> dedicated to the holistic well-being of our members and the community. Rooted in the healing ministry of Jesus Christ, we believe that a <span className="font-bold">healthy body is essential for a healthy spirit</span>. The Board coordinates health initiatives at the parish level to ensure our congregation is physically fit to serve the Lord.
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
              "To have a healthy congregation and a safe environment, where every member enjoys physical, mental, and spiritual wholeness."
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start border-t border-gray-100 pt-16">
          <div className="md:col-span-4">
            <SectionHeader title="Our Mission" />
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-gray-600">
              To provide <span className="font-bold">quality, holistic healthcare education and services</span>, conducting medical checkups and disseminating health messages that empower our community to live longer, healthier lives for God's glory.
            </p>
          </div>
        </section>

        {/* Scripture / Motto Section */}
        <section className="mb-32 relative overflow-hidden rounded-xl h-auto md:h-96 py-16 md:py-0 flex items-center justify-center bg-emerald-950">
          <img 
            alt="Wellness Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 brightness-[0.4]" 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.5em] mb-6 text-white/70">Our Divine Mandate</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight italic text-white leading-relaxed">
              "Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers."
            </h2>
            <p className="text-white text-sm md:text-xl mt-4 font-bold opacity-60 italic">3 John 1:2</p>
            <div className="h-1 w-20 bg-emerald-400 mx-auto mt-8 opacity-40"></div>
          </div>
        </section>

        {/* Key Pillars of Service */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Key Pillars of Service</h2>
            <p className="text-sm uppercase tracking-widest text-emerald-700 mt-4 md:mt-0 font-medium italic">Empowering Healthy Living</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {HEALTH_PILLARS.map((item, index) => (
              <PillarCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-32">
          <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-tight mb-16">Health Board Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {LEADERS.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
        </section>

        {/* Engagement CTA */}
        <div className="bg-emerald-900 text-white p-12 md:p-20 text-center relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6 opacity-80 text-emerald-200">
              <VolunteerIcon />
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Join the Health Mission</h2>
            <p className="text-lg text-emerald-100 mb-6 font-light leading-relaxed">
              Are you a medical professional or passionate about community health? Join the Health Board and help us build a stronger, healthier congregation.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <a className="inline-block bg-white text-emerald-900 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-emerald-50 transition-colors shadow-lg" href="#">
                Volunteer Now
              </a>
              <a className="inline-block border border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors" href="#">
                Request Medical Camp
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
