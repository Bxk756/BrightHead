<img
  src="/assets/brighthead-hero.png"
  alt="BrightHead Hero"
/>

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 mt-20">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold leading-tight">
          Turn scattered AI curiosity into{" "}
          <span className="text-accent">real skills.</span>
        </h1>

        <p className="mt-4 text-gray-300">
          BrightHead gives you structured roadmaps, guided learning kits, and
          hands-on projects to go from beginner → job-ready with AI tools.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="btn btn-primary">Explore Kits</button>
          <button className="btn btn-outline">Join Waitlist</button>
        </div>
      </div>

      <img
        src={heroImg}
        width={550}
        height={420}
        className="rounded-2xl shadow-glow mt-10 md:mt-0"
        alt="BrightHead AI illustration"
      />
    </section>
  );
}
