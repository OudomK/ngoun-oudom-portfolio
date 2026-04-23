// import { Code2, Layers, Database, Wrench } from 'lucide-react';
// import {
//   SiHtml5, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs, SiFigma,
//   SiNodedotjs, SiExpress, SiFastapi, SiLaravel, SiPhp, SiPython, SiNestjs,
//   SiMongodb, SiPostgresql, SiMysql,
//   SiDocker, SiGit, SiGithub, SiGitlab, SiPostman, SiFlutter, SiCplusplus
// } from 'react-icons/si';
// import { FaJava, FaCss3Alt, FaDatabase, FaMicrosoft } from 'react-icons/fa';
// import { VscVscode } from 'react-icons/vsc';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: 'Frontend',
//       icon: Code2,
//       color: 'from-blue-500 to-cyan-500',
//       skills: [
//         { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
//         { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
//         { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
//         { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
//         { name: 'React.js', icon: SiReact, color: 'text-blue-400' },
//         { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-300' },
//         { name: 'Figma', icon: SiFigma, color: 'text-purple-400' },
//       ],
//     },
//     {
//       title: 'Backend',
//       icon: Layers,
//       color: 'from-cyan-500 to-teal-500',
//       skills: [
//         { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
//         { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
//         { name: 'NestJS', icon: SiNestjs, color: 'text-red-400' },
//         { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400' },
//         { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
//         { name: 'PHP', icon: SiPhp, color: 'text-indigo-400' },
//         { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
//         { name: 'Java', icon: FaJava, color: 'text-orange-400' },
//         { name: 'C++', icon: SiCplusplus, color: 'text-blue-400' },
//       ],
//     },
//     {
//       title: 'Database',
//       icon: Database,
//       color: 'from-teal-500 to-blue-500',
//       skills: [
//         { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
//         { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
//         { name: 'MySQL', icon: SiMysql, color: 'text-orange-400' },
//         { name: 'SQL Server', icon: FaDatabase, color: 'text-red-400' },
//       ],
//     },
//     {
//       title: 'Tools & Others',
//       icon: Wrench,
//       color: 'from-purple-500 to-blue-500',
//       skills: [
//         { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
//         { name: 'Git', icon: SiGit, color: 'text-orange-500' },
//         { name: 'GitHub', icon: SiGithub, color: 'text-gray-300' },
//         { name: 'GitLab', icon: SiGitlab, color: 'text-orange-400' },
//         { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
//         { name: 'VS Code', icon: VscVscode, color: 'text-blue-500' },
//         { name: 'Flutter', icon: SiFlutter, color: 'text-cyan-400' },
//         { name: 'PowerBI', icon: FaMicrosoft, color: 'text-yellow-500' },
//       ],
//     },
//   ];

//   return (
//     <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Skills & Technologies
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
//           <p className="text-gray-400 mt-4 text-lg">Technologies and tools I work with</p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {skillCategories.map((category, index) => {
//             const Icon = category.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
//               >
//                 <div className="flex items-center gap-3 mb-5">
//                   <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon size={24} className="text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{category.title}</h3>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {category.skills.map((skill, skillIndex) => {
//                     const SkillIcon = skill.icon;
//                     return (
//                       <span
//                         key={skillIndex}
//                         className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:bg-gray-700 hover:border-blue-500 hover:text-white transition-all duration-200 cursor-default"
//                       >
//                         <SkillIcon className={`w-3.5 h-3.5 ${skill.color}`} />
//                         {skill.name}
//                       </span>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;




