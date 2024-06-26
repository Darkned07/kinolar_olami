import Link from "next/link";
import Navlinks from "./Navlinks";

const navone = [
  {
    id: 1,
    url: "premyeralar",
    text: "Premyeralar",
  },
  {
    id: 2,
    url: "multfilmlar",
    text: "Multfilmlar",
  },
];

function Navbar() {
  return (
    <div className="navbar  max-container">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3"
          >
            {navone.map((n) => {
              return (
                <li key={n.id}>
                  <Link
                    className="btn btn-sm btn-outline"
                    href={`/new/${n.url}`}
                  >
                    {n.text}
                  </Link>
                </li>
              );
            })}
            <li>
              <details>
                <summary className="btn btn-sm btn-outline">Janri</summary>
                <ul className="flex flex-col gap-[10px] mt-2">
                  <Navlinks />
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn  btn-outline text-md">
          Kinoizlovchi
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center gap-2">
          <li>
            <details>
              <summary className="btn btn-sm btn-outline">Janri</summary>
              <ul className="flex flex-col gap-[10px] z-10">
                <Navlinks />
              </ul>
            </details>
          </li>
          {navone.map((n) => {
            return (
              <li key={n.id}>
                <Link className="btn btn-sm btn-outline" href={`/new/${n.url}`}>
                  {n.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://yt3.googleusercontent.com/XlMhkE1-mnogPMeRqHmhh7TlrbqX5eI_J4Bt1eUREeJocbGQkxcWtZ0EgSHagQ12MfFwuLFdQQ=s176-c-k-c0x00ffffff-no-rj"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3  z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/new/premyeralar" className="justify-between">
                Yangi kinolar
                <span className="badge">New</span>
              </Link>
              <Link href="/invest">Sarmoya qilish :)</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
