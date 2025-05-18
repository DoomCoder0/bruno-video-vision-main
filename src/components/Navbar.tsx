
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "py-4 bg-background/90 backdrop-blur-md shadow-md" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Play className="h-8 w-8 text-accent mr-2" />
          <span className="font-serif font-bold text-xl tracking-tight">BRUNO.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {["work", "about", "services", "contact"].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              className="font-sans text-sm uppercase tracking-wider text-foreground/80 hover:text-accent transition-colors link-underline"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col space-y-1">
            <span className={cn(
              "block w-6 h-0.5 bg-foreground transition-all duration-300",
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            )}></span>
            <span className={cn(
              "block w-6 h-0.5 bg-foreground transition-all duration-300",
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            )}></span>
            <span className={cn(
              "block w-6 h-0.5 bg-foreground transition-all duration-300",
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 w-full bg-background/95 backdrop-blur-md transition-all duration-300 overflow-hidden md:hidden",
        mobileMenuOpen ? "max-h-64 border-b border-border" : "max-h-0"
      )}>
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {["work", "about", "services", "contact"].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              className="font-sans text-sm uppercase tracking-wider text-foreground/80 hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
