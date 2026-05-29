"use client";

import { useState } from "react";

export default function EmailSMS() {
  const [mode, setMode] = useState<"email" | "sms">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Wire up to your provider here (Klaviyo, Postscript, etc.)
    await new Promise((r) => setTimeout(r, 800)); // placeholder
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="bg-[#0d2b2b] px-8 py-12">
          {submitted ? (
            <div className="text-center py-8">
              <p className="font-display text-2xl font-bold text-white tracking-wide uppercase mb-3">
                You&apos;re on the list!
              </p>
              <p className="text-white/60 text-sm">
                We&apos;ll let you know when Andy is heading your way.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-wide uppercase leading-tight mb-2">
                  Tell Me To Come To Your City!
                </h2>
                <p className="font-display text-white/60 text-xs tracking-[0.2em] uppercase">
                  Get Notified About Upcoming Shows And More
                </p>
              </div>

              {/* Email / SMS toggle */}
              <div className="flex mb-6">
                <button
                  type="button"
                  onClick={() => setMode("email")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-display tracking-widest uppercase transition-colors border ${
                    mode === "email"
                      ? "bg-[#1a5050] border-[#1a5050] text-white"
                      : "bg-transparent border-white/20 text-white/50 hover:text-white"
                  }`}
                >
                  <EmailIcon />
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setMode("sms")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-display tracking-widest uppercase transition-colors border-t border-b border-r ${
                    mode === "sms"
                      ? "bg-[#1a5050] border-[#1a5050] text-white"
                      : "bg-transparent border-white/20 text-white/50 hover:text-white"
                  }`}
                >
                  <SmsIcon />
                  SMS
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {mode === "email" ? (
                  <input
                    type="email"
                    required
                    placeholder="YOUR@EXAMPLE.COM"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0a1f1f] border border-white/10 text-white placeholder-white/30 text-sm px-4 py-3 outline-none focus:border-[#e8c84a]/50 font-display tracking-wider"
                  />
                ) : (
                  <input
                    type="tel"
                    required
                    placeholder="YOUR PHONE NUMBER"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#0a1f1f] border border-white/10 text-white placeholder-white/30 text-sm px-4 py-3 outline-none focus:border-[#e8c84a]/50 font-display tracking-wider"
                  />
                )}

                <input
                  type="text"
                  placeholder="POSTAL CODE"
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                  className="w-full bg-[#0a1f1f] border border-white/10 text-white placeholder-white/30 text-sm px-4 py-3 outline-none focus:border-[#e8c84a]/50 font-display tracking-wider"
                />

                <div className="space-y-3 pt-1">
                    <label className="flex gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={check1}
                        onChange={(e) => setCheck1(e.target.checked)}
                        className="mt-0.5 flex-shrink-0 accent-[#1a5050]"
                      />
                      <span className="text-white/50 text-[11px] leading-relaxed">
                        By checking this box, I agree to receive updates and
                        promotional {mode === "sms" ? "text messages" : "emails"} related to
                        products, events and services from Andy Alvey.{" "}
                        {mode === "sms"
                          ? "Message & data rates may apply. Reply STOP to opt out. HELP for help."
                          : "You may unsubscribe at any time."}
                      </span>
                    </label>
                    <label className="flex gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={check2}
                        onChange={(e) => setCheck2(e.target.checked)}
                        className="mt-0.5 flex-shrink-0 accent-[#1a5050]"
                      />
                      <span className="text-white/50 text-[11px] leading-relaxed">
                        By checking this box, I agree to receive transactional
                        text messages from Andy Alvey related to my account,
                        orders, or services. Frequency may vary. Message &amp;
                        data rates may apply. Reply STOP to opt out. HELP for
                        help.
                      </span>
                    </label>
                </div>

                <div className="text-center pt-1">
                  <a href="#" className="text-white/30 text-[11px] hover:text-white/60 transition-colors">
                    Privacy Policy
                  </a>
                  <span className="text-white/20 text-[11px] mx-2">|</span>
                  <a href="#" className="text-white/30 text-[11px] hover:text-white/60 transition-colors">
                    Terms &amp; Conditions
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1a5050] hover:bg-[#1f6060] text-white font-display text-sm tracking-[0.3em] uppercase py-4 transition-colors disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>

              {mode === "sms" && (
                <p className="text-center text-white/30 text-[11px] tracking-widest uppercase mt-5">
                  ⊙ I&apos;ll Only Text You When I&apos;m Performing In Your City
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function SmsIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
    </svg>
  );
}
