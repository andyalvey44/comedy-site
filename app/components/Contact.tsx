export default function Contact() {
  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <h2 className="font-caesar text-8xl sm:text-9xl tracking-tight text-white uppercase leading-none">
            Contacts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ContactCard
            title="Booking"
            lines={[
              "For corporate events, festivals,",
              "and private bookings.",
            ]}
            contact="booking@andyalvey.com"
            href="mailto:booking@andyalvey.com"
          />
          <ContactCard
            title="Management"
            lines={[
              "General inquiries,",
              "press, and media.",
            ]}
            contact="management@andyalvey.com"
            href="mailto:management@andyalvey.com"
          />
          <ContactCard
            title="Fans"
            lines={[
              "Say hello, request a show",
              "in your city, or just vibe.",
            ]}
            contact="hello@andyalvey.com"
            href="mailto:hello@andyalvey.com"
          />
        </div>

        <div className="mt-20 border-t border-white/10 pt-14">
          <p className="font-display text-white/40 text-xs tracking-[0.3em] uppercase mb-8">
            Follow Along
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { name: "Instagram", url: "https://instagram.com/andyalveycomedy" },
              { name: "TikTok", url: "https://tiktok.com/@andyalveycomedy" },
              { name: "YouTube", url: "https://youtube.com/@andyalveycomedy" },
              { name: "Facebook", url: "https://facebook.com/andyalveycomedy" },
              { name: "X / Twitter", url: "https://x.com/andyalvey" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm tracking-widest uppercase text-white/50 hover:text-[#e8c84a] transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  title,
  lines,
  contact,
  href,
}: {
  title: string;
  lines: string[];
  contact: string;
  href: string;
}) {
  return (
    <div className="border border-white/10 p-8 hover:border-[#e8c84a]/40 transition-colors">
      <p className="font-display text-[#e8c84a] text-xs tracking-[0.3em] uppercase mb-4">
        {title}
      </p>
      <div className="text-white/50 text-sm leading-relaxed mb-6">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <a
        href={href}
        className="text-white text-sm hover:text-[#e8c84a] transition-colors break-all"
      >
        {contact}
      </a>
    </div>
  );
}
