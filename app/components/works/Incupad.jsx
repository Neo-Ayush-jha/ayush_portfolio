import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

function Incupad() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        INCUPAD INDIA
        <span className="text-textGreen tracking-wide">Pvt. Ltd. </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        MARCH, 2024 <span className="text-textGreen tracking-wide">- </span>
        NOVEMBER , 2024
      </p>
      <ul className="ml-4 mt-6 flex flex-col gap-3">
        <li className=" flex-col lgl:flex-row text-base flex gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm">
            <li>
              <span className="text-textGreen mt-1 ">Frontend Developer</span>
              Spearheaded frontend development using React.js and Tailwind CSS
              for an AI-based chatbot project.
            </li>
            <li>
              Integrated Firebase authentication and Google services to enhance
              functionality and security.
            </li>
          </ul>
        </li>
        <li className="flex flex-col lgl:flex-row text-base  gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm">
            <li>
              <span className="text-textGreen mt-1 ">
                API Integration and Development:{" "}
              </span>
              Played a pivotal role in API integration, connecting frontend
              components to backend services seamlessly.
            </li>
            <li>
              {" "}
              Developed numerous APIs using Django, facilitating data exchange
              and enhancing the functionality of the chatbot across various chat
              services.
            </li>
            <li>
              {" "}
              Ensured smooth communication between frontend and backend systems,
              optimizing performance and user interactions.
            </li>
          </ul>
        </li>
        <li className="flex flex-col lgl:flex-row text-base flex gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm">
            <li>
              {" "}
              <span className="text-textGreen mt-1 ">
                Cross-Functional Collaboration
              </span>
              Collaborated closely with backend developers, AI specialists, and
              project managers to align frontend requirements with overall
              project objectives.
            </li>
            <li>
              Acted as a bridge between frontend and backend teams, facilitating
              efficient communication and problem-solving to meet project
              milestones and deadlines.
            </li>
          </ul>
        </li>
        <li className="flex flex-col lgl:flex-row text-base flex gap-2 text-textDark">
          <ul className="ml-4 mt-2 list-disc text-sm">
            <li>
              {" "}
              <span className="text-textGreen mt-1 ">
                Innovative Problem Solver{" "}
              </span>
              Identified and addressed technical challenges in real-time,
              employing creative solutions to ensure the reliability and
              scalability of the Tau Chatbot.
            </li>
            <li>
              Demonstrated versatility in adapting to evolving project needs,
              proactively implementing improvements and enhancements to optimize
              performance and user satisfaction.
            </li>
          </ul>
        </li>
      </ul>
    </motion.div>
  );
}

export default Incupad;
