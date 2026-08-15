const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// @route   GET /api/health
// @desc    Simple health check
router.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Dr Santhosh Jacob API is running" });
});

// @route   POST /api/appointments
// @desc    Create a new appointment booking
router.post("/appointments", async (req, res) => {
  try {
    const { name, email, phone, preferredDate, treatment, centre, message } =
      req.body;

    if (!name || !email || !phone || !preferredDate || !treatment) {
      return res.status(400).json({
        success: false,
        error: "Please fill all required fields.",
      });
    }

    const appointment = await Appointment.create({
      name,
      email,
      phone,
      preferredDate,
      treatment,
      centre,
      message,
    });

    res.status(201).json({ success: true, data: appointment });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, error: messages.join(", ") });
    }
    console.error(err);
    res.status(500).json({ success: false, error: "Server error, please try again later." });
  }
});

// @route   GET /api/appointments
// @desc    Get all appointments (admin use)
router.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json({ success: true, count: appointments.length, data: appointments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// @route   GET /api/appointments/:id
router.get("/appointments/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ success: false, error: "Appointment not found" });
    }
    res.json({ success: true, data: appointment });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// @route   PUT /api/appointments/:id
// @desc    Update appointment status
router.put("/appointments/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!appointment) {
      return res.status(404).json({ success: false, error: "Appointment not found" });
    }
    res.json({ success: true, data: appointment });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// @route   DELETE /api/appointments/:id
router.delete("/appointments/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).json({ success: false, error: "Appointment not found" });
    }
    res.json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
