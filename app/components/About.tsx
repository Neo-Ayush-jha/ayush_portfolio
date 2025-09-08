import React from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import Profile from "@/public/ayush.png";
function About() {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" title_no="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello there, I am{" "}
            <span className="text-textGreen2">Ayush Kumar</span>, a dedicated web
            developer from{" "}
            <span className="text-textGreen2">Muzaffarpur, Bihar</span>, who has
            found his passion in transforming digital ideas into captivating
            online experiences. My journey in programming began with a thirst
            for knowledge and a willingness to embrace challenges as stepping
            stones to growth. Over time, I have developed a strong foundation in{" "}
            <span className="text-textGreen2">full-stack development</span>,
            consistently pushing myself to master deeper concepts and refine my
            coding skills.
          </p>

          <p>
            I completed my{" "}
            <span className="text-textGreen2">
              Bachelor of Computer Applications (BCA)
            </span>{" "}
            from{" "}
            <a
              href="https://purneau.ac.in/"
              target="_blank"
              className="text-textGreen2"
            >
              Purnea University, Bihar
            </a>
            , and I am currently pursuing my{" "}
            <span className="text-textGreen2">
              Master of Computer Applications (MCA)
            </span>{" "}
            at{" "}
            <a
              href="https://www.lpu.in/"
              target="_blank"
              className="text-textGreen2"
            >
              Lovely Professional University
            </a>
            . Alongside my academic journey, I gained hands-on industry
            experience through internships at{" "}
            <a
              href="https://banao.tech/"
              target="_blank"
              className="text-textGreen2"
            >
              Banao Technologies
            </a>
            ,{" "}
            <a
              href="https://celebaltech.com/"
              target="_blank"
              className="text-textGreen2"
            >
              Celebal Technologies
            </a>
            , and Incupad India Pvt. Ltd., where I worked on developing and
            deploying real-world projects, collaborating with teams, and
            delivering scalable solutions under tight deadlines.
          </p>

          <p>
            My early days in programming were shaped by the guidance of a
            remarkable teacher{" "}
            <a
              href="https://www.codewithsadiq.com"
              target="_blank"
              className="text-textGreen2"
            >
              (Code With SadiQ Instructor | Sadique Hussain)
            </a>
            . Their mentorship not only helped me understand the intricacies of
            code but also encouraged me to explore the uncharted territories of
            web development. This foundation fueled my hunger for knowledge and
            gave me the confidence to tackle complex projects with enthusiasm.
          </p>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                src={Profile}
                className="rounded-lg max-h-full object-cover"
                alt="profile pic"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen2/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen2  rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
