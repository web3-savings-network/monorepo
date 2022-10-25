import * as React from "react";
import classNames from "classnames";
import { useAccount, useSignMessage } from "wagmi";
import useAuthorization from "@/hooks/useAuthorization";
import { useChanceCards } from "@chance-cards/framework-react";

interface SignInWithEthereumProps {
  className?: string;
  children?: React.ReactNode;
}

export const SignInWithEthereum = ({
  className,
  children,
}: SignInWithEthereumProps) => {
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { createMessage, verifySignature } = useAuthorization();
  const chanceCards = useChanceCards();

  const verifyCredentials = async () => {
    try {
      if (!address) {
        throw new Error("No wallet connected");
      }

      // setUser((prev) => ({ ...prev, loading: true }));
      const message = await createMessage();
      const signature = await signMessageAsync({ message: message });
      const res = await verifySignature(message, signature);

      // Verify that signature is valid and user owns account
      if (res.status !== 200) {
        throw new Error("Error validating signature");
      }
      if (res.data.authToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
        chanceCards.setIsSignedIn();
      }
    } catch (err: any) {
      console.log("Error signing in with Ethereum: ", err);
    }
  };

  const containerClassName = classNames(className, "SignInWithEthereum");
  return (
    <span onClick={verifyCredentials} className={containerClassName}>
      {children}
    </span>
  );
};

export default SignInWithEthereum;
