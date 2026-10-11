'use client';

import React, { useState } from 'react';

export default function OffiGoLandingPage() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
<div className="min-h-screen bg-[#030B17] text-white font-sans relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">

      {/* Background Subtle Grid */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2744_1px,transparent_1px),linear-gradient(to_bottom,#0f2744_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-30 pointer-events-none" />
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/15 blur-[140px] rounded-full pointer-events-none" />

      {/* NAVBAR */}
<header className="relative z-50 max-w-7xl mx-auto px-5 h-20 flex items-center justify-between border-b border-cyan-900/20">
<div className="flex items-center gap-2.5">
<div className="relative w-11 h-11 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl rotate-45 opacity-80" />
<div className="relative z-10 text-white font-black text-xl flex items-center justify-center">
<svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
</svg>
</div>
</div>
<div className="flex flex-col">
<span className="text-2xl font-black tracking-tight text-white leading-none">

              Offi<span className="text-cyan-400">Go</span>
</span>
<span className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold mt-0.5">

              Your Daily Corporate Commute Network
</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-2 rounded-full border border-cyan-500/60 text-cyan-200 hover:text-white hover:bg-cyan-500/10 transition-all text-sm font-semibold tracking-wide">

            Login
</button>
<button onClick={() => setMenuOpen(!menuOpen)} className="p-1.5 text-slate-300 hover:text-white rounded-lg">
<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
</svg>
</button>
</div>
</header>

      {/* HERO SECTION */}
<main className="relative z-10 max-w-xl mx-auto px-5 text-center pt-8 pb-12">
<p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">

          YOUR DAILY CORPORATE COMMUTE NETWORK
</p>
<h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] text-white mb-5">

          Same Office. <br />

          Same Route. <br />
<span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent italic font-extrabold">

            Better Together.
</span>
</h1>
<p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-lg mx-auto font-normal mb-8">

          Join verified professionals, share or book rides, and make your daily commute easier, safer and more affordable.
</p>

        {/* CTAs */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-6">
<button className="w-full sm:w-1/2 py-3.5 px-5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2">

            Book a Ride
</button>
<button className="w-full sm:w-1/2 py-3.5 px-5 rounded-full bg-[#08172c]/80 border border-cyan-500/50 text-cyan-200 hover:bg-cyan-950/40 font-bold text-sm transition-all flex items-center justify-center gap-2">

            Share a Ride
</button>
</div>
<div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-300 hover:text-cyan-200 cursor-pointer transition-colors mb-8">

          Add OffiGo to Home Screen
</div>

        {/* Controlled Image Box Size */}
<div className="relative max-w-md mx-auto rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#061427] shadow-2xl p-2">
<img 

            src="/images/offigo-hero.png" 

            alt="OffiGo Corporate Commute Illustration"

            className="w-full h-auto object-contain rounded-xl max-h-[320px]"

            onError={(e) => {

              e.currentTarget.src = "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80";

            }}

          />
</div>
</main>
</div>

  );

}
 
