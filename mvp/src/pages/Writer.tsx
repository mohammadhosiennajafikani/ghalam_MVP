// pages/AccountScreen.tsx
import { CardHolder } from "../components/CardHolder";
import { cardData } from "../data/dummyData";

export default function WriterScreen() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-4">
      <p className="m-3 p-3 bg-green-300 rounded-2xl text-lg font-vazir shadow">
        تعداد بازدیدهای ماهانه شما: 216
      </p>

      <p className="m-3 p-3 bg-green-300 rounded-2xl text-lg font-vazir shadow">
        کتاب‌های در جریان: 3 &nbsp;&nbsp;&nbsp; کتاب‌های منتشر شده: 10
      </p>

      <CardHolder
        title="کتاب‌های در حال جریان"
        description="کتاب‌هایی که دارید روش کار می‌کنید"
        data={cardData}
      />

      <CardHolder
        title="کتاب‌های منتشر شده"
        data={cardData}
      />
    </div>
  );
}