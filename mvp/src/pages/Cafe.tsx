import { Post } from "../components/Post";
import { samplePosts } from "../data/dummyData";

export default function Cafe() {
  return <div className="flex-1">
  {samplePosts.map((p, i) => (
  <Post key={i} {...p} />
))}
  </div>
}