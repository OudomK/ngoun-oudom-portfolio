import { ExternalLink } from 'lucide-react';
import Etec from '../image/etec.png';
import Anb from '../image/anb.png';
import C  from '../image/c++.jpg';
import Frontend from '../image/frontend.jpg';
import Backend from '../image/backend.jpg';
import BackendEngineer from '../image/anb.jpg';

const Certificates = () => {
  const courses = [
    {
      title: 'C++ / OOP Programming',
      logo: Etec,
      issuer: 'Etec Center',
      description: 'Object-oriented programming fundamentals with C++',
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'hover:shadow-blue-500/10',
      borderHover: 'hover:border-blue-500/50',
      file: C,
    },
    {
      title: 'Frontend Development',
      logo: Etec,
      issuer: 'Etec Center',
      description: 'HTML, CSS & JavaScript web development',
      color: 'from-cyan-500 to-teal-500',
      glowColor: 'hover:shadow-cyan-500/10',
      borderHover: 'hover:border-cyan-500/50',
      file: Frontend,
    },
    {
      title: 'Backend Development',
      logo: Etec,
      issuer: 'Etec Center',
      description: 'PHP, Apache & XAMPP server-side development',
      color: 'from-violet-500 to-purple-500',
      glowColor: 'hover:shadow-violet-500/10',
      borderHover: 'hover:border-violet-500/50',
      file: Backend,
    },
    {
      title: 'Backend Engineering',
      logo: Anb, // Replace null with: AboveBeyond — once you add the image to src/image/
      issuer: 'Above & Beyond School',
      description: '3-month intensive backend engineering program',
      color: 'from-purple-500 to-indigo-500',
      glowColor: 'hover:shadow-purple-500/10',
      borderHover: 'hover:border-purple-500/50',
      file: BackendEngineer, // Update with your actual filename
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Short Courses
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Learning courses and programs I have completed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 ${course.borderHover} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${course.glowColor} flex flex-col`}
            >
              {/* Logo icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden`}>
                {course.logo ? (
                  <img
                    src={course.logo}
                    alt={course.issuer}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <span className="text-white font-bold text-xs leading-none text-center px-1">
                    A&B
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {course.title}
              </h3>

              <p className="text-blue-400 font-semibold text-sm mb-1">
                {course.issuer}
              </p>

              <p className="text-gray-500 text-sm mb-6">
                {course.description}
              </p>

              <a
                href={course.file}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${course.color} rounded-xl text-white text-sm font-semibold hover:opacity-90 hover:shadow-lg transition-all duration-200`}
              >
                <ExternalLink size={16} />
                View Certificate
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;