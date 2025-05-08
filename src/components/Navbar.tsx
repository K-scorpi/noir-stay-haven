
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Search, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-background/80 border-b border-white/10 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
            <Home size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white">StayHaven</span>
        </Link>

        <div className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 bg-secondary/50 rounded-full border border-white/5">
          <span className="text-sm text-white/80">Anywhere</span>
          <span className="text-white/40 mx-2">|</span>
          <span className="text-sm text-white/80">Any week</span>
          <span className="text-white/40 mx-2">|</span>
          <span className="text-sm text-white/60">Add guests</span>
          <div className="ml-2 h-8 w-8 flex items-center justify-center bg-primary rounded-full text-white">
            <Search size={16} />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/5">
            Become a Host
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-white/10 bg-secondary hover:bg-secondary/80">
            <User size={18} className="text-white" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
