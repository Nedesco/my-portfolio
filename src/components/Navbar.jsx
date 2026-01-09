import { Link } from "react-router-dom"; // Using React Router for links
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <header className="sticky top-0 z-50 w-full border-b border-[#e7ebf3] bg-background-light/80 backdrop-blur-md">
      <div className="flex justify-center">
        <div className="flex max-w-[1280px] w-full items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <div className="flex items-center gap-4 text-[#0d121b]">
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined !text-[32px]">
                design_services
              </span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
              Chimezirim Ned-Onuoha
            </h2>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-8">
              <a
                href="#projects"
                className="text-[#0d121b] hover:text-primary transition-colors text-sm font-medium"
              >
                Work
              </a>
              <a
                href="#about"
                className="text-[#0d121b] hover:text-primary transition-colors text-sm font-medium"
              >
                About
              </a>
              <a
                href="/resume"
                className="text-[#0d121b] hover:text-primary transition-colors text-sm font-medium"
              >
                Resume
              </a>
            </div>
            <a
              href="#contact"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 
  bg-primary hover:bg-[color:var(--color-primary-dark)] transition-colors 
  text-white text-sm font-bold shadow-lg shadow-primary/20"
            >
              <span className="truncate">Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button   onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-[#0d121b]">
            <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="md:hidden w-full bg-white border-t border-[#e7ebf3]">
    <div className="flex flex-col items-center gap-6 py-6 text-[#0d121b] font-bold">
      
      <a
        href="#about"
        onClick={() => setIsOpen(false)}
        className="hover:text-primary transition-colors"
      >
        About
      </a>

      <a
        href="#projects"
        onClick={() => setIsOpen(false)}
        className="hover:text-primary transition-colors"
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={() => setIsOpen(false)}
        className="hover:text-primary transition-colors"
      >
        Contact
      </a>

    </div>
  </div>
)}

    

    </header>
  );
}

