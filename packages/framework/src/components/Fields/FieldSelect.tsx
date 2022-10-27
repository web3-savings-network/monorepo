import * as React from "react";
import classNames from "classnames";
import { Controller } from "react-hook-form";
import Select from "react-select";

interface FieldSelectProps {
  className?: string;
  control: any;
  name: string;
  options: any;
}

export const FieldSelect = ({
  className,
  name,
  control,
  options,
}: FieldSelectProps) => {
  const classes = classNames(
    className,
    "FieldSelect",
    "text-neutral-900 dark:text-neutral-900"
  );
  return (
    // <div className={containerClassName}>
    <Controller
      name={name || ""}
      control={control}
      render={({ field }) => (
        <Select
          className={classes}
          options={options}
          defaultValue={options[0]}
          {...field}
        />
      )}
    />
    // </div>
  );
};

export default FieldSelect;
