import { userData } from "../data/dummyData";

export function ProfileHeader() {
    return (
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-8 p-6">
            <img
                src={userData.profileImage}
                alt={userData.name}
                className="w-28 h-28 rounded-full border-2 border-gray-300"
            />
            <div className="mt-4 sm:mt-0 text-center sm:text-left">
                <h2 className="text-xl font-bold">{userData.name}</h2>
                <p className="text-gray-500">@{userData.username}</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="180"
                    height="32"
                    viewBox="0 0 180 32"
                    role="img"
                    aria-label="سطح: نویسنده حرفه ای"
                >
                    <rect x="0" y="0" width="180" height="32" rx="16" fill="#F1F5F9" />
                    <g transform="translate(8,8)">
                        <circle cx="8" cy="8" r="8" fill="#1D4ED8" />
                        <path d="M5.5 8.5 L7.6 10.6 L12.5 5.7" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <text
                        x="36"
                        y="20"
                        fill="#0F172A"
                        font-size="13"
                        font-family="Segoe UI, Vazirmatn, Arial, sans-serif"
                    >
                        سطح: نویسنده حرفه ای
                    </text>
                </svg>
                <p className="mt-2 text-gray-700">{userData.bio}</p>
                <div className="flex justify-center sm:justify-start gap-6 mt-3">
                    <span className="font-semibold text-black">{userData.followers} دنبال‌کننده</span>
                    <span className="font-semibold text-black">{userData.following} دنبال‌شونده</span>
                </div>
            </div>
        </div>
    );
}