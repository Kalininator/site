import Link from "next/link";

const menuItems = [
  { label: `GitHub`, url: `https://github.com/kalininator` },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/kalininator/" },
];

const Header = () => {
  return (
    <header className="text-violet-700 shadow dark:text-violet-400 dark:shadow-slate-600">
      <div className="mx-auto flex h-14 max-w-screen-md flex-wrap items-center justify-between px-4">
        <Link href="/" className="text-2xl font-semibold">
          Alex Kalinin
        </Link>
        <nav>
          <ul className="flex list-none">
            {menuItems.map(({ url, label }, index) => (
              <li
                className="relative mx-2 block rounded-lg p-2 text-left text-base hover:shadow hover:dark:shadow-slate-600"
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
