import Link from "next/link";
import { parseISO, format } from "date-fns";
// import styles from "../styles/Home.module.css";
import styles from "../styles/Blog.module.css";
import { getSortedPost } from "../utils/mdx";

export async function getStaticProps() {
  const postsData = await getSortedPost();
  return {
    props: {
      postsData,
    },
  };
}

export default function Home({ postsData }: { postsData: any }) {
  return (
    <div className={styles.home}>
      <ul>
        {postsData.map((post: any) => {
          const { slug, title, date, description } = post;

          return (
            <li className={styles.post_item} key={slug}>
              <Link href={`/blog/${slug}`} className={styles.item__link}>
                <article>
                  <h2>{title}</h2>
                  <div className={styles.post__meta}>
                    <span className={styles.post__meta}>
                      {format(parseISO(date), "MMMM dd, yyyy")}
                    </span>{" "}
                  </div>
                  <p>{description}</p>
                </article>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
