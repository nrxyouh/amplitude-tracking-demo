import { useEffect, useState } from "react";
import { init, track } from "@amplitude/analytics-browser";
import "./HeroExperiment.css";
import buddha from "../images/buddha.png";
import { LogLevel } from "@amplitude/analytics-browser/lib/esm/types";

export const HeroExperiment = () => {
  useEffect(() => {
    init(import.meta.env.VITE_AMPLITUDE_API_KEY, {
      logLevel: LogLevel.Debug,
    });
  }, []);

  const [variant] = useState<"A" | "B">(() => {
    const stored = localStorage.getItem("hero_variant");

    if (stored === "A" || stored === "B") {
      return stored;
    }

    const newVariant = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem("hero_variant", newVariant);
    return newVariant;
  });

  useEffect(() => {
    track("Hero_Experiment_Viewed", { variant });
  }, [variant]);

  const handleCTA = () => {
    track("Hero_CTA_Click", { variant });
    alert(`Clicked CTA for variant ${variant}`);
  };

  return (
    <div className="hero-container">
      <header className="hero-header">
        <div className="logo">ZenMind</div>
        <nav className="nav-links">
          <a href="#">Courses</a>
          <a href="#">Membership</a>
          <a href="#">About</a>
        </nav>
      </header>

      {variant === "A" ? (
        <main className="hero-main variant-a">
          <div className="hero-text">
            <h1>Find Your Inner Calm</h1>
            <p>
              Discover guided meditation courses designed to help you relax,
              focus, and live mindfully.
            </p>
            <button className="cta-button variant-a" onClick={handleCTA}>
              Start Free Session
            </button>
          </div>
          <img src={buddha} alt="Meditation" className="hero-image" />
        </main>
      ) : (
        <main className="hero-main variant-b">
          <div className="hero-text">
            <h1>Transform Your Mind with Daily Meditation</h1>
            <p>
              Join thousands learning to reduce stress and build inner peace
              through daily guided practice.
            </p>
            <button className="cta-button variant-b" onClick={handleCTA}>
              Join Now
            </button>
          </div>
          <img src={buddha} alt="Meditation" className="hero-image" />
        </main>
      )}

      <footer className="hero-footer">
        © {new Date().getFullYear()} ZenMind
      </footer>
    </div>
  );
};
