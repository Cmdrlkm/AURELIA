import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const PRODUCTS = [
  { id: 1, name: 'Eternity Diamond Ring', price: '$2,450', image: 'https://images.unsplash.com/photo-1605100804763-247f66122e94?q=80&w=600&auto=format&fit=crop', category: 'Rings', isBestseller: true },
  { id: 2, name: 'Lumina Gold Pendant', price: '$890', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop', category: 'Necklaces', isBestseller: true },
  { id: 3, name: 'Aura Pearl Earrings', price: '$650', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop', category: 'Earrings', isBestseller: false },
  { id: 4, name: 'Classic Tennis Bracelet', price: '$3,200', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop', category: 'Bracelets', isBestseller: true },
  { id: 5, name: 'Sapphire Halo Ring', price: '$3,800', image: 'https://images.unsplash.com/photo-1605100804763-247f66122e94?q=80&w=600&auto=format&fit=crop', category: 'Rings', isBestseller: false },
  { id: 6, name: 'Minimalist Gold Chain', price: '$450', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop', category: 'Necklaces', isBestseller: false },
  { id: 7, name: 'Diamond Studs', price: '$1,200', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop', category: 'Earrings', isBestseller: true },
  { id: 8, name: 'Rose Gold Cuff', price: '$1,850', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop', category: 'Bracelets', isBestseller: false },
];

export function Collections() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <div className="bg-gray-50 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">All Collections</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover our complete range of fine jewelry, crafted with exceptional materials and unparalleled attention to detail.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar (Desktop) / Dropdown (Mobile) */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="flex items-center justify-between lg:hidden mb-6">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 text-sm uppercase tracking-widest border border-gray-300 px-4 py-2"
              >
                <Filter size={16} />
                <span>Filter & Sort</span>
              </button>
              <span className="text-sm text-gray-500">{PRODUCTS.length} Products</span>
            </div>

            <div className={cn("space-y-8 lg:block", isFilterOpen ? "block" : "hidden")}>
              {/* Category Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4 flex justify-between items-center cursor-pointer">
                  Category <ChevronDown size={16} />
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="accent-gold-500" /> <span>Rings</span></label></li>
                  <li><label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="accent-gold-500" /> <span>Necklaces</span></label></li>
                  <li><label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="accent-gold-500" /> <span>Bracelets</span></label></li>
                  <li><label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="accent-gold-500" /> <span>Earrings</span></label></li>
                </ul>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4 flex justify-between items-center cursor-pointer">
                  Material <ChevronDown size={16} />
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="accent-gold-500" /> <span>18k Yellow Gold</span></label></li>
                  <li><label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="accent-gold-500" /> <span>18k White Gold</span></label></li>
                  <li><label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="accent-gold-500" /> <span>18k Rose Gold</span></label></li>
                  <li><label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="accent-gold-500" /> <span>Platinum</span></label></li>
                </ul>
              </div>

              {/* Gemstone Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4 flex justify-between items-center cursor-pointer">
                  Gemstone <ChevronDown size={16} />
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="accent-gold-500" /> <span>Diamond</span></label></li>
                  <li><label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="accent-gold-500" /> <span>Sapphire</span></label></li>
                  <li><label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="accent-gold-500" /> <span>Emerald</span></label></li>
                  <li><label className="flex items-center space-x-3 cursor-pointer"><input type="checkbox" className="accent-gold-500" /> <span>Pearl</span></label></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex justify-between items-center mb-8">
              <span className="text-sm text-gray-500">{PRODUCTS.length} Products</span>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-500">Sort by:</span>
                <select className="border-none bg-transparent focus:outline-none cursor-pointer font-medium">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
              {PRODUCTS.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-100">
                    {product.isBestseller && (
                      <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-[10px] uppercase tracking-widest font-medium">
                        Bestseller
                      </div>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button className="w-full bg-white text-charcoal-900 py-3 text-sm uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-colors">
                        Quick View
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-lg mb-1 group-hover:text-gold-500 transition-colors">{product.name}</h3>
                    <p className="text-gray-500 text-sm">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
