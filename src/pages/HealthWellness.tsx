import { Star, ShoppingCart, Heart, Search, Filter } from 'lucide-react';

const WELLNESS_PRODUCTS = [
  {
    id: 1,
    name: 'Vegan Pea Protein - Chocolate',
    brand: 'PlantPower',
    price: 34.99,
    originalPrice: 45.00,
    rating: 4.6,
    reviews: 328,
    discount: 'Save 22%',
    image: '/images/protein_tub_1791273144952.jpg',
    tag: 'Vegan'
  },
  {
    id: 2,
    name: 'Sleep Support Gummies (Melatonin)',
    brand: 'NiteRest',
    price: 18.50,
    originalPrice: null,
    rating: 4.8,
    reviews: 512,
    discount: null,
    image: '/images/multivitamin_bottle_1791273100060.jpg',
    tag: 'Bestseller'
  },
  {
    id: 3,
    name: 'Turmeric Curcumin with Black Pepper',
    brand: 'HerbalRoots',
    price: 21.99,
    originalPrice: 28.99,
    rating: 4.9,
    reviews: 890,
    discount: '25% OFF',
    image: '/images/herbal_bottle_1791273156405.jpg',
    tag: 'Joint Health'
  },
  {
    id: 4,
    name: 'Super DHA + EPA Brain Health',
    brand: 'MarineLife',
    price: 29.50,
    originalPrice: null,
    rating: 4.7,
    reviews: 145,
    discount: null,
    image: '/images/fish_oil_bottle_1791273111314.jpg',
    tag: 'Cognitive'
  },
  {
    id: 5,
    name: 'Elderberry Zinc Defense Syrup',
    brand: 'ImmunoBoost',
    price: 15.99,
    originalPrice: 19.99,
    rating: 4.8,
    reviews: 421,
    discount: 'Save $4',
    image: '/images/vitaminc_bottle_1791273122086.jpg',
    tag: 'Seasonal'
  },
  {
    id: 6,
    name: 'Aloe Vera & Vitamin E Body Wash',
    brand: 'PureNaturals',
    price: 12.00,
    originalPrice: null,
    rating: 4.5,
    reviews: 210,
    discount: null,
    image: '/images/cleanser_bottle_1791273133239.jpg',
    tag: 'Organic'
  }
];

export default function HealthWellness() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Health & Wellness</h1>
          <p className="text-muted-foreground max-w-2xl">Elevate your daily routine with our premium selection of vitamins, supplements, and fitness essentials.</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search wellness..." 
              className="w-full md:w-64 pl-10 pr-4 py-2.5 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition-colors">
            <Filter size={18} />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>

      {/* Hero Banner inside page */}
      <div className="w-full bg-gradient-to-r from-emerald-100 to-teal-100 rounded-3xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-emerald-200/50">
        <div className="max-w-xl">
          <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-bold uppercase rounded-full mb-4">New Arrival</span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-emerald-950 mb-4">Plant-Based Organic Nutrition</h2>
          <p className="text-emerald-800 mb-6">Discover our new range of 100% organic, vegan-friendly supplements designed for holistic wellness.</p>
          <button className="px-6 py-2.5 bg-emerald-950 hover:bg-emerald-900 text-white rounded-full font-medium transition-colors">
            Shop the Collection
          </button>
        </div>
        <div className="w-32 h-32 md:w-48 md:h-48 bg-white/50 rounded-full flex items-center justify-center p-6 shadow-xl backdrop-blur-sm animate-float">
          <img src="/images/herbal_bottle_1791273156405.jpg" alt="Organic" className="w-full h-full object-contain mix-blend-multiply rounded-full" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {WELLNESS_PRODUCTS.map(product => (
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
                  <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">
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
    </div>
  );
}
