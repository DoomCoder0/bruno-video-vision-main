
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 z-0">
        <div className="bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center h-full w-full"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start container mx-auto px-4 md:px-6">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 tracking-tight text-balance">
            <span className="block">Cinematic</span>
            <span className="block text-accent">Visual Stories.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-foreground/80 mb-8 max-w-xl">
            Professional video editor crafting compelling narratives through sophisticated editing and visual effects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="rounded-none bg-accent hover:bg-accent/90 text-primary-foreground font-medium px-8"
            >
              <Play className="mr-2 h-4 w-4" /> Watch Showreel
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-none border-foreground/30 hover:bg-secondary text-foreground font-medium px-8"
            >
              Explore Work
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-0.5 h-10 bg-foreground/20 relative overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-1/3 bg-accent animate-slide-down"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
