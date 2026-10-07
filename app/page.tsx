'use client';
import { useState } from 'react';
export default function Home() {
 const [rideType, setRideType] = useState<'car' | 'bike'>('car');
 const [from, setFrom] = useState('');
 const [to, setTo] = useState('');
 const handleSearch = (e: React.FormEvent) => {
   e.preventDefault();
   alert(`Searching ${rideType.toUpperCase()} pool from "${from || 'Hinjewadi Phase 1'}" to "${to || 'Kharadi Knowledge Park'}"...`);
 };
 return (
<main className="min-h-screen bg-[#050B14] text-white font-sans selection:bg-emerald-500 selection:text-gray-950 overflow-x-hidden">
     {/* Background Ambient Glows */}
<div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none"></div>
<div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
     {/* Navigation */}
<nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#050B14]/80 border-b border-white/10 px-6 lg:px-16 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
           Offi<span className="text-emerald-400">Go</span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
<a href="#explore" className="hover:text-emerald-400 transition">Explore Pools</a>
<a href="#benefits" className="hover:text-emerald-400 transition">Why OffiGo</a>
<a href="#safety" className="hover:text-emerald-400 transition">Corporate Trust</a>
</div>
<div className="flex items-center gap-3">
<button className="px-5 py-2.5 rounded-xl bg-emerald-500 text-gray-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition">
           Offer a Ride
</button>
</div>
</nav>
     {/* Hero Section with Stunning Imagery & Glass Search Box */}
<section className="relative px-6 lg:px-16 pt-10 pb-24 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
         {/* Left Text */}
<div className="lg:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
             Verified Tech Park & Corporate Commuters
</div>
<h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
             Share Your Daily Office Ride, <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
               Cut Fuel Costs & Traffic.
</span>
</h1>
<p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
             Connect directly with colleagues from your office building or tech park. Experience secure, zero-commission intra-city car and bike pooling.
</p>
</div>
         {/* Right Image Collage / Real Professional Vibe */}
<div className="lg:col-span-5 grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-48 group">
<img
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                 alt="Colleagues collaborating"
                 className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
               />
</div>
<div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-36 group">
<img
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                 alt="Professional commuter"
                 className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
               />
</div>
</div>
<div className="space-y-4 pt-8">
<div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-36 group">
<img
                 src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
                 alt="Office Hub"
                 className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
               />
</div>
<div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-48 group">
<img
                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600"
                 alt="Carpool team"
                 className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
               />
</div>
</div>
</div>
</div>
       {/* Floating Interactive Glassmorphism Search Bar */}
<div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 lg:p-8 rounded-3xl shadow-2xl max-w-5xl mx-auto relative z-20">
<div className="flex gap-4 mb-6">
<button
             type="button"
             onClick={() => setRideType('car')}
             className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 ${rideType === 'car' ? 'bg-emerald-500 text-gray-950 shadow-lg shadow-emerald-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
>
<span>🚗</span> Car Pool
</button>
<button
             type="button"
             onClick={() => setRideType('bike')}
             className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 ${rideType === 'bike' ? 'bg-emerald-500 text-gray-950 shadow-lg shadow-emerald-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
>
<span>🏍️</span> Bike Pool
</button>
</div>
<form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-emerald-400 shrink-0"></span>
<input
               type="text"
               value={from}
               onChange={(e) => setFrom(e.target.value)}
               placeholder="Pickup Tech Park / Locality"
               className="bg-transparent text-sm w-full outline-none text-white placeholder-gray-500 font-medium"
             />
</div>
<div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-cyan-400 shrink-0"></span>
<input
               type="text"
               value={to}
               onChange={(e) => setTo(e.target.value)}
               placeholder="Office Destination / Hub"
               className="bg-transparent text-sm w-full outline-none text-white placeholder-gray-500 font-medium"
             />
</div>
<button type="submit" className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-gray-950 font-extrabold transition hover:opacity-90 shadow-xl cursor-pointer">
             Search Matching Rides ⚡
</button>
</form>
</div>
</section>
     {/* Feature Cards with Premium Background Imagery */}
<section id="benefits" className="border-t border-white/10 bg-[#03070E] py-20 px-6 lg:px-16">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Built for Modern Professionals</h2>
<p className="text-gray-400 text-sm">Everything you need for a secure, comfortable, and cost-effective daily commute.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 hover:border-emerald-500/50 transition group">
<div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xl font-bold mb-6 group-hover:scale-110 transition">🛡️</div>
<h3 className="text-xl font-bold text-white mb-2">Corporate ID Verification</h3>
<p className="text-gray-400 text-sm leading-relaxed">Travel exclusively with verified employees working in nearby tech parks and companies.</p>
</div>
<div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 hover:border-cyan-500/50 transition group">
<div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl font-bold mb-6 group-hover:scale-110 transition">🤝</div>
<h3 className="text-xl font-bold text-white mb-2">Zero Commission</h3>
<p className="text-gray-400 text-sm leading-relaxed">No intermediary markups. Direct fuel sharing between peers with absolute transparency.</p>
</div>
<div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 hover:border-teal-500/50 transition group">
<div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 text-xl font-bold mb-6 group-hover:scale-110 transition">⚡</div>
<h3 className="text-xl font-bold text-white mb-2">Shift Synchronized</h3>
<p className="text-gray-400 text-sm leading-relaxed">Smart algorithms match your exact office entry and exit login shift timings.</p>
</div>
</div>
</div>
</section>
     {/* Footer */}
<footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-gray-500 bg-[#050B14]">
<p>Powered by LearnBuild Hub • Secure Corporate Transport Ecosystem</p>
</footer>
</main>
 );
}
