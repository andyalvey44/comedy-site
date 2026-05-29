export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-white/30 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Andy Alvey. All rights reserved.
        </p>
        <p className="font-display text-white/20 text-xs tracking-widest uppercase">
          andyalvey.com
        </p>
      </div>
    </footer>
  );
}
