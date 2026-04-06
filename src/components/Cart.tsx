import { X, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps) {
  const cartItems = [
    {
      id: 1,
      name: 'Eternity Diamond Ring',
      price: 2450,
      image: 'https://images.unsplash.com/photo-1605100804763-247f66122e94?q=80&w=200&auto=format&fit=crop',
      variant: '18k Yellow Gold, Size 6',
      quantity: 1
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm z-50"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="font-serif text-xl">Your Cart (1)</h2>
              <button onClick={onClose} className="p-2 hover:text-gold-500 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length > 0 ? (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-24 bg-gray-50 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-serif text-sm">{item.name}</h3>
                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mb-2">{item.variant}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border border-gray-200">
                            <button className="px-2 py-1 text-gray-500 hover:text-charcoal-900">-</button>
                            <span className="px-2 text-sm">{item.quantity}</span>
                            <button className="px-2 py-1 text-gray-500 hover:text-charcoal-900">+</button>
                          </div>
                          <p className="text-sm font-medium">${item.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <p className="text-gray-500">Your cart is currently empty.</p>
                  <button onClick={onClose} className="text-sm uppercase tracking-widest border-b border-charcoal-900 pb-1">
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Subtotal</span>
                  <span className="font-serif text-lg">${subtotal.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500 mb-6 text-center">Shipping & taxes calculated at checkout</p>
                
                <button className="w-full bg-charcoal-900 text-white py-4 text-sm uppercase tracking-widest hover:bg-gold-500 transition-colors flex items-center justify-center space-x-2 mb-4">
                  <span>Checkout</span>
                  <ArrowRight size={16} />
                </button>
                
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                  <ShieldCheck size={14} />
                  <span>Secure Checkout</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
