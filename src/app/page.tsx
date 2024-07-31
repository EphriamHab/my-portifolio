import Header from "@/components/header";
import Home from "@/components/home";
import About from "@/components/about";
import Services from "@/components/services";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Certification from "@/components/certification";


export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certification/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
