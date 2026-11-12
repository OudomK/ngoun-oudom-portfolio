import { useState } from 'react';
import { ExternalLink, Github, Code2, Palette, ShoppingBag, Building2, GraduationCap, MonitorPlay, Wallet, Hotel, type LucideIcon } from 'lucide-react';
import School from '../image/school.png';
import Gas from '../image/pertonas.png';
import Zaro from '../image/zaro.png';
import Food from '../image/food.png';
import Careerse from '../image/careers.png';
import Ai from '../image/ai.png';
import LuyNisseatLogo from '../image/luy-nisseat-logo.png';

interface Project {
  title: string;
  description: string;
  category: string;
  tech: string[];
  icon: LucideIcon;
  color: string;
  logo?: string;
  role?: string;
  challenge?: string;
  impact?: string;
  demo?: string;
  demoLabel?: string;
  repo?: string;
  repoLabel?: string;
  links?: { label: string; url: string }[];
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web/App', 'System', 'UX/UI', 'Website'];

  const projects: Project[] = [
    {
      title: "AI Women's Health Assistant",
      description: 'Full-Stack Project focusing on providing AI-driven health assistance and recommendations for women. Includes a separate admin dashboard for doctors.',
      category: 'Web/App',
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'AI Integration'],
      icon: Code2,
      color: 'from-pink-500 to-rose-500',
      logo: Ai,
      role: 'Full-Stack Developer (End-to-End)',
      challenge: 'Eliminated AI hallucination risk in medical answers by building a RAG pipeline with pgvector and the Gemini API, so the assistant only responds from doctor-verified documents, plus JWT and role-based auth to protect patient data.',
      impact: 'Delivered a complete HealthTech platform from planning to deployment, closing the women\'s health information gap and cutting doctors\' repetitive-question workload.',
      demo: 'https://frontend-web-beta-ten.vercel.app/home',
      repo: 'https://github.com/OudomK/women-ai.git',
      repoLabel: 'GitHub Repo',
    },
    {
      title: 'Carresync',
      description: 'Mentor-matching and booking platform connecting students and professionals with mentors across careers like medicine, software development, networking, and accounting. Built with separate frontend and backend repos.',
      category: 'Web/App',
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs'],
      icon: GraduationCap,
      color: 'from-purple-500 to-indigo-500',
      logo: Careerse,
      role: 'Full-Stack Developer (Admin Dashboard)',
      challenge: 'Built the mentor-matching and booking engine so students and professionals could find and book sessions with mentors in the career field they wanted to explore.',
      impact: 'Lets students and young professionals explore career paths directly through structured mentor sessions.',
      demo: 'https://ptascloud.online/',
      repo: 'https://github.com/anbschool032-dom/educationanb.git',
      repoLabel: 'GitHub Repo',
    },
    {
      title: 'Gas Station System',
      description: 'Full-stack team project for managing fuel sales and station operations with real-time data tracking and reporting.',
      category: 'System',
      tech: ['React.js', 'Express.js', 'REST APIs', 'PostgreSQL'],
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      logo: Gas,
      role: 'System Analyst & Frontend Developer',
      challenge: 'Designed the fuel stock in/out tracking system with customer debt/credit management and real-time delivery tracking via map integration.',
      impact: 'Streamlined station operations — inventory, payments, and delivery visibility — into one system.',
      demo: 'https://petronas-cambodia.up.railway.app/login',
      repo: 'https://github.com/oudomweb/PetronasCam.git',
    },
    {
      title: 'Online School Management',
      description: 'Comprehensive digital learning platform for managing classes, students, and digital learning resources efficiently.',
      category: 'Web/App',
      tech: ['React.js', 'Express.js', 'MongoDB'],
      icon: MonitorPlay,
      color: 'from-green-500 to-emerald-500',
      logo: School,
      role: 'System Analyst & Frontend Developer',
      challenge: 'Built the online exam and placement-test system (English/Chinese level tests) with automatic certificate generation for students who pass, plus attendance tracking.',
      impact: 'Digitized the full student lifecycle from enrollment testing to certification and attendance.',
      demo: 'https://online-school.coredev.online/login',
      repo: 'https://github.com/OudomK/salaonline.git',
    },
    {
      title: 'ZaRoFashion',
      description: 'Online clothing brand with e-commerce features, Telegram bot for order invoices, and multi-language support (Khmer/English).',
      category: 'Web/App',
      tech: ['React.js', 'Tailwind CSS', 'Telegram Bot API'],
      icon: ShoppingBag,
      color: 'from-cyan-500 to-teal-500',
      logo: Zaro,
      role: 'Founder & Developer',
      challenge: 'Built a bilingual (Khmer/English) e-commerce storefront with a Telegram bot that pushes real-time order notifications straight to the admin.',
      impact: 'Runs a one-person clothing brand\'s order management entirely through Telegram, with no separate admin app needed.',
      demo: 'https://zarofitkh.netlify.app/',
      repo: '', // TODO: add GitHub repo URL
    },
    {
      title: 'Angkor Food',
      description: 'UX/UI Design project for e-commerce mobile and web interfaces. Created wireframes and interactive prototypes.',
      category: 'UX/UI',
      tech: ['Figma', 'UX/UI Design', 'Prototyping'],
      icon: Palette,
      color: 'from-teal-500 to-green-500',
      logo: Food,
      role: 'UX/UI Designer',
      challenge: 'Designed wireframes and interactive prototypes for a food e-commerce experience across mobile and web.',
      demo: 'https://www.figma.com/design/888fczHP6UEqfGUzaxeFO1/Untitled?node-id=0-1&t=ZTxKexX9GQ77WMAQ-1',
      demoLabel: 'View Design',
    },
    {
      title: 'Luy-nisseat',
      description: 'Personal finance PWA and Telegram bot helping Cambodians track income/expenses, set savings goals, and calculate debt-free timelines, fully bilingual in Khmer.',
      category: 'Web/App',
      tech: ['React (PWA)', 'Telegram Bot API', 'Khmer Localization'],
      icon: Wallet,
      color: 'from-amber-500 to-orange-500',
      logo: LuyNisseatLogo,
      role: 'Founder & Developer',
      challenge: 'Built a debt-payoff calculator and a 60/30/10 budget-breakdown engine kept in sync across both a Telegram bot and a web PWA, plus a streak system to drive daily tracking habits.',
      impact: 'Gives everyday Cambodians a simple bilingual tool to budget, save, and plan debt payoff — no bank or spreadsheet needed.',
      demo: 'https://luy-nissaet.pages.dev/onboarding',
      repo: 'https://github.com/OudomK/luy-nissaet.git',
      links: [
        { label: 'Telegram Bot (@nissaet_bot)', url: 'https://t.me/nissaet_bot' },
      ],
    },
    {
      title: 'Monorom Hotel',
      description: 'Bilingual (Khmer/English) booking landing page for a riverside hotel in Kampong Cham, with room listings, amenities, gallery, and direct Call/Telegram booking.',
      category: 'Website',
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      icon: Hotel,
      color: 'from-sky-500 to-blue-600',
      role: 'Freelance Developer',
      challenge: 'Built a fully bilingual (Khmer/English) site with a responsive room gallery, integrated Google reviews display, and one-tap Call/Telegram booking links for a non-technical hotel owner to manage.',
      impact: 'Gave the hotel a professional online presence with direct booking contact, replacing having no website at all.',
      demo: 'https://monorom-hotel.vercel.app/',
      repo: 'https://github.com/OudomK/monorom-hotel.git',
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
                key={project.title}
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
                      aria-label={`Open ${project.title} live demo`}
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
                <div className="mb-6 flex-grow space-y-3">
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  {project.challenge && (
                    <p className="text-gray-400 leading-relaxed text-sm">
                      <span className="font-semibold text-gray-300">Challenge: </span>
                      {project.challenge}
                    </p>
                  )}
                  {project.impact && (
                    <p className="text-gray-400 leading-relaxed text-sm">
                      <span className="font-semibold text-cyan-400">Impact: </span>
                      {project.impact}
                    </p>
                  )}
                </div>

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

                {/* Links */}
                {(project.demo || project.repo || project.links?.length) && (
                  <div className="flex flex-wrap gap-3 mt-5">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-sm font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        {project.demoLabel ?? 'Live Demo'}
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg text-sm font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        {project.repoLabel ?? 'GitHub Repo'}
                      </a>
                    )}
                    {project.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg text-sm font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        {link.url.includes('github.com') ? <Github size={16} /> : <ExternalLink size={16} />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;