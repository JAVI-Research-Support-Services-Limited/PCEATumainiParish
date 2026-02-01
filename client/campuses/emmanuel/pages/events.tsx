import { Link } from "react-router-dom";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
import listPlugin from "@fullcalendar/list";

// Sample events data for FullCalendar - December 2025 & January 2026
const calendarEvents = [
  // December 2025
  { title: "SUNDAY SERVICE", date: "2025-12-07" },
  { title: "THE CROSSOVER", date: "2025-12-07" },
  { title: "ONE LOVE YOUTH S...", date: "2025-12-08" },
  { title: "ANGEL TREE CHRIS...", date: "2025-12-14" },
  { title: "CHRISTMAS SERVICE", date: "2025-12-14" },
  { title: "SUNDAY SERVICE", date: "2025-12-21" },
  { title: "CHRISTMAS EVE SE...", date: "2025-12-25" },
  { title: "FAMILY SUNDAY (ON...", date: "2025-12-28" },
  { title: "SUNDAY SERVICE", date: "2024-12-29" },
  { title: "YOUNG ADULTS SER...", date: "2025-12-06" },
  { title: "MEN'S BREAKFAST E...", date: "2025-12-06" },
  { title: "ONE LOVE YOUTH C...", date: "2025-12-13" },
  
  // Current month - December 2024 / January 2025
  { title: "SUNDAY SERVICE", date: "2024-12-29" },
  { title: "NEW YEAR'S EVE SERVICE", date: "2024-12-31" },
  { title: "WATCH NIGHT PRAYER", date: "2024-12-31" },
  
  // January 2025
  { title: "NEW YEAR SERVICE", date: "2025-01-01" },
  { title: "SUNDAY SERVICE", date: "2025-01-05" },
  { title: "YOUTH FELLOWSHIP", date: "2025-01-05" },
  { title: "BIBLE STUDY", date: "2025-01-08" },
  { title: "CHOIR PRACTICE", date: "2025-01-09" },
  { title: "SUNDAY SERVICE", date: "2025-01-12" },
  { title: "WOMEN'S GUILD", date: "2025-01-12" },
  { title: "MEN'S FELLOWSHIP", date: "2025-01-14" },
  { title: "PRAYER MEETING", date: "2025-01-15" },
  { title: "YOUTH CAMP REGIST...", date: "2025-01-17" },
  { title: "SUNDAY SERVICE", date: "2025-01-19" },
  { title: "COMMUNITY OUTREACH", date: "2025-01-19" },
  { title: "BIBLE STUDY", date: "2025-01-22" },
  { title: "CHOIR PRACTICE", date: "2025-01-23" },
  { title: "PRAYER & FASTING", date: "2025-01-25" },
  { title: "SUNDAY SERVICE", date: "2025-01-26" },
  { title: "CHURCH COMMITTEE", date: "2025-01-28" },
  
  // February 2025
  { title: "SUNDAY SERVICE", date: "2025-02-02" },
  { title: "YOUTH FELLOWSHIP", date: "2025-02-02" },
  { title: "BIBLE STUDY", date: "2025-02-05" },
  { title: "SUNDAY SERVICE", date: "2025-02-09" },
  { title: "VALENTINE'S DINNER", date: "2025-02-14" },
  { title: "ANNUAL CONFERENCE", date: "2025-02-15" },
  { title: "SUNDAY SERVICE", date: "2025-02-16" },
  { title: "WOMEN'S GUILD", date: "2025-02-18" },
  { title: "SUNDAY SERVICE", date: "2025-02-23" },
  
  // March 2025
  { title: "SUNDAY SERVICE", date: "2025-03-02" },
  { title: "LENTEN PRAYER", date: "2025-03-05" },
  { title: "SUNDAY SERVICE", date: "2025-03-09" },
  { title: "YOUTH FELLOWSHIP", date: "2025-03-15" },
  { title: "SUNDAY SERVICE", date: "2025-03-16" },
  { title: "YOUTH CAMP 2025", date: "2025-03-20" },
  { title: "SUNDAY SERVICE", date: "2025-03-23" },
  { title: "CHURCH CLEAN-UP", date: "2025-03-29" },
  { title: "SUNDAY SERVICE", date: "2025-03-30" },
  
  // April 2025
  { title: "SUNDAY SERVICE", date: "2025-04-06" },
  { title: "PALM SUNDAY", date: "2025-04-13" },
  { title: "MAUNDY THURSDAY", date: "2025-04-17" },
  { title: "GOOD FRIDAY", date: "2025-04-18" },
  { title: "EASTER SUNRISE", date: "2025-04-20" },
  { title: "EASTER SERVICE", date: "2025-04-20" },
  { title: "SUNDAY SERVICE", date: "2025-04-27" },
];

