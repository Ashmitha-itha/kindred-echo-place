import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="gradient-soft py-16 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">ConnectHeart</h3>
            </div>
            <p className="text-muted-foreground text-balance mb-6 max-w-md">
              Building bridges to meaningful connections. Because everyone deserves 
              to feel heard, understood, and valued.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">Newsletter</Button>
              <Button variant="ghost" size="sm">Follow Us</Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Find Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Join Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Resources</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Crisis Help</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">About Us</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>Crisis: 988</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@connectheart.org</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ConnectHeart. Made with love for those who need connection.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Safety</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;