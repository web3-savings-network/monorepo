import * as React from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Input, IsWalletConnected } from "@web3-savings-cards/framework-react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useModal } from "react-modal-hook";
import { useAccount } from "wagmi";

import useBackendAPI from "@/hooks/useBackendAPI";

import IsSignedIn from "./IsSignedIn";
import ModalAnimateSmall from "./Modal/ModalAnimateSmall";
import SignInWithEthereum from "./SignInWithEthereum";

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
        <h3 className="text-5xl font-bold">You're Registered</h3>
        <hr className="my-3" />
        <p className="">All financial journeys start with a savings account.</p>
        <p className="">
          The PoolTogether savings protocol is designed to encourage saving and
          winning. At scale it's a globally accessible savings incentives
          program.{" "}
          <span className="font-bold">Encouraging everyone to save.</span>
        </p>
        <h3 className="text-3xl font-bold">What's next?</h3>
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
          className="relative z-0 col-span-4"
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
              <div className="flex-center my-3 flex w-full text-center">
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
