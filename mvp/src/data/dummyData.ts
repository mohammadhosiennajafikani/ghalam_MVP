import book1 from "../assets/books/book(1).png";
import book2 from "../assets/books/book(2).png";
import book3 from "../assets/books/book(3).png";
import book4 from "../assets/books/book(4).png";
import book5 from "../assets/books/book(5).png";
import book6 from "../assets/books/book(6).png";
import book7 from "../assets/books/book(7).png";
import book8 from "../assets/books/book(8).png";
import book9 from "../assets/books/book(9).png";

import banner1 from '../assets/banner.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner1.png';

export const cardData = [
  {
    id: "1",
    image: book1,
    title: "نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۱ کلیک شد"),
  },
  {
    id: "2",
    image: book9,
    title: "نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۲ کلیک شد"),
  },
  {
    id: "3",
    image: book2,
    title:"نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "4",
    image: book3,
    title: "نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "5",
    image: book4,
    title: "نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "6",
    image: book3,
    title: "نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "7",
    image: book5,
    title: "نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  }, {
    id: "8",
    image: book6,
    title:"نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "9",
    image: book7,
    title: "نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "10",
    image: book9,
    title:"نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "11",
    image: book8,
    title:"نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "12",
    image: book4,
    title:"نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
  {
    id: "13",
    image: book4,
    title: "نام نویسنده",
    description: "نام کتاب",
    onClick: () => console.log("کارت ۳ کلیک شد"),
  },
];

export const banners = [
  { id: "1", image: banner1, },
  { id: "2", image: banner2, },
  { id: "3", image: banner3, },
  { id: "4", image: banner4, },
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
      cover: book3,
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
      cover: book1,
      title: "کتاب دوم",
      author: "نویسنده دوم",
    },
    likes: 8,
    comments: 2,
    time: "۳ روز پیش",
  }
];

export const userData = {
  name: "محمد رضایی",
  username: "mohammad_dev",
  bio: "عاشق کدنویسی و کتاب 📚",
  followers: 1200,
  following: 340,
  profileImage: "https://i.pravatar.cc/100?img=1",
};

export const books = [
  { id: 1, image: book1, title: "کتاب اول" },
  { id: 2, image: book3, title: "کتاب دوم" },
  { id: 3, image: book4, title: "کتاب سوم" },
];