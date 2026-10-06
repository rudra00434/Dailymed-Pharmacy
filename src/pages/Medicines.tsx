import { Star, ShoppingCart, Heart, Search, Filter } from 'lucide-react';

const MEDICINES = [
  {
    id: 1,
    name: 'Paracetamol 500mg Tablets',
    brand: 'ReliefPharma',
    price: 5.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 1205,
    discount: 'Buy 2 Get 1 Free',
    image: '/images/multivitamin_bottle_1791273100060.jpg',
    tag: 'Essential'
  },
  {
    id: 2,
    name: 'Ibuprofen 400mg Pain Relief',
    brand: 'CarePlus',
    price: 8.50,
    originalPrice: 10.00,
    rating: 4.8,
    reviews: 843,
    discount: '15% OFF',
    image: '/images/herbal_bottle_1791273156405.jpg',
    tag: 'Bestseller'
  },
  {
    id: 3,
    name: 'Amoxicillin 250mg Capsules',
    brand: 'MediCore',
    price: 15.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 231,
    discount: null,
    image: '/images/fish_oil_bottle_1791273111314.jpg',
    tag: 'Prescription Required'
  },
  {
    id: 4,
    name: 'Day/Night Cold & Flu Relief',
    brand: 'Vicks',
    price: 12.00,
    originalPrice: 15.00,
    rating: 4.6,
    reviews: 512,
    discount: '20% OFF',
    image: '/images/vitaminc_bottle_1791273122086.jpg',
    tag: null
  },
  {
    id: 5,
    name: 'Cetirizine 10mg Allergy Relief',
    brand: 'AllerClear',
    price: 9.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 954,
    discount: null,
    image: '/images/cleanser_bottle_1791273133239.jpg',
    tag: 'Fast Acting'
  },
  {
    id: 6,
    name: 'Antacid Liquid Relief',
    brand: 'DigestWell',
    price: 7.50,
    originalPrice: 9.00,
    rating: 4.5,
    reviews: 320,
    discount: null,
    image: '/images/protein_tub_1791273144952.jpg',
    tag: null
  }
];

export default function Medicines() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Medicines A-Z</h1>
          <p className="text-muted-foreground max-w-2xl">Browse our extensive collection of prescription and over-the-counter medicines delivered safely to your door.</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search medicines..." 
              className="w-full md:w-64 pl-10 pr-4 py-2.5 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition-colors">
            <Filter size={18} />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>

      {/* Medicines Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {MEDICINES.map(product => (
          <div key={product.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-border/50 overflow-hidden transition-all duration-300 flex flex-col">
            <div className="relative aspect-square overflow-hidden bg-gray-100 p-6 flex items-center justify-center">
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                {product.discount && (
                  <span className="bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                    {product.discount}
                  </span>
                )}
                {product.tag && (
                  <span className={`text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase ${product.tag === 'Prescription Required' ? 'bg-red-500' : 'bg-primary'}`}>
                    {product.tag}
                  </span>
                )}
              </div>
              
              {/* Wishlist button */}
              <button className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-sm transition-colors opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 duration-300">
                <Heart size={18} />
              </button>

              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500 rounded-xl"
              />
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-xs font-semibold text-primary mb-1">{product.brand}</span>
              <h3 className="font-bold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-1 mb-4">
                <Star size={14} className="fill-accent text-accent" />
                <span className="text-sm font-bold text-foreground">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex flex-col">
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                  <span className="font-bold text-lg text-foreground">${product.price}</span>
                </div>
                
                <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-3 rounded-xl transition-colors duration-300">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Placeholder */}
      <div className="mt-12 flex justify-center">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button className="w-10 h-10 rounded-full bg-primary text-white font-medium flex items-center justify-center">1</button>
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-gray-50 font-medium">2</button>
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-gray-50 font-medium">3</button>
          <span className="px-2 text-gray-400">...</span>
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gray-600 hover:bg-gray-50">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
