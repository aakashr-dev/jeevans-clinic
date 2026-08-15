import { Link } from "react-router-dom";

function Doctor() {
  return (
    <main className="bg-white text-[#103F3A]">

      {/* =====================================================
          SECTION 01 — FULL IMAGE HERO
      ===================================================== */}

      <section className="relative min-h-[720px] overflow-hidden">

        {/* FULL BACKGROUND IMAGE */}

        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=2200&q=90"
          alt="Dr Santhosh Jacob"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,45,42,0.96)_0%,rgba(5,45,42,0.82)_35%,rgba(5,45,42,0.38)_68%,rgba(5,45,42,0.18)_100%)]" />

        {/* BOTTOM OVERLAY */}

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#073B38]/70 to-transparent" />

        {/* CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1400px] items-center px-7 md:px-12 lg:px-16">

          <div className="max-w-[650px]">

            {/* EYEBROW */}

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-[#D49E47]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D49E47]">
                About Dr. Santhosh Jacob
              </span>

            </div>

            {/* TITLE */}

            <h1 className="mt-7 font-display text-[65px] leading-[0.88] tracking-[-0.045em] text-white sm:text-[78px] md:text-[95px] lg:text-[110px]">

              About

              <br />

              <span className="text-[#D49E47]">
                Me.
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className="mt-8 max-w-[540px] text-[14px] leading-7 text-white/75 md:text-[16px] md:leading-8">
              Dedicated to providing thoughtful orthopedic care
              through experience, precision and a patient-centred
              approach to recovery.
            </p>

            {/* BUTTON */}

            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                to="/appointment"
                className="rounded-md bg-[#D49E47] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.17em] text-white transition hover:bg-white hover:text-[#073B38]"
              >
                Book Appointment
              </Link>

              <a
                href="#journey"
                className="rounded-md border border-white/40 bg-white/5 px-7 py-4 text-[9px] font-bold uppercase tracking-[0.17em] text-white backdrop-blur-sm transition hover:bg-white hover:text-[#073B38]"
              >
                Explore My Journey
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM LABEL */}

        <div className="absolute bottom-8 left-7 z-20 flex items-center gap-3 md:left-12 lg:left-16">

          <span className="text-[10px] font-bold text-white">
            01
          </span>

          <span className="h-px w-10 bg-[#D49E47]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
            About The Doctor
          </span>

        </div>

      </section>


      {/* =====================================================
          SECTION 02 — IMAGE LEFT / CONTENT RIGHT
      ===================================================== */}

      <section
        id="journey"
        className="bg-[#F6F3EE] px-6 py-20 md:px-10 md:py-28 lg:px-12"
      >

        <div className="mx-auto grid max-w-[1250px] items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">

          {/* IMAGE */}

          <div className="relative">

            <div className="absolute -bottom-5 -left-5 h-32 w-32 border-l border-b border-[#D49E47]" />

            <div className="relative h-[500px] overflow-hidden rounded-xl md:h-[580px]">

              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=90"
                alt="Orthopedic consultation"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#D49E47]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D49E47]">
                My Journey
              </p>

            </div>

            <h2 className="mt-6 font-display text-[46px] leading-[0.95] tracking-[-0.035em] md:text-[60px]">

              Committed to

              <br />

              excellence in

              <br />

              <span className="text-[#D49E47]">
                orthopedic care.
              </span>

            </h2>

            <div className="mt-7 h-px w-12 bg-[#D49E47]" />

            <p className="mt-7 text-[14px] leading-7 text-gray-600">
              Dr. Santhosh Jacob is dedicated to delivering
              comprehensive orthopedic care with a focus on
              understanding each patient's individual needs.
            </p>

            <p className="mt-5 text-[13px] leading-7 text-gray-500">
              Every consultation begins with listening and
              understanding. The goal is to identify what is
              affecting movement and create a clear path towards
              recovery.
            </p>

            {/* SIGNATURE */}

            <div className="mt-8">

              <p className="font-display text-[24px] text-[#103F3A]">
                Dr. Santhosh Jacob
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#D49E47]">
                Orthopedics · Sports Medicine · Spine
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 03 — CONTENT LEFT / IMAGE RIGHT
      ===================================================== */}

      <section className="bg-white px-6 py-20 md:px-10 md:py-28 lg:px-12">

        <div className="mx-auto grid max-w-[1250px] items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">

          {/* CONTENT */}

          <div className="order-2 lg:order-1">

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#D49E47]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D49E47]">
                Clinical Philosophy
              </p>

            </div>

            <h2 className="mt-6 font-display text-[47px] leading-[0.95] tracking-[-0.035em] md:text-[61px]">

              Treatment starts

              <br />

              with

              <br />

              <span className="text-[#D49E47]">
                understanding.
              </span>

            </h2>

            <p className="mt-7 text-[14px] leading-7 text-gray-600">
              Pain is only one part of the story. Understanding
              your symptoms, movement patterns, lifestyle and
              expectations helps create a treatment plan that
              actually fits your life.
            </p>

            {/* HIGHLIGHTS */}

            <div className="mt-9 space-y-5">

              <div className="flex gap-4">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F1EDE5] font-display text-sm text-[#D49E47]">
                  01
                </span>

                <div>
                  <h3 className="font-display text-[21px]">
                    Listen carefully
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-gray-500">
                    Understanding your concerns before deciding
                    on the next step.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F1EDE5] font-display text-sm text-[#D49E47]">
                  02
                </span>

                <div>
                  <h3 className="font-display text-[21px]">
                    Diagnose precisely
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-gray-500">
                    Combining clinical assessment with appropriate
                    investigations.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F1EDE5] font-display text-sm text-[#D49E47]">
                  03
                </span>

                <div>
                  <h3 className="font-display text-[21px]">
                    Personalise care
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-gray-500">
                    Choosing treatment around your goals and
                    everyday life.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* IMAGE */}

          <div className="order-1 lg:order-2">

            <div className="relative h-[520px] overflow-hidden rounded-xl md:h-[600px]">

              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90"
                alt="Doctor discussing medical imaging"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-6 left-6 rounded-lg bg-white/95 px-5 py-4 shadow-xl">

                <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#D49E47]">
                  Patient First
                </p>

                <p className="mt-1 text-[11px] text-[#103F3A]">
                  Care designed around your goals.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 04 — IMAGE LEFT / CONTENT RIGHT
      ===================================================== */}

      <section className="bg-[#073B38] px-6 py-20 md:px-10 md:py-28 lg:px-12">

        <div className="mx-auto grid max-w-[1250px] items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">

          {/* IMAGE */}

          <div>

            <div className="relative h-[520px] overflow-hidden rounded-xl md:h-[600px]">

              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=90"
                alt="Orthopedic medical care"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#073B38]/50 to-transparent" />

              <div className="absolute bottom-6 left-6">

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#D49E47]">
                  03
                </span>

                <p className="mt-2 font-display text-[22px] text-white">
                  Precision in every step.
                </p>

              </div>

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#D49E47]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D49E47]">
                Areas Of Care
              </p>

            </div>

            <h2 className="mt-6 font-display text-[47px] leading-[0.95] tracking-[-0.035em] text-white md:text-[61px]">

              Focused care

              <br />

              for better

              <br />

              <span className="text-[#D49E47]">
                movement.
              </span>

            </h2>

            <p className="mt-7 text-[14px] leading-7 text-white/55">
              Orthopedic conditions can affect every part of
              everyday life. Care should focus not only on reducing
              pain, but also on helping you regain confidence in
              movement.
            </p>

            {/* CARE LIST */}

            <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-5">

              {[
                "Knee Care",
                "Shoulder Care",
                "Spine Care",
                "Sports Medicine",
                "Hip Care",
                "Joint Replacement",
              ].map((item) => (

                <div
                  key={item}
                  className="border-t border-white/10 pt-4"
                >

                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 05 — CONTENT LEFT / IMAGE RIGHT
      ===================================================== */}

      <section className="bg-[#F6F3EE] px-6 py-20 md:px-10 md:py-28 lg:px-12">

        <div className="mx-auto grid max-w-[1250px] items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">

          {/* CONTENT */}

          <div>

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#D49E47]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D49E47]">
                Beyond Treatment
              </p>

            </div>

            <h2 className="mt-6 font-display text-[47px] leading-[0.95] tracking-[-0.035em] md:text-[61px]">

              Recovery is

              <br />

              more than

              <br />

              <span className="text-[#D49E47]">
                treatment.
              </span>

            </h2>

            <p className="mt-7 text-[14px] leading-7 text-gray-600">
              Long-term recovery depends on understanding your
              body, following the right rehabilitation plan and
              gradually returning to the activities that matter
              to you.
            </p>

            <div className="mt-9 border-l-2 border-[#D49E47] pl-5">

              <p className="font-display text-[24px] leading-tight text-[#103F3A]">
                “The goal is not simply to treat pain. It is to help
                you move forward.”
              </p>

            </div>

            <Link
              to="/appointment"
              className="mt-9 inline-flex rounded-md bg-[#103F3A] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.17em] text-white transition hover:bg-[#D49E47]"
            >
              Start Your Journey
            </Link>

          </div>

          {/* IMAGE */}

          <div>

            <div className="relative h-[500px] overflow-hidden rounded-xl md:h-[590px]">

              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=90"
                alt="Modern orthopedic care"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      

    </main>
  );
}

export default Doctor;