import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
export default function Home({ articles }) {
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
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles
    }
  };
};
