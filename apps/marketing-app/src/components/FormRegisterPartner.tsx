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

interface FormRegisterPartnerProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const FormRegisterPartner = ({
  className,
}: FormRegisterPartnerProps) => {
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
  const { postPartnerRequest } = useBackendAPI();
  const [isExistingPartner, setIsExistingPartner] = React.useState<any>();

  React.useEffect(() => {
    if (account?.address) {
      setValue("address", account?.address);
    }
  }, [account.address]);

  // Modal : On Success
  const [showModal, hideModal] = useModal(() => (
    <ModalAnimateSmall hideModal={hideModal}>
      <div className="content">
        <h3 className="font-bold text-5xl">Welcome aboard</h3>
        <hr className="my-3" />
        <p className="">
          The Web3 Savings Card partnership program is just getting started.{" "}
          <span className="italic">We're excited to have you here!</span>
        </p>
        <p className="">
          Our objective is to increase the PoolTogether{" "}
          <span className="font-bold">
            TVL to $1,000,000,000 USD by the end of 2023.
          </span>
        </p>
        <p className="font-bold">Will you join us?</p>
        <h3 className="font-bold text-3xl">What's next?</h3>
        <p className="">
          We will reach out to you shortly. Thank you for the interest in
          winning Web3 Finance products.
        </p>
        <p className="">
          Follow me{" "}
          <a
            className="link"
            target={"_blank"}
            href="https://twitter.com/@KamesGeraghty"
          >
            @KamesGeraghty
          </a>{" "}
          to get the latest real-time updates.
        </p>
      </div>
    </ModalAnimateSmall>
  ));

  React.useEffect(() => {
    const account = JSON.parse(localStorage.getItem("partner") || "{}");
    if (account._id) {
      setIsExistingPartner(true);
    }
  }, []);

  const data = watch();
  const inputEl = React.useRef(null);
  const onButtonClick = async () => {
    const res = await postPartnerRequest(data);
    if (res?.status === 200) {
      localStorage.setItem("partner", JSON.stringify(res?.data));
      showModal();
      setIsExistingPartner(true);
    }
  };

  const onSubmit = async (_data: any) => {
    const res = await postPartnerRequest(_data);
    if (res?.status === 200) {
      localStorage.setItem("partner", JSON.stringify(res?.data));
      showModal();
      setIsExistingPartner(true);
    }
  };

  const classes = classNames(className, "FormRegisterPartner");
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
                className="btn btn-white btn-lg w-full cursor-wait"
                type="button"
                onClick={showModal}
              >
                Application Complete
              </button>
            ) : (
              <IsSignedIn>
                <span
                  ref={inputEl}
                  onClick={onButtonClick}
                  className="btn btn-emerald btn-lg w-full"
                >
                  Apply for Partnership
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

export default FormRegisterPartner;
