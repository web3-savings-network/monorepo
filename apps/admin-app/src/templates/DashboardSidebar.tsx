import * as React from "react";
import classNames from "classnames";
import AppLogo from "@/components/App/AppLogo";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarMenuItemList from "@/utils/SidebarMenuItemList";

interface DashboardSidebarProps {
  className?: string;
}

export const DashboardSidebar = ({ className }: DashboardSidebarProps) => {
  const containerClassName = classNames(className, "Sidebar");
  return (
    <div className={containerClassName}>
      <div className="flex items-center justify-center">
        <AppLogo />
      </div>
      <div className="mt-14" />
      <div className="menu">
        {SidebarMenuItemList.map((item, index) => {
          return (
            <SidebarMenuItem
              className="btn btn-light w-full mb-3 block"
              key={index}
              {...item}
            >
              {item.label}
            </SidebarMenuItem>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardSidebar;
