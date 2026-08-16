import { Link, useParams } from "react-router-dom";

const BLOG_DATA = {
  "understanding-joint-pain": {
    category: "Orthopedics",
    title: "Understanding Joint Pain",
    image: "/images/blog-01.jpg",
    intro:
      "Joint pain can affect everyday movement, exercise and quality of life. Understanding the possible causes can help you make informed decisions about your health.",
    sections: [
      {
        heading: "Why does joint pain happen?",
        text:
          "Joint pain can have many causes, including injury, overuse, inflammation, age-related changes and conditions affecting the surrounding muscles, ligaments and cartilage. The right approach begins with understanding what is causing the symptoms.",
      },
      {
        heading: "When should you seek help?",
        text:
          "Persistent pain, swelling, restricted movement or symptoms that interfere with everyday activities may warrant a professional evaluation. Early assessment can help identify the underlying problem and guide an appropriate treatment plan.",
      },
      {
        heading: "Treatment depends on the cause",
        text:
          "Treatment is not the same for everyone. Depending on the condition, care may include activity modification, rehabilitation, medication, injections or surgical treatment when clinically appropriate.",
      },
    ],
  },

  "when-to-see-an-orthopedic-surgeon": {
    category: "Patient Guide",
    title: "When Should You See an Orthopedic Surgeon?",
    image: "/images/blog-02.jpg",
    intro:
      "Not every ache requires specialist care, but persistent pain or difficulty moving can be a sign that an orthopedic assessment may be useful.",
    sections: [
      {
        heading: "Persistent pain",
        text:
          "Pain that continues despite rest or basic self-care may need further evaluation. A specialist can help determine whether the symptoms are related to a joint, bone, muscle, ligament or another structure.",
      },
      {
        heading: "Movement limitations",
        text:
          "Difficulty walking, climbing stairs, lifting objects, exercising or performing everyday activities can indicate that the underlying condition deserves attention.",
      },
      {
        heading: "Sports and activity-related injuries",
        text:
          "Athletes and active individuals may benefit from specialist assessment when an injury affects performance, stability or the ability to return safely to activity.",
      },
    ],
  },

  "returning-to-an-active-lifestyle": {
    category: "Sports Medicine",
    title: "Returning to an Active Lifestyle",
    image: "/images/blog-03.jpg",
    intro:
      "Returning to exercise after an injury requires patience, appropriate progression and attention to how the body responds.",
    sections: [
      {
        heading: "Start with recovery",
        text:
          "Before returning to demanding activity, it is important to understand the injury and allow the body appropriate time to recover.",
      },
      {
        heading: "Progress gradually",
        text:
          "A gradual increase in activity can help the body adapt. Strength, mobility, balance and movement quality can all play an important role in a safe return.",
      },
      {
        heading: "Listen to your body",
        text:
          "Persistent pain, swelling or instability should not be ignored. If symptoms continue, professional evaluation may help identify what needs attention before increasing activity further.",
      },
    ],
  },
};

function BlogDetail() {
  const { slug } = useParams();

  const blog = BLOG_DATA[slug];

  if (!blog) {
    return (
      <main className="min-h-[70vh] bg-white px-6 py-24">

        <div className="container-custom text-center">

          <p className="eyebrow justify-center">
            Article Not Found
          </p>

          <h1 className="mt-4 font-display text-5xl text-teal">
            We couldn&apos;t find that article.
          </h1>

          <Link
            to="/blog"
            className="btn-primary mt-8"
          >
            Back to Insights
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="bg-white">

      {/* ARTICLE HERO */}

      <section className="bg-[#FAFAF8]">

        <div className="container-custom py-16 md:py-24">

          <Link
            to="/blog"
            className="text-sm font-semibold text-teal hover:text-gold"
          >
            ← Back to Insights
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">

            <div>

              <p className="eyebrow">
                {blog.category}
              </p>

              <h1 className="mt-4 font-display text-5xl leading-[1.05] text-teal md:text-7xl">
                {blog.title}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
                {blog.intro}
              </p>

            </div>

            <div className="overflow-hidden rounded-[32px]">

              <img
                src={blog.image}
                alt={blog.title}
                className="aspect-[4/3] w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ARTICLE */}

      <article className="section">

        <div className="mx-auto max-w-3xl px-6">

          {blog.sections.map((section, index) => (
            <section
              key={section.heading}
              className={`${index !== 0 ? "mt-14" : ""}`}
            >

              <span className="text-xs font-bold tracking-[0.2em] text-gold">
                0{index + 1}
              </span>

              <h2 className="mt-4 font-display text-3xl text-teal md:text-4xl">
                {section.heading}
              </h2>

              <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">
                {section.text}
              </p>

            </section>
          ))}

          {/* DISCLAIMER */}

          <div className="mt-16 rounded-2xl border border-gray-200 bg-[#FAFAF8] p-6">

            <p className="text-sm leading-7 text-gray-500">
              This article is intended for general educational
              information and should not be considered a substitute
              for individual medical evaluation or professional advice.
            </p>

          </div>

          <div className="mt-12 text-center">

            <Link
              to="/appointment"
              className="btn-primary"
            >
              Book a Consultation
            </Link>

          </div>

        </div>

      </article>

    </main>
  );
}

export default BlogDetail;