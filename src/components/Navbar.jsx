import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  BookOpen, 
  Menu, 
  X, 
  Sparkles, 
  Upload, 
  ChevronDown, 
  Layers, 
  Cpu, 
  Award,
  ArrowRight
} from 'lucide-react';

export default function Navbar() {
  const { data } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activitiesDropdownOpen, setActivitiesDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activitiesList = [
    { num: "01", name: "Stars Photo", id: "stars-photo" },
    { num: "02", name: "Storyboard", id: "storyboard" },
    { num: "03", name: "Python Tutorial Discussion", id: "tutorial-discussion" },
    { num: "04", name: "IoT Impairment Assessment (Flagship)", id: "iot-showcase", prominent: true },
    { num: "05", name: "Class Quiz (2nd Place)", id: "class-quiz" },
    { num: "06", name: "Medium Blog", id: "medium-blog" },
    { num: "07", name: "Audio Thesis", id: "audio-business-thesis" },
    { num: "08", name: "Website PPT", id: "website-ppt" },
    { num: "09", name: "Website Demo Video", id: "website-demo-video" },
    { num: "10", name: "Padlet Q&A Boards", id: "padlet-screenshots" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-ivory-50/95 backdrop-blur-md shadow-sm border-b border-ivory-200' : 'bg-transparent'
    }`}>
      {/* Scroll Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-violetAccent-600 via-blueAccent-600 to-indigo-600 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Masthead Branding */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-navy-950 text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm group-hover:bg-violetAccent-600 transition-colors">
              BC
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-violetAccent-700 font-bold block">
                {data.meta.courseCode} • Portfolio Monograph
              </span>
              <h1 className="text-lg sm:text-xl font-serif font-bold text-navy-950 group-hover:text-violetAccent-700 transition-colors">
                Beyond Code
              </h1>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium tracking-wide text-navy-700">
            <a href="#about" className="hover:text-violetAccent-700 transition">About Journey</a>
            <a href="#skills" className="hover:text-violetAccent-700 transition">Python Skills</a>
            
            {/* 10 Activities Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActivitiesDropdownOpen(!activitiesDropdownOpen)}
                onBlur={() => setTimeout(() => setActivitiesDropdownOpen(false), 200)}
                className="flex items-center space-x-1 hover:text-violetAccent-700 transition py-2"
              >
                <span>10 Mandatory Activities</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activitiesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-navy-100 p-2 z-50 animate-fade-in">
                  <div className="px-3 py-2 text-[10px] font-mono uppercase text-navy-400 font-semibold border-b border-ivory-200">
                    Coursework Milestones
                  </div>
                  <div className="py-1 max-h-80 overflow-y-auto">
                    {activitiesList.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setActivitiesDropdownOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition ${
                          item.prominent
                            ? 'bg-violetAccent-50 text-violetAccent-800 font-bold hover:bg-violetAccent-100'
                            : 'text-navy-700 hover:bg-ivory-100'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-[10px] text-navy-400">{item.num}</span>
                          <span>{item.name}</span>
                        </div>
                        {item.prominent && <Sparkles className="w-3 h-3 text-violetAccent-600" />}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#iot-showcase" className="font-semibold text-violetAccent-700 hover:text-violetAccent-800 transition flex items-center space-x-1">
              <span>IoT Capstone</span>
              <span className="w-1.5 h-1.5 rounded-full bg-violetAccent-600 animate-pulse"></span>
            </a>

            <a href="#timeline" className="hover:text-violetAccent-700 transition">Timeline</a>
            <a href="#challenges" className="hover:text-violetAccent-700 transition">Challenges</a>
            <a href="#reflection" className="hover:text-violetAccent-700 transition">Final Reflection</a>
          </nav>

          {/* Action Button: Jump to Evidence Uploads */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#stars-photo"
              className="px-4 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-medium flex items-center space-x-1.5 transition shadow-sm"
              title="Jump to the 10 Coursework Activity Evidence Slots"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Evidence Uploads</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-navy-700 hover:text-navy-950 hover:bg-ivory-200 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-navy-100 px-6 py-6 shadow-xl animate-fade-in space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-navy-800">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-ivory-200"
            >
              About My Journey
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-ivory-200"
            >
              Python Skills Matrix
            </a>
            <a 
              href="#iot-showcase" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-violetAccent-700 font-bold border-b border-ivory-200"
            >
              ★ IoT Impairment Capstone (Showcase)
            </a>
            <a 
              href="#timeline" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-ivory-200"
            >
              Learning Timeline
            </a>
            <a 
              href="#challenges" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-ivory-200"
            >
              Challenges & Solutions
            </a>
            <a 
              href="#reflection" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-ivory-200"
            >
              Final Reflection
            </a>
          </div>

          <div className="pt-2">
            <span className="text-[10px] font-mono uppercase text-navy-400 font-bold block mb-2">
              All 10 Activities:
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {activitiesList.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-ivory-50 text-navy-700 hover:bg-violetAccent-50 hover:text-violetAccent-800"
                >
                  <span className="font-mono text-[10px] text-navy-400 mr-1">{item.num}</span>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

