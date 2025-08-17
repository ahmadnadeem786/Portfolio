import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/js.png';
import reactIcon from '../assets/rec.png';
import tailwindIcon from '../assets/tai.png';

const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JAVASCRIPT', icon: jsIcon },
  { name: 'REACT JS', icon: reactIcon },
  { name: 'TAILWIND CSS', icon: tailwindIcon },
];

const Tools = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.set(cursorRef.current, { scale: 0, opacity: 0 });
  }, []);

  const handleMouseMove = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX + 40,
      y: e.clientY - 80,
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const handleMouseEnter = (skill) => {
    setHoveredSkill(skill);
    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 0,
      opacity: 0,
      ease: 'power3.out',
    });
  };

  return (
    <div
      id='tools'
      className="relative min-h-screen bg-white py-10 px-5 md:px-20 text-black font-extrabold"
      onMouseMove={handleMouseMove}
    >
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="flex flex-col md:items-start items-center text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
            Tools I Use
          </h2>
          <div className="h-1 w-32 bg-[#F2AA4CFF] rounded-full"></div>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-5 md:mt-0">
          <span className="text-[#F2AA4CFF]"> -- </span>01
        </h2>
      </div>

      {/* Skills List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(skill)}
            onMouseLeave={handleMouseLeave}
            className="relative cursor-pointer border-b-2 border-gray-900 py-5 px-6 text-3xl sm:text-4xl transition-all duration-200 hover:text-[#F2AA4CFF]"
          >
            {skill.name}
          </div>
        ))}
      </div>

      {/* Animated Icon Follower */}
      {hoveredSkill && (
        <img
          ref={cursorRef}
          src={hoveredSkill.icon}
          alt={`${hoveredSkill.name} icon`}
          className="fixed w-20 h-20 pointer-events-none z-50"
          style={{ top: 0, left: 0 }}
        />
      )}
    </div>
  );
};

export default Tools;
