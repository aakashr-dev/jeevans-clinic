import { Link } from "react-router-dom";

/* =========================================================
   FOOT CONDITIONS
========================================================= */

const CONDITIONS = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJqUpdXWCqcodbnXD4Wi_ElO-dg8IOGVvbvY1q2WQCQ&s=10",
    title: "Foot Pain",
    description:
      "Persistent or recurring foot pain that can affect walking, standing, exercise and everyday activities.",
  },
  {
    image:
      "https://i.pinimg.com/1200x/81/e4/48/81e448dfa06569393d657d77dc470c4a.jpg",
    title: "Plantar Fasciitis",
    description:
      "Focused care for heel and foot pain commonly associated with plantar fascia irritation.",
  },
  {
    image:
      "https://i.pinimg.com/1200x/83/df/fa/83dffaf2b829371bba96a1e0e0b1e81d.jpg",
    title: "Foot Injuries",
    description:
      "Assessment and treatment for injuries affecting the bones, joints, muscles and soft tissues of the foot.",
  },
  {
    image:
      "https://i.pinimg.com/1200x/d7/29/4c/d7294ceb31926d8e4413ee7f9bf4113d.jpg",
    title: "Heel Pain",
    description:
      "Treatment for persistent heel discomfort that can interfere with walking and weight-bearing activities.",
  },
  {
    image:
      "https://i.pinimg.com/1200x/3d/c3/f7/3dc3f7db39982768397c84349c1761f5.jpg",
    title: "Foot Arthritis",
    description:
      "Care for joint changes that may cause foot pain, stiffness and reduced movement.",
  },
  {
    image:
      "https://i.pinimg.com/1200x/90/17/98/90179856abce504c49839da86fc4eeaa.jpg",
    alt: "Sports foot injury treatment",
    title: "Sports Foot Injuries",
    description:
      "Recovery-focused care for foot injuries associated with sports and active lifestyles.",
  },
];

/* =========================================================
   FEATURES
========================================================= */

const FEATURES = [
  {
    number: "01",
    title: "Accurate Evaluation",
    text:
      "Understanding your symptoms, walking pattern, foot structure and medical history.",
    icon: "clipboard",
  },
  {
    number: "02",
    title: "Advanced Diagnosis",
    text:
      "Clinical assessment and appropriate imaging to understand the underlying foot condition.",
    icon: "scan",
  },
  {
    number: "03",
    title: "Personalized Treatment",
    text:
      "A care plan designed around your condition, lifestyle and movement goals.",
    icon: "person",
  },
  {
    number: "04",
    title: "Long Term Recovery",
    text:
      "Focused care supporting strength, balance, mobility and comfortable everyday movement.",
    icon: "shield",
  },
];

/* =========================================================
   APPROACH
========================================================= */

const APPROACH = [
  {
    number: "01",
    title: "Assessment",
    text:
      "Detailed evaluation of symptoms, foot movement, strength, balance and functional limitations.",
    icon: "clipboard",
  },
  {
    number: "02",
    title: "Diagnosis",
    text:
      "Identifying the underlying cause using clinical assessment and appropriate imaging.",
    icon: "search",
  },
  {
    number: "03",
    title: "Treatment",
    text:
      "A personalized treatment plan based on your foot condition and recovery goals.",
    icon: "care",
  },
  {
    number: "04",
    title: "Recovery",
    text:
      "Guided rehabilitation focused on restoring strength, balance and confident movement.",
    icon: "body",
  },
];

/* =========================================================
   ICONS
========================================================= */

function SmallIcon({ type }) {
  if (type === "clipboard") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4.5V3h6v1.5" />
        <path d="M8.5 9h7M8.5 13h7M8.5 17h4" />
      </svg>
    );
  }

  if (type === "scan") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
      </svg>
    );
  }

  if (type === "person") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <circle cx="12" cy="8" r="3" />
        <path d="M5 21c.6-4 3-6 7-6s6.4 2 7 6" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <path d="M12 3 20 6v5c0 5-3.2 8.5-8 10-4.8-1.5-8-5-8-10V6l8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (type === "search") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 5 5" />
      </svg>
    );
  }

  if (type === "care") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <circle cx="12" cy="5.5" r="2.5" />
        <path d="M8 21c.2-4.8 1.3-8 4-8s3.8 3.2 4 8" />
        <path d="M8 10c-2 .5-3.5 2-4 4M16 10c2 2 3.5 2 4 5" />
      </svg>
    );
  }

  if (type === "body") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <circle cx="12" cy="5" r="2.5" />
        <path d="M8.5 21c.3-4.5 1.2-8 3.5-8s3.2 3.5 3.5 8" />
        <path d="M9 10h6M7 14l5 2 5-2" />
      </svg>
    );
  }

  return null;
}

/* =========================================================
   FOOT PAGE
========================================================= */

