import Header from "@/components/header";
import Home from "@/components/home";
import About from "@/components/about";
import Services from "@/components/services";
import Skills from "@/components/skills";

export default function Page() {
  return (
    <div className="gird gap-8">
      <Header />
      <Home/>
      <About/>
      <Services/>
      <Skills/>
    </div>
  );
}
