// components/BannerHolder.tsx
import { useEffect, useState } from "react";

interface BannerHolderProps {
  data: { id: string; image: string }[];
  interval?: number;
  onPressBanner?: (item: { id: string; image: string }, index: number) => void;
}

export function BannerHolder({
  data,
  interval = 3000,
  onPressBanner,
}: BannerHolderProps) {
  const [index, setIndex] = useState(0);

  // اتوپلی + لوپ
  useEffect(() => {
    if (!data?.length) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, interval);
    return () => clearInterval(t);
  }, [data, interval]);

  const handleNext = () => setIndex((prev) => (prev + 1) % data.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + data.length) % data.length);

  const current = data[index];

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* بنر */}
      <button
        onClick={() => onPressBanner?.(current, index)}
        className="w-full overflow-hidden rounded-xl focus:outline-none"
      >
        <img
          src={current.image}
          alt={`banner-${index}`}
          className="w-full h-auto rounded-xl object-cover"
        />
      </button>

      {/* دکمه قبلی */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:scale-110 transition-transform"
      >
        ‹
      </button>

      {/* دکمه بعدی */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:scale-110 transition-transform"
      >
        ›
      </button>

      {/* دات‌ها */}
      <div className="absolute bottom-3 flex space-x-2">
        {data.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}