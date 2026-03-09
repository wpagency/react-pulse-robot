
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center space-x-3"
          onClick={() => {
            if (location.pathname === "/") {
              scrollToTop();
            }
          }}
          aria-label="WordPress Agency"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Pulse Robot</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/#services" className="nav-link">Services</a>
          <a href="/#portfolio" className="nav-link">Portfolio</a>
          <a href="/#process" className="nav-link">Process</a>
          <Link to="/blog" className="nav-link">Blog</Link>
          <a href="/#testimonials" className="nav-link">Testimonials</a>
          <a href="/#contact" className="nav-link">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/#contact"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Start Project
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 p-3 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 items-center mt-8">
          <a
            href="/#services"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Services
          </a>
          <a
            href="/#portfolio"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Portfolio
          </a>
          <a
            href="/#process"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Process
          </a>
          <Link
            to="/blog"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Blog
          </Link>
          <a
            href="/#testimonials"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Testimonials
          </a>
          <a
            href="/#contact"
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contact
          </a>
          <a
            href="/#contact"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold mt-4"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Start Project
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


