import { Code2, Layers, Database, Wrench } from 'lucide-react';
import {
  SiHtml5, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs, SiFigma,
  SiNodedotjs, SiExpress, SiFastapi, SiLaravel, SiPhp, SiPython, SiNestjs,
  SiMongodb, SiPostgresql, SiMysql,
  SiDocker, SiGit, SiGithub, SiGitlab, SiPostman, SiFlutter, SiCplusplus
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaDatabase, FaMicrosoft } from 'react-icons/fa';
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
        { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
        { name: 'Git', icon: SiGit, color: 'text-orange-500' },
        { name: 'GitHub', icon: SiGithub, color: 'text-gray-300' },
        { name: 'GitLab', icon: SiGitlab, color: 'text-orange-400' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
        { name: 'VS Code', icon: VscVscode, color: 'text-blue-500' },
        { name: 'Flutter', icon: SiFlutter, color: 'text-cyan-400' },
        { name: 'PowerBI', icon: FaMicrosoft, color: 'text-yellow-500' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
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
      </div>
    </section>
  );
};

export default Skills;