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

  // Initial state
  useEffect(() => {
    gsap.set(cursorRef.current, { scale: 0, opacity: 0 });
  }, []);

  // Move image smoothly with cursor
  const handleMouseMove = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX + 40,
      y: e.clientY - 80,
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  // Show image on hover
  const handleMouseEnter = (skill) => {
    setHoveredSkill(skill);

    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  // Hide image on leave
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
      className="relative min-h-screen bg-white py-5 md:py-15 text-black font-extrabold tracking-tight px-2 md:px-10"
      onMouseMove={handleMouseMove}
    >
      {/* Heading */}
      <div className="flex items-start justify-between mb-15">
        <div className="flex flex-col items-end">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Tools I Use
          </h2>
          <div className="h-1 w-[50%] bg-[#F2AA4CFF]"></div>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
          <span className="text-[#F2AA4CFF]"> -- </span>01
        </h2>
      </div>

      {/* Skills List */}
      <div className="flex flex-col justify-center cursor-pointer">
        {skills.map((skill, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(skill)}
            onMouseLeave={handleMouseLeave}
            className={`transition-all duration-100 ps-10 border-b-2 text-6xl py-5 ease-in-out hover:text-yellow-600 ${
              index === 0 ? 'border-t-2' : ''
            } border-gray-900`}
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
