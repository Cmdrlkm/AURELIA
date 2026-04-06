import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Cart } from '../Cart';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled || !isHome || isMobileMenuOpen
            ? 'bg-white text-charcoal-900 shadow-sm py-4'
            : 'bg-transparent text-white py-6'
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium tracking-wide uppercase hover:text-gold-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link to="/" className="flex-1 md:flex-none text-center">
            <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase">
              Aurelia
            </h1>
          </Link>

          {/* Icons */}
          <div className="flex items-center justify-end space-x-4 md:space-x-6 flex-1">
            <button className="hover:text-gold-500 transition-colors hidden md:block">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="hover:text-gold-500 transition-colors hidden md:block">
              <User size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="hover:text-gold-500 transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                1
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white text-charcoal-900 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-8 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-xl font-serif tracking-wide"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-8 border-t border-gray-100 flex space-x-6">
                  <button className="flex items-center space-x-2 text-sm uppercase tracking-wider">
                    <User size={18} />
                    <span>Account</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm uppercase tracking-wider">
                    <Search size={18} />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
