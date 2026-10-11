'use client';

import React, { useState } from 'react';

export default function OffiGoLandingPage() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
<div className="min-h-screen bg-[#030B17] text-white font-sans relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">

      {/* Dark Subtle Background Grid Line Overlay */}
<div 

        className="absolute inset-0 bg-[linear-gradient(to_right,#0f2744_1px,transparent_1px),linear-gradient(to_bottom,#0f2744_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-30 pointer-events-none" 

      />

      {/* Ambient Blue Background Glow Behind Content */}
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/15 blur-[140px] rounded-full pointer-events-none" />

      {/* NAVBAR */}
<header className="relative z-50 max-w-7xl mx-auto px-5 h-20 flex items-center justify-between border-b border-cyan-900/20">

        {/* OffiGo Brand Logo */}
<div className="flex items-center gap-2.5">

          {/* Custom Stylized Logo Icon */}
<div className="relative w-11 h-11 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl rotate-45 opacity-80" />
<div className="relative z-10 text-white font-black text-xl tracking-tighter flex items-center justify-center">
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

        {/* Right Navigation Controls */}
<div className="flex items-center gap-4">
<button className="px-6 py-2 rounded-full border border-cyan-500/60 text-cyan-200 hover:text-white hover:bg-cyan-500/10 transition-all text-sm font-semibold tracking-wide">

            Login
</button>
<button 

            onClick={() => setMenuOpen(!menuOpen)}

            className="p-1.5 text-slate-300 hover:text-white rounded-lg focus:outline-none"

            aria-label="Toggle Menu"
>
<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
</svg>
</button>
</div>
</header>

      {/* HERO SECTION */}
<main className="relative z-10 max-w-xl mx-auto px-5 text-center pt-8 pb-12">

        {/* Top Eyebrow Tagline */}
<p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">

          YOUR DAILY CORPORATE COMMUTE NETWORK
</p>

        {/* Big Bold Headline */}
<h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] text-white mb-5">

          Same Office. <br />

          Same Route. <br />
<span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent italic font-extrabold">

            Better Together.
</span>
</h1>

        {/* Sub-description */}
<p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-lg mx-auto font-normal mb-8">

          Join verified professionals, share or book rides, and make your daily commute easier, safer and more affordable.
</p>

        {/* CTAs: Book a Ride & Share a Ride Buttons */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-6">

          {/* Book a Ride (Cyan Solid Button) */}
<button className="w-full sm:w-1/2 py-3.5 px-5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 active:scale-95">
<svg className="w-4 h-4 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
<path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
</svg>

            Book a Ride
</button>

          {/* Share a Ride (Dark Outlined Button) */}
<button className="w-full sm:w-1/2 py-3.5 px-5 rounded-full bg-[#08172c]/80 border border-cyan-500/50 text-cyan-200 hover:bg-cyan-950/40 font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95">
<svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
</svg>

            Share a Ride
</button>
</div>

        {/* PWA Prompt Link */}
<div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-300 hover:text-cyan-200 cursor-pointer transition-colors mb-8">
<svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>

          Add OffiGo to Home Screen
</div>

        {/* Dynamic Graphic Container for Hero Banner */}
<div className="relative max-w-lg mx-auto rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-cyan-900/20 to-transparent shadow-2xl">
<div className="rounded-[22px] overflow-hidden bg-[#061427]">
<img 

              src="/images/offigo-hero.png" 

              alt="OffiGo Corporate Commute Illustration"

              className="w-full h-auto object-cover"

              onError={(e) => {

                // Fallback online illustration until local image is placed in public/images

                e.currentTarget.src = "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80";

              }}

            />
</div>
</div>
</main>
</div>

  );

}
 
