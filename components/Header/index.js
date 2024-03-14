import React, { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { name, showBlog, showResume } = data;

  return (
    <>
      {/* Popover content */}
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              {/* Header title */}
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              {/* Theme switcher and menu icon */}
              <div className="flex items-center">
                {/* Theme switcher button */}
                {data.darkMode && (
                  <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <img className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} alt="Theme switch" />
                  </Button>
                )}

                {/* Menu icon */}
                <Popover.Button&gt;
                  <img
                    className="h-5"
                    src={`/images/${
                      !open ? (theme === "dark" ? "menu-white.svg" : "menu.svg") : (theme === "light" ? "cancel.svg" : "cancel-white.svg")
                    }`}
                    alt="Menu"
                  />
                </Popover.Button>
              </div>
            </div>

            {/* Popover menu */}
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">
                {/* Conditional rendering based on isBlog */}
                {!isBlog ? (
                  <>
                    <Button onClick={handleWorkScroll}>Work</Button>
                    <Button onClick={handleAboutScroll}>About</Button>
                    {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
                    {showResume && <Button onClick={() => window.open("mailto:mdfaizansharief@gmail.com")}>Resume</Button>}
                    <Button onClick={() => window.open("mailto:mdfaizansharief@gmail.com")}>Contact</Button>
                  </>
                ) : (
                  <>
                    <Button onClick={() => router.push("/")}>Home</Button>
                    {showBlog && <Button onClick={() => router.push("/blog")}>Blog</Button>}
                    {showResume && <Button onClick={() => router.push("/resume")}>Resume</Button>}
                    <Button onClick={() => window.open("mailto:mdfaizansharief@gmail.com")}>Contact</Button>
                  </>
                )}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* Desktop header */}
      <div className={`mt-10 hidden flex-row items-center justify-between sticky ${theme === "light" && "bg-white"} dark:text-white top-0 z-10 tablet:flex`}>
        {/* Header title */}
        <h1 onClick={() => router.push("/")} className="font-medium cursor-pointer mob:p-2 laptop:p-0">
          {name}.
        </h1>

        {/* Buttons section */}
        <div className="flex">
          {/* Conditional rendering based on isBlog */}
          {!isBlog ? (
            <>
              <Button onClick={handleWorkScroll}>Into</Button>
              <Button onClick={handleAboutScroll}>About</Button>
              {showBlog && <Button onClick={() => router.push("/blog")}>Work</Button>}
              {showResume && <Button onClick={() => router.push("/resume")}>Resume</Button>}
              <Button onClick={() => window.open("mailto:mdfaizansharief@gmail.com")}>Contact</Button>
            </>
          ) : (
            <>
              <Button onClick={() => router.push("/")}>Home</Button>
              {showBlog && <Button onClick={() => router.push("/blog")}>Work</Button>}
              {showResume && <Button onClick={() => router.push("/resume")}>Resume</Button>}
              <Button onClick={() => window.open("mailto:mdfaizansharief@gmail.com")}>Contact</Button>
            </>
          )}

          {/* Theme switcher */}
          {mounted && theme && data.darkMode && (
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <img className="h-6" src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`} alt="Theme switch" />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
