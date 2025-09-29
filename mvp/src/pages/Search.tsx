// pages/SearchScreen.tsx
import { useState } from "react";
import { CardHolder } from "../components/CardHolder";
import { cardData } from "../data/dummyData";

const categories = [
  "همه",
  "رمان",
  "شعر",
  "تاریخی",
  "علمی",
  "فلسفه",
  "کودک",
  "داستان کوتاه",
  "زندگی‌نامه",
  "فانتزی",
  "دینی",
  "هنر",
];

export default function SearchScreen() {
  const [selected, setSelected] = useState("همه");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-4">
      {/* سرچ‌بار */}
      <div className="bg-white rounded-xl border border-gray-300 px-3 py-2 mb-4">
        <input
          type="text"
          placeholder="جستجو..."
          className="w-full text-sm text-gray-800 outline-none"
        />
      </div>

      {/* دکمه‌های دسته‌بندی */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              selected === cat
                ? "bg-green-600 text-white font-semibold"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* کارت‌ها */}
      <CardHolder
        title="جدید ترین آپدیت از نویسنده‌هایی که دنبال می‌کنید"
        description="کتاب‌های جدید نویسنده‌های مورد علاقه شما"
        data={cardData}
      />
    </div>
  );
}