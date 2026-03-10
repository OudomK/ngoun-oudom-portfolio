import { ArrowDown, Github, Mail, ChevronRight } from 'lucide-react';

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

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-down">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-300 mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              OUDOM NGOUN
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 mb-6">
            Full-Stack Software Developer
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed">
            Backend Engineer | Project Manager
          </p>

          <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build scalable web applications, POS systems, and data-driven digital platforms.
            Passionate about creating modern applications that solve real business problems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/oudomweb"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400">
            <a href="tel:+85596208954" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail size={18} />
              +855 96 208 9546
            </a>
            <span className="hidden sm:block">•</span>
            <a href="mailto:keooudom189@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail size={18} />
              keooudom189@gmail.com
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
