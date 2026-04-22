export default function Calendar() {
  const events = [
    {
      date: "Oct 22, 2021",
      time: "9:00 AM",
      title: "Healing and Deliverance Meeting",
      desc: "Tincidunt augue interdum velit euismagnis dis parturient montes nascetur.",
      img: "https://cdn.prod.website-files.com/60df60bf8a21e72645df37b0/60e4a37f15e6237e93cfec2a_image-4-events-church-x-template-p-800.jpeg",
    },
    {
      date: "Nov 10, 2021",
      time: "3:00 PM",
      title: "Family restoration time",
      desc: "Tincidunt augue interdum velit euismagnis dis parturient montes nascetur.",
      img: "https://cdn.prod.website-files.com/60df60bf8a21e72645df37b0/60e4a380035e0669b199834f_image-3-events-church-x-template-p-800.jpeg",
    },
    {
      date: "Dec 16, 2021",
      time: "12:00 PM",
      title: "Vigil and prayer for our community",
      desc: "Tincidunt augue interdum velit euismagnis dis parturient montes nascetur.",
      img: "https://cdn.prod.website-files.com/60df60bf8a21e72645df37b0/60e4a37fa80812b2f8fffbb4_image-2-events-church-x-template-p-800.jpeg",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="mx-auto w-[90%] max-w-[1246px]">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
          Calendar of Events
        </h1>

        <div className="grid gap-14">
          {events.map((e, i) => (
            <a
              key={i}
              href="#"
              className="relative block overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img
                    src={e.img}
                    alt={e.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://cdn.prod.website-files.com/60df60bf8a21e72645df37b0/60dfb3480bb6ad22468ac9ef_icon-1-date-church-x-template.svg"
                        alt="date"
                        className="w-5 h-5"
                      />
                      <span className="text-sm">{e.date}</span>
                    </div>
                    <div className="h-px bg-gray-200 w-6" />
                    <div className="flex items-center gap-3">
                      <img
                        src="https://cdn.prod.website-files.com/60df60bf8a21e72645df37b0/60dfb3489b2e9d6df9a228f5_icon-2-date-church-x-template.svg"
                        alt="time"
                        className="w-5 h-5"
                      />
                      <span className="text-sm">{e.time}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold mb-3">{e.title}</h2>
                  <p className="text-muted-foreground mb-6">{e.desc}</p>

                  <div className="uppercase font-semibold text-sm tracking-wide">
                    Register to event
                  </div>
                  <div className="mt-3 bg-gray-200 h-2 w-full overflow-hidden">
                    <div
                      className="bg-[#003366] h-2 w-0"
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
