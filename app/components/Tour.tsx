const shows = [
  {
    date: "Jun 14, 2026",
    venue: "The Comedy Club",
    city: "Chicago, IL",
    ticketUrl: "#",
  },
  {
    date: "Jun 21, 2026",
    venue: "Laugh Factory",
    city: "Los Angeles, CA",
    ticketUrl: "#",
  },
  {
    date: "Jul 4, 2026",
    venue: "The Stand",
    city: "New York, NY",
    ticketUrl: "#",
  },
  {
    date: "Jul 18, 2026",
    venue: "Zanies Comedy Club",
    city: "Nashville, TN",
    ticketUrl: "#",
  },
  {
    date: "Aug 2, 2026",
    venue: "Comedy Works",
    city: "Denver, CO",
    ticketUrl: "#",
  },
];

export default function Tour() {
  return (
    <section id="tour" className="bg-[#0d2b2b] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-caesar text-6xl sm:text-7xl tracking-tight text-white uppercase mb-12">
          Tour Dates
        </h2>

        <div className="divide-y divide-white/10">
          {shows.map((show) => (
            <div
              key={show.date + show.venue}
              className="flex items-center justify-between gap-6 py-8"
            >
              <div className="flex-1 min-w-0">
                <p className="text-white/50 text-xs tracking-widest uppercase mb-1">
                  {show.date}
                </p>
                <p className="font-caesar text-5xl sm:text-6xl text-white uppercase leading-none mb-2">
                  {show.city}
                </p>
                <p className="text-white/50 text-sm uppercase tracking-wider">
                  {show.venue}
                </p>
              </div>

              <a
                href={show.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-[#1f6060] hover:bg-[#276868] text-white font-display tracking-[0.18em] uppercase text-sm px-7 py-3 rounded-md transition-colors"
              >
                Tickets
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/40 text-sm">
            Request a show in your city —{" "}
            <a href="#contact" className="text-[#e8c84a] hover:underline">
              contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
