import { FlowStepComponent } from '../components/flow/FlowStep';
import { FLOW_STEPS } from '../constants';

export function Flow() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
        ご利用の流れ
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {FLOW_STEPS.map(step => (
            <FlowStepComponent key={step.step} flowStep={step} />
          ))}
        </div>
      </div>
    </div>
  );
}
