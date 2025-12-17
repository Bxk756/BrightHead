import React from "react";

/**
 * Hero section
 * Image is served from /public/image so it works in:
 * - dev
 * - Vercel
 * - PWA
 * - iOS Safari
 */
export default function Hero() {
  const heroImg = "/image/AI Learning and Innovation Visualization.png";

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Turn scattered AI curiosity into real skills.</h1>

          <p>
            BrightHead gives you structured roadmaps, guided learning kits, and
            hands-on projects to go from beginner to job-ready with AI tools.
          </p>

          <div className="hero-actions">
            <a href="#kits" className="btn-primary">
              Explore Kits
            </a>
            <a href="#roadmap" className="btn-secondary">
              View Roadmap
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={heroImg}
            alt="BrightHead AI learning illustration"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
