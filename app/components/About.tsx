"use client";

export default function About() {
  return (
    <section id="about" className="bg-[#f5f5f0] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="relative aspect-[3/4] bg-neutral-300 overflow-hidden max-w-md mx-auto lg:mx-0 w-full">
          {/* Swap /about.jpg with your real headshot */}
          <img
            src="/about.jpg"
            alt="Andy Alvey"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Fallback placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-200">
            <span className="font-display text-neutral-400 text-xl tracking-widest uppercase">
              Photo
            </span>
          </div>
        </div>

        {/* Bio */}
        <div>
          <p className="font-display text-[#e8c84a] text-xs tracking-[0.35em] uppercase mb-3">
            Bio
          </p>
          <h2 className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-black mb-8 leading-tight">
            Andy
            <br />
            Alvey
          </h2>
          <div className="space-y-5 text-black/70 leading-relaxed text-[15px]">
            <p>
              Andy Alvey is a nationally touring stand-up comedian known for his
              sharp wit, self-deprecating humor, and uncanny ability to find the
              funny in the mundane moments of everyday life.
            </p>
            <p>
              With years of experience on stages across the country — from
              intimate comedy clubs to festival headliner sets — Andy has built
              a devoted following of fans who appreciate his honest, relatable,
              and unexpectedly clever perspective on the world.
            </p>
            <p>
              Whether he&apos;s dissecting the absurdity of modern technology,
              the chaos of family life, or just the strange things people do
              when they think nobody&apos;s watching, Andy delivers every punchline
              with a timing that makes it look effortless.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#tour"
              className="inline-block bg-black text-white font-display text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#e8c84a] hover:text-black transition-colors"
            >
              See Tour Dates
            </a>
            <a
              href="#contact"
              className="inline-block border border-black/20 text-black font-display text-sm tracking-widest uppercase px-8 py-4 hover:border-[#e8c84a] transition-colors"
            >
              Book Andy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
