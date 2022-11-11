import * as React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { utils } from "ethers";
import { Input } from "@web3-savings-cards/framework-react";

interface FormUtilsStringBytes32EncodeProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const FormUtilsStringBytes32Encode = ({
  className,
}: FormUtilsStringBytes32EncodeProps) => {
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm({
    defaultValues: {
      encodingInput: "",
    },
  });

  const [encoding, setEncoding] = React.useState<string>("");
  const onSubmit = async (_data: any) => {
    setEncoding(utils.formatBytes32String(_data.encodingInput));
  };

  const classes = classNames(className, "FormUtilsStringBytes32Encode");
  return (
    <>
      <div className={classes}>
        <div className="text-center z-5 relative col-span-8 mb-3">
          <span className="tag tag-smoke">
            <span className="px-2 py-2">{encoding}</span>
          </span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="z-0 relative col-span-4"
        >
          <Input
            className="input"
            name="encodingInput"
            placeholder="Enter a string to encode"
            register={register}
          />
          <button className="btn btn-white btn-lg mt-3 w-full">Encode</button>
        </form>
      </div>
    </>
  );
};

export default FormUtilsStringBytes32Encode;
