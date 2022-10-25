import * as React from "react";
import classNames from "classnames";
import { Input, IsWalletConnected } from "@chance-cards/framework-react";
import { useForm } from "react-hook-form";
import SignInWithEthereum from "./SignInWithEthereum";
import useBackendAPI from "@/hooks/useBackendAPI";
import { useAccount } from "wagmi";
import IsSignedIn from "./IsSignedIn";
import { useModal } from "react-modal-hook";
import ModalAnimateSmall from "./Modal/ModalAnimateSmall";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface FormUserRegisterProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const FormUserRegister = ({ className }: FormUserRegisterProps) => {
  const account = useAccount();

  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: {},
  } = useForm({
    defaultValues: {
      address: account?.address,
      name: "",
      email: "",
    },
  });
  const { postRegisterRequest } = useBackendAPI();
  const [isExistingPartner, setIsExistingPartner] = React.useState<any>();

  React.useEffect(() => {
    if (account?.address) {
      setValue("address", account?.address);
    }
  }, [account.address]);

  // Modal : On Success
  const [showModal, hideModal] = useModal(() => (
    <ModalAnimateSmall hideModal={hideModal}>
      <div className="content px-10">
        <h3 className="font-bold text-5xl">You're Registered</h3>
        <hr className="my-3" />
        <p className="">All financial journeys start with a savings account.</p>
        <p className="">
          The PoolTogether savings protocol is designed to encourage saving and
          winning. At scale it's a globally accessible savings incentives
          program.{" "}
          <span className="font-bold">Encouraging everyone to save.</span>
        </p>
        <h3 className="font-bold text-3xl">What's next?</h3>
        <p className="">We will reach out to you shortly.</p>
        <p className="">
          The Web3 Savings Cards Alpha release will be limited to 100 savings
          protocol depositors.
        </p>
      </div>
    </ModalAnimateSmall>
  ));

  React.useEffect(() => {
    const account = JSON.parse(localStorage.getItem("account") || "{}");
    if (account._id) {
      setIsExistingPartner(true);
    }
  }, []);

  const data = watch();
  const inputEl = React.useRef(null);
  const onButtonClick = async () => {
    // `current` points to the mounted text input element
    // inputEl?.current?.focus();
    console.log("WRTF", data);

    const res = await postRegisterRequest(data);
    if (res?.status === 200) {
      localStorage.setItem("account", JSON.stringify(res?.data));
      showModal();
      setIsExistingPartner(true);
    }
  };

  const registerRequest = async (data) => {
    const res = await postRegisterRequest(data);
    if (res?.status === 200) {
      localStorage.setItem("account", JSON.stringify(res?.data));
      showModal();
      setIsExistingPartner(true);
    }
  };

  const onSubmit = async (_data: any) => {
    const res = await postRegisterRequest(_data);
    if (res?.status === 200) {
      localStorage.setItem("account", JSON.stringify(res?.data));
      showModal();
      setIsExistingPartner(true);
    }
  };

  const classes = classNames(className, "FormUserRegister");
  return (
    <>
      <div className={classes}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="z-0 relative col-span-4"
        >
          <Input
            hidden
            name="address"
            label="Address"
            placeholder="0x000.0000"
            register={register}
            disabled
          />
          <label>Name</label>
          <Input
            className="input my-2"
            name="name"
            label="Name"
            placeholder="John Doe"
            register={register}
          />
          <div className="my-4" />
          <label>Email</label>
          <Input
            className="input my-2"
            name="email"
            label="Email"
            placeholder="sudo@internet.com"
            register={register}
          />
          <div className="my-6" />
          <IsWalletConnected
            loading={
              <div className="text-center w-full flex flex-center my-3">
                <ConnectButton className="w-full" />
              </div>
            }
          >
            {isExistingPartner ? (
              <button
                onClick={showModal}
                className="btn btn-white btn-lg  w-full cursor-wait"
                type="button"
              >
                Registration Complete
              </button>
            ) : (
              <IsSignedIn>
                <span
                  ref={inputEl}
                  onClick={onButtonClick}
                  className="btn btn-emerald btn-lg  w-full"
                >
                  Register
                </span>
                <SignInWithEthereum>
                  <span className="btn btn-emerald w-full">
                    Sign In With Ethereum
                  </span>
                </SignInWithEthereum>
              </IsSignedIn>
            )}
          </IsWalletConnected>
          <div className="my-4" />
        </form>
      </div>
    </>
  );
};

export default FormUserRegister;
