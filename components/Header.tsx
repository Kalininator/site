import Link from "next/link";

const menuItems = [{ label: `Home`, url: `/` }];

const Header = () => {
  return (
    <header className="shadow">
      <div className="mx-auto flex h-14 max-w-screen-md flex-wrap items-center justify-between px-2">
        <Link href="/" className="text-2xl">
          Alex Kalinin
        </Link>
        <nav>
          <ul className="flex list-none">
            {menuItems.map(({ url, label }, index) => (
              <li
                className="relative block text-left text-base hover:underline"
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
