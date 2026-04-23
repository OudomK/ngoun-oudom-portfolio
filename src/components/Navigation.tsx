// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';

// interface NavigationProps {
//   scrolled: boolean;
// }

// const Navigation = ({ scrolled }: NavigationProps) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navItems = [
//     { label: 'Home', href: '#home' },
//     { label: 'About', href: '#about' },
//     { label: 'Skills', href: '#skills' },
//     { label: 'Experience', href: '#experience' },
//     { label: 'Projects', href: '#projects' },
//     { label: 'Leadership', href: '#leadership' },
//     { label: 'Contact', href: '#contact' },
//   ];

//   const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setMobileMenuOpen(false);
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <a
//             href="#home"
//             onClick={(e) => scrollToSection(e, '#home')}
//             className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
//           >
//             OUDOM NGOUN
//           </a>

//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 onClick={(e) => scrollToSection(e, item.href)}
//                 className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           <button
//             className="md:hidden text-gray-300 hover:text-blue-400"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {mobileMenuOpen && (
//         <div className="md:hidden bg-gray-800/95 backdrop-blur-md">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 onClick={(e) => scrollToSection(e, item.href)}
//                 className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 rounded-md transition-colors duration-200"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;


import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [skillsDropdown, setSkillsDropdown] = useState(false);
  const [mobileSkillsOpen, setMobileSkillsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSkillsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Short Courses', href: '#certificates' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  const skillLinks = [
    { label: '💻 Technical Skills', href: '#skills' },
    { label: '🤝 Soft Skills', href: '#soft-skills' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setSkillsDropdown(false);
    setMobileSkillsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            OUDOM NGOUN
          </a>

          <div className="hidden md:flex items-center space-x-1">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSkillsDropdown(!skillsDropdown)}
                className="flex items-center gap-1 px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200 text-sm"
              >
                Skills
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${skillsDropdown ? 'rotate-180' : ''}`}
                />
              </button>

              {skillsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-gray-900 border border-gray-700 rounded-xl shadow-xl shadow-black/30 overflow-hidden">
                  {skillLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200 text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-blue-400 p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-4 space-y-1">

            <div>
              <button
                onClick={() => setMobileSkillsOpen(!mobileSkillsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 rounded-lg transition-all duration-200 text-sm"
              >
                Skills
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${mobileSkillsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileSkillsOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-700 pl-4">
                  {skillLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-blue-400 hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 rounded-md transition-colors duration-200 text-sm"
              >
                {item.label}
              </a>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;