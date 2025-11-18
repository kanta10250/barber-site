import { Button } from '../common/Button';
import type { Benefit } from '../../types';

type BenefitsListProps = {
  benefits: readonly Benefit[];
};

export function BenefitsList({ benefits }: BenefitsListProps) {
  const handleApply = () => {
    // 応募フォーム遷移の実装予定
    console.log('応募フォームへ遷移');
  };

  return (
    <section className="bg-amber-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">当店で働く魅力</h3>
      <ul className="space-y-2 text-gray-700 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="text-amber-500 mr-2" aria-hidden="true">✓</span>
            <span>{benefit.text}</span>
          </li>
        ))}
      </ul>
      <Button onClick={handleApply}>
        応募フォームへ
      </Button>
    </section>
  );
}