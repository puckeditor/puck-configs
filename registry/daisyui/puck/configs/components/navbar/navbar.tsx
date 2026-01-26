import { PuckComponent } from "@puckeditor/core";
import { ShoppingCart, SquareDashed, User, MenuIcon } from "lucide-react";

import { LogoFieldProps } from "../../fields/logo-content";

export type NavbarProps = {
  logo: Omit<LogoFieldProps, "tagline">;
  links: {
    label: string;
    href: string;
  }[];
};

const Navbar: PuckComponent<NavbarProps> = ({ logo, links, puck }) => {
  const linkElements = links.map((link, idx) => (
    <li key={idx}>
      <a href={link.href}>{link.label}</a>
    </li>
  ));

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MenuIcon className="h-[20px] w-[20px]" />
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {linkElements}
          </ul>
        </div>
        <a
          onClick={puck.isEditing ? (e) => e.preventDefault() : undefined}
          href="/"
          className="ml-2 flex flex-row items-center gap-2 whitespace-nowrap cursor-pointer font-semibold text-xl"
        >
          <img src={logo.src} alt={logo.alt} className="h-[40px] w-[40px]" />
          <span className="hidden lg:inline">{logo.companyName}</span>
        </a>
        <div className="divider lg:divider-horizontal" />
        <ul className="hidden menu menu-lg menu-horizontal gap-2 lg:flex">
          {linkElements}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <ShoppingCart className="h-[21px] w-[21px]" />
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <SquareDashed className="h-[32px] w-[32px] mx-auto" />
              <span className="text-lg text-center mx-auto font-bold">
                Your cart is empty
              </span>
              <div className="card-actions">
                <a href="#" className="link link-hover mx-auto">
                  Start shopping now
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-ghost btn-circle bg-base-200 avatar">
          <User className="w-[21px] h-[21px]" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
