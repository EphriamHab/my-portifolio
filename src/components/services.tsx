/* eslint-disable react/no-unescaped-entities */
import "animate.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
} from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center font-bold mb-16">
          My <span className="text-custom-purple">Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp">
            <FaLaptopCode className="text-white text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Web Development
            </h2>
            <p className="text-white">
              Tailored websites to fit your brand. From portfolios to
              e-commerce, we use the latest tech for engaging experiences.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-r from-green-500 to-green-700 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp animate__delay-1s">
            <FaMobileAlt className="text-white text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Mobile Development
            </h2>
            <p className="text-white">
              Custom mobile apps for iOS and Android that provide seamless user
              experiences and enhance your business.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp animate__delay-2s">
            <FaPaintBrush className="text-white text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-white">
              UI/UX Design
            </h2>
            <p className="text-white">
              Beautiful and functional designs that create meaningful
              interactions and improve user satisfaction.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-r from-red-500 to-red-700 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp animate__delay-3s">
            <FaSearch className="text-white text-4xl mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-white">
              SEO Optimization
            </h2>
            <p className="text-white">
              Improve your website's visibility on search engines and attract
              more organic traffic with our SEO services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
