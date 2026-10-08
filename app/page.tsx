"use client";

import { useState } from "react";

type RideType = "car" | "bike";

export default function Home() {

  const [rideType, setRideType] = useState<RideType>("car");

  const [from, setFrom] = useState("");

  const [to, setTo] = useState("");

  const [date, setDate] = useState("");

  const [time, setTime] = useState("");

  const [showLogin, setShowLogin] = useState(false);

  const [activeAction, setActiveAction] = useState<

    "book" | "share" | null
>(null);

  const handleBookRide = () => {

    setActiveAction("book");

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  const handleShareRide = () => {

    setActiveAction("share");

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  const handleSearch = () => {

    if (!from || !to) {

      alert("Please enter your pickup and destination.");

      return;

    }

    alert(

      `Searching rides from ${from} to ${to}${date ? ` on ${date}` : ""}${

        time ? ` at ${time}` : ""

      }...`

    );

  };

  return (
<main className="offigo-page">

      {/* NAVBAR */}
<header className="navbar">
<div className="nav-container">
<a href="#" className="brand">
<div className="brand-mark">
<span>↗</span>
</div>
<div className="brand-text">
<span className="brand-offi">Offi</span>
<span className="brand-go">Go</span>
</div>
</a>
<nav className="desktop-nav">
<a href="#how-it-works">How It Works</a>
<a href="#safety">Safety</a>
<a href="#corporate">Corporate</a>
<a href="#faq">FAQ</a>
</nav>
<button

            className="login-btn"

            onClick={() => setShowLogin(true)}
>

            Log in
</button>
</div>
</header>

      {/* HERO */}
<section className="hero">
<div className="hero-background-glow glow-one" />
<div className="hero-background-glow glow-two" />
<div className="hero-container">
<div className="hero-content">
<div className="small-badge">
<span className="status-dot" />

              Built for daily corporate commute
</div>
<h1>

              Same Office.
<br />

              Same Route.
<br />
<span>Better Together.</span>
</h1>
<p className="hero-description">

              Find verified professionals travelling your route to work.

              Share your commute, reduce travel costs and make your daily

              journey easier.
</p>
<div className="hero-actions">
<button

                className="primary-btn"

                onClick={handleBookRide}
>
<span>🚗</span>

                Book a Ride
</button>
<button

                className="secondary-btn"

                onClick={handleShareRide}
>
<span>🚘</span>

                Share a Ride
</button>
</div>
<div className="trust-row">
<div>
<strong>✓</strong>

                Corporate Verified
</div>
<div>
<strong>✓</strong>

                Car & Bike
</div>
<div>
<strong>✓</strong>

                Daily Commute
</div>
</div>
</div>

          {/* HERO VISUAL */}
<div className="hero-visual">
<div className="city-circle">
<div className="city-building building-one" />
<div className="city-building building-two" />
<div className="city-building building-three" />
<div className="city-building building-four" />
<div className="city-building building-five" />
</div>
<div className="route-ring" />
<div className="road">
<div className="road-line line-one" />
<div className="road-line line-two" />
<div className="road-line line-three" />
</div>
<div className="hero-car">🚗</div>
<div className="hero-bike">🏍️</div>
<div className="route-pin pin-start">
<span>📍</span>

              Wakad
</div>
<div className="route-pin pin-end">
<span>🏢</span>

              Hinjewadi
</div>
</div>
</div>
</section>

      {/* QUICK BOOKING PANEL */}
<section className="booking-wrapper">
<div className="booking-card">
<div className="booking-heading">
<div>
<span className="section-label">

                {activeAction === "share"

                  ? "OFFER A RIDE"

                  : "FIND YOUR COMMUTE"}
</span>
<h2>

                {activeAction === "share"

                  ? "Share your daily route"

                  : "Where are you going?"}
</h2>
</div>
<div className="switch-buttons">
<button

                className={

                  activeAction !== "share"

                    ? "switch active"

                    : "switch"

                }

                onClick={handleBookRide}
>

                🚗 Book
</button>
<button

                className={

                  activeAction === "share"

                    ? "switch active orange"

                    : "switch"

                }

                onClick={handleShareRide}
>

                🚘 Share
</button>
</div>
</div>
<div className="form-grid">
<div className="input-box">
<label>From</label>
<div className="input-with-icon">
<span>📍</span>
<input

                  value={from}

                  onChange={(e) => setFrom(e.target.value)}

                  placeholder="Your locality"

                />
</div>
</div>
<div className="input-box">
<label>To</label>
<div className="input-with-icon">
<span>🏢</span>
<input

                  value={to}

                  onChange={(e) => setTo(e.target.value)}

                  placeholder="Office / Tech Park"

                />
</div>
</div>
<div className="input-box">
<label>Date</label>
<div className="input-with-icon">
<span>📅</span>
<input

                  type="date"

                  value={date}

                  onChange={(e) => setDate(e.target.value)}

                />
</div>
</div>
<div className="input-box">
<label>Time</label>
<div className="input-with-icon">
<span>🕘</span>
<input

                  type="time"

                  value={time}

                  onChange={(e) => setTime(e.target.value)}

                />
</div>
</div>
</div>
<div className="vehicle-section">
<span>Vehicle</span>
<div className="vehicle-options">
<button

                className={

                  rideType === "car"

                    ? "vehicle-option selected"

                    : "vehicle-option"

                }

                onClick={() => setRideType("car")}
>
<span>🚗</span>

                Car
</button>
<button

                className={

                  rideType === "bike"

                    ? "vehicle-option selected"

                    : "vehicle-option"

                }

                onClick={() => setRideType("bike")}
>
<span>🏍️</span>

                Bike
</button>
</div>
</div>
<button

            className="search-btn"

            onClick={handleSearch}
>

            {activeAction === "share"

              ? "Continue to Share Your Ride"

              : "Find Available Rides"}
<span>→</span>
</button>
</div>
</section>

      {/* HOW IT WORKS */}
<section

        className="section"

        id="how-it-works"
>
<div className="section-header">
<span className="section-label">HOW OFFIGO WORKS</span>
<h2>

            Your daily commute,
<br />
<span>simplified.</span>
</h2>
<p>

            No random rides. No complicated process. Just people

            travelling the same route to work.
</p>
</div>
<div className="steps-grid">
<div className="step-card">
<div className="step-number">01</div>
<div className="step-icon">📍</div>
<h3>Choose your route</h3>
<p>

              Enter your locality, office and preferred commute time.
</p>
</div>
<div className="step-card highlighted">
<div className="step-number">02</div>
<div className="step-icon">🎯</div>
<h3>Find a matching commute</h3>
<p>

              Discover people travelling your route around the same

              time.
</p>
</div>
<div className="step-card">
<div className="step-number">03</div>
<div className="step-icon">🤝</div>
<h3>Connect & commute</h3>
<p>

              Book or share a ride with verified corporate

              professionals.
</p>
</div>
</div>
</section>

      {/* FEATURES */}
<section className="feature-section">
<div className="feature-grid">
<div

            className="feature-card"

            id="corporate"
>
<div className="feature-icon">🛡️</div>
<h3>Corporate Verified</h3>
<p>

              Connect with professionals whose workplace identity

              has been verified.
</p>
<span className="feature-link">

              Built for professionals →
</span>
</div>
<div className="feature-card">
<div className="feature-icon">🚗🏍️</div>
<h3>Car & Bike Commute</h3>
<p>

              Choose the commute option that fits your daily route

              and schedule.
</p>
<span className="feature-link">

              Find your route →
</span>
</div>
<div

            className="feature-card"

            id="safety"
>
<div className="feature-icon">✓</div>
<h3>Safe & Reliable</h3>
<p>

              Ratings, verification and reliability signals help

              create a trusted commute network.
</p>
<span className="feature-link">

              Learn about safety →
</span>
</div>
</div>
</section>

      {/* OFFICE COMMUNITY */}
<section className="community-section">
<div className="community-content">
<span className="section-label">YOUR OFFICE COMMUNITY</span>
<h2>

            Your office.
<br />
<span>Your commute community.</span>
</h2>
<p>

            Find professionals travelling to the same office or

            technology park from nearby localities.
</p>
<button

            className="outline-btn"

            onClick={handleBookRide}
>

            Explore Commutes →
</button>
</div>
<div className="community-card">
<div className="community-top">
<div className="company-icon">🏢</div>
<div>
<strong>Capgemini</strong>
<span>Hinjewadi</span>
</div>
<div className="verified-badge">

              ✓ Verified
</div>
</div>
<div className="community-stats">
<div>
<strong>184</strong>
<span>Members</span>
</div>
<div>
<strong>37</strong>
<span>Ride Providers</span>
</div>
<div>
<strong>147</strong>
<span>Commuters</span>
</div>
</div>
<div className="popular-route">
<span>Popular Route</span>
<div>

              📍 Wakad
<span>→</span>

              🏢 Hinjewadi
</div>
</div>
</div>
</section>

      {/* CTA */}
<section className="cta-section">
<div className="cta-glow" />
<span className="section-label">

          COMING SOON
</span>
<h2>

          Your daily commute
<br />

          is about to get <span>better.</span>
</h2>
<p>

          OffiGo is building a trusted corporate commute network,

          starting with Pune.
</p>
<div className="cta-actions">
<button

            className="primary-btn"

            onClick={handleBookRide}
>

            🚗 Book a Ride
</button>
<button

            className="secondary-btn"

            onClick={handleShareRide}
>

            🚘 Share a Ride
</button>
</div>
<div className="cta-note">

          Same Office. Same Route. Better Together.
</div>
</section>

      {/* FOOTER */}
<footer className="footer">
<div className="footer-brand">
<div className="brand">
<div className="brand-mark">
<span>↗</span>
</div>
<div className="brand-text">
<span className="brand-offi">Offi</span>
<span className="brand-go">Go</span>
</div>
</div>
<p>

            Your Daily Corporate Commute Network
</p>
</div>
<div className="footer-links">
<a href="#how-it-works">How It Works</a>
<a href="#safety">Safety</a>
<a href="#corporate">Corporate</a>
<a href="#faq">FAQ</a>
</div>
<div className="footer-bottom">
<span>

            © {new Date().getFullYear()} OffiGo. All rights reserved.
</span>
<span>

            Powered by LearnBuild Hub
</span>
</div>
</footer>

      {/* LOGIN MODAL */}

      {showLogin && (
<div

          className="modal-overlay"

          onClick={() => setShowLogin(false)}
>
<div

            className="login-modal"

            onClick={(e) => e.stopPropagation()}
>
<button

              className="close-btn"

              onClick={() => setShowLogin(false)}
>

              ×
</button>
<div className="modal-logo">
<div className="brand-mark large">
<span>↗</span>
</div>
</div>
<span className="section-label">

              WELCOME BACK
</span>
<h2>Continue with OffiGo</h2>
<p>

              Login to manage your rides and daily commute.
</p>
<label>Mobile Number</label>
<div className="phone-input">
<span>+91</span>
<input

                type="tel"

                placeholder="98765 43210"

                maxLength={10}

              />
</div>
<button className="search-btn">

              Send OTP →
</button>
<div className="login-divider">
<span>or</span>
</div>
<button className="email-login">

              Continue with Email
</button>
<small>

              By continuing, you agree to OffiGo&apos;s Terms and

              Privacy Policy.
</small>
</div>
</div>

      )}
</main>

  );

}
 
