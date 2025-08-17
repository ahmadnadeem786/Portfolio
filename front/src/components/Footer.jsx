import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';



const Footer = () => {
  return (
    <footer className="relative  bg-[#101820FF] text-gray-300 pt-16 pb-10 overflow-hidden">
     

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold text-[#F2AA4CFF] mb-4">Ahmad</h3>
          <p className="text-sm text-gray-400">
            MERN Stack Developer passionate about crafting modern web experiences with clean code and creativity.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-[#F2AA4CFF] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-[#F2AA4CFF] transition">Home</a></li>
            <li><a href="#tools" className="hover:text-[#F2AA4CFF] transition">Tools</a></li>
            <li><a href="#projects" className="hover:text-[#F2AA4CFF] transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-[#F2AA4CFF] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-[#F2AA4CFF] mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:cha669156@gmail.com" className="hover:text-green-400 transition">cha669156@gmail.com</a></li>
            <li>Phone: <span className="text-gray-400">+92 3428573154</span></li>
            <li>Location: <span className="text-gray-400">Lahore, Pakistan</span></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold text-[#F2AA4CFF] mb-4">Follow Me</h4>
          <div className="flex space-x-4 text-xl">
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FiLinkedin />
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FiTwitter />
            </a>
            <a href="mailto:cha669156@gmail.com" className="hover:text-green-400 transition">
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative z-10 text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Ahmad. All rights reserved. | Designed with 💚
      </div>
    </footer>
  );
};

export default Footer;
