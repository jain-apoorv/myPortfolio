// import { useState } from "react";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaEnvelope,
//   FaBars,
//   FaTimes,
//   FaExternalLinkAlt,
//   FaFolderOpen,
//   FaBookOpen,
// } from "react-icons/fa";

// function App() {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const projects = [
//     {
//       title: "Yatra",
//       duration: "May 2024 - June 2024",
//       image: "https://via.placeholder.com/600x300?text=Yatra+Project",
//       summary: "A full-stack tour booking platform.",
//       details: [
//         "A full-stack tour booking platform with tour listings, user authentication, and booking management.",
//         "Built a responsive frontend using ReactJS, Redux Toolkit and React Router with clean UI design.",
//         "Developed a RESTful backend using ExpressJS and MongoDB, following the MVC architecture.",
//         "Implemented secure authentication and authorization using JWT and bcrypt.",
//       ],
//       github: "https://github.com/yourusername/yatra",
//       demo: "https://yatra-demo.example.com",
//       type: "project",
//     },
//     {
//       title: "Olympic Database Management System",
//       duration: "Nov 2022 - Jan 2023",
//       image: "https://via.placeholder.com/600x300?text=Olympic+DBMS",
//       summary: "A comprehensive Olympic Database Management System.",
//       details: [
//         "Collaboratively developed a comprehensive Olympic Database Management System to manage and analyze Olympic-related data efficiently.",
//         "Designed ER diagrams, converted them into a relational database schema, and implemented normalization techniques.",
//         "Created and configured the relational database using MySQL and tested SQL queries extensively.",
//       ],
//       github: "https://github.com/yourusername/olympic-dbms",
//       type: "project",
//     },
//     {
//       title: "Number Plate Recognition System",
//       duration: "Jun 2022 - Aug 2022",
//       image:
//         "https://via.placeholder.com/600x300?text=Number+Plate+Recognition",
//       summary:
//         "A robust Number Plate Recognition System using computer vision.",
//       details: [
//         "Developed a robust Number Plate Recognition System using computer vision techniques and hardware integration.",
//         "Implemented image processing algorithms with OpenCV and Python for real-time detection and recognition of number plates.",
//         "Utilized pytesseract for OCR to extract alphanumeric characters from number plates.",
//         "Integrated Raspberry Pi, Arduino Uno, and Pi Camera to capture and process images in real-time.",
//       ],
//       demo: "https://numberplate-demo.example.com",
//       type: "project",
//     },
//   ];

//   const publications = [
//     {
//       title: "Task Offloading Optimization in Edge Computing",
//       year: 2025,
//       image:
//         "https://via.placeholder.com/600x300?text=Task+Offloading+Publication",
//       summary:
//         "Published a research paper on multi-objective optimization for task offloading in edge computing environments.",
//       details: [
//         "Developed a system model and application model for task offloading in edge computing.",
//         "Applied multi-objective optimization algorithms including NSGA-II, NSGA-III, and MOEA/D.",
//         "Analyzed performance metrics such as execution time, energy consumption, and cost.",
//         "Presented findings at the International Conference on Edge Computing 2025.",
//       ],
//       link: "https://example.com/publication/task-offloading-2025.pdf",
//       type: "publication",
//     },
//     {
//       title: "Bias Detection in News Reports Using Machine Learning",
//       year: 2024,
//       image:
//         "https://via.placeholder.com/600x300?text=Bias+Detection+Publication",
//       summary:
//         "Developed a dataset and model for detecting bias in news articles using natural language processing techniques.",
//       details: [
//         "Collected and annotated a large dataset of biased and unbiased news reports.",
//         "Built and evaluated machine learning classifiers for bias detection.",
//         "Achieved state-of-the-art performance on multiple test sets.",
//         "Paper accepted in Journal of Computational Linguistics, 2024.",
//       ],
//       link: "https://example.com/publication/bias-detection-2024.pdf",
//       type: "publication",
//     },
//   ];

//   const allItems = [...projects, ...publications];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
//       {/* Header */}
//       <header className="fixed w-full top-0 left-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-md z-50">
//         <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
//           <div className="flex items-center space-x-4">
//             <img
//               src="https://your-image-url.com/photo.jpg"
//               alt="Apoorv Jain"
//               className="w-14 h-14 rounded-full border-2 border-blue-500 shadow-md"
//             />
//             <h1 className="text-xl font-bold tracking-wide">Apoorv Jain</h1>
//           </div>

//           <nav className="hidden md:flex space-x-6 items-center">
//             <a
//               href="https://linkedin.com/in/yourlinkedin"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="hover:text-blue-400 transition"
//             >
//               <FaLinkedin size={24} />
//             </a>
//             <a
//               href="https://github.com/yourgithub"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub"
//               className="hover:text-gray-300 transition"
//             >
//               <FaGithub size={24} />
//             </a>
//             <a
//               href="mailto:youremail@example.com"
//               aria-label="Email"
//               className="hover:text-red-400 transition"
//             >
//               <FaEnvelope size={24} />
//             </a>
//           </nav>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//           >
//             {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <nav className="md:hidden bg-gray-800 border-t border-gray-700">
//             <div className="flex flex-col space-y-4 p-4 text-center">
//               <a
//                 href="https://linkedin.com/in/yourlinkedin"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="hover:text-blue-400 transition"
//               >
//                 <FaLinkedin size={28} className="mx-auto" />
//                 LinkedIn
//               </a>
//               <a
//                 href="https://github.com/yourgithub"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//                 className="hover:text-gray-300 transition"
//               >
//                 <FaGithub size={28} className="mx-auto" />
//                 GitHub
//               </a>
//               <a
//                 href="mailto:youremail@example.com"
//                 aria-label="Email"
//                 className="hover:text-red-400 transition"
//               >
//                 <FaEnvelope size={28} className="mx-auto" />
//                 Email
//               </a>
//             </div>
//           </nav>
//         )}
//       </header>

