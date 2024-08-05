'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'home') {
          setIsHomeVisible(true);
        } else if (entry.target.id === 'home') {
          setIsHomeVisible(false);
        }
      });
    }, { threshold: 0.5 });

    const homeSection = document.getElementById('home');
    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  return (
    <footer className="w-full p-4 mt-4 shadow-xl">
      <p className="text-center font-serif font-semibold text-sm md:text-base">
        &copy; 2024 Made By Ephrem
      </p>
      {!isHomeVisible && (
        <a href="#" className="fixed bottom-2 right-2 bg-custom-purple rounded-lg">
          <FaArrowUp className="w-8 h-8 text-blue-400" />
        </a>
      )}
    </footer>
  );
}
