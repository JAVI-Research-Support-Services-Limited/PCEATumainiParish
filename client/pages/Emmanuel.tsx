import Layout from "@/components/site/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { MinistriesPreview } from "@/components/home/MinistriesPreview";
import { NextStepsPreview } from "@/components/home/NextStepsPreview";
import { VideoSection } from "@/components/home/VideoSection";

export default function Emmanuel() {
  return (
    <Layout>
      <HeroSection
        title="Emmanuel Church - God With Us"
        subtitle="A community of believers walking together in faith and purpose."
        verse="The Lord is my shepherd, I lack nothing"
        verseRef="Psalm 23:1"
        backgroundImage="https://api.builder.io/api/v1/image/assets/TEMP/9926dfbc0a48c8bcf86397cc08f64a4d62ecb09c?width=1278"
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
          src="https://maps.google.com/maps?width=1440&amp;height=400&amp;hl=en&amp;q=pcea%20emmanuel%20utawala%20Nairobi+(pcea%20emmanuel%20church)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="PCEA Emmanuel Location"
          style={{ width: "100%", height: "400px", border: 0 }}
        />
      </section>
    </Layout>
  );
}
