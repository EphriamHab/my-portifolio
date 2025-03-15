/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { FaArrowUp } from "react-icons/fa";

import {
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaTelegram,
  FaGithub,
} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="p-4">
      <h2 className="text-4xl text-center font-bold mt-14 mb-4">
        Contact <span className="text-custom-purple">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 gap-4 md:gap-8 mx-4 md:mx-24">
        <div className="flex justify-center mt-4 transform transition duration-500 hover:scale-105">
          <img
            src="p.JPG"
            alt="profile"
            className="rounded-lg shadow-xl w-64 h-64 md:w-96 md:h-auto fade-in"
          />
        </div>
        <div className="transform transition duration-500 hover:scale-105 animate__animated animate__fadeInRight">
          <p className=" font-serif font-medium mt-8 text-lg">
            I'd love to hear from you! Whether you have a question, want to
            discuss a project, or just want to say hi, feel free to get in
            touch. Here are the best ways to reach me:
          </p>
          <div className="flex space-x-4 p-2 mt-4 ">
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
          <div className="flex mt-5">
            <a
              href="https://drive.google.com/file/d/1EP7lVojN5xNlPhDKZ5ZMvEA9iq7vCexe/view?usp=drivesdk"
              className="bg-custom-purple text-white hover:bg-blue-600 px-8 py-2 rounded-lg shadow-md"
            >
              See my Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
