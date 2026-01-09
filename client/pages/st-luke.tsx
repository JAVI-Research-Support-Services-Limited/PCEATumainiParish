import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { MinistriesPreview } from "@/components/home/MinistriesPreview";
import { NextStepsPreview } from "@/components/home/NextStepsPreview";
import { VideoSection } from "@/components/home/VideoSection";

export default function StLuke() {
  return (
    <div className="bg-white min-h-screen relative overflow-x-hidden">
      <HeroSection
        title="At St Luke, We worship, praise and serve GOD"
        subtitle="Commit your work to the LORD, and your plans will be established."
        verse="Commit your work to the LORD, and your plans will be established"
        verseRef="Proverbs 16:3"
        videoSrc="/st-luke-hero.mp4"
        showDropdown={false}
      />
      <AboutSection />
      <MinistriesPreview />
      <NextStepsPreview />
      <VideoSection />

      {/* SECTION 6: LOCATION */}
      <section id="location" className="relative z-20 bg-neutral-900 py-0 px-0">
        <iframe
          width="1440"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=1440&amp;height=400&amp;hl=en&amp;q=PCEA%20St.%20Luke%20Utawala%20Nairobi+(pcea%20st%20luke)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="PCEA St Luke Location"
          style={{ width: "100%", height: "400px", border: 0 }}
        />
      </section>
    </div>
  );
}
