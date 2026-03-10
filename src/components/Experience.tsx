import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Gas Station System',
      role: 'Full Stack Team Project',
      period: 'May 2025 – Present',
      location: 'Remote',
      description: [
        'Developed frontend using React.js with modern UI components',
        'Integrated APIs with Express.js backend for seamless data flow',
        'Coordinated with backend developers for system communication',
        'Planned development phases using Waterfall methodology',
      ],
      current: true,
    },
    {
      title: 'IT Sroksrea',
      role: 'Full Stack Web System',
      period: 'March 2024 – Present',
      location: 'Remote',
      description: [
        'Translated business requirements into technical system specifications',
        'Collaborated with frontend teams to integrate backend data',
        'Performed data analysis for project planning and optimization',
        'Supported development workflows and requirement analysis',
      ],
      current: true,
    },
    {
      title: 'KiloIT',
      role: 'Frontend Development Training',
      period: 'June 2024 – December 2024',
      location: 'Training Program',
      description: [
        'Built Personal Portfolio Website with responsive design',
        'Developed Hospital Management Website with complex features',
        'Created Travel & Hotel Booking Website with booking flow',
        'Learned: HTML, CSS, JavaScript, React, Git, API integration, SDLC',
      ],
      current: false,
    },
    {
      title: 'Baby Outlet Cambodia',
      role: 'Mobile App Tester',
      period: 'June – August 2024',
      location: 'On-site',
      description: [
        'Tested mobile applications for bugs and performance issues',
        'Presented live demos to clients with detailed feedback',
        'Collaborated with developers to verify fixes and improvements',
        'Documented test cases and reported issues systematically',
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-gray-900/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">
            My professional journey and contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-400 font-semibold">{exp.role}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                    {exp.current && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-semibold">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 ml-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
