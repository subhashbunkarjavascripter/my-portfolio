import React from "react";
import Frontend from "../public/images/frontend.png";
import Backend from "../public/images/backend.png";
import Reactimg from "../public/images/react.png";
import Experience from "../public/images/Experience_Subhash.png";


const certificates = [
  
  {
    id: 1,
    title: "Frontend Web Development",
    issuer: "Sheryians coding school",
    date: "13 sep 2022 to 25 Jan 2023",
    image: Frontend, // yahan certificate ki image ka link daalna
    description: "Completed a comprehensive course covering MERN stack development."
  },
  {
    id: 2,
    title: "Backend Web Development",
    issuer: "Sheryians coding school",
    date: "17 feb 2023 to 17 jul 2023",
    image: Backend,
    description: "Learned advanced concepts of JavaScript including ES6+, async/await, and APIs."
  },
  {
    id: 3,
    title: "React Frontend Development",
    issuer:  "Sheryians coding school",
    date: "16 oct 2023 to 16 feb 2024",
    image: Reactimg,
    description: "Hands-on projects in React.js including hooks, state management, and routing."
  },
  {
    id: 4,
    title: "Experience form visionQ",
    issuer: "VisionQ technology",
    date: "1 april to 10 august 2025",
    image: Experience,
    description: "Real world project voice cloning app"
  }
];

const CertificateGallery = () => {
  return (
    <div className="p-6 border-b border-gray-700 bg-black">
      <h2 className="text-2xl text-white font-bold mb-6 text-center">My Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="border rounded-xl shadow-lg p-4 bg-white hover:shadow-2xl transition"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
            <p className="text-sm mt-2">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateGallery;
