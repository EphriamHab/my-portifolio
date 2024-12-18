/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Projects() {
  return (
    <section id="project" className="py-16 mt-4">
      <div id="project" className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl text-center font-bold mb-2 mt-4">
            Latest <span className="text-custom-purple">Project</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
          <div className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img
              src="H1.png"
              alt="Ecommerce WebApp"
              className="w-full h-[250px] rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-10">
              <h1 className="text-gray-950 font-bold text-lg mb-4">
                Ecommerce WebApp
              </h1>
              <p className="text-sm leading-7 text-gray-950 font-semibold">
                Revolutionize your online shopping experience with our
                MERN-based eCommerce app. Browse, buy, and track orders
                seamlessly—all in one streamlined platform.
              </p>
              <Link
                href="https://github.com/EphriamHab/ecommerce-web-app"
                legacyBehavior
              >
                <a className="text-custom-purple mt-4 text-4xl w-32 h-32 flex items-center justify-center rounded-full">
                  <i className="bx bxl-github"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img
              src="p1.png"
              alt="Blog App"
              className="w-full h-[250px] rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-10">
              <h1 className="text-gray-950 font-bold text-lg mb-4">Blog App</h1>
              <p className="text-sm leading-7 text-gray-950 font-semibold">
                Empower your blogging with our MERN-based platform. Create and
                share captivating content effortlessly in a sleek, user-friendly
                interface.
              </p>
              <Link
                href="https://github.com/EphriamHab/Blog-Portfolio-Project-ALX"
                legacyBehavior
              >
                <a className="text-custom-purple mt-4 text-4xl w-32 h-32 flex items-center justify-center rounded-full">
                  <i className="bx bxl-github"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img
              src="expense.png"
              alt="Expense Tracker"
              className="w-full h-[250px] rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-10">
              <h1 className="text-gray-950 font-bold text-lg mb-4">
                Expense Tracker
              </h1>
              <p className="text-sm leading-7 text-gray-950 font-semibold">
                Track expenses effortlessly with our React-based app. Manage
                spending, stay on budget, and take control of your finances with
                ease.
              </p>
              <Link
                href="https://github.com/EphriamHab/Expense_Tracker_Using_ReactJs"
                legacyBehavior
              >
                <a className="text-custom-purple mt-4 text-4xl w-32 h-32 flex items-center justify-center rounded-full">
                  <i className="bx bxl-github"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img
              src="yeneta.PNG"
              alt="yeneta tutor"
              className="w-full h-[250px] rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-10">
              <h1 className="font-bold text-gray-950 text-lg mb-4">
                የኔታ Tutor
              </h1>
              <p className="text-sm leading-7 text-gray-950 font-bold">
                የኔታ Tutor is a Flutter-based mobile app connecting students with
                skilled tutors for quality, affordable at-home learning,
                designed to support student success.
              </p>
              <Link
                href="https://github.com/Yeneta-tutors/yeneta_tutor.git"
                legacyBehavior
              >
                <a className="text-custom-purple mt-4 text-4xl w-32 h-32 flex items-center justify-center rounded-full">
                  <i className="bx bxl-github"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img
              src="C.JPG"
              alt="Ethio Chat"
              className="w-full h-[250px] rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-10">
              <h1 className="font-bold text-gray-950 text-lg mb-4">
                EthioChat
              </h1>
              <p className="text-sm leading-7 text-gray-950 font-bold">
                EthioChat is a Flutter-based mobile app that enables seamless,
                secure, and real-time messaging, helping users stay connected
                with friends and family anytime, anywhere.
              </p>
              <Link
                href="https://github.com/Bit-SWE-4th-G7/EthioChat-App"
                legacyBehavior
              >
                <a className="text-custom-purple mt-4 text-4xl w-32 h-32 flex items-center justify-center rounded-full">
                  <i className="bx bxl-github"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
