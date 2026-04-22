import { HeroSection } from "@/components/home/HeroSection";
import { VideoSection } from "@/components/home/VideoSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";

export default function Homepage() {
  const ministries = [
    {
      title: "Sunday Worship",
      desc: "Join us for spirited worship every Sunday at 10AM & 5PM.",
      img: "https://images.unsplash.com/photo-1510563342738-4144e8d246f9?auto=format&fit=crop&q=80&w=1000",
      link: "/ministries#worship",
    },
    {
      title: "Bible Study",
      desc: "Deepen your understanding Wednesdays at 7PM.",
      img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=1000",
      link: "/ministries#study",
    },
    {
      title: "Women's Guild",
      desc: "A sisterhood dedicated to service and spiritual growth.",
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000",
      link: "/ministries#guild",
    },
  ];

  const sermons = [
    {
      title: "Faith in Action",
      desc: "Latest message on living out your faith daily.",
      img: "https://img.youtube.com/vi/HhF0_L6O99Y/maxresdefault.jpg",
      video: "https://www.youtube.com/embed/HhF0_L6O99Y",
    },
    {
      title: "Sunday Service Praise",
      desc: "Worship with us in spirit and truth.",
      img: "https://img.youtube.com/vi/VvP-p99HkMo/maxresdefault.jpg",
      video: "https://www.youtube.com/embed/VvP-p99HkMo",
    },
    {
      title: "Mid-Week Refuel",
      desc: "A powerful word to sustain you through the week.",
      img: "https://img.youtube.com/vi/F-7_pYhS9r8/maxresdefault.jpg",
      video: "https://www.youtube.com/embed/F-7_pYhS9r8",
    },
  ];

  const PearlCard = ({ title, desc, img, link, video }: any) => (
    <Card className="flex flex-col h-full bg-white border border-neutral-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-md group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {video && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <Play className="w-12 h-12 text-white fill-white/20" />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <CardTitle className="font-display text-xl font-semibold text-[#003366] mb-2">
          {title}
        </CardTitle>
        <CardDescription className="text-neutral-600 font-sans leading-relaxed mb-4 flex-1">
          {desc}
        </CardDescription>
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-[#003366] hover:text-[#c05621] font-bold text-sm uppercase tracking-wider transition-colors"
        >
          Learn More{" "}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );

  return (
    <>
      <HeroSection
        title="Mwihoko Church"
        subtitle="A Congregation of P.C.E.A Tumaini Parish"
        verse="Commit your work to the LORD, and your plans will be established"
        verseRef="Proverbs 16:3"
        backgroundImage="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000"
        showDropdown={true}
      />

      {/* Welcome / Video Section */}
      <section className="pearl-section bg-neutral-50">
        <div className="pearl-container flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <VideoSection />
          <div className="flex-1 space-y-6 text-left lg:text-center">
            <h2 className="pearl-h1 text-black max-w-2xl mx-auto">
              Watch Our Most Recent Sermon
            </h2>
            <p className="font-sans text-lg md:text-xl font-light text-neutral-600 max-w-lg mx-auto leading-relaxed">
              Stay connected and grow in the Word anytime, anywhere through our
              archive of messages.
            </p>
            <div className="pearl-btn-row justify-start lg:justify-center">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 font-sans bg-[#003366] text-white hover:bg-[#002244] rounded-sm shadow-md"
              >
                <Link to="/sermons">Watch All Sermons</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="pearl-section bg-neutral-50 border-y border-neutral-100">
        <div className="pearl-container">
          <div className="text-center mb-16">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.3em] text-[#c05621] mb-4 block">
              Spiritual Pathways
            </span>
            <h2 className="pearl-h1 text-[#003366] mb-12 max-w-4xl mx-auto">
              Discover ministries designed to nurture your soul
            </h2>
          </div>
          <div className="pearl-grid">
            {ministries.map((ministry, idx) => (
              <PearlCard key={idx} {...ministry} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="h-14 px-12 font-sans bg-transparent border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white rounded-sm transition-all"
            >
              <Link to="/ministries">View All Ministries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Sermons Previews */}
      <section className="pearl-section bg-white">
        <div className="pearl-container">
          <div className="text-center mb-16">
            <span className="font-sans text-sm font-bold uppercase tracking-[0.3em] text-[#c05621] mb-4 block">
              Recent Teachings
            </span>
            <h2 className="pearl-h1 text-[#003366] mb-12 max-w-4xl mx-auto">
              Grow Through God's Word
            </h2>
          </div>
          <div className="pearl-grid">
            {sermons.map((sermon, idx) => (
              <PearlCard
                key={idx}
                {...sermon}
                video={sermon.video}
                link="/sermons"
              />
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="h-14 px-12 font-sans bg-[#003366] text-white hover:bg-[#002244] rounded-sm shadow-lg"
            >
              <Link to="/sermons">View All Sermons</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pearl-section bg-[#003366] text-white border-t border-white/10">
        <div className="pearl-container text-center">
          <h2 className="pearl-h1 mb-8">Join Us This Sunday</h2>
          <p className="font-sans text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the difference a community of faith can make in your
            life.
          </p>
          <div className="pearl-btn-row justify-center">
            <Button
              asChild
              className="h-14 px-8 font-sans bg-white text-black hover:bg-neutral-200 rounded-sm shadow-lg"
            >
              <Link to="/ministries">Explore Ministries</Link>
            </Button>
            <Button
              asChild
              className="h-14 px-8 font-sans bg-transparent text-white hover:bg-white/10 border border-white/30 rounded-sm shadow-lg"
            >
              <Link to="/st-luke-give">Give Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
