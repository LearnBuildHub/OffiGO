'use client';

import { useState } from 'react';

export default function Home() {

  const [rideType, setRideType] = useState<'car' | 'bike'>('car');

  const [from, setFrom] = useState('');

  const [to, setTo] = useState('');

  const [date, setDate] = useState('Today');

  const handleSearch = (e: React.FormEvent) => {

    e.preventDefault();

    alert(`Searching ${rideType.toUpperCase()} pool from "${from || 'Hinjewadi Phase 1'}" to "${to || 'Kharadi Tech Park'}" on ${date}`);

  };

  return (
<main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

      {/* Navigation Bar */}
<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-100 px-6 lg:px-16 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-2xl font-extrabold tracking-tight text-blue-600">

            Offi<span className="text-slate-900">Go</span>
<span className="inline-block w-2 h-2 rounded-full bg-blue-600 ml-0.5"></span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
<a href="#search" className="hover:text-blue-600 transition">Search Ride</a>
<a href="#offer" className="hover:text-blue-600 transition">Offer a Ride</a>
<a href="#safety" className="hover:text-blue-600 transition">Corporate Trust</a>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 text-sm font-bold hover:bg-blue-50 transition">

            Offer a ride
</button>
</div>
</nav>

      {/* Hero Section - Exact Ola / BlaBlaCar Split Style */}
<section className="px-6 lg:px-16 pt-10 pb-16 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-10">

          {/* Left Text Content */}
<div className="lg:col-span-7 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>

              Official Tech Park Commute Network
</div>
<h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">

              Travel anywhere together. <br />
<span className="text-blue-600">Spend smarter.</span>
</h1>
<p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">

              Connect with verified professionals from your tech park. Share fuel expenses seamlessly with zero platform commission.
</p>
</div>

          {/* Right Hero Image (Real Car Pooling Vibe like BlaBlaCar/Ola) */}
<div className="lg:col-span-5">
<div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative group h-[320px]">
<img 

                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" 

                alt="Corporate Carpool Ride" 

                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"

              />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
<div className="text-white">
<span className="text-xs bg-blue-600 px-2.5 py-1 rounded-full font-bold">Verified Profiles</span>
<p className="text-sm font-medium mt-1">Safe rides with your office colleagues.</p>
</div>
</div>
</div>
</div>
</div>

        {/* Clean Horizontal Search Bar Widget (Ola / BlaBlaCar Style) */}
<div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 lg:p-8 max-w-6xl mx-auto relative z-20">

          {/* Car / Bike Selector Tabs */}
<div className="flex gap-4 mb-6 border-b border-slate-100 pb-4">
<button 

              type="button"

              onClick={() => setRideType('car')}

              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition ${rideType === 'car' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
>
<span>🚗</span> Car Pool
</button>
<button 

              type="button"

              onClick={() => setRideType('bike')}

              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition ${rideType === 'bike' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
>
<span>🏍️</span> Bike Pool
</button>
</div>
<form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">

            {/* From Input */}
<div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition">
<label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">From</label>
<input 

                type="text" 

                value={from} 

                onChange={(e) => setFrom(e.target.value)}

                placeholder="Tech Park / Locality" 

                className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder-slate-400" 

              />
</div>

            {/* To Input */}
<div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 transition">
<label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">To</label>
<input 

                type="text" 

                value={to} 

                onChange={(e) => setTo(e.target.value)}

                placeholder="Office Destination" 

                className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder-slate-400" 

              />
</div>

            {/* Departure Date */}
<div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
<label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Departure</label>
<select value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none">
<option>Today</option>
<option>Tomorrow</option>
<option>Scheduled</option>
</select>
</div>

            {/* Search Submit Button */}
<div>
<button type="submit" className="w-full h-full min-h-[58px] rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer">
<span>Search</span>
<span>→</span>
</button>
</div>
</form>
</div>
</section>

      {/* Top Routes Section */}
<section className="bg-slate-50 border-t border-slate-100 py-16 px-6 lg:px-16">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">Top corporate carpool routes</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition shadow-sm flex items-center justify-between cursor-pointer">
<div>
<h4 className="font-bold text-slate-900 text-base">Hinjewadi ➔ Kharadi</h4>
<p className="text-xs text-slate-500 mt-1">Daily tech park shift commute</p>
</div>
<span className="text-xl text-blue-600 font-bold">→</span>
</div>
<div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition shadow-sm flex items-center justify-between cursor-pointer">
<div>
<h4 className="font-bold text-slate-900 text-base">Magarpatta ➔ Baner</h4>
<p className="text-xs text-slate-500 mt-1">Verified office colleagues</p>
</div>
<span className="text-xl text-blue-600 font-bold">→</span>
</div>
<div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition shadow-sm flex items-center justify-between cursor-pointer">
<div>
<h4 className="font-bold text-slate-900 text-base">Wakad ➔ Hadapsar</h4>
<p className="text-xs text-slate-500 mt-1">Direct fuel-sharing pool</p>
</div>
<span className="text-xl text-blue-600 font-bold">→</span>
</div>
</div>
</div>
</section>

      {/* Footer */}
<footer className="border-t border-slate-100 py-8 px-6 text-center text-xs text-slate-500 bg-white">
<p>Powered by LearnBuild Hub • Secure Corporate Transport Ecosystem</p>
</footer>
</main>

  );

}
 
