import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider.jsx";

const CONDITIONS = [
  {
    title: "Neck Care",
    description:
      "Targeted relief for cervical spine stiffness, posture strain, nerve impingement, and chronic neck pain.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85",
    path: "/conditions/spine",
  },
  {
    title: "Shoulder Care",
    description:
      "Personalised rehabilitation for rotator cuff injuries, frozen shoulder, bursitis, and joint mobility.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85",
    path: "/conditions/shoulder",
  },
  {
    title: "Spine Care",
    description:
      "Comprehensive physiotherapy for lower back pain, herniated discs, sciatica, and spinal alignment.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2u2nERnzKKgL-WBxzzbnqMpO68CZFxUYYXg7310CWwdu4JASL_5saQVw&s=10",
    path: "/conditions/spine",
  },
  {
    title: "Knee Care",
    description:
      "Advanced protocols for knee arthritis, ACL/ligament recovery, patellar tracking, and meniscus injuries.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    path: "/conditions/knee",
  },
  {
    title: "Hip Care",
    description:
      "Modern physiotherapy for hip impingement, labral tears, osteoarthritis, and pelvic girdle stability.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
    path: "/conditions/hip",
  },
  {
    title: "Foot Care",
    description:
      "Targeted care for plantar fasciitis, arch strain, heel spurs, and gait alignment.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85",
    path: "/conditions/foot",
  },
  {
    title: "Ankle Care",
    description:
      "Precision treatment for acute ankle sprains, chronic instability, and Achilles tendonitis.",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=85",
    path: "/conditions/ankle",
  },
];

const WHY_CHOOSE = [
  {
    number: "01",
    title: "Specialist-Led Care",
    description:
      "Experienced orthopedic and physiotherapy clinical experts leading every phase of your evaluation and treatment.",
  },
  {
    number: "02",
    title: "Personalised Recovery Plans",
    description:
      "Tailored rehabilitation strategies built around your body biomechanics, daily activities, and personal goals.",
  },
  {
    number: "03",
    title: "Movement-Focused Therapy",
    description:
      "Evidence-based therapeutic exercises and hands-on techniques focused on restoring function and strength.",
  },
  {
    number: "04",
    title: "Dedicated Patient Support",
    description:
      "Continuous progress tracking, education, and compassionate one-on-one rehabilitation guidance.",
  },
];

const JOURNEY = [
  {
    step: "01",
    title: "Assessment",
    description:
      "In-depth clinical evaluation of your symptoms, posture, joint mobility, and movement patterns.",
  },
  {
    step: "02",
    title: "Diagnosis",
    description:
      "Accurate identification of the underlying biomechanical issue and clear explanation of root causes.",
  },
  {
    step: "03",
    title: "Treatment",
    description:
      "Targeted physiotherapy sessions incorporating manual therapy, therapeutic exercises, and modalities.",
  },
  {
    step: "04",
    title: "Recovery",
    description:
      "Guided strengthening and movement retraining to prevent recurrence and support long-term active living.",
  },
];

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "1000+", label: "Patients Treated" },
  { value: "200+", label: "Successful Operations" },
  { value: "2", label: "Treatment Centres" },
];

const BLOGS = [
  {
    title: "Understanding Joint Pain & Early Intervention",
    category: "Orthopedics",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    slug: "understanding-joint-pain",
  },
  {
    title: "When Should You Consult a Physiotherapy Specialist?",
    category: "Patient Guide",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85",
    slug: "when-to-see-an-orthopedic-surgeon",
  },
  {
    title: "Returning to Sport Safely After Ligament Injury",
    category: "Sports Medicine",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85",
    slug: "returning-to-an-active-lifestyle",
  },
  {
    title: "Knee Stiffness: Causes, Prevention & Exercises",
    category: "Knee Care",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85",
    slug: "knee-pain-causes-treatment",
  },
  {
    title: "Preventing Common Sports & Overuse Injuries",
    category: "Sports Medicine",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85",
    slug: "understanding-sports-injuries",
  },
];

