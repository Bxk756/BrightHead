import React from "react";

/**
 * Hero section
 * Image is served from /public/image so it works in dev + Vercel prod
 */
export default function Hero() {
  const heroImg = "/image/AI Learning and Innovation Visualization.png";

  return (
    <section className="hero">
      <div className="hero-content">
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

      {/* HERO IMAGE */}
      <div className="hero-visual">
        <img
          src={heroImg}
          alt="AI Learning and Innovation Visualization"
          loading="eager"
        />
      </div>
    </section>
  );
}
