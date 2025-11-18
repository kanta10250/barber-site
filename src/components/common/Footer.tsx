import { Scissors, Phone, Mail, MapPin } from 'lucide-react';
import { SITE_NAME, CONTACT_INFO } from '../../constants';

function ContactItem({ 
  icon: Icon, 
  children 
}: { 
  icon: typeof Phone; 
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center space-x-2 text-gray-400">
      <Icon className="w-4 h-4" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="w-6 h-6 text-amber-500" aria-hidden="true" />
              <h3 className="text-xl font-bold">{SITE_NAME}</h3>
            </div>
            <p className="text-gray-400">伝統と現代が融合する、本格派理容室</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-amber-500">営業時間</h4>
            <p className="text-gray-400">平日: {CONTACT_INFO.businessHours.weekday}</p>
            <p className="text-gray-400">土日祝: {CONTACT_INFO.businessHours.weekend}</p>
            <p className="text-gray-400">定休日: {CONTACT_INFO.businessHours.holiday}</p>
          </div>

          <address className="not-italic">
            <h4 className="font-bold mb-4 text-amber-500">お問い合わせ</h4>
            <div className="space-y-2">
              <ContactItem icon={Phone}>{CONTACT_INFO.phone}</ContactItem>
              <ContactItem icon={Mail}>{CONTACT_INFO.email}</ContactItem>
              <ContactItem icon={MapPin}>{CONTACT_INFO.address}</ContactItem>
            </div>
          </address>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
