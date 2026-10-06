import Link from 'next/link';

export default function Home() {

  return (
<main className="min-h-screen bg-[#070b19] text-white selection:bg-emerald-500 selection:text-white font-sans">

      {/* Navigation Header */}
<nav className="sticky top-0 z-50 backdrop-blur-md bg-[#070b19]/80 border-b border-white/10 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-2xl font-extrabold tracking-tight text-white">

            Offi<span className="text-emerald-400">Go</span>
<span className="inline-block w-2 h-2 rounded-full bg-yellow-400 ml-0.5 animate-pulse"></span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
<a href="#features" className="hover:text-emerald-400 transition">Features</a>
<a href="#pooling" className="hover:text-emerald-400 transition">Car & Bike Pool</a>
<a href="#safety" className="hover:text-emerald-400 transition">Corporate Trust</a>
</div>
<div className="flex items-center gap-3">
<span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-full font-semibold hidden sm:inline-block">

            Corporate Mobility
</span>
</div>
</nav>

      {/* Hero Section */}
<section className="relative px-6 pt-16 pb-20 max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>

          Verified Office Commuters Only
</div>
<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">

          Share Rides, <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-yellow-400">

            Cut Carbon & Costs
</span>
</h1>
<p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10">

          The ultimate intra-city car and bike pooling ecosystem built specifically for verified corporate professionals working in tech parks and business hubs.
</p>

        {/* Action Buttons */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
<button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold transition shadow-lg shadow-emerald-500/20">

            Find a Ride
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition">

            Offer a Ride
</button>
</div>

        {/* Feature Highlights Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
<div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition">
<h3 className="text-emerald-400 font-bold text-lg mb-1">100%</h3>
<p className="text-gray-400 text-sm">Corporate Verified colleagues from your office or nearby parks.</p>
</div>
<div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition">
<h3 className="text-yellow-400 font-bold text-lg mb-1">Zero</h3>
<p className="text-gray-400 text-sm">Commission fees. Direct peer-to-peer fuel cost sharing.</p>
</div>
<div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition">
<h3 className="text-teal-400 font-bold text-lg mb-1">Smart</h3>
<p className="text-gray-400 text-sm">Route matching algorithm aligned with corporate shift timings.</p>
</div>
</div>
</section>

      {/* Footer */}
<footer className="border-t border-white/10 py-8 text-center text-xs text-gray-500">
<p>Powered by LearnBuild Hub • Secure Corporate Transport Ecosystem</p>
</footer>
</main>

  );

}
 
