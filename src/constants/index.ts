import { Scissors, Clock, Users } from 'lucide-react';
import type { Feature, MenuItem, FlowStep, JobInfo, Benefit } from '../types';

export const SITE_NAME = 'CLASSIC BARBER';

export const CONTACT_INFO = {
  phone: '03-1234-5678',
  email: 'info@classicbarber.jp',
  address: '東京都渋谷区1-2-3',
  businessHours: {
    weekday: '10:00 - 20:00',
    weekend: '9:00 - 19:00',
    holiday: '毎週月曜日'
  }
};

export const FEATURES: Feature[] = [
  {
    icon: Scissors,
    title: '熟練の技術',
    description: '経験豊富な理容師が、お客様一人ひとりに合わせた最高の仕上がりを提供します'
  },
  {
    icon: Clock,
    title: '完全予約制',
    description: '待ち時間なく、ゆったりとした時間をお過ごしいただけます'
  },
  {
    icon: Users,
    title: '個別対応',
    description: 'お客様のライフスタイルに合わせた、パーソナルなスタイリング提案'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'cut',
    title: 'カット',
    price: '¥4,500',
    description: 'シャンプー・スタイリング込み',
    duration: '約45分'
  },
  {
    id: 'cut-shaving',
    title: 'カット + シェービング',
    price: '¥6,000',
    description: '顔剃り込みのフルコース',
    duration: '約60分'
  },
  {
    id: 'coloring',
    title: 'カラーリング',
    price: '¥5,500〜',
    description: '白髪染め・おしゃれ染め',
    duration: '約60分'
  },
  {
    id: 'perm',
    title: 'パーマ',
    price: '¥6,500〜',
    description: 'スタイリングが楽になる',
    duration: '約90分'
  }
];

export const FLOW_STEPS: FlowStep[] = [
  {
    step: 1,
    title: 'ご予約',
    description: 'お電話またはオンラインでご予約ください。初めての方は、ご希望のスタイルや気になる点をお聞かせください。'
  },
  {
    step: 2,
    title: 'カウンセリング',
    description: '担当理容師がお客様のライフスタイルや好みをお伺いし、最適なスタイルをご提案します。'
  },
  {
    step: 3,
    title: '施術',
    description: '熟練の技術で丁寧に施術いたします。リラックスしてお過ごしください。'
  },
  {
    step: 4,
    title: 'スタイリング',
    description: '仕上げのスタイリングを行い、ご自宅でのセット方法もアドバイスいたします。'
  },
  {
    step: 5,
    title: 'お会計・次回予約',
    description: 'お会計と次回のご予約を承ります。次回のご来店を心よりお待ちしております。'
  }
];

export const JOB_INFO: JobInfo = {
  position: '理容師募集',
  type: '理容師(正社員・アルバイト)',
  requirements: '理容師免許をお持ちの方\n経験者優遇・未経験者も歓迎',
  salary: '正社員: 月給25万円〜40万円(経験・能力による)\nアルバイト: 時給1,200円〜1,800円',
  workingHours: '9:30〜20:30(シフト制)\n週休2日制',
  benefits: '社会保険完備、交通費支給、技術研修制度あり、制服貸与'
};

export const BENEFITS: Benefit[] = [
  { text: '最新の技術を学べる研修制度' },
  { text: 'アットホームな職場環境' },
  { text: 'キャリアアップ支援制度' },
  { text: '充実した教育プログラム' }
];