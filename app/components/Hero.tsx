export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end bg-black overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10" />

      {/* Placeholder background — swap with real photo via public/hero.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Fallback texture when no photo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1a1a_0%,_#000_80%)]" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 pb-20 w-full">
        <div className="max-w-2xl">
          <p className="font-display text-[#e8c84a] text-sm tracking-[0.3em] uppercase mb-4">
            Stand-Up Comedian
          </p>
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-none text-white mb-6">
            Andy
            <br />
            Alvey
          </h1>
          <p className="text-white/60 text-lg max-w-md leading-relaxed mb-10">
            Nationally touring stand-up comedian bringing honest, hilarious
            takes on everyday life to stages across the country.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#tour"
              className="inline-block bg-[#e8c84a] text-black font-display font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors"
            >
              Upcoming Shows
            </a>
            <a
              href="#videos"
              className="inline-block border border-white/30 text-white font-display font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-[#e8c84a] hover:text-[#e8c84a] transition-colors"
            >
              Watch Clips
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
