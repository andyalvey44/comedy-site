export default function AnnouncementBanner() {
  return (
    <div className="fixed top-20 left-0 right-0 z-40 w-full bg-[#0d2b2b] py-2.5 px-6 text-center">
      <p className="text-white/80 text-sm tracking-wide">
        No shows currently — to request a city{" "}
        <a
          href="#signup"
          className="text-white underline underline-offset-2 hover:text-[#e8c84a] transition-colors"
        >
          contact me below
        </a>
      </p>
    </div>
  );
}