// import { Code2, Layers, Database, Wrench, Globe, GitBranch } from 'lucide-react';
// import {
//   SiHtml5, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs, SiFigma,
//   SiNodedotjs, SiExpress, SiFastapi, SiLaravel, SiPhp, SiPython, SiNestjs,
//   SiMongodb, SiPostgresql, SiMysql,
//   SiGit, SiGithub, SiGitlab, SiPostman, SiFlutter, SiCplusplus,
//   SiVercel, SiNetlify, SiRailway, SiRender, SiCloudflare,
//   SiHostinger, SiGithubactions
// } from 'react-icons/si';
// // Option 3 - use react-icons/fa instead
// import { FaAws } from 'react-icons/fa';
// import { FaJava, FaCss3Alt, FaDatabase, FaMicrosoft } from 'react-icons/fa';
// import { VscVscode } from 'react-icons/vsc';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: 'Frontend',
//       icon: Code2,
//       color: 'from-blue-500 to-cyan-500',
//       skills: [
//         { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
//         { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
//         { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
//         { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
//         { name: 'React.js', icon: SiReact, color: 'text-blue-400' },
//         { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-300' },
//         { name: 'Figma', icon: SiFigma, color: 'text-purple-400' },
//         { name: 'Flutter', icon: SiFlutter, color: 'text-cyan-400' },
//       ],
//     },
//     {
//       title: 'Backend',
//       icon: Layers,
//       color: 'from-cyan-500 to-teal-500',
//       skills: [
//         { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
//         { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
//         { name: 'NestJS', icon: SiNestjs, color: 'text-red-400' },
//         { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400' },
//         { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
//         { name: 'PHP', icon: SiPhp, color: 'text-indigo-400' },
//         { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
//         { name: 'Java', icon: FaJava, color: 'text-orange-400' },
//         { name: 'C++', icon: SiCplusplus, color: 'text-blue-400' },
//       ],
//     },
//     {
//       title: 'Database',
//       icon: Database,
//       color: 'from-teal-500 to-blue-500',
//       skills: [
//         { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
//         { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
//         { name: 'MySQL', icon: SiMysql, color: 'text-orange-400' },
//         { name: 'SQL Server', icon: FaDatabase, color: 'text-red-400' },
//       ],
//     },
//     {
//       title: 'Tools & Others',
//       icon: Wrench,
//       color: 'from-purple-500 to-blue-500',
//       skills: [
//         { name: 'Git', icon: SiGit, color: 'text-orange-500' },
//         { name: 'GitHub', icon: SiGithub, color: 'text-gray-300' },
//         { name: 'GitLab', icon: SiGitlab, color: 'text-orange-400' },
//         { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
//         { name: 'VS Code', icon: VscVscode, color: 'text-blue-500' },
//         { name: 'PowerBI', icon: FaMicrosoft, color: 'text-yellow-500' },
//       ],
//     },
//     {
//       title: 'Deployment',
//       icon: Globe,
//       color: 'from-orange-500 to-red-500',
//       skills: [
//         { name: 'Vercel', icon: SiVercel, color: 'text-gray-300' },
//         { name: 'Netlify', icon: SiNetlify, color: 'text-teal-400' },
//         { name: 'Railway', icon: SiRailway, color: 'text-purple-400' },
//         { name: 'Render', icon: SiRender, color: 'text-green-400' },
//         { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
//         { name: 'Cloudflare', icon: SiCloudflare, color: 'text-orange-500' },
//         { name: 'Hostinger', icon: SiHostinger, color: 'text-purple-500' },
//       ],
//     },
//     {
//       title: 'CI/CD',
//       icon: GitBranch,
//       color: 'from-green-500 to-cyan-500',
//       skills: [
//         { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-blue-400' },
//         { name: 'GitLab CI', icon: SiGitlab, color: 'text-orange-400' },
//       ],
//     },
//   ];

//   return (
//     <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Skills & Technologies
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
//           <p className="text-gray-400 mt-4 text-lg">Technologies and tools I work with</p>
//         </div>

//         {/* First row - 4 columns */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//           {skillCategories.slice(0, 4).map((category, index) => {
//             const Icon = category.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
//               >
//                 <div className="flex items-center gap-3 mb-5">
//                   <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon size={24} className="text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{category.title}</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {category.skills.map((skill, skillIndex) => {
//                     const SkillIcon = skill.icon;
//                     return (
//                       <span
//                         key={skillIndex}
//                         className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:bg-gray-700 hover:border-blue-500 hover:text-white transition-all duration-200 cursor-default"
//                       >
//                         <SkillIcon className={`w-3.5 h-3.5 ${skill.color}`} />
//                         {skill.name}
//                       </span>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Second row - 2 columns centered */}
//         <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
//           {skillCategories.slice(4).map((category, index) => {
//             const Icon = category.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
//               >
//                 <div className="flex items-center gap-3 mb-5">
//                   <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon size={24} className="text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{category.title}</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {category.skills.map((skill, skillIndex) => {
//                     const SkillIcon = skill.icon;
//                     return (
//                       <span
//                         key={skillIndex}
//                         className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:bg-gray-700 hover:border-blue-500 hover:text-white transition-all duration-200 cursor-default"
//                       >
//                         <SkillIcon className={`w-3.5 h-3.5 ${skill.color}`} />
//                         {skill.name}
//                       </span>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Skills;




