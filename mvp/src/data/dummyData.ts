// imports بالای فایل
import book1 from "../assets/books/book1.png";
import book2 from "../assets/books/book2.png";
import book3 from "../assets/books/book3.png";
import book4 from "../assets/books/book4.png";
import banner1 from '../assets/banner.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

export const cardData = [
  {
    id: "1",
    image: book1,
    title: "کتاب‌های صوتی",
    description: "مجموعه‌ای از بهترین کتاب‌ها برای گوش دادن",
    onClick: () => console.log("کارت ۱ کلیک شد"),
  },
  {
    id: "2",
    image: book2,
    title: "کتاب فلان",
    description: "دینی مذهبی",
    onClick: () => console.log("کارت ۲ کلیک شد"),
  },
  {
    id: "3",
    image: book3,
    title: "کتاب فلان",
    description: "کتاب‌هایی برای رشد ذهنی و شخصی",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "4",
    image: book3,
    title: "کتاب فلان",
    description: "کتاب‌هایی برای رشد ذهنی و شخصی",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "5",
    image: book4,
    title: "کتاب فلان",
    description: "کتاب‌هایی برای رشد ذهنی و شخصی",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "6",
    image: book3,
    title: "کتاب فلان",
    description: "کتاب‌هایی برای رشد ذهنی و شخصی",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "7",
    image: book4,
    title: "کتاب فلان",
    description: "کتاب‌هایی برای رشد ذهنی و شخصی",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  }, {
    id: "8",
    image: book4,
    title: "کتاب فلان",
    description: "کتاب‌هایی برای رشد ذهنی و شخصی",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "9",
    image: book4,
    title: "کتاب فلان",
    description: "کتاب‌هایی برای رشد ذهنی و شخصی",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "10",
    image: book3,
    title: "کتاب فلان",
    description: "کتاب‌هایی برای رشد ذهنی و شخصی",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "11",
    image: book4,
    title: "کتاب فلان",
    description: "کتاب‌هایی برای رشد ذهنی و شخصی",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "12",
    image: book4,
    title: "کتاب فلان",
    description: "کتاب‌هایی برای رشد ذهنی و شخصی",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "13",
    image: book4,
    title: "کتاب فلان",
    description: "کتاب‌هایی برای رشد ذهنی و شخصی",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
];

export const banners = [
  { id: "1", image: banner1 ,},
  { id: "2", image: banner2, },
  { id: "3", image: banner3 ,},
    { id: "4", image: banner3 ,},
      { id: "5", image: banner3 ,},
];

export const samplePosts = [
  {
    avatar: "https://i.pravatar.cc/100?img=1",
    name: "محمد",
    type: "plain" as const,
    message: "این یک پست ساده است",
    likes: 12,
    comments: 3,
    time: "۲ ساعت پیش",
  },
  {
    avatar: "https://i.pravatar.cc/100?img=2",
    name: "علی",
    type: "bookReply" as const,
    message: "این کتاب عالی بود!",
    book: {
      cover: "https://picsum.photos/60/90",
      title: "کتاب تستی",
      author: "نویسنده تستی",
    },
    likes: 5,
    comments: 1,
    time: "۱ روز پیش",
  },
  {
    avatar: "https://i.pravatar.cc/100?img=3",
    name: "زهرا",
    type: "quote" as const,
    message: "این نقل‌قول خیلی الهام‌بخش بود:",
    quoteText:
      "زندگی مثل دوچرخه‌سواری است. برای حفظ تعادل باید حرکت کنی.  زندگی مثل دوچرخه‌سواری است. برای حفظ تعادل باید حرکت کنی. زندگی مثل دوچرخه‌سواری است. برای حفظ تعادل باید حرکت کنی. زندگی مثل دوچرخه‌سواری است. برای حفظ تعادل باید حرکت کنی.  زندگی مثل دوچرخه‌سواری است. برای حفظ تعادل باید حرکت کنی. زندگی مثل دوچرخه‌سواری است. برای حفظ تعادل باید حرکت کنی. زندگی مثل دوچرخه‌سواری است. برای حفظ تعادل باید حرکت کنی. این جمله از انیشتین همیشه منو به جلو هل میده.",
    likes: 20,
    comments: 7,
    time: "۳ روز پیش",
  },
  {
  avatar: "https://i.pravatar.cc/100?img=3",
  name: "زهرا",
  type: "excerptReply" as const,
  excerpt: "این بخشی از متن کتاب است که خیلی جالب بو خیلی جالب بود...",
  message: "این قسمت خیلی به دلم نشست",
  book: {
    cover: "https://picsum.photos/60/90",
    title: "کتاب دوم",
    author: "نویسنده دوم",
  },
  likes: 8,
  comments: 2,
  time: "۳ روز پیش",
}
];