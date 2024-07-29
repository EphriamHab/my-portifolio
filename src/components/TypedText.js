// components/TypedText.js
import { useEffect } from 'react';
import Typed from 'typed.js';

export default function TypedText() {
  useEffect(() => {
    const options = {
      strings: ["Full-Stack Developer", "Web Developer", "Software Engineer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(".text", options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span className="text"></span>
    </div>
  );
}
