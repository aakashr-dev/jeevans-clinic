import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-teal-dark text-white">
      {/* PRE-FOOTER CTA */}
      <div className="border-b border-white/10 bg-teal px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Ready to move better?</h2>
            <p className="mt-3 text-white/70">Schedule a consultation and take the first step towards recovery.</p>
          </div>
          <Link
            to="/contact"
            className="group flex h-14 items-center justify-center gap-3 rounded-full bg-gold px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-teal"
          >
            Book Appointment
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-12">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block font-display text-3xl">
              Dr. Santhosh Jacob
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Advanced orthopedic, sports medicine and regenerative care focused on helping patients move better and live stronger. Excellence in every step of your recovery journey.
            </p>
            {/* SOCIAL ICONS */}
            <div className="mt-8 flex gap-4">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-gold hover:text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-gold hover:text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-gold hover:text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-display text-lg tracking-wide text-gold">
              Quick Links
            </h3>
            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <Link to="/" className="w-fit transition hover:translate-x-1 hover:text-white">Home</Link>
              <Link to="/about/doctor" className="w-fit transition hover:translate-x-1 hover:text-white">About Doctor</Link>
              <Link to="/about/team" className="w-fit transition hover:translate-x-1 hover:text-white">Our Team</Link>
              <Link to="/blog" className="w-fit transition hover:translate-x-1 hover:text-white">Insights & Blog</Link>
              <Link to="/contact" className="w-fit transition hover:translate-x-1 hover:text-white">Contact Us</Link>
            </div>
          </div>

          {/* SPECIALTIES */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg tracking-wide text-gold">
              Specialties
            </h3>
            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <Link to="/conditions/knee" className="w-fit transition hover:translate-x-1 hover:text-white">Orthopedics</Link>
              <Link to="/conditions/knee" className="w-fit transition hover:translate-x-1 hover:text-white">Sports Medicine</Link>
              <Link to="/conditions/knee" className="w-fit transition hover:translate-x-1 hover:text-white">Spine Care</Link>
              <Link to="/conditions/knee" className="w-fit transition hover:translate-x-1 hover:text-white">Physiotherapy</Link>
              <Link to="/conditions/knee" className="w-fit transition hover:translate-x-1 hover:text-white">Regenerative Care</Link>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg tracking-wide text-gold">
              Get in Touch
            </h3>
            <div className="mt-6 space-y-5 text-sm text-white">
              <div className="flex items-start gap-4">
                <svg className="mt-0.5 shrink-0 text-gold" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <p className="text-white/60">123 Medical Center Drive,<br/>T. Nagar, Chennai 600017</p>
              </div>
              <div className="flex items-center gap-4">
                <svg className="shrink-0 text-gold" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <p className="text-white/60">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-4">
                <svg className="shrink-0 text-gold" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <p className="text-white/60">info@drsanthoshjacob.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-[11px] text-white/40 md:flex-row">
            <p>
              © {new Date().getFullYear()} Dr. Santhosh Jacob. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/" className="transition hover:text-white">Privacy Policy</Link>
              <Link to="/" className="transition hover:text-white">Terms of Service</Link>
              <Link to="/" className="transition hover:text-white">Patient Portal</Link>
            </div>
          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;