import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  date: string;
}

const events: CalendarEvent[] = [
  { id: "1", title: "Sunday Service", time: "08:00 PM", date: "2025-12-30" },
  {
    id: "2",
    title: "Young Adults Service",
    time: "05:00 AM",
    date: "2025-12-06",
  },
  {
    id: "3",
    title: "Men's Breakfast Event",
    time: "08:00 PM",
    date: "2025-12-06",
  },
  { id: "4", title: "Sunday Service", time: "08:00 PM", date: "2025-12-07" },
  { id: "5", title: "THE CROSSOVER", time: "08:20 PM", date: "2025-12-07" },
  {
    id: "6",
    title: "One Love Youth Service",
    time: "04:00 AM",
    date: "2025-12-08",
  },
  {
    id: "7",
    title: "One Love Youth Christmas Party",
    time: "04:30 AM",
    date: "2025-12-13",
  },
  {
    id: "8",
    title: "Angel Tree Christmas Event",
    time: "12:00 AM",
    date: "2025-12-14",
  },
  { id: "9", title: "Christmas Service", time: "08:00 PM", date: "2025-12-14" },
  { id: "10", title: "Sunday Service", time: "08:00 PM", date: "2025-12-21" },
  {
    id: "11",
    title: "Christmas Eve Service",
    time: "02:00 AM",
    date: "2025-12-25",
  },
  {
    id: "12",
    title: "Family Sunday (Online)",
    time: "08:00 PM",
    date: "2025-12-28",
  },
];

type ViewMode = "week" | "month" | "year";

export function InteractiveCalendar() {
  const [viewMode, setViewMode] = useState<ViewMode>("month");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1)); // December 2025
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, daysInPrevMonth - i),
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i),
      });
    }

    return days;
  };

  const getEventsForDate = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0];
    return events.filter((event) => event.date === dateStr);
  };

  const isToday = (date: Date) => {
    const today = new Date(2025, 11, 26); // December 26, 2025 (from design)
    return date.toDateString() === today.toDateString();
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const days = getDaysInMonth(currentDate);
  const filteredEvents = selectedDate ? getEventsForDate(selectedDate) : events;

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
        <div className="flex items-center gap-4">
          <button onClick={prevMonth} className="text-white hover:opacity-80">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-white text-lg font-normal uppercase tracking-wide">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={nextMonth} className="text-white hover:opacity-80">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentDate(new Date(2025, 11, 26))}
            className="px-3 py-1 text-xs font-semibold bg-white text-black rounded hover:bg-white/90"
          >
            Today
          </button>
          <button
            onClick={() => setViewMode("month")}
            className={`px-3 py-1 text-xs font-semibold rounded ${
              viewMode === "month"
                ? "bg-white text-black"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            Month view
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-gray-200 rounded shadow-lg overflow-hidden">
        {/* Days of Week Header */}
        <div className="grid grid-cols-7 bg-gray-300 border-b border-gray-400">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="p-2 text-center text-gray-700 text-xs font-semibold uppercase"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 bg-gray-200">
          {days.map((dayInfo, index) => {
            const dayEvents = getEventsForDate(dayInfo.date);
            const isTodayDate = isToday(dayInfo.date);

            return (
              <div
                key={index}
                className={`min-h-[100px] p-2 border border-gray-300 ${
                  dayInfo.isCurrentMonth ? "bg-white" : "bg-gray-100"
                } ${
                  isTodayDate ? "ring-2 ring-green-700 ring-inset" : ""
                } hover:bg-gray-50 cursor-pointer transition-colors`}
                onClick={() => setSelectedDate(dayInfo.date)}
              >
                <div
                  className={`text-xs font-bold mb-1 ${
                    dayInfo.isCurrentMonth ? "text-gray-800" : "text-gray-500"
                  } ${isTodayDate ? "text-white bg-green-700 rounded-full w-5 h-5 flex items-center justify-center" : ""}`}
                >
                  {dayInfo.day}
                </div>

                {dayEvents.map((event) => (
                  <div key={event.id} className="mb-1">
                    <div className="text-xs font-medium text-gray-900 leading-tight">
                      {event.title}
                    </div>
                    <div className="text-xs text-gray-600">{event.time}</div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Event List */}
      {selectedDate && (
        <div className="mt-8">
          <h3 className="text-white text-lg font-semibold mb-4">
            Events on {selectedDate.toLocaleDateString()}
          </h3>
          {filteredEvents.length > 0 ? (
            <div className="space-y-2">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded"
                >
                  <div className="text-white font-medium">{event.title}</div>
                  <div className="text-white/70 text-sm">{event.time}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/70">No events scheduled for this day.</p>
          )}
        </div>
      )}
    </div>
  );
}
