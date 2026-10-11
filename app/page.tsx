'use client';

import React, { useState } from 'react';

export default function OffiGoHomePage() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
<div className="min-h-screen bg-[#06101E] text-white font-sans relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">

      {/* Background Subtle Grid & Ambient Glows */}
<div 

        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" 

      />
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation Bar */}
<header className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between border-b border-cyan-900/30">

        {/* Logo Section */}
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-500 p-[2px] shadow-lg shadow-cyan-500/20">
<div className="w-full h-full bg-[#081528] rounded-[10px] flex items-center justify-center">
<svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</div>
</div>
<div>
<span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">

              Offi<span className="text-cyan-400">Go</span>
</span>
<p className="text-[9px] uppercase tracking-wider text-slate-400 -mt-1 font-medium">Your Daily Corporate Commute</p>
</div>
</div>

        {/* Right Actions */}
<div className="flex items-center gap-4">
<a

            href="/login"

            className="px-6 py-2 rounded-full border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white hover:bg-cyan-500/10 transition-all text-sm font-semibold tracking-wide backdrop-blur-sm"
>

            Login
</a>
<button

            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60"

            aria-label="Toggle Navigation Menu"
>
<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
</svg>
</button>
</div>
</header>

      {/* Main Hero Content Area */}
<main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8 pb-16">

        {/* Top Tagline Badge */}
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />

          YOUR DAILY CORPORATE COMMUTE NETWORK
</div>

        {/* Hero Heading */}
<h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">

          Same Office. <br />

          Same Route. <br />
<span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent italic">

            Better Together.
</span>
</h1>

        {/* Hero Description */}
<p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">

          Join verified professionals, share or book rides, and make your daily commute easier, safer, and more affordable.
</p>

        {/* Action Buttons */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-6">
<a

            href="/book-ride"

            className="w-full sm:w-1/2 py-3.5 px-6 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-base hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
>
<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
</svg>

            Book a Ride
</a>
<a

            href="/share-ride"

            className="w-full sm:w-1/2 py-3.5 px-6 rounded-full bg-[#0b1c33] border border-cyan-500/40 text-cyan-200 font-semibold text-base hover:bg-cyan-950/40 hover:border-cyan-400 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
>
<svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>

            Share a Ride
</a>
</div>

        {/* PWA Shortcut prompt */}
<div className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 cursor-pointer transition-colors mb-10">
<svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>

          Add OffiGo to Home Screen
</div>

        {/* Hero Bottom Illustration Banner */}
<div className="relative mt-2 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/20 bg-gradient-to-b from-cyan-950/20 to-slate-900/40 p-2 shadow-2xl shadow-cyan-950/50">
<img

            src="/images/offigo-hero-banner.png"

            alt="OffiGo Commute Route Illustration"

            className="w-full h-auto rounded-xl object-cover"

            onError={(e) => {

              // Fallback if image isn't in public/images yet

              e.currentTarget.src = "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80";

            }}

          />
</div>
</main>
</div>

  );

}
 
