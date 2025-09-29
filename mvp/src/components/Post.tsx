import { useState } from "react";

type PostType = "plain" | "bookReply" | "excerptReply" | "quote";

interface BookInfo {
  cover: string;
  title: string;
  author: string;
}

interface PostProps {
  avatar: string;
  name: string;
  message?: string;
  type: PostType;
  book?: BookInfo;
  excerpt?: string;
  time?: string;
  quoteText?: string;
  likes?: number;
  comments?: number;
}

export function Post({
  avatar,
  name,
  message,
  type,
  book,
  excerpt,
  time,
  quoteText,
  likes = 0,
  comments = 0,
}: PostProps) {
  return (
    <div className="p-4 rounded-xl bg-white border border-gray-200 my-4 max-w-[600px] mx-auto">
      <PostHeader avatar={avatar} name={name} time={time} />

      {type === "bookReply" && book && (
        <>
          <BookRow book={book} />
          {message && <p className="text-[14px] text-gray-800 mb-2">{message}</p>}
        </>
      )}

      {type === "excerptReply" && book && (
        <>
          <BookRow book={book} />
          {excerpt && (
            <p className="text-[13px] text-gray-700 bg-gray-100 p-2 rounded mb-2 line-clamp-3">
              {excerpt}
            </p>
          )}
          {message && <p className="text-[14px] text-gray-800 mb-2">{message}</p>}
        </>
      )}

      {type === "plain" && message && (
        <p className="text-[14px] text-gray-800 mb-2">{message}</p>
      )}

      {type === "quote" && quoteText && (
        <>
          {message && <p className="text-[14px] text-gray-800 mb-2">{message}</p>}
          <QuoteBox text={quoteText} />
        </>
      )}

      {/* بخش تعاملات */}
      <div className="flex gap-6 mt-3 text-sm text-gray-600">
        <span>❤️ {likes}</span>
        <span>💬 {comments} نظر</span>
      </div>
    </div>
  );
}

/* ---------- Subcomponents ---------- */

function PostHeader({
  avatar,
  name,
  time,
}: {
  avatar: string;
  name: string;
  time?: string;
}) {
  return (
    <div className="flex items-center mb-3">
      <img
        src={avatar}
        alt={name}
        className="w-9 h-9 rounded-full bg-gray-200"
      />
      <div className="ml-2">
        <p className="text-[14px] font-semibold text-gray-900">{name}</p>
        {time && <p className="text-[11px] text-gray-500">{time}</p>}
      </div>
    </div>
  );
}

function BookRow({ book }: { book: BookInfo }) {
  return (
    <div className="flex items-center bg-gray-100 p-2 rounded-lg mb-2 gap-3">
      <img
        src={book.cover}
        alt={book.title}
        className="w-12 h-16 rounded-md bg-gray-300"
      />
      <div className="flex-1">
        <p className="text-[13px] font-semibold text-gray-800 truncate">
          {book.title}
        </p>
        <p className="text-[12px] text-gray-600 truncate">{book.author}</p>
      </div>
    </div>
  );
}

function QuoteBox({ text }: { text: string }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="bg-gray-100 border-l-4 border-gray-500 p-3 rounded">
      <p className={`text-[13px] text-gray-800 leading-5 ${collapsed ? "line-clamp-3" : ""}`}>
        {text}
      </p>
      <button
    
        onClick={() => setCollapsed((c) => !c)}
        style={{backgroundColor:'#fff'}}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-fuchsia-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        
      >
        {collapsed ? "نمایش بیشتر ▾" : "نمایش کمتر ▴"}
      </button>
    </div>
  );
}