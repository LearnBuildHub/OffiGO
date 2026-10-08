'use client';
import { useState, useEffect } from 'react';
export default function Home() {
 const [rideType, setRideType] = useState<'car' | 'bike'>('car');
 const [from, setFrom] = useState('');
 const [to, setTo] = useState('');
 const [date, setDate] = useState('Today');
 const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
 const [showInstallGuide, setShowInstallGuide] = useState(false);
 const [isIos, setIsIos] = useState(false);
 useEffect(() => {
   window.addEventListener('beforeinstallprompt', (e) => {
     e.preventDefault();
     setDeferredPrompt(e);
   });
   const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
   setIsIos(isIosDevice);
 }, []);
 const handleInstallClick = async () => {
   if (deferredPrompt) {
     deferredPrompt.prompt();
     const { outcome } = await deferredPrompt.userChoice;
     if (outcome === 'accepted') {
       setDeferredPrompt(null);
     }
   } else {
     // Fallback guide if browser prompt isn't ready
     setShowInstallGuide(true);
   }
 };
 const handleSearch = (e: React.FormEvent) => {
   e.preventDefault();
   alert(`Searching ${rideType.toUpperCase()} pool from "${from || 'Tech Park'}" to "${to || 'Office Hub'}" on ${date}`);
 };
 return (
<main className="min-h-screen bg-[#060B13] text-white font-sans selection:bg-emerald-500 selection:text-gray-950 overflow-x-hidden">
     {/* Background Glows */}
<div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
<div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none"></div>
     {/* Navigation Bar */}
<nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#060B13]/80 border-b border-white/10 px-6 lg:px-16 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
           Offi<span className="text-emerald-400">Go</span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
<a href="#search" className="hover:text-emerald-400 transition">Explore Pools</a>
<a href="#benefits" className="hover:text-emerald-400 transition">Why OffiGo</a>
<a href="#safety" className="hover:text-emerald-400 transition">Corporate Trust</a>
</div>
<div className="flex items-center gap-3">
<button
           onClick={handleInstallClick}
           className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition flex items-center gap-1.5 cursor-pointer"
>
<span>📱</span> Install App
</button>
<button className="px-5 py-2.5 rounded-xl bg-emerald-500 text-gray-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition cursor-pointer">
           Offer a Ride
</button>
</div>
</nav>
     {/* Hero Section */}
<section className="px-6 lg:px-16 pt-12 pb-20 max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
         {/* Left Content */}
<div className="lg:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
             Verified Corporate & Tech Park Commuters
</div>
<h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
             Intra-City Office Commute, <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
               Reinvented for Professionals.
</span>
</h1>
<p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
             Connect securely with colleagues from your office building. Share car and bike pools with zero platform commission and complete shift synchronization.
</p>
</div>
         {/* Right Imagery - Custom Corporate Commute Vibe */}
<div className="lg:col-span-5 grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-48 group">
<img
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                 alt="Office Team"
                 className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
               />
</div>
<div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-36 group">
<img
                 src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600"
                 alt="Bike Commute"
                 className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
               />
</div>
</div>
<div className="space-y-4 pt-8">
<div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-36 group">
<img
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                 alt="Professional"
                 className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
               />
</div>
<div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-48 group">
<img
                 src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600"
                 alt="Car Drive"
                 className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
               />
</div>
</div>
</div>
</div>
       {/* Glassmorphism Horizontal Search Widget */}
<div id="search" className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 lg:p-8 rounded-3xl shadow-2xl max-w-5xl mx-auto relative z-20">
<div className="flex gap-4 mb-6 border-b border-white/10 pb-4">
<button
             type="button"
             onClick={() => setRideType('car')}
             className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${rideType === 'car' ? 'bg-emerald-500 text-gray-950 shadow-lg shadow-emerald-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
>
<span>🚗</span> Car Pool
</button>
<button
             type="button"
             onClick={() => setRideType('bike')}
             className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 cursor-pointer ${rideType === 'bike' ? 'bg-emerald-500 text-gray-950 shadow-lg shadow-emerald-500/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
>
<span>🏍️</span> Bike Pool
</button>
</div>
<form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
<div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition">
<label className="block text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1">From</label>
<input
               type="text"
               value={from}
               onChange={(e) => setFrom(e.target.value)}
               placeholder="Tech Park / Locality"
               className="w-full bg-transparent text-sm font-semibold text-white outline-none placeholder-gray-500"
             />
</div>
<div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition">
<label className="block text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-1">To</label>
<input
               type="text"
               value={to}
               onChange={(e) => setTo(e.target.value)}
               placeholder="Office Destination"
               className="w-full bg-transparent text-sm font-semibold text-white outline-none placeholder-gray-500"
             />
</div>
<div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
<label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Shift / Date</label>
<select value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-transparent text-sm font-semibold text-white outline-none cursor-pointer">
<option className="bg-slate-900 text-white">Today</option>
<option className="bg-slate-900 text-white">Tomorrow</option>
<option className="bg-slate-900 text-white">Regular Weekdays</option>
</select>
</div>
<div>
<button type="submit" className="w-full h-full min-h-[58px] rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-gray-950 font-extrabold text-base transition shadow-xl hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer">
<span>Search Rides</span>
<span>→</span>
</button>
</div>
</form>
</div>
</section>
     {/* Install Instruction Modal / Drawer */}
     {showInstallGuide && (
<div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
<div className="bg-[#0B132B] border border-white/15 rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl relative">
<div className="flex justify-between items-center">
<h3 className="text-lg font-bold text-white flex items-center gap-2"><span>📱</span> Install OffiGo App</h3>
<button onClick={() => setShowInstallGuide(false)} className="text-gray-400 hover:text-white font-bold cursor-pointer">✕</button>
</div>
           {isIos ? (
<p className="text-sm text-gray-300 leading-relaxed">
               To install on iPhone: Tap the <span className="text-emerald-400 font-bold">Share</span> button in Safari browser, then select <span className="text-emerald-400 font-bold">"Add to Home Screen"</span>.
</p>
           ) : (
<p className="text-sm text-gray-300 leading-relaxed">
               To install on Android / Desktop: Click your browser's menu (3 dots) and select <span className="text-emerald-400 font-bold">"Install App"</span> or <span className="text-emerald-400 font-bold">"Add to Home screen"</span>.
</p>
           )}
<button
             onClick={() => setShowInstallGuide(false)}
             className="w-full py-3 rounded-xl bg-emerald-500 text-gray-950 font-bold text-sm cursor-pointer"
>
             Got it
</button>
</div>
</div>
     )}
     {/* Footer */}
<footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-gray-500 bg-[#04080E]">
<p>Powered by OffiGo • Secure Corporate Transport Ecosystem</p>
</footer>
</main>
 );
}
