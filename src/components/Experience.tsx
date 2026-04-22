import { Calendar, MapPin } from 'lucide-react';
import PetronasLogo from '../image/pertonas.png';
import ITsroksrea from '../image/cafe.png';
import KiloITLogo from '../image/kiloit.png';
const Experience = () => {
  const experiences = [
    {
      title: 'Petronas',
      role: 'Full Stack Team Project',
      period: 'May 2025 – Present',
      location: 'Remote',
      brandColor: '#00A19C',
      logo: PetronasLogo,
      current: false,
      description: [
        'Developed frontend using React.js with modern UI components',
        'Integrated APIs with Express.js backend for seamless data flow',
        'Coordinated with backend developers for system communication',
        'Planned development phases using Waterfall methodology',
      ],
    },
    {
      title: 'IT Sroksrea',
      role: 'Full Stack Web System',
      period: 'March 2024 – Present',
      location: 'Remote',
      brandColor: '#3B82F6',
      logo: ITsroksrea,
      current: false,
      description: [
        'Translated business requirements into technical system specifications',
        'Collaborated with frontend teams to integrate backend data',
        'Performed data analysis for project planning and optimization',
        'Supported development workflows and requirement analysis',
      ],
    },
    {
      title: 'KiloIT',
      role: 'Frontend Development Training',
      period: 'June 2024 – December 2024',
      location: 'Training Program',
      brandColor: '#8B5CF6',
      logo: KiloITLogo,
      current: false,
      description: [
        'Built Personal Portfolio Website with responsive design',
        'Developed Hospital Management Website with complex features',
        'Created Travel & Hotel Booking Website with booking flow',
        'Learned: HTML, CSS, JavaScript, React, Git, API integration, SDLC',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-gray-900/30"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">My professional journey and contributions</p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6 group">

                {/* Desktop Timeline Logo */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl z-10 group-hover:scale-110 transition-transform duration-300 border-2 border-gray-700 group-hover:border-blue-400 overflow-hidden bg-white p-1.5 shadow-lg"
                  >
                    <img
                      src={exp.logo}
                      alt={exp.title}
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement!;
                        parent.style.backgroundColor = exp.brandColor;
                        parent.style.padding = '0';
                        parent.style.display = 'flex';
                        parent.style.alignItems = 'center';
                        parent.style.justifyContent = 'center';
                        parent.innerHTML = `<span style="color:white;font-weight:800;font-size:14px;">${exp.title.slice(0, 2).toUpperCase()}</span>`;
                      }}
                    />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">

                  {/* Top row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                    <div className="flex items-center gap-3 mb-3 md:mb-0">

                      {/* Mobile Logo */}
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-1 md:hidden flex-shrink-0 shadow-md">
                        <img
                          src={exp.logo}
                          alt={exp.title}
                          className="w-full h-full object-contain rounded-lg"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement!;
                            parent.style.backgroundColor = exp.brandColor;
                            parent.style.padding = '0';
                            parent.style.display = 'flex';
                            parent.style.alignItems = 'center';
                            parent.style.justifyContent = 'center';
                            parent.innerHTML = `<span style="color:white;font-weight:800;font-size:12px;">${exp.title.slice(0, 2).toUpperCase()}</span>`;
                          }}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-semibold animate-pulse">
                              ● Current
                            </span>
                          )}
                        </div>
                        <p className="text-blue-400 font-semibold mt-0.5">{exp.role}</p>
                      </div>
                    </div>

                    {/* Period & Location */}
                    <div className="flex flex-col gap-1.5 text-sm text-gray-400 md:text-right">
                      <div className="flex items-center gap-2 md:justify-end">
                        <Calendar size={14} className="text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 md:justify-end">
                        <MapPin size={14} className="text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description bullets */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1.5 flex-shrink-0 text-xs">▹</span>
                        <span className="leading-relaxed text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;