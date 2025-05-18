
import React from "react";
import { cn } from "@/lib/utils";
import { Play, Clapperboard, Film, Video } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    id: 1,
    title: "Video Editing",
    description: "Professional editing for commercials, film, documentaries, and music videos with advanced techniques and storytelling.",
    icon: Video
  },
  {
    id: 2,
    title: "Color Grading",
    description: "Expert color correction and grading to enhance visual mood, atmosphere and create a distinctive cinematic look.",
    icon: Play
  },
  {
    id: 3,
    title: "Motion Graphics",
    description: "Dynamic motion graphics and visual effects to enhance storytelling and create engaging visual experiences.",
    icon: Clapperboard
  },
  {
    id: 4,
    title: "Sound Design",
    description: "Comprehensive audio editing and sound design to create immersive soundscapes that complement visual narratives.",
    icon: Film
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-accent mb-2">What I Do</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Professional Services</h3>
          <p className="text-lg text-foreground/80">
            Specializing in creating visually stunning and emotionally engaging video content through expert editing techniques and creative vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-8 border border-border bg-secondary hover:bg-secondary/70 transition-colors group"
            >
              <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-sm bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <service.icon className="h-7 w-7" />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4">{service.title}</h4>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
