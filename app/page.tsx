
import Link from 'next/link';

export default function Home() {

  return (
<main className="min-h-screen bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden">

      {/* Background Glow & Ambient Effects */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
<div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Top Header */}
<header className="relative z-10 flex justify-between items-center px-6 py-5 border-b border-slate-800/80 backdrop-blur-md bg-slate-950/60">
<div className="flex items-center space-x-2">
<span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">

            OffiGo
</span>
</div>
<div className="flex items-center space-x-2">
<span className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-medium border border-emerald-500/20 shadow-inner">

            Corporate Mobility
</span>
</div>
</header>

      {/* Hero Section */}
<section className="relative z-10 my-auto px-6 py-8 space-y-8 text-center max-w-xl mx-auto">

        {/* Floating Mini Badge */}
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 shadow-xl backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
<span>Verified Office Commuters Only</span>
</div>

        {/* Main Headings */}
<div className="space-y-4">
<h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl leading-[1.1]">

            Share Rides, <br />
<span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">

              Cut Carbon & Costs
</span>
</h2>
<p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">

            The ultimate intra-city car and bike pooling ecosystem built specifically for verified corporate professionals.
</p>
</div>

        {/* Action Buttons with Glow */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 w-full max-w-sm mx-auto">
<button className="w-full sm:w-auto flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 px-6 rounded-2xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-95">

            Find a Ride
</button>
<button className="w-full sm:w-auto flex-1 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-200 backdrop-blur-md active:scale-95">

            Offer a Ride
</button>
</div>

        {/* Feature Highlights Grid */}
<div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-900">
<div className="p-3 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-center">
<p className="text-emerald-400 font-bold text-lg">100%</p>
<p className="text-slate-400 text-[11px] mt-0.5">Corporate Verified</p>
</div>
<div className="p-3 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-center">
<p className="text-cyan-400 font-bold text-lg">Zero</p>
<p className="text-slate-400 text-[11px] mt-0.5">Commission Fees</p>
</div>
<div className="p-3 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-center">
<p className="text-teal-400 font-bold text-lg">Smart</p>
<p className="text-slate-400 text-[11px] mt-0.5">Route Matching</p>
</div>
</div>
</section>

      {/* Footer */}
<footer className="relative z-10 text-center text-xs text-slate-500 py-5 border-t border-slate-900 bg-slate-950/80 backdrop-blur-md">

        Powered by  Hub • Secure Corporate Transport
</footer>
</main>
 
  );

}
 