function Foot() {
  return (
    <main className="bg-white text-[#173F3D]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[730px] overflow-visible bg-[#0B3A37] pt-[88px]">

        {/* HERO IMAGE */}

        <div className="absolute inset-0 overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=2200&q=85"
            alt="Foot orthopedic care"
            className="
              absolute
              right-0
              top-0
              h-full
              w-full
              object-cover
              object-center
              lg:w-[72%]
            "
          />

          {/* LEFT OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(90deg,#0B3A37_0%,#0B3A37_25%,rgba(11,58,55,0.95)_45%,rgba(11,58,55,0.50)_70%,rgba(11,58,55,0.15)_100%)]
            "
          />

          {/* BOTTOM OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A37]/80 via-transparent to-[#0B3A37]/10" />

        </div>


        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[642px] max-w-[1500px] items-center px-6 md:px-10 lg:px-12">

          <div className="w-full">

            <div className="max-w-[570px]">

              {/* EYEBROW */}

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-[#D49E47]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D49E47]">
                  Conditions Treated / 07
                </p>

              </div>


              {/* TITLE */}

              <h1
                className="
                  mt-7
                  font-display
                  text-[74px]
                  leading-[0.82]
                  tracking-[-0.045em]
                  text-white
                  sm:text-[84px]
                  md:text-[100px]
                  lg:text-[112px]
                "
              >
                Foot

                <br />

                <span className="text-[#D49E47]">
                  Care.
                </span>

              </h1>


              {/* DESCRIPTION */}

              <p className="mt-8 max-w-[500px] text-[15px] leading-7 text-white/75 md:text-base md:leading-8">
                Specialized assessment and treatment for foot pain,
                heel pain, plantar fasciitis, injuries and conditions
                affecting comfortable walking and everyday movement.
              </p>


              {/* BUTTONS */}

              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  to="/appointment"
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
                  Book Consultation
                </Link>


                <a
                  href="#foot-overview"
                  className="
                    rounded-md
                    border
                    border-white/40
                    bg-white/[0.03]
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
                  Explore Care
                </a>

              </div>


              {/* SLIDE INDICATOR */}

              <div className="mt-14 flex items-center gap-5">

                <div className="flex items-center gap-3">

                  <span className="text-[10px] font-bold text-white">
                    01
                  </span>

                  <span className="h-px w-10 bg-[#D49E47]" />

                </div>


                <div className="flex items-center gap-3 text-[10px] text-white/35">

                  <span>02</span>

                  <span className="h-px w-10 bg-white/20" />

                </div>


                <div className="flex items-center gap-3 text-[10px] text-white/35">

                  <span>03</span>

                  <span className="h-px w-10 bg-white/20" />

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            FLOATING WHITE FEATURE CARD
        ================================================= */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            z-30
            w-[calc(100%-32px)]
            max-w-[900px]
            -translate-x-1/2
            translate-y-1/2
            rounded-2xl
            bg-white
            p-5
            shadow-[0_25px_80px_rgba(0,0,0,0.18)]
            md:p-6
          "
        >

          <div className="grid md:grid-cols-3">

            {/* CARD 1 */}

            <div
              className="
                flex
                gap-4
                border-b
                border-gray-100
                p-4
                md:border-b-0
                md:border-r
              "
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10302E] text-white">
                <SmallIcon type="body" />
              </div>

              <div>

                <h3 className="font-display text-[18px] text-[#10302E]">
                  Foot Health
                </h3>

                <p className="mt-1 text-[10px] leading-5 text-gray-500">
                  Focused care for the foot, heel, joints and surrounding structures.
                </p>

              </div>

            </div>


            {/* CARD 2 */}

            <div
              className="
                flex
                gap-4
                border-b
                border-gray-100
                p-4
                md:border-b-0
                md:border-r
              "
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D49E47] text-white">
                <SmallIcon type="scan" />
              </div>

              <div>

                <h3 className="font-display text-[18px] text-[#10302E]">
                  Accurate Diagnosis
                </h3>

                <p className="mt-1 text-[10px] leading-5 text-gray-500">
                  Understanding pain, injuries, joint changes and movement-related problems.
                </p>

              </div>

            </div>


            {/* CARD 3 */}

            <div className="flex gap-4 p-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10302E] text-white">
                <SmallIcon type="person" />
              </div>

              <div>

                <h3 className="font-display text-[18px] text-[#10302E]">
                  Better Movement
                </h3>

                <p className="mt-1 text-[10px] leading-5 text-gray-500">
                  Supporting strength, balance, mobility and confident everyday walking.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          UNDERSTANDING FOOT PAIN
      ===================================================== */}

      <section
        id="foot-overview"
        className="
          bg-[#F6F3EE]
          px-6
          pb-24
          pt-40
          md:px-10
          md:pb-28
          lg:px-12
        "
      >

        <div className="mx-auto grid max-w-[1300px] gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-4">

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D49E47]">
                Understanding Foot Pain
              </p>

              <span className="h-px w-8 bg-[#D49E47]" />

            </div>


            <h2
              className="
                mt-6
                max-w-[520px]
                font-display
                text-[48px]
                leading-[0.96]
                tracking-[-0.03em]
                text-[#10302E]
                md:text-[60px]
              "
            >
              Relief begins with

              <br />

              <span className="text-[#D49E47]">
                understanding.
              </span>

            </h2>


            <p className="mt-7 max-w-[480px] text-sm leading-7 text-gray-600 md:text-[15px]">
              Foot pain can affect walking, standing, exercise and
              everyday activities. Understanding the underlying
              problem helps create a care plan that supports
              comfortable movement and recovery.
            </p>

          </div>


          {/* FEATURES */}

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">

            {FEATURES.map((feature) => (

              <div
                key={feature.number}
                className="flex gap-4"
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EEE9DE]
                    text-[#173F3D]
                  "
                >
                  <SmallIcon type={feature.icon} />
                </div>


                <div>

                  <h3 className="text-[14px] font-semibold text-[#173F3D]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-gray-500">
                    {feature.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOT CONDITIONS
          6 CARDS / ONE ROW
      ===================================================== */}

      <section className="bg-white px-6 py-24 md:px-10 md:py-28 lg:px-12">

        <div className="mx-auto max-w-[1400px]">

          {/* HEADING */}

          <div className="text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D49E47]">
              Common Foot Conditions
            </p>


            <h2
              className="
                mt-5
                font-display
                text-[48px]
                leading-tight
                tracking-[-0.035em]
                text-[#10302E]
                md:text-[62px]
              "
            >
              Conditions we{" "}

              <span className="text-[#D49E47]">
                treat
              </span>
            </h2>


            <div className="mx-auto mt-5 h-px w-10 bg-[#D49E47]" />

          </div>


          {/* SIX CARDS */}

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">

            {CONDITIONS.map((condition) => (

              <article
                key={condition.title}
                className="
                  group
                  overflow-hidden
                  rounded-xl
                  border
                  border-gray-100
                  bg-white
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]
                "
              >

                {/* IMAGE */}

                <div className="h-[220px] overflow-hidden bg-gray-100">

                  <img
                    src={condition.image}
                    alt={condition.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                </div>


                {/* CONTENT */}

                <div className="min-h-[200px] p-5">

                  <h3
                    className="
                      font-display
                      text-[20px]
                      leading-[1.08]
                      text-[#10302E]
                    "
                  >
                    {condition.title}
                  </h3>


                  <p className="mt-4 text-[11px] leading-5 text-gray-500">
                    {condition.description}
                  </p>

                </div>

              </article>

            ))}

          </div>


          {/* BUTTON */}

          <div className="mt-14 text-center">

            <Link
              to="/"
              className="
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
              View All Conditions
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR APPROACH
      ===================================================== */}

      <section className="bg-[#073B38] px-6 py-24 md:px-10 md:py-28 lg:px-12">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            {/* LEFT */}

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D49E47]">
                Our Approach
              </p>


              <h2
                className="
                  mt-6
                  max-w-[430px]
                  font-display
                  text-[48px]
                  leading-[0.96]
                  tracking-[-0.03em]
                  text-white
                  md:text-[62px]
                "
              >
                A clear path

                <br />

                to{" "}

                <span className="text-[#D49E47]">
                  recovery.
                </span>
              </h2>


              <p className="mt-7 max-w-[390px] text-sm leading-7 text-white/55">
                We follow a patient-centred approach focused on
                understanding your condition, choosing appropriate
                care and supporting your recovery.
              </p>

            </div>


            {/* STEPS */}

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

              {APPROACH.map((step, index) => (

                <div
                  key={step.number}
                  className="relative"
                >

                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-white
                    "
                  >
                    <SmallIcon type={step.icon} />
                  </div>


                  {/* CONNECTING LINE */}

                  {index !== APPROACH.length - 1 && (
                    <div
                      className="
                        absolute
                        left-[76px]
                        top-8
                        hidden
                        h-px
                        w-[calc(100%-90px)]
                        bg-white/15
                        lg:block
                      "
                    />
                  )}


                  {/* NUMBER */}

                  <p className="mt-7 text-[10px] font-bold tracking-[0.15em] text-[#D49E47]">
                    {step.number}
                  </p>


                  {/* TITLE */}

                  <h3 className="mt-2 font-display text-[22px] text-white">
                    {step.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <p className="mt-3 text-[11px] leading-5 text-white/45">
                    {step.text}
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
          Take The Next Step
        </p>


        <h2
          className="
            mx-auto
            mt-6
            max-w-[800px]
            font-display
            text-[50px]
            leading-[0.95]
            tracking-[-0.035em]
            text-[#10302E]
            md:text-[72px]
          "
        >
          Your movement

          <br />

          matters.
        </h2>


        <p className="mx-auto mt-7 max-w-[530px] text-sm leading-7 text-gray-500">
          If foot pain is affecting your everyday life,
          a consultation can help you understand the next
          appropriate step.
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

export default Foot;