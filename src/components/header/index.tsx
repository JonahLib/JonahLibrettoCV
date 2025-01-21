"use client";

import clsx from "clsx";
import { ReactElement, useEffect, useState } from "react";

const Header = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMobile) {
        if (currentScrollY > lastScrollY && !isScrollingDown) {
          setIsScrollingDown(true);
        } else if (currentScrollY < lastScrollY && isScrollingDown) {
          setIsScrollingDown(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isScrollingDown, isMobile]);

  useEffect(() => {
    if (isMobile) {
      const timeout = setTimeout(() => {
        setIsVisible(!isScrollingDown);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setIsVisible(true);
    }
  }, [isScrollingDown, isMobile]);

  const renderTitle = (): ReactElement => {
    return <h1 className="font-bold text-4xl mt-4">Jonah Libretto</h1>;
  };

  const renderDescription = (): ReactElement => {
    return <p className="font-bold mt-1">Junior Javascript Engineer</p>;
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 flex flex-col items-center bg-sky-400 w-full h-24 sm:h-24 lg:h-28 text-white px-8 lg:px-6 sm:px-4 transition-transform duration-300 ease-in-out z-[99] rounded-b-xl",
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      )}
    >
      {renderTitle()}
      {renderDescription()}
    </header>
  );
};

export default Header;
