import * as React from "react";
import classNames from "classnames";
import { AppConfig } from "@/utils/AppConfig";
import Link from "next/link";
import AppColorMode from "@/components/AppColorMode";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const containerClassName = classNames(
    className,
    "Footer",
    "border-t border-neutral-300 dark:border-neutral-500 bg-neutral-100 dark:bg-neutral-900"
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
      <div className="container max-w-screen-xl px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="lg:-top-14 relative">
            <a className=" title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-100">
              <h5 className="text-3xl">{AppConfig.emoji}</h5>
              <h2 className="text-2xl">{AppConfig.title}</h2>
            </a>
            <p className="mt-2 text-sm text-gray-700">
              {AppConfig.description}
            </p>
            <div className="mt-6" />
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className={categoryTitle}>📊 Growth</h2>
            <nav className="list-none mb-10">
              <li className={menuItem}>
                <Link href="/partner">
                  <a className={menuLink}>Partner</a>
                </Link>
              </li>
              <li className={menuItem}>
                <Link href="/institutions">
                  <a className={menuLink}>Institutions</a>
                </Link>
              </li>
              {/* <li className={menuItem}>
                <a
                  href={process.env.NEXT_PUBLIC_ADMIN_APP_URL}
                  className={menuLink}
                >
                  Dashboard
                </a>
              </li> */}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className={categoryTitle}>📜 Business Stuff</h2>
            <nav className="list-none mb-10">
              <li className={menuItem}>
                <Link href="/about">
                  <a className={menuLink}>About</a>
                </Link>
              </li>
              <li className={menuItem}>
                <Link href="/contact">
                  <a className={menuLink}>Contact Us</a>
                </Link>
              </li>
              <li className={menuItem}>
                <Link href="/terms-of-service">
                  <a className={menuLink}>Terms of Service</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-2/4 md:w-1/2 w-full px-4 flex items-center justify-center">
            <span className="font-light text-center text-3xl mb-10">
              Deposit. Save. Win.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-900 py-3 px-32">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col items-center sm:flex-row">
          {/* <AppColorMode /> */}
          <div className="mx-3" />
          <span className="text-gray-500 text-sm text-center sm:text-left">
            © Copyright {new Date().getFullYear()} {AppConfig.title}
            <a
              href="https://twitter.com/KamesGeraghty"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 ml-1"
              target="_blank"
            >
              @KamesGeraghty
            </a>
          </span>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              target="_blank"
              href="https://twitter.com/KamesGeraghty"
              rel="noopener noreferrer"
              className="ml-3 text-gray-500"
            >
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
