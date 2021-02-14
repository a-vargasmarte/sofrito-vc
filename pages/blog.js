import blogStyles from "../styles/Blog.module.css";
import Image from "next/image";
const blog = () => {
  return (
    <div>
      <section className={blogStyles.sectionTitle}>
        <h2 className={blogStyles.blogTitle}>3 Good-to-haves in the pantry</h2>
        <span className={blogStyles.published}>
          Published on Feb. 14, 2021 by Alberto Vargas
        </span>
        <br />
      </section>
      <figure className={blogStyles.figure}>
        <Image
          className={blogStyles.image}
          src="/wide-pantry-items.jpeg"
          width={300}
          height={225}
          layout="fixed"
          alt={`A display of a jar of dijon mustard, a jar of hot and sweet picked jalapeño peppers, and a can of chipotle peppers in adobo sauce`}
        />
        <figcaption className={blogStyles.figcaption}>
          Dijon mustard, hot and sweet picked jalapeño peppers, and chipotle
          peppers in adobo sauce{" "}
        </figcaption>
      </figure>
      <p className={blogStyles.p}>
        During the pandemic, I’ve come to further appreciate some special pantry
        items. These give me a foundational flavor spectrum and help leverage my
        meals through a busy work week. Nowadays, I find myself meal-prepping a
        ton in order to save money, time, and stress, so I can work ahead (and
        take half-day-Fridays), dedicate more deliberate time to my hobbies, and
        eat (and sleep) more.
      </p>
      <p className={blogStyles.p}>
        These 3 items help me achieve all of these:
      </p>
      <div>
        <section>
          <h3>Chipotle Peppers in Adobo Sauce</h3>
          <figure className={blogStyles.figure}>
            <Image
              className={blogStyles.image}
              src="/single-chipotle.jpeg"
              width={300}
              height={225}
              layout="fixed"
              alt={`A can of chipotle peppers in adobo sauce`}
            />
            <figcaption className={blogStyles.figcaption}>
              A can of chipotle peppers in adobo sauce{" "}
            </figcaption>
          </figure>
          <p className={blogStyles.p}>
            The intense smoky, raw spiciness of the peppers and their vinegary
            mix do it for me. Once diced, I sauté these with a triad of yellow
            onions, celery, and garlic in preparation of hearty dishes. The
            aroma of oregano and cumin can elevate all the above items further.
          </p>
        </section>

        <section>
          <h3>Spicy/Sweet Pickled Jalapeños (notice a pattern here?)</h3>
          <figure className={blogStyles.figure}>
            <Image
              className={blogStyles.image}
              src="/single-jalapenos.jpeg"
              width={300}
              height={225}
              layout="fixed"
              alt={`A jar of hot and sweet picked jalapeño peppers`}
            />
            <figcaption className={blogStyles.figcaption}>
              A jar of hot and sweet picked jalapeño peppers
            </figcaption>
          </figure>
          <p className={blogStyles.p}>
            I must admit, I am weak for peppers of any color, size, or spice
            level. My use for these specifically is double-purposed, for the
            pepper and the vinegar itself. Jalapeños can add a crunch or at
            least a sweet/spicy ratio of flavor when pickled. One can use it in
            salad, as is, or to accompany the chipotle peppers on their
            endeavors. When the opportunity presents itself, I really enjoy
            deglazing with its pickling vinegar to crumble up the bits of
            heavenly goodness left by the browning of meats.
          </p>
        </section>
        <section>
          <h3>Dijon Mustard</h3>
          <figure className={blogStyles.figure}>
            <Image
              className={blogStyles.image}
              src="/single-dijon.jpeg"
              width={300}
              height={225}
              layout="fixed"
              alt={`A jar dijon mustard`}
            />
            <figcaption className={blogStyles.figcaption}>
              A jar dijon mustard
            </figcaption>
          </figure>
          <p className={blogStyles.p}>
            A little goes a long way with dijon mustard. Less goes even further
            when we talk about spicy dijon mustard. I like combining it with
            olive oil, honey, and vinegar (balsamic or otherwise) to eat with
            salads. It can also serve to dress salmon as it goes in the oven, or
            tuna as it comes out the can. It can give a nice tang when making
            homemade bbq sauce, and provide depth and acidity when stir-frying
            vegetables.
          </p>
        </section>
        <section>
          <p className={blogStyles.p}>
            There can be, of course, many more items that could go on a longer
            list. These 3 give me a nice variety of uses to choose from when
            planning my dishes for the week. I hope you found this post useful
            and stay tuned for the next one in two weeks!
          </p>
        </section>
      </div>
    </div>
  );
};

export default blog;
