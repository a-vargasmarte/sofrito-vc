import postStyles from "../styles/Post.module.css";
import Post from "../components/Post";

export default function PostList({ posts }) {
  return (
    <>
      <div>
        {posts.records.map((post, i) => (
          <Post post={post} />
        ))}
      </div>
    </>
  );
}
