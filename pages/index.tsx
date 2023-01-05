import Link from "next/link";
import { parseISO, format } from "date-fns";
import { getSortedPost } from "../utils/mdx";
import Head from "next/head";
import generateRssFeed from "../utils/generateRSSFeed";

export async function getStaticProps() {
  await generateRssFeed();
  const postsData = await getSortedPost();
  return {
    props: {
      postsData,
    },
  };
}

export default function Home({ postsData }: { postsData: any }) {
  return (
    <>
      <Head>
        <title>Alex Kalinin</title>
      </Head>
      <div>
        <ul>
          {postsData.map((post: any) => {
            const { slug, title, date, description, readingTime } = post;

            return (
              <li
                className="mb-4 list-none rounded-xl last:mb-0 hover:shadow dark:hover:shadow-slate-500"
                key={slug}
              >
                <Link href={`/posts/${slug}`}>
                  <article className="rounded-xl border border-violet-100 p-5 dark:border-slate-800">
                    <h2 className="mb-0 text-2xl font-semibold leading-normal text-violet-800 dark:text-violet-400">
                      {title}
                    </h2>
                    <div className="mb-4 text-sm leading-relaxed ">
                      <span className="text-sm leading-relaxed text-violet-600 dark:text-violet-500">
                        {format(parseISO(date), "do MMMM, yyyy")} - ☕{" "}
                        {readingTime.text}
                      </span>{" "}
                    </div>
                    <p className="">{description}</p>
                  </article>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
