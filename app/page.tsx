
import Link from 'next/link';

export default function Home() {

  return (
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OffiGo - Corporate Car & Bike Pooling</title>
<!-- Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com"></script>
<script>

        tailwind.config = {

            darkMode: 'class',

            theme: {

                extend: {

                    colors: {

                        brand: {

                            navy: '#0b132b',

                            dark: '#050b18',

                            card: '#121c38',

                            gold: '#fbbf24',

                            green: '#10b981',

                            emerald: '#059669',

                            accent: '#34d399'

                        }

                    },

                    fontFamily: {

                        sans: ['Inter', 'sans-serif'],

                    }

                }

            }

        }
</script>
<!-- Google Fonts Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<!-- FontAwesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- PWA Manifest Link Placeholder -->
<link rel="manifest" href="data:application/manifest+json,{

        'name': 'OffiGo - Corporate Pooling',

        'short_name': 'OffiGo',

        'start_url': '/',

        'display': 'standalone',

        'background_color': '#050b18',

        'theme_color': '#10b981',

        'icons': [{

            'src': 'https://placehold.co/192x192/10b981/ffffff?text=OG',

            'sizes': '192x192',

            'type': 'image/png'

        }]

    }">
<style>

        body { font-family: 'Inter', sans-serif; background-color: #050b18; color: #f3f4f6; }

        .glass-card { background: rgba(18, 28, 56, 0.75); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); }

        .glow-btn { box-shadow: 0 0 25px rgba(16, 185, 129, 0.35); }

        .gold-glow { box-shadow: 0 0 20px rgba(251, 191, 36, 0.25); }
</style>
</head>
<body class="min-h-screen flex flex-col justify-between selection:bg-brand-green selection:text-white">
<header class="w-full sticky top-0 z-50 glass-card border-b border-white/5 px-4 py-3 sm:px-8">
<div class="max-w-7xl mx-auto flex items-center justify-between">
<!-- Typography Logo Component -->
<div class="flex items-center space-x-2 cursor-pointer" onclick="window.scrollTo({top:0, behavior:'smooth'})">
<span class="text-2xl font-extrabold tracking-tight text-white">Offi<span class="text-brand-green relative inline-block">Go<span class="absolute -right-5 -top-1 text-xs text-brand-gold animate-bounce"><i class="fa-solid fa-car-side"></i></span></span></span>
</div>
<!-- Header Actions -->
<div class="flex items-center space-x-3">
<button onclick="openPwaModal()" class="hidden sm:flex items-center space-x-2 bg-white/5 hover:bg-white/10 text-xs font-semibold px-3 py-2 rounded-xl border border-white/10 transition">
<i class="fa-solid fa-mobile-screen-button text-brand-green"></i>
<span>Install App</span>
</button>
<div class="bg-brand-emerald/20 text-brand-accent text-xs font-medium px-3 py-1.5 rounded-full border border-brand-emerald/30 flex items-center space-x-1.5">
<span class="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
<span>Verified Corporate</span>
</div>
</div>
</div>
</header>
<main class="flex-1 max-w-lg w-full mx-auto px-4 py-6 flex flex-col space-y-6">
<!-- Hero Header -->
<div class="text-center space-y-2">
<div class="inline-flex items-center space-x-2 bg-brand-gold/10 text-brand-gold text-xs font-semibold px-3 py-1 rounded-full border border-brand-gold/20 gold-glow">
<i class="fa-solid fa-shield-halved"></i>
<span>Corporate Commuters Only • Secure Ride Pooling</span>
</div>
<h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">

                Share Rides, <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-accent to-brand-gold">Cut Carbon & Costs</span>
</h1>
<p class="text-sm text-gray-400">

                The ultimate intra-city car and bike pooling ecosystem built specifically for verified corporate professionals in India.
</p>
</div>
<!-- Mode Selector (Find a Ride vs Offer a Ride) -->
<div class="glass-card p-1.5 rounded-2xl flex space-x-1 shadow-xl">
<button id="tabFind" onclick="switchTab('find')" class="flex-1 py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center space-x-2 bg-brand-green text-white glow-btn">
<i class="fa-solid fa-magnifying-glass-location"></i>
<span>Find a Ride</span>
</button>
<button id="tabOffer" onclick="switchTab('offer')" class="flex-1 py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center space-x-2 text-gray-400 hover:text-white">
<i class="fa-solid fa-car-rear"></i>
<span>Offer a Ride</span>
</button>
</div>
<!-- Vehicle Type Selector Tabs (Car vs Bike) -->
<div class="flex space-x-3">
<button onclick="selectVehicle('car')" id="btnCar" class="flex-1 py-2.5 px-4 rounded-xl font-medium text-xs border border-brand-green bg-brand-green/10 text-brand-accent flex items-center justify-center space-x-2 transition">
<i class="fa-solid fa-car text-sm"></i>
<span>Car Pooling (AC)</span>
</button>
<button onclick="selectVehicle('bike')" id="btnBike" class="flex-1 py-2.5 px-4 rounded-xl font-medium text-xs border border-white/10 bg-white/5 text-gray-400 flex items-center justify-center space-x-2 transition hover:text-white">
<i class="fa-solid fa-motorcycle text-sm"></i>
<span>Bike Pooling (Fast)</span>
</button>
</div>
<div id="formCard" class="glass-card p-5 rounded-3xl space-y-4 shadow-2xl relative overflow-hidden">
<div class="absolute -right-10 -bottom-10 opacity-5 text-brand-green pointer-events-none">
<i class="fa-solid fa-route text-9xl"></i>
</div>
<!-- From Location -->
<div class="space-y-1">
<label class="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
<i class="fa-solid fa-location-dot text-brand-green"></i>
<span>Pickup Location</span>
</label>
<input type="text" id="pickupInput" placeholder="e.g. Hinjewadi Phase 1, Pune" class="w-full bg-brand-dark/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-green transition">
</div>
<!-- To Destination -->
<div class="space-y-1">
<label class="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
<i class="fa-solid fa-flag-checkered text-brand-gold"></i>
<span>Drop Office / Tech Park</span>
</label>
<input type="text" id="dropInput" placeholder="e.g. Magarpatta Cyber City" class="w-full bg-brand-dark/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-green transition">
</div>
<!-- Date & Time Row -->
<div class="grid grid-cols-2 gap-3">
<div class="space-y-1">
<label class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</label>
<input type="date" id="dateInput" class="w-full bg-brand-dark/80 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-green transition">
</div>
<div class="space-y-1">
<label class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Office Shift Time</label>
<select class="w-full bg-brand-dark/80 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-green transition">
<option>08:30 AM (Morning)</option>
<option selected>09:30 AM (Standard)</option>
<option>10:30 AM (Flexible)</option>
<option>06:30 PM (Evening Shift)</option>
</select>
</div>
</div>
<!-- Action Button -->
<button onclick="handleAction()" id="actionBtn" class="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-green to-brand-emerald text-white shadow-lg glow-btn hover:opacity-95 transition transform active:scale-95 flex items-center justify-center space-x-2">
<i class="fa-solid fa-bolt text-brand-gold"></i>
<span id="actionBtnText">Find Verified Rides Now</span>
</button>
</div>
<div class="grid grid-cols-3 gap-3 pt-2">
<div class="glass-card p-3 rounded-2xl text-center space-y-1">
<div class="text-brand-green font-bold text-base"><i class="fa-solid fa-shield-check"></i> 100%</div>
<div class="text-[11px] text-gray-400 font-medium">Corporate Verified</div>
</div>
<div class="glass-card p-3 rounded-2xl text-center space-y-1">
<div class="text-brand-gold font-bold text-base"><i class="fa-solid fa-indian-rupee-sign"></i> ₹0</div>
<div class="text-[11px] text-gray-400 font-medium">Platform Commission</div>
</div>
<div class="glass-card p-3 rounded-2xl text-center space-y-1">
<div class="text-brand-accent font-bold text-base"><i class="fa-solid fa-brain"></i> Smart</div>
<div class="text-[11px] text-gray-400 font-medium">AI Route Matching</div>
</div>
</div>
<!-- Results Preview Card (Hidden by default) -->
<div id="resultsCard" class="hidden glass-card p-4 rounded-3xl space-y-3 animate-fade-in border border-brand-green/30">
<div class="flex items-center justify-between border-b border-white/5 pb-2">
<div class="text-xs font-bold text-brand-green uppercase tracking-wide flex items-center space-x-1.5">
<i class="fa-solid fa-circle-check"></i>
<span id="resultTitle">Matched Commuters Found</span>
</div>
<button onclick="closeResults()" class="text-xs text-gray-400 hover:text-white"><i class="fa-solid fa-xmark"></i></button>
</div>
<div id="matchesList" class="space-y-2">
<!-- Dynamically populated via JS -->
</div>
</div>
</main>
<!-- PWA Install Modal -->
<div id="pwaModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-4">
<div class="glass-card max-w-sm w-full p-6 rounded-3xl space-y-4 border border-brand-green/40 shadow-2xl relative">
<div class="flex justify-between items-center">
<div class="flex items-center space-x-2">
<div class="w-10 h-10 rounded-2xl bg-brand-green/20 flex items-center justify-center text-brand-green font-bold text-xl">
<i class="fa-solid fa-car-side"></i>
</div>
<div>
<h3 class="font-bold text-white">Install OffiGo App</h3>
<p class="text-xs text-gray-400">Add to Home Screen for best experience</p>
</div>
</div>
<button onclick="closePwaModal()" class="text-gray-400 hover:text-white"><i class="fa-solid fa-xmark text-lg"></i></button>
</div>
<div class="bg-brand-dark/60 p-3 rounded-xl text-xs space-y-2 text-gray-300">
<p class="font-semibold text-brand-gold">📱 How to install on mobile:</p>
<p>• <strong>iPhone (Safari):</strong> Tap the <i class="fa-solid fa-arrow-up-from-bracket"></i> Share button, then select <strong>"Add to Home Screen"</strong>.</p>
<p>• <strong>Android (Chrome):</strong> Tap the menu <i class="fa-solid fa-ellipsis-vertical"></i> and select <strong>"Install App"</strong> or <strong>"Add to Home screen"</strong>.</p>
</div>
<button onclick="closePwaModal()" class="w-full py-2.5 rounded-xl font-semibold text-xs bg-brand-green text-white hover:opacity-95 transition">Got It, Thanks!</button>
</div>
</div>
<!-- Footer -->
<footer class="w-full text-center py-4 text-xs text-gray-500 border-t border-white/5 space-y-1">
<p>OffiGo • Secure Intra-City Corporate Mobility Platform</p>
<p class="text-[10px] text-gray-600">Connected to GitHub & Verified for Vercel Deployment</p>
</footer>
<script>

        let currentMode = 'find';

        let currentVehicle = 'car';

        function switchTab(mode) {

            currentMode = mode;

            const tabFind = document.getElementById('tabFind');

            const tabOffer = document.getElementById('tabOffer');

            const actionBtnText = document.getElementById('actionBtnText');

            if (mode === 'find') {

                tabFind.className = "flex-1 py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center space-x-2 bg-brand-green text-white glow-btn";

                tabOffer.className = "flex-1 py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center space-x-2 text-gray-400 hover:text-white";

                actionBtnText.innerText = "Find Verified Rides Now";

            } else {

                tabOffer.className = "flex-1 py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center space-x-2 bg-brand-gold text-brand-navy font-bold gold-glow";

                tabFind.className = "flex-1 py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center space-x-2 text-gray-400 hover:text-white";

                actionBtnText.innerText = "Publish Your Ride & Save";

            }

        }

        function selectVehicle(type) {

            currentVehicle = type;

            const btnCar = document.getElementById('btnCar');

            const btnBike = document.getElementById('btnBike');

            if (type === 'car') {

                btnCar.className = "flex-1 py-2.5 px-4 rounded-xl font-medium text-xs border border-brand-green bg-brand-green/10 text-brand-accent flex items-center justify-center space-x-2 transition";

                btnBike.className = "flex-1 py-2.5 px-4 rounded-xl font-medium text-xs border border-white/10 bg-white/5 text-gray-400 flex items-center justify-center space-x-2 transition hover:text-white";

            } else {

                btnBike.className = "flex-1 py-2.5 px-4 rounded-xl font-medium text-xs border border-brand-gold bg-brand-gold/10 text-brand-gold flex items-center justify-center space-x-2 transition";

                btnCar.className = "flex-1 py-2.5 px-4 rounded-xl font-medium text-xs border border-white/10 bg-white/5 text-gray-400 flex items-center justify-center space-x-2 transition hover:text-white";

            }

        }

        function handleAction() {

            const pickup = document.getElementById('pickupInput').value || "Hinjewadi Phase 1";

            const drop = document.getElementById('dropInput').value || "Magarpatta City";

            const resultsCard = document.getElementById('resultsCard');

            const matchesList = document.getElementById('matchesList');

            const resultTitle = document.getElementById('resultTitle');

            resultsCard.classList.remove('hidden');

            resultTitle.innerText = currentMode === 'find' ? `3 Verified ${currentVehicle.toUpperCase()} Pools Available` : "Ride Published Successfully!";

            if (currentMode === 'find') {

                matchesList.innerHTML = `
<div class="bg-brand-dark/70 p-3 rounded-xl border border-white/5 flex items-center justify-between">
<div class="flex items-center space-x-3">
<div class="w-9 h-9 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-bold text-xs"><i class="fa-solid fa-user-tie"></i></div>
<div>
<div class="text-xs font-bold text-white">Rahul S. <span class="text-[10px] bg-brand-green/20 text-brand-green px-1.5 py-0.5 rounded ml-1">Verified TechCorp</span></div>
<div class="text-[11px] text-gray-400">${pickup} → ${drop}</div>
</div>
</div>
<button onclick="alertBooked()" class="bg-brand-green text-white text-xs px-3 py-1.5 rounded-lg font-semibold hover:opacity-90">Join</button>
</div>
<div class="bg-brand-dark/70 p-3 rounded-xl border border-white/5 flex items-center justify-between">
<div class="flex items-center space-x-3">
<div class="w-9 h-9 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center font-bold text-xs"><i class="fa-solid fa-user-shield"></i></div>
<div>
<div class="text-xs font-bold text-white">Priya M. <span class="text-[10px] bg-brand-gold/20 text-brand-gold px-1.5 py-0.5 rounded ml-1">FinTech Lead</span></div>
<div class="text-[11px] text-gray-400">${pickup} → ${drop}</div>
</div>
</div>
<button onclick="alertBooked()" class="bg-brand-green text-white text-xs px-3 py-1.5 rounded-lg font-semibold hover:opacity-90">Join</button>
</div>

                `;

            } else {

                matchesList.innerHTML = `
<div class="bg-brand-dark/70 p-3 rounded-xl border border-white/5 text-center space-y-1">
<div class="text-brand-gold font-bold text-xs"><i class="fa-solid fa-circle-check text-sm"></i> Ride Broadcasted to Corporate Network!</div>
<p class="text-[11px] text-gray-400">Commuters matching your route from ${pickup} will be notified instantly.</p>
</div>

                `;

            }

        }

        function closeResults() {

            document.getElementById('resultsCard').classList.add('hidden');

        }

        function alertBooked() {

            alert("Ride request sent successfully to the verified corporate commuter!");

        }

        function openPwaModal() {

            document.getElementById('pwaModal').classList.remove('hidden');

        }

        function closePwaModal() {

            document.getElementById('pwaModal').classList.add('hidden');

        }

        // Set default date to today

        document.getElementById('dateInput').valueAsDate = new Date();
</script>
</body>
</html>
 
 
  );

}
 
