import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blogs & Activities", href: "/blogs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Our Library", href: "/library" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-foundation-navy text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-muted-foreground">MARTYR DHARMABHAKT STUDY FOUNDATION</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-secondary" />
              <span>+977-9841226979</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-secondary" />
              <span>mds.foundation@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Facebook className="h-4 w-4 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-4 w-4 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-4 w-4 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-card-foundation sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                MDS
              </div>
              <div className="hidden md:block">
                <div className="text-foundation-navy font-bold text-xl">MDS FOUNDATION</div>
                <div className="text-sm text-muted-foreground">MARTYR DHARMA BHAKTA STUDY FOUNDATION NEPAL</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-primary relative py-2 ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foundation-navy"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foundation-navy hover:bg-foundation-gray"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};