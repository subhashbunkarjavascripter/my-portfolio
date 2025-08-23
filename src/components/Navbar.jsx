import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.08 },
    },
  };
  const item = { hidden: { opacity: 0, y: -8 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-gray-800/70 text-white border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1 variants={item} className="text-2xl md:text-4xl font-bold">
          Subhash <span className="opacity-50">Bunkar</span>
        </motion.h1>

        {/* Desktop Menu */}
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-6"
        >
          {links.map((l) => (
            <motion.div
              key={l.name}
              variants={item}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
            >
              <NavLink
                to={l.path}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md font-semibold transition ${
                    isActive
                      ? "bg-white text-black"
                      : "text-white/90 hover:text-white"
                  }`
                }
              >
                {l.name}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-gray-900 px-4 py-3 space-y-3 transition-all ${
          open ? "block" : "hidden"
        }`}
      >
        {links.map((l) => (
          <NavLink
            key={l.name}
            to={l.path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-semibold transition ${
                isActive
                  ? "bg-white text-black"
                  : "text-white/90 hover:text-white"
              }`
            }
            onClick={() => setOpen(false)} // menu close on click
          >
            {l.name}
          </NavLink>
        ))}
      </motion.div>
    </motion.nav>
  );
}
