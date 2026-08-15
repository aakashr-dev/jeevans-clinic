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

          {/* HEADING */}

          <h1
            key={`title-${active}`}
            className="animate-[heroText_0.8s_ease-out] font-display text-4xl font-normal uppercase leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-6xl"
          >
            {SLIDES[active].title}
          </h1>


          {/* DESCRIPTION */}

          <p
            key={`description-${active}`}
            className="mt-5 max-w-xl animate-[heroText_1s_ease-out] text-sm leading-6 text-white/80 md:text-base"
          >
            {SLIDES[active].description}
          </p>


          {/* CTA */}

          <div className="mt-8 flex flex-wrap gap-4">

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
          SPECIALTIES
      ===================================================== */}

      <div className="absolute bottom-8 right-6 z-20 hidden items-center gap-5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/50 lg:flex">

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