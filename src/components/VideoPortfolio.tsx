import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { VideoModal } from "@/components/VideoModal"; // Importuj modal

interface VideoProject {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  client: string;
  year: string;
  videoUrl?: string;
}

const projects: VideoProject[] = [
  {
    id: 1,
    title: "mystic-waterfall",
    category: "Commercial",
    thumbnail: "./src/mystic-waterfall.png",
    client: "Nike",
    videoUrl: "/src/video.mp4",
    year: "2023"
  },
  {
    id: 2,
    title: "dynamic-promo-strike",
    category: "dynamic-promo-strike",
    thumbnail: "/src/dynamic-promo-strike.png",
    videoUrl: "/src/dynamic-promo-strike.mp4",
    client: "Independent",
    year: "2022"
  },
  {
    id: 3,
    title: "speed-race",
    category: "Ree Video",
    thumbnail: "/src/speed-race.png",
    client: "Atlantic Records",
    videoUrl: "/src/Main.mp4",
    year: "2023"
  },
];

const VideoPortfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handlePlayClick = (videoUrl?: string) => {
    if (videoUrl) {
      setActiveVideo(videoUrl);
      setModalOpen(true);
    }
  };

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wider text-accent mb-2">Selected Work</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Recent Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group video-card-hover"
            >
              <div className="relative overflow-hidden aspect-[16/9] mb-4">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.videoUrl && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      size="icon"
                      className="rounded-full bg-accent hover:bg-accent/90 h-14 w-14"
                      onClick={() => handlePlayClick(project.videoUrl)}
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="text-sm text-foreground/70">{project.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-foreground/70">{project.client}</p>
                  <p className="text-xs text-foreground/50">{project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            className="rounded-none border-foreground/30 hover:bg-secondary text-foreground font-medium px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>

      {activeVideo && (
        <VideoModal
          videoUrl={activeVideo}
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setActiveVideo(null);
          }}
        />
      )}
    </section>
  );
};

export default VideoPortfolio;
