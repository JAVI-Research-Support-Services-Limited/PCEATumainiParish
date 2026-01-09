import Layout from "@/components/site/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { MinistriesPreview } from "@/components/home/MinistriesPreview";
import { NextStepsPreview } from "@/components/home/NextStepsPreview";
import { VideoSection } from "@/components/home/VideoSection";

export default function Mwihoko() {
  return (
    <Layout>
      <HeroSection
        title="Welcome to Mwihoko Church"
        subtitle="Growing in faith, united in love, serving our community."
        verse="For where two or three gather in my name, there am I with them"
        verseRef="Matthew 18:20"
        backgroundImage="https://api.builder.io/api/v1/image/assets/TEMP/bdc761c533504e467c3e05d9ea191261c859026d?width=2880"
        showDropdown={false}
      />
      <AboutSection />
      <MinistriesPreview />
      <NextStepsPreview />
      <VideoSection />

      {/* LOCATION SECTION */}
      <section id="location" className="relative z-20 bg-neutral-900 py-0 px-0">
        <iframe
          width="1440"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=1440&amp;height=400&amp;hl=en&amp;q=pcea%20mwihoko%20Nairobi+(pcea%20mwihoko%20church)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="PCEA Mwihoko Location"
          style={{ width: "100%", height: "400px", border: 0 }}
        />
      </section>
    </Layout>
  );
}
