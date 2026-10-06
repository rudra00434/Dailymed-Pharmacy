import { Pill, Droplets, Baby, HeartPulse, Dumbbell, Sparkles, Eye, Apple, Wind, Activity, Stethoscope, Smile } from 'lucide-react';

const ALL_CATEGORIES = [
  { id: 1, name: 'Vitamins & Supplements', icon: <Pill size={36} strokeWidth={1.5} className="text-orange-500" />, color: 'bg-orange-100' },
  { id: 2, name: 'Personal Care', icon: <Droplets size={36} strokeWidth={1.5} className="text-blue-500" />, color: 'bg-blue-100' },
  { id: 3, name: 'Baby & Mom Care', icon: <Baby size={36} strokeWidth={1.5} className="text-pink-500" />, color: 'bg-pink-100' },
  { id: 4, name: 'First Aid', icon: <HeartPulse size={36} strokeWidth={1.5} className="text-red-500" />, color: 'bg-red-100' },
  { id: 5, name: 'Sports Nutrition', icon: <Dumbbell size={36} strokeWidth={1.5} className="text-green-600" />, color: 'bg-green-100' },
  { id: 6, name: 'Skin Care', icon: <Sparkles size={36} strokeWidth={1.5} className="text-purple-500" />, color: 'bg-purple-100' },
  { id: 7, name: 'Eye & Ear Care', icon: <Eye size={36} strokeWidth={1.5} className="text-cyan-500" />, color: 'bg-cyan-100' },
  { id: 8, name: 'Diet & Weight Loss', icon: <Apple size={36} strokeWidth={1.5} className="text-lime-500" />, color: 'bg-lime-100' },
  { id: 9, name: 'Respiratory Care', icon: <Wind size={36} strokeWidth={1.5} className="text-sky-500" />, color: 'bg-sky-100' },
  { id: 10, name: 'Diabetes Care', icon: <Activity size={36} strokeWidth={1.5} className="text-indigo-500" />, color: 'bg-indigo-100' },
  { id: 11, name: 'Medical Devices', icon: <Stethoscope size={36} strokeWidth={1.5} className="text-slate-500" />, color: 'bg-slate-100' },
  { id: 12, name: 'Oral Care', icon: <Smile size={36} strokeWidth={1.5} className="text-teal-500" />, color: 'bg-teal-100' },
];

export default function Categories() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">All Categories</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our comprehensive range of health, wellness, and personal care products organized by category.</p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {ALL_CATEGORIES.map(category => (
          <a key={category.id} href="#" className="group flex flex-col items-center gap-4 p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl border border-border/50 transition-all hover:-translate-y-2 duration-300">
            <div className={`w-20 h-20 ${category.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
              {category.icon}
            </div>
            <span className="font-bold text-foreground text-center text-lg group-hover:text-primary transition-colors">{category.name}</span>
            <span className="text-sm text-muted-foreground">Explore items &rarr;</span>
          </a>
        ))}
      </div>
      
      {/* Bottom Promo */}
      <div className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Can't find what you're looking for?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Use our advanced search or upload your prescription directly. Our pharmacists are ready to assist you 24/7.</p>
        <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-colors shadow-lg shadow-primary/25">
          Search All Products
        </button>
      </div>
    </div>
  );
}
