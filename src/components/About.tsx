import { GraduationCap, BookOpen } from 'lucide-react';

const About = () => {
  const courses = [
    'Data Analytics',
    'Networking',
    'UX/UI Design',
    'Mobile Full-Stack Development',
    'Web Full-Stack Development',
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-gray-900/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Software Development student at Norton University with strong experience in
              <span className="text-blue-400 font-semibold"> full-stack development</span>,
              <span className="text-cyan-400 font-semibold"> backend engineering</span>, and
              <span className="text-blue-400 font-semibold"> system analysis</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My passion lies in building modern, scalable applications that solve real-world business problems.
              I have hands-on experience with web applications, POS systems, and data-driven platforms.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive in collaborative environments and enjoy working with cross-functional teams to deliver
              high-quality software solutions. My goal is to continue growing as a developer while contributing
              to innovative projects that make a meaningful impact.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Norton University</h3>
                  <p className="text-gray-400">Bachelor of Science in Software Development</p>
                  <p className="text-blue-400 text-sm mt-1">Aug 2022 – 2026</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={20} className="text-cyan-400" />
                  <h4 className="font-semibold text-gray-200">Relevant Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
