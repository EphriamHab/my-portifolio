/* eslint-disable react/no-unescaped-entities */
import "animate.css";
import { FaLaptopCode, FaDatabase, FaPaintBrush, FaLayerGroup } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center font-bold mb-16 mt-10">
          My <span className="text-custom-purple">Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp">
            <FaLaptopCode className="text-white text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Front-end Development
            </h2>
            <p className="text-white">
              Creating dynamic user interfaces with modern technologies like
              React, Next.js, and TypeScript to ensure a seamless user experience.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-r from-green-500 to-green-700 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp animate__delay-1s">
            <FaDatabase className="text-white text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Back-end Development
            </h2>
            <p className="text-white">
              Building robust server-side applications and APIs using Node.js,
              Express, and MongoDB to handle your application's logic and database needs.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp animate__delay-2s">
            <FaPaintBrush className="text-white text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-white">
              UI/UX Design
            </h2>
            <p className="text-white">
              Designing intuitive and engaging user interfaces that enhance user
              satisfaction and drive interaction, with a focus on modern web standards.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-r from-red-500 to-red-700 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp animate__delay-3s">
            <FaLayerGroup className="text-white text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Full-Stack Development
            </h2>
            <p className="text-white">
              Combining both front-end and back-end skills to build complete web
              applications that are scalable, high-performance, and tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
