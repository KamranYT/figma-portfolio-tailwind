import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between my-5 max-w-screen-2xl text-2xl fixed top-0 left-0 w-full h-16  text-black items-center px-10">
      {/* Logo */}
      <h1 className="flex pl-32 font-bold">
        Muhammad <span>.</span>
      </h1>
      {/* Links */}
      <div>
      <nav>
        <ul className="flex gap-10 pr-16 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/project">Projects</Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;