function Home() {
  return (
    <main className="bg-white">

      {/* =====================================================
          1. HERO SECTION
      ===================================================== */}
      <HeroSlider />


      {/* =====================================================
          CLINICAL EXPERTISE STRIP
      ===================================================== */}
      <section className="border-b border-gray-100 bg-[#FAFAF8] py-7">
        <div className="container-custom flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Specialist Focus Areas
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal/75">
            <span>Orthopedics</span>
            <span>Sports Medicine</span>
            <span>Spine & Back Care</span>
            <span>Joint Rehabilitation</span>
            <span>Regenerative Therapy</span>
          </div>
        </div>
      </section>


      {/* =====================================================
          2. KEY TREATMENT AREAS (Neck, Shoulder, Spine, Knee, Hip, Foot, Ankle)
      ===================================================== */}
      <section id="conditions" className="py-20 md:py-28">
        <div className="container-custom">
          
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Key Treatment Areas</p>
              <h2 className="section-heading mt-3">
                Targeted care for every <br />
                <span>joint & movement.</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-sm leading-relaxed text-gray-600">
                Specialised physiotherapy and rehabilitation across neck, shoulder, spine, knee, hip, foot, and ankle conditions.
              </p>
              <Link
                to="/conditions/knee"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-teal transition hover:text-gold"
              >
                Explore All Conditions →
              </Link>
            </div>
          </div>

          {/* 7 KEY TREATMENT CARDS GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CONDITIONS.map((condition) => (
              <Link
                key={condition.title}
                to={condition.path}
                className="group relative overflow-hidden rounded-[24px] bg-teal shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3.5] overflow-hidden">
                  <img
                    src={condition.image}
                    alt={`${condition.title}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold">
                    Targeted Care
                  </p>

                  <h3 className="mt-1 font-display text-2xl text-white">
                    {condition.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-white/75 line-clamp-2">
                    {condition.description}
                  </p>

                  <span className="mt-4 inline-flex items-center text-[10px] font-bold uppercase tracking-[0.15em] text-white group-hover:text-gold transition">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          3. WHY CHOOSE JEEVAN PHYSIOTHERAPY
      ===================================================== */}
      <section className="bg-[#FAFAF8] py-20 md:py-28 border-y border-gray-100">
        <div className="container-custom">
          
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="eyebrow justify-center">Why Choose Us</p>
            <h2 className="section-heading mt-3">
              Why choose <span>Jeevan Physiotherapy?</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We combine clinical expertise, advanced movement assessments, and compassionate care to help you recover safely and regain mobility.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.number}
                className="rounded-[24px] border border-gray-200/80 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-gold">
                  {item.number}
                </span>

                <h3 className="mt-6 font-display text-2xl leading-tight text-teal">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* STATS BAR */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 rounded-[24px] bg-white border border-gray-200/80 shadow-sm divide-x divide-gray-100">
            {STATS.map((stat) => (
              <div key={stat.label} className="p-6 text-center">
                <p className="font-display text-3xl md:text-4xl text-teal">
                  {stat.value}
                </p>
                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          4. SIMPLE TREATMENT JOURNEY (Assessment -> Diagnosis -> Treatment -> Recovery)
      ===================================================== */}
      <section id="journey" className="bg-teal py-20 md:py-28 text-white">
        <div className="container-custom">
          
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                Simple Treatment Journey
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                A structured path from pain to <br />
                <span className="text-gold">lasting recovery.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
                Our step-by-step clinical process ensures you receive accurate evaluation, clear answers, and targeted physiotherapy treatments every step of the way.
              </p>

              <Link
                to="/about/doctor"
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:text-gold"
              >
                Learn More About Our Process →
              </Link>
            </div>

            {/* 4 JOURNEY STEPS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {JOURNEY.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-300 hover:border-gold/50 hover:bg-white/[0.08]"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-gold">
                    STEP {item.step}
                  </span>

                  <h3 className="mt-4 font-display text-2xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          5. DOCTOR / SPECIALIST INTRODUCTION
      ===================================================== */}
      <section id="about" className="py-20 md:py-28">
        <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
          
          {/* DOCTOR IMAGE & BADGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=85"
                alt="Dr. Santhosh Jacob - Orthopedic & Physiotherapy Specialist"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 right-6 rounded-[20px] bg-teal px-7 py-5 shadow-xl">
              <p className="font-display text-4xl text-gold">15+</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                Years Experience
              </p>
            </div>
          </div>

          {/* DOCTOR INFO */}
          <div>
            <p className="eyebrow">About the Specialist</p>

            <h2 className="section-heading mt-3">
              Specialist care with <br />
              <span>a human touch.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600">
              <strong>Dr. Santhosh Jacob</strong> focuses on providing evidence-based orthopedic and physiotherapy care that begins with a deep clinical understanding of each individual patient.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Specialising in non-surgical pain management, joint rehabilitation, and sports medicine, every treatment plan is tailored around your daily mobility, active lifestyle, and recovery goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about/doctor" className="btn-primary">
                Read Full Profile
              </Link>
              <Link to="/appointment" className="btn-outline">
                Book Consultation
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          6. PATIENT-FOCUSED CTA BANNER
      ===================================================== */}
      <section className="px-6 pb-20 md:px-10 md:pb-28 lg:px-12">
        <div className="mx-auto max-w-[1360px] overflow-hidden rounded-[34px] bg-[#F6F3EE] px-8 py-16 text-center md:px-16 md:py-20 shadow-sm border border-gray-200/50">
          
          <p className="eyebrow justify-center">Start Your Recovery Today</p>

          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight text-teal md:text-5xl">
            Ready to take the first step towards <br />
            <span className="text-gold">pain-free movement?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600">
            Book a comprehensive physiotherapy consultation and let our specialist team design your personalised recovery path.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/appointment" className="btn-primary px-9 py-4 text-xs font-bold uppercase tracking-[0.14em]">
              Book an Appointment
            </Link>
          </div>

        </div>
      </section>


      {/* =====================================================
          7. EDUCATIONAL INSIGHTS / BLOG PREVIEW
      ===================================================== */}
      <section id="insights" className="pb-20 md:pb-28 overflow-hidden">
        <div className="container-custom">
          
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Educational Insights</p>
              <h2 className="section-heading mt-2">
                Knowledge that helps you <br />
                <span>move & recover better.</span>
              </h2>
            </div>

            <Link to="/blog" className="btn-outline">
              View All Articles →
            </Link>
          </div>

        </div>

        {/* INSIGHTS CAROUSEL TRACK */}
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

          <div className="insights-track">
            <div className="insights-group">
              {BLOGS.map((blog) => (
                <article key={blog.slug} className="insight-card group">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold">
                      {blog.category}
                    </p>
                    <h3 className="mt-2 min-h-[60px] font-display text-xl leading-tight text-teal">
                      {blog.title}
                    </h3>
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.12em] text-teal transition hover:text-gold"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* DUPLICATE FOR INFINITE SCROLL */}
            <div className="insights-group" aria-hidden="true">
              {BLOGS.map((blog) => (
                <article key={`dup-${blog.slug}`} className="insight-card group">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={blog.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold">
                      {blog.category}
                    </p>
                    <h3 className="mt-2 min-h-[60px] font-display text-xl leading-tight text-teal">
                      {blog.title}
                    </h3>
                    <span className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.12em] text-teal">
                      Read Article →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;