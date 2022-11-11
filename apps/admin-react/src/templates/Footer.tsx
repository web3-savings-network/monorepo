import * as React from "react";
import classNames from "classnames";
import { AppConfig } from "@/utils/AppConfig";
import Link from "next/link";

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
      
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © Copyright {new Date().getFullYear()} <a target={"_blank"} href={"https://chancecards.xyz"}>
            <span className=''>{AppConfig.title}</span>
              </a> 
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
