const shows = [
  {
    date: "Jun 14, 2026",
    day: "SAT",
    venue: "The Comedy Club",
    city: "Chicago, IL",
    ticketUrl: "#",
  },
  {
    date: "Jun 21, 2026",
    day: "SAT",
    venue: "Laugh Factory",
    city: "Los Angeles, CA",
    ticketUrl: "#",
  },
  {
    date: "Jul 4, 2026",
    day: "SAT",
    venue: "The Stand",
    city: "New York, NY",
    ticketUrl: "#",
  },
  {
    date: "Jul 18, 2026",
    day: "SAT",
    venue: "Zanies Comedy Club",
    city: "Nashville, TN",
    ticketUrl: "#",
  },
  {
    date: "Aug 2, 2026",
    day: "SUN",
    venue: "Comedy Works",
    city: "Denver, CO",
    ticketUrl: "#",
  },
];

export default function Tour() {
  return (
    <section id="tour" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="font-display text-[#e8c84a] text-xs tracking-[0.35em] uppercase mb-3">
            Live
          </p>
          <h2 className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Tour Dates
          </h2>
        </div>

        <div className="divide-y divide-white/10">
          {shows.map((show) => (
            <div
              key={show.date + show.venue}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 py-6 hover:bg-white/[0.02] transition-colors px-2 -mx-2"
            >
              <div className="sm:w-28 flex-shrink-0">
                <p className="font-display text-[#e8c84a] text-xs tracking-widest uppercase">
                  {show.day}
                </p>
                <p className="text-white font-medium">{show.date}</p>
              </div>

              <div className="flex-1">
                <p className="text-white font-semibold text-lg">{show.venue}</p>
                <p className="text-white/50 text-sm">{show.city}</p>
              </div>

              <a
                href={show.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:ml-auto flex-shrink-0 border border-white/20 text-white font-display text-xs tracking-widest uppercase px-6 py-2.5 hover:border-[#e8c84a] hover:text-[#e8c84a] transition-colors"
              >
                Tickets
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/40 text-sm">
            Request a show in your city —{" "}
            <a
              href="#contact"
              className="text-[#e8c84a] hover:underline"
            >
              contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
