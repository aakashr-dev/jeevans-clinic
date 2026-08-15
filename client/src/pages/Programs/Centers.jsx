import { Link } from "react-router-dom";

/* =========================================================
   CENTRE DATA
========================================================= */

const CENTRES = [
  {
    number: "01",
    name: "Bewell Centre",
    title: "Bewell Centre for Orthopedics, Sports Medicine & Spine",
    location: "Chennai, Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
    services: ["Orthopedics", "Sports Medicine", "Spine Care"],
  },
  {
    number: "02",
    name: "Orthopedic & Sports Medicine Centre",
    title: "Orthopedic & Sports Medicine Centre",
    location: "Chennai, Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=85",
    services: ["Joint Care", "Sports Injuries", "Rehabilitation"],
  },
];

/* =========================================================
   WHY CENTRES
========================================================= */

const WHY_CENTRES = [
  {
    number: "01",
    title: "Specialist Expertise",
    text:
      "Access focused orthopedic, sports medicine and spine care from experienced specialists.",
  },
  {
    number: "02",
    title: "Modern Facilities",
    text:
      "Thoughtfully designed clinical environments supporting accurate assessment and treatment.",
  },
  {
    number: "03",
    title: "Personalised Care",
    text:
      "Every treatment plan is shaped around your condition, lifestyle and recovery goals.",
  },
  {
    number: "04",
    title: "Continuity of Recovery",
    text:
      "From consultation to rehabilitation, your care journey remains focused on better movement.",
  },
];

/* =========================================================
   CENTERS PAGE
========================================================= */

