import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Client Care</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We are here to assist you with any inquiries regarding our collections, bespoke services, or your recent order.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h3 className="font-serif text-2xl mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-gold-500 mt-1" size={20} />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-gray-500 text-sm">+1 (800) 123-4567</p>
                    <p className="text-gray-400 text-xs mt-1">Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-gold-500 mt-1" size={20} />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-gray-500 text-sm">concierge@aurelia.com</p>
                    <p className="text-gray-400 text-xs mt-1">We aim to reply within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MessageCircle className="text-gold-500 mt-1" size={20} />
                  <div>
                    <p className="font-medium mb-1">WhatsApp</p>
                    <p className="text-gray-500 text-sm">+1 (800) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-6">Our Flagship</h3>
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold-500 mt-1" size={20} />
                <div>
                  <p className="font-medium mb-1">Paris Atelier</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    15 Place Vendôme<br />
                    75001 Paris, France
                  </p>
                  <p className="text-gray-400 text-xs mt-2">By appointment only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-gray-50 p-8 md:p-12">
            <h3 className="font-serif text-2xl mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input type="text" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-charcoal-900 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input type="text" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-charcoal-900 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input type="email" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-charcoal-900 transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                <select className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-charcoal-900 transition-colors text-gray-700">
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Bespoke Design</option>
                  <option>Repairs & Resizing</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-charcoal-900 transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="bg-charcoal-900 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold-500 transition-colors w-full md:w-auto">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-medium mb-2">Do you offer international shipping?</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Yes, we ship globally via insured express courier. International shipping is complimentary on orders over $1,000.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">What is your return policy?</h4>
              <p className="text-gray-500 text-sm leading-relaxed">We accept returns within 30 days of delivery for a full refund, provided the piece is unworn and in its original condition.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Can I customize an existing design?</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Absolutely. We offer bespoke services to modify existing designs or create entirely new pieces. Contact us to schedule a consultation.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Does my jewelry come with a warranty?</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Yes, all Aurelia pieces are covered by a lifetime warranty against manufacturing defects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
