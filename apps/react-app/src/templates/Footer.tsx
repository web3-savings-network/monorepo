import * as React from "react";
import classNames from "classnames";
import { AppConfig } from "@/utils/AppConfig";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const containerClassName = classNames(
    className,
    "Footer bg-neutral-100 dark:bg-neutral-900",
    "border-t border-gray-300 dark:border-neutral-500 dark:bg-gray-700"
  );
  const categoryTitle = classNames(
    "title-font font-bold text-sm mb-3",
    "text-gray-900 dark:text-gray-100"
  );
  const menuItem = classNames("my-2");
  const menuLink = classNames(
    className,
    "MenuLink",
    "cursor-pointer text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 hover:text-gray-800"
  );
  return (
    <footer className={containerClassName}>
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">{AppConfig.title}</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">{AppConfig.description}</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className={categoryTitle}>Chance Cards</h2>
            <nav className="list-none mb-10">
              <li className={menuItem}>
                <a className={menuLink}>How It Works</a>
              </li>
              <li className={menuItem}>
                <a className={menuLink}>Terms of Service</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className={categoryTitle}>Partnerships</h2>
            <nav className="list-none mb-10">
              <li className={menuItem}>
                <a className={menuLink}>Get In Touch</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-2/4 md:w-1/2 w-full px-4 flex items-center justify-center">
            <span className="font-light text-center text-3xl mb-10">
              Tús maith, leath na hoibre
            </span>
            {/* <p className="leading-6">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps.
            </p> */}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © Copyright {new Date().getFullYear()} {AppConfig.title}
            <a
              href="https://twitter.com/KamesGeraghty"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 ml-1"
              target="_blank"
            >
              @KamesGeraghty
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
