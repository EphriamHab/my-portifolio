"use client";
import React from "react";
import "boxicons/css/boxicons.min.css";
import { RiNextjsFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaPython,
  FaReact,
  FaNodeJs,
  FaJava,
  FaBusinessTime,
} from "react-icons/fa";
import { BiBrain, BiGroup, BiConversation } from "react-icons/bi";
import { IoCodeWorking } from "react-icons/io5";
import { SiBasicattentiontoken, SiPersistent } from "react-icons/si";

interface SkillProps {
  skill: string;
  iconClass: React.ReactNode;
  level: string;
}

const Skills: React.FC = () => {
  const technicalSkills: SkillProps[] = [
    { skill: "HTML", iconClass: <FaHtml5 />, level: "Advanced" },
    { skill: "CSS", iconClass: <FaCss3 />, level: "Intermediate" },
    { skill: "JavaScript", iconClass: <FaJsSquare />, level: "Advanced" },
    { skill: "Python", iconClass: <FaPython />, level: "Intermediate" },
    { skill: "React", iconClass: <FaReact />, level: "Advanced" },
    { skill: "Node.js", iconClass: <FaNodeJs />, level: "Advanced" },
    { skill: "Next.js", iconClass: <RiNextjsFill />, level: "Intermediate" },
    { skill: "Java", iconClass: <FaJava />, level: "Advanced" },
  ];

  const professionalSkills: SkillProps[] = [
    { skill: "Creativity", iconClass: <BiBrain />, level: "High" },
    { skill: "Communication", iconClass: <BiConversation />, level: "High" },
    { skill: "Problem Solving", iconClass: <BiBrain />, level: "High" },
    { skill: "Team Work", iconClass: <BiGroup />, level: "High" },
    { skill: "Time management", iconClass: <FaBusinessTime />, level: "High" },
    { skill: "Work ethic", iconClass: <IoCodeWorking />, level: "High" },
    {
      skill: "Attention to detail",
      iconClass: <SiBasicattentiontoken />,
      level: "High",
    },
    { skill: "Adaptability", iconClass: <SiPersistent />, level: "High" },
  ];

  return (
    <section id="skills" className="skills mt-28 py-4 px-4 lg:px-24">
      <h1 className="text-4xl text-center font-bold mb-16">
        My <span className="text-custom-purple">Skills</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {technicalSkills.map((skill) => (
              <SkillCard key={skill.skill} {...skill} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Professional Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {professionalSkills.map((skill) => (
              <SkillCard key={skill.skill} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<SkillProps> = ({ skill, iconClass, level }) => {
  return (
    <div className="shadow-lg border-y-2 rounded-lg p-4 flex flex-col items-center text-center cursor-pointer hover:bg-slate-300 transition duration-300 ease-in-out">
      <div className="text-4xl mb-4 text-purple-600">{iconClass}</div>
      <h3 className="text-lg font-semibold mb-2 text-purple-700">{skill}</h3>
      <span className="text-md font-medium text-gray-600">{level}</span>
    </div>
  );
};

export default Skills;
