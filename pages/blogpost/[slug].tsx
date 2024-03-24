import React from "react";
import styles from "../../styles/BlogPost.module.css";
import { useRouter } from "next/router";
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <main className={styles.main}>
        <h1>{slug}</h1>
        <h2>Title Of the Page </h2>
        <div className={styles.container}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          excepturi illo, porro incidunt nesciunt cum, numquam voluptatibus
          voluptatum quae, nisi molestias eaque! Nihil ad ducimus praesentium
          earum quisquam aut, neque libero vitae cum dolorem voluptates, id
          asperiores modi. Impedit explicabo inventore maiores similique
          officia? Et maiores ex quod quos laborum!
        </div>
      </main>
    </div>
  );
};

export default Slug;
