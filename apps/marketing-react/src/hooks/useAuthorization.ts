import axios from "axios";
import { SiweMessage } from "siwe";
import { useAccount, useNetwork } from "wagmi";

const useAuthorization = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const createMessage = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/challenge`
    );
    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement: "I promise to dance on the dance floor!",
      uri: window.location.origin,
      version: "1",
      chainId: chain!.id,
      nonce: res.data,
    });
    return message.prepareMessage();
  };

  const verifySignature = async (message: string, signature: string) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/authenticate`,
      {
        message: message,
        signature: signature,
      }
    );
    return res;
  };

  return { createMessage, verifySignature,  };
};

export default useAuthorization;
