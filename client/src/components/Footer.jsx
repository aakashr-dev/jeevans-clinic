import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-teal text-white">

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 lg:px-12">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}

          <div className="lg:col-span-2">

            <h2 className="font-display text-3xl">
              Dr. Santhosh Jacob
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
              Advanced orthopedic, sports medicine and regenerative
              care focused on helping patients move better and live
              stronger.
            </p>

          </div>

          {/* LINKS */}

          <div>

            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">

              <Link to="/">
                Home
              </Link>

              <Link to="/about/doctor">
                About
              </Link>

              <Link to="/about/team">
                Our Team
              </Link>

              <Link to="/conditions/knee">
                Conditions
              </Link>

              <Link to="/blog">
                Insights
              </Link>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/60">

              <p>
                T. Nagar, Chennai
              </p>

              <p>
                +91 XXXXX XXXXX
              </p>

              <p>
                info@example.com
              </p>

            </div>

          </div>

        </div>

        <div className="my-10 h-px bg-white/10" />

        <div className="flex flex-col justify-between gap-4 text-xs text-white/40 md:flex-row">

          <p>
            © {new Date().getFullYear()} Dr. Santhosh Jacob.
            All Rights Reserved.
          </p>

          <p>
            Orthopedics · Sports Medicine · Spine Care
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;