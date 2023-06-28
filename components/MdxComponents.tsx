import Link from "next/link";
import Image from "next/image";

const CustomLink = (props: any) => {
  const { href } = props;
  const isInternalLink = href && href.startsWith("/");

  const isHeadingLink = href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link legacyBehavior href={href}>
        <a {...props} />
      </Link>
    );
  } else if (isHeadingLink) {
    return (
      <Link href={href} className="anchor">
        #
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const CustomImage = (props: any) => {
  return (
    <Image
      alt=""
      loading="lazy"
      {...props}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
};

const MDXComponents = {
  img: CustomImage,
  a: CustomLink,
};

export default MDXComponents;
