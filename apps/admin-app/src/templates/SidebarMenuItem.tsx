import * as React from "react";
import classNames from "classnames";
import Link from "next/link";

interface SidebarMenuItemProps {
  label: string;
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const SidebarMenuItem = ({
  children,
  className,
  href,
  isExternal,
}: SidebarMenuItemProps) => {
  const containerClassName = classNames(className, "SidebarMenuItem");
  if (isExternal) {
    return (
      <a
        className={containerClassName}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href}>
      <a className={containerClassName}>{children}</a>
    </Link>
  );
};

export default SidebarMenuItem;
