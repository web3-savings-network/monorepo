// @ts-nocheck
import React from "react";
import { useMediaQuery } from "react-responsive";

interface ResponsiveMobileAndDesktopProps {
  children?: React.ReactNode;
  className?: string;
}

export const ResponsiveMobileAndDesktop = ({
  children,
}: ResponsiveMobileAndDesktopProps) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isTabletOrMobile && (children[0])}
      {(isDesktopOrLaptop && children[1])}
    </>
  );
};

export default ResponsiveMobileAndDesktop;
