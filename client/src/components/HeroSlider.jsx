import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SLIDES = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOj5-hiWGahN6dUon1EyULmUUuBNlj7DYgErYsuuCaQ&s=10",
    eyebrow: "Specialist Orthopaedic & Physiotherapy Care",
    line1: "MOVE WITH CONFIDENCE.",
    line2: "RECOVER WITH STRENGTH.",
    description:
      "Evidence-based physiotherapy, targeted pain relief, and sports injury recovery tailored around your movement goals.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Sports Medicine & Rehabilitation",
    line1: "GET BACK TO",
    line2: "WHAT MOVES YOU.",
    description:
      "Personalised treatment and recovery support designed for athletes and active individuals seeking lasting performance.",
  },
  {
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2024/09/multiracial-group-practicing-yoga-in-studio-732x549-thumbnail.jpg",
    eyebrow: "Regenerative & Mobility Care",
    line1: "RECOVERY,",
    line2: "REIMAGINED.",
    description:
      "Modern non-invasive therapies and joint care focused on restoring pain-free movement and full life quality.",
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

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % SLIDES.length);
  };

  const previousSlide = () => {
    setActive(
      (prev) => (prev - 1 + SLIDES.length) % SLIDES.length
    );
  };

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[640px] max-h-[920px] w-full overflow-hidden bg-teal">

      {/* BACKGROUND SLIDES */}
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

      {/* BRAND & GRADIENT OVERLAYS (Left-heavy dark green gradient overlay for desktop readability) */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,48,46,0.96)_0%,rgba(13,48,46,0.85)_45%,rgba(13,48,46,0.45)_75%,rgba(13,48,46,0.20)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/45" />

      {/* SLIDER NAVIGATION ARROWS */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-4 md:left-7 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-teal hover:border-white focus:outline-none focus:ring-2 focus:ring-gold"
      >
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 md:right-7 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-teal hover:border-white focus:outline-none focus:ring-2 focus:ring-gold"
      >
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* HERO CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] items-center px-6 md:px-12 lg:px-16">
        <div className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left pt-6 pb-12">

          {/* EYEBROW PILL LABEL */}
          <div
            key={`eyebrow-${active}`}
            className="mb-6 inline-flex animate-[heroText_0.7s_ease-out] items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-white/95">
              {SLIDES[active].eyebrow}
            </span>
          </div>

          {/* TWO-LINE HEADLINE */}
          <h1
            key={`title-${active}`}
            className="animate-[heroText_0.8s_ease-out] font-display uppercase text-white tracking-tight flex flex-col items-center lg:items-start"
          >
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold leading-[1.02] tracking-tight">
              {SLIDES[active].line1}
            </span>
            <span className="block mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal leading-[1.1] text-white/90 tracking-normal">
              {SLIDES[active].line2}
            </span>
          </h1>

          {/* SUPPORTING PARAGRAPH */}
          <p
            key={`description-${active}`}
            className="mt-6 sm:mt-7 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg animate-[heroText_1s_ease-out]"
          >
            {SLIDES[active].description}
          </p>

          {/* CTA BUTTONS ROW */}
          <div className="mt-8 sm:mt-10 flex w-full max-w-xs sm:max-w-none flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <Link
              to="/appointment"
              className="w-full sm:w-auto inline-flex h-12 min-h-[50px] items-center justify-center rounded-md bg-gold px-8 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-teal hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              Book Appointment
            </Link>

            <Link
              to="/conditions/knee"
              className="w-full sm:w-auto inline-flex h-12 min-h-[50px] items-center justify-center rounded-md border border-white/50 bg-white/10 px-8 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-teal hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Explore Treatments
            </Link>
          </div>

          {/* TRUST / SUPPORT ROW BELOW CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Personalised Plans
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Evidence-Based Care
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Recovery Support
            </span>
          </div>

        </div>
      </div>

      {/* SLIDE INDICATOR DOTS */}
      <div className="absolute bottom-6 sm:bottom-8 left-6 md:left-12 lg:left-16 z-20 flex items-center gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group p-1.5 focus:outline-none"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-500 ${
                active === index
                  ? "w-8 bg-gold"
                  : "w-2.5 bg-white/40 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* BOTTOM SPECIALTIES LABELS */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 md:right-12 z-20 hidden items-center gap-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 lg:flex">
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