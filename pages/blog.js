import blogStyles from "../styles/Blog.module.css";
import Image from "next/image";
const blog = articles => {
  console.log(articles);
  return (
    // <div className={blogStyles.blogMain}>
    //   <section className={blogStyles.sectionTitle}>
    //     <h2 className={blogStyles.blogTitle}>3 Good-to-haves in the pantry</h2>
    //     <span className={blogStyles.published}>
    //       Published on Feb. 14, 2021 by Alberto Vargas
    //     </span>
    //     <br />
    //   </section>
    //   <div className={blogStyles.wideFigure}>
    //     <figure className={blogStyles.figure}>
    //       <Image
    //         className={blogStyles.image}
    //         src="/wide-pantry-items.jpeg"
    //         width={300}
    //         height={225}
    //         layout="fixed"
    //         alt={`A display of a jar of dijon mustard, a jar of hot and sweet picked jalapeño peppers, and a can of chipotle peppers in adobo sauce`}
    //       />
    //       <figcaption className={blogStyles.figcaption}>
    //         Dijon mustard, hot and sweet picked jalapeño peppers, and chipotle
    //         peppers in adobo sauce{" "}
    //       </figcaption>
    //     </figure>
    //   </div>
    //   <p className={blogStyles.p}>
    //     During the pandemic, I’ve come to further appreciate some special pantry
    //     items. These give me a foundational flavor spectrum and help leverage my
    //     meals through a busy work week. Nowadays, I find myself meal-prepping a
    //     ton in order to save money, time, and stress, so I can work ahead (and
    //     take half-day-Fridays), dedicate more deliberate time to my hobbies, and
    //     eat (and sleep) more.
    //   </p>
    //   <p className={blogStyles.p}>
    //     These 3 items help me achieve all of these:
    //   </p>
    //   <div>
    //     <section>
    //       <h3>Chipotle Peppers in Adobo Sauce</h3>
    //       <figure className={blogStyles.figure}>
    //         <Image
    //           className={blogStyles.image}
    //           src="/single-chipotle.jpeg"
    //           width={300}
    //           height={225}
    //           layout="fixed"
    //           alt={`A can of chipotle peppers in adobo sauce`}
    //         />
    //         <figcaption className={blogStyles.figcaption}>
    //           A can of chipotle peppers in adobo sauce{" "}
    //         </figcaption>
    //       </figure>
    //       <p className={blogStyles.p}>
    //         The intense smoky, raw spiciness of the peppers and their vinegary
    //         mix do it for me. Once diced, I sauté these with a triad of yellow
    //         onions, celery, and garlic in preparation of hearty dishes. The
    //         aroma of oregano and cumin can elevate all the above items further.
    //       </p>
    //     </section>

    //     <section>
    //       <h3>Spicy/Sweet Pickled Jalapeños (notice a pattern here?)</h3>
    //       <figure className={blogStyles.figure}>
    //         <Image
    //           className={blogStyles.image}
    //           src="/single-jalapenos.jpeg"
    //           width={300}
    //           height={225}
    //           layout="fixed"
    //           alt={`A jar of hot and sweet picked jalapeño peppers`}
    //         />
    //         <figcaption className={blogStyles.figcaption}>
    //           A jar of hot and sweet picked jalapeño peppers
    //         </figcaption>
    //       </figure>
    //       <p className={blogStyles.p}>
    //         I must admit, I am weak for peppers of any color, size, or spice
    //         level. My use for these specifically is double-purposed, for the
    //         pepper and the vinegar itself. Jalapeños can add a crunch or at
    //         least a sweet/spicy ratio of flavor when pickled. One can use it in
    //         salad, as is, or to accompany the chipotle peppers on their
    //         endeavors. When the opportunity presents itself, I really enjoy
    //         deglazing with its pickling vinegar to crumble up the bits of
    //         heavenly goodness left by the browning of meats.
    //       </p>
    //     </section>
    //     <section>
    //       <h3>Dijon Mustard</h3>
    //       <figure className={blogStyles.figure}>
    //         <Image
    //           className={blogStyles.image}
    //           src="/single-dijon.jpeg"
    //           width={300}
    //           height={225}
    //           layout="fixed"
    //           alt={`A jar dijon mustard`}
    //         />
    //         <figcaption className={blogStyles.figcaption}>
    //           A jar dijon mustard
    //         </figcaption>
    //       </figure>
    //       <p className={blogStyles.p}>
    //         A little goes a long way with dijon mustard. Less goes even further
    //         when we talk about spicy dijon mustard. I like combining it with
    //         olive oil, honey, and vinegar (balsamic or otherwise) to eat with
    //         salads. It can also serve to dress salmon as it goes in the oven, or
    //         tuna as it comes out the can. It can give a nice tang when making
    //         homemade bbq sauce, and provide depth and acidity when stir-frying
    //         vegetables.
    //       </p>
    //     </section>
    //     <section>
    //       <p className={blogStyles.p}>
    //         There can be, of course, many more items that could go on a longer
    //         list. These 3 give me a nice variety of uses to choose from when
    //         planning my dishes for the week. I hope you found this post useful
    //         and stay tuned for the next one in two weeks!
    //       </p>
    //     </section>
    //   </div>
    // </div>
    <div className={blogStyles.blogMain}>
      <section className={blogStyles.sectionTitle}>
        <h2 className={blogStyles.blogTitle}>
          Spices and flavors to make your pantry more wholesome
        </h2>
        <span className={blogStyles.published}>
          Published on Feb. 28, 2021 by Alberto Vargas
        </span>
        <br />
      </section>
      {/* <div className={blogStyles.wideFigure}>
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
      </div> */}
      <p className={blogStyles.p}>
        Over time, home cooks and amateur chefs alike can develop and grow
        accustomed to a set of flavors and spices. Personally, I came across a
        wall made out of cumin, oregano, rosemary, and some usual aromatic
        veggies and fresh herbs. With some experimentation and research I
        realized that small changes can go a long way. Allow me to share some
        simple ways to change your overall spice game.
      </p>
      {/* <p className={blogStyles.p}>
        These 3 items help me achieve all of these:
      </p> */}
      <div>
        <section>
          <h3>Cumin Seeds</h3>
          <figure className={blogStyles.figure}>
            <Image
              className={blogStyles.image}
              src="/cumin-seeds.jpg"
              width={300}
              height={225}
              layout="fixed"
              alt={`A jar with a spoon sunk into cumin seeds`}
            />
            <figcaption className={blogStyles.figcaption}>
              A jar full of cumin seeds.{" "}
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@tamara_photography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Tamara Gak
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/cumin-seeds?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>{" "}
            </figcaption>
          </figure>
          <p className={blogStyles.p}>
            Ground cumin has always been a go-to for me as a base flavor for
            one-pot meals, especially if these are rich in tomatoes. However,
            cumin seeds have left me in awe due to their simple, but profound
            nutty flavor profile. Though it may seem that cumin’s flavor is the
            same, whether ground or in seed form, please trust me when I tell
            you that they’re vastly different. I would say that while ground
            cumin contributes to an overall flavor profile, cumin seeds stand
            tall and can be distinguished from all other flavors in a meal.
          </p>
          <p className={blogStyles.p}>
            One of my favorite things to do with cumin seeds is to simply toss
            it in over melted butter (or ghee if you have it) in a pan at
            medium-low heat, tossing it every minute or so for 5-10 minutes. I
            then toss the buttery-nutty mixture to my rice cooker over jasmine
            rice and water (or broth!), before letting the cooker do its magic.
            The addition of cumin seeds to rice will undoubtedly change your
            rice game!
          </p>
        </section>

        <section>
          <h3>Mustard Seeds</h3>
          <figure className={blogStyles.figure}>
            <Image
              className={blogStyles.image}
              src="/mustard-seeds.jpg"
              width={300}
              height={225}
              layout="fixed"
              alt={`A wooden bowl filled with mustard seeds and surrounded by an assortment of spices, including star anise seeds, cloves, and caraway seeds`}
            />
            <figcaption className={blogStyles.figcaption}>
              Mustard seeds with other spices. Image by{" "}
              <a href="https://pixabay.com/users/enotovyj-1196066/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3373818">
                Enotovyj
              </a>{" "}
              from{" "}
              <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3373818">
                Pixabay
              </a>
              Pexels
            </figcaption>
          </figure>
          <p className={blogStyles.p}>
            While we’re on the topic of seeds, let’s continue with mustard
            seeds. While mustard seeds are included in the mustard jars we all
            love, these condiments also contain other ingredients, such as
            water, distilled white vinegar, white wine, sugar, and lactic acid.
            Thus, it may come at no surprise that the actual mustard seeds won’t
            taste exactly like what comes out of your mustard jar (or bottle).
            In addition, one can’t, or at least shouldn’t, just pour mustard
            seeds onto a dish and call it a good day since it’d be a missed
            opportunity of flavor and a waste of money. Instead, one has to
            “unlock” the flavor of mustard seeds by cooking them alone, in a
            medium to medium-high heat pan with butter or cooking oil. I keep a
            grease splatter screen handy when I do this given that when heated,
            mustard seeds will “pop” as they release their natural oils and
            flavor your cooking oil. Once the mustard seeds stop popping, I know
            they have released all of their yummy oils and then I follow up with
            the rest of whatever recipe I’m making. Lately, at this point I add
            some curry powder, onions, ginger, and garlic, cook for a few
            minutes while the flavors marry, and follow-up with a bunch of green
            cabbage. Once the cabbage has wilted and cooked through, it becomes
            a side dish in all of my meals for the week. When you try it, notice
            how there’s a distinct spicy, but not overwhelming, flavor on the
            cabbage coming via the mustard seeds.
          </p>
        </section>
        <section>
          <h3>Basil and Garlic</h3>
          <figure className={blogStyles.figure}>
            <Image
              className={blogStyles.image}
              src="/basil-garlic.jpg"
              width={300}
              height={225}
              layout="fixed"
              alt={`A cutting board with 5 basil leaves resting next to two heads of garlic. 3 basil leaves seem falling off the left of the board for a dramatic effect.`}
            />
            <figcaption className={blogStyles.figcaption}>
              A cutting board with basil and garlic.{" "}
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@sebas_m04?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Sébastien Marchand
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/basil-and-garlic?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            </figcaption>
          </figure>
          <p className={blogStyles.p}>
            When asking Josh (Valhalla), about his favorite spices to use in his
            cooking, he revealed to me that he “uses basil and garlic like
            they’re the last food on the Earth, I even put it on my oatmeal”.
            Luckily, that last clause was a joke, though it made me wonder what
            the oatmeal-basil-garlic combo would be like. Jokes aside, his
            favorite use of basil and garlic is to add it to rice, a few minutes
            before it’s finished cooking. I enjoy dropping in fresh basil after
            making any tomato-based dish. Although, while I have basil and
            garlic handy, I like to grab pine nuts (or walnuts), olive oil,
            freshly grated parmesan cheese, and S&P, and I got myself enough
            ingredients to make pesto sauce. I try my best not to limit where my
            sauces can be used, so I put pesto on my rice or over eggs, and not
            just on pasta.
          </p>
        </section>
        <section>
          <p className={blogStyles.p}>
            I hope these serve as simple references you can use to vary things
            up from time to time! See you in two weeks.
          </p>
        </section>
      </div>
    </div>
  );
};

export default blog;

export const getStaticProps = async () => {
  const server =
    process.env.NODE_ENV == "production"
      ? "https://sofrito.vercel.app/api/hello"
      : "http://localhost:3000/api/hello";

  const res = await fetch(server);
  const articles = await res.json();

  return {
    props: { articles }
  };
};