import { Code2, Layers, Database, Wrench, Globe, GitBranch, Users } from 'lucide-react';
import {
  SiHtml5, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs, SiFigma,
  SiNodedotjs, SiExpress, SiFastapi, SiLaravel, SiPhp, SiPython, SiNestjs,
  SiMongodb, SiPostgresql, SiMysql,
  SiDocker, SiGit, SiGithub, SiGitlab, SiPostman, SiFlutter, SiCplusplus,
  SiVercel, SiNetlify, SiRailway, SiRender, SiCloudflare,
  SiHostinger, SiGithubactions, 
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaDatabase, FaMicrosoft, FaAws } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'React.js', icon: SiReact, color: 'text-blue-400' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-300' },
        { name: 'Figma', icon: SiFigma, color: 'text-purple-400' },
         { name: 'Flutter', icon: SiFlutter, color: 'text-cyan-400' },
      ],
    },
    {
      title: 'Backend',
      icon: Layers,
      color: 'from-cyan-500 to-teal-500',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
        { name: 'NestJS', icon: SiNestjs, color: 'text-red-400' },
        { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400' },
        { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
        { name: 'PHP', icon: SiPhp, color: 'text-indigo-400' },
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'Java', icon: FaJava, color: 'text-orange-400' },
        { name: 'C++', icon: SiCplusplus, color: 'text-blue-400' },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-teal-500 to-blue-500',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
        { name: 'MySQL', icon: SiMysql, color: 'text-orange-400' },
        { name: 'SQL Server', icon: FaDatabase, color: 'text-red-400' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      color: 'from-purple-500 to-blue-500',
      skills: [
        { name: 'Git', icon: SiGit, color: 'text-orange-500' },
        { name: 'GitHub', icon: SiGithub, color: 'text-gray-300' },
        { name: 'GitLab', icon: SiGitlab, color: 'text-orange-400' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
        { name: 'VS Code', icon: VscVscode, color: 'text-blue-500' },
        { name: 'PowerBI', icon: FaMicrosoft, color: 'text-yellow-500' },
        { name: 'FigJam', icon: SiFigma, color: 'text-orange-400' },
      ],
    },
    {
      title: 'Deployment',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Vercel', icon: SiVercel, color: 'text-gray-300' },
        { name: 'Netlify', icon: SiNetlify, color: 'text-teal-400' },
        { name: 'Railway', icon: SiRailway, color: 'text-purple-400' },
        { name: 'Render', icon: SiRender, color: 'text-green-400' },
        { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
        { name: 'Cloudflare', icon: SiCloudflare, color: 'text-orange-500' },
        { name: 'Hostinger', icon: SiHostinger, color: 'text-purple-500' },
      ],
    },
    {
      title: 'CI/CD',
      icon: GitBranch,
      color: 'from-green-500 to-cyan-500',
      skills: [
        { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-blue-400' },
        { name: 'GitLab CI', icon: SiGitlab, color: 'text-orange-400' },
      ],
    },
  ];

  const softSkills = [
    { name: 'Team Collaboration', emoji: '🤝' },
    { name: 'Project Management', emoji: '📋' },
    { name: 'Problem Solving', emoji: '🧠' },
    { name: 'Communication', emoji: '💬' },
    { name: 'Leadership', emoji: '🎯' },
    { name: 'Agile / Scrum', emoji: '🔄' },
    { name: 'Requirements Analysis', emoji: '📝' },
    { name: 'Time Management', emoji: '⏰' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Technologies and tools I work with</p>
        </div>

        {/* Technical Skills - First row 4 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {skillCategories.slice(0, 4).map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={skillIndex}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:bg-gray-700 hover:border-blue-500 hover:text-white transition-all duration-200 cursor-default"
                      >
                        <SkillIcon className={`w-3.5 h-3.5 ${skill.color}`} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Second row - Deployment & CI/CD centered */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {skillCategories.slice(4).map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={skillIndex}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:bg-gray-700 hover:border-blue-500 hover:text-white transition-all duration-200 cursor-default"
                      >
                        <SkillIcon className={`w-3.5 h-3.5 ${skill.color}`} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-4">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Soft Skills & Professional</h3>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600 hover:border-pink-500/50 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-200 cursor-default hover:shadow-lg hover:shadow-pink-500/10 hover:-translate-y-1"
              >
                <span>{skill.emoji}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;