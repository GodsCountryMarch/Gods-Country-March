import React, { useState } from "react";

// CTA Button
function CTAButton({ children, href = "#", variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-2xl shadow hover:shadow-lg transition active:scale-[.99] focus:outline-none focus:ring-2";
  const styles =
    variant === "primary"
      ? "bg-white text-slate-900 focus:ring-white/40"
      : variant === "dark"
      ? "bg-slate-900 text-white focus:ring-slate-900/40 border border-white/10"
      : "bg-transparent text-white border border-white/30 backdrop-blur focus:ring-white/30";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function HeaderBackground() {
  return <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-hero" />;
}

function MemorialGuestbook() {
  const [entries, setEntries] = useState([
    { name: "Ava R.", message: "Thank you for your bold witness. We will carry the torch.", ts: "2025-09-16" },
    { name: "Jon M.", message: "Praying for revival in Idaho. Christ be honored.", ts: "2025-09-16" },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const message = data.get("message");
    if (!name || !message) return;
    setEntries([{ name: String(name), message: String(message), ts: new Date().toISOString().slice(0, 10) }, ...entries]);
    form.reset();
  }

  return (
    <section id="memorial" className="bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Memorial Guestbook for Charlie</h2>
        <p className="mt-3 text-slate-600">Leave words of remembrance, prayers, or encouragement.</p>

        {/* NOTE: Vercel doesn’t support Netlify Forms; this is client-side only for now */}
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 max-w-2xl">
          <input required name="name" placeholder="Your name" className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300" />
          <textarea required name="message" placeholder="Your message..." rows="3" className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300" />
          <button className="rounded-2xl bg-black text-white px-5 py-3 font-semibold shadow hover:shadow-lg active:scale-[.99]">Submit Comment</button>
        </form>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {entries.map((e, i) => (
            <div key={i} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-slate-800">{e.name}</p>
                <p className="text-xs text-slate-500">{e.ts}</p>
              </div>
              <p className="mt-2 text-slate-700 whitespace-pre-wrap">{e.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-4 mb-2 flex items-center justify-between rounded-2xl bg-black/90 text-white backdrop-blur px-4 py-3 shadow-xl ring-1 ring-white/10">
            <a href="#home" className="font-black tracking-tight text-lg">God’s Country March</a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#about" className="hover:opacity-90">About</a>
              <a href="#details" className="hover:opacity-90">Details</a>
              <a href="#donate" className="hover:opacity-90">Donate</a>
              <a href="#memorial" className="hover:opacity-90">Memorial</a>
              <a href="#faq" className="hover:opacity-90">FAQ</a>
            </nav>
            <CTAButton href="#rsvp" variant="primary">RSVP</CTAButton>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate pt-28">
        <HeaderBackground />
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <div className="mx-auto w-fit mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs text-white shadow">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="font-semibold tracking-wide">Tuesday, Oct 14, 2025 • 6:00 PM • Capitol Steps, Boise</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Peaceful March in Honor of Charlie and Christ
          </h1>
          <p className="mt-6 text-white text-lg sm:text-xl max-w-2xl mx-auto opacity-95">
            Link arms. Pray. Walk together in faith. Idaho can lead with courage and kindness — add your voice on the Capitol steps.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton href="#rsvp" variant="primary">RSVP Free</CTAButton>
            <CTAButton href="#volunteer">Volunteer</CTAButton>
            <a href="#donate" className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-2xl shadow bg-red-600 text-white">Donate</a>
            <CTAButton href="#details" variant="dark">Event Details</CTAButton>
          </div>
        </div>
        <div className="relative h-3 bg-gradient-to-r from-red-700 via-white to-blue-700" />
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">What is the God’s Country March?</h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              A public witness of faith and unity in Idaho. We gather to pray, worship, and speak up for truth. Not political — people who love God, honor Christ, stand under the Cross, and celebrate the freedoms God has given our nation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">When</p>
              <p className="mt-1 font-semibold">Tue, Oct 14, 2025 • 6:00 PM</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Where</p>
              <p className="mt-1 font-semibold">Idaho State Capitol Steps, Boise</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Cost</p>
              <p className="mt-1 font-semibold">Free</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Bring</p>
              <p className="mt-1 font-semibold">Water, sunscreen, signs, friends</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold">Schedule & details</h2>
          <p className="mt-3 text-slate-700">Gather at 6:00 PM on the Capitol steps. Opening prayer, worship, brief messages, then a peaceful march in honor of Charlie and Christ. Speaker list coming soon; updates will be emailed to everyone who RSVPs.</p>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="relative bg-gradient-to-r from-red-700 via-white to-blue-700 text-center text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Support the March</h2>
          <p className="mt-2">Your donations help cover permits, sound, and logistics. Thank you for supporting this peaceful witness.</p>
          <a href="https://example.com/donate" className="mt-6 inline-block rounded-2xl bg-black text-white px-6 py-3 font-semibold shadow">Donate Now</a>
        </div>
      </section>

      <MemorialGuestbook />

      {/* RSVP */}
      <section id="rsvp" className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold">RSVP to get updates</h2>
          {/* Use Google Forms/Formspree/etc. for real submissions on Vercel */}
          <form className="mt-6 grid grid-cols-1 gap-4 max-w-md mx-auto">
            <input required name="name" placeholder="Full name" className="rounded-xl bg-white/10 px-4 py-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" />
            <input required type="email" name="email" placeholder="Email" className="rounded-xl bg-white/10 px-4 py-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" />
            <button className="rounded-2xl bg-white text-slate-900 px-5 py-3 font-semibold shadow hover:shadow-lg active:scale-[.99]">Submit RSVP</button>
          </form>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section id="volunteer" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold">Volunteer teams</h2>
          <p className="mt-3 text-slate-700">Greeters, prayer teams, cleanup, first aid, song leaders, and more.</p>
          <form className="mt-6 grid grid-cols-1 gap-4 max-w-md">
            <input required name="name" placeholder="Full name" className="rounded-xl border border-slate-300 px-4 py-3" />
            <input required type="email" name="email" placeholder="Email" className="rounded-xl border border-slate-300 px-4 py-3" />
            <select name="team" className="rounded-xl border border-slate-300 px-4 py-3">
              <option>Greeters</option>
              <option>Prayer team</option>
              <option>Cleanup</option>
              <option>First aid</option>
              <option>Song leaders</option>
              <option>General help</option>
            </select>
            <button className="rounded-2xl bg-black text-white px-5 py-3 font-semibold shadow">Sign up</button>
          </form>
        </div>
      </section>

      {/* SHARE */}
      <section id="share" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold">Spread the word</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[`Tue 10/14 • 6 PM • Idaho Capitol steps. Peaceful, prayerful march in honor of Charlie and Christ. #GodsCountryMarch`,
              `Idaho can lead with courage and kindness. Join us Tue 10/14 at 6 PM on the Capitol steps. RSVP free at the link. #FaithAndFreedom`,
              `Bring a friend and a prayer. Peaceful march at 6 PM, Capitol steps, Boise. Details on the site. #Idaho #Boise #GodsCountry`].map((c, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                <button onClick={() => navigator.clipboard.writeText(c)} className="float-right text-xs underline">Copy</button>
                <p className="pr-12">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-12 text-white/80">
          <p>© {new Date().getFullYear()} God’s Country March • <a href="#donate" className="underline">Support the March</a></p>
          <p>Questions? <a href="mailto:info@godscountrymarch.org" className="underline">info@godscountrymarch.org</a></p>
        </div>
      </footer>
    </div>
  );
}
