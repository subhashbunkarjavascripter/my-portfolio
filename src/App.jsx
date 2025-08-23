import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar.jsx";
import Home from "../src/components/Home.jsx";
import About from "../src/components/About.jsx";
import Skills from "../src/components/Skill.jsx";
import Projects from "../src/components/Projects.jsx";
import Contact from "../src/components/Contact.jsx";
import Footer from "../src/components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}