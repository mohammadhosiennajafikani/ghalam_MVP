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
    <div className=" flex items-center justify-center">
      <div className="relative w-full max-w-[900px] flex flex-col items-center min-w-[400px]">
        {/* بنر */}
        <button
          onClick={() => onPressBanner?.(current, index)}
          className="w-full overflow-hidden rounded-xl focus:outline-none 
                     active:scale-95 transition-transform duration-200"
          style={{ border: "none", outline: "none", background: "transparent" }}
        >
          <img
            src={current.image}
            alt={`banner-${index}`}
            className="w-full h-auto rounded-xl object-cover"
          />
        </button>




      <div className="absolute flex flex-row justify-around bottom-3  items-center ">
        {/* دکمه قبلی */}
        <div
          onClick={handlePrev}
          className="  flex space-x-2 mr-2
                     bg-black/50 text-white rounded-full 
                     hover:scale-130 active:scale-90 transition-transform w-6 h-5 "
        >
        </div>
        {/* دات‌ها */}
        <div className=" bottom-3 flex space-x-2">
          {data.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-gray-800 w-5" : "bg-gray-400 "
                }`}
                />
          ))}
        </div>
        {/* دکمه بعدی */}
        <div
          onClick={handleNext}
          className="  flex space-x-2 ml-2
          bg-black/50 text-white rounded-full
          hover:scale-130 active:scale-90 transition-transform  w-6 h-5 "
          >
        </div>
      </div>

          </div>
    </div>
  );
}