import postStyles from "../styles/Post.module.css";
import Post from "../components/Post";

export default function PostList({ posts }) {
  return (
    <>
      <div>
        {posts.map((post, i) => (
          <Post key={`post-${i}`} post={post} />
        ))}
      </div>
    </>
  );
}
