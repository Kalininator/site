import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import MDXComponents from "../../components/MdxComponents";
import { getPostDir, getFileBySlug } from "../../utils/mdx";
import { format, parseISO } from "date-fns";
import Head from "next/head";
import DisqusComments from "../../components/DisqusComments";

const SinglePost = ({ mdxSource, frontMatter }: any) => {
  const { title, featured, date, readingTime, description, slug } = frontMatter;
  const disqusPost = { title, id: slug, slug };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          property="og:description"
          content={description}
        />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:published_date"
          content={format(parseISO(date), "yyyy-MM-ddTHH:mm:sszzz")}
        />
      </Head>
      <article className="prose prose-violet prose-headings:text-violet-700 prose-strong:text-violet-600 prose-code:text-violet-400 prose-img:rounded-xl dark:prose-invert dark:prose-violet dark:prose-headings:text-amber-500 dark:prose-p:text-violet-300 dark:prose-strong:text-violet-400 dark:prose-code:text-violet-300 dark:prose-ul:text-violet-200">
        <header>
          <h1>{title}</h1>
          <span className="dark:text-violet-400">
            {format(parseISO(date), "do MMMM, yyyy")}
            <span> - ☕ </span> {readingTime.text}
          </span>
          {featured && (
            <Image width={800} height={470} src={featured} alt={title} />
          )}
        </header>
        <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
        <DisqusComments post={disqusPost} />
      </article>
    </>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  const posts = await getPostDir();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const post = await getFileBySlug(slug);
  return {
    props: {
      ...post,
    },
  };
}
