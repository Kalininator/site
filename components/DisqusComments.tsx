import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({
  post,
}: {
  post: {
    id: string;
    title: string;
    slug: string;
  };
}) => {
  const disqusShortname = "kalinin";
  const disqusConfig = {
    url: `https://www.kalinin.dev/posts/${post.slug}`,
    identifier: post.id, // Single post id
    title: post.title, // Single post title
  };
  return (
    <div className="mt-20">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
