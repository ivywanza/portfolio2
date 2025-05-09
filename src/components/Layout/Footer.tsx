import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              <span className="text-purple">Ivy Maundu</span>Portfolio
            </h3>
            <p className="text-white/80 text-sm max-w-xs">
              Creating thoughtful systems and elegant solutions to complex problems.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/80 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="/projects" className="text-white/80 hover:text-white transition-colors duration-300">Projects</a></li>
              <li><a href="/about" className="text-white/80 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="/cv" className="text-white/80 hover:text-white transition-colors duration-300">CV</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/ivywanza" target="_blank" rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                aria-label="Github">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ivy-maundu-2554ba299/" target="_blank" rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
          
            </div>
            <p className="text-white/80 text-sm mt-4">
              Email: <a href="mailto:contact@example.com" className="hover:text-white transition-colors duration-300">ivymaundu03@gmail.com</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            &copy; {currentYear} Ivy Maundu. All rights reserved.
          </p>
          <p className="text-white/80 text-sm mt-2 md:mt-0">
            Designed & Built by Ivy Maundu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;