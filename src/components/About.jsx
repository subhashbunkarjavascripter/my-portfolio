import { motion } from "framer-motion";
import heroArt from "../public/images/about.png"; // replace with an illustration if you have

export default function About() {
  return (
    <section className="bg-black border-b-2 border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl text-white md:text-4xl font-bold underline text-center mb-10 decoration-white/70"
        >
          About
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={heroArt}
            alt="About visual"
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl shadow-black/50"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-gray-200"
          >
            <p>
              Hi, I'm <span className="font-semibold">Subhash Bunkar</span>, a passionate{" "}
              <span className="font-semibold">MERN Stack Developer</span> with hands-on experience
              in building scalable and user-friendly web applications.
            </p>
            <p>
              I successfully completed my{" "}
              <span className="font-semibold">MERN Stack Internship at VisionQ Technology</span>{" "}
              (April 2025 – August 2025), where I worked on real-world projects, improved my
              problem-solving skills, and gained exposure to modern development workflows.
              My responsibilities included developing responsive UIs, integrating APIs,
              and handling both frontend and backend tasks with sincerity and dedication.
            </p>
            {/* <p>
              I have strong expertise in{" "}
              <span className="font-semibold">React.js, Node.js, Express.js, and MongoDB</span>.
              Some of my notable projects include an{" "}
              <span className="font-semibold">E-Commerce platform with Razorpay integration</span>{" "}
              and a <span className="font-semibold">Real-time Cricket Scoring System</span>{" "}
              implementing the DLS method.
            </p> */}
            <p>
              With a positive mindset and eagerness to learn, I am looking for exciting opportunities
              where I can contribute, grow, and create impactful web solutions.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}
