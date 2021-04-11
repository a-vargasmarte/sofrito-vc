import { useRouter } from "next/router";
import blogStyles from "../../../styles/Blog.module.css";
import Image from "next/image";

const post = ({ data }) => {
  for (let section of data.sections) {
    if (!section.fields.para_body) {
      section.fields.para_body = [];
      for (let paragraph of data.paragraphs) {
        if (
          paragraph.fields.Section &&
          section.id == paragraph.fields.Section[0]
        )
          section.fields.para_body.push(paragraph.fields.body);
      }
    }
  }
  return (
    <>
      <div className={blogStyles.blogMain}>
        <section className={blogStyles.sectionTitle}>
          <h2 className={blogStyles.blogTitle}>{data.post.fields.title}</h2>
          <span
            className={blogStyles.published}
          >{`Published on ${data.post.fields.date} by Alberto Vargas`}</span>
        </section>
        <p className={blogStyles.p}>{data.post.fields.intro}</p>

        {data.sections.map(section => (
          <div>
            <section>
              <h3>{section.fields.heading}</h3>
              {section.fields.source && (
                <>
                  <figure className={blogStyles.figure}>
                    <Image
                      className={blogStyles.image}
                      width={300}
                      height={225}
                      layout="fixed"
                      alt={section.fields.alt}
                      src={`${section.fields.source}`}
                    />
                    <figcaption className={blogStyles.figcaption}>
                      {section.fields.caption}
                    </figcaption>
                  </figure>
                  {section.fields.para_body.map(para => (
                    <p className={blogStyles.p}>{para}</p>
                  ))}
                </>
              )}
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const res = Promise.all([
    fetch(
      `https://v1.nocodeapi.com/avargasmarte/airtable/poAUAbVtgKToonbT?tableName=Posts&id=${id}`
    ),
    fetch(
      `https://v1.nocodeapi.com/avargasmarte/airtable/poAUAbVtgKToonbT?tableName=Sections`
    ),
    fetch(
      `https://v1.nocodeapi.com/avargasmarte/airtable/poAUAbVtgKToonbT?tableName=Paragraphs`
    )
  ])
    .then(responses => {
      return Promise.all(responses.map(res => res.json()));
    })
    .catch(error => console.log(error));
  const post = await res;
  const sections = post[1].records.filter(
    section => section.fields.Post[0] == id
  );
  const paragraphs = post[2].records.filter(
    paragraph => paragraph.fields.postid[0] == id
  );

  return {
    props: {
      data: { post: post[0], sections: sections, paragraphs: paragraphs }
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://v1.nocodeapi.com/avargasmarte/airtable/poAUAbVtgKToonbT?tableName=Posts`
  );

  const posts = await res.json();

  const post_ids = posts.records.map(post => post.id);
  const paths = post_ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  };
};

export default post;
