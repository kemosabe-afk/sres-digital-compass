
import { Home, UserRound, Lightbulb, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const links = [
    { to: "/", icon: Home, text: "Home" },
    { to: "/about", icon: UserRound, text: "About Me" },
    { to: "/ideas", icon: Lightbulb, text: "New Ideas" },
    { to: "/map", icon: MapPin, text: "Map" },
    { to: "/contact", icon: Mail, text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-sre-dark/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl">SRE Portfolio</Link>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-300 hover:text-sre-blue flex items-center gap-2 transition-colors"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
