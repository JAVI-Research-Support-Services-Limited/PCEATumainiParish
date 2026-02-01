import { HeroSection } from "@/components/home/HeroSection";
import { VideoSection } from "@/components/home/VideoSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";

export default function Homepage() {
  const ministries = [
    {
      title: "Sunday Worship",
      desc: "Join us for spirited worship every Sunday at 10AM & 5PM.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/ministries#worship"
    },
    {
      title: "Bible Study",
      desc: "Deepen your understanding Wednesdays at 7PM.",
      img: "https://images.unsplash.com/photo-1429555597554-8d7362b56f15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/ministries#study"
    },
    {
      title: "Community Groups",
      desc: "Connect and grow in smaller groups across locations.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/ministries#groups"
    }
  ];

  const sermons = [
    {
      title: "Faith in Action",
      desc: "Latest message on living out your faith daily.",
      img: "https://img.youtube.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
      video: "https://www.youtube.com/embed/M7lc1UVf-VE"
    },
    {
      title: "Grace Abounds",
      desc: "Exploring God's endless grace in our lives.",
      img: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Hope Renewed",
      desc: "Finding hope in challenging times.",
      img: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
      video: "https://www.youtube.com/embed/9bZkp7q19f0"
    }
  ];

  const PearlCard = ({ title, desc, img, link, video }: any) => (
    <Card className="pearl-card group hover:scale-105 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {video && (
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play className="w-16 h-16 text-white/90 bg-black/50 rounded-full p-4 hover:bg-black/70 cursor-pointer shadow-2xl" />
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <CardTitle className="font-display text-2xl font-medium mb-2">{title}</CardTitle>
        <CardDescription className="text-sm font-light">{desc}</CardDescription>
        <div className="mt-4">
          <Link to={link} className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold uppercase tracking-wide text-sm transition-colors">
            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </Card>
  );

  return (
    <>
      <HeroSection
        title="At St Luke, We worship, We praise and serve GOD"
        subtitle=""
        verse="Commit your work to the LORD, and your plans will be established"
        verseRef="Proverbs 16:3"
        backgroundImage="https://api.builder.io/api/v1/image/assets/TEMP/64b2e865e12f6342444518f756e6f0b423d158d4?width=2896"
        showDropdown={true}
      />

      {/* Welcome / Video Section */}
      <section className="pearl-section bg-neutral-50">
        <div className="pearl-container flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <VideoSection />
          <div className="flex-1 space-y-6 text-left lg:text-center">
            <h2 className="pearl-h1 text-black max-w-2xl mx-auto">Watch Our Most Recent Sermon</h2>
            <p className="font-sans text-lg md:text-xl font-light text-neutral-600 max-w-lg mx-auto leading-relaxed">
              Stay connected and grow in the Word anytime, anywhere through our archive of messages.
            </p>
            <div className="pearl-btn-row justify-start lg:justify-center">
              <Button asChild size="lg" className="h-14 px-8 font-sans bg-black text-white hover:bg-neutral-800 rounded-sm shadow-lg">
                <Link to="/sermons">Watch All Sermons</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="pearl-section bg-white">
        <div className="pearl-container">
          <div className="text-center mb-16">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.3em] text-neutral-500 mb-4 block">
              Spiritual Pathways
            </span>
            <h2 className="pearl-h1 text-black mb-12 max-w-4xl mx-auto">Discover ministries designed to nurture your soul</h2>
          </div>
          <div className="pearl-grid">
            {ministries.map((ministry, idx) => (
              <PearlCard key={idx} {...ministry} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Button asChild size="lg" className="h-14 px-12 font-sans bg-black text-white hover:bg-neutral-800 rounded-sm shadow-lg">
              <Link to="/ministries">View All Ministries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Sermons Previews */}
      <section className="pearl-section bg-neutral-100">
        <div className="pearl-container">
          <div className="text-center mb-16">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.3em] text-neutral-500 mb-4 block">
              Recent Teachings
            </span>
            <h2 className="pearl-h1 text-black mb-12 max-w-4xl mx-auto">Grow Through God's Word</h2>
          </div>
          <div className="pearl-grid">
            {sermons.map((sermon, idx) => (
              <PearlCard key={idx} {...sermon} video={sermon.video} link="/sermons" />
            ))}
          </div>
          <div className="text-center mt-16">
            <Button asChild size="lg" className="h-14 px-12 font-sans bg-black text-white hover:bg-neutral-800 rounded-sm shadow-lg">
              <Link to="/sermons">View All Sermons</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pearl-section bg-black text-white border-t border-white/10">
        <div className="pearl-container text-center">
          <h2 className="pearl-h1 mb-8">Join Us This Sunday</h2>
          <p className="font-sans text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the difference a community of faith can make in your life.
          </p>
          <div className="pearl-btn-row justify-center">
            <Button asChild className="h-14 px-8 font-sans bg-white text-black hover:bg-neutral-200 rounded-sm shadow-lg">
              <Link to="/ministries">Explore Ministries</Link>
            </Button>
            <Button asChild className="h-14 px-8 font-sans bg-transparent text-white hover:bg-white/10 border border-white/30 rounded-sm shadow-lg">
              <Link to="/st-luke-give">Give Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}