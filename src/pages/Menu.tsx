import { PriceCard } from '../components/menu/PriceCard';
import { DiscountSection } from '../components/menu/DiscountSection';
import { MENU_ITEMS } from '../constants';

export function Menu() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
        料金メニュー
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {MENU_ITEMS.map(item => (
          <PriceCard key={item.id} item={item} />
        ))}
      </div>
      <DiscountSection />
    </div>
  );
}