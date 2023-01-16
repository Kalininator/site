import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import readingTime, { ReadTimeResults } from "reading-time";

// rehype plugins
import imageSize from "rehype-img-size";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { z } from "zod";

// imports end

const rootDirectory = process.cwd();

const PostFrontmatter = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.string().array().default([]),
});
export type Post = z.infer<typeof PostFrontmatter> & {
  slug: string;
  readingTime: ReadTimeResults;
};

// get sorted mdx post

export async function getSortedPost(tag?: string): Promise<Post[]> {
  const postDirectory = path.join(rootDirectory, "posts");

  const files = fs.readdirSync(postDirectory);

  const postLists: Post[] = [];

  if (!files) return postLists;

  files.forEach((file) => {
    const filePath = path.join(postDirectory, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { data } = matter(content);
    const frontmatter = PostFrontmatter.parse(data);
    postLists.push({
      ...frontmatter,
      slug: file.replace(".mdx", ""),
      readingTime: readingTime(content),
    });
  });

  // Sort posts by date

  const sorted = postLists.sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  });

  if (!tag) return sorted;
  return sorted.filter((post) => post.tags.includes(tag));
}

// get post type dir
export async function getPostDir(): Promise<string[]> {
  return fs.readdirSync(path.join(rootDirectory, "posts"));
}

// get file by slug

export async function getFileBySlug(slug: string) {
  // get file content
  const fileContent = fs.readFileSync(
    path.join(rootDirectory, "posts", `${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(fileContent);
  const frontmatter = PostFrontmatter.parse(data);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      development: false,
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
          },
        ],
        [imageSize, { dir: "public" }] as any,
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      readingTime: readingTime(content),
      slug: slug || null,
      ...frontmatter,
    },
  };
}
