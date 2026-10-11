<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>OffiGo - Your Daily Corporate Commute Network</title>
<!-- Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com"></script>
<!-- FontAwesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
<!-- Google Font: Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<script>

tailwind.config = {

theme: {

extend: {

colors: {

brand: {

dark: '#050b18',

card: '#0a1733',

cyan: '#00f2fe',

blue: '#4facfe',

accent: '#00c6ff',

}

},

fontFamily: {

sans: ['Inter', 'sans-serif'],

},

}

}

}
</script>
<style>

/* Custom Background Grid Pattern */

.bg-grid-pattern {

background-color: #050b18;

background-image: 

linear-gradient(to right, rgba(0, 242, 254, 0.05) 1px, transparent 1px),

linear-gradient(to bottom, rgba(0, 242, 254, 0.05) 1px, transparent 1px);

background-size: 30px 30px;

}

/* Glow Effects */

.glow-cyan {

text-shadow: 0 0 20px rgba(0, 242, 254, 0.6);

}

.btn-cyan-glow {

box-shadow: 0 0 25px rgba(0, 242, 254, 0.4);

}

.btn-cyan-glow:hover {

box-shadow: 0 0 35px rgba(0, 242, 254, 0.7);

}

/* Custom Glassmorphism */

.glass-card {

background: rgba(10, 23, 51, 0.75);

backdrop-filter: blur(12px);

border: 1px solid rgba(0, 242, 254, 0.15);

}

/* Smooth Transitions */

* {

transition: all 0.25s ease-in-out;

}
</style>
</head>
<body class="bg-grid-pattern text-slate-100 font-sans min-h-screen flex flex-col justify-between selection:bg-brand-cyan selection:text-black">
<!-- Top Navbar -->
<header class="sticky top-0 z-40 glass-card border-b border-cyan-900/30 px-4 lg:px-8 py-3.5">
<div class="max-w-7xl mx-auto flex items-center justify-between">
<!-- Brand Logo -->
<div class="flex items-center gap-3 cursor-pointer" onclick="window.scrollTo({top:0, behavior:'smooth'})">
<div class="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-cyan to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20">
<div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
<i class="fa-solid font-bold fa-route text-brand-cyan text-xl"></i>
</div>
</div>
<div>
<div class="flex items-center gap-1">
<span class="text-2xl font-extrabold tracking-tight text-white">Offi<span class="text-brand-cyan">Go</span></span>
</div>
<p class="text-[10px] tracking-wider font-semibold text-slate-400 uppercase -mt-1 hidden sm:block">Your Daily Corporate Commute Network</p>
</div>
</div>
<!-- Right Nav Action Buttons -->
<div class="flex items-center gap-3">
<button onclick="openModal('loginModal')" class="px-6 py-2 rounded-full border border-cyan-500/50 text-slate-200 font-medium hover:bg-cyan-500/10 hover:border-brand-cyan text-sm sm:text-base">

Login
</button>
<button onclick="toggleMobileMenu()" class="p-2 text-slate-300 hover:text-brand-cyan text-2xl focus:outline-none md:hidden">
<i class="fa-solid fa-bars" id="menuIcon"></i>
</button>
</div>
</div>
<!-- Mobile Dropdown Navigation -->
<div id="mobileMenu" class="hidden md:hidden pt-4 pb-2 px-2 flex-col gap-3 text-sm">
<a href="#features" class="block py-2 px-3 rounded-lg hover:bg-cyan-500/10 text-slate-300">How It Works</a>
<a href="#calculator" class="block py-2 px-3 rounded-lg hover:bg-cyan-500/10 text-slate-300">Savings Calculator</a>
<a href="#corporate" class="block py-2 px-3 rounded-lg hover:bg-cyan-500/10 text-slate-300">For Enterprises</a>
</div>
</header>
<!-- Hero Section -->
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 flex-1 flex flex-col justify-center">
<div class="text-left max-w-3xl pt-2">
<!-- Tagline Category -->
<span class="inline-block text-xs sm:text-sm font-bold tracking-widest text-brand-cyan uppercase mb-3">

Your Daily Corporate Commute Network
</span>
<!-- Main Headline -->
<h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-4">

Same Office.<br/>

Same Route.<br/>
<span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-cyan-300 to-blue-400 italic glow-cyan">

Better Together.
</span>
</h1>
<!-- Subtitle -->
<p class="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">

