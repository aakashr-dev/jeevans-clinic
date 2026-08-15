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
            className="inline-flex h-12 min-h-[48px] items-center justify-center rounded-md bg-gold px-8 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-all duration-300 hover:bg-teal hover:shadow-xl hover:-translate-y-0.5 mt-8"
          >
            Book Appointment
          </Link>

        </div>

        {/* IMAGE */}

        <div className="overflow-hidden rounded-xl">

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