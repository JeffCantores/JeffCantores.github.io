import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { AppLayout } from "./components/AppLayout";
import "./index.css";

export default function App() {

  return (
    //<main className="text-gray-400 bg-gray-900 body-font"> - Previous background color
    <main className="bg-gray-900 text-gray-400 body-font bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] ">
      <AppLayout>
        {/* <Navbar /> */}
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </AppLayout>
    </main>
  );
}