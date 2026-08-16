import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";

import Home from "./pages/Home.jsx";

// About
import Doctor from "./pages/About/Doctor.jsx";
import Team from "./pages/About/Team.jsx";

// Conditions
import Neck from "./pages/Conditions/Neck.jsx";
import Knee from "./pages/Conditions/Knee.jsx";
import Shoulder from "./pages/Conditions/Shoulder.jsx";
import Spine from "./pages/Conditions/Spine.jsx";
import Hip from "./pages/Conditions/Hip.jsx";
import Ankle from "./pages/Conditions/Ankle.jsx";
import Foot from "./pages/Conditions/Foot.jsx";

// Programs
import Centers from "./pages/Programs/Centers.jsx";

// Blog
import Blog from "./pages/Blog/Blog.jsx";
import BlogDetail from "./pages/Blog/BlogDetail.jsx";

// Appointment
import Appointment from "./pages/Appointment.jsx";


// =========================================================
// 404 PAGE
// =========================================================

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
      <div className="text-center">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
          404
        </p>

        <h1 className="mt-4 font-display text-5xl text-teal md:text-7xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-500">
          The page you are looking for does not exist or may
          have been moved.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex rounded-md bg-teal px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-gold"
        >
          Back to Home
        </a>

      </div>
    </main>
  );
}


// =========================================================
// APP
// =========================================================

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-teal font-body">
        <ScrollToTop />

        {/* NAVBAR */}

        <Navbar />


        {/* PAGE ROUTES */}

        <main>
          <Routes>

            {/* ================================================
                HOME
            ================================================ */}

            <Route
              path="/"
              element={<Home />}
            />


            {/* ================================================
                ABOUT
            ================================================ */}

            <Route
              path="/about/doctor"
              element={<Doctor />}
            />

            <Route
              path="/about/team"
              element={<Team />}
            />


            {/* ================================================
                CONDITIONS
            ================================================ */}

            <Route
              path="/conditions/neck"
              element={<Neck />}
            />

            <Route
              path="/conditions/knee"
              element={<Knee />}
            />

            <Route
              path="/conditions/shoulder"
              element={<Shoulder />}
            />

            <Route
              path="/conditions/spine"
              element={<Spine />}
            />

            <Route
              path="/conditions/hip"
              element={<Hip />}
            />

            <Route
              path="/conditions/ankle"
              element={<Ankle />}
            />

            <Route
              path="/conditions/foot"
              element={<Foot />}
            />


            {/* ================================================
                PROGRAMS
            ================================================ */}

            <Route
              path="/programs/centers"
              element={<Centers />}
            />


            {/* ================================================
                BLOG
            ================================================ */}

            <Route
              path="/blog"
              element={<Blog />}
            />

            <Route
              path="/blog/:slug"
              element={<BlogDetail />}
            />


            {/* ================================================
                APPOINTMENT
            ================================================ */}

            <Route
              path="/appointment"
              element={<Appointment />}
            />


            {/* ================================================
                404
            ================================================ */}

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>
        </main>


        {/* FOOTER */}

        <Footer />

      </div>
    </SmoothScroll>
  );
}

export default App;