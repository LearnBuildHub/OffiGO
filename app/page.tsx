'use client';

import React from 'react';

export default function OffiGoDesktopHome() {

  return (
<div className="min-h-screen bg-[#040D1A] text-white font-sans relative overflow-x-hidden">

      {/* Background Gradient & Glow Effects */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* TOP NAVBAR */}
<header className="relative z-50 max-w-7xl mx-auto px-6 h-24 flex items-center justify-between border-b border-cyan-900/30">

        {/* Logo & Brand */}
<div className="flex items-center gap-3">
<div className="relative w-11 h-11 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl rotate-45" />
<svg className="relative z-10 w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
</svg>
</div>
<div>
<span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">

              Offi<span className="text-cyan-400">Go</span>
</span>
<p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold -mt-1">

              Your Daily Corporate Commute Network
</p>
</div>
</div>

        {/* Navigation Links */}
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a>
<a href="#" className="hover:text-cyan-300 transition-colors">How It Works</a>
<a href="#" className="hover:text-cyan-300 transition-colors">Safety</a>
<a href="#" className="hover:text-cyan-300 transition-colors">Corporate</a>
<a href="#" className="hover:text-cyan-300 transition-colors">FAQ</a>
<a href="#" className="hover:text-cyan-300 transition-colors">Contact</a>
</nav>

        {/* Login Button */}
<div>
<a href="/login" className="px-7 py-2.5 rounded-full border border-cyan-500/60 hover:border-cyan-400 text-cyan-200 hover:text-white hover:bg-cyan-500/10 transition-all text-sm font-semibold tracking-wide">

            Login
</a>
</div>
</header>

      {/* HERO SECTION */}
<main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Headings & CTA */}
<div className="lg:col-span-5 space-y-6">
<h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-white">

              Same Office. <br />

              Same Route. <br />
<span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent italic font-extrabold">

                Better Together.
</span>
</h1>
<p className="text-slate-300 text-base leading-relaxed max-w-md">

              Join verified professionals, share or book rides, and make your daily commute easier, safer and more affordable.
</p>

            {/* Action Buttons */}
<div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
<button className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2">

                Book a Ride
</button>
<button className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-[#081a33]/90 border border-cyan-500/50 text-cyan-200 hover:bg-cyan-950/40 font-bold text-sm transition-all flex items-center justify-center gap-2">

                Share a Ride
</button>
</div>
</div>

          {/* Right Column: Hero Graphic Banner with Right-side Tagline */}
<div className="lg:col-span-7 relative">

            {/* Floating Right Tagline */}
<div className="absolute -top-10 right-6 z-20 text-right hidden sm:block">
<p className="text-cyan-300 italic font-serif text-xl sm:text-2xl drop-shadow-md">

                Same People.<br />

                Same Dreams.<br />

                Same Destination.
</p>
</div>

            {/* Banner Image Container */}
<div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#061428] shadow-2xl p-2">
<img 

                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80" 

                alt="OffiGo Corporate Commute Illustration"

                className="w-full h-[360px] sm:h-[420px] object-cover rounded-2xl"

              />
</div>
</div>
</div>

        {/* BOTTOM FEATURE CARDS (How OffiGo Works + Trust Badges) */}
<div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Box: How OffiGo Works */}
<div className="lg:col-span-7 bg-[#071528]/90 border border-cyan-900/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
<h3 className="text-xl font-bold text-white mb-6">How OffiGo Works</h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {/* Step 1 */}
<div className="space-y-2">
<div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold">

                  1
</div>
<h4 className="text-sm font-bold text-white">Choose your route</h4>
<p className="text-xs text-slate-400 leading-relaxed">

                  Enter your office location and preferred time.
</p>
</div>

              {/* Step 2 */}
<div className="space-y-2">
<div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold">

                  2
</div>
<h4 className="text-sm font-bold text-white">Find a matching commute</h4>
<p className="text-xs text-slate-400 leading-relaxed">

                  View available rides from verified professionals.
</p>
</div>

              {/* Step 3 */}
<div className="space-y-2">
<div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold">

                  3
</div>
<h4 className="text-sm font-bold text-white">Connect & ride</h4>
<p className="text-xs text-slate-400 leading-relaxed">

                  Book or share a ride and travel together.
</p>
</div>
</div>
</div>

          {/* Right Box: Trust Badges */}
<div className="lg:col-span-5 bg-[#071528]/90 border border-cyan-900/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex items-center justify-around">
<div className="text-center space-y-2">
<div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">

                🛡️
</div>
<p className="text-xs font-bold text-white">Corporate Verified</p>
</div>
<div className="text-center space-y-2">
<div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">

                🚗
</div>
<p className="text-xs font-bold text-white">Car & Bike Options</p>
</div>
<div className="text-center space-y-2">
<div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">

                🔒
</div>
<p className="text-xs font-bold text-white">Safe & Reliable</p>
</div>
</div>
</div>
</main>
</div>

  );

}
 
