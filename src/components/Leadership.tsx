import { Users, Calendar, Award } from 'lucide-react';

const Leadership = () => {
  const leadership = [
    {
      title: 'Norton University',
      role: 'Class Monitor',
      period: 'Jan 2024 – Present',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      description: [
        'Coordinated communication between lecturers and students',
        'Assisted with academic activities and announcements',
        'Organized class schedules and group activities',
      ],
      current: true,
    },
    {
      title: 'Above & Beyond School',
      role: 'Backend Engineering Class - Project Team Leader',
      period: '2025',
      icon: Users,
      color: 'from-cyan-500 to-teal-500',
      description: [
        'Led development teams and coordinated project tasks',
        'Managed project timelines and deliverables',
        'Mentored team members on backend development practices',
      ],
      current: false,
    },
    {
      title: 'Maxwell Leadership',
      role: 'Event IT Support',
      period: 'Nov 2024',
      icon: Award,
      color: 'from-teal-500 to-blue-500',
      description: [
        'Provided IT support for leadership events',
        'Assisted with presentations and equipment setup',
        'Ensured smooth technical operations during events',
      ],
      current: false,
    },
    {
    title: 'Spring Education Center',
    role: 'Sub Leader – Marketing Intern',
    period: '3 Months',
    icon: Award,
    color: 'from-green-500 to-teal-500',
    description: [
      'Supported the marketing team in planning and promoting educational programs',
      'Assisted in coordinating marketing activities and campaigns',
      'Collaborated with team members to improve outreach and student engagement',
      'Helped manage tasks and communication as a sub leader within the internship team',
    ],
    current: false,
  },
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-gray-900/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Leadership & Involvement
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Leadership roles and community contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${item.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  {item.current && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-semibold">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-blue-400 font-semibold mb-3">{item.role}</p>

                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <Calendar size={16} />
                  <span>{item.period}</span>
                </div>

                <ul className="space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
