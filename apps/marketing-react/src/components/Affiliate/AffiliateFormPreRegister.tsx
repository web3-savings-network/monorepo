import * as React from "react";
import classNames from "classnames";
import { Input, IsWalletConnected } from "@web3-savings-cards/framework-react";
import { useForm } from "react-hook-form";
import SignInWithEthereum from "../SignInWithEthereum";
import useBackendAPI from "@/hooks/useBackendAPI";
import { useAccount } from "wagmi";
import IsSignedIn from "../IsSignedIn";
import { useModal } from "react-modal-hook";
import ModalAnimateSmall from "../Modal/ModalAnimateSmall";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface AffiliateFormPreRegisterProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const AffiliateFormPreRegister = ({
  className,
}: AffiliateFormPreRegisterProps) => {
  const account = useAccount();

  const {
    register,
    handleSubmit,
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

  // Modal : On Success
  const [showModal, hideModal] = useModal(() => (
    <ModalAnimateSmall hideModal={hideModal}>
      <div className="content">
        <h3 className="font-bold text-5xl">🚢 Welcome, aboard sailor!</h3>
        <hr className="my-3" />
        <p className="">
          The Web3 Savings Cards partnership program is just getting started.{" "}
          <span className="font-bold">We're excited to have you on board.</span>{" "}
          Our mission is to increase the PoolTogether TVL to 1B USD by the end
          of 2023.
        </p>
        <p className="">We're going to need your help to do it.</p>
        <h3 className="font-bold text-xl">What's next?</h3>
        <p className="">We will reach out to you shortly.</p>
        <p className="">
          In the meantime, you can deposit USDC into PoolTogether and start
          winning today!
        </p>
        <p className="">
          <span className="font-bold">Goal:</span> 1B USD TVL by the end of 2023
        </p>
      </div>
    </ModalAnimateSmall>
  ));

  React.useEffect(() => {
    const partner = JSON.parse(localStorage.getItem("partner") || "{}");
    if (partner.address) {
      setIsExistingPartner(true);
    }
  }, []);

  const onSubmit = async (_data: any) => {
    const res = await postPartnerRequest(_data);
    if (res?.status === 200) {
      localStorage.setItem("partner", JSON.stringify(res?.data));
      showModal();
      setIsExistingPartner(true);
    }
  };

  const classes = classNames(className, "AffiliateFormPreRegister");
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
          <label>Email</label>
          <Input
            className="input my-2"
            name="email"
            label="Email"
            placeholder="sudo@internet.com"
            register={register}
          />
          <IsWalletConnected
            loading={
              <div className="text-center w-full flex flex-center my-3">
                <ConnectButton className="w-full" />
              </div>
            }
          >
            {isExistingPartner ? (
              <button
                className="btn btn-white btn-lg mt-3 w-full cursor-wait"
                type="button"
              >
                Existing Partner
              </button>
            ) : (
              <IsSignedIn>
                <button className="btn btn-dark btn-lg mt-3 w-full">
                  Apply to Become Partner
                </button>
                <SignInWithEthereum>
                  <button
                    className="btn btn-dark btn-lg mt-3 w-full"
                    type="button"
                  >
                    Sign In With Ethereum
                  </button>
                </SignInWithEthereum>
              </IsSignedIn>
            )}
          </IsWalletConnected>
        </form>
      </div>
    </>
  );
};

export default AffiliateFormPreRegister;
