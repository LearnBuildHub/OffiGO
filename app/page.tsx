import Link from 'next/link';

export default function Home() {

  return (
<main className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans selection:bg-amber-400 selection:text-gray-950">

      {/* Navigation Header */}
<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-2xl font-extrabold tracking-tight text-gray-900">

            Offi<span className="text-emerald-600">Go</span>
<span className="inline-block w-2 h-2 rounded-full bg-amber-500 ml-0.5 animate-pulse"></span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a href="#how-it-works" className="hover:text-emerald-600 transition">How it Works</a>
<a href="#pool" className="hover:text-emerald-600 transition">Car & Bike Pool</a>
<a href="#safety" className="hover:text-emerald-600 transition">Corporate Trust</a>
</div>
<div className="flex items-center gap-3">
<span className="text-xs bg-amber-500/10 text-amber-700 border border-amber-500/20 px-3 py-1.5 rounded-full font-semibold">

            Corporate Mobility
</span>
</div>
</nav>

      {/* Hero / Onboarding Section */}
<section className="relative px-6 pt-12 pb-16 max-w-5xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Text & Welcome */}
<div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/10 border border-emerald-600/20 text-emerald-700 text-xs font-semibold mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>

              Welcome Back, Commuter!
</div>
<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-gray-900">

              Take a cab or bike, wherever you are, <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500">

                sooner than ever.
</span>
</h1>
<p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">

              The ultimate intra-city car and bike pooling ecosystem built specifically for verified corporate professionals. Save costs and reduce your carbon footprint.
</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold transition shadow-md shadow-amber-400/20">

                Find a Ride Now →
</button>
<button className="px-8 py-4 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold border border-gray-300 transition">

                Offer Ride
</button>
</div>
</div>

          {/* Right Interactive Card Preview (Onboarding Style) */}
<div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Select Ride Type</h3>
<p className="text-lg font-bold text-gray-900">Car & Bike Pool</p>
</div>
<div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">

                Active Hub
</div>
</div>

            {/* Ride Options Tabs */}
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-400 cursor-pointer">
<div className="text-2xl mb-1">🚗</div>
<div className="font-bold text-sm text-gray-900">Car Pool</div>
<div className="text-xs text-gray-500">Verified colleagues</div>
</div>
<div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 hover:border-gray-300 cursor-pointer">
<div className="text-2xl mb-1">🏍️</div>
<div className="font-bold text-sm text-gray-800">Bike Pool</div>
<div className="text-xs text-gray-500">Fast & direct commute</div>
</div>
</div>

            {/* Location Inputs Simulation */}
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
<span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
<span className="text-sm text-gray-700 font-medium">Tech Park / Pickup Location</span>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
<span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
<span className="text-sm text-gray-700 font-medium">Office / Drop Location</span>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-bold transition shadow-lg">

              Request Match Now
</button>
</div>
</div>
</section>

      {/* Feature Highlights Grid */}
<section className="bg-white border-t border-gray-200 py-16 px-6">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
<h3 className="text-emerald-600 font-extrabold text-xl mb-2">100% Verified</h3>
<p className="text-gray-600 text-sm">Only corporate professionals from recognized tech parks and office hubs.</p>
</div>
<div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
<h3 className="text-amber-600 font-extrabold text-xl mb-2">Zero Commission</h3>
<p className="text-gray-600 text-sm">Direct peer-to-peer fuel sharing with no hidden platform overhead charges.</p>
</div>
<div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
<h3 className="text-teal-600 font-extrabold text-xl mb-2">Smart Route Match</h3>
<p className="text-gray-600 text-sm">Optimized route alignment matching office shift timings seamlessly.</p>
</div>
</div>
</section>

      {/* Footer */}
<footer className="border-t border-gray-200 py-8 text-center text-xs text-gray-500 bg-[#FDFBF7]">
<p>Powered by LearnBuild Hub • Secure Corporate Transport Ecosystem</p>
</footer>
</main>

  );

}
 
