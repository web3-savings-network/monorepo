import * as React from "react";
import { useContractRead } from "wagmi";
import { erc721ABI } from "wagmi";

interface ERC721ImageBase64Props {
  className?: string;
  contractAddress: string;
  tokenId: string;
}

export const ERC721ImageBase64 = ({
  className,
  contractAddress,
  tokenId,
}: ERC721ImageBase64Props) => {
  const txRead = useContractRead({
    addressOrName: contractAddress,
    contractInterface: erc721ABI,
    functionName: "tokenURI",
    args: [tokenId],
  });

  const [imgSrc, setImgSrc] = React.useState();
  React.useEffect(() => {
    if (txRead.data) {
      (async () => {
        if(txRead.data) {
        const data = await fetch(txRead.data as unknown as string);
        const json = await data.json();
        setImgSrc(json.image);
        }
      })();
      async () => {};
    }
  }, [txRead.data]);

  if (!txRead.data || !txRead.isSuccess) return null;
  return <img className={className} src={imgSrc} />;
};

export default ERC721ImageBase64;
