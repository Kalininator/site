import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import MDXComponents from "../../components/MdxComponents";
import { getPostDir, getFileBySlug } from "../../utils/mdx";
import { parseISO, format } from "date-fns";
import Head from "next/head";

const SinglePost = ({ mdxSource, frontMatter }: any) => {
  const { title, featured, date, readingTime } = frontMatter;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article className="prose prose-slate prose-img:rounded-xl">
        <header>
          <h1>{title}</h1>
          <span>
            {format(parseISO(date), "MMMM dd, yyyy")}
            <span> . </span> {readingTime.text}
          </span>
          {featured && (
            <Image width={800} height={470} src={featured} alt={title} />
          )}
        </header>
        <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
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
