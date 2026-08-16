import { Link } from "react-router-dom";

const TEAM = [
  {
    name: "Dr. Santhosh Jacob",
    role: "Orthopedic Surgeon",
    specialty: "Orthopedics · Sports Medicine · Spine",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dr. Ananya Krishnan",
    role: "Sports Medicine Specialist",
    specialty: "Sports Injuries · Rehabilitation",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dr. Vikram Raghavan",
    role: "Spine Specialist",
    specialty: "Spine Care · Pain Management",
    image:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dr. Meera Nair",
    role: "Anesthesiologist",
    specialty: "Pain Relief · Patient Comfort",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Mr. Arjun Prakash",
    role: "Physiotherapy Lead",
    specialty: "Rehabilitation · Movement Therapy",
    image:
      "https://i.pinimg.com/736x/47/a4/44/47a4448f2df0046ee1f7bed28f87e551.jpg",
  },
];

const VALUES = [
  {
    number: "01",
    title: "Collaborative Care",
    text: "Working together for better patient outcomes.",
  },
  {
    number: "02",
    title: "Patient First",
    text: "Your health, comfort and goals come first.",
  },
  {
    number: "03",
    title: "Excellence",
    text: "Committed to the highest standards of care.",
  },
  {
    number: "04",
    title: "Compassion",
    text: "Care delivered with empathy and respect.",
  },
];