Join verified professionals, share or book rides, and make your daily commute easier, safer and more affordable.
</p>
<!-- CTA Buttons -->
<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
<!-- Book a Ride Button -->
<button onclick="openModal('bookModal')" class="flex items-center justify-center gap-3 bg-brand-cyan hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-full text-base sm:text-lg btn-cyan-glow transition-transform active:scale-95">
<i class="fa-solid fa-car text-xl"></i>
<span>Book a Ride</span>
</button>
<!-- Share a Ride Button -->
<button onclick="openModal('shareModal')" class="flex items-center justify-center gap-3 bg-slate-900/80 border-2 border-cyan-500/80 hover:border-brand-cyan hover:bg-cyan-500/10 text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg transition-transform active:scale-95">
<i class="fa-solid fa-users text-xl text-brand-cyan"></i>
<span>Share a Ride</span>
</button>
</div>
<!-- Add to Home Screen Link -->
<div class="inline-flex items-center gap-2 text-brand-cyan hover:text-cyan-300 text-sm font-semibold cursor-pointer py-1 px-2 rounded-md transition-colors" onclick="triggerPWAInstall()">
<i class="fa-solid fa-mobile-screen-button text-base"></i>
<span>Add OffiGo to Home Screen</span>
</div>
</div>
<!-- Hero Illustration Banner -->
<div class="mt-12 w-full">
<div class="relative w-full rounded-3xl overflow-hidden glass-card p-2 sm:p-4 shadow-2xl border border-cyan-500/30 group">
<!-- Glowing background behind image -->
<div class="absolute inset-0 bg-gradient-to-t from-cyan-950/80 via-transparent to-transparent z-10 pointer-events-none"></div>
<!-- Banner Image Showcase -->
<div class="relative h-[280px] sm:h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden">
<img 

src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80" 

alt="Corporate Commute City Highway" 

class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"

/>
<!-- Neon Overlay Elements & City Route Graphic Mockup -->
<div class="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-slate-950/80 flex flex-col justify-between p-6 z-20">
<!-- Top Badges -->
<div class="flex justify-between items-start">
<span class="bg-slate-900/90 border border-cyan-500/40 text-brand-cyan text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md">
<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

