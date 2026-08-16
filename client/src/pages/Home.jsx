import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import AnimatedCard from "../components/AnimatedCard.jsx";

const CONDITIONS = [
  {
    title: "Knee",
    description:
      "Advanced care for knee pain, ligament injuries, arthritis and sports-related conditions.",
    image:
      "https://i.pinimg.com/1200x/f0/7d/6c/f07d6c3299d53f64b121d4370d70a470.jpg",
    path: "/conditions/knee",
  },
  {
    title: "Shoulder",
    description:
      "Personalised treatment for shoulder pain, sports injuries and restricted movement.",
    image:
      "https://i.pinimg.com/736x/35/3a/58/353a586f176f49331f196e42d354f029.jpg",
    path: "/conditions/shoulder",
  },
  {
    title: "Spine",
    description:
      "Comprehensive care for back pain, disc problems and spinal conditions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2u2nERnzKKgL-WBxzzbnqMpO68CZFxUYYXg7310CWwdu4JASL_5saQVw&s=10",
    path: "/conditions/spine",
  },
  {
    title: "Hip",
    description:
      "Modern solutions for hip pain, stiffness and joint degeneration.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhGiO0YxIDAQK4cIfRVfJYJQeG8wvUS5DFPMH5W6Zhw&s=10",
    path: "/conditions/hip",
  },
  {
    title: "Ankle",
    description:
      "Precision treatment for ligament injuries, instability and ankle pain.",
    image:
      "https://i.pinimg.com/736x/e2/81/20/e281207f8485f750849a43b8d17eab1e.jpg",
    path: "/conditions/ankle",
  },
  {
    title: "Foot",
    description:
      "Targeted care for plantar fasciitis, sports injuries and chronic foot pain.",
    image:
      "https://i.pinimg.com/736x/bd/03/e8/bd03e8841762fb24b68fe5cc3ab1add8.jpg",
    path: "/conditions/foot",
  },
];

const STATS = [
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "1000+",
    label: "Patients Treated",
  },
  {
    value: "200+",
    label: "Successful Operations",
  },
  {
    value: "2",
    label: "Treatment Centres",
  },
];

const EXPERTISE = [
  {
    number: "01",
    title: "Orthopedic Surgery",
    text: "Comprehensive surgical care for a wide range of musculoskeletal conditions.",
  },
  {
    number: "02",
    title: "Sports Medicine",
    text: "Specialised treatment and recovery support for athletes and active individuals.",
  },
  {
    number: "03",
    title: "Joint Replacement",
    text: "Advanced care for patients affected by significant joint degeneration.",
  },
  {
    number: "04",
    title: "Regenerative Care",
    text: "Modern treatment approaches for selected orthopedic and musculoskeletal conditions.",
  },
];

const JOURNEY = [
  {
    number: "01",
    title: "Listen",
    text: "Understanding your symptoms, lifestyle and individual goals.",
  },
  {
    number: "02",
    title: "Assess",
    text: "Detailed clinical evaluation to understand the underlying condition.",
  },
  {
    number: "03",
    title: "Treat",
    text: "Creating a personalised treatment approach based on your needs.",
  },
  {
    number: "04",
    title: "Recover",
    text: "Supporting your journey back towards comfortable movement.",
  },
];

