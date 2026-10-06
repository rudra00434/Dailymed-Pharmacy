import {
  Star,
  ShoppingCart,
  Heart,
  Pill,
  Droplets,
  Baby,
  HeartPulse,
  Dumbbell,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  {
    id: 1,
    name: 'Vitamins',
    icon: (
      <Pill
        size={32}
        strokeWidth={1.5}
        className="text-orange-500"
      />
    ),
    color: 'bg-orange-100',
  },
  {
    id: 2,
    name: 'Personal Care',
    icon: (
      <Droplets
        size={32}
        strokeWidth={1.5}
        className="text-blue-500"
      />
    ),
    color: 'bg-blue-100',
  },
  {
    id: 3,
    name: 'Baby Care',
    icon: (
      <Baby
        size={32}
        strokeWidth={1.5}
        className="text-pink-500"
      />
    ),
    color: 'bg-pink-100',
  },
  {
    id: 4,
    name: 'First Aid',
    icon: (
      <HeartPulse
        size={32}
        strokeWidth={1.5}
        className="text-red-500"
      />
    ),
    color: 'bg-red-100',
  },
  {
    id: 5,
    name: 'Supplements',
    icon: (
      <Dumbbell
        size={32}
        strokeWidth={1.5}
        className="text-green-600"
      />
    ),
    color: 'bg-green-100',
  },
  {
    id: 6,
    name: 'Skin Care',
    icon: (
      <Sparkles
        size={32}
        strokeWidth={1.5}
        className="text-purple-500"
      />
    ),
    color: 'bg-purple-100',
  },
];
const PRODUCTS = [
  {
    id: 1,
    name: 'Advanced Multivitamin Complex',
    brand: 'HealthPlus',
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 124,
    discount: '15% OFF',
    image:
      'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Omega-3 Fish Oil 1000mg',
    brand: 'NatureWell',
    price: 18.5,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    discount: null,
    image:
      'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
    tag: 'Trending',
  },
  {
    id: 3,
    name: 'Vitamin C 500mg Immunity',
    brand: 'DailyMed Basics',
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.9,
    reviews: 312,
    discount: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    tag: null,
  },
  {
    id: 4,
    name: 'Hydrating Facial Cleanser',
    brand: 'DermaCare',
    price: 16.0,
    originalPrice: null,
    rating: 4.5,
    reviews: 67,
    discount: null,
    image:
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80',
    tag: null,
  },
  {
    id: 5,
    name: 'Whey Protein Isolate - Vanilla',
    brand: 'Velocity Nutrition',
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.7,
    reviews: 420,
    discount: 'Save $10',
    image:
      'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80',
    tag: 'New',
  },
  {
    id: 6,
    name: 'Organic Ashwagandha Extract',
    brand: 'Natura Herbals',
    price: 22.5,
    originalPrice: null,
    rating: 4.8,
    reviews: 156,
    discount: null,
    image:
      'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80',
    tag: 'Staff Pick',
  },
  {
    id: 7,
    name: "Women's Daily Multivitamin",
    brand: 'HealthPlus',
    price: 22.99,
    originalPrice: 26.99,
    rating: 4.7,
    reviews: 215,
    discount: null,
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    tag: null,
  },
  {
    id: 8,
    name: 'High Potency Fish Oil 2000mg',
    brand: 'NatureWell',
    price: 28.0,
    originalPrice: 32.0,
    rating: 4.9,
    reviews: 532,
    discount: '12% OFF',
    image:
      'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Value',
  },

  // 9
  {
    id: 9,
    name: 'Calcium + Vitamin D3 Tablets',
    brand: 'BoneCare',
    price: 14.99,
    originalPrice: 18.99,
    rating: 4.7,
    reviews: 184,
    discount: '21% OFF',
    image:
      'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular',
  },

  // 10
  {
    id: 10,
    name: 'Gentle Baby Body Wash',
    brand: 'BabyCare',
    price: 11.49,
    originalPrice: null,
    rating: 4.8,
    reviews: 143,
    discount: null,
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller',
  },

  // 11
  {
    id: 11,
    name: 'Aloe Vera Soothing Gel',
    brand: 'NatureGlow',
    price: 9.99,
    originalPrice: 12.99,
    rating: 4.6,
    reviews: 96,
    discount: '23% OFF',
    image:
      'https://gonatural.com.pk/cdn/shop/files/Untitleddesign-31_1400x.png?v=1750679150',
    tag: null,
  },

  // 12
  {
    id: 12,
    name: 'Gentle Baby Body Wash',
    brand: 'BabyCare',
    price: 11.49,
    originalPrice: null,
    rating: 4.8,
    reviews: 143,
    discount: null,
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    tag: 'Gentle Care',
  },

  // 13
  {
    id: 13,
    name: 'Antiseptic First Aid Solution',
    brand: 'SafeMed',
    price: 7.99,
    originalPrice: 9.99,
    rating: 4.5,
    reviews: 74,
    discount: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80',
    tag: null,
  },

  // 14
  {
    id: 14,
    name: 'Moisturizing Hand Cream',
    brand: 'DermaCare',
    price: 8.99,
    originalPrice: 11.99,
    rating: 4.7,
    reviews: 121,
    discount: '25% OFF',
    image:
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80',
    tag: 'Trending',
  },

  // 15
  {
    id: 15,
    name: 'Magnesium Glycinate 400mg',
    brand: 'WellnessPro',
    price: 19.99,
    originalPrice: 24.99,
    rating: 4.9,
    reviews: 367,
    discount: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    tag: 'Top Rated',
  },

  // 16
  {
    id: 16,
    name: 'Electrolyte Hydration Powder',
    brand: 'HydraPlus',
    price: 15.99,
    originalPrice: 19.99,
    rating: 4.6,
    reviews: 102,
    discount: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80',
    tag: 'New',
  },

  // 17
  {
    id: 17,
    name: 'Herbal Sleep Support Capsules',
    brand: 'Natura Herbals',
    price: 21.99,
    originalPrice: 26.99,
    rating: 4.7,
    reviews: 198,
    discount: '18% OFF',
    image:
      'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80',
    tag: 'Staff Pick',
  },

  // 18
  {
    id: 18,
    name: 'SPF 50 Daily Sunscreen',
    brand: 'SunShield',
    price: 17.99,
    originalPrice: 21.99,
    rating: 4.8,
    reviews: 286,
    discount: '18% OFF',
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller',
  },

  // 19
  {
    id: 19,
    name: 'Digital Thermometer',
    brand: 'MediCheck',
    price: 12.49,
    originalPrice: 15.99,
    rating: 4.6,
    reviews: 154,
    discount: '22% OFF',
    image:
      'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=800&q=80',
    tag: 'Essential',
  },

  // 20
  {
    id: 20,
    name: 'Blood Pressure Monitor',
    brand: 'HealthTrack',
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.9,
    reviews: 421,
    discount: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80',
    tag: 'Top Rated',
  },
];
export default function Products() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">

        {/* Categories Section */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                Shop by Category
              </h2>

              <p className="text-muted-foreground">
                Find everything you need for your health and wellness.
              </p>
            </div>

            <Link
              to="/categories"
              className="hidden sm:inline-flex text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              View All Categories
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to="/categories"
                className="group flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md border border-border/50 transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>

                <span className="font-semibold text-foreground text-center">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Products Section */}
        <div>
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-wider mb-2">
                Featured
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                Trending Products
              </h2>

              <p className="text-muted-foreground">
                Top rated health essentials chosen by our customers.
              </p>
            </div>

            <Link
              to="/medicines"
              className="hidden sm:inline-flex text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              View All Products
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-border/50 overflow-hidden transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100 p-6 flex items-center justify-center">

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                    {product.discount && (
                      <span className="bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                        {product.discount}
                      </span>
                    )}

                    {product.tag && (
                      <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                        {product.tag}
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to wishlist`}
                    className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-sm transition-colors opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 duration-300"
                  >
                    <Heart size={18} />
                  </button>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                </div>

                {/* Product Information */}
                <div className="p-5 flex flex-col flex-grow">

                  {/* Brand */}
                  <span className="text-xs font-semibold text-primary mb-1">
                    {product.brand}
                  </span>

                  {/* Product Name */}
                  <h3 className="font-bold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    <Star
                      size={14}
                      className="fill-accent text-accent"
                    />

                    <span className="text-sm font-bold text-foreground">
                      {product.rating}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price + Cart */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      {product.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}

                      <span className="font-bold text-lg text-foreground">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      type="button"
                      aria-label={`Add ${product.name} to cart`}
                      className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-3 rounded-xl transition-colors duration-300"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}