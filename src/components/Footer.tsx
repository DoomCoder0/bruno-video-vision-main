
import React from "react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Play className="h-8 w-8 text-accent mr-2" />
              <span className="font-serif font-bold text-xl tracking-tight">BRUNO.</span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Professional video editor specializing in creating visually stunning and emotionally engaging content that brings your vision to life.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["work", "about", "services", "contact"].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item}`}
                      className="text-foreground/70 hover:text-accent transition-colors"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {["Video Editing", "Color Grading", "Motion Graphics", "Sound Design"].map((item) => (
                  <li key={item}>
                    <a 
                      href="#services"
                      className="text-foreground/70 hover:text-accent transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-4">Connect</h4>
              <ul className="space-y-2">
                {[
                  { name: "Instagram", url: "#" },
                  { name: "Vimeo", url: "#" },
                  { name: "YouTube", url: "#" },
                  { name: "LinkedIn", url: "#" }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-accent transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-foreground/50">
            © {currentYear} Bruno Obradovic. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <nav className="flex space-x-4">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a 
                  key={item}
                  href="#"
                  className="text-sm text-foreground/50 hover:text-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
