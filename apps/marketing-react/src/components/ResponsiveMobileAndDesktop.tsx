import React from "react";

import { useMediaQuery } from "react-responsive";

interface ResponsiveMobileAndDesktopProps {
  children?: React.ReactNode[];
  className?: string;
  mobile?: React.ReactNode;
  desktop?: React.ReactNode;
}

export const ResponsiveMobileAndDesktop = ({
  children,
  mobile,
  desktop,
}: ResponsiveMobileAndDesktopProps) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      {(isTabletOrMobile && children[0]) || mobile}
      {(isDesktopOrLaptop && children[1]) || desktop}
    </div>
  );
};

export default ResponsiveMobileAndDesktop;
