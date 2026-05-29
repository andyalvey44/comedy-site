const videos = [
  {
    title: "Andy Alvey — Live Clip 1",
    youtubeId: "dQw4w9WgXcQ", // replace with real YouTube IDs
    description: "Full set at The Comedy Club",
  },
  {
    title: "Andy Alvey — Live Clip 2",
    youtubeId: "dQw4w9WgXcQ",
    description: "Highlights from Laugh Factory",
  },
  {
    title: "Andy Alvey — Live Clip 3",
    youtubeId: "dQw4w9WgXcQ",
    description: "Late night appearance",
  },
];

export default function Videos() {
  return (
    <section id="videos" className="bg-[#111111] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="font-display text-[#e8c84a] text-xs tracking-[0.35em] uppercase mb-3">
            Watch
          </p>
          <h2 className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Videos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.title} className="group">
              <div className="relative aspect-video bg-black overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="mt-3">
                <p className="text-white font-semibold">{video.title}</p>
                <p className="text-white/40 text-sm mt-1">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://youtube.com/@andyalveycomedy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/20 text-white font-display text-sm tracking-widest uppercase px-8 py-4 hover:border-[#e8c84a] hover:text-[#e8c84a] transition-colors"
          >
            More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
