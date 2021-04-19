import { useRouter } from "next/router";
import getPostById from "../../../lib/getPostById";
import blogStyles from "../../../styles/Blog.module.css";
import Image from "next/image";
import { server } from "../../../config";

const post = ({ data }) => {
  return (
    <>
      <div className={blogStyles.blogMain}>
        <section className={blogStyles.sectionTitle}>
          <h2 className={blogStyles.blogTitle}>{data.title}</h2>
          <span
            className={blogStyles.published}
          >{`Published on ${data.date} by Alberto Vargas`}</span>
        </section>
        <p className={blogStyles.p}>{data.intro}</p>

        {data.sections.map(section => (
          <div>
            <section>
              <h3>{section.heading}</h3>
              {section.source && (
                <>
                  <figure className={blogStyles.figure}>
                    <Image
                      className={blogStyles.image}
                      width={300}
                      height={225}
                      layout="fixed"
                      alt={section.alt}
                      src={`${section.source}`}
                    />
                    <figcaption className={blogStyles.figcaption}>
                      {section.caption}
                    </figcaption>
                  </figure>
                  {section.paragraphs &&
                    section.paragraphs.map((para, i) => {
                      return (
                        <p key={`para-${i}`} className={blogStyles.p}>
                          {para.body}
                        </p>
                      );
                    })}
                </>
              )}
            </section>
          </div>
        ))}
        <p className={blogStyles.p}>{data.conclusion}</p>
      </div>
    </>
  );
};

export async function getStaticProps({ params }) {
  const id = params.id;

  const res = getPostById(id);
  const post = await res;

  return {
    props: {
      data: post
    }
  };
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/getPosts`);
  const post = await res.json();
  const post_ids = post.map(post => post.rec_id);
  const paths = post_ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  };
};

export default post;
