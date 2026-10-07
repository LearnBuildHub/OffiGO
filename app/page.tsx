'use client';

import { useState } from 'react';

export default function Home() {

  const [activeTab, setActiveTab] = useState<'find' | 'offer'>('find');

  const [vehicle, setVehicle] = useState<'car' | 'bike'>('car');

  return (
<main className="min-h-screen bg-[#070b19] text-white font-sans selection:bg-emerald-500 selection:text-gray-950 overflow-x-hidden">

      {/* Glowing background ambient lights */}
<div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Navigation Header */}
<nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#070b19]/80 border-b border-white/10 px-6 lg:px-16 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">

            Offi<span className="text-emerald-400">Go</span>
<span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
<a href="#features" className="hover:text-emerald-400 transition">How it Works</a>
<a href="#routes" className="hover:text-emerald-400 transition">Tech Park Routes</a>
<a href="#safety" className="hover:text-emerald-400 transition">Safety & Trust</a>
</div>
<div className="flex items-center gap-3">
<button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-gray-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:scale-105 transition duration-300">

            Get Started
</button>
</div>
</nav>

      {/* Hero Section with Immersive Visuals & Floating Animation */}
<section className="relative px-6 lg:px-16 pt-12 pb-24 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Content */}
<div className="lg:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

              Exclusive for Tech Park & Office Professionals
</div>
<h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">

              Smart Car & Bike Pooling <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 animate-gradient">

                For Daily Commuters.
</span>
</h1>
<p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">

              Cut down travel expenses and reduce carbon footprint by sharing rides with verified colleagues heading to the same corporate hub.
</p>

            {/* Quick Action Tabs */}
<div className="flex gap-3 pt-4">
<button 

                onClick={() => setActiveTab('find')}

                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'find' ? 'bg-emerald-500 text-gray-950 shadow-lg shadow-emerald-500/30' : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'}`}
>

                🔍 Find a Ride
</button>
<button 

                onClick={() => setActiveTab('offer')}

                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'offer' ? 'bg-amber-400 text-gray-950 shadow-lg shadow-amber-400/30' : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'}`}
>

                🚗 Offer a Ride
</button>
</div>
</div>

          {/* Right Hero Image Card with Glassmorphism */}
<div className="lg:col-span-5">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
<div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl space-y-6">

                {/* Vehicle Selector (Car / Bike) */}
<div className="grid grid-cols-2 gap-3">
<button 

                    onClick={() => setVehicle('car')}

                    className={`p-4 rounded-2xl border text-center transition-all ${vehicle === 'car' ? 'bg-emerald-500/20 border-emerald-500 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'}`}
>
<div className="text-2xl mb-1">🚗</div>
<div className="font-bold text-sm">Car Pool</div>
</button>
<button 

                    onClick={() => setVehicle('bike')}

                    className={`p-4 rounded-2xl border text-center transition-all ${vehicle === 'bike' ? 'bg-amber-400/20 border-amber-400 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'}`}
>
<div className="text-2xl mb-1">🏍️</div>
<div className="font-bold text-sm">Bike Pool</div>
</button>
</div>

                {/* Simulated Input Fields */}
<div className="space-y-3">
<div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-emerald-400"></span>
<input type="text" placeholder="Enter Pickup Tech Park" className="bg-transparent text-sm w-full outline-none text-white placeholder-gray-500" />
</div>
<div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-amber-400"></span>
<input type="text" placeholder="Enter Office Hub Destination" className="bg-transparent text-sm w-full outline-none text-white placeholder-gray-500" />
</div>
</div>
<button className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-gray-950 font-extrabold transition hover:opacity-90 shadow-lg">

                  Search Available {vehicle === 'car' ? 'Cars' : 'Bikes'} ⚡
</button>
</div>
</div>
</div>
</div>
</section>

      {/* Feature Showcase Grid with Images & Hover Effects */}
<section id="features" className="border-t border-white/10 bg-[#040711] py-20 px-6 lg:px-16">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Designed for Elite Corporate Commuters</h2>
<p className="text-gray-400 text-sm sm:text-base">Experience a seamless ride-sharing ecosystem crafted with security, speed, and absolute trust.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
<div className="group rounded-3xl bg-white/[0.02] border border-white/10 p-8 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
<div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-2xl font-bold mb-6 group-hover:scale-110 transition">

                🛡️
</div>
<h3 className="text-xl font-bold text-white mb-3">100% Corporate Verified</h3>
<p className="text-gray-400 text-sm leading-relaxed">Every member goes through official office email verification so you only travel with trusted peers.</p>
</div>

            {/* Card 2 */}
<div className="group rounded-3xl bg-white/[0.02] border border-white/10 p-8 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2">
<div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-2xl font-bold mb-6 group-hover:scale-110 transition">

                🤝
</div>
<h3 className="text-xl font-bold text-white mb-3">Zero Commission Model</h3>
<p className="text-gray-400 text-sm leading-relaxed">No hidden aggregator cuts or surge pricing. Direct peer fuel cost sharing between colleagues.</p>
</div>

            {/* Card 3 */}
<div className="group rounded-3xl bg-white/[0.02] border border-white/10 p-8 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-2">
<div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 text-2xl font-bold mb-6 group-hover:scale-110 transition">

                ⚡
</div>
<h3 className="text-xl font-bold text-white mb-3">Smart Shift Matching</h3>
<p className="text-gray-400 text-sm leading-relaxed">Algorithm synchronizes rides perfectly with corporate shift timings and tech park entry hours.</p>
</div>
</div>
</div>
</section>

      {/* Footer */}
<footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-gray-500 bg-[#070b19]">
<p>Powered by LearnBuild Hub • Secure Corporate Transport Ecosystem</p>
</footer>
</main>

  );

}
 
