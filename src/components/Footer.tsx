
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Visit", href: "#" },
    { name: "Exhibitions", href: "#" },
    { name: "Events", href: "#" },
    { name: "Education", href: "#" },
    { name: "Collections", href: "#" }
  ];

  const supportLinks = [
    { name: "Donate", href: "#" },
    { name: "Volunteer", href: "#" },
    { name: "Membership", href: "#" },
    { name: "Corporate Partners", href: "#" },
    { name: "Legacy Giving", href: "#" },
    { name: "Sponsor an Event", href: "#" }
  ];

  const resourceLinks = [
    { name: "Research", href: "#" },
    { name: "Digital Archive", href: "#" },
    { name: "Publications", href: "#" },
    { name: "Media Kit", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Privacy Policy", href: "#" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
          <img src="/public/logo-white.png" alt="BMHC Heritage" className="mb-4 h-auto w-25" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Preserving and celebrating the rich heritage of Muslims in Britain for over a millennium.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-rose-400" />
                <span className="text-sm">8-10 Grosvenor Street, Manchester M1 7HL</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-teal-400" />
                <span className="text-sm">0161 222 3344</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-sm">info@bmhc.org.uk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Support Us</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h4 className="font-semibold text-lg mb-4 text-white">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-600 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <h4 className="font-semibold text-lg mb-4 text-white">Quick Donate</h4>
              <Button 
                className="bg-gradient-to-r from-rose-600 to-teal-600 hover:from-rose-700 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Heart className="h-4 w-4 mr-2" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 British Muslim Heritage Centre. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Registered Charity No. 1234567 | Company No. 87654321
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
