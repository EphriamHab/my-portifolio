import Header from "@/components/header";
import Home from "@/components/home";
import About from "@/components/about";
import Services from "@/components/services";

export default function Page() {
  return (
    <div className="gird gap-8">
      <Header />
      <Home/>
      <About/>
      <Services/>
    </div>
  );
}
