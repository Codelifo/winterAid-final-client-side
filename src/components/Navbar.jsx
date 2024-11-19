import { Link } from "react-router-dom";

const Navbar = () => {
  const Links = (
    <>
      <Link className="btn btn-ghost lg:text-lg font-medium mr-2">Home</Link>

      <Link className="btn btn-ghost lg:text-lg font-medium mr-2">
        Donation Campaigns
      </Link>

      <Link className="btn btn-ghost lg:text-lg font-medium mr-2">
        How to Help
      </Link>

      <Link className="btn btn-ghost lg:text-lg font-medium mr-2">
        Dashboard
      </Link>
    </>
  );
  return (
    <div className=" text-slate-900 px-2">
      <div className="navbar border rounded-br-xl rounded-bl-xl  max-w-6xl mx-auto h-12">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;