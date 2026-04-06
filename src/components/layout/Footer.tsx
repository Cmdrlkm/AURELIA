import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl tracking-widest uppercase">Aurelia</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting timeless elegance through sustainable practices and masterful artisanship since 1992.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif text-lg mb-6 tracking-wide">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/collections?category=rings" className="hover:text-white transition-colors">Rings</Link></li>
              <li><Link to="/collections?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/collections?category=bracelets" className="hover:text-white transition-colors">Bracelets</Link></li>
              <li><Link to="/collections?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">All Collections</Link></li>
            </ul>
          </div>

          {/* Client Care */}
          <div>
            <h3 className="font-serif text-lg mb-6 tracking-wide">Client Care</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="/warranty" className="hover:text-white transition-colors">Lifetime Warranty</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg mb-6 tracking-wide">Stay Connected</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b border-gray-600 py-2 pl-2 pr-10 text-sm focus:outline-none focus:border-gold-500 transition-colors text-white placeholder:text-gray-500"
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gold-500">
                  <Mail size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aurelia Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
