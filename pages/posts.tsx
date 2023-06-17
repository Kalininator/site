import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getSortedPost, Post } from "../utils/mdx";
import Head from "next/head";
import { CiCircleRemove } from "react-icons/ci";
import generateRssFeed from "../utils/generateRSSFeed";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const postsData = await getSortedPost();
  await generateRssFeed();
  return {
    props: {
      postsData,
    },
  };
}

export default function Posts({ postsData }: { postsData: Post[] }) {
  const router = useRouter();
  const tag: string = (router.query.tag as string) || "";
  return (
    <>
      <Head>
        <title>Alex Kalinin</title>
      </Head>
      <div>
        <div className="mb-4 flex space-x-4 text-violet-500 dark:text-amber-400">
          {tag && (
            <Link
              href="/"
              className="rounded-lg border px-2 py-1 font-semibold capitalize text-violet-900 dark:border-slate-800 dark:text-amber-300 dark:hover:border-slate-600"
            >
              <div className="flex items-center">
                <CiCircleRemove className="mr-2 text-xl" />
                {tag}
              </div>
            </Link>
          )}
          {["homelab", "guide", "project"]
            .filter((t) => t !== tag)
            .map((tag) => {
              return (
                <Link
                  href={`/?tag=${tag}`}
                  key={tag}
                  className="rounded-lg border px-2 py-1 capitalize dark:border-slate-800 dark:hover:border-slate-600"
                >
                  {tag}
                </Link>
              );
            })}
        </div>
        <ul>
          {postsData
            .filter((p) => tag == "" || p.tags.includes(tag))
            .map((post: Post) => {
              const { slug, title, date, description, readingTime } = post;

              return (
                <li
                  className="mb-4 list-none rounded-xl last:mb-0 hover:shadow dark:hover:shadow-slate-500"
                  key={slug}
                >
                  <Link href={`/posts/${slug}`}>
                    <article className="rounded-xl border border-violet-100 p-5 dark:border-slate-800">
                      <h2 className="mb-0 text-2xl font-semibold leading-normal text-violet-800 dark:text-amber-500">
                        {title}
                      </h2>
                      <div className="text-sm leading-relaxed text-violet-600 dark:text-violet-400">
                        {format(parseISO(date), "do MMMM, yyyy")} - ☕{" "}
                        {readingTime.text}
                      </div>
                      <div className="mb-2 text-sm capitalize italic leading-relaxed text-violet-600 dark:text-violet-400">
                        {post.tags.join(", ")}
                      </div>
                      <p className="dark:text-violet-300">{description}</p>
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
