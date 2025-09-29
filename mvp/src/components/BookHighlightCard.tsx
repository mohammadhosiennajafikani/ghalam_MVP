type BookHighlightBoxProps = {
  title: string;       // مثلا "پرطرفدارترین کتاب شما"
  image: string;       // لینک عکس جلد کتاب
  description?: string; // توضیح کوتاه (اختیاری)
};

export function BookHighlightBox({ title, image, description }: BookHighlightBoxProps) {
  return (
    <div className="relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl bg-amber-50">
      {/* افکت درخشان پشت کارت */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-yellow-300 to-indigo-300 opacity-20 blur-2xl animate-glow"></div>

      {/* محتوای اصلی */}
      <div className="relative rounded-2xl p-5 flex flex-col items-center">
        <img
          src={image}
          alt={title}
          className="w-32 h-44 object-cover rounded-lg shadow-md mb-4 transition-transform duration-500 group-hover:scale-105"
        />
        <h2 className="text-lg font-bold text-gray-800 mb-1">{title}</h2>
        {description && (
          <p className="text-sm text-gray-600 text-center">{description}</p>
        )}
      </div>

      {/* استایل انیمیشن */}
      <style>{`
        @keyframes glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}