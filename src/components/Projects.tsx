import { useState } from 'react';
import { ExternalLink, Code2, Palette, ShoppingBag, Building2, Plane, GraduationCap, Coffee, MonitorPlay } from 'lucide-react';
import School from '../image/school.png';
import Cafe from '../image/cafe.png';
import Gas from '../image/pertonas.png';
import Zaro from '../image/zaro.png';
import Food from '../image/food.png';
import Careerse from '../image/careers.png';
import Ai from '../image/ai.png';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web/App', 'System', 'UX/UI'];

  const projects = [
    {
      title: 'Cafe POS + Ordering System',
      description: 'SaaS platform designed for cafes to manage orders, track inventory, and handle point-of-sale transactions smoothly.',
      category: 'System',
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      icon: Coffee,
      color: 'from-orange-500 to-yellow-500',
      logo: Cafe, // Just drop cafe-logo.png in public/image/
      demo: '#',
    },
    {
      title: 'Online School Web/App',
      description: 'Comprehensive digital learning platform for managing classes, students, and digital learning resources efficiently.',
      category: 'Web/App',
      tech: ['React.js', 'Express.js', 'MongoDB'],
      icon: MonitorPlay,
      color: 'from-green-500 to-emerald-500',
      logo: School,
      demo: 'https://online-school.coredev.online/login',
    },
    {
      title: 'Gas Station System',
      description: 'Full-stack system for managing fuel sales and station operations with real-time data tracking and reporting.',
      category: 'System',
      tech: ['React.js', 'Express.js', 'REST APIs', 'PostgreSQL'],
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      logo: Gas,
      demo: 'https://petronas-cambodia.up.railway.app/login',
    },
    {
      title: 'ZaRoFashion',
      description: 'Online clothing brand with e-commerce features, Telegram bot for order invoices, and multi-language support (Khmer/English).',
      category: 'Web/App',
      tech: ['React.js', 'Tailwind CSS', 'Telegram Bot API'],
      icon: ShoppingBag,
      color: 'from-cyan-500 to-teal-500',
      role: 'Founder & Developer',
      logo: Zaro,
      demo: 'https://zarofitkh.netlify.app/',
    },
    {
      title: 'Angkor Food',
      description: 'UX/UI Design project for e-commerce mobile and web interfaces. Created wireframes and interactive prototypes.',
      category: 'UX/UI',
      tech: ['Figma', 'UX/UI Design', 'Prototyping'],
      icon: Palette,
      color: 'from-teal-500 to-green-500',
      logo: Food,
      demo: 'https://www.figma.com/design/888fczHP6UEqfGUzaxeFO1/Untitled?node-id=0-1&t=ZTxKexX9GQ77WMAQ-1',
    },
    {
      title: 'Hospital Management System',
      description: 'Comprehensive healthcare management system with frontend interface, API integration with backend, and thorough API testing.',
      category: 'System',
      tech: ['React.js', 'REST APIs', 'Postman'],
      icon: Code2,
      color: 'from-purple-500 to-blue-500',
      logo: Ai,
    },
    {
      title: 'CareerSync',
      description: 'Education platform connecting students with mentors. Email: oudomngoun29@gmail.com | Pass: 12345678',
      category: 'Web/App',
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs'],
      icon: GraduationCap,
      color: 'from-purple-500 to-indigo-500',
      logo: Careerse,
      demo: 'https://ptascloud.online/',
    },
    {
      title: 'Khmer New Year',
      description: 'An interactive web experience celebrating Khmer New Year with cultural traditions, festive visuals, and engaging content for users to explore.',
      category: 'Web/App',
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs'],
      icon: GraduationCap,
      color: 'from-yellow-500 to-orange-500',
      logo: '',
      demo: 'https://khmer-new-year-two.vercel.app/',
    },
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title} // FIXED: This stops the React crashing error!
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 flex flex-col"
              >
                {/* Header: Company Logo + Link */}
                <div className="flex items-start justify-between mb-5">
                  
                  {project.logo ? (
                    // SHOWS COMPANY LOGO
                    <div className="w-14 h-14 bg-white rounded-xl p-1.5 shadow-md group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <img 
                        src={project.logo} 
                        alt={`${project.title} logo`} 
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  ) : (
                    // FALLBACK ICON (If you don't have a logo yet)
                    <div className={`p-3 bg-gradient-to-br ${project.color} rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={26} className="text-white" />
                    </div>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-cyan-400 transition-colors bg-gray-800/50 rounded-lg hover:bg-gray-700"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                {/* Title & Role */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  {project.role && (
                    <p className="text-sm text-gray-400 font-semibold mb-3">
                      {project.role}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 border border-gray-600 rounded-lg text-xs font-medium text-gray-300 group-hover:border-gray-500 transition-colors"
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