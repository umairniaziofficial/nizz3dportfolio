import { Navbar, Hero, About, Experience, Tech, Works, Feedbacks, Contact, Footer } from "./components";
import "./output.css";

export default function App() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
