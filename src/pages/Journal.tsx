import { Link } from 'react-router-dom';

export function Journal() {
  const posts = [
    {
      id: 1,
      title: 'The Meaning Behind the Stones: A Guide to Gemstones',
      category: 'Education',
      date: 'October 12, 2023',
      image: 'https://images.unsplash.com/photo-1573408301145-b98c46544405?q=80&w=800&auto=format&fit=crop',
      excerpt: 'Discover the rich history and symbolism behind the world\'s most precious gemstones, from the protective properties of sapphire to the passionate energy of ruby.'
    },
    {
      id: 2,
      title: 'How to Care for Your Fine Jewelry',
      category: 'Care Guide',
      date: 'September 28, 2023',
      image: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df5?q=80&w=800&auto=format&fit=crop',
      excerpt: 'Expert tips on cleaning, storing, and maintaining your Aurelia pieces to ensure they retain their brilliance for generations to come.'
    },
    {
      id: 3,
      title: 'Behind the Scenes: The Making of the Lumina Collection',
      category: 'Atelier',
      date: 'September 15, 2023',
      image: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=800&auto=format&fit=crop',
      excerpt: 'Step inside our Parisian atelier as our master artisans bring the new Lumina Collection to life, from initial sketch to final polish.'
    },
    {
      id: 4,
      title: 'The Art of Stacking: Styling Your Rings',
      category: 'Style Guide',
      date: 'August 30, 2023',
      image: 'https://images.unsplash.com/photo-1605100804763-247f66122e94?q=80&w=800&auto=format&fit=crop',
      excerpt: 'Learn how to mix metals, textures, and stones to create a curated ring stack that perfectly expresses your personal style.'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">The Journal</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Stories of craftsmanship, style inspiration, and the fascinating world of fine jewelry.
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center space-x-8 mb-16 border-b border-gray-200 pb-4 overflow-x-auto">
          <button className="text-sm uppercase tracking-widest text-charcoal-900 border-b-2 border-charcoal-900 pb-4 -mb-[18px] whitespace-nowrap">All Stories</button>
          <button className="text-sm uppercase tracking-widest text-gray-400 hover:text-charcoal-900 pb-4 whitespace-nowrap">Atelier</button>
          <button className="text-sm uppercase tracking-widest text-gray-400 hover:text-charcoal-900 pb-4 whitespace-nowrap">Style Guide</button>
          <button className="text-sm uppercase tracking-widest text-gray-400 hover:text-charcoal-900 pb-4 whitespace-nowrap">Education</button>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <Link to={`/journal/${posts[0].id}`} className="group block">
            <div className="relative h-[60vh] overflow-hidden mb-8">
              <img 
                src={posts[0].image} 
                alt={posts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs text-gold-500 uppercase tracking-widest mb-4 block">{posts[0].category}</span>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-gold-500 transition-colors">{posts[0].title}</h2>
              <p className="text-gray-500 mb-6">{posts[0].excerpt}</p>
              <span className="text-xs text-gray-400 uppercase tracking-widest">{posts[0].date}</span>
            </div>
          </Link>
        </div>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {posts.slice(1).map((post) => (
            <Link to={`/journal/${post.id}`} key={post.id} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xs text-gold-500 uppercase tracking-widest mb-3 block">{post.category}</span>
                <h3 className="font-serif text-xl mb-3 group-hover:text-gold-500 transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <span className="text-xs text-gray-400 uppercase tracking-widest">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
