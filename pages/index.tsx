import Link from "next/link";
import { parseISO, format } from "date-fns";
import { getSortedPost } from "../utils/mdx";
import Head from "next/head";

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
    <>
      <Head>
        <title>Alex Kalinin</title>
      </Head>
      <div>
        <ul>
          {postsData.map((post: any) => {
            const { slug, title, date, description } = post;

            return (
              <li className="mb-8 list-none last:mb-0 hover:shadow" key={slug}>
                <Link href={`/blog/${slug}`} className="">
                  <article className="rounded-xl border border-slate-200 p-5">
                    <h2 className="mb-2 text-2xl font-semibold leading-normal">
                      {title}
                    </h2>
                    <div className="text-sm leading-relaxed text-gray-700">
                      <span className="text-sm leading-relaxed text-gray-700">
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
    </>
  );
}
