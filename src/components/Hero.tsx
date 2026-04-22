import { ArrowDown, Github, Mail, ChevronRight, FileText, Phone } from 'lucide-react';
import ProfilePic from '../image/oudom.png';
const Hero = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"></div>

      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        
        {/* Changed to a grid layout for Desktop: Text on left, Image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT CONTENT (Left Side) */}
          <div className="animate-fade-in-down text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="block text-gray-300 mb-2">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2">
                OUDOM NGOUN
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4">
              Full-Stack Software Developer
            </h2>

            <p className="text-lg sm:text-xl text-cyan-400 mb-6 font-medium">
              Backend Engineer | Project Manager
            </p>

            <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I build scalable web applications, POS systems, and data-driven digital platforms.
              Passionate about creating modern applications that solve real business problems.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 text-white"
              >
                View Projects
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Oudom_Ngoun_CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-white"
              >
                <FileText size={20} />
                View CV
              </a>
              
              <a
                href="https://github.com/OudomK"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-white"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center text-gray-400 text-sm sm:text-base">
              <a href="tel:+855962089546" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone size={16} /> {/* Swapped to Phone icon for the number */}
                096 208 9546
              </a>
              <span className="hidden sm:block text-gray-600">•</span>
              <a href="mailto:keooudom189@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={16} />
                keooudom189@gmail.com
              </a>
            </div>
          </div>

          {/* PROFILE IMAGE (Right Side) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Glowing border effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
              
              {/* The actual image container */}
              <div className="relative w-full h-full rounded-full border-4 border-gray-800 overflow-hidden shadow-2xl bg-gray-900 z-10">
                <img 
                  src={ProfilePic} // Put your photo in the public folder and name it profile.jpg
                  alt="Oudom Ngoun" 
                  className="w-full h-full object-cover object-top"
                  // Fallback if image is missing
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-500 bg-gray-800 text-2xl font-bold">ON</div>';
                  }}
                />
              </div>

              {/* Little floating tech badges (Optional but looks cool!) */}
              <div className="absolute top-10 -left-6 bg-gray-800 border border-gray-700 p-3 rounded-xl shadow-lg z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-blue-400 font-bold">React</span>
              </div>
              <div className="absolute bottom-10 -right-4 bg-gray-800 border border-gray-700 p-3 rounded-xl shadow-lg z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="text-cyan-400 font-bold">Node.js</span>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;