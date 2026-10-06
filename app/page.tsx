'use client';

import { useState } from 'react';

export default function Home() {

  const [rideType, setRideType] = useState<'car' | 'bike'>('car');

  return (
<main className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans selection:bg-amber-400 selection:text-gray-950">

      {/* Navigation Header */}
<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 px-6 lg:px-16 py-4 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2">
<span className="text-2xl font-extrabold tracking-tight text-gray-900">

            Offi<span className="text-emerald-600">Go</span>
<span className="inline-block w-2 h-2 rounded-full bg-amber-500 ml-0.5 animate-pulse"></span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a href="#features" className="hover:text-emerald-600 transition">Features</a>
<a href="#pooling" className="hover:text-emerald-600 transition">Car & Bike Pool</a>
<a href="#safety" className="hover:text-emerald-600 transition">Corporate Trust</a>
</div>
<div className="flex items-center gap-3">
<span className="text-xs bg-amber-500/10 text-amber-700 border border-amber-500/20 px-3.5 py-1.5 rounded-full font-semibold">

            Corporate Mobility
</span>
</div>
</nav>

      {/* Hero Section - Swiggy/Zomato Web Style Split Layout */}
<section className="px-6 lg:px-16 pt-12 pb-20 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Content */}
<div className="lg:col-span-7 text-left">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/10 border border-emerald-600/20 text-emerald-700 text-xs font-semibold mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>

              Verified Office Commuters Only
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-gray-900">

              Share Rides, Cut Carbon & Costs <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500">

                Sooner Than Ever.
</span>
</h1>
<p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">

              The ultimate intra-city car and bike pooling ecosystem built specifically for corporate professionals. Connect directly with colleagues from your office tech park.
</p>

            {/* Quick stats row */}
<div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 max-w-lg">
<div>
<h4 className="text-2xl font-extrabold text-emerald-600">100%</h4>
<p className="text-xs text-gray-500 font-medium">Corporate Verified</p>
</div>
<div>
<h4 className="text-2xl font-extrabold text-amber-500">Zero</h4>
<p className="text-xs text-gray-500 font-medium">Commission Fees</p>
</div>
<div>
<h4 className="text-2xl font-extrabold text-teal-600">Smart</h4>
<p className="text-xs text-gray-500 font-medium">Shift Matching</p>
</div>
</div>
</div>

          {/* Right Interactive Widget (App/Platform Card) */}
<div className="lg:col-span-5">
<div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-200 relative overflow-hidden">
<div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quick Ride Match</h3>
<p className="text-lg font-bold text-gray-900">Where are you commuting?</p>
</div>
<div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">

                  Live
</div>
</div>

              {/* Ride Type Selector */}
<div className="grid grid-cols-2 gap-3 mb-6">
<button 

                  onClick={() => setRideType('car')}

                  className={`p-4 rounded-2xl border text-left transition ${rideType === 'car' ? 'bg-amber-50 border-amber-400 shadow-sm' : 'bg-gray-50 border-gray-200 hover:border-gray-300'}`}
>
<div className="text-2xl mb-1">🚗</div>
<div className="font-bold text-sm text-gray-900">Car Pool</div>
<div className="text-xs text-gray-500">Comfortable commute</div>
</button>
<button 

                  onClick={() => setRideType('bike')}

                  className={`p-4 rounded-2xl border text-left transition ${rideType === 'bike' ? 'bg-emerald-50 border-emerald-400 shadow-sm' : 'bg-gray-50 border-gray-200 hover:border-gray-300'}`}
>
<div className="text-2xl mb-1">🏍️</div>
<div className="font-bold text-sm text-gray-900">Bike Pool</div>
<div className="text-xs text-gray-500">Fast & direct</div>
</button>
</div>

              {/* Location Inputs */}
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
<span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
<input type="text" placeholder="Enter Tech Park / Pickup Location" className="bg-transparent text-sm w-full outline-none text-gray-800 placeholder-gray-400 font-medium" />
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
<span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
<input type="text" placeholder="Enter Office Hub / Drop Location" className="bg-transparent text-sm w-full outline-none text-gray-800 placeholder-gray-400 font-medium" />
</div>
</div>
<button className="w-full py-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold transition shadow-lg flex items-center justify-center gap-2">
<span>Find Matching Rides</span>
<span>→</span>
</button>
</div>
</div>
</div>
</section>

      {/* Feature Grid Section */}
<section id="features" className="bg-white border-t border-gray-200 py-16 px-6 lg:px-16">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Corporate Professionals Choose OffiGo</h2>
<p className="text-gray-600 text-sm">Designed specifically to solve intra-city office transit with absolute security and zero friction.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:border-emerald-500 transition">
<div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl mb-6">🛡️</div>
<h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Verified</h3>
<p className="text-gray-600 text-sm leading-relaxed">Rigorous verification ensures you only share rides with authenticated professionals working in nearby corporate offices.</p>
</div>
<div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:border-amber-500 transition">
<div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl mb-6">🤝</div>
<h3 className="text-xl font-bold text-gray-900 mb-2">Zero Commission</h3>
<p className="text-gray-600 text-sm leading-relaxed">No hidden aggregator cuts. Pure peer-to-peer fuel cost sharing directly between commuting colleagues.</p>
</div>
<div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:border-teal-500 transition">
<div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xl mb-6">⚡</div>
<h3 className="text-xl font-bold text-gray-900 mb-2">Smart Shift Matching</h3>
<p className="text-gray-600 text-sm leading-relaxed">Algorithm matches riders based on corporate shift timings and synchronized entry/exit schedules at tech parks.</p>
</div>
</div>
</div>
</section>

      {/* Footer */}
<footer className="border-t border-gray-200 py-8 px-6 text-center text-xs text-gray-500 bg-[#FDFBF7]">
<p>Powered by LearnBuild Hub • Secure Corporate Transport Ecosystem</p>
</footer>
</main>

  );

}
 
