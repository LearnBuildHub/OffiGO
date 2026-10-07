'use client';

import { useState } from 'react';

export default function Home() {

  const [rideType, setRideType] = useState<'car' | 'bike'>('car');

  const [from, setFrom] = useState('');

  const [to, setTo] = useState('');

  const handleSearch = (e: React.FormEvent) => {

    e.preventDefault();

    alert(`Searching ${rideType.toUpperCase()} pool from "${from || 'Tech Park'}" to "${to || 'Office Hub'}"...`);

  };

  return (
<main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">

      {/* Navigation Header */}
<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200 px-6 lg:px-16 py-4 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2">
<span className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1">

            Offi<span className="text-emerald-600">Go</span>
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
<a href="#how-it-works" className="hover:text-emerald-600 transition">How it Works</a>
<a href="#routes" className="hover:text-emerald-600 transition">Popular Routes</a>
<a href="#safety" className="hover:text-emerald-600 transition">Corporate Safety</a>
</div>
<div className="flex items-center gap-3">
<button className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition">

            Offer a Ride
</button>
</div>
</nav>

      {/* Hero Section with Light Theme & Car/Bike Pool Imagery */}
<section className="px-6 lg:px-16 pt-12 pb-20 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

          {/* Left Text */}
<div className="lg:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
<span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>

              Verified Tech Park Car & Bike Pooling
</div>
<h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">

              Share Your Daily Office Ride, <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">

                Cut Fuel Costs & Traffic.
</span>
</h1>
<p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">

              Connect directly with colleagues from your office building. Experience secure, zero-commission intra-city car and bike pooling designed for professionals.
</p>
</div>

          {/* Right Images - Carpool & Bike Commute Focus */}
<div className="lg:col-span-5 grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-52 group">
<img 

                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600" 

                  alt="Car pooling highway drive" 

                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"

                />
</div>
<div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-36 group">
<img 

                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600" 

                  alt="Bike pooling commute" 

                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"

                />
</div>
</div>
<div className="space-y-4 pt-8">
<div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-36 group">
<img 

                  src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=600" 

                  alt="Car sharing friends" 

                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"

                />
</div>
<div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-52 group">
<img 

                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600" 

                  alt="Modern car vehicle" 

                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"

                />
</div>
</div>
</div>
</div>

        {/* Clean Light Interactive Search Card */}
<div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 lg:p-8 max-w-5xl mx-auto relative z-20">
<div className="flex gap-4 mb-6">
<button 

              type="button"

              onClick={() => setRideType('car')}

              className={`px-6 py-3 rounded-2xl font-bold text-sm transition flex items-center gap-2 ${rideType === 'car' ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
>
<span>🚗</span> Car Pool
</button>
<button 

              type="button"

              onClick={() => setRideType('bike')}

              className={`px-6 py-3 rounded-2xl font-bold text-sm transition flex items-center gap-2 ${rideType === 'bike' ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
>
<span>🏍️</span> Bike Pool
</button>
</div>
<form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></span>
<input 

                type="text" 

                value={from} 

                onChange={(e) => setFrom(e.target.value)}

                placeholder="Pickup Tech Park / Locality" 

                className="bg-transparent text-sm w-full outline-none text-slate-900 placeholder-slate-400 font-medium" 

              />
</div>
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-amber-500 shrink-0"></span>
<input 

                type="text" 

                value={to} 

                onChange={(e) => setTo(e.target.value)}

                placeholder="Office Destination / Tech Park" 

                className="bg-transparent text-sm w-full outline-none text-slate-900 placeholder-slate-400 font-medium" 

              />
</div>
<button type="submit" className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold transition shadow-lg cursor-pointer">

              Search {rideType === 'car' ? 'Cars' : 'Bikes'} ⚡
</button>
</form>
</div>
</section>

      {/* Features Section with Light Cards */}
<section id="how-it-works" className="bg-white border-t border-slate-200 py-20 px-6 lg:px-16">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Why Corporate Professionals Choose OffiGo</h2>
<p className="text-slate-600 text-sm">Everything you need for a secure, comfortable, and cost-effective daily commute.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 hover:border-emerald-500 transition group">
<div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl font-bold mb-6 group-hover:scale-110 transition">🛡️</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Corporate ID Verification</h3>
<p className="text-slate-600 text-sm leading-relaxed">Travel exclusively with verified employees working in nearby tech parks and offices.</p>
</div>
<div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 hover:border-amber-500 transition group">
<div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 text-xl font-bold mb-6 group-hover:scale-110 transition">🤝</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Zero Commission</h3>
<p className="text-slate-600 text-sm leading-relaxed">No intermediary markups. Direct peer fuel cost sharing between colleagues.</p>
</div>
<div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 hover:border-teal-500 transition group">
<div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-600 text-xl font-bold mb-6 group-hover:scale-110 transition">⚡</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Shift Synchronized</h3>
<p className="text-slate-600 text-sm leading-relaxed">Smart algorithms match your exact office entry and exit login shift timings.</p>
</div>
</div>
</div>
</section>

      {/* Footer */}
<footer className="border-t border-slate-200 py-8 px-6 text-center text-xs text-slate-500 bg-[#F8FAFC]">
<p>Powered by LearnBuild Hub • Secure Corporate Transport Ecosystem</p>
</footer>
</main>

  );

}
 
