import { Trophy, Lightbulb, Users, Target } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements & Recognition
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Competitions and notable accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                <Trophy size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  ApsaraAI – AI for Gender Inclusion Ideathon
                </h3>
                <p className="text-blue-400 font-semibold text-lg mb-2">Participant</p>
                <p className="text-gray-400 text-sm mb-4">October 2025</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600">
                <div className="flex items-center gap-3 mb-3">
                  <Target size={20} className="text-cyan-400" />
                  <h4 className="text-lg font-semibold text-white">Focus Area</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-blue-400 font-semibold">Education & Skills Development</span> – Empowering Women in STEM
                </p>
              </div>

              <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb size={20} className="text-cyan-400" />
                  <h4 className="text-lg font-semibold text-white">Key Activities</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                    <span className="leading-relaxed">
                      Worked with mentors and teams to develop AI-based solutions addressing gender inclusion challenges
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                    <span className="leading-relaxed">
                      Presented project ideas and research findings to judges and stakeholders
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                    <span className="leading-relaxed">
                      Collaborated with diverse teams to explore innovative applications of AI in education
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600">
                <div className="flex items-center gap-3 mb-4">
                  <Users size={20} className="text-cyan-400" />
                  <h4 className="text-lg font-semibold text-white">Impact</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Contributed to developing solutions aimed at reducing gender disparities in STEM fields and promoting equal opportunities for women in technology and education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
