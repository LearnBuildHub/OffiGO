'use client';

import React from 'react';

export default function OffiGoExactPage() {

  return (
<div style={{

      backgroundColor: '#030B17',

      color: '#ffffff',

      minHeight: '100vh',

      fontFamily: 'system-ui, -apple-system, sans-serif',

      overflowX: 'hidden',

      margin: 0,

      padding: 0

    }}>

      {/* TOP NAVBAR */}
<header style={{

        maxWidth: '1200px',

        margin: '0 auto',

        padding: '20px 24px',

        display: 'flex',

        alignItems: 'center',

        justifyContent: 'space-between',

        borderBottom: '1px solid rgba(0, 229, 255, 0.2)'

      }}>

        {/* Logo */}
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
<div style={{

            width: '40px',

            height: '40px',

            background: 'linear-gradient(135deg, #00e5ff, #2979ff)',

            borderRadius: '10px',

            display: 'flex',

            alignItems: 'center',

            justifyContent: 'center',

            fontWeight: 'bold',

            color: '#030B17',

            fontSize: '20px'

          }}>

            📍
</div>
<div>
<div style={{ fontSize: '22px', fontWeight: '900', letterSpacing: '-0.5px' }}>

              Offi<span style={{ color: '#00e5ff' }}>Go</span>
</div>
<div style={{ fontSize: '8px', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.5px' }}>

              Your Daily Corporate Commute Network
</div>
</div>
</div>

        {/* Nav Links */}
<nav style={{ display: 'flex', gap: '28px', fontSize: '14px', color: '#cbd5e1' }}>
<a href="#" style={{ color: '#00e5ff', textDecoration: 'none', fontWeight: '600' }}>Home</a>
<a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>How It Works</a>
<a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Safety</a>
<a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Corporate</a>
<a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a>
<a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
</nav>

        {/* Login Button */}
<div>
<a href="/login" style={{

            padding: '8px 24px',

            borderRadius: '50px',

            border: '1px solid rgba(0, 229, 255, 0.5)',

            color: '#00e5ff',

            textDecoration: 'none',

            fontSize: '14px',

            fontWeight: '600',

            backgroundColor: 'transparent'

          }}>

            Login
</a>
</div>
</header>

      {/* HERO SECTION */}
<main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
<div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>

          {/* Left Text */}
<div style={{ flex: '1', minWidth: '300px' }}>
<h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '900', lineHeight: '1.1', margin: '0 0 20px 0' }}>

              Same Office. <br />

              Same Route. <br />
<span style={{ 

                background: 'linear-gradient(90deg, #00e5ff, #64ffda, #2979ff)', 

                WebkitBackgroundClip: 'text', 

                WebkitTextFillColor: 'transparent',

                fontStyle: 'italic'

              }}>

                Better Together.
</span>
</h1>
<p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: '1.6', maxWidth: '450px', marginBottom: '30px' }}>

              Join verified professionals, share or book rides, and make your daily commute easier, safer and more affordable.
</p>

            {/* CTA Buttons */}
<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
<button style={{

                padding: '14px 28px',

                borderRadius: '50px',

                backgroundColor: '#00e5ff',

                color: '#030B17',

                fontWeight: '800',

                fontSize: '15px',

                border: 'none',

                cursor: 'pointer',

                boxShadow: '0 10px 25px rgba(0, 229, 255, 0.3)'

              }}>

                🚗 Book a Ride
</button>
<button style={{

                padding: '14px 28px',

                borderRadius: '50px',

                backgroundColor: '#08162c',

                color: '#00e5ff',

                fontWeight: '700',

                fontSize: '15px',

                border: '1px solid rgba(0, 229, 255, 0.4)',

                cursor: 'pointer'

              }}>

                👥 Share a Ride
</button>
</div>
</div>

          {/* Right Banner Illustration */}
<div style={{ flex: '1.2', minWidth: '320px', position: 'relative' }}>
<div style={{ textAlign: 'right', marginBottom: '15px' }}>
<p style={{ color: '#00e5ff', fontStyle: 'italic', fontSize: '20px', fontFamily: 'serif', margin: 0, textShadow: '0 2px 10px rgba(0,229,255,0.3)' }}>

                Same People.<br />

                Same Dreams.<br />

                Same Destination.
</p>
</div>
<div style={{

              borderRadius: '24px',

              border: '1px solid rgba(0, 229, 255, 0.3)',

              backgroundColor: '#061326',

              padding: '10px',

              boxShadow: '0 20px 40px rgba(0,0,0,0.6)'

            }}>
<img 

                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1000&q=80" 

                alt="OffiGo Commute"

                style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '16px', display: 'block' }}

              />
</div>
</div>
</div>

        {/* BOTTOM SECTION (How it works & Features) */}
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '50px' }}>

          {/* How OffiGo Works Box */}
<div style={{

            backgroundColor: '#061326',

            border: '1px solid rgba(0, 229, 255, 0.2)',

            borderRadius: '24px',

            padding: '30px',

            boxShadow: '0 10px 30px rgba(0,0,0,0.4)'

          }}>
<h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0. 0 24px 0', color: '#ffffff' }}>How OffiGo Works</h3>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
<div>
<div style={{ width: '32px', height: '32px', borderRadius: '50%O', background: '#020e1d', border: '1px solid #00e5ff', color: '#00e5ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '10px', fontSize: '14px' }}>1</div>
<div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Choose route</div>
<div style={{ fontSize: '11px', color: '#94a3b8' }}>Enter office location and time.</div>
</div>
<div>
<div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#020e1d', border: '1px solid #00e5ff', color: '#00e5ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '10px', fontSize: '14px' }}>2</div>
<div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Find match</div>
<div style={{ fontSize: '11px', color: '#94a3b8' }}>View verified professional rides.</div>
</div>
<div>
<div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#020e1d', border: '1px solid #00e5ff', color: '#00e5ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '10px', fontSize: '14px' }}>3</div>
<div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>Connect</div>
<div style={{ fontSize: '11px', color: '#94a3b8' }}>Book or share and travel together.</div>
</div>
</div>
</div>

          {/* Trust Badges Box */}
<div style={{

            backgroundColor: '#061326',

            border: '1px solid rgba(0, 229, 255, 0.2)',

            borderRadius: '24px',

            padding: '30px',

            display: 'flex',

            alignItems: 'center',

            justifyContent: 'space-around',

            boxShadow: '0 10px 30px rgba(0,0,0,0.4)'

          }}>
<div style={{ textAlign: 'center' }}>
<div style={{ fontSize: '28px', marginBottom: '8px' }}>🛡️</div>
<div style={{ fontSize: '12px', fontWeight: 'bold', color: '#fff' }}>Corporate Verified</div>
</div>
<div style={{ textAlign: 'center' }}>
<div style={{ fontSize: '28px', marginBottom: '8px' }}>🚗</div>
<div style={{ fontSize: '12px', fontWeight: 'bold', color: '#fff' }}>Car & Bike Options</div>
</div>
<div style={{ textAlign: 'center' }}>
<div style={{ fontSize: '28px', marginBottom: '8px' }}>🔒</div>
<div style={{ fontSize: '12px', fontWeight: 'bold', color: '#fff' }}>Safe & Reliable</div>
</div>
</div>
</div>
</main>
</div>

  );

}
 
