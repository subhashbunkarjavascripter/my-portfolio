import { motion } from "framer-motion";
import Voicestudio from "../public/images/voice studio.png"
import Elibary from "../public/images/e-libary.png"
import Chocolate from "../public/images/chocolate.png"

const projects = [
  { 
    title: "Voice Studio Application", 
    desc:"Voice Studio – A React & Tailwind based platform powered by FastAPI to generate music, cartoons, and realistic videos seamlessly.", 
    link: "https://github.com/subhashbunkarjavascripter/mern-it-website",
    image: Voicestudio
  },
  { 
    title: "React-based E-Library web application UI", 
    desc: "With a navigation menu, book title, author, description, and download button, this responsive clean UI allows users to easily browse and download their favorite books.", 
    link: "https://github.com/subhashbunkarjavascripter/SiteReact",
    image: Elibary
  },
  { 
    title: "Dashboard UI", 
    desc: "Modern and responsive admin dashboard UI with charts, analytics, and role-based access management.", 
    link: "https://github.com/subhashbunkarjavascripter/Simply",
    image: Chocolate
  },
];

export default function Projects() {
  return (
    <section className="bg-black border-b border-gray-700 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl text-white font-extrabold text-center mb-10 underline decoration-white/70" 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="flex flex-col lg:flex-row items-center gap-6 bg-gray-900/60 p-6 rounded-2xl shadow-lg shadow-black/40 hover:bg-gray-900/80 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Image */}
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full lg:w-1/2 rounded-lg object-cover shadow-md"
              />

              {/* Details */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <p className="text-white/80 mt-3 text-sm sm:text-base">{p.desc}</p>
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
