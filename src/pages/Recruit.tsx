import { JobDescription } from '../components/recruit/JobDescription';
import { BenefitsList } from '../components/recruit/BenefitsList';
import { JOB_INFO, BENEFITS } from '../constants';

export function Recruit() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
        求人情報
      </h2>
      <div className="max-w-4xl mx-auto">
        <JobDescription jobInfo={JOB_INFO} />
        <BenefitsList benefits={BENEFITS} />
      </div>
    </div>
  );
}
