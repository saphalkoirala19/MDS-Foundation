import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import logo from "@/assets/mds-logo.jpeg"; 

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foundation-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Foundation Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="MDS Foundation Logo" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <div className="font-bold text-lg">MDS Foundation</div>
                <div className="text-sm text-gray-300">Carrying the Legacy, Shaping the Future</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              We are a non-political, non-profit social organization founded in honor of one of Nepal's brightest democratic heroes—Martyr Dharma Bhakta Mathema.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">Blogs & Activities</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/library" className="text-gray-300 hover:text-white transition-colors">Our Library</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="https://hotc.org.np/" className="text-gray-300 hover:text-white transition-colors">Shahid Dharmabhakta National Transplant Center</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <div>Head office: Sanepa, Lalitpur</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+977-9841226979</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>mds.foundation@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} MDS Foundation. All rights reserved. | Founded on 30 December 2002 (2059 Paush-15)
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-gray-300 hover:text-white"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Go To Top
          </Button>
        </div>
      </div>
    </footer>
  );
};