import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, ArrowRight, Heart, Share2, Truck, RotateCcw } from 'lucide-react';
import { cn } from '../lib/utils';

export function Product() {
  const [selectedMetal, setSelectedMetal] = useState('yellow-gold');
  const [selectedSize, setSelectedSize] = useState('6');
  const [activeTab, setActiveTab] = useState('details');

  const images = [
    'https://images.unsplash.com/photo-1605100804763-247f66122e94?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605100804763-247f66122e94?q=80&w=1200&auto=format&fit=crop&sat=-100', // Simulated white gold
    'https://images.unsplash.com/photo-1605100804763-247f66122e94?q=80&w=1200&auto=format&fit=crop&hue=300', // Simulated rose gold
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-gray-500 uppercase tracking-widest mb-8">
          <Link to="/" className="hover:text-charcoal-900">Home</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-charcoal-900">Rings</Link>
          <span>/</span>
          <span className="text-charcoal-900">Eternity Diamond Ring</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          {/* Image Gallery */}
          <div className="lg:w-1/2 flex gap-4">
            <div className="hidden md:flex flex-col gap-4 w-20">
              {images.map((img, idx) => (
                <button key={idx} className="aspect-square bg-gray-100 border border-transparent hover:border-gold-500 transition-colors">
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] bg-gray-100 relative group cursor-zoom-in">
              <img 
                src={images[0]} 
                alt="Eternity Diamond Ring" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:text-gold-500 transition-colors">
                <Heart size={20} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-widest flex items-center space-x-2 cursor-pointer hover:bg-white transition-colors">
                <RotateCcw size={14} />
                <span>360° View</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col pt-4">
            <div className="flex justify-between items-start mb-2">
              <h1 className="font-serif text-3xl md:text-4xl">Eternity Diamond Ring</h1>
              <button className="text-gray-400 hover:text-charcoal-900 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
            
            <p className="text-xl mb-4">$2,450</p>
            
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-gold-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-gray-500 underline cursor-pointer">48 Reviews</span>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              A continuous circle of brilliant-cut diamonds, meticulously hand-set in 18k gold. 
              The Eternity Ring symbolizes everlasting love and uncompromising craftsmanship, 
              designed to be worn alone or stacked for a personalized statement.
            </p>

            {/* Metal Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm uppercase tracking-widest font-medium">Metal</span>
                <span className="text-sm text-gray-500">18k Yellow Gold</span>
              </div>
              <div className="flex space-x-4">
                {[
                  { id: 'yellow-gold', color: 'bg-yellow-400' },
                  { id: 'white-gold', color: 'bg-gray-200' },
                  { id: 'rose-gold', color: 'bg-rose-300' }
                ].map((metal) => (
                  <button
                    key={metal.id}
                    onClick={() => setSelectedMetal(metal.id)}
                    className={cn(
                      "w-8 h-8 rounded-full border-2 transition-all",
                      selectedMetal === metal.id ? "border-charcoal-900 scale-110" : "border-transparent hover:scale-110",
                      metal.color
                    )}
                    aria-label={`Select ${metal.id}`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm uppercase tracking-widest font-medium">Ring Size</span>
                <button className="text-xs text-gray-500 underline hover:text-charcoal-900">Size Guide</button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "py-2 text-sm border transition-colors",
                      selectedSize === size 
                        ? "border-charcoal-900 bg-charcoal-900 text-white" 
                        : "border-gray-300 hover:border-charcoal-900 text-charcoal-900"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-3 mb-8">
              <button className="w-full bg-charcoal-900 text-white py-4 text-sm uppercase tracking-widest hover:bg-gold-500 transition-colors">
                Add to Cart
              </button>
              <button className="w-full border border-charcoal-900 text-charcoal-900 py-4 text-sm uppercase tracking-widest hover:bg-gray-50 transition-colors">
                Buy It Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200 mb-8">
              <div className="flex flex-col items-center text-center">
                <Truck size={20} className="mb-2 text-gray-400" />
                <span className="text-xs text-gray-500">Free Global<br/>Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw size={20} className="mb-2 text-gray-400" />
                <span className="text-xs text-gray-500">30-Day<br/>Returns</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck size={20} className="mb-2 text-gray-400" />
                <span className="text-xs text-gray-500">Lifetime<br/>Warranty</span>
              </div>
            </div>

            {/* Accordion / Tabs */}
            <div>
              <div className="flex border-b border-gray-200 mb-4">
                {['details', 'materials', 'shipping'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "pb-2 px-4 text-sm uppercase tracking-widest transition-colors relative",
                      activeTab === tab ? "text-charcoal-900" : "text-gray-400 hover:text-charcoal-900"
                    )}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-charcoal-900"></span>
                    )}
                  </button>
                ))}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed py-2">
                {activeTab === 'details' && (
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Total carat weight: 1.50ct (varies by ring size)</li>
                    <li>Diamond quality: VS+ clarity, F-G color</li>
                    <li>Band width: 2.2mm</li>
                    <li>Ethically sourced, conflict-free diamonds</li>
                    <li>Handcrafted in Paris</li>
                  </ul>
                )}
                {activeTab === 'materials' && (
                  <p>
                    Crafted from solid 18k gold, ensuring durability and a rich, lasting color. 
                    Our diamonds are carefully selected for their exceptional brilliance and fire, 
                    meeting the highest standards of ethical sourcing.
                  </p>
                )}
                {activeTab === 'shipping' && (
                  <p>
                    Complimentary express shipping on all orders. Each piece is made to order and 
                    typically ships within 2-3 weeks. Delivered in our signature luxury packaging.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-24">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">Complete The Look</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 2, name: 'Lumina Gold Pendant', price: '$890', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop' },
              { id: 4, name: 'Classic Tennis Bracelet', price: '$3,200', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop' },
              { id: 7, name: 'Diamond Studs', price: '$1,200', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop' },
              { id: 8, name: 'Rose Gold Cuff', price: '$1,850', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop' }
            ].map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group cursor-pointer block">
                <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
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
  );
}
