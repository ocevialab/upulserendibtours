import Link from "next/link";
import { Camera, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import {  Youtube, MessageCircle } from 'lucide-react';

// Then in your JSX add:
<a href="https://wa.me/94773070717" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
  <MessageCircle className="h-5 w-5" />
</a>
export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-primary" />
              <span className="font-playfair text-xl font-semibold">Wild Life Photography</span>
            </div>
            <p className="text-muted-foreground">
              Capturing the breathtaking beauty of Sri Lankan wildlife through an experienced lens.
            </p>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-medium mb-4">Featured Locations</h3>
            <ul className="space-y-2">
              <li><Link href="/locations" className="text-muted-foreground hover:text-primary transition-colors">Sigiriya</Link></li>
              <li><Link href="/locations" className="text-muted-foreground hover:text-primary transition-colors">Yala National Park</Link></li>
              <li><Link href="/locations" className="text-muted-foreground hover:text-primary transition-colors">Udawalawe National Park</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-medium mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+94 773070717</span>
              </li>
              <li className="flex items-center gap-2">
  <Mail className="h-4 w-4 text-primary" />
  <a href="mailto:upul.enterprises@gmail.com" className="text-muted-foreground hover:underline">
    upul.enterprises@gmail.com
  </a>
</li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Sri Lanka</span>
              </li>
            </ul>
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
        
        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wild Life Photography by Upul Dunuhinga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}