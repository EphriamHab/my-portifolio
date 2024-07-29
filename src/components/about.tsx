/* eslint-disable @next/next/no-img-element */

export default function About(){

    return(
        <section id="about" className="p-8">
        <h2 className="text-4xl text-center font-bold mb-4">About <span className="text-custom-purple">Me</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 gap-4 md:gap-8 mx-4 md:mx-24">
        <div className="flex justify-center mt-8">
        <img
          src="p2.jpg"
          alt="profile"
          className="rounded-lg shadow-xl w-64 h-64 md:w-96 md:h-96 fade-in"
        />
      </div>
        <p className=" font-serif font-medium mt-8 text-lg">
            As software engineering student with a focus on full-stack development, 
            I bring a unique blend of technical expertise and a passion for crafting efficient, 
            scalable solutions. With a keen eye for detail and a commitment to excellence,
            I thrive on challenges and am dedicated to delivering high-quality results. 
            Whether it&apos;s building robust APIs,
            optimizing database performance, or collaborating with cross-functional teams, 
            I&apos;m eager to leverage my skills to meet your project needs and exceed your expectations. 
            Let&apos;s work together to turn your ideas into reality.
         </p>  
        </div>
     </section>
    )
}