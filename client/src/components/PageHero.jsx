import { Link } from "react-router-dom";

function PageHero({
  eyebrow,
  title,
  description,
  image,
}) {
  return (
    <section className="border-b border-gray-100 bg-[#FAFAF8]">

      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:px-12">

        {/* CONTENT */}

        <div>

          <p className="eyebrow">
            {eyebrow}
          </p>

          <h1 className="font-display text-5xl leading-[1.05] text-teal md:text-7xl">
            {title}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
            {description}
          </p>

          <Link
            to="/appointment"
            className="btn-primary mt-8"
          >
            Book a Consultation
          </Link>

        </div>

        {/* IMAGE */}

        <div className="overflow-hidden rounded-[32px]">

          <img
            src={image}
            alt={title}
            className="aspect-[4/3] w-full object-cover"
          />

        </div>

      </div>

    </section>
  );
}

export default PageHero;