const BLOGS = [
  {
    title: "Understanding Joint Pain",
    category: "Orthopedics",
    image:
      "https://i.pinimg.com/1200x/3b/66/2a/3b662ae4a43280da794f2b993ec4b81e.jpg",
    slug: "understanding-joint-pain",
  },
  {
    title: "When Should You See an Orthopedic Surgeon?",
    category: "Patient Guide",
    image:
      "https://i.pinimg.com/1200x/c6/d9/e5/c6d9e56211e882c582785a5695dd7e3e.jpg",
    slug: "when-to-see-an-orthopedic-surgeon",
  },
  {
    title: "Returning to an Active Lifestyle",
    category: "Sports Medicine",
    image:
      "https://i.pinimg.com/736x/9a/94/76/9a9476984e2cfd1316e9ea154c1dd932.jpg",
    slug: "returning-to-an-active-lifestyle",
  },
  {
    title: "Knee Pain: Causes and Treatment",
    category: "Knee Care",
    image:
      "https://i.pinimg.com/736x/7b/07/78/7b07781fa93b4ff0150b799a580ca1ba.jpg",
    slug: "knee-pain-causes-treatment",
  },
  {
    title: "Understanding Sports Injuries",
    category: "Sports Medicine",
    image:
      "https://i.pinimg.com/736x/52/a4/2f/52a42f2df1a674b45893fc8b009110ee.jpg",
    slug: "understanding-sports-injuries",
  },
  {
    title: "Recovery After Joint Surgery",
    category: "Recovery",
    image:
      "https://i.pinimg.com/1200x/c2/b7/e1/c2b7e1d44283180988d6f97966333212.jpg",
    slug: "recovery-after-joint-surgery",
  },
];

