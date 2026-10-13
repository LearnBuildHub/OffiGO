'use client';

import Link from 'next/link';

import Header from '@/components/Header';

import Install from '@/components/Install';

export default function Home() {

  return (
<main className="home min-h-screen bg-[#070d19] text-white">
<Header />

      {/* ================= HERO SECTION WITH FULL BACKGROUND ================= */}
<section className="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-between overflow-hidden pt-20 pb-12 px-4 sm:px-8 lg:px-16">

        {/* Full Background Image Overlay */}
<div 

          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"

          style={{ backgroundImage: `url('/hero-art.png')` }}
>

          {/* Dark Gradient Overlay for perfect text visibility */}
<div className="absolute inset-0 bg-gradient-to-r from-[#070d19]/95 via-[#070d19]/80 to-[#070d19]/30 lg:to-transparent" />
<div className="absolute inset-0 bg-gradient-to-b from-[#070d19]/60 via-transparent to-[#070d19]" />
</div>

        {/* Hero Content */}
<div className="relative z-10 max-w-3xl space-y-6 my-auto pt-8">

          {/* Brand Logo inside Hero Content */}
<img className="hero-logo h-10 w-auto mb-2" src="/offigo-logo.png" alt="OffiGo Logo" />

          {/* Tagline Badge */}
<div className="tag inline-block px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-black tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md shadow-lg">

            YOUR DAILY CORPORATE COMMUTE NETWORK
</div>

          {/* Main Headline */}
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">

            Same Office.<br />

            Same Route.<br />
<i className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">

              Better Together.
</i>
</h1>

          {/* Subtitle */}
<p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">

            Join verified professionals, share or book rides, and make your daily commute easier, safer and more affordable.
</p>

          {/* Action Call To Actions */}
<div className="actions flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
<Link 

              href="/login?next=book" 

              className="primary px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 transition-all hover:scale-105"
>

              🚘 &nbsp; Book a Ride
</Link>
<Link 

              href="/login?next=share" 

              className="secondary px-8 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider border border-slate-700/80 backdrop-blur-md flex items-center justify-center gap-2 shadow-xl transition-all hover:scale-105"
>

              👥 &nbsp; Share a Ride
</Link>
</div>

          {/* Install PWA Prompt */}
<div className="pt-2">
<Install />
</div>
</div>
</section>

      {/* ================= HOW IT WORKS & FEATURES ================= */}
<section id="how" className="how relative z-10 py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="how-left lg:col-span-7 bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl space-y-8">
<h2 className="text-2xl sm:text-3xl font-black text-white">How OffiGo Works</h2>
<div className="steps space-y-6">
<Step n="1" icon="⌕" title="Choose your route" text="Enter your office location and preferred time." />
<Step n="2" icon="👥" title="Find a matching commute" text="View available rides from verified professionals." />
<Step n="3" icon="✓" title="Connect & ride" text="Book or share a ride and travel together." />
</div>
</div>
<div id="safety" className="features lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
<Feature icon="🛡️" title={<>Corporate<br />Verified</>} />
<Feature icon="🚘🏍️" title={<>Car & Bike<br />Options</>} />
<Feature icon="✓" title={<>Safe &<br />Reliable</>} />
</div>
</section>

      {/* ================= CORPORATE COMMUTE SECTION ================= */}
<section id="corporate" className="corporate relative z-10 py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="space-y-4">
<span className="text-xs font-black tracking-widest text-cyan-400 uppercase">BUILT FOR CORPORATE COMMUTERS</span>
<h2 className="text-3xl sm:text-4xl font-black text-white">Your office community, on the road.</h2>
<p className="text-sm text-slate-300 leading-relaxed">

            OffiGo is designed around companies, tech parks, routes and shift timings — not random city rides. Start with a focused Pune corridor and grow when the network becomes reliable.
</p>
</div>
<div className="corp-card p-8 rounded-3xl bg-gradient-to-br from-blue-900/40 to-slate-900/80 border border-cyan-500/30 backdrop-blur-xl text-center space-y-2 shadow-2xl">
<b className="block text-xl font-black text-cyan-300">Wakad → Hinjewadi</b>
<span className="block text-xs font-semibold text-slate-400">Example launch corridor</span>
<strong className="block text-5xl font-black text-white pt-2">₹5</strong>
<small className="block text-xs text-slate-400 uppercase tracking-wider">platform fee after free rides</small>
</div>
</section>

      {/* ================= FAQ SECTION ================= */}
<section id="faq" className="faq relative z-10 py-16 px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto space-y-6">
<h2 className="text-3xl font-black text-white text-center mb-8">Frequently Asked</h2>
<div className="space-y-4">
<details className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 cursor-pointer">
<summary className="font-bold text-sm text-white">Is OffiGo only for office commuting?</summary>
<p className="mt-3 text-xs text-slate-300 leading-relaxed">Yes. The first version is focused on recurring home-to-office and office-to-home commuting.</p>
</details>
<details className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 cursor-pointer">
<summary className="font-bold text-sm text-white">Can I choose a car or bike?</summary>
<p className="mt-3 text-xs text-slate-300 leading-relaxed">Yes. Ride results can be filtered by vehicle type.</p>
</details>
<details className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 cursor-pointer">
<summary className="font-bold text-sm text-white">Do I need company verification?</summary>
<p className="mt-3 text-xs text-slate-300 leading-relaxed">Booking and ride sharing will require mobile OTP followed by corporate verification.</p>
</details>
</div>
</section>

      {/* ================= FOOTER ================= */}
<footer id="contact" className="relative z-10 border-t border-slate-800/80 py-10 px-4 text-center space-y-3 bg-slate-950">
<img className="h-8 w-auto mx-auto" src="/offigo-logo.png" alt="OffiGo Logo" />
<span className="block text-xs text-slate-400 font-semibold">OffiGo — Your Daily Corporate Commute Network</span>
<small className="block text-[10px] text-slate-500 uppercase tracking-wider">Powered by LearnBuild Hub</small>
</footer>
</main>

  );

}

function Step({ n, icon, title, text }: { n: string, icon: string, title: string, text: string }) { 

  return (
<div className="step flex items-start gap-4">
<b className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0 font-bold text-lg">{icon}</b>
<div>
<em className="not-italic text-[10px] font-black uppercase text-cyan-400 tracking-wider">Step {n}</em>
<h3 className="text-base font-bold text-white">{title}</h3>
<p className="text-xs text-slate-300 mt-0.5">{text}</p>
</div>
</div>

  );

}; 

function Feature({ icon, title }: { icon: string, title: React.ReactNode }) { 

  return (
<div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl flex items-center gap-4">
<b className="text-2xl">{icon}</b>
<strong className="text-xs font-bold text-white leading-snug">{title}</strong>
</div>

  );

}
 
