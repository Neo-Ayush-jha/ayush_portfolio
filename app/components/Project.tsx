import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Hospital from "@/public/proj/hos.png";
import School from "@/public/proj/school.png";
import Microcourses from "@/public/proj/microcourses.png";
import Game from "@/public/proj/game.png";
import Youtube from "@/public/proj/youtube.png";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
function Project() {
  return (
    <section className="max-w-container mx-auto lgl:px-20 py-24" id="project">
      <SectionTitle title="Some Things I have Build" title_no="05" />
      {/* Course management system LMS */}
      <div className="w-full flex flex-col items-center jsutify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <Link
            href="https://microcourses-frontend.vercel.app/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group "
          >
            <div>
              <Image
                src={Microcourses}
                alt="LMS"
                className="w-full h-full object-contain rounded-md "
              />
            </div>
          </Link>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">
              MicroCourses |{" "}
              <span className="text-textGreen">| Web Application</span>
            </h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-left">
              <span className="text-textGreen">
                MicroCourses: Full-Stack LMS Engineered for Scale.
              </span>{" "}
              I designed and implemented MicroCourses, a robust Mini LMS, to
              showcase my full-stack expertise on complex, production-ready
              systems. The application is built using Next.js and React.js with
              a sleek MUI interface, and its backend is defined by a resilient
              REST API. This API is engineered for demanding requirements like
              enforced Rate-Limits (60 req/min/user) , Idempotency for all
              creation requests , and precise Pagination. It successfully
              handles critical e-learning workflows, including multi-role
              management
              <span className="text-textGreen">(Learner, Creator, Admin)</span>,
              course lifecycle control , and the secure issuance of certificates
              with a unique serial/hash
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Next.js</li>
              <li>Tailwind css</li>
              <li>js</li>
              <li>Django</li>
              <li>Postgresql</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <Link
                className="hover:text-textGreen duration-300"
                target="_blank"
                href="https://github.com/Neo-Ayush-jha/microcourses-frontend"
              >
                <TbBrandGithub />
              </Link>
              <Link
                className="hover:text-red-300 text-red-700 duration-300 "
                target="_blank"
                href="https://github.com/Neo-Ayush-jha/microcourses-frontend"
              >
                <AiOutlineYoutube />
              </Link>
              <Link
                className="hover:text-textGreen duration-300 "
                target="_blank"
                href="https://microcourses-frontend.vercel.app/"
              >
                <RxOpenInNewWindow />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* School management system SMS*/}
      <div className="w-full flex flex-col items-center jsutify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <Link
            href="https://github.com/Neo-Ayush-jha/school_Management_System-node.js_express_mongoose_ejs"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group "
          >
            <div>
              <Image
                src={School}
                alt="Django hospital"
                className="w-full h-full object-contain rounded-md "
              />
            </div>
          </Link>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-right xl:-mr-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">
              GuruKul-MahaVidiyaly|{" "}
              <span className="text-textGreen">| Web Application</span>
            </h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-left">
              <span className="text-textGreen">Gurukul-Mahavidyalay:</span>{" "}
              Comprehensive School Management System. This is a robust School
              Management System built on the Node.js ecosystem, utilizing
              Express for the back-end framework, Mongoose for data modeling,
              and EJS for dynamic templating. The platform centralizes critical
              school administrative tasks, efficiently managing student data,
              academic records, and financial operations. Its core
              functionalities—including automated student attendance, class-wise
              subject organization, mark tracking, fee collection, and teacher
              monthly salary management—significantly streamline school
              operations and enhance overall institutional efficiency. The
              system supports multiple user roles, such as{" "}
              <span className="text-textGreen">
                Student, Teacher, Reception, and Principal
              </span>{" "}
              to efficiently manage various aspects of administration.
            </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Ejs</li>
              <li>Bootstrap</li>
              <li>css</li>
              <li>js</li>
              <li>Express</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <Link
                className="hover:text-textGreen duration-300"
                target="_blank"
                href="https://github.com/Neo-Ayush-jha/school_Management_System-node.js_express_mongoose_ejs"
              >
                <TbBrandGithub />
              </Link>
              <Link
                className="hover:text-red-300 text-red-700 duration-300 "
                target="_blank"
                href="https://github.com/Neo-Ayush-jha/school_Management_System-node.js_express_mongoose_ejs"
              >
                <AiOutlineYoutube />
              </Link>
              <Link
                className="hover:text-red-300 text-red-700 duration-300 "
                target="_blank"
                href="https://github.com/Neo-Ayush-jha/school_Management_System-node.js_express_mongoose_ejs"
              >
                <RxOpenInNewWindow />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Hospital management system HMS */}
      <div className="w-full flex flex-col items-center jsutify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <Link
            href="https://github.com/Neo-Ayush-jha/hospital_management_system_backend-DJANGO"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group "
          >
            <div>
              <Image
                src={Hospital}
                alt="Django hospital"
                className="w-full h-full object-contain rounded-md "
              />
            </div>
          </Link>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">
              Hospital Management System{" "}
              <span className="text-textGreen">| Web Application</span>
            </h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              The Hospital Management System is a comprehensive web application
              designed to streamline the operations of a hospital or healthcare
              facility. This system provides different panels, including{" "}
              <span className="text-textGreen">
                Patients, Doctors, Pharmacy, Pathology, Counter, Reception and
                Blood Bank
              </span>{" "}
              to efficiently manage various aspects of patient care and
              administration.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>Bootstrap</li>
              <li>js</li>
              <li>SQLite</li>
              <li>Python</li>
              <li>Django</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <Link
                className="hover:text-textGreen duration-300"
                target="_blank"
                href="https://github.com/Neo-Ayush-jha/hospital_management_system_backend-DJANGO"
              >
                <TbBrandGithub />
              </Link>
              <Link
                className="hover:text-red-300 text-red-300 duration-300"
                target="_blank"
                href="https://github.com/Neo-Ayush-jha/hospital_management_system_backend-DJANGO"
              >
                <AiOutlineYoutube />
              </Link>
              <Link
                className="hover:text-red-300 text-red-300 duration-300"
                target="_blank"
                href="https://github.com/Neo-Ayush-jha/hospital_management_system_backend-DJANGO"
              >
                <RxOpenInNewWindow />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center jsutify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <Link
            href="https://neo-games.vercel.app/"
            target="_blank"
            className="w-full xl:w-1/2 relative group "
          >
            <div>
              <Image
                src={Game}
                alt="Game"
                style={{ height: "530px" }}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          </Link>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-right xl:-mr-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">
              AI NyayDetect{" "}
              <span className="text-textGreen">| Web Application</span>
            </h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-left">
              <span className="text-textGreen">AI Mystery Game:</span> An
              immersive open-world web game built with{" "}
              <span className="text-textGreen">React.js</span> for the frontend
              and <span className="text-textGreen">Django</span> for the
              backend. The platform leverages{" "}
              <span className="text-textGreen">AI-driven storytelling</span> to
              create dynamic mysteries and interactive gameplay. Key features
              include{" "}
              <span className="text-textGreen">real-time clue discovery</span>,{" "}
              <span className="text-textGreen">character interactions</span>,{" "}
              <span className="text-textGreen">quest tracking</span>, and{" "}
              <span className="text-textGreen">
                decision-based story outcomes
              </span>
              , offering players a deeply engaging and personalized gaming
              experience. The system also integrates{" "}
              <span className="text-textGreen">TanStack React Query</span> for
              efficient data fetching and smooth gameplay.
            </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React.js</li>
              <li>Tailwind.cdd</li>
              <li>TanStack React Query</li>
              <li>Django</li>
              <li>Gemini API</li>
              <li>Postgresql</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <Link
                className="hover:text-textGreen duration-300"
                target="_blank"
                href="https://github.com/Neo-Ayush-jha/NyayDetect"
              >
                <TbBrandGithub />
              </Link>
              <Link
                className="hover:text-red-300 text-red-700 duration-300 "
                target="_blank"
                href=""
              >
                <AiOutlineYoutube />
              </Link>
              <Link
                className="hover:text-textGreen duration-300 "
                target="_blank"
                href="https://neo-games.vercel.app/"
              >
                <RxOpenInNewWindow />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Youtube */}
      <div className="w-full flex flex-col items-center jsutify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <Link
            href="https://my-you-tube-ftlkgbh6h-neo-ayush-jha.vercel.app/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group "
          >
            <div>
              <Image
                src={Youtube}
                alt="Django hospital"
                className="w-full h-full object-contain rounded-md "
              />
            </div>
          </Link>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">
              MY-YOUTUBE{" "}
              <span className="text-textGreen">| Web Application</span>
            </h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Create a YouTube-like web application using React and Tailwind
              CSS. This clone lets users watch, upload, and comment on videos,
              with content recommendations powered by the RapidAPI service.
              Features include user authentication, video uploads,
              subscriptions, trending videos, search functionality, and a dark
              mode toggle. Key technologies used are React for the UI, Tailwind
              CSS for styling, RapidAPI for video data, and Firebase/Auth0 for
              authentication. The project emphasizes a responsive, polished
              design and user-friendly experience.
            </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>Tailwind.js</li>
              <li>React.js</li>
              <li>RapidAPI</li>
              <li>Django</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <Link
                className="hover:text-textGreen duration-300"
                target="_blank"
                href="https://github.com/Neo-Ayush-jha/My_YouTube"
              >
                <TbBrandGithub />
              </Link>
              <Link
                className="hover:text-red-300 text-red-300 duration-300"
                target="_blank"
                href="https://my-you-tube-ftlkgbh6h-neo-ayush-jha.vercel.app/"
              >
                <AiOutlineYoutube />
              </Link>
              <Link
                className="hover:text-textGreen duration-300"
                target="_blank"
                href="https://my-you-tube-ftlkgbh6h-neo-ayush-jha.vercel.app/"
              >
                <RxOpenInNewWindow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
