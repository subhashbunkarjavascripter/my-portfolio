import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter"; // 👈 Import
import profileImg from "../public/images/profile.png";
import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skill";
import Contact from "./Contact";
import Footer from "./Footer";
import CertificateGallery from "./Certificate";


export default function Home() {
   
  const name = "Subhash Bunkar";
  const resumeLink = "/subhash-bunkar.pdf";

  return (
    <> 
    
    <section className="bg-black text-white border-b border-gray-600  flex flex-col md:flex-row items-center justify-center py-12 px-16">
      
      {/* Left - Text Content */}
      <motion.div
        className="flex-1 flex flex-col justify-center  items-center text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-6xl font-bold mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi,
        </motion.h2>

        <motion.h2
          className="text-6xl font-bold mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I'm <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">{name}</span>
        </motion.h2>

        {/* Typewriter Role Section */}
        <motion.p
          className="text-2xl font-bold mb-4 h-8 text-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Node.js Developer",
              "Frontend Developer",
              "Backend Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-500" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl text-green-700 hover:text-gray-400" />
          </a>
          <a href="mailto:your@email.com">
            <FaEnvelope className="text-2xl text-red-600 hover:text-red-400" />
          </a>
        </motion.div>

        {/* Resume Button */}
        <motion.a
          href={resumeLink}
          download
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* Right - Profile Image */}
      {/* <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src={profileImg}
          alt="Profile"
          className="w-72 h-72  bg-gradient-to-br from-black via-gray-900 to-indigo-950 mr-8 object-cover rounded-full border-4 border-gray-700 shadow-lg"
        />
      </motion.div> */}
    </section>

    <Skills/>
    <Projects/>
    <About/>
    <CertificateGallery/>
    <Contact/>

    </>
  );
}
