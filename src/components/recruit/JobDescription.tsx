import type { JobInfo } from '../../types';

type InfoItemProps = {
  title: string;
  content: string;
};

function InfoItem({ title, content }: InfoItemProps) {
  return (
    <div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-700 whitespace-pre-line">{content}</p>
    </div>
  );
}

type JobDescriptionProps = {
  jobInfo: JobInfo;
};

export function JobDescription({ jobInfo }: JobDescriptionProps) {
  return (
    <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
      <h3 className="text-2xl font-bold mb-4 text-amber-500">{jobInfo.position}</h3>
      <div className="space-y-4">
        <InfoItem title="募集職種" content={jobInfo.type} />
        <InfoItem title="応募資格" content={jobInfo.requirements} />
        <InfoItem title="給与" content={jobInfo.salary} />
        <InfoItem title="勤務時間" content={jobInfo.workingHours} />
        <InfoItem title="福利厚生" content={jobInfo.benefits} />
      </div>
    </section>
  );
}
