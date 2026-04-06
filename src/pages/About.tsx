export function About() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2000&auto=format&fit=crop"
            alt="Atelier"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal-900/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Our Heritage</h1>
          <p className="text-lg font-light tracking-wide">
            A legacy of uncompromising craftsmanship and timeless design, born in Paris in 1992.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">The Aurelia Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded by master jeweler Elena Rossi, Aurelia began as a small atelier in the heart of Paris. 
                Driven by a passion for rare gemstones and a dedication to traditional techniques, Elena sought 
                to create pieces that transcended fleeting trends.
              </p>
              <p>
                Today, Aurelia remains a family-owned house, preserving the intimate connection between artisan 
                and creation. Every piece that bears our name is a testament to our enduring commitment to 
                excellence, designed to be cherished for generations.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000&auto=format&fit=crop" 
              alt="Founder working" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24 mb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Core Values</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">The principles that guide every sketch, every setting, and every interaction.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-charcoal-900 text-white flex items-center justify-center rounded-full mb-6 font-serif text-2xl">01</div>
              <h3 className="font-serif text-xl mb-4">Ethical Sourcing</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We trace every diamond and gemstone to its origin, partnering only with mines that adhere to strict environmental and human rights standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-charcoal-900 text-white flex items-center justify-center rounded-full mb-6 font-serif text-2xl">02</div>
              <h3 className="font-serif text-xl mb-4">Master Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We reject mass production. Each piece is forged, set, and polished by hand by artisans who have spent decades perfecting their craft.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-charcoal-900 text-white flex items-center justify-center rounded-full mb-6 font-serif text-2xl">03</div>
              <h3 className="font-serif text-xl mb-4">Timeless Design</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We design for longevity, not for seasons. Our aesthetic balances classic elegance with modern sensibility, ensuring your jewelry never feels dated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=600&auto=format&fit=crop" 
                alt="Detail work" 
                className="w-full h-[300px] object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1620656798579-1984d9e87df5?q=80&w=600&auto=format&fit=crop" 
                alt="Tools" 
                className="w-full h-[300px] object-cover mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:pl-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">The Art of Creation</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The journey of an Aurelia piece begins long before it reaches our atelier. It starts with the careful selection of raw materials—recycled 18k gold and conflict-free stones chosen for their exceptional fire and clarity.
              </p>
              <p>
                In our workshop, traditional techniques meet modern precision. Our master jewelers employ centuries-old methods of hand-forging and micro-pavé setting, ensuring that every stone is secure and every surface is flawlessly finished.
              </p>
              <p>
                This painstaking process cannot be rushed. It is a labor of love that imbues each piece with a soul, a tangible connection to the hands that made it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
