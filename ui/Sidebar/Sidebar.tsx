import { Link, NavLink } from "@remix-run/react";
import { Option, SidebarProps } from "./Sidebar.types";
import clsx from "clsx";

export const Sidebar: React.FC<SidebarProps> = ({ options }) => {
  return (
    <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-primary">
      <div className="text-gray-100 text-xl">
        <Link to="/" className="p-2.5 mt-1 flex items-center cursor-pointer">
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
          <h1 className="font-bold  text-gray-200 text-[15px] ml-3">
            Products DEMO
          </h1>
          <i className="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
        </Link>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      {options.map((opt) => (
        <MenuItem key={opt.href} {...opt} />
      ))}
      <div className="my-4 bg-gray-600 h-[1px]"></div>
    </div>
  );
};

const MenuItem: React.FC<Option> = ({ label, href, Icon }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        clsx(
          `p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white`,
          { "bg-blue-600": isActive }
        )
      }
    >
      {Icon && <Icon />}
      <span className="text-[15px] ml-4 text-gray-200 font-bold">{label}</span>
    </NavLink>
  );
};
