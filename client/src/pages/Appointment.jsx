import { useState } from "react";
import axios from "axios";

const TREATMENTS = [
  "Knee",
  "Shoulder",
  "Spine",
  "Hip",
  "Foot",
  "Ankle",
  "Neck",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  preferredDate: "",
  treatment: "Knee",
  centre: "Be Well Centre for Orthopedics, Sports Medicine & Spine",
  message: "",
};

function Appointment() {
  const [form, setForm] = useState(initialForm);

  const [status, setStatus] = useState({
    state: "idle",
    message: "",
  });

  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      state: "loading",
      message: "",
    });

    try {
      await axios.post(
        `${backendUrl}/api/appointments`,
        form
      );

      setStatus({
        state: "success",
        message:
          "Your appointment request has been sent. We will contact you shortly.",
      });

      setForm(initialForm);

    } catch (error) {

      const errorMessage =
        error.response?.data?.error ||
        "Something went wrong. Please try again.";

      setStatus({
        state: "error",
        message: errorMessage,
      });
    }
  };

  return (
    <main className="bg-white">

      {/* HEADER */}

      <section className="border-b border-gray-100 bg-[#FAFAF8] py-20 md:py-24">

        <div className="container-custom">

          <p className="eyebrow">
            Appointments
          </p>

          <h1 className="font-display text-5xl leading-tight text-teal md:text-7xl">
            Book a Consultation
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            Tell us a little about yourself and the care you are
            looking for. Our team will get in touch with you.
          </p>

        </div>

      </section>

      {/* FORM AREA */}

      <section className="section">

        <div className="container-custom grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

          {/* LEFT INFO */}

          <div>

            <p className="eyebrow">
              Let&apos;s Get Started
            </p>

            <h2 className="section-heading">
              Your next step
              <br />
              starts <span>here.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-gray-600">
              Share your details and preferred appointment
              information. Our team will review your request and
              contact you for confirmation.
            </p>

            <div className="mt-10 space-y-6 border-t border-gray-200 pt-7">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                  Centre
                </p>

                <p className="mt-2 text-sm font-medium leading-6 text-teal">
                  Be Well Centre for Orthopedics,
                  Sports Medicine & Spine
                </p>

              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                  Location
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  T. Nagar, Chennai
                </p>

              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                  Appointment
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  By prior consultation booking
                </p>

              </div>

            </div>

          </div>

          {/* FORM */}

          <div className="rounded-[30px] border border-gray-200 bg-white p-5 sm:p-7 md:p-9 shadow-sm">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME + EMAIL */}

              <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="form-label"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="form-input"
                  />

                </div>

                <div>

                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="form-input"
                  />

                </div>

              </div>

              {/* PHONE + DATE */}

              <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label
                    htmlFor="phone"
                    className="form-label"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="form-input"
                  />

                </div>

                <div>

                  <label
                    htmlFor="preferredDate"
                    className="form-label"
                  >
                    Preferred Date
                  </label>

                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={form.preferredDate}
                    onChange={handleChange}
                    className="form-input"
                  />

                </div>

              </div>

              {/* TREATMENT + CENTRE */}

              <div className="grid gap-5 md:grid-cols-2">

                <div>

                  <label
                    htmlFor="treatment"
                    className="form-label"
                  >
                    Area of Concern
                  </label>

                  <select
                    id="treatment"
                    name="treatment"
                    value={form.treatment}
                    onChange={handleChange}
                    className="form-input"
                  >
                    {TREATMENTS.map((treatment) => (
                      <option
                        key={treatment}
                        value={treatment}
                      >
                        {treatment}
                      </option>
                    ))}
                  </select>

                </div>

                <div>

                  <label
                    htmlFor="centre"
                    className="form-label"
                  >
                    Preferred Centre
                  </label>

                  <select
                    id="centre"
                    name="centre"
                    value={form.centre}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option>
                      Be Well Centre for Orthopedics,
                      Sports Medicine & Spine
                    </option>

                    <option>
                      Orthopedic & Sports Medicine Centre
                    </option>

                  </select>

                </div>

              </div>

              {/* MESSAGE */}

              <div>

                <label
                  htmlFor="message"
                  className="form-label"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly about your concern..."
                  rows="5"
                  className="form-input resize-none"
                />

              </div>

              {/* STATUS */}

              {status.message && (
                <div
                  className={`rounded-xl px-4 py-3 text-sm ${
                    status.state === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={status.state === "loading"}
                className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.state === "loading"
                  ? "Sending Request..."
                  : "Request Appointment"}
              </button>

              <p className="text-center text-xs leading-5 text-gray-400">
                By submitting this form, you are requesting an
                appointment. Our team will contact you to confirm
                availability.
              </p>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Appointment;