// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// // import { Project } from "../data/projectContent";

// type ProjectRowProps = {
// //   project: Project;
//   isOpen: boolean;
//   onToggle: (slug: string) => void;
// };

// const ProjectRow: React.FC<ProjectRowProps> = ({ project, isOpen, onToggle }) => {
//   const hasLive = project.href.trim() !== "";

//   return (
//     <div className="border-b border-zinc-200">
//       <button
//         type="button"
//         onClick={() => onToggle(project.slug)}
//         aria-expanded={isOpen}
//         aria-controls={`project-panel-${project.slug}`}
//         className="group w-full text-left py-10 max-sm:py-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4 rounded-sm"
//       >
//         <div className="flex items-start justify-between gap-6">
//           <div>
//             <h2 className="font-bold text-4xl text-orange-500 leading-none tracking-tight max-md:text-4xl max-sm:text-3xl">
//               {project.title}
//             </h2>
//             <div className="mt-5 flex flex-wrap gap-3">
//               {project.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="text-sm text-zinc-500 border border-zinc-200 rounded-md px-3 py-1"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div className="flex items-center gap-6 pt-2 shrink-0">
//             <span className="text-lg text-zinc-400 max-sm:hidden">
//               {project.year}
//             </span>
//             <span
//               aria-hidden="true"
//               className="text-zinc-400 transition-transform duration-300 ease-in-out group-hover:text-zinc-600"
//               style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
//             >
//               <svg
//                 width="28"
//                 height="28"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//               >
//                 <line x1="12" y1="5" x2="12" y2="19" />
//                 <line x1="5" y1="12" x2="19" y2="12" />
//               </svg>
//             </span>
//           </div>
//         </div>
//       </button>

//       <motion.div
//         id={`project-panel-${project.slug}`}
//         initial={false}
//         animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
//         transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
//         className="overflow-hidden"
//       >
//         <div className="flex items-start gap-16 pb-14 max-md:flex-col max-md:gap-8">
//           <div className="w-1/2 max-md:w-full">
//             <Link href={`/projects/${project.slug}`}>
//               <Image
//                 src={project.image}
//                 alt={project.imageAlt}
//                 className="hover:scale-[1.02] transition duration-300 ease-in-out rounded-lg w-full h-auto"
//               />
//             </Link>
//           </div>
//           <div className="w-1/2 max-md:w-full flex flex-col h-full">
//             <p className="text-xl leading-relaxed text-zinc-600 max-md:text-xl max-sm:text-lg">
//               {project.description}
//             </p>
//             <div className="mt-10 flex items-center gap-8">
//               <Link
//                 href={`/projects/${project.slug}`}
//                 className="inline-flex items-center gap-2 text-lg font-medium border-b-2 border-current pb-1 transition-colors duration-200 hover:text-orange-500"
//               >
//                 Case study
//                 <span aria-hidden="true">&#x2197;</span>
//               </Link>
//               {hasLive && (
//                 <Link
//                   target="_blank"
//                   href={project.href}
//                   className="inline-flex items-center gap-2 text-lg font-medium text-zinc-400 pb-1 transition-colors duration-200 hover:text-orange-500"
//                 >
//                   View live
//                   <span aria-hidden="true">&#x2197;</span>
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectRow;
