"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import {
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaTelegram,
  FaGithub,
} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import TypedText from "./TypedText";

export default function Home() {
  return (
    <section id="home" className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 gap-4 md:gap-8 mx-4 md:mx-24">
        <div className="mt-8 p-4 rounded-lg cursor-pointer space-y-4 transform transition duration-500 hover:scale-105 animate__animated animate__fadeInLeft">
          <h3 className="font-semibold font-serif text-2xl">Hello, It's Me</h3>
          <h1 className="font-bold font-serif text-3xl text-blue-500">
            Ephrem Habtamu
          </h1>
          <h3 className=" flex font-semibold font-serif text-2xl">
            And I'm a
            <span className="ml-2 text-blue-500">
              <TypedText />
            </span>
          </h3>
          <p className="font-semibold font-serif text-lg">
            I'm a web developer with a focus on the MERN stack, but still
            exploring other technologies and frameworks that catch my interest!
            if you're looking for a developer to add to your team, I'd love to
            hear from you!
          </p>
          <div className="flex space-x-4 p-2 ">
            <a
              href="https://github.com/EphriamHab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-8 h-8 text-gray-400" />
            </a>
            <a
              href="https://x.com/EphremHabt70206"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-8 h-8 text-blue-400" />
            </a>
            <a
              href="https://www.instagram.com/ephrem_524"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="w-8 h-8 text-pink-600" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-8 h-8 text-blue-700" />
            </a>
            <a href="ephremhabtamu2015@gmail.com">
              <FaEnvelope className="w-8 h-8 text-red-600" />
            </a>
            <a
              href="https://t.me/epha_24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="w-8 h-8 text-blue-400" />
            </a>
          </div>
          <div className="flex">
            <a
              href="#contact"
              className="bg-custom-purple text-white hover:bg-blue-600 px-8 py-2 rounded-lg shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-8 transform transition duration-500 hover:scale-105 animate__animated animate__fadeInRight">
          <img
            src="pp.jpg"
            alt="profile"
            className="rounded-lg w-64 h-64 md:w-96 md:h-96 fade-in"
          />
        </div>
      </div>
    </section>
  );
}
