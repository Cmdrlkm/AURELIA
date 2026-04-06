import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Truck, Gem, Scissors } from 'lucide-react';

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599643478524-fb66f70d00f8?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Jewelry"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal-900/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          >
            Elegance, <br className="md:hidden" /> Perfected.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto tracking-wide"
          >
            Discover handcrafted fine jewelry designed for the modern connoisseur. 
            Timeless pieces that tell your unique story.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/collections" 
              className="bg-white text-charcoal-900 px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-colors w-full sm:w-auto"
            >
              Shop Now
            </Link>
            <Link 
              to="/collections" 
              className="border border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-charcoal-900 transition-colors w-full sm:w-auto"
            >
              Discover Collections
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-charcoal-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Truck className="mb-4 text-gold-500" size={28} strokeWidth={1.5} />
              <h3 className="font-serif text-lg mb-2">Free Shipping</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider">On all orders</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="mb-4 text-gold-500" size={28} strokeWidth={1.5} />
              <h3 className="font-serif text-lg mb-2">Lifetime Warranty</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Guaranteed quality</p>
            </div>
            <div className="flex flex-col items-center">
              <Gem className="mb-4 text-gold-500" size={28} strokeWidth={1.5} />
              <h3 className="font-serif text-lg mb-2">Premium Materials</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Ethically sourced</p>
            </div>
            <div className="flex flex-col items-center">
              <Scissors className="mb-4 text-gold-500" size={28} strokeWidth={1.5} />
              <h3 className="font-serif text-lg mb-2">Free Resizing</h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Perfect fit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Curated Collections</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Explore our signature categories, each piece meticulously crafted to elevate your everyday style.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f66122e94?q=80&w=800&auto=format&fit=crop' },
              { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop' },
              { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop' },
              { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop' }
            ].map((collection) => (
              <Link to={`/collections?category=${collection.name.toLowerCase()}`} key={collection.name} className="group relative h-[400px] overflow-hidden block">
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white">
                  <h3 className="font-serif text-2xl">{collection.name}</h3>
                  <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Best Sellers</h2>
              <p className="text-gray-500">Our most loved pieces, chosen by you.</p>
            </div>
            <Link to="/collections" className="hidden md:flex items-center space-x-2 text-sm uppercase tracking-widest hover:text-gold-500 transition-colors">
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, name: 'Eternity Diamond Ring', price: '$2,450', image: 'https://images.unsplash.com/photo-1605100804763-247f66122e94?q=80&w=600&auto=format&fit=crop' },
              { id: 2, name: 'Lumina Gold Pendant', price: '$890', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop' },
              { id: 3, name: 'Aura Pearl Earrings', price: '$650', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop' },
              { id: 4, name: 'Classic Tennis Bracelet', price: '$3,200', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop' }
            ].map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button className="w-full bg-white text-charcoal-900 py-3 text-sm uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/collections" className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest hover:text-gold-500 transition-colors">
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Craftsmanship Video/Image */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2000&auto=format&fit=crop"
            alt="Craftsmanship"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal-900/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Masterful Artistry</h2>
          <p className="text-lg font-light mb-10 tracking-wide">
            Every piece is meticulously handcrafted by our master artisans in our Parisian atelier, 
            ensuring unparalleled quality and attention to detail.
          </p>
          <Link 
            to="/about" 
            className="inline-block border border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-charcoal-900 transition-colors"
          >
            Discover Our Story
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join The Inner Circle</h2>
          <p className="text-gray-500 mb-8">Subscribe to receive 10% off your first order, plus exclusive access to new collections and private events.</p>
          
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow border border-gray-300 px-6 py-4 focus:outline-none focus:border-gold-500 transition-colors"
              required
            />
            <button 
              type="submit"
              className="bg-charcoal-900 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold-500 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
