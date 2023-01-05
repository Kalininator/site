import { MdRssFeed } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto flex max-w-screen-md items-center justify-between space-x-4 border-t border-violet-200 px-4 py-2 text-violet-700 dark:border-violet-900">
        <p>&copy; {new Date().getFullYear().toString()} by Alex Kalinin</p>
        <div className="grow"></div>
        <a
          href="https://github.com/kalininator"
          rel="noreferrer"
          target="_blank"
        >
          <BsGithub className="h-8 w-8 text-black dark:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/kalininator/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin className="h-8 w-8 text-[#0072b1]" />
        </a>
        <a
          href="http://www.kalinin.uk/rss.xml"
          rel="noreferrer"
          target="_blank"
        >
          <MdRssFeed className="h-8 w-8 text-orange-500" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
