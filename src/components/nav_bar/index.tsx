import NavItem from "@/components/nav_item";
import { NAV_ITEMS } from "./constants";
import { ReactElement } from "react";

const NavBar = (): React.ReactElement => {
  const renderTitle = (): ReactElement => {
    return <h1 className="text-white font-bold py-2 pl-3 text-2xl">Pages</h1>;
  };

  const renderNavItems = (): ReactElement[] => {
    return NAV_ITEMS.map((navItem, index) => {
      return (
        <NavItem
          key={index}
          title={navItem.title}
          icon={navItem.icon}
          link={navItem.link}
          description={navItem.description}
        />
      );
    });
  };

  return (
    <nav className="w-full h-screen border-r-0 border-r-gray-300 sm:w-[300px] sm:border-r-2">
      {renderTitle()}
      <ul className="w-full list-none p-2 m-0 flex flex-col gap-2">
        {renderNavItems()}
      </ul>
    </nav>
  );
};

export default NavBar;
