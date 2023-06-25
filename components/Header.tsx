import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { label: `Blog`, url: "/posts" },
  // { label: `GitHub`, url: `https://github.com/kalininator` },
  // { label: "LinkedIn", url: "https://www.linkedin.com/in/kalininator/" },
];

const Header = () => {
  return (
    <header className="text-[#f4bc4c]">
      <div className="mx-auto flex h-14 max-w-screen-md flex-wrap items-center justify-between px-4">
        <Link href="/" className="text-2xl font-semibold">
          <Image
            src="/Kalinin Without Slogan Transparent bg.svg"
            alt="Alex Kalinin"
            width={100}
            height={200}
          />
        </Link>
        <nav>
          <ul className="flex list-none">
            {menuItems.map(({ url, label }, index) => (
              <li
                className="relative mx-2 block rounded-lg p-2 text-left text-base hover:underline"
                key={index}
              >
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
