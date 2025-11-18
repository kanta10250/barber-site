export function DiscountSection() {
  return (
    <section className="mt-12 bg-slate-100 p-8 rounded-lg max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-slate-800">学割・シニア割引</h3>
      <ul className="space-y-2 text-gray-700">
        <li>学生の方: 全メニュー10%OFF(学生証提示)</li>
        <li>65歳以上の方: 平日限定10%OFF</li>
      </ul>
    </section>
  );
}
