import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SLIDES = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOj5-hiWGahN6dUon1EyULmUUuBNlj7DYgErYsuuCaQ&s=10",
    title: "MOVE BETTER. LIVE STRONGER.",
    description:
      "Advanced orthopedic care and evidence-based physiotherapy tailored to restore your mobility, eliminate pain, and help you move stronger every day.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2200&q=90",
    title: "GET BACK TO WHAT MOVES YOU.",
    description:
      "Targeted sports medicine, injury recovery, and active rehabilitation designed to get you back to peak performance safely.",
  },
  {
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2024/09/multiracial-group-practicing-yoga-in-studio-732x549-thumbnail.jpg",
    title: "RECOVERY, REIMAGINED.",
    description:
      "Modern regenerative therapies and holistic movement care dedicated to long-term joint health, strength, and active wellness.",
  },
];

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[580px] max-h-[820px] w-full overflow-hidden bg-teal">

      {/* =====================================================
          BACKGROUND SLIDES
      ===================================================== */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            active === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className={`h-full w-full object-cover transition-transform duration-[7000ms] ${
              active === index ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* =====================================================
          BRAND & GRADIENT OVERLAYS
      ===================================================== */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,48,46,0.72)_0%,rgba(13,48,46,0.92)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col items-center justify-center px-4 text-center sm:px-6 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">

          {/* MAIN HEADING */}
          <h1
            key={`title-${active}`}
            className="animate-[heroText_0.8s_ease-out] font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal uppercase leading-[1.1] tracking-tight text-white max-w-3xl"
          >
            {SLIDES[active].title}
          </h1>

          {/* CONCISE DESCRIPTION */}
          <p
            key={`description-${active}`}
            className="mt-6 sm:mt-7 max-w-xl text-sm sm:text-base leading-relaxed text-white/85 animate-[heroText_1s_ease-out] text-center"
          >
            {SLIDES[active].description}
          </p>

          {/* CTA BUTTONS GROUP MOVED SLIGHTLY DOWNWARDS */}
          <div className="mt-14 sm:mt-16 md:mt-20 flex w-full max-w-xs sm:max-w-none flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/appointment"
              className="w-full sm:w-auto inline-flex h-12 min-h-[48px] items-center justify-center rounded-md bg-gold px-8 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-teal hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              Book Appointment
            </Link>

            <Link
              to="/conditions/knee"
              className="w-full sm:w-auto inline-flex h-12 min-h-[48px] items-center justify-center rounded-md border border-white/50 bg-white/10 px-8 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-teal hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Explore Treatments
            </Link>
          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM SPECIALTIES LABELS
      ===================================================== */}
      <div className="absolute bottom-6 right-6 md:right-10 z-20 hidden items-center gap-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 lg:flex">
        <span>Orthopedics</span>
        <span className="h-1 w-1 rounded-full bg-gold" />
        <span>Sports Medicine</span>
        <span className="h-1 w-1 rounded-full bg-gold" />
        <span>Spine Care</span>
      </div>

    </section>
  );
}

export default HeroSlider;