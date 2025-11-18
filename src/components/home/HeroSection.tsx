import { Button } from '../common/Button';

export function HeroSection() {
  const handleReservation = () => {
    // 予約処理の実装予定
    console.log('予約ページへ遷移');
  };

  return (
    <section className="relative h-96 bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center text-white">
      <div className="text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          伝統の技術、現代のスタイル
        </h2>
        <p className="text-lg md:text-xl mb-8">
          あなたの個性を引き出す、プロフェッショナルな散髪体験
        </p>
        <Button onClick={handleReservation}>
          ご予約はこちら
        </Button>
      </div>
    </section>
  );
}
