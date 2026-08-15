import { Link } from "react-router-dom";

const ARTICLES = [
  {
    slug: "understanding-joint-pain",
    category: "ORTHOPEDICS",
    date: "12 AUG 2026",
    title: "Understanding Joint Pain",
    description:
      "Why joint pain happens, what symptoms to watch for and when professional orthopedic care may be helpful.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "when-should-you-see-an-orthopedic-surgeon",
    category: "PATIENT GUIDE",
    date: "08 AUG 2026",
    title: "When Should You See an Orthopedic Surgeon?",
    description:
      "Understanding the signs that persistent pain, stiffness or movement problems may need specialist evaluation.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "returning-to-an-active-lifestyle",
    category: "SPORTS MEDICINE",
    date: "03 AUG 2026",
    title: "Returning to an Active Lifestyle",
    description:
      "Practical guidance for getting back to movement safely after an injury or period of reduced activity.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "understanding-neck-pain",
    category: "SPINE CARE",
    date: "28 JUL 2026",
    title: "Understanding Neck Pain",
    description:
      "Common causes of neck pain and the importance of understanding the underlying source of discomfort.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "knee-pain-and-everyday-mobility",
    category: "KNEE CARE",
    date: "21 JUL 2026",
    title: "Knee Pain and Everyday Mobility",
    description:
      "How knee discomfort can affect daily movement and the different factors that may contribute to it.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "sports-injury-recovery",
    category: "SPORTS MEDICINE",
    date: "15 JUL 2026",
    title: "A Better Approach to Sports Injury Recovery",
    description:
      "Understanding recovery, rehabilitation and the importance of returning to activity at the right pace.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
  },
];

const TOPICS = [
  {
    number: "01",
    title: "ORTHOPEDICS",
    text: "Joint health, pain and treatment.",
  },
  {
    number: "02",
    title: "SPORTS MEDICINE",
    text: "Injury prevention, recovery and performance.",
  },
  {
    number: "03",
    title: "SPINE CARE",
    text: "Neck, back and spinal health.",
  },
  {
    number: "04",
    title: "PATIENT GUIDES",
    text: "Simple explanations for better decisions.",
  },
];

