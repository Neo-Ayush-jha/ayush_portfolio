import React from "react";
import { motion } from "framer-motion";

function CelebalTech() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        CELEBAL{" "}
        <span className="text-textGreen tracking-wide">TECHNOLOGIES</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        FEBRUARY, 2025 <span className="text-textGreen tracking-wide">- </span>
        AUGUST, 2025
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-sm">
        <li className="flex flex-col lgl:flex-row text-base  gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm ">
            <li>
              <span className="text-textGreen mt-1">
                Node.js & Express.js Development:
              </span>{" "}
              Built scalable backend APIs with Node.js and Express.js,
              implementing CRUD operations and REST services integrated with
              MongoDB and MySQL.
            </li>
            <li>
              Designed modular backend structures to ensure maintainability,
              scalability, and high performance.
            </li>
          </ul>
        </li>
        <li className="flex flex-col lgl:flex-row text-base  gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm ">
            <li>
              <span className="text-textGreen mt-1">
                Authentication & Security:
              </span>{" "}
              Implemented JWT and OAuth 2.0 authentication for secure user
              access, enhancing overall system security.
            </li>
            <li>
              Developed role-based access control to manage different user
              permissions effectively.
            </li>
          </ul>
        </li>
        <li className="flex flex-col lgl:flex-row text-base  gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm ">
            <li>
              <span className="text-textGreen mt-1">
                API Integration & File Handling:
              </span>{" "}
              Integrated third-party APIs like OpenWeather for live data and
              implemented file upload features using Multer middleware.
            </li>
            <li>
              Streamlined backend workflows by combining external services with
              internal APIs for better efficiency.
            </li>
          </ul>
        </li>
        <li className="flex flex-col lgl:flex-row text-base gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm ">
            <li>
              <span className="text-textGreen mt-1">
                Final Project – Appointment Booking System:
              </span>{" "}
              Designed and developed a full-stack Appointment Booking System
              with customer, doctor/barber, and admin dashboards.
            </li>
            <li>
              Implemented features like JWT authentication, email notifications
              via Mailtrap, and feedback management with image uploads.
            </li>
            <li>
              Built frontend with React.js, Vite, Tailwind CSS and backend with
              Node.js, Express.js, and MySQL.
            </li>
          </ul>
        </li>
      </ul>
    </motion.div>
  );
}

export default CelebalTech;
