type TabsProps = {
  active: "posts" | "books";
  onChange: (tab: "posts" | "books") => void;
};

export function Tabs({ active, onChange }: TabsProps) {
  return (
    <div className="flex border-t border-gray-200">
      <button
        onClick={() => onChange("posts")}
        className={`flex-1 py-3 text-center font-semibold  ${
          active === "posts" ? "border-b-2 border-black" : "text-gray-500"
        }`}
      >
        پست‌ها
      </button>
      <button
        onClick={() => onChange("books")}
        className={`flex-1 py-3 text-center font-semibold ${
          active === "books" ? "border-b-2 border-black" : "text-gray-500"
        }`}
      >
        کتاب‌ها
      </button>
    </div>
  );
}