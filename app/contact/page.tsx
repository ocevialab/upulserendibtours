"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const galleryImages = [
    { src: "../gallery/Birds/Birds 2.jpg", alt: "Elephant in the wild" },
    { src: "../gallery/Elephant/Elephant2.JPG", alt: "Leopard resting" },
    { src: "../gallery/d.jpeg", alt: "Colorful birds" },
    { src: "../gallery/p.jpeg", alt: "Sri Lankan landscape" },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have questions about my wildlife photography services? Interested in booking a safari or workshop? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Gallery Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-playfair font-bold">Recent Work</h2>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="aspect-square relative rounded-lg overflow-hidden group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      View Full Size
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="w-full rounded-full">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-playfair font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">+94 773070717</p>
                    <p className="text-sm text-muted-foreground">Available 9:00 AM - 6:00 PM (Sri Lanka Time)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground"><a href="mailto:upul.enterprises@gmail.com" className="text-muted-foreground hover:underline">
    upul.enterprises@gmail.com
  </a></p>
                    <p className="text-sm text-muted-foreground">I typically respond within 24-48 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Sri Lanka</p>
                    <p className="text-sm text-muted-foreground">Available for photography assignments throughout Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ */}
            <div className="mt-12 bg-muted p-6 rounded-xl">
              <h3 className="text-xl font-playfair font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold">How far in advance should I book a wildlife safari?</h4>
                  <p className="text-muted-foreground">For peak season (December-March), booking at least 3-4 months in advance is recommended. For other periods, 1-2 months notice is usually sufficient.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Do you offer photography workshops for beginners?</h4>
                  <p className="text-muted-foreground">Yes, I offer workshops for all skill levels, from complete beginners to advanced photographers.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Can I customize a safari itinerary?</h4>
                  <p className="text-muted-foreground">Absolutely. I offer fully customized safari experiences based on your interests, photography goals, and schedule.</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Connect with Me</h3>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://www.facebook.com/share/1Fix8iLnZR/" 
                  aria-label="Facebook" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@greatwild-ws7fg?si=6Duq3T6bntkj0qz7" 
                  aria-label="YouTube" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <path d="m10 15 5-3-5-3z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/grea.twild?igsh=MWNjNjNrZ3JjbmczbA==" 
                  aria-label="Instagram" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/94773070717" 
                  aria-label="WhatsApp" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}