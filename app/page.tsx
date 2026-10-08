import React from 'react';

import Image from 'next/image';

import Link from 'next/link';

import { Search, Users, ShieldCheck, Car, Bike, ArrowRight, Lock } from 'lucide-react';

export default function Home() {

  return (
<div className="min-h-screen bg-[#070b19] text-white font-sans selection:bg-cyan-500 selection:text-white">

      {/* Top Navbar */}
<header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-white/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-xl shadow-lg shadow-cyan-500/20">

            O
</div>
<span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">

            OffiGo
</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
<Link href="#" className="text-cyan-400 hover:text-white transition">Home</Link>
<Link href="#" className="hover:text-cyan-400 transition">How It Works</Link>
<Link href="#" className="hover:text-cyan-400 transition">Safety</Link>
<Link href="#" className="hover:text-cyan-400 transition">Corporate</Link>
<Link href="#" className="hover:text-cyan-400 transition">FAQ</Link>
<Link href="#" className="hover:text-cyan-400 transition">Contact</Link>
</nav>
<Link 

          href="/login" 

          className="px-6 py-2 rounded-full border border-white/20 hover:border-cyan-400 text-sm font-semibold transition hover:bg-white/5"
>

          Login
</Link>
</header>

      {/* Hero Section */}
<main className="max-w-7xl mx-auto px-6 pt-12 pb-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Content */}
<div className="lg:col-span-6 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">

              🚀 Your Daily Corporate Commute Network
</div>
<h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">

              Same Office.<br />

              Same Route.<br />
<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">

                Better Together.
</span>
</h1>
<p className="text-gray-300 text-base sm:text-lg max-w-lg leading-relaxed">

              Join verified professionals, share or book rides, and make your daily commute easier, safer and more affordable.
</p>
<div className="flex flex-wrap gap-4 pt-2">
<Link 

                href="/book" 

                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:opacity-90 transition"
>
<Car className="w-5 h-5" /> Book a Ride
</Link>
<Link 

                href="/share" 

                className="px-8 py-4 rounded-full bg-slate-800/80 border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-slate-800 transition"
>
<Users className="w-5 h-5 text-cyan-400" /> Share a Ride
</Link>
</div>
</div>

          {/* Right Hero Graphic / Visual Banner */}
<div className="lg:col-span-6 relative">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-blue-950/50 to-slate-950/80 p-8 shadow-2xl">
<div className="absolute top-4 right-4 text-right italic font-serif text-cyan-200/80 text-sm sm:text-base leading-tight">

                Same People.<br />

                Same Dreams.<br />

                Same Destination.
</div>
<div className="my-12 flex justify-center">
<div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-tr from-blue-900/40 via-cyan-900/20 to-transparent border border-cyan-500/20 shadow-inner">

                  {/* Decorative City & Car representation */}
<div className="absolute inset-0 flex items-center justify-center opacity-85">
<div className="text-center space-y-2">
<div className="w-24 h-24 mx-auto rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center backdrop-blur-md">
<Car className="w-12 h-12 text-cyan-300" />
</div>
<p className="text-xs tracking-widest uppercase text-cyan-400 font-semibold">Tech Park Commute</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

        {/* Bottom Feature Cards Section */}
<div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* How OffiGo Works Box */}
<div className="lg:col-span-8 bg-slate-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
<h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">

              How OffiGo Works
</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Step 1 */}
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-bold">

                    1
</div>
<Search className="w-5 h-5 text-cyan-400" />
</div>
<h4 className="font-semibold text-white">Choose your route</h4>
<p className="text-xs text-gray-400 leading-relaxed">

                  Enter your office location and preferred time.
</p>
</div>

              {/* Step 2 */}
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-bold">

                    2
</div>
<Users className="w-5 h-5 text-cyan-400" />
</div>
<h4 className="font-semibold text-white">Find a matching commute</h4>
<p className="text-xs text-gray-400 leading-relaxed">

                  View available rides from verified professionals.
</p>
</div>

              {/* Step 3 */}
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-bold">

                    3
</div>
<ShieldCheck className="w-5 h-5 text-cyan-400" />
</div>
<h4 className="font-semibold text-white">Connect & ride</h4>
<p className="text-xs text-gray-400 leading-relaxed">

                  Book or share a ride and travel together safely.
</p>
</div>
</div>
</div>

          {/* Key Trust / Features Box */}
<div className="lg:col-span-4 bg-slate-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex items-center justify-around">
<div className="text-center space-y-2">
<div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-cyan-400">
<ShieldCheck className="w-6 h-6" />
</div>
<h5 className="text-xs font-semibold text-gray-200">Corporate<br />Verified</h5>
</div>
<div className="w-[1px] h-16 bg-white/10"></div>
<div className="text-center space-y-2">
<div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-cyan-400">
<Car className="w-6 h-6" />
</div>
<h5 className="text-xs font-semibold text-gray-200">Car & Bike<br />Options</h5>
</div>
<div className="w-[1px] h-16 bg-white/10"></div>
<div className="text-center space-y-2">
<div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-cyan-400">
<Lock className="w-6 h-6" />
</div>
<h5 className="text-xs font-semibold text-gray-200">Safe &<br />Reliable</h5>
</div>
</div>
</div>
</main>
</div>

  );

}
 
