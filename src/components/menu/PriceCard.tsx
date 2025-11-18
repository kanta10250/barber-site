import type { MenuItem } from '../../types';

type PriceCardProps = {
  item: MenuItem;
};

export function PriceCard({ item }: PriceCardProps) {
  return (
    <article className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-500">
      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
      <p className="text-3xl text-amber-500 font-bold mb-2" aria-label={`料金 ${item.price}`}>
        {item.price}
      </p>
      <div className="text-gray-600">
        <p>{item.description}</p>
        <p>所要時間: {item.duration}</p>
      </div>
    </article>
  );
}