function Home() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <HeroSlider />


      {/* =====================================================
          EXPERTISE STRIP
      ===================================================== */}

      <section className="border-b border-gray-100 bg-white">

        <div className="container-custom">

          <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-gold" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Areas of Expertise
              </p>

            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3">

              <span className="text-sm font-medium text-teal/60">
                Orthopedics
              </span>

              <span className="text-sm font-medium text-teal/60">
                Sports Medicine
              </span>

              <span className="text-sm font-medium text-teal/60">
                Joint Care
              </span>

              <span className="text-sm font-medium text-teal/60">
                Spine Care
              </span>

              <span className="text-sm font-medium text-teal/60">
                Regenerative Care
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT DOCTOR
      ===================================================== */}

      <section
        id="about"
        className="section"
      >

        <ScrollReveal className="container-custom grid items-center gap-16 lg:grid-cols-2">

          <div className="relative">

            <div className="overflow-hidden rounded-xl">

              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=85"
                alt="Orthopedic doctor"
                className="aspect-[4/5] w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-7 right-5 animate-float rounded-xl bg-teal px-7 py-6 shadow-2xl md:right-8 transition-transform duration-300 hover:scale-105">

              <p className="font-display text-4xl text-gold">
                15+
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
                Years Experience
              </p>

            </div>

          </div>


          <div>

            <p className="eyebrow">
              About the Doctor
            </p>

            <h2 className="section-heading">
              Expertise with
              <br />
              a <span>human touch.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Dr. Santhosh Jacob focuses on providing thoughtful
              orthopedic care that begins with understanding the
              individual patient.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-600">
              From diagnosis and treatment planning to recovery,
              every step is designed around the patient&apos;s
              condition, lifestyle and movement goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/about/doctor"
                className="btn-primary"
              >
                Discover More
              </Link>

              <Link
                to="/appointment"
                className="btn-outline"
              >
                Book Consultation
              </Link>

            </div>

          </div>

        </ScrollReveal>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="border-y border-gray-100 bg-[#FAFAF8]">

        <ScrollReveal variant="scale-up" className="container-custom">

          <div className="grid grid-cols-2 md:grid-cols-4">

            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`group px-5 py-12 text-center transition-all duration-300 hover:scale-105 hover:bg-white rounded-xl border-gray-200 ${
                  index % 2 === 0 ? "border-r md:border-r" : "md:border-r"
                } ${index < 2 ? "border-b md:border-b-0" : ""} ${
                  index === STATS.length - 1 ? "md:border-r-0" : ""
                }`}
              >

                <p className="font-display text-4xl text-teal transition-transform duration-300 group-hover:scale-110 md:text-5xl">
                  {stat.value}
                </p>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.16em] text-gray-500">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </ScrollReveal>

      </section>


      {/* =====================================================
          CONDITIONS
      ===================================================== */}

      <section
        id="conditions"
        className="section"
      >

        <div className="container-custom">

          <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">

            <div>

              <p className="eyebrow">
                Conditions Treated
              </p>

              <h2 className="section-heading">
                Care for every
                <br />
                <span>kind of movement.</span>
              </h2>

            </div>

            <div className="max-w-md">

              <p className="text-sm leading-7 text-gray-600">
                Specialised orthopedic care across joints,
                spine, sports injuries and mobility conditions.
              </p>

              <Link
                to="/conditions/knee"
                className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.12em] text-teal hover:text-gold"
              >
                Explore All Conditions →
              </Link>

            </div>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {CONDITIONS.map((condition, index) => (
              <AnimatedCard
                key={condition.title}
                delay={index * 0.08}
                className="overflow-hidden rounded-xl bg-teal"
              >
                <Link
                  to={condition.path}
                  className="group relative block overflow-hidden rounded-xl"
                >

                  <div className="aspect-[4/4.5] overflow-hidden">

                    <img
                      src={condition.image}
                      alt={`${condition.title} treatment`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                  <div className="absolute bottom-0 left-0 right-0 p-7">

                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold-light">
                      Orthopedic Care
                    </p>

                    <h3 className="mt-2 font-display text-3xl text-white transition-transform duration-300 group-hover:translate-x-1">
                      {condition.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
                      {condition.description}
                    </p>

                    <span className="mt-5 inline-flex text-[10px] font-bold uppercase tracking-[0.15em] text-gold transition-transform duration-300 group-hover:translate-x-2">
                      Explore →
                    </span>

                  </div>

                </Link>
              </AnimatedCard>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR APPROACH
      ===================================================== */}

      <section
        id="journey"
        className="bg-teal"
      >

        <div className="container-custom py-20 md:py-28">

          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                Our Approach
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-white md:text-6xl">
                From understanding
                <br />
                your problem to
                <br />
                <span className="text-gold">
                  restoring movement.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/60">
                Every patient is different. Our approach combines
                careful diagnosis, personalised treatment planning
                and structured recovery support.
              </p>

              <Link
                to="/about/doctor"
                className="mt-8 inline-flex text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:text-gold"
              >
                Discover Our Approach →
              </Link>

            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">

              {JOURNEY.map((item, index) => (
                <AnimatedCard
                  key={item.number}
                  delay={index * 0.1}
                  className="group relative rounded-xl border border-[rgba(220,230,225,0.14)] bg-[#163F3C] p-8 lg:p-9"
                >

                  <span className="inline-block text-xs font-bold tracking-[0.2em] text-gold transition-transform duration-300 group-hover:scale-110">
                    {item.number}
                  </span>

                  <h3 className="mt-7 font-display text-2xl text-white transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {item.text}
                  </p>

                </AnimatedCard>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERTISE
      ===================================================== */}

      <section className="section">

        <div className="container-custom">

          <div className="mb-14">

            <p className="eyebrow">
              Clinical Expertise
            </p>

            <h2 className="section-heading">
              Focused expertise.
              <br />
              <span>Personalised treatment.</span>
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {EXPERTISE.map((item, index) => (
              <AnimatedCard
                key={item.number}
                delay={index * 0.08}
                className="group rounded-xl border border-gray-200 bg-white p-7"
              >

                <span className="inline-block text-xs font-bold tracking-[0.2em] text-gold transition-transform duration-300 group-hover:scale-110">
                  {item.number}
                </span>

                <h3 className="mt-7 font-display text-2xl leading-tight text-teal transition-transform duration-300 group-hover:translate-x-1">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>

              </AnimatedCard>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CENTRE FEATURE
      ===================================================== */}

      <section className="section bg-[#FAFAF8]">

        <ScrollReveal className="container-custom grid items-center gap-14 lg:grid-cols-2">

          <div className="overflow-hidden rounded-xl">

            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=85"
              alt="Modern medical centre"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>

          <div>

            <p className="eyebrow">
              Our Centre
            </p>

            <h2 className="section-heading">
              A space designed
              <br />
              around <span>care.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600">
              Our treatment environment is designed to support
              consultation, diagnosis, treatment planning and
              recovery in a patient-focused setting.
            </p>

            <div className="mt-7 space-y-4">

              {[
                ["01", "Orthopedic Consultation"],
                ["02", "Sports Medicine"],
                ["03", "Spine & Joint Care"],
              ].map(([number, text]) => (
                <div
                  key={number}
                  className="group flex items-center gap-4 transition-transform duration-300 hover:translate-x-2"
                >

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-xs font-bold text-gold shadow-md transition-transform duration-300 group-hover:scale-110">
                    {number}
                  </span>

                  <span className="text-sm font-semibold text-teal">
                    {text}
                  </span>

                </div>
              ))}

            </div>

            <Link
              to="/programs/centers"
              className="btn-primary mt-8"
            >
              Explore Our Centres
            </Link>

          </div>

        </ScrollReveal>

      </section>


      {/* =====================================================
    INSIGHTS
===================================================== */}

<section
  id="insights"
  className="section overflow-hidden"
>
  <div className="container-custom">

    {/* HEADER */}

    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

      <div>
        <p className="eyebrow">
          Insights
        </p>

        <h2 className="section-heading">
          Knowledge that helps
          <br />
          you <span>move better.</span>
        </h2>
      </div>

      <Link
        to="/blog"
        className="btn-outline"
      >
        View All Articles
      </Link>

    </div>

  </div>


  {/* =====================================================
      AUTO MOVING CARDS
  ===================================================== */}

  <div className="relative w-full overflow-hidden">

    {/* LEFT FADE */}

    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />

    {/* RIGHT FADE */}

    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />


    <div className="insights-track">

      {/* FIRST SET */}

      <div className="insights-group">

        {BLOGS.map((blog) => (
          <article
            key={blog.slug}
            className="insight-card group"
          >

            {/* IMAGE */}

            <div className="aspect-[16/10] overflow-hidden">

              <img
                src={blog.image}
                alt={blog.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>


            {/* CONTENT */}

            <div className="p-7">

              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold">
                {blog.category}
              </p>

              <h3 className="mt-3 min-h-[65px] font-display text-2xl leading-tight text-teal">
                {blog.title}
              </h3>

              <Link
                to={`/blog/${blog.slug}`}
                className="mt-6 inline-flex text-xs font-bold uppercase tracking-[0.12em] text-teal transition hover:text-gold"
              >
                Read Article →
              </Link>

            </div>

          </article>
        ))}

      </div>


      {/* DUPLICATE FOR INFINITE LOOP */}

      <div
        className="insights-group"
        aria-hidden="true"
      >

        {BLOGS.map((blog) => (
          <article
            key={`duplicate-${blog.slug}`}
            className="insight-card group"
          >

            <div className="aspect-[16/10] overflow-hidden">

              <img
                src={blog.image}
                alt=""
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div className="p-7">

              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold">
                {blog.category}
              </p>

              <h3 className="mt-3 min-h-[65px] font-display text-2xl leading-tight text-teal">
                {blog.title}
              </h3>

              <span className="mt-6 inline-flex text-xs font-bold uppercase tracking-[0.12em] text-teal">
                Read Article →
              </span>

            </div>

          </article>
        ))}

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 pb-20 md:px-10 md:pb-28 lg:px-12">

        <ScrollReveal variant="scale-up" className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl bg-[#F6F3EE] px-7 py-16 text-center md:px-16 md:py-20">

          <p className="eyebrow justify-center">
            Start Your Recovery
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-tight text-teal md:text-6xl">
            Ready to take the first step towards
            <br />
            <span className="text-gold">
              better movement?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600">
            Book a consultation and let&apos;s find the right
            treatment path for you.
          </p>

          <Link
            to="/appointment"
            className="btn-primary mt-8"
          >
            Book an Appointment
          </Link>

        </ScrollReveal>

      </section>

    </main>
  );
}

export default Home;