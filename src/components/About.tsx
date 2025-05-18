
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/lovable-uploads/e92abefc-b828-48da-849f-82fb2c06d0b7.png" 
                alt="Bruno Obradovic" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-wider text-accent">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold">Bruno Obradovic</h3>
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm a professional video editor crafting visual stories for commercials, documentaries, and narrative films. My passion lies in creating dynamic, emotionally engaging content that resonates with audiences.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              With expertise in Adobe Premiere Pro, After Effects, Photoshop, CapCut, and DaVinci Resolve, I specialize in color grading, motion graphics, and creating seamless transitions that elevate visual storytelling.
            </p>
            
            <div className="pt-6">
              <Button 
                className="rounded-none bg-accent hover:bg-accent/90 text-primary-foreground font-medium px-8"
              >
                Download Resume
              </Button>
            </div>
            
            <div className="pt-6">
              <div>
                <h4 className="text-4xl font-serif font-bold text-accent">48</h4>
                <p className="text-sm text-foreground/70">Happy Clients</p>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-4 pt-8">
              <div className="p-3 bg-background/20 flex items-center justify-center rounded-md">
                <span className="font-medium text-sm">After Effects</span>
              </div>
              <div className="p-3 bg-background/20 flex items-center justify-center rounded-md">
                <span className="font-medium text-sm">Premiere Pro</span>
              </div>
              <div className="p-3 bg-background/20 flex items-center justify-center rounded-md">
                <span className="font-medium text-sm">Photoshop</span>
              </div>
              <div className="p-3 bg-background/20 flex items-center justify-center rounded-md">
                <span className="font-medium text-sm">CapCut</span>
              </div>
              <div className="p-3 bg-background/20 flex items-center justify-center rounded-md">
                <span className="font-medium text-sm">DaVinci</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
