import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SLIDES = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOj5-hiWGahN6dUon1EyULmUUuBNlj7DYgErYsuuCaQ&s=10",
    eyebrow: "Advanced Orthopedic Care",
    title: (
      <>
        Move better.
        <br />
        Live stronger.
      </>
    ),
    description:
      "Advanced orthopedic, sports medicine and regenerative care designed around your movement, recovery and goals.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Sports Medicine",
    title: (
      <>
        Get back to
        <br />
        what moves you.
      </>
    ),
    description:
      "Personalised treatment and recovery support for athletes and active individuals.",
  },
  {
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2024/09/multiracial-group-practicing-yoga-in-studio-732x549-thumbnail.jpg",
    eyebrow: "Regenerative Care",
    title: (
      <>
        Recovery,
        <br />
        reimagined.
      </>
    ),
    description:
      "Modern treatment approaches focused on helping you restore movement and return to an active lifestyle.",
  },
];

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

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
    <section className="relative h-[calc(100vh-80px)] min-h-[620px] w-full overflow-hidden bg-teal">

      {/* =====================================================
          BACKGROUND SLIDES
      ===================================================== */}

      {SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            active === index
              ? "opacity-100"
              : "opacity-0"
          }`}
        >

          <img
            src={slide.image}
            alt=""
            className={`h-full w-full object-cover transition-transform duration-[6000ms] ${
              active === index
                ? "scale-105"
                : "scale-100"
            }`}
          />

        </div>
      ))}


      {/* =====================================================
          BRAND OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,48,46,0.96)_0%,rgba(13,48,46,0.82)_30%,rgba(13,48,46,0.42)_65%,rgba(13,48,46,0.20)_100%)]" />


      {/* =====================================================
          TOP / BOTTOM OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 md:px-10 lg:px-12">

        <div className="max-w-3xl pt-10">

          {/* EYEBROW */}

          <div
            key={`eyebrow-${active}`}
            className="mb-7 inline-flex animate-[heroText_0.7s_ease-out] items-center gap-2 rounded-md bg-white px-3 py-2"
          >

            <span className="h-2 w-2 rounded-full bg-gold" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal">
              {SLIDES[active].eyebrow}
            </span>

          </div>


          {/* HEADING */}

          <h1
            key={`title-${active}`}
            className="animate-[heroText_0.8s_ease-out] font-display text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.025em] text-white sm:text-6xl md:text-7xl lg:text-[86px]"
          >
            {SLIDES[active].title}
          </h1>


          {/* DESCRIPTION */}

          <p
            key={`description-${active}`}
            className="mt-7 max-w-xl animate-[heroText_1s_ease-out] text-sm leading-7 text-white/80 md:text-base"
          >
            {SLIDES[active].description}
          </p>


          {/* CTA */}

          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              to="/appointment"
              className="inline-flex items-center rounded-md bg-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-white hover:text-teal"
            >
              Book Appointment
            </Link>

            <Link
              to="/conditions/knee"
              className="inline-flex items-center rounded-md border border-white/50 bg-white/5 px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-teal"
            >
              Explore Treatments
            </Link>

          </div>

        </div>

      </div>


      {/* =====================================================
          PREVIOUS BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/10 text-4xl font-light text-white/80 backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white hover:text-teal md:left-7"
      >
        ‹
      </button>


      {/* =====================================================
          NEXT BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/10 text-4xl font-light text-white/80 backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white hover:text-teal md:right-7"
      >
        ›
      </button>


      {/* =====================================================
          SLIDE INDICATOR
      ===================================================== */}

      <div className="absolute bottom-8 left-6 z-20 flex items-center gap-3 md:left-10 lg:left-12">

        {SLIDES.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group flex items-center gap-2"
          >

            <span
              className={`h-[2px] transition-all duration-500 ${
                active === index
                  ? "w-12 bg-gold"
                  : "w-6 bg-white/40"
              }`}
            />

            <span className="text-[9px] font-bold text-white/60">
              0{index + 1}
            </span>

          </button>
        ))}

      </div>


      {/* =====================================================
          SPECIALTIES
      ===================================================== */}

      <div className="absolute bottom-8 right-6 z-20 hidden items-center gap-5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/50 lg:flex">

        <span>Orthopedics</span>

        <span className="h-1 w-1 rounded-full bg-gold" />

        <span>Sports Medicine</span>

        <span className="h-1 w-1 rounded-full bg-gold" />

        <span>Spine Care</span>

      </div>


      {/* =====================================================
          SLIDE NUMBER
      ===================================================== */}

      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 rotate-90 lg:block">

        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
          0{active + 1} / 03
        </span>

      </div>

    </section>
  );
}

export default HeroSlider;