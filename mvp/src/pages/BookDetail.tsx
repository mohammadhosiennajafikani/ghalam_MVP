import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, User as UserIcon, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bookim from '../assets/books/book(1).png'


export default function BookDetail() {
  type BookType = {
    id: string;
    title: string;
    author_id: string;
    author_name: string;
    genre: string;
    description: string;
    pages: number;
    sample_text: string;
    price: number;
    cover_image: string;
  };

  const [book, setBook] = useState<BookType | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const bookId = urlParams.get("id");
  const navigate = useNavigate();


  useEffect(() => {
    const loadBook = async () => {
      setIsLoading(true);
      // شبیه‌سازی بارگذاری کتاب
      const fakeBook = {
        id: "1",
        title: "کتاب تستی",
        author_id: "a1",
        author_name: "نویسنده تستی",
        genre: "fantasy",
        description: "این یک توضیح تستی برای کتاب است.",
        pages: 250,
        sample_text: "در دل شب، صدایی آمد...",
        price: 29.99,
        cover_image: bookim,
      };

      setBook(fakeBook);

      setIsLoading(false);
    };

    loadBook();
  }, [bookId]);

  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">در حال بارگذاری...</div>;
  }

  if (!book) {
    return <div className="p-8 text-center text-red-500">کتاب پیدا نشد</div>;
  }


  return (

    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>برگشت</span>
      </button>


      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden shadow-md aspect-[3/4]">
          <img src={book.cover_image} alt={book.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">{book.title}</h1>

          <Link to={`/acount`} className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-500 mb-2">
            <UserIcon className="w-5 h-5" />
            <span>{book.author_name}</span>
          </Link>

          {book.genre && (
            <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm mb-4">
              {book.genre.replace(/_/g, " ").toUpperCase()}
            </span>
          )}

          {book.description && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-700 mb-1">درباره کتاب</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{book.description}</p>
            </div>
          )}

          {book.pages && (
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-blue-700">{book.pages}</span> صفحه
            </p>
          )}

          {book.sample_text && (
            <div className="mb-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-700 mb-2">نمونه متن</h3>
              <p className="text-sm text-gray-700 italic">"{book.sample_text}"</p>
            </div>
          )}

          <div className="mt-auto pt-4">
            {book.price && (
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-green-600">${book.price}</span>
              </div>
            )}

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              خرید کتاب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}