// Upcoming events for registration
const upcomingEvents = [
  {
    id: 1,
    title: "Annual Church Conference",
    month: "February",
    day: "15",
    fullDate: "February 15, 2025 9:00 AM",
  },
  {
    id: 2,
    title: "Youth Camp 2025",
    month: "March",
    day: "20",
    fullDate: "March 20-22, 2025",
  },
  {
    id: 3,
    title: "Easter Celebration",
    month: "April",
    day: "20",
    fullDate: "April 20, 2025 6:00 AM",
  },
  {
    id: 4,
    title: "Mother's Day Service",
    month: "May",
    day: "11",
    fullDate: "May 11, 2025 10:00 AM",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-wide">
            EVENTS
          </h1>
        </div>
      </section>

      {/* Church Calendar Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-black">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-white mb-12 tracking-wide uppercase">
          Church Calendar
        </h2>

        {/* FullCalendar */}
        <div className="bg-white max-w-[1400px] mx-auto pearl-calendar rounded-lg overflow-hidden">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, multiMonthPlugin, listPlugin]}
            initialView="dayGridMonth"
            initialDate="2025-01-01"
            events={calendarEvents}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridDay,dayGridWeek,dayGridMonth,multiMonthYear",
            }}
            buttonText={{
              today: "Today",
              day: "Day",
              week: "Week",
              month: "Month view",
              year: "Year",
            }}
            views={{
              multiMonthYear: {
                multiMonthMaxColumns: 3,
              },
            }}
            height="auto"
            dayMaxEvents={4}
            moreLinkText={(num) => `+${num} more`}
            eventDisplay="list-item"
            displayEventTime={false}
          />
        </div>
      </section>

      {/* Upcoming Events Section - Meta Church Style */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Come Hangout With Us!
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Here are some upcoming events at PCEA St Luke Church. You can stay informed 
              and up-to-date with all things happening by clicking into each event and learning more. 
              You can also RSVP or register for any of the events that interest you.
            </p>
          </div>

          {/* Event Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <Link 
                key={event.id} 
                to={`/events/${event.id}`}
                className="group relative bg-white border border-neutral-300 p-6 transition-all duration-300 event-card-stroke"
              >
                {/* Event Title */}
                <h3 className="font-bold text-neutral-900 text-sm mb-1">
                  {event.title}
                </h3>
                
                {/* Month */}
                <div className="text-neutral-900 font-medium text-sm">
                  {event.month}
                </div>
                
                {/* Large Day Number */}
                <div className="text-6xl md:text-7xl font-light text-neutral-900 my-4 leading-none">
                  {event.day}
                </div>
                
                {/* Full Date with Icon */}
                <div className="flex items-center gap-2 text-neutral-900 text-sm">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{event.fullDate}</span>
                </div>
                
                {/* Animated border stroke effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="absolute inset-0 w-full h-full">
                    <rect 
                      className="stroke-animation"
                      x="0" 
                      y="0" 
                      width="100%" 
                      height="100%" 
                      fill="none" 
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Have Questions About Our Events?
          </h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            We'd love to hear from you. Contact our church office for more information about any of our events.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="bg-white text-neutral-900 hover:bg-neutral-100">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
