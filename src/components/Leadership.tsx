// import { Users, Calendar, Award } from 'lucide-react';

// import NortonLogo from '../image/norton.png';
// import AboveBeyondLogo from '../image/anb.png';
// import MaxwellLogo from '../image/puc.png';
// import SpringLogo from '../image/spring.png';

// const Leadership = () => {
//   const leadership = [
//     {
//       title: 'Norton University',
//       role: 'Class Monitor',
//       period: 'Jan 2024 – Present',
//       icon: Users,
//       color: 'from-blue-500 to-cyan-500',
//       brandColor: '#1D4ED8',
//       logo: NortonLogo,
//       current: true,
//       description: [
//         'Coordinated communication between lecturers and students',
//         'Assisted with academic activities and announcements',
//         'Organized class schedules and group activities',
//       ],
//     },
//     {
//       title: 'Above & Beyond School',
//       role: 'Backend Engineering Class - Project Team Leader',
//       period: '2025',
//       icon: Users,
//       color: 'from-cyan-500 to-teal-500',
//       brandColor: '#0891B2',
//       logo: AboveBeyondLogo,
//       current: false,
//       description: [
//         'Led development teams and coordinated project tasks',
//         'Managed project timelines and deliverables',
//         'Mentored team members on backend development practices',
//       ],
//     },
//     {
//       title: 'Maxwell Leadership',
//       role: 'Event IT Support',
//       period: 'Nov 2024',
//       icon: Award,
//       color: 'from-teal-500 to-blue-500',
//       brandColor: '#0D9488',
//       logo: MaxwellLogo,
//       current: false,
//       description: [
//         'Provided IT support for leadership events',
//         'Assisted with presentations and equipment setup',
//         'Ensured smooth technical operations during events',
//       ],
//     },
//     {
//       title: 'Spring Education Center',
//       role: 'Sub Leader – Marketing Intern',
//       period: '3 Months',
//       icon: Award,
//       color: 'from-green-500 to-teal-500',
//       brandColor: '#16A34A',
//       logo: SpringLogo,
//       current: false,
//       description: [
//         'Supported the marketing team in planning and promoting educational programs',
//         'Assisted in coordinating marketing activities and campaigns',
//         'Collaborated with team members to improve outreach and student engagement',
//         'Helped manage tasks and communication as a sub leader within the internship team',
//       ],
//     },
//   ];

