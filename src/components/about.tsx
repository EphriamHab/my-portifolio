/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import "animate.css";

export default function About() {
  return (
    <section id="about" className="p-8 mt-8">
      <h2 className="text-4xl text-center font-bold mb-4">
        About <span className="text-custom-purple">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 gap-4 md:gap-8 mx-4 md:mx-24">
        <div className="flex justify-center mt-8 transform transition duration-500 hover:scale-105 animate__animated animate__fadeInLeft">
          <img
            src="p2.jpg"
            alt="profile"
            className="rounded-lg shadow-xl w-64 h-64 md:w-96 md:h-auto fade-in"
          />
        </div>
        <div>
          <p className=" font-serif font-medium mt-8 text-lg transform transition duration-500 hover:scale-105 animate__animated animate__fadeInRight">
            As a software engineering student with a focus on full-stack
            development, I bring a unique blend of technical expertise and a
            passion for crafting efficient, scalable solutions. My proficiency
            in the MERN stack and Next.js allows me to deliver high-quality,
            robust web applications. With a keen eye for detail and a commitment
            to excellence, I thrive on challenges and am dedicated to producing
            top-notch results. Whether it's building resilient APIs, optimizing
            database performance, or collaborating with cross-functional teams,
            I am eager to leverage my skills to meet your project needs and
            exceed your expectations. Let's work together to turn your ideas
            into reality.
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="https://drive.google.com/file/d/1PDtIRKuadUi0iHkCBKm79_cbjWT_iP9d/view?usp=sharing"
              className="bg-custom-purple text-white hover:bg-blue-600 px-12 py-2 rounded-lg shadow-md"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