//       {/* Main content */}
//       <main className="max-w-6xl mx-auto pt-28 px-4 pb-12">
//         {/* Projects Section */}
//         <section className="mb-16 text-center">
//           <h2 className="text-5xl font-extrabold tracking-tight mb-4 text-blue-400">
//             Projects
//           </h2>
//           <p className="text-gray-300 max-w-xl mx-auto mb-8">
//             Some of the projects I have worked on recently. Click a card to see
//             details.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, idx) => (
//               <Card
//                 key={idx}
//                 item={project}
//                 onClick={() => setSelectedItem(project)}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Publications Section */}
//         <section className="mb-16 text-center">
//           <h2 className="text-5xl font-extrabold tracking-tight mb-4 text-purple-400">
//             Publications
//           </h2>
//           <p className="text-gray-300 max-w-xl mx-auto mb-8">
//             Research papers and articles I have authored or co-authored.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {publications.map((pub, idx) => (
//               <Card
//                 key={idx}
//                 item={pub}
//                 onClick={() => setSelectedItem(pub)}
//                 isPublication
//               />
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Modal */}
//       {selectedItem && (
//         <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
//       )}

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-500 text-center py-6 mt-20 border-t border-gray-700">
//         © 2025 Apoorv Jain. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// // Card component
// function Card({ item, onClick, isPublication = false }) {
//   return (
//     <div
//       onClick={onClick}
//       className="bg-gradient-to-tr from-blue-700 via-indigo-800 to-purple-900 rounded-xl shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
//       role="button"
//       tabIndex={0}
//       onKeyDown={(e) => e.key === "Enter" && onClick()}
//       aria-label={`Open details for ${
//         isPublication ? "publication" : "project"
//       } ${item.title}`}
//     >
//       <img
//         src={item.image}
//         alt={`${item.title} cover`}
//         className="w-full h-48 object-cover rounded-t-xl"
//       />
//       <div className="p-5">
//         <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
//         <p className="text-sm text-gray-300 mb-2">
//           {isPublication ? item.year : item.duration}
//         </p>
//         <p className="text-gray-200">{item.summary}</p>
//       </div>
//     </div>
//   );
// }

// // Modal component
// function Modal({ item, onClose }) {
//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
//       aria-modal="true"
//       role="dialog"
//       tabIndex={-1}
//       onClick={onClose}
//     >
//       <div
//         className="bg-gray-900 rounded-xl max-w-xl w-full overflow-y-auto max-h-[90vh] shadow-2xl relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 text-3xl font-bold focus:outline-none"
//           onClick={onClose}
//           aria-label="Close modal"
//         >
//           &times;
//         </button>
//         <img
//           src={item.image}
//           alt={`${item.title} cover`}
//           className="w-full h-56 object-cover rounded-t-xl"
//         />
//         <div className="p-6">
//           <h3
//             className={`text-3xl font-bold mb-2 ${
//               item.type === "publication" ? "text-purple-400" : "text-blue-400"
//             }`}
//           >
//             {item.title}
//           </h3>
//           <p className="text-sm text-gray-400 mb-4">
//             {item.type === "publication" ? item.year : item.duration}
//           </p>
//           <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
//             {item.details.map((detail, idx) => (
//               <li key={idx}>{detail}</li>
//             ))}
//           </ul>

//           {item.type === "publication" && item.link && (
//             <a
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-700 rounded hover:bg-purple-800 transition text-gray-100"
//               aria-label="View publication PDF"
//             >
//               <FaBookOpen size={20} />
//               <span>View Publication</span>
//             </a>
//           )}

//           {item.type === "project" && (
//             <div className="flex space-x-4">
//               {item.github && (
//                 <a
//                   href={item.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
//                   aria-label="GitHub Repository"
//                 >
//                   <FaGithub size={20} />
//                   <span>GitHub</span>
//                 </a>
//               )}
//               {item.demo && (
//                 <a
//                   href={item.demo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
//                   aria-label="Live Demo"
//                 >
//                   <FaExternalLinkAlt size={20} />
//                   <span>Demo</span>
//                 </a>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Section from "./components/Section";

import { projects } from "./data/projects";
import { publications } from "./data/publications";
import Hero from "./components/Hero";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
      <Header />

      <main className="max-w-6xl mx-auto pt-28 px-4 pb-12">
        <Hero></Hero>
        <Section
          title="Projects"
          id="projects"
          description="Some of the projects I have worked on recently."
          items={projects}
          setSelectedItem={setSelectedItem}
        />

        <Section
          title="Publications"
          id="publications"
          description="Research papers and articles I have authored or co-authored."
          items={publications}
          setSelectedItem={setSelectedItem}
          isPublication
        />
      </main>

      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
      <Footer />
    </div>
  );
}

export default App;