//   return (
//     <section id="leadership" className="py-20 bg-gray-900 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-gray-900/30"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Leadership & Involvement
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
//           <p className="text-gray-400 mt-4 text-lg">
//             Leadership roles and community contributions
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {leadership.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
//               >
//                 {/* Header: Logo + Current badge */}
//                 <div className="flex items-start justify-between mb-5">

//                   {/* Logo */}
//                   <div className="w-14 h-14 rounded-xl overflow-hidden bg-white p-1.5 shadow-md group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
//                     <img
//                       src={item.logo}
//                       alt={item.title}
//                       className="w-full h-full object-contain rounded-lg"
//                       onError={(e) => {
//                         e.currentTarget.style.display = 'none';
//                         const parent = e.currentTarget.parentElement!;
//                         parent.style.backgroundColor = item.brandColor;
//                         parent.style.padding = '0';
//                         parent.innerHTML = `<span style="color:white;font-weight:800;font-size:13px;width:100%;height:100%;display:flex;align-items:center;justify-content:center;">${item.title.slice(0, 2).toUpperCase()}</span>`;
//                       }}
//                     />
//                   </div>

//                   {/* Current badge */}
//                   {item.current && (
//                     <span className="px-2 py-0.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-semibold animate-pulse">
//                       ● Current
//                     </span>
//                   )}
//                 </div>

//                 {/* Title & Role */}
//                 <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
//                 <p className="text-blue-400 font-semibold mb-3">{item.role}</p>

//                 {/* Period */}
//                 <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
//                   <Calendar size={14} className="text-cyan-400" />
//                   <span>{item.period}</span>
//                 </div>

//                 {/* Description */}
//                 <ul className="space-y-2 mt-auto">
//                   {item.description.map((desc, i) => (
//                     <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
//                       <span className="text-cyan-400 mt-1.5 flex-shrink-0 text-xs">▹</span>
//                       <span className="leading-relaxed">{desc}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Leadership;



import { Users, Calendar, Award, ExternalLink } from 'lucide-react';

import NortonLogo from '../image/norton.png';
import AboveBeyondLogo from '../image/anb.png';
import MaxwellLogo from '../image/puc.png';
import SpringLogo from '../image/spring.png';
import Maxwell from '../image/maxwell.jpg';
import SpringEdu from '../image/spring.jpg';
const Leadership = () => {
  const leadership = [
    {
      title: 'Norton University',
      role: 'Class Monitor',
      period: 'Jan 2024 – Present',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      brandColor: '#1D4ED8',
      logo: NortonLogo,
      current: true,
      certificate: null,
      description: [
        'Coordinated communication between lecturers and students',
        'Assisted with academic activities and announcements',
        'Organized class schedules and group activities',
      ],
    },
    {
      title: 'Above & Beyond School',
      role: 'Backend Engineering Class - Project Team Leader',
      period: '2025',
      icon: Users,
      color: 'from-cyan-500 to-teal-500',
      brandColor: '#0891B2',
      logo: AboveBeyondLogo,
      current: false,
      certificate: null,
      description: [
        'Led development teams and coordinated project tasks',
        'Managed project timelines and deliverables',
        'Mentored team members on backend development practices',
      ],
    },
    {
      title: 'Maxwell Leadership',
      role: 'Event IT Support',
      period: 'Nov 2024',
      icon: Award,
      color: 'from-teal-500 to-blue-500',
      brandColor: '#0D9488',
      logo: MaxwellLogo,
      current: false,
      certificate: Maxwell, // Update with your actual filename
      description: [
        'Provided IT support for leadership events',
        'Assisted with presentations and equipment setup',
        'Ensured smooth technical operations during events',
      ],
    },
    {
      title: 'Spring Education Center',
      role: 'Sub Leader – Marketing Intern',
      period: '3 Months',
      icon: Award,
      color: 'from-green-500 to-teal-500',
      brandColor: '#16A34A',
      logo: SpringLogo,
      current: false,
      certificate: SpringEdu, // Update with your actual filename
      description: [
        'Supported the marketing team in planning and promoting educational programs',
        'Assisted in coordinating marketing activities and campaigns',
        'Collaborated with team members to improve outreach and student engagement',
        'Helped manage tasks and communication as a sub leader within the internship team',
      ],
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
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
              >
                {/* Header: Logo + Current badge */}
                <div className="flex items-start justify-between mb-5">

                  {/* Logo */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-white p-1.5 shadow-md group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement!;
                        parent.style.backgroundColor = item.brandColor;
                        parent.style.padding = '0';
                        parent.innerHTML = `<span style="color:white;font-weight:800;font-size:13px;width:100%;height:100%;display:flex;align-items:center;justify-content:center;">${item.title.slice(0, 2).toUpperCase()}</span>`;
                      }}
                    />
                  </div>

                  {/* Current badge */}
                  {item.current && (
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-semibold animate-pulse">
                      ● Current
                    </span>
                  )}
                </div>

                {/* Title & Role */}
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-blue-400 font-semibold mb-3">{item.role}</p>

                {/* Period + Certificate button */}
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                  {item.certificate && (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1 bg-blue-500/15 hover:bg-blue-500/30 border border-blue-500/30 hover:border-blue-500/60 rounded-full text-blue-400 hover:text-blue-300 text-xs font-medium transition-all duration-200"
                    >
                      <ExternalLink size={11} />
                      Certificate
                    </a>
                  )}
                </div>

                {/* Description */}
                <ul className="space-y-2 mt-auto">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-cyan-400 mt-1.5 flex-shrink-0 text-xs">▹</span>
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