import { useState, useEffect } from "react";
import { useContractRead, erc721ABI } from "wagmi";

interface ERC721Metadata {
  name: string;
  description: string;
  image: string;
  externalLink: string;
  feeRecipient: string;
  attributes: {
    trait_type: string;
    value: string;
  };
}

// @ts-ignore
export function useERC721ContractMetadata({
  contractAddress,
}: {
  contractAddress: string;
  tokenId: string;
}): ERC721Metadata | undefined {
  const [tokenData, setTokenData] = useState<ERC721Metadata | undefined>();
  const txRead = useContractRead({
    addressOrName: contractAddress,
    contractInterface: erc721ABI,
    functionName: "contractURI",
    args: [],
  });

  useEffect(() => {
    if (txRead.data) {
      (async () => {
        const data = await fetch(txRead?.data as unknown as string);
        setTokenData(await data.json());
      })();
      async () => {};
    }
  }, [txRead.data]);

  return tokenData;
}

export default useERC721ContractMetadata;
