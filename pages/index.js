import Head from "next/head";
import PostList from "../components/PostList";
import homeStyles from "../styles/Home.module.css";
import layoutStyles from "../styles/Layout.module.css";
import { server } from "../config";
export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Sofrito</title>
        <meta
          name="keywords"
          content="food recipes, tips, and recommendations for many cooking styles and levels"
        />
      </Head>
      <h1>
        <span className={homeStyles.title}>Sofrito</span>
      </h1>
      <p className={homeStyles.description}>Cooking info, tips, and tricks!</p>
      <h2>Previous Posts:</h2>
      <PostList posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/getPosts`);
  const posts = await res.json();
  return {
    props: { posts }
  };
};
