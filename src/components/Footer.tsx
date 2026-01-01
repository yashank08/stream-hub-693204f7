import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Crown } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-bold text-foreground">Hotstar</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Stream your favorite movies, TV shows, and sports live.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Browse */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Browse</h4>
            <ul className="space-y-2">
              <li><Link to="/movies" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Movies</Link></li>
              <li><Link to="/series" className="text-muted-foreground hover:text-foreground transition-colors text-sm">TV Shows</Link></li>
              <li><Link to="/sports" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Sports</Link></li>
              <li><Link to="/kids" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Kids</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms of Use</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Company</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Go Premium</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get unlimited access to all content with Premium.
            </p>
            <button className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-[0_0_20px_hsl(var(--accent)/0.4)] transition-all duration-300">
              <Crown className="w-4 h-4" />
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Hotstar Clone. All rights reserved. Built for educational purposes.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
