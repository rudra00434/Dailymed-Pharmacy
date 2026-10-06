import { Star, ShoppingCart, Heart, Tag, Percent } from 'lucide-react';

const OFFER_PRODUCTS = [
  {
    id: 1,
    name: 'Premium Joint Support Formula',
    brand: 'OrthoCare',
    price: 19.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 642,
    discount: '50% OFF',
    image: '/images/multivitamin_bottle_1791273100060.jpg',
    tag: 'Flash Sale'
  },
  {
    id: 2,
    name: 'B-Complex Energy Booster',
    brand: 'VitalityLab',
    price: 12.00,
    originalPrice: 20.00,
    rating: 4.9,
    reviews: 823,
    discount: '40% OFF',
    image: '/images/vitaminc_bottle_1791273122086.jpg',
    tag: 'Clearance'
  },
  {
    id: 3,
    name: 'Mass Gainer Pro - 5lbs',
    brand: 'Titan Nutrition',
    price: 45.00,
    originalPrice: 75.00,
    rating: 4.7,
    reviews: 1102,
    discount: 'Save $30',
    image: '/images/protein_tub_1791273144952.jpg',
    tag: 'Limited Time'
  },
  {
    id: 4,
    name: 'Anti-Aging Retinol Night Cream',
    brand: 'DermaYouth',
    price: 24.50,
    originalPrice: 49.00,
    rating: 4.5,
    reviews: 430,
    discount: 'Half Price',
    image: '/images/cleanser_bottle_1791273133239.jpg',
    tag: 'Special Offer'

  },
  {
    id: 5,
    name: 'Fish Oil - Omega-3',
    brand: 'OmegaVita',
    price: 15.00,
    originalPrice: 25.00,
    rating: 4.6,
    reviews: 1102,
    discount: 'Save $30',
    image: '/images/fish_oil_bottle_1791273111314.jpg',
    tag: 'Limited Time'
  },
  {
    id: 6,
    name: 'Protein Powder - 2lbs',
    brand: 'ProSource',
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.7,
    reviews: 987,
    discount: '40% OFF',
    image: '/images/protein_tub_1791273144952.jpg',
    tag: 'Bestseller'
  }
];

export default function Offers() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 mb-12 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Percent size={300} />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 text-orange-100 font-bold uppercase tracking-wider mb-2">
            <Tag size={20} />
            <span>Weekend Mega Sale</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Get up to 50% off on premium health essentials</h1>
          <p className="text-lg opacity-90 mb-8">Stock up on your favorite vitamins, supplements, and personal care items before the sale ends on Sunday night.</p>

          <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 inline-flex items-center gap-4 border border-white/30">
            <div>
              <p className="text-xs uppercase tracking-wider opacity-80">Use Code at Checkout</p>
              <p className="text-2xl font-bold font-mono">HEALTH50</p>
            </div>
            <button className="bg-white text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg font-bold transition-colors">
              Copy Code
            </button>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-8 bg-accent rounded-full"></div>
        <h2 className="text-3xl font-display font-bold text-foreground">Flash Sale Deals</h2>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {OFFER_PRODUCTS.map(product => (
          <div key={product.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border-2 border-accent/20 overflow-hidden transition-all duration-300 flex flex-col relative">

            {/* Massive Discount Ribbon */}
            <div className="absolute top-4 -right-8 bg-accent text-white font-bold py-1 px-10 transform rotate-45 shadow-md z-20 pointer-events-none">
              {product.discount}
            </div>

            <div className="relative aspect-square overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase animate-pulse">
                  {product.tag}
                </span>
              </div>

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

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex flex-col">
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through font-medium">${product.originalPrice}</span>
                  )}
                  <span className="font-bold text-2xl text-red-500">${product.price}</span>
                </div>

                <button className="bg-accent hover:bg-orange-500 text-white p-3 rounded-xl transition-colors duration-300 shadow-md shadow-accent/30">
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
