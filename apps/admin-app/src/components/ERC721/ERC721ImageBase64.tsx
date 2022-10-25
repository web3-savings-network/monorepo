import * as React from "react";
import { useContractRead } from "wagmi";
import { DiscoERC721 } from "@district-labs/disco-deployments";

interface ERC721ImageBase64Props {
  className?: string;
  contractAddress: string;
  tokenId: string;
}

export const ERC721ImageBase64 = ({
  contractAddress,
  tokenId,
}: ERC721ImageBase64Props) => {
  const txRead = useContractRead({
    addressOrName: contractAddress,
    contractInterface: DiscoERC721,
    functionName: "tokenURI",
    args: [tokenId],
  });

  const [imgSrc, setImgSrc] = React.useState();
  React.useEffect(() => {
    if (txRead.data) {
      (async () => {
        const data = await fetch(txRead.data);
        console.log(await data.json(), "txRead.data");
        setImgSrc(await data.json());
      })();
      async () => {};
    }
  }, [txRead.data]);

  if (!txRead.data || !txRead.isSuccess) return null;
  return <img className="" src={imgSrc} />;
};

export default ERC721ImageBase64;
