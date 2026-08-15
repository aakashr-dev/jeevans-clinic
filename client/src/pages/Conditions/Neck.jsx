import { Link } from "react-router-dom";

/* =========================================================
   NECK CONDITIONS
========================================================= */

const CONDITIONS = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PXAisOfrXAHTd2LaxL29d6O3Ns82pviKxdJfObBvVQ&s=10",
    title: "Neck Pain",
    description:
      "Persistent or recurring neck pain that can affect work, sleep, posture and everyday movement.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwom59pCHo9U14RvZID7Ef1DK5ghaL0R7Blsqu2Kbkw&s=10",
    title: "Cervical Disc Problems",
    description:
      "Care for disc-related conditions that may cause neck pain, stiffness or discomfort.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTX578NqtWYNfIYePhJrwoRx5BcOHWWjls8ibZ9hMxg&s=10",
    title: "Nerve Compression",
    description:
      "Assessment and treatment for compressed nerves that may cause pain, tingling or numbness.",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    title: "Neck Stiffness",
    description:
      "Focused care for restricted neck movement, stiffness and discomfort during daily activities.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVmAQdyYsNVFHCbWHLlTs7_x6AETa_boTJsdmeDsVlQ&s=10",
    title: "Cervical Arthritis",
    description:
      "Treatment focused on age-related changes affecting the cervical spine and surrounding joints.",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    title: "Postural Neck Pain",
    description:
      "Care for neck discomfort associated with prolonged sitting, screen use and posture-related strain.",
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
      "Understanding your symptoms, posture, neck movement and medical history.",
    icon: "clipboard",
  },
  {
    number: "02",
    title: "Advanced Diagnosis",
    text:
      "Clinical assessment and appropriate imaging to understand the underlying neck condition.",
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
      "Focused care supporting mobility, strength and comfortable everyday movement.",
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
      "Detailed evaluation of symptoms, posture, neck movement and functional limitations.",
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
      "A personalized treatment plan based on your neck condition and recovery goals.",
    icon: "care",
  },
  {
    number: "04",
    title: "Recovery",
    text:
      "Guided rehabilitation focused on restoring mobility, strength and confidence.",
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
   NECK PAGE
========================================================= */

function Neck() {
  return (
    <main className="bg-white text-[#173F3D]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[730px] overflow-visible bg-[#0B3A37] pt-[88px]">

        {/* HERO IMAGE */}

        <div className="absolute inset-0 overflow-hidden">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WSfX-igqK6aQ5tnDAZYuhugz-MnzkwzB_iCAj-OvrA&s=10"
            alt="Neck orthopedic care"
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
                  Conditions Treated / 01
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
                Neck

                <br />

                <span className="text-[#D49E47]">
                  Care.
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p className="mt-8 max-w-[500px] text-[15px] leading-7 text-white/75 md:text-base md:leading-8">
                Specialized assessment and treatment for neck pain,
                cervical disc problems, nerve compression, stiffness
                and posture-related conditions.
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
                  href="#neck-overview"
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

              {/* INDICATOR */}

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
            FLOATING FEATURE CARD
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
                  Cervical Spine
                </h3>

                <p className="mt-1 text-[10px] leading-5 text-gray-500">
                  Focused care for the cervical spine, joints and surrounding structures.
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
                  Nerve Health
                </h3>

                <p className="mt-1 text-[10px] leading-5 text-gray-500">
                  Understanding nerve compression, radiating pain and related symptoms.
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
                  Supporting posture, mobility, strength and comfortable everyday movement.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          UNDERSTANDING NECK PAIN
      ===================================================== */}

      <section
        id="neck-overview"
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
                Understanding Neck Pain
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
              Neck pain can affect work, sleep, posture, concentration
              and everyday movement. Understanding the underlying
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
          NECK CONDITIONS
          6 CARDS / ONE ROW
      ===================================================== */}

      <section className="bg-white px-6 py-24 md:px-10 md:py-28 lg:px-12">

        <div className="mx-auto max-w-[1400px]">

          {/* HEADING */}

          <div className="text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D49E47]">
              Common Neck Conditions
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

                  <p className="mt-7 text-[10px] font-bold tracking-[0.15em] text-[#D49E47]">
                    {step.number}
                  </p>

                  <h3 className="mt-2 font-display text-[22px] text-white">
                    {step.title}
                  </h3>

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
          If neck pain is affecting your everyday life, a
          consultation can help you understand the next
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

export default Neck;