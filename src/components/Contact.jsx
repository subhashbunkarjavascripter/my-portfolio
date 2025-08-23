import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaHome } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-black border-b border-gray-700 min-h-[80vh] flex">
      <div className="mx-auto px-6 w-full">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl text-white font-bold m-6 text-center underline decoration-white/70"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Info Section */}
        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-4 mb-8 px-2 md:px-8 text-white">
          <div className="flex flex-col gap-2 items-center justify-center bg-gray-800/60 p-4 rounded-lg shadow-md w-full md:w-1/3">
            <FaEnvelope className="text-red-500 text-2xl" />
            <span className="text-sm text-center break-words">
              subhashbunkar300@gmail.com
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center bg-gray-800/60 p-4 rounded-lg shadow-md w-full md:w-1/3">
            <FaPhone className="text-green-500 transform scale-x-[-1] text-2xl" />
            <span className="text-sm">+91 96852 93189</span>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center bg-gray-800/60 p-4 rounded-lg shadow-md w-full md:w-1/3">
            <FaHome className="text-blue-500 text-2xl" />
            <span className="text-sm text-center">
              Rewa, Madhya Pradesh, India
            </span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900/80 p-6 sm:p-8 max-w-2xl mb-10 mx-auto rounded-lg shadow-lg w-full">
          <form
            action="https://formspree.io/f/yourFormID"
            method="POST"
            className="space-y-4"
          >
            <div className="text-left">
              <label className="text-white block mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="text-left">
              <label className="text-white block mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="text-left">
              <label className="text-white block mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                className="w-full bg-gray-800 text-white border border-gray-700 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
