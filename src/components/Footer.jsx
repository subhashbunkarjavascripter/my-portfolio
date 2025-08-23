import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl text-white font-bold">
            My<span className="opacity-70">Portfolio</span>
          </h3>
          <p className="text-white/70 mt-2">
            Creating meaningful web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg text-white font-bold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/resume" className="hover:text-white">Download Resume</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg text-white font-bold">Follow Me</h4>
          <div className="mt-3 flex gap-5 text-2xl text-white/80">
            <a href="https://github.com/subhashbunkarjavascripter" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/subhash-bunkar-1a2654254/" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="subhashbunkar300@.com" className="hover:text-white">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-4 pb-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Subhash Bunkar. All rights reserved.
      </div>
    </footer>
  );
}
