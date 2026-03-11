// import { ExternalLink, Code2, Palette, ShoppingBag, Building2, Plane, GraduationCap } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'Gas Station System',
//       description: 'Full-stack system for managing fuel sales and station operations with real-time data tracking and reporting.',
//       tech: ['React.js', 'Express.js', 'REST APIs', 'PostgreSQL'],
//       icon: Building2,
//       color: 'from-blue-500 to-cyan-500',
//       github: 'https://github.com/oudomweb/gas-station-system',
//       demo: 'https://gas-station-demo.vercel.app',
//     },
//     {
//       title: 'ZaRoFashion',
//       description: 'Online clothing brand with e-commerce features, Telegram bot for order invoices, and multi-language support (Khmer/English). Hosted on Render.',
//       tech: ['React.js', 'Tailwind CSS', 'Telegram Bot API'],
//       icon: ShoppingBag,
//       color: 'from-cyan-500 to-teal-500',
//       role: 'Founder & Developer',
//     },
//     {
//       title: 'Angkor Food',
//       description: 'UX/UI Design project for e-commerce mobile and web interfaces. Created wireframes and interactive prototypes, collaborated with developers for implementation.',
//       tech: ['Figma', 'UX/UI Design', 'Prototyping'],
//       icon: Palette,
//       color: 'from-teal-500 to-green-500',
//     },
//     {
//       title: 'Hospital Management System',
//       description: 'Comprehensive healthcare management system with frontend interface, API integration with backend, and thorough API testing.',
//       tech: ['React.js', 'REST APIs', 'Postman'],
//       icon: Code2,
//       color: 'from-purple-500 to-blue-500',
//     },
//     {
//       title: 'Travel & Hotel Booking Website',
//       description: 'Modern booking platform with responsive design, hotel listings, and streamlined reservation flow for seamless user experience.',
//       tech: ['React.js', 'CSS', 'JavaScript'],
//       icon: Plane,
//       color: 'from-blue-500 to-purple-500',
//     },
//     {
//       title: 'CareerSync',
//       description: 'Education platform that connects students and professionals with mentors for real-time skill learning. Users can book sessions with experts in fields such as Accounting, Frontend Development, and Healthcare to gain practical knowledge and career guidance.',
//       tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
//       icon: GraduationCap,
//       color: 'from-purple-500 to-indigo-500',
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Featured Projects
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
//           <p className="text-gray-400 mt-4 text-lg">
//             A selection of my recent work and contributions
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => {
//             const Icon = project.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20"
//               >
//                 <div className="flex items-start justify-between mb-4">
//                   <div className={`p-3 bg-gradient-to-br ${project.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon size={28} className="text-white" />
//                   </div>
//                   <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
//                     <ExternalLink size={20} />
//                   </button>
//                 </div>

//                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
//                   {project.title}
//                 </h3>

//                 {project.role && (
//                   <p className="text-sm text-cyan-400 font-semibold mb-3">{project.role}</p>
//                 )}

//                 <p className="text-gray-400 mb-4 leading-relaxed text-sm">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-lg text-xs text-gray-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { ExternalLink, Code2, Palette, ShoppingBag, Building2, Plane, GraduationCap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Gas Station System',
      description: 'Full-stack system for managing fuel sales and station operations with real-time data tracking and reporting.',
      tech: ['React.js', 'Express.js', 'REST APIs', 'PostgreSQL'],
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      demo: 'https://petronas-cambodia.up.railway.app/login',
    },
    {
      title: 'ZaRoFashion',
      description: 'Online clothing brand with e-commerce features, Telegram bot for order invoices, and multi-language support (Khmer/English). Hosted on Render.',
      tech: ['React.js', 'Tailwind CSS', 'Telegram Bot API'],
      icon: ShoppingBag,
      color: 'from-cyan-500 to-teal-500',
      role: 'Founder & Developer',
      demo: 'https://zarofitkh.netlify.app/',
    },
    {
      title: 'Angkor Food',
      description: 'UX/UI Design project for e-commerce mobile and web interfaces. Created wireframes and interactive prototypes, collaborated with developers for implementation.',
      tech: ['Figma', 'UX/UI Design', 'Prototyping'],
      icon: Palette,
      color: 'from-teal-500 to-green-500',
      demo: 'https://www.figma.com/design/888fczHP6UEqfGUzaxeFO1/Untitled?node-id=0-1&t=ZTxKexX9GQ77WMAQ-1',
    },
    {
      title: 'Hospital Management System',
      description: 'Comprehensive healthcare management system with frontend interface, API integration with backend, and thorough API testing.',
      tech: ['React.js', 'REST APIs', 'Postman'],
      icon: Code2,
      color: 'from-purple-500 to-blue-500',
    },
    {
      title: 'Travel & Hotel Booking Website',
      description: 'Modern booking platform with responsive design, hotel listings, and streamlined reservation flow for seamless user experience.',
      tech: ['React.js', 'CSS', 'JavaScript'],
      icon: Plane,
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'CareerSync',
      description: '  For test : email : oudomngoun29@gmail.com | password : 12345678 |Education platform that connects students and professionals with mentors for real-time skill learning. Users can book sessions with experts in fields such as Accounting, Frontend Development, and Healthcare.',
      
      tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
      icon: GraduationCap,
      color: 'from-purple-500 to-indigo-500',
      demo: 'https://ptascloud.online/',
      email : 'oudomngoun29@gmail.com',
      password : '12345678'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>

          <p className="text-gray-400 mt-4 text-lg">
            A selection of my recent work and contributions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => {

            const Icon = project.icon;

            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20"
              >

                {/* Icon + Link */}
                <div className="flex items-start justify-between mb-4">

                  <div className={`p-3 bg-gradient-to-br ${project.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}

                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Role */}
                {project.role && (
                  <p className="text-sm text-cyan-400 font-semibold mb-3">
                    {project.role}
                  </p>
                )}

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-lg text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Projects;