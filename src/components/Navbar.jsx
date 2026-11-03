
import React, { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Upload,
  Cpu,
  ChevronRight
} from 'lucide-react';

const activitiesList = [
  { num: '01', name: 'Stars Photo', id: 'stars-photo' },
  { num: '02', name: 'Storyboard', id: 'storyboard' },
  { num: '03', name: 'Tutorial Discussion', id: 'tutorial-discussion' },
  { num: '04', name: 'Class Quiz', id: 'class-quiz' },
  { num: '05', name: 'Medium Blog', id: 'medium-blog' },
  {
    num: '06',
    name: 'Audio Presentation',
    id: 'audio-business-thesis',
    aliases: ['audio-presentation']
  },
  { num: '07', name: 'Website PPT', id: 'website-ppt' },
  { num: '08', name: 'Website Demo', id: 'website-demo-video' },
  { num: '09', name: 'Padlet Discussion', id: 'padlet-screenshots' },
  { num: '10', name: 'Submissions', id: 'submissions' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        totalHeight > 0
          ? Math.min((window.scrollY / totalHeight) * 100, 100)
          : 0
      );
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (event, id, aliases = []) => {
    event.preventDefault();

    const possibleIds = [id, ...aliases];
    let section = null;

    for (const sectionId of possibleIds) {
      section = document.getElementById(sectionId);
      if (section) break;
    }

    if (section) {
      const headerOffset = 175;

      const sectionPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: Math.max(0, sectionPosition),
        behavior: 'smooth'
      });

      window.history.replaceState(null, '', `#${section.id}`);
    } else {
      console.warn(`Navigation target not found: ${id}`);
    }

    closeMenu();
  };

  const navLink =
    'text-sm font-medium text-navy-700 hover:text-violetAccent-700 transition-colors duration-200 whitespace-nowrap';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-sm'
          : 'bg-ivory-50'
      }`}
    >
      {/* Reading Progress */}
      <div className="h-1 w-full bg-ivory-200">
        <div
          className="h-full bg-violetAccent-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Header */}
      <div className="border-b border-ivory-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[76px] flex items-center justify-between gap-5">

            {/* Brand */}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                closeMenu();
              }}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-navy-950 text-white flex items-center justify-center font-serif font-bold text-lg">
                BC
              </div>

              <div>
                <span className="block text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-violetAccent-700 font-bold">
                  Advanced Python Programming
                </span>

                <h1 className="text-lg sm:text-xl font-serif font-bold text-navy-950">
                  Beyond Code
                </h1>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className={navLink}
              >
                About Journey
              </a>

              <a
                href="#system-architecture-proposal"
                onClick={(e) =>
                  scrollToSection(e, 'system-architecture-proposal', [
                    'system-architecture',
                    'iot-capstone'
                  ])
                }
                className={`${navLink} flex items-center gap-2 text-violetAccent-700 font-semibold`}
              >
                <Cpu className="w-4 h-4" />
                System Architecture
              </a>

              {/* Coursework - Tree Coverage Task */}
              <a
                href="#coursework-assignment"
                onClick={(e) =>
                  scrollToSection(e, 'coursework-assignment')
                }
                className={navLink}
              >
                Coursework
              </a>

              <a
                href="#stars-photo"
                onClick={(e) => scrollToSection(e, 'stars-photo')}
                className="px-4 py-2.5 rounded-xl bg-navy-950 hover:bg-violetAccent-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Upload className="w-4 h-4" />
                Evidence
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-navy-800 hover:bg-ivory-200"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen
                ? <X className="w-6 h-6" />
                : <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Activity Navigation */}
      <div className="hidden md:block bg-white/95 border-b border-ivory-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-5 xl:gap-7 overflow-x-auto py-3">
            {activitiesList.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) =>
                  scrollToSection(e, item.id, item.aliases || [])
                }
                className="flex items-center gap-1.5 text-[11px] text-navy-600 hover:text-violetAccent-700 whitespace-nowrap transition-colors"
              >
                <span className="font-mono text-[9px] text-blueAccent-600">
                  {item.num}
                </span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-ivory-200 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="p-5 space-y-4">

            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="flex items-center justify-between py-2 text-sm text-navy-800 border-b border-ivory-200"
            >
              About Journey
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#system-architecture-proposal"
              onClick={(e) =>
                scrollToSection(e, 'system-architecture-proposal', [
                  'system-architecture',
                  'iot-capstone'
                ])
              }
              className="flex items-center justify-between py-2 text-sm text-violetAccent-700 font-semibold border-b border-ivory-200"
            >
              System Architecture Proposal
              <Cpu className="w-4 h-4" />
            </a>

            {/* Submissions - VTOP Academic Archive */}
            <a
              href="#submissions"
              onClick={(e) => scrollToSection(e, 'submissions')}
              className="flex items-center justify-between py-2 text-sm text-navy-800 border-b border-ivory-200"
            >
              Submissions
              <ChevronRight className="w-4 h-4" />
            </a>

            <div className="pt-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-3">
                Portfolio Activities
              </p>

              <div className="grid grid-cols-2 gap-2">
                {activitiesList.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) =>
                      scrollToSection(e, item.id, item.aliases || [])
                    }
                    className="p-3 rounded-lg bg-ivory-50 border border-ivory-200 text-xs text-navy-700 hover:border-violetAccent-300 hover:text-violetAccent-700"
                  >
                    <span className="block text-[9px] font-mono text-violetAccent-600 mb-1">
                      {item.num}
                    </span>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#stars-photo"
              onClick={(e) => scrollToSection(e, 'stars-photo')}
              className="flex items-center justify-center gap-2 w-full p-3 rounded-xl bg-navy-950 text-white text-sm font-medium"
            >
              <Upload className="w-4 h-4" />
              View Evidence
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