function Team() {
  return (
    <main className="bg-white text-[#103F3A]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[650px] overflow-hidden bg-[#073B38]">

        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2200&q=90"
          alt="Modern medical centre"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,48,45,0.98)_0%,rgba(5,48,45,0.86)_35%,rgba(5,48,45,0.38)_70%,rgba(5,48,45,0.15)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#073B38]/60 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1400px] items-center px-7 md:px-12 lg:px-16">

          <div className="max-w-[650px]">

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-[#D49E47]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D49E47]">
                Our Team
              </span>

            </div>

            <h1 className="mt-7 font-display text-4xl xs:text-5xl sm:text-[76px] md:text-[92px] lg:text-[105px] leading-[0.88] tracking-[-0.045em] text-white">

              Expert care,

              <br />

              <span className="text-[#D49E47]">
                together.
              </span>

            </h1>

            <p className="mt-8 max-w-[540px] text-[14px] leading-7 text-white/70 md:text-[16px] md:leading-8">
              A dedicated team of specialists and healthcare
              professionals working collaboratively to provide
              thoughtful orthopedic care with compassion and
              excellence.
            </p>

            <div className="mt-9">

              <Link
                to="/appointment"
                className="inline-flex rounded-md border border-[#D49E47] bg-[#D49E47] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.17em] text-white transition hover:bg-white hover:text-[#073B38]"
              >
                Book Appointment
              </Link>

            </div>

          </div>

        </div>

        <div className="absolute bottom-8 left-7 z-20 flex items-center gap-3 md:left-12 lg:left-16">

          <span className="text-[10px] font-bold text-white">
            01
          </span>

          <span className="h-px w-10 bg-[#D49E47]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
            Meet The Team
          </span>

        </div>

      </section>


      {/* =====================================================
          TEAM INTRO
      ===================================================== */}

      <section className="bg-[#F6F3EE] px-6 py-20 md:px-10 md:py-24 lg:px-12">

        <div className="mx-auto max-w-[1250px] text-center">

          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D49E47]">
            Meet Our Team
          </p>

          <h2 className="mx-auto mt-5 max-w-[850px] font-display text-[45px] leading-[0.98] tracking-[-0.035em] md:text-[62px]">

            Experienced.

            <span className="text-[#D49E47]">
              {" "}Collaborative.
            </span>

            <br />

            Patient focused.

          </h2>

          <div className="mx-auto mt-7 h-px w-12 bg-[#D49E47]" />

          <p className="mx-auto mt-7 max-w-[600px] text-[13px] leading-7 text-gray-500">
            Great care is never delivered by one person alone.
            Our team brings together different areas of expertise
            to support every stage of your treatment and recovery.
          </p>

        </div>

      </section>


      {/* =====================================================
          TEAM GRID
      ===================================================== */}

      <section className="bg-[#F6F3EE] px-6 pb-24 md:px-10 md:pb-28 lg:px-12">

        <div className="mx-auto max-w-[1250px]">

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {TEAM.map((member, index) => (

              <article
                key={member.name}
                className={`group overflow-hidden rounded-xl border border-[#DDD8CF] bg-white transition duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
              >

                {/* IMAGE */}

                <div className="relative h-[390px] overflow-hidden bg-[#E9E5DD]">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#073B38]/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-2 text-[8px] font-bold tracking-[0.15em] text-[#D49E47] backdrop-blur">
                    0{index + 1}
                  </span>

                </div>

                {/* DETAILS */}

                <div className="p-6">

                  <h3 className="font-display text-[25px] leading-tight text-[#103F3A]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#D49E47]">
                    {member.role}
                  </p>

                  <div className="mt-5 h-px w-8 bg-[#D49E47]" />

                  <p className="mt-4 text-[11px] leading-5 text-gray-500">
                    {member.specialty}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES STRIP
      ===================================================== */}

      <section className="bg-[#073B38] px-6 py-14 md:px-10 lg:px-12">

        <div className="mx-auto grid max-w-[1250px] md:grid-cols-2 lg:grid-cols-4">

          {VALUES.map((value, index) => (

            <div
              key={value.number}
              className={`p-7 ${
                index !== VALUES.length - 1
                  ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >

              <div className="flex items-center justify-between">

                <span className="font-display text-[28px] text-[#D49E47]">
                  {value.number}
                </span>

                <span className="text-[20px] text-white/20">
                  →
                </span>

              </div>

              <h3 className="mt-6 font-display text-[24px] text-white">
                {value.title}
              </h3>

              <p className="mt-3 text-[11px] leading-5 text-white/45">
                {value.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          COLLABORATION SECTION
      ===================================================== */}

      <section className="bg-white px-6 py-20 md:px-10 md:py-28 lg:px-12">

        <div className="mx-auto grid max-w-[1250px] items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">

          {/* CONTENT */}

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#D49E47]">
              Care Built Around You
            </p>

            <h2 className="mt-5 font-display text-[48px] leading-[0.95] tracking-[-0.035em] md:text-[62px]">

              We are here to help you

              <br />

              move better and

              <br />

              <span className="text-[#D49E47]">
                live better.
              </span>

            </h2>

            <p className="mt-7 max-w-[500px] text-[13px] leading-7 text-gray-500">
              From diagnosis to recovery, our team works together
              to make every stage of your healthcare journey clearer,
              more comfortable and more personal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                to="/appointment"
                className="rounded-md bg-[#103F3A] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.17em] text-white transition hover:bg-[#D49E47]"
              >
                Book An Appointment
              </Link>

              <a
                href="#team"
                className="rounded-md border border-[#BFC8C5] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.17em] text-[#103F3A] transition hover:border-[#D49E47] hover:text-[#D49E47]"
              >
                Meet The Team
              </a>

            </div>

          </div>

          {/* IMAGE */}

          <div className="relative h-[480px] overflow-hidden rounded-xl">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZncDGKdi-nWZsQYTDK-at0lL8CgQH9KqzJ_ZlHNcb9g&s=10"
              alt="Modern healthcare centre"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#073B38]/50 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/20 bg-[#073B38]/80 p-5 backdrop-blur-md">

              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#D49E47]">
                One Team
              </p>

              <p className="mt-2 font-display text-[23px] text-white">
                Different expertise. One goal.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#103F3A] px-6 py-24 text-center md:py-28">

        <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-white/[0.05]" />

        <div className="relative mx-auto max-w-[850px]">

          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D49E47]">
            Your Next Step
          </p>

          <h2 className="mt-6 font-display text-[50px] leading-[0.95] tracking-[-0.035em] text-white md:text-[70px]">

            The right care

            <br />

            starts with the

            <span className="text-[#D49E47]">
              {" "}right team.
            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-[500px] text-[13px] leading-7 text-white/50">
            Talk to our team and take the first step towards
            understanding your condition and your options.
          </p>

          <Link
            to="/appointment"
            className="mt-9 inline-flex rounded-md bg-[#D49E47] px-8 py-4 text-[9px] font-bold uppercase tracking-[0.17em] text-white transition hover:bg-white hover:text-[#103F3A]"
          >
            Book A Consultation
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Team;