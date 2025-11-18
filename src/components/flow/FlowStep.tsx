import type { FlowStep as FlowStepType } from '../../types';

type FlowStepProps = {
  flowStep: FlowStepType;
};

export function FlowStepComponent({ flowStep }: FlowStepProps) {
  return (
    <article className="flex items-start space-x-4">
      <div 
        className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-xl"
        aria-label={`ステップ ${flowStep.step}`}
      >
        {flowStep.step}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">{flowStep.title}</h3>
        <p className="text-gray-600">{flowStep.description}</p>
      </div>
    </article>
  );
}