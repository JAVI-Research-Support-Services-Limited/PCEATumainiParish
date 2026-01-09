import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { MinistriesPreview } from "@/components/home/MinistriesPreview";
import { NextStepsPreview } from "@/components/home/NextStepsPreview";
import { VideoSection } from "@/components/home/VideoSection";

export default function Homepage() {
  return (
    <Layout showHeader={true} showNav={false}>
      <HeroSection
        title="At St Luke, We worship, We praise and serve GOD"
        subtitle="Commit your work to the LORD, and your plans will be established."
        verse="Commit your work to the LORD, and your plans will be established"
        verseRef="Proverbs 16:3"
        backgroundImage="https://api.builder.io/api/v1/image/assets/TEMP/64b2e865e12f6342444518f756e6f0b423d158d4?width=2896"
        showDropdown={true}
      />
      <AboutSection />
      <MinistriesPreview />
      <NextStepsPreview />
      <VideoSection />
    </Layout>
  );
}
