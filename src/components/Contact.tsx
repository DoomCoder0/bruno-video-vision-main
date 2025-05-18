
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // This would be replaced with actual form submission logic
    toast({
      title: "Message sent",
      description: "Thank you for your message. I'll get back to you soon!",
      duration: 5000,
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-accent mb-2">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Work Together</h3>
            <p className="text-lg text-foreground/80 mb-8">
              Ready to bring your vision to life? Contact me today to discuss your project and how we can collaborate to create visually stunning videos that tell your story.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <p className="text-foreground/70">obradovicbruno5@gmail.com</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Phone</h4>
                <p className="text-foreground/70">063521151</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input 
                  id="name" 
                  required 
                  className="rounded-none bg-background/50 border-border" 
                  placeholder="Your name" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  className="rounded-none bg-background/50 border-border" 
                  placeholder="your@email.com" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input 
                id="subject" 
                required 
                className="rounded-none bg-background/50 border-border" 
                placeholder="Project inquiry" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea 
                id="message" 
                required 
                className="rounded-none bg-background/50 border-border min-h-32" 
                placeholder="Tell me about your project..." 
              />
            </div>
            <Button 
              type="submit" 
              className="w-full rounded-none bg-accent hover:bg-accent/90 text-primary-foreground font-medium"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
