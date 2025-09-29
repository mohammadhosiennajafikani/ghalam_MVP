import { Post } from "../components/Post";
import { samplePosts } from "../data/dummyData";

export default function Cafe() {
  return <div className="fles-1">
  <h2 className="flex-1 text-2xl font-bold">cafe</h2>;
  {samplePosts.map((p, i) => (
  <Post key={i} {...p} />
))}
  </div>
}