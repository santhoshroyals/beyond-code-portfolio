
import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Cpu, Zap, Radio, CheckCircle, Code } from 'lucide-react';

const iconMap = {
  Cpu: Cpu,
  Zap: Zap,
  Radio: Radio,
  CheckCircle: CheckCircle
};

export default function PythonSkills() {
  const { data } = usePortfolio();
  const { categories } = data.skills;
  const [selectedCategory, setSelectedCategory] = useState(0);

  const activeCategory = categories[selectedCategory];

  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-24 border-b border-ivory-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-widest font-bold mb-3">
          <Code className="w-4 h-4" />
          <span>Technical Skills & Learning</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 mb-4">
          Python Skills Matrix
        </h2>

        <p className="text-navy-700 text-sm sm:text-base max-w-2xl leading-relaxed mb-10">
          My learning journey in Python programming, covering programming
          fundamentals, object-oriented concepts, data structures,
          problem-solving, and practical project development.
        </p>

        {/* Category Switcher Tabs */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-8">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Code;
            const isSelected = selectedCategory === idx;

            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center space-x-2 whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-navy-950 text-white shadow-md'
                    : 'bg-white border border-navy-200 text-navy-700 hover:bg-ivory-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-violetAccent-400' : 'text-navy-500'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeCategory.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-navy-100 shadow-xs hover:border-violetAccent-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-serif font-bold text-navy-950">
                  {skill.name}
                </h4>

                <span className="text-xs font-mono font-bold text-violetAccent-700 bg-violetAccent-50 px-2 py-0.5 rounded border border-violetAccent-200">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-ivory-200 rounded-full overflow-hidden mb-3">
                <div
                  className="h-full bg-gradient-to-r from-violetAccent-600 to-blueAccent-600 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-xs sm:text-sm text-navy-700 leading-relaxed font-sans">
                {skill.details}
              </p>
            </div>
          ))}
        </div>

        {/* Python Concepts & Tools */}
        <div className="mt-10 p-6 rounded-2xl bg-ivory-50 border border-ivory-200 flex flex-wrap items-center justify-between gap-4">

          <div>
            <span className="text-xs font-mono uppercase text-navy-500 font-bold block mb-1">
              Python Concepts & Tools
            </span>

            <p className="text-xs text-navy-700">
              Concepts explored through coursework and practical activities:
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              "Python Fundamentals",
              "Lists & Tuples",
              "Dictionaries",
              "Object-Oriented Programming",
              "Shallow & Deep Copy",
              "Multithreading",
              "Shared Queue Processing",
              "Problem Solving"
            ].map((pkg, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-white border border-ivory-300 text-xs font-mono text-navy-800 shadow-2xs"
              >
                {pkg}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
