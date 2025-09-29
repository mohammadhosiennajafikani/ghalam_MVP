import { useCounter } from "../hooks/useCounter";

export function MonthlyViewsCard() {
    const value = useCounter(43);

    return (
        <div className="w-[180px] rounded-2xl border border-gray-200 shadow-md bg-white p-4 text-center">
            <p className="text-sm text-gray-600 font-semibold">بازدید ماهانه</p>
            <p className="text-3xl font-bold text-green-600 animate-pulse">{value}</p>
            <svg width="220" height="30" viewBox="0 0 220 30">
                <polyline
                    fill="none"
                    stroke="green"
                    strokeWidth="2"
                    points="0,15 20,15 30,5 40,25 50,15 70,15 80,10 90,20 100,15 120,15 130,8 140,22 150,15 170,15 180,12 190,18 200,15"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="200"
                        to="0"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </polyline>
            </svg>

        </div>
    );
}

export function PublishedBooksCard() {
    const value = useCounter(10);

    return (
        <div className="w-[180px] rounded-2xl border border-gray-200 shadow-md bg-white p-4 text-center">
            <p className="text-sm text-gray-600 font-semibold">کتاب‌های منتشر شده</p>
            <p className="text-3xl font-bold text-indigo-600 animate-bounce">{value}</p>
            <svg
                className="mx-auto mt-2"
                width="60"
                height="60"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* جلد سمت چپ */}
                <rect x="8" y="10" width="20" height="44" rx="2" fill="#6366f1" />

                {/* جلد سمت راست */}
                <rect x="36" y="10" width="20" height="44" rx="2" fill="#4f46e5" />

                {/* صفحات وسط */}
                <rect x="28" y="10" width="8" height="44" fill="#fff" stroke="#ddd" />

                {/* انیمیشن ورق خوردن صفحه */}
                <path
                    d="M28 10 Q32 32 28 54"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    fill="none"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="-10 32 32;10 32 32;-10 32 32"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </path>
            </svg>


        </div>
    );
}

export function WritingBooksCard() {
    const value = useCounter(3); // 👈 تعداد کتاب‌های در حال نگارش

    return (
        <div className="w-[180px] rounded-2xl border border-gray-200 shadow-md bg-white p-4 text-center">
            <p className="text-sm text-gray-600 font-semibold">کتاب‌های در حال نگارش</p>
            <p className="text-3xl font-bold text-orange-500 animate-pulse">{value}</p>

            {/* آیکون مداد متحرک */}
            <svg
                className="mx-auto mt-2"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f97316"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="-10 12 20;10 12 20;-10 12 20"
                    dur="1.5s"
                    repeatCount="indefinite"
                />
            </svg>
        </div>
    );
}

export function SalesCard() {
    const value = useCounter(125); // 👈 تعداد فروش (مثال)

    return (
        <div className="w-[180px] rounded-2xl border border-gray-200 shadow-md bg-white p-4 text-center">
            <p className="text-sm text-gray-600 font-semibold">تعداد فروش</p>
            <p className="text-3xl font-bold text-yellow-500 animate-pulse">{value}</p>

            {/* آیکون سکه متحرک */}
            <svg
                className="mx-auto mt-2"
                width="50"
                height="50"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="32" cy="32" r="20" fill="#facc15" stroke="#eab308" strokeWidth="3" />
                <text
                    x="32"
                    y="38"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="bold"
                    fill="#92400e"
                >
                    $
                </text>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="-10 32 32;10 32 32;-10 32 32"
                    dur="1.5s"
                    repeatCount="indefinite"
                />
            </svg>
        </div>
    );
}
