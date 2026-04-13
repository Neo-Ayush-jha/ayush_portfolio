import React from "react";
import { motion } from "framer-motion";

function Mindstein() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MINDSTEIN <span className="text-textGreen tracking-wide">SOFTWARE</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        JANUARY, 2026 <span className="text-textGreen tracking-wide">- </span>
        PRESENT
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-sm">
        <li className="flex flex-col lgl:flex-row text-base gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm">
            <li>
              <span className="text-textGreen mt-1">
                PHP-First Backend Development:
              </span>{" "}
              Built and maintained core backend features in PHP, designing
              reliable business logic and scalable server-side modules for
              production web applications.
            </li>
          </ul>
        </li>
        <li className="flex flex-col lgl:flex-row text-base gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm">
            <li>
              <span className="text-textGreen mt-1">
                Full-Stack Feature Delivery:
              </span>{" "}
              Delivered end-to-end features by combining PHP backend services
              with React.js frontend components, ensuring smooth and consistent
              user experiences.
            </li>
          </ul>
        </li>
        <li className="flex flex-col lgl:flex-row text-base gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm">
            <li>
              <span className="text-textGreen mt-1">
                API Integration & Debugging:
              </span>{" "}
              Integrated and debugged REST APIs across PHP and JavaScript
              modules, improving data flow and reducing communication issues
              between frontend and backend layers.
            </li>
          </ul>
        </li>
        <li className="flex flex-col lgl:flex-row text-base gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm">
            <li>
              <span className="text-textGreen mt-1">
                Authentication, Security & Databases:
              </span>{" "}
              Strengthened application security through robust authentication
              flows and optimized SQL queries for faster, more dependable
              backend performance.
            </li>
          </ul>
        </li>
        <li className="flex flex-col lgl:flex-row text-base gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm">
            <li>
              <span className="text-textGreen mt-1">
                Agile Remote Engineering:
              </span>{" "}
              Contributed actively to remote sprint planning, code reviews, and
              collaborative delivery cycles to ship stable, production-ready
              releases.
            </li>
          </ul>
        </li>
      </ul>
    </motion.div>
  );
}

export default Mindstein;
