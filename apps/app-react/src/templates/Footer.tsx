import * as React from "react";

import classNames from "classnames";
import Link from "next/link";

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
  return (
    <footer className={containerClassName}>
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            © Copyright {new Date().getFullYear()}{" "}
            <a
              target={"_blank"}
              href={"https://chancecards.xyz"}
              rel="noreferrer"
            >
              <span className="">{AppConfig.title}</span>
            </a>
            <a
              href="https://twitter.com/KamesGeraghty"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
              target="_blank"
            >
              @KamesGeraghty
            </a>
          </p>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              target="_blank"
              href="https://twitter.com/KamesGeraghty"
              rel="noopener noreferrer"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
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
