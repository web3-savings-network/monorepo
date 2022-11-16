import {
  ERC721Attributes,
  ERC721Description,
  ERC721Name,
} from "@turbo-eth/erc721-wagmi";
import { useNetworkContractByChainId } from "@web3-savings-cards/deployments";
import { ResponsiveMobileAndDesktop } from "@web3-savings-cards/framework-react";
import classNames from "classnames";
import Link from "next/link";
import { useAccount, useNetwork } from "wagmi";

import { FormMintWeb3Card } from "@/components/FormMintWeb3Card";
import { IsERC721KMinted } from "@/components/IsERC721KMinted";
import { Web3CardRender } from "@/components/Web3CardRender";
import { useWeb3CardRead } from "@/hooks/useWeb3CardRead";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const IsMinted = (props) => {
  const { chain } = useNetwork();
  const contract = useNetworkContractByChainId(chain?.id, "Web3Card");
  const account = useAccount();
  const txRead = useWeb3CardRead(contract?.address, "belongsTo", [
    account.address,
  ]);

  return (
    <>
      <div className="flex h-[100%] items-center">
        <div className="container mx-auto grid max-w-screen-xl grid-cols-12 gap-y-10 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-4 ">
            <div className="">
              <ERC721Name
                className="text-4xl font-bold"
                contractAddress={contract.address}
                tokenId={txRead.data}
              />
              <ERC721Description
                className="text-xl font-bold"
                contractAddress={contract.address}
                tokenId={txRead.data}
              />
            </div>
            <div className="my-4" />
            <ERC721Attributes
              classNameLabel="text-xs my-1"
              classNameValue="tag tag-cloud text-xs my-1"
              contractAddress={contract.address}
              tokenId={txRead.data}
            />
          </div>
          <div className="flex-center col-span-12 flex flex-col items-center justify-center border-l-2 lg:col-span-8">
            <Web3CardRender className="rounded-lg shadow-md hover:shadow-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

const SectionMobile = () => (
  <section className="py-32">
    <div className="flex-center flex flex-col">
      <h3 className="text-3xl font-normal">Coming Soon</h3>
      <p className="">Are ypu ready to start winning!?</p>
      <div className="my-4" />
      <img src="/img/card-stack.png" className="max-auto w-2/3 blur-md" />
    </div>
  </section>
);

const SectionDesktop = () => {
  const classes = classNames("py-32 content");
  const { chain } = useNetwork();
  const contract = useNetworkContractByChainId(chain?.id, "Web3Card");

  return (
    <div className={classes}>
      <IsERC721KMinted contractAddress={contract?.address}>
        <>
          <div className="my-12" />
          <div className="container mx-auto grid max-w-screen-xl grid-cols-12 gap-y-10 lg:gap-x-10">
            <div className="order-2 col-span-12 p-10 lg:order-1 lg:col-span-4 lg:p-0">
              <h3 className="text-4xl font-bold">Web3 Savings Cards</h3>
              <div className="my-6" />
              <h3 className="text-xl font-bold">
                What is a Web3 Savings Card?
              </h3>
              <p className="">
                A Web3 Savings Card is a digital collectible connected to a Web3
                Savings protocol. Save money with PoolTogether and unlock the
                power of DeFi. Safe, secure, and easy to use.{" "}
                <span className="font-bold">It's what you deserve.</span>
              </p>
              <ul className="list list-disc pl-8">
                <li>Save money with PoolTogether</li>
                <li>Unlock the power of DeFi</li>
                <li>Safe, secure, and easy to use</li>
              </ul>
              <div className="my-6" />
              <h3 className="text-xl font-bold">The Key To Web3</h3>
              <p className="">
                Web3 Savings Cards are designed to help you get started with
                with cryptocurrency the right way: self-custody, easy-to-use,
                and a time-tested money management strategy.{" "}
                <span className="font-bold">Saving with friends</span>.
              </p>
            </div>
            <div className="flex-center order-1 col-span-12 flex flex-col items-center justify-center border-l-2 lg:order-2 lg:col-span-8">
              <>
                <div className="max-w-xl">
                  <FormMintWeb3Card />
                  <div className="my-6" />
                  <p className="text-center text-xs">
                    By connecting a wallet and activating a Web3 Savings Card,
                    <br />
                    you agree to the{" "}
                    <Link href={"/terms-of-service"}>Terms of Service</Link> and
                    the <Link href={"/privacy-policy"}>Privacy Policy</Link>.
                  </p>
                </div>
              </>
            </div>
          </div>
          <div className="my-20" />
          <p className="text-center">
            Web3 Savings Cards are currently available on Optimism and Polygon
            blockchain networks.
          </p>
        </>
        <IsMinted />
      </IsERC721KMinted>
    </div>
  );
};

const Index = () => (
  <Main
    meta={
      <Meta
        title={`${AppConfig.title} | ${AppConfig.description}`}
        description={AppConfig.description}
      />
    }
  >
    <ResponsiveMobileAndDesktop>
      <SectionDesktop />
      <SectionDesktop />
    </ResponsiveMobileAndDesktop>
  </Main>
);

export default Index;
