import * as React from "react";
import classNames from "classnames";
import FormMintChanceCard from "../FormMintChanceCard";

interface SectionMintCardProps {
  className?: string;
}

export const SectionMintCard = ({ className }: SectionMintCardProps) => {
  const containerClassName = classNames(
    className,
    "SectionMintCard",
    "py-32",
    "bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200  dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900"
  );

  return (
    <section className={containerClassName}>
      <div className={"container mx-auto max-w-screen-xl"}>
        <h3 className="font-normal text-2xl text-center">
          Activate Your Personal Chance Card
        </h3>
        <div className="container mx-auto max-w-screen-sm mt-10">
          <FormMintChanceCard />
        </div>
      </div>
    </section>
  );
};

export default SectionMintCard;
