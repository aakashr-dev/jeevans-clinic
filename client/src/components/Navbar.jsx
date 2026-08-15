import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// =========================================================
// NAVIGATION DATA
// =========================================================

const ABOUT_LINKS = [
  {
    name: "Doctor",
    path: "/about/doctor",
  },
  {
    name: "Team",
    path: "/about/team",
  },
];

const CONDITION_LINKS = [
  {
    name: "Neck",
    path: "/conditions/neck",
  },
  {
    name: "Knee",
    path: "/conditions/knee",
  },
  {
    name: "Shoulder",
    path: "/conditions/shoulder",
  },
  {
    name: "Spine",
    path: "/conditions/spine",
  },
  {
    name: "Hip",
    path: "/conditions/hip",
  },
  {
    name: "Ankle",
    path: "/conditions/ankle",
  },
  {
    name: "Foot",
    path: "/conditions/foot",
  },
];

const PROGRAM_LINKS = [
  {
    name: "Centers",
    path: "/programs/centers",
  },
];

// =========================================================
// NAVBAR
// =========================================================

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const [mobileConditionsOpen, setMobileConditionsOpen] =
    useState(false);

  const [mobileProgramsOpen, setMobileProgramsOpen] =
    useState(false);

  const location = useLocation();

  // =======================================================
  // SCROLL EFFECT
  // =======================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =======================================================
  // CLOSE MOBILE MENU WHEN ROUTE CHANGES
  // =======================================================

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // =======================================================
  // HELPERS
  // =======================================================

  const isConditionPage =
    location.pathname.startsWith("/conditions/");

  const isAboutPage =
    location.pathname.startsWith("/about/");

  const isProgramPage =
    location.pathname.startsWith("/programs/");

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileConditionsOpen(false);
    setMobileProgramsOpen(false);
  };

  // =======================================================
  // NAVBAR
  // =======================================================

  return (
    <>
      <nav
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          border-b
          border-black/[0.05]
          bg-white/95
          backdrop-blur-xl
          transition-all
          duration-500
          ${
            isScrolled
              ? "py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              : "py-4"
          }
        `}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-8 lg:px-12">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="group relative z-[60] flex flex-col"
          >
            <span
              className="
                font-display
                text-[22px]
                font-semibold
                leading-none
                tracking-[-0.035em]
                text-[#10302E]
                transition
                md:text-[24px]
              "
            >
              Jeevan Physiotherapy
            </span>

            <span
              className="
                mt-1
                text-[8.5px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#173F3D]/60
                md:text-[9.5px]
              "
            >
              Orthopedics · Sports Medicine · Spine
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <div className="hidden items-center gap-9 lg:flex">

            {/* HOME */}

            <Link
              to="/"
              className={`
                text-[14px]
                font-medium
                tracking-[-0.01em]
                transition-colors
                ${
                  location.pathname === "/"
                    ? "text-[#D49E47]"
                    : "text-[#173F3D] hover:text-[#D49E47]"
                }
              `}
            >
              Home
            </Link>

            {/* =================================================
                ABOUT DROPDOWN
            ================================================= */}

            <div className="group relative">

              <button
                type="button"
                className={`
                  flex
                  items-center
                  gap-1.5
                  py-5
                  text-[14px]
                  font-medium
                  transition-colors
                  ${
                    isAboutPage
                      ? "text-[#D49E47]"
                      : "text-[#173F3D] hover:text-[#D49E47]"
                  }
                `}
              >
                About

                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="m6 9 6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* ABOUT MENU */}

              <div
                className="
                  pointer-events-none
                  invisible
                  absolute
                  left-1/2
                  top-full
                  w-[220px]
                  -translate-x-1/2
                  translate-y-3
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:pointer-events-auto
                  group-hover:visible
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    p-2
                    shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  "
                >
                  {ABOUT_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="
                        group/item
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3.5
                        text-[13px]
                        font-medium
                        uppercase
                        tracking-[0.08em]
                        text-[#173F3D]
                        transition
                        hover:bg-[#F6F3EE]
                      "
                    >
                      <span>{link.name}</span>

                      <span
                        className="
                          text-gray-300
                          transition
                          group-hover/item:translate-x-1
                          group-hover/item:text-[#D49E47]
                        "
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                CONDITIONS DROPDOWN
            ================================================= */}

            <div className="group relative">

              <button
                type="button"
                className={`
                  flex
                  items-center
                  gap-1.5
                  py-5
                  text-[14px]
                  font-medium
                  transition-colors
                  ${
                    isConditionPage
                      ? "text-[#D49E47]"
                      : "text-[#173F3D] hover:text-[#D49E47]"
                  }
                `}
              >
                Conditions Treated

                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="m6 9 6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* CONDITIONS MENU */}

              <div
                className="
                  pointer-events-none
                  invisible
                  absolute
                  left-1/2
                  top-full
                  w-[270px]
                  -translate-x-1/2
                  translate-y-3
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:pointer-events-auto
                  group-hover:visible
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    p-2
                    shadow-[0_20px_60px_rgba(0,0,0,0.14)]
                  "
                >
                  {CONDITION_LINKS.map((condition) => (
                    <Link
                      key={condition.path}
                      to={condition.path}
                      className="
                        group/item
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-100
                        px-4
                        py-3.5
                        last:border-b-0
                        hover:bg-[#F6F3EE]
                      "
                    >
                      <span
                        className="
                          text-[13px]
                          font-medium
                          uppercase
                          tracking-[0.08em]
                          text-[#173F3D]
                        "
                      >
                        {condition.name}
                      </span>

                      <span
                        className="
                          text-lg
                          text-gray-300
                          transition
                          group-hover/item:translate-x-1
                          group-hover/item:text-[#D49E47]
                        "
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                PROGRAMS
            ================================================= */}

            <div className="group relative">

              <button
                type="button"
                className={`
                  flex
                  items-center
                  gap-1.5
                  py-5
                  text-[14px]
                  font-medium
                  transition-colors
                  ${
                    isProgramPage
                      ? "text-[#D49E47]"
                      : "text-[#173F3D] hover:text-[#D49E47]"
                  }
                `}
              >
                Programs

                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="m6 9 6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className="
                  pointer-events-none
                  invisible
                  absolute
                  left-1/2
                  top-full
                  w-[220px]
                  -translate-x-1/2
                  translate-y-3
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:pointer-events-auto
                  group-hover:visible
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    p-2
                    shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  "
                >
                  {PROGRAM_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="
                        group/item
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3.5
                        text-[13px]
                        font-medium
                        uppercase
                        tracking-[0.08em]
                        text-[#173F3D]
                        transition
                        hover:bg-[#F6F3EE]
                      "
                    >
                      {link.name}

                      <span
                        className="
                          text-gray-300
                          transition
                          group-hover/item:translate-x-1
                          group-hover/item:text-[#D49E47]
                        "
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* BLOG */}

            <Link
              to="/blog"
              className={`
                text-[14px]
                font-medium
                transition-colors
                ${
                  location.pathname.startsWith("/blog")
                    ? "text-[#D49E47]"
                    : "text-[#173F3D] hover:text-[#D49E47]"
                }
              `}
            >
              Blog
            </Link>
          </div>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================= */}

          <div className="hidden items-center gap-6 lg:flex">

            <button
              type="button"
              className="
                text-[14px]
                font-medium
                text-[#173F3D]
                transition
                hover:text-[#D49E47]
              "
            >
              Login
            </button>

            <Link
              to="/appointment"
              className="
                rounded-md
                bg-[#173F3D]
                px-5
                py-2.5
                text-[12px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-white
                transition
                hover:bg-[#D49E47]
              "
            >
              Book Appointment
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className="relative z-[60] p-2 lg:hidden"
            onClick={() =>
              setMobileMenuOpen((prev) => !prev)
            }
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-7 w-7 text-[#10302E]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                className="h-7 w-7 text-[#10302E]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* ===================================================
            MOBILE MENU
        =================================================== */}

        <div
          className={`
            fixed
            inset-0
            z-50
            bg-white
            transition-all
            duration-500
            lg:hidden
            ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-full opacity-0"
            }
          `}
        >
          <div className="h-full overflow-y-auto px-6 pb-10 pt-32">

            {/* HOME */}

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="
                block
                border-b
                border-gray-100
                py-5
                font-display
                text-3xl
                text-[#173F3D]
              "
            >
              Home
            </Link>

            {/* ABOUT */}

            <div className="border-b border-gray-100">

              <button
                type="button"
                onClick={() =>
                  setMobileAboutOpen((prev) => !prev)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-5
                  font-display
                  text-3xl
                  text-[#173F3D]
                "
              >
                About

                <span className="text-xl">
                  {mobileAboutOpen ? "−" : "+"}
                </span>
              </button>

              {mobileAboutOpen && (
                <div className="pb-4 pl-4">

                  {ABOUT_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMobileMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        py-3
                        text-sm
                        uppercase
                        tracking-[0.12em]
                        text-gray-600
                      "
                    >
                      {link.name}

                      <span className="text-[#D49E47]">
                        →
                      </span>
                    </Link>
                  ))}

                </div>
              )}
            </div>

            {/* CONDITIONS */}

            <div className="border-b border-gray-100">

              <button
                type="button"
                onClick={() =>
                  setMobileConditionsOpen((prev) => !prev)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-5
                  font-display
                  text-3xl
                  text-[#173F3D]
                "
              >
                Conditions

                <span className="text-xl">
                  {mobileConditionsOpen ? "−" : "+"}
                </span>
              </button>

              {mobileConditionsOpen && (
                <div className="pb-4 pl-4">

                  {CONDITION_LINKS.map((condition) => (
                    <Link
                      key={condition.path}
                      to={condition.path}
                      onClick={closeMobileMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-50
                        py-3
                        text-sm
                        uppercase
                        tracking-[0.1em]
                        text-gray-600
                        last:border-0
                      "
                    >
                      <span>
                        {condition.name}
                      </span>

                      <span className="text-[#D49E47]">
                        →
                      </span>
                    </Link>
                  ))}

                </div>
              )}
            </div>

            {/* PROGRAMS */}

            <div className="border-b border-gray-100">

              <button
                type="button"
                onClick={() =>
                  setMobileProgramsOpen((prev) => !prev)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-5
                  font-display
                  text-3xl
                  text-[#173F3D]
                "
              >
                Programs

                <span className="text-xl">
                  {mobileProgramsOpen ? "−" : "+"}
                </span>
              </button>

              {mobileProgramsOpen && (
                <div className="pb-4 pl-4">

                  {PROGRAM_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMobileMenu}
                      className="
                        flex
                        items-center
                        justify-between
                        py-3
                        text-sm
                        uppercase
                        tracking-[0.12em]
                        text-gray-600
                      "
                    >
                      {link.name}

                      <span className="text-[#D49E47]">
                        →
                      </span>
                    </Link>
                  ))}

                </div>
              )}
            </div>

            {/* BLOG */}

            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className="
                block
                border-b
                border-gray-100
                py-5
                font-display
                text-3xl
                text-[#173F3D]
              "
            >
              Blog
            </Link>

            {/* ACTIONS */}

            <div className="mt-8 flex flex-col gap-4">

              <button
                type="button"
                className="
                  py-3
                  text-left
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.1em]
                  text-[#173F3D]
                "
              >
                Login
              </button>

              <Link
                to="/appointment"
                onClick={closeMobileMenu}
                className="
                  rounded-md
                  bg-[#173F3D]
                  px-5
                  py-3
                  text-center
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-white
                "
              >
                Book Appointment
              </Link>

            </div>

          </div>
        </div>

      </nav>
    </>
  );
}

export default Navbar;