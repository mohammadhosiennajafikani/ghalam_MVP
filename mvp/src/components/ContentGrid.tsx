import {  books, samplePosts } from "../data/dummyData";
import { Post } from "../components/Post";
export function ContentGrid({ active }: { active: "posts" | "books" }) {
  if (active === "posts") {
    return (
    <div className="flex-1">
      
      {samplePosts.map((p, i) => (
      <Post key={i} {...p} />
    ))}
      </div>
    );
  }

  if (active === "books") {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4">
        {books.map((book) => (
          <div key={book.id} className="relative group">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    );
  }

  return null;
}