import { MdRssFeed } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto flex max-w-screen-md items-center justify-between border-t border-violet-200 px-4 py-2 text-violet-700 dark:border-violet-900">
        <p>&copy; {new Date().getFullYear().toString()} by Alex Kalinin</p>
        <a
          href="http://www.kalinin.uk/rss.xml"
          rel="noreferrer"
          target="_blank"
        >
          <MdRssFeed color="#ee802f" size="30px" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
