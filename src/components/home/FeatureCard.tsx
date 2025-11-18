import type { Feature } from '../../types';

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;
  
  return (
    <article className="bg-white p-6 rounded-lg shadow-lg text-center">
      <Icon className="w-12 h-12 mx-auto mb-4 text-amber-500" aria-hidden="true" />
      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
      <p className="text-gray-600">{feature.description}</p>
    </article>
  );
}
