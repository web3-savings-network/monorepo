import classNames from "classnames";
import Link from "next/link";

import { AppConfig } from "@/utils/AppConfig";

interface AppLogoSmallProps {
  className?: string;
  defaultStyle?: boolean;
}

export const AppLogoSmall = ({
  className,
  defaultStyle,
}: AppLogoSmallProps) => {
  const classesBase = classNames("flex items-center  cursor-pointer ");
  const styleName = classNames(
    className,
    "app-logo",
    "font-semibold text-lg hover:opacity-70 ml-2",
    {
      "text-purple-600 hover:text-purple-700": defaultStyle,
    }
  );
  return (
    <Link passHref={true} href="/">
      <span className={classesBase}>
        <span className="text-3xl">{AppConfig.emoji}</span>
      </span>
    </Link>
  );
};

export default AppLogoSmall;