function Blog() {
  const featured = ARTICLES[0];

  return (
    <main className="w-full overflow-hidden bg-white text-[#103F3A]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative bg-[#F6F3EE]">

        <div className="mx-auto grid min-h-[580px] max-w-[1400px] lg:grid-cols-[0.9fr_1.1fr]">

          {/* HERO CONTENT */}

          <div className="relative z-10 flex items-center px-7 py-24 md:px-12 lg:px-16">

            <div className="max-w-[650px]">

              <div className="mb-7 flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#D49E47]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D49E47]">
                  Insights & Knowledge
                </span>

              </div>

              <h1 className="font-display text-[56px] font-medium leading-[0.9] tracking-[-0.045em] text-[#103F3A] sm:text-[66px] md:text-[78px] lg:text-[88px]">

                Knowledge that

                <br />

                helps you

                <br />

                <span className="text-[#D49E47]">
                  move better.
                </span>

              </h1>

              <p className="mt-8 max-w-[510px] text-[14px] leading-7 text-[#5C6967] md:text-[15px]">
                Practical insights on orthopedic care, sports medicine,
                spine health, recovery and living an active lifestyle.
              </p>

            </div>

          </div>

          {/* HERO IMAGE */}

          <div className="relative min-h-[430px] overflow-hidden lg:min-h-[580px]">

            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1600&q=85"
              alt="Orthopedic medical knowledge"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#F6F3EE] via-transparent to-transparent lg:w-[35%]" />

            {/* Floating icon */}

            <div className="absolute left-8 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-[#D49E47] bg-white/70 backdrop-blur md:left-14">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                className="h-7 w-7 text-[#D49E47]"
              >
                <path d="M6 3h9l3 3v15H6z" />
                <path d="M15 3v4h3" />
                <path d="M9 11h6M9 15h6M9 19h4" />
              </svg>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURED ARTICLE
      ===================================================== */}

      <section className="bg-white px-6 py-8 md:px-10 md:py-12 lg:px-12">

        <div className="mx-auto max-w-[1260px]">

          <article className="grid overflow-hidden rounded-xl border border-[#E2E0DB] bg-[#073B38] lg:grid-cols-[1fr_0.9fr]">

            {/* IMAGE */}

            <div className="relative h-[360px] overflow-hidden md:h-[460px] lg:h-[500px]">

              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

            </div>

            {/* CONTENT */}

            <div className="flex flex-col justify-center px-8 py-12 md:px-12 lg:px-14">

              <div className="flex flex-wrap items-center gap-3">

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D49E47]">
                  Featured Insight
                </span>

              </div>

              <div className="mt-6 flex items-center gap-3">

                <span className="text-[9px] font-bold tracking-[0.15em] text-white/70">
                  {featured.category}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#D49E47]" />

                <span className="text-[9px] tracking-[0.15em] text-white/45">
                  {featured.date}
                </span>

              </div>

              <h2 className="mt-6 font-display text-[42px] leading-[0.95] tracking-[-0.035em] text-white md:text-[52px]">

                Understanding

                <br />

                Joint Pain

              </h2>

              <div className="mt-6 h-px w-10 bg-[#D49E47]" />

              <p className="mt-6 max-w-[440px] text-[13px] leading-7 text-white/65">
                {featured.description}
              </p>

              <Link
                to={`/blog/${featured.slug}`}
                className="mt-8 inline-flex w-fit items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#D49E47] transition hover:text-white"
              >
                Read Article
                <span>→</span>
              </Link>

            </div>

          </article>

        </div>

      </section>

      {/* =====================================================
          LATEST INSIGHTS
      ===================================================== */}

      <section className="bg-[#F6F3EE] px-6 py-20 md:px-10 md:py-24 lg:px-12">

        <div className="mx-auto max-w-[1260px]">

          {/* SECTION TITLE */}

          <div className="text-center">

            <div className="flex items-center justify-center gap-3">

              <span className="h-px w-7 bg-[#D49E47]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#D49E47]">
                Latest Insights
              </span>

              <span className="h-px w-7 bg-[#D49E47]" />

            </div>

            <h2 className="mt-4 font-display text-[45px] leading-none tracking-[-0.035em] md:text-[58px]">

              Explore our{" "}

              <span className="text-[#D49E47]">
                insights.
              </span>

            </h2>

          </div>

          {/* CATEGORY FILTER UI */}

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {[
              "ALL",
              "ORTHOPEDICS",
              "SPORTS MEDICINE",
              "SPINE CARE",
              "PATIENT GUIDE",
            ].map((item, index) => (

              <button
                key={item}
                className={`
                  rounded-md
                  px-5
                  py-2.5
                  text-[8px]
                  font-bold
                  tracking-[0.14em]
                  transition
                  ${
                    index === 0
                      ? "bg-[#073B38] text-white"
                      : "border border-[#CFCBC3] bg-white text-[#52615F] hover:border-[#073B38] hover:text-[#073B38]"
                  }
                `}
              >
                {item}
              </button>

            ))}

          </div>

          {/* ARTICLE CARDS */}

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {ARTICLES.map((article) => (

              <article
                key={article.slug}
                className="group overflow-hidden rounded-lg border border-[#DFDDD7] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(7,59,56,0.10)]"
              >

                {/* IMAGE */}

                <div className="relative h-[225px] overflow-hidden">

                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>

                {/* CONTENT */}

                <div className="p-6">

                  <div className="flex items-center gap-3">

                    <span className="text-[8px] font-bold tracking-[0.15em] text-[#D49E47]">
                      {article.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#D49E47]" />

                    <span className="text-[8px] tracking-[0.12em] text-gray-400">
                      {article.date}
                    </span>

                  </div>

                  <h3 className="mt-4 min-h-[55px] font-display text-[25px] leading-[1] tracking-[-0.02em] text-[#103F3A]">
                    {article.title}
                  </h3>

                  <p className="mt-4 min-h-[60px] text-[11px] leading-5 text-gray-500">
                    {article.description}
                  </p>

                  <Link
                    to={`/blog/${article.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.17em] text-[#D49E47] transition hover:text-[#103F3A]"
                  >
                    Read Article
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FROM THE CLINIC
      ===================================================== */}

      <section className="bg-white px-6 py-16 md:px-10 lg:px-12">

        <div className="mx-auto max-w-[1260px]">

          <div className="grid overflow-hidden rounded-xl bg-[#073B38] lg:grid-cols-[0.95fr_1.05fr]">

            {/* CONTENT */}

            <div className="flex flex-col justify-center px-8 py-12 md:px-12 lg:px-14">

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-6 bg-[#D49E47]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D49E47]">
                  From The Clinic
                </span>

              </div>

              <h2 className="mt-6 font-display text-[42px] leading-[0.95] tracking-[-0.035em] text-white md:text-[50px]">

                Better understanding

                <br />

                leads to better{" "}

                <span className="text-[#D49E47]">
                  care.
                </span>

              </h2>

              <div className="mt-6 h-px w-10 bg-[#D49E47]" />

              <p className="mt-6 max-w-[450px] text-[12px] leading-6 text-white/55">
                Our insights are written to help you understand your
                condition, explore your options and make confident
                decisions about your health.
              </p>

            </div>

            {/* IMAGE */}

            <div className="relative h-[340px] overflow-hidden lg:h-[390px]">

              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=85"
                alt="Orthopedic consultation"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          EXPLORE BY TOPIC
      ===================================================== */}

      <section className="bg-white px-6 pb-20 md:px-10 lg:px-12">

        <div className="mx-auto max-w-[1260px]">

          <div className="mb-8 text-center">

            <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#D49E47]">
              Explore By Topic
            </span>

          </div>

          <div className="grid border-l border-t border-[#DDD9D1] md:grid-cols-2 lg:grid-cols-4">

            {TOPICS.map((topic) => (

              <div
                key={topic.number}
                className="group relative border-b border-r border-[#DDD9D1] bg-white p-6 transition hover:bg-[#F6F3EE]"
              >

                <div className="flex items-start justify-between">

                  <span className="font-display text-[28px] text-[#D49E47]">
                    {topic.number}
                  </span>

                  <span className="text-xl text-[#103F3A] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

                <h3 className="mt-5 text-[10px] font-bold tracking-[0.15em] text-[#103F3A]">
                  {topic.title}
                </h3>

                <p className="mt-3 text-[10px] leading-5 text-gray-500">
                  {topic.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

     
    </main>
  );
}

export default Blog;