12,450+ Active Office Rides Live
</span>
<div class="bg-cyan-500/20 backdrop-blur-md p-3 rounded-2xl border border-cyan-400/40 hidden sm:block">
<i class="fa-solid fa-location-dot text-brand-cyan text-2xl animate-bounce"></i>
</div>
</div>
<!-- Bottom Live Route Info Box -->
<div class="bg-slate-950/85 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-cyan-500/30 max-w-md">
<div class="flex items-center justify-between mb-3">
<span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Top Corporate Route</span>
<span class="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2.5 py-1 rounded-md">98% Match Rate</span>
</div>
<div class="flex items-center gap-3 text-sm sm:text-base font-bold text-white mb-2">
<span class="text-brand-cyan">Tech Park Hub</span>
<i class="fa-solid fa-arrow-right-long text-slate-400"></i>
<span class="text-cyan-300">Cyber City South</span>
</div>
<p class="text-xs text-slate-300">Average Savings: <span class="text-brand-cyan font-bold">₹6,500/month</span> per professional</p>
</div>
</div>
</div>
</div>
</div>
<!-- Commute Calculator Section -->
<section id="calculator" class="mt-20">
<div class="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 relative overflow-hidden">
<div class="max-w-3xl mb-8">
<span class="text-xs font-bold text-brand-cyan tracking-widest uppercase">Smart Savings Tool</span>
<h2 class="text-2xl sm:text-4xl font-extrabold text-white mt-1">Calculate Your Monthly Commute Savings</h2>
<p class="text-slate-300 text-sm sm:text-base mt-2">See how much you save by switching from solo rides/cabs to OffiGo rideshare.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
<!-- Input Range 1 -->
<div class="space-y-2">
<label class="text-sm font-semibold text-slate-300 flex justify-between">
<span>Daily Distance (Round Trip)</span>
<span id="distValue" class="text-brand-cyan font-bold">30 km</span>
</label>
<input type="range" id="distRange" min="10" max="100" value="30" class="w-full accent-brand-cyan cursor-pointer" oninput="calculateSavings()"/>
</div>
<!-- Input Range 2 -->
<div class="space-y-2">
<label class="text-sm font-semibold text-slate-300 flex justify-between">
<span>Current Daily Cab/Fuel Spend</span>
<span id="costValue" class="text-brand-cyan font-bold">₹450</span>
</label>
<input type="range" id="costRange" min="100" max="1500" step="50" value="450" class="w-full accent-brand-cyan cursor-pointer" oninput="calculateSavings()"/>
</div>
<!-- Result Display -->
<div class="bg-slate-950/90 p-5 rounded-2xl border border-cyan-500/40 text-center md:text-right">
<span class="text-xs text-slate-400 font-medium block uppercase tracking-wider">Estimated Monthly Savings</span>
<span id="monthlySavings" class="text-3xl sm:text-4xl font-black text-brand-cyan glow-cyan block mt-1">₹7,200</span>
<span class="text-[11px] text-slate-400">Based on 22 corporate working days</span>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="glass-card border-t border-cyan-900/30 py-8 px-4 sm:px-8 mt-12">
<div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
<div class="flex items-center gap-2">
<span class="font-bold text-white">OffiGo</span> © 2026 Corporate Commute Network. All rights reserved.
</div>
<div class="flex gap-6">
<a href="#" class="hover:text-brand-cyan">Privacy Policy</a>
<a href="#" class="hover:text-brand-cyan">Terms of Service</a>
<a href="#" class="hover:text-brand-cyan">Safety Verification</a>
</div>
</div>
</footer>
<!-- Book a Ride Modal -->
<div id="bookModal" class="fixed inset-0 bg-slate-950/80 backdrop-blur-md hidden items-center justify-center p-4 z-50">
<div class="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-cyan-500/40 relative animate-in fade-in zoom-in duration-200">
<button onclick="closeModal('bookModal')" class="absolute top-5 right-5 text-slate-400 hover:text-white text-xl">
<i class="fa-solid fa-xmark"></i>
</button>
<div class="flex items-center gap-3 mb-6">
<div class="p-3 bg-cyan-500/20 rounded-xl text-brand-cyan">
<i class="fa-solid fa-car text-xl"></i>
</div>
<div>
<h3 class="text-xl font-bold text-white">Book a Corporate Ride</h3>
<p class="text-xs text-slate-400">Find verified colleague rides on your route</p>
</div>
</div>
<form onsubmit="handleFormSubmit(event, 'Ride booked successfully! Searching available pools...')" class="space-y-4">
<div>
<label class="block text-xs font-semibold text-slate-300 mb-1">Pickup Location</label>
<input type="text" placeholder="e.g. Sector 62, Noida / Powai, Mumbai" class="w-full bg-slate-900 border border-slate-700 focus:border-brand-cyan rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" required />
</div>
<div>
<label class="block text-xs font-semibold text-slate-300 mb-1">Office Destination</label>
<input type="text" placeholder="e.g. Cyber City Phase 2 / BKC Tech Hub" class="w-full bg-slate-900 border border-slate-700 focus:border-brand-cyan rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" required />
</div>
<div class="grid grid-cols-2 gap-3">
<div>
<label class="block text-xs font-semibold text-slate-300 mb-1">Commute Time</label>
<input type="time" value="08:30" class="w-full bg-slate-900 border border-slate-700 focus:border-brand-cyan rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" required />
</div>
<div>
<label class="block text-xs font-semibold text-slate-300 mb-1">Vehicle Preference</label>
<select class="w-full bg-slate-900 border border-slate-700 focus:border-brand-cyan rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none">
<option>Car Pool (AC)</option>
<option>Bike Pool</option>
<option>Any Available</option>
</select>
</div>
</div>
<button type="submit" class="w-full mt-4 bg-brand-cyan hover:bg-cyan-400 text-slate-950 font-bold py-3.5 rounded-xl btn-cyan-glow text-sm">

Find Matching Rides
</button>
</form>
</div>
</div>
<!-- Share a Ride Modal -->
<div id="shareModal" class="fixed inset-0 bg-slate-950/80 backdrop-blur-md hidden items-center justify-center p-4 z-50">
<div class="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-cyan-500/40 relative">
<button onclick="closeModal('shareModal')" class="absolute top-5 right-5 text-slate-400 hover:text-white text-xl">
<i class="fa-solid fa-xmark"></i>
</button>
<div class="flex items-center gap-3 mb-6">
<div class="p-3 bg-cyan-500/20 rounded-xl text-brand-cyan">
<i class="fa-solid fa-users text-xl"></i>
</div>
<div>
<h3 class="text-xl font-bold text-white">Offer / Share a Ride</h3>
<p class="text-xs text-slate-400">Publish your daily route and split fuel costs</p>
</div>
</div>
<form onsubmit="handleFormSubmit(event, 'Your route has been published! Colleagues will request seats soon.')" class="space-y-4">
<div>
<label class="block text-xs font-semibold text-slate-300 mb-1">Start Location</label>
<input type="text" placeholder="e.g. Indiranagar, Bengaluru" class="w-full bg-slate-900 border border-slate-700 focus:border-brand-cyan rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" required />
</div>
<div>
<label class="block text-xs font-semibold text-slate-300 mb-1">Workplace Address</label>
<input type="text" placeholder="e.g. Manyata Tech Park" class="w-full bg-slate-900 border border-slate-700 focus:border-brand-cyan rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" required />
</div>
<div class="grid grid-cols-2 gap-3">
<div>
<label class="block text-xs font-semibold text-slate-300 mb-1">Available Seats</label>
<input type="number" min="1" max="6" value="3" class="w-full bg-slate-900 border border-slate-700 focus:border-brand-cyan rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" required />
</div>
<div>
<label class="block text-xs font-semibold text-slate-300 mb-1">Price / Seat (₹)</label>
<input type="number" step="10" value="80" class="w-full bg-slate-900 border border-slate-700 focus:border-brand-cyan rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" required />
</div>
</div>
<button type="submit" class="w-full mt-4 bg-brand-cyan hover:bg-cyan-400 text-slate-950 font-bold py-3.5 rounded-xl btn-cyan-glow text-sm">

