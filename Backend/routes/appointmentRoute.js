import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Schema and model
const appointmentSchema = new mongoose.Schema({
  name: String,
  doctorId: String,
  doctorName: String,
  date: String,
  time: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// POST /api/appointments
router.post("/", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (err) {
    console.error("Error saving appointment:", err.message);
    res.status(500).json({ error: "Failed to book appointment." });
  }
});

// ✅ NEW: GET /api/appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    console.error("Error fetching appointments:", err.message);
    res.status(500).json({ error: "Failed to fetch appointments." });
  }
});

export default router;
