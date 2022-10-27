import * as React from "react";
import classNames from "classnames";

interface InputProps {
    name: string;
    type?: string;
  className?: string;
  register: Function;
  required?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  placeholder?: string;
}

export const Input = ({
  className,
  name,
  register,
  required = false,
  disabled = false,
  hidden = false,
  placeholder,
  type,
}: InputProps) => {
  const classes = classNames(className, "Input");
  return (
    <input
        className={classes}
        type={type}
        disabled={disabled}
        hidden={hidden}
        placeholder={placeholder}
        {...register(name, { required })}
    />
  );
};

export default Input;
