import React, { useEffect, useState } from "react";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/appointments");
      const data = await res.json();
      setAppointments(data); // assuming it returns an array
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>

      {appointments.length === 0 ? (
        <p className="text-gray-500 mt-4">No appointments booked yet.</p>
      ) : (
        appointments.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
            key={index}
          >
            <div>
              {/* Optionally show doctor image if available */}
              <img className="w-32 bg-indigo-50" src="/default-doc.png" alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.doctorName}</p>
              <p>{item.speciality || "Doctor"}</p>
              <p className="text-zinc-700 font-medium mt-1">Date & Time:</p>
              <p className="text-sm">
                {item.date} | {item.time}
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300">
                Pay Online
              </button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyAppointments;
