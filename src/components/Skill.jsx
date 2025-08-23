import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiGithub,
  SiBootstrap, SiHtml5, SiCss3, SiPostman, SiStripe, SiFramer,
  SiGreensock, SiSocketdotio, SiNextdotjs
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { RiKeyFill, RiSendPlaneFill, RiTrainLine } from "react-icons/ri";
import { VscServerProcess, VscJson } from "react-icons/vsc";
import { BiGitRepoForked, BiTransferAlt } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";

const groups = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-blue-400 text-2xl" />,
    items: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "GSAP", icon: <SiGreensock /> },
      { name: "Locomotive Scroll", icon: <RiTrainLine /> },
      { name: "ScrollTrigger", icon: <TbTargetArrow /> },
      { name: "AJAX", icon: <BiTransferAlt /> },
      { name: "JSON", icon: <VscJson /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs className="text-green-400 text-2xl" />,
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <AiOutlineApi /> },
      { name: "JWT Authentication", icon: <RiKeyFill /> },
      { name: "Passport.js", icon: <RiKeyFill /> },
      { name: "Google Auth (OAuth)", icon: <FcGoogle /> },
      { name: "Socket.IO", icon: <SiSocketdotio /> },
    ],
  },
  {
    title: "Database & Tools",
    icon: <FaDatabase className="text-yellow-400 text-2xl" />,
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <BiGitRepoForked /> },
      { name: "Postman API Testing", icon: <SiPostman /> },
      { name: "Git & GitHub", icon: <SiGithub /> },
    ],
  },
  {
    title: "Other Skills",
    icon: <FaTools className="text-gray-400 text-2xl" />,
    items: [
      { name: "Payment Integration ( Razorpay )", icon: <SiStripe /> },
      // { name: "Twilio Messaging API", icon: <RiSendPlaneFill /> },
      { name: "Deployment (Vercel, Netlify, Render)", icon: <VscServerProcess /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-black py-6 px-4 border-b border-gray-700">
      <div className="max-w-6xl ml-4 md:ml-10 lg:ml-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10 underline decoration-white/70"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Skills
        </motion.h2>

        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.title}>
              <motion.h3
                className="text-xl md:text-2xl text-white font-bold mb-4 flex items-center gap-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {g.icon} {g.title}
              </motion.h3>

              <div className="flex flex-wrap gap-4">
                {g.items.map((item, index) => (
                  <motion.span
                    key={item.name}
                    className="flex items-center gap-2 px-5 py-2 bg-gray-700 text-white 
                               rounded-md shadow-md backdrop-blur-sm cursor-pointer 
                               hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {item.icon && <span className="text-lg">{item.icon}</span>}
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
