import * as React from "react";
import classNames from "classnames";
import { useModal } from "react-modal-hook";
import Link from "next/link";
import { AppConfig } from "@/utils/AppConfig";
import AppColorMode from "./AppColorMode";
import ModalFullScreen from "./Modal/ModalFullScreen";

interface ModalAlphaModeInformationProps {
  className?: string;
  children: React.ReactNode;
}

export const ModalAlphaModeInformation = ({
  className,
  children,
}: ModalAlphaModeInformationProps) => {
  const classes = classNames(
    className,
    "ModalAlphaModeInformation",
    "cursor-pointer"
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

  const [showModal, hideModal] = useModal(() => (
    <ModalFullScreen hideModal={hideModal}>
      <div className="card">
        <div className=" flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-100">
            <span className="text-3xl">{AppConfig.emoji}</span>
            <span className="ml-3 text-2xl">{AppConfig.title}</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">{AppConfig.description}</p>
          <div className="my-7">
            <Link href="/register">
              <button className="btn btn-sm btn-blue w-full mx-3">
                <span className="px-2 py-1">Early Access</span>
              </button>
            </Link>
            <div className="my-4" />
            <a target={"_blank"} href={process.env.NEXT_PUBLIC_SAVINGS_APP_URL}>
              <button className="btn btn-sm btn-green w-full mx-3">
                Savings Account
              </button>
            </a>
          </div>
          <div className="mt-6" />
          <AppColorMode />
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className={categoryTitle}>💵 Business Stuff</h2>
            <nav className="list-none mb-10">
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
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className={categoryTitle}>📊 Growth</h2>
            <nav className="list-none mb-10">
              <li className={menuItem}>
                <Link href="/partnerships">
                  <a className={menuLink}>Partnerships</a>
                </Link>
              </li>
              <li className={menuItem}>
                <Link href="/institutions">
                  <a className={menuLink}>Institutions</a>
                </Link>
              </li>
              <li className={menuItem}>
                <a
                  href={process.env.NEXT_PUBLIC_ADMIN_APP_URL}
                  className={menuLink}
                >
                  Dashboard
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </ModalFullScreen>
  ));

  return (
    <span onClick={showModal} className={classes}>
      {children}
    </span>
  );
};

export default ModalAlphaModeInformation;
