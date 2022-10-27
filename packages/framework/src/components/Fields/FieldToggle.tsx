import * as React from "react";
import classNames from "classnames";
// @ts-ignore
import ToggleButton from "react-toggle-button";
import { Controller } from "react-hook-form";

interface FieldToggleProps {
  className?: string;
  label?: string;
  control: Function;
  setFieldValue: Function;
  required?: boolean;
  name?: string;
  placeholder?: string;
  type?: string;
}

export const FieldToggle = ({
  className,
  name,
  control,
  setFieldValue,
}: FieldToggleProps) => {
  const classes = classNames(className, "FieldToggle");

  const [mode, setMode] = React.useState<boolean>(false);
  const handleToogle = (_e: any) => {
    setMode(!mode);
    setFieldValue(name, !mode);
  };

  return (
    <Controller
      name={name || ""}
      // @ts-ignore
      control={control}
      render={({ field }: any) => {
        return (
          <ToggleButton
            className={classes}
            onClick={handleToogle}
            {...field}
            value={field.value}
          />
        );
      }}
    />
  );
};

export default FieldToggle;