Publish Route Now
</button>
</form>
</div>
</div>
<!-- Login Modal -->
<div id="loginModal" class="fixed inset-0 bg-slate-950/80 backdrop-blur-md hidden items-center justify-center p-4 z-50">
<div class="glass-card max-w-sm w-full rounded-3xl p-6 sm:p-8 border border-cyan-500/40 relative">
<button onclick="closeModal('loginModal')" class="absolute top-5 right-5 text-slate-400 hover:text-white text-xl">
<i class="fa-solid fa-xmark"></i>
</button>
<div class="text-center mb-6">
<h3 class="text-2xl font-bold text-white">Welcome Back</h3>
<p class="text-xs text-slate-400 mt-1">Log in with your corporate email</p>
</div>
<form onsubmit="handleFormSubmit(event, 'Corporate Login Successful!')" class="space-y-4">
<div>
<label class="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
<input type="email" placeholder="name@company.com" class="w-full bg-slate-900 border border-slate-700 focus:border-brand-cyan rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" required />
</div>
<div>
<label class="block text-xs font-semibold text-slate-300 mb-1">Password</label>
<input type="password" placeholder="••••••••" class="w-full bg-slate-900 border border-slate-700 focus:border-brand-cyan rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" required />
</div>
<button type="submit" class="w-full bg-brand-cyan hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl btn-cyan-glow text-sm">

Sign In
</button>
</form>
</div>
</div>
<!-- Toast Notification Message Box -->
<div id="toast" class="fixed bottom-6 right-6 z-50 bg-slate-900 border border-brand-cyan text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 hidden animate-bounce">
<i class="fa-solid fa-circle-check text-brand-cyan text-xl"></i>
<span id="toastMsg" class="text-sm font-semibold">Action completed successfully!</span>
</div>
<script>

// Modal Helpers

function openModal(id) {

document.getElementById(id).classList.remove('hidden');

document.getElementById(id).classList.add('flex');

}

function closeModal(id) {

document.getElementById(id).classList.add('hidden');

document.getElementById(id).classList.remove('flex');

}

// Toggle Mobile Menu

function toggleMobileMenu() {

const menu = document.getElementById('mobileMenu');

menu.classList.toggle('hidden');

menu.classList.toggle('flex');

}

// Toast Notification System (replaces alert)

function showToast(message) {

const toast = document.getElementById('toast');

const toastMsg = document.getElementById('toastMsg');

toastMsg.innerText = message;

toast.classList.remove('hidden');

setTimeout(() => {

toast.classList.add('hidden');

}, 4000);

}

function handleFormSubmit(e, message) {

e.preventDefault();

const openModals = ['bookModal', 'shareModal', 'loginModal'];

openModals.forEach(id => closeModal(id));

showToast(message);

}

function triggerPWAInstall() {

showToast("PWA Shortcut Added! OffiGo is now accessible from your Home Screen.");

}

// Commute Calculator Logic

function calculateSavings() {

const dist = parseInt(document.getElementById('distRange').value);

const dailyCost = parseInt(document.getElementById('costRange').value);

document.getElementById('distValue').innerText = dist + ' km';

document.getElementById('costValue').innerText = '₹' + dailyCost;

// OffiGo reduces costs by ~65%

const monthlyTotalBefore = dailyCost * 22;

const monthlySavings = Math.round(monthlyTotalBefore * 0.65);

document.getElementById('monthlySavings').innerText = '₹' + monthlySavings.toLocaleString('en-IN');

}
</script>
</body>
</html> 
 