function Centers() {
  return (
    <main className="bg-white text-[#10302E]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[690px] overflow-hidden bg-[#073B38]">

        {/* IMAGE */}

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2200&q=85"
            alt="Modern orthopedic medical centre"
            className="h-full w-full object-cover"
          />

          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(90deg,#073B38_0%,rgba(7,59,56,0.96)_28%,rgba(7,59,56,0.72)_50%,rgba(7,59,56,0.28)_78%,rgba(7,59,56,0.12)_100%)]
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#073B38]/60 via-transparent to-black/10" />

        </div>

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[690px] max-w-[1450px] items-center px-6 md:px-10 lg:px-12">

          <div className="max-w-[650px] pt-16">

            {/* EYEBROW */}

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-[#D49E47]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D49E47]">
                Our Centres
              </p>

            </div>

            {/* HEADING */}

            <h1
              className="
                mt-7
                font-display
                text-[70px]
                leading-[0.86]
                tracking-[-0.045em]
                text-white
                sm:text-[82px]
                md:text-[100px]
                lg:text-[112px]
              "
            >
              Care,

              <br />

              closer

              <br />

              to{" "}

              <span className="text-[#D49E47]">
                you.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-8 max-w-[530px] text-sm leading-7 text-white/75 md:text-[15px] md:leading-8">
              Specialized orthopedic, sports medicine and spine care
              delivered through thoughtfully designed centres focused
              on your comfort, recovery and movement.
            </p>

            {/* BUTTONS */}

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#centres"
                className="
                  rounded-md
                  bg-[#D49E47]
                  px-7
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-[#10302E]
                "
              >
                Explore Our Centres
              </a>

              <Link
                to="/appointment"
                className="
                  rounded-md
                  border
                  border-white/40
                  bg-white/5
                  px-7
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-[#10302E]
                "
              >
                Book Appointment
              </Link>

            </div>

          </div>

        </div>

        {/* BOTTOM LABEL */}

        <div className="absolute bottom-8 left-6 z-20 flex items-center gap-3 md:left-10 lg:left-12">

          <span className="text-[10px] font-bold text-white">
            01
          </span>

          <span className="h-px w-12 bg-[#D49E47]" />

          <span className="text-[10px] text-white/40">
            OUR LOCATIONS
          </span>

        </div>

      </section>

      {/* =====================================================
          CENTRES
      ===================================================== */}

      <section
        id="centres"
        className="bg-white px-6 py-24 md:px-10 md:py-28 lg:px-12"
      >

        <div className="mx-auto max-w-[1250px]">

          {/* HEADING */}

          <div className="text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D49E47]">
              Our Locations
            </p>

            <h2
              className="
                mt-5
                font-display
                text-[48px]
                leading-[0.98]
                tracking-[-0.035em]
                text-[#10302E]
                md:text-[64px]
              "
            >
              Expert care,

              <br />

              <span className="text-[#D49E47]">
                where you need it.
              </span>
            </h2>

            <div className="mx-auto mt-6 h-px w-10 bg-[#D49E47]" />

          </div>

          {/* CENTRE CARDS */}

          <div className="mt-16 grid gap-7 md:grid-cols-2">

            {CENTRES.map((centre) => (

              <article
                key={centre.number}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#E8E5DF]
                  bg-white
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_70px_rgba(16,48,46,0.12)]
                "
              >

                {/* IMAGE */}

                <div className="relative h-[300px] overflow-hidden">

                  <img
                    src={centre.image}
                    alt={centre.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  {/* NUMBER */}

                  <div className="absolute left-6 top-6 flex items-center gap-3">

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#10302E]">
                      {centre.number}
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                      Centre
                    </span>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-7 md:p-8">

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D49E47]">
                    {centre.name}
                  </p>

                  <h3
                    className="
                      mt-4
                      max-w-[470px]
                      font-display
                      text-[27px]
                      leading-[1.05]
                      text-[#10302E]
                    "
                  >
                    {centre.title}
                  </h3>

                  {/* LOCATION */}

                  <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-4 w-4"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>

                    {centre.location}

                  </div>

                  {/* SERVICES */}

                  <div className="mt-7 flex flex-wrap gap-2">

                    {centre.services.map((service) => (

                      <span
                        key={service}
                        className="
                          rounded-full
                          border
                          border-[#E6E2D9]
                          px-4
                          py-2
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-[#536765]
                        "
                      >
                        {service}
                      </span>

                    ))}

                  </div>

                  {/* CTA */}

                  <div className="mt-8 border-t border-gray-100 pt-6">

                    <Link
                      to="/appointment"
                      className="
                        inline-flex
                        items-center
                        gap-3
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#10302E]
                        transition
                        hover:text-[#D49E47]
                      "
                    >
                      View Centre

                      <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          VISIT US / LOCATION
      ===================================================== */}

      <section className="bg-[#F6F3EE] px-6 py-24 md:px-10 md:py-28 lg:px-12">

        <div className="mx-auto grid max-w-[1250px] overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(16,48,46,0.08)] lg:grid-cols-[1.15fr_0.85fr]">

          {/* GOOGLE MAP */}
<div className="relative min-h-[450px] overflow-hidden bg-[#E5E3DF]">

  <iframe
    title="Bewell Centre Location"
    src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu&output=embed"
    className="absolute inset-0 h-full w-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

  {/* Small map label */}
  <div className="absolute bottom-6 left-6 z-10 rounded-lg bg-white px-5 py-4 shadow-xl">

    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#D49E47]">
      Main Centre
    </p>

    <p className="mt-1 text-sm font-semibold text-[#10302E]">
      Chennai, Tamil Nadu
    </p>

  </div>

</div>

          {/* DETAILS */}

          <div className="flex flex-col justify-center bg-white p-8 md:p-12">

            <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#D49E47]">
              Visit Us
            </p>

            <h2
              className="
                mt-5
                font-display
                text-[45px]
                leading-[0.98]
                tracking-[-0.035em]
                text-[#10302E]
              "
            >
              Your care

              <br />

              starts here.
            </h2>

            <div className="mt-8">

              <h3 className="font-display text-[21px] text-[#10302E]">
                Bewell Centre for Orthopedics,
                <br />
                Sports Medicine & Spine
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Chennai, Tamil Nadu
              </p>

            </div>

            {/* INFO */}

            <div className="mt-8 space-y-5 border-t border-gray-100 pt-7">

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#D49E47]">
                  Opening Hours
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Monday – Saturday · 9:00 AM – 7:00 PM
                </p>

              </div>

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#D49E47]">
                  Contact
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  +91 XXX XXX XXXX
                </p>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="mt-9 flex flex-wrap gap-3">

              <button
                className="
                  rounded-md
                  bg-[#10302E]
                  px-6
                  py-3.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white
                  transition
                  hover:bg-[#D49E47]
                "
              >
                Get Directions
              </button>

              <button
                className="
                  rounded-md
                  border
                  border-[#D8D8D2]
                  px-6
                  py-3.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#10302E]
                  transition
                  hover:border-[#10302E]
                "
              >
                Call Centre
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY OUR CENTRES
      ===================================================== */}

      <section className="bg-[#073B38] px-6 py-24 md:px-10 md:py-28 lg:px-12">

        <div className="mx-auto max-w-[1250px]">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            {/* LEFT */}

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#D49E47]">
                Why Our Centres
              </p>

              <h2
                className="
                  mt-6
                  font-display
                  text-[48px]
                  leading-[0.96]
                  tracking-[-0.035em]
                  text-white
                  md:text-[62px]
                "
              >
                Care built

                <br />

                around{" "}

                <span className="text-[#D49E47]">
                  people.
                </span>
              </h2>

              <p className="mt-7 max-w-[390px] text-sm leading-7 text-white/50">
                Every part of our centre experience is designed
                to make specialist care more comfortable,
                accessible and personal.
              </p>

            </div>

            {/* FEATURES */}

            <div className="grid gap-0 sm:grid-cols-2">

              {WHY_CENTRES.map((item) => (

                <div
                  key={item.number}
                  className="
                    border-t
                    border-white/10
                    p-7
                    first:border-t
                    sm:nth-[2]:border-l
                    sm:nth-[4]:border-l
                  "
                >

                  <span className="text-[10px] font-bold tracking-[0.15em] text-[#D49E47]">
                    {item.number}
                  </span>

                  <h3 className="mt-4 font-display text-[25px] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-5 text-white/40">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-white px-6 py-24 text-center md:py-32">

        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D49E47]">
          Your Next Step
        </p>

        <h2
          className="
            mx-auto
            mt-6
            max-w-[850px]
            font-display
            text-[50px]
            leading-[0.95]
            tracking-[-0.035em]
            text-[#10302E]
            md:text-[72px]
          "
        >
          Let’s get you

          <br />

          <span className="text-[#D49E47]">
            moving again.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-[530px] text-sm leading-7 text-gray-500">
          Choose a centre and take the first step towards
          personalised orthopedic care.
        </p>

        <Link
          to="/appointment"
          className="
            mt-9
            inline-flex
            rounded-md
            bg-[#10302E]
            px-8
            py-4
            text-[10px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-white
            transition
            hover:bg-[#D49E47]
          "
        >
          Book An Appointment
        </Link>

      </section>

    </main>
  );
}

export default Centers;