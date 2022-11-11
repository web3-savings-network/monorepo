import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const TermsOfService = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <section className="content">
        <div className="container mx-auto max-w-screen-md text-left py-32">
          <div>
            <h1 className="title-font font-bold text-5xl mb-2 ">
              Web3 Savings Cards Disclaimer
            </h1>
            <hr className="my-10" />
            <p className="">
              Your use of the Web3 Savings Cards protocol involves various
              risks, including, but not limited to, losses while digital assets
              are being supplied to the PoolTogether protocol.
            </p>

            <p className="">
              Before using the Web3 Savings Cards protocol, you should review
              the relevant documentation to make sure you understand how the
              PoolTogether protocol and ERC721K framework works. Additionally,
              just as you can access email email protocols such as SMTP through
              multiple email clients, you can access the Web3 Savings Cards
              protocol through dozens of web or mobile interfaces. You are
              responsible for doing your own diligence on those interfaces to
              understand the fees and risks they present.
            </p>

            <p className="">
              THE Web3 Savings Cards NFT Collection IS PROVIDED "AS IS", AT YOUR
              OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. Although Universal
              Navigation Inc. d/b/a/ "Web3 Savings Cards" ( "Kames Cox Geraghty"
              ) developed much of the initial code for the Web3 Savings Cards
              protocol, it does not provide, own, or control the Web3 Savings
              Cards protocol, which is run by smart contracts deployed on the
              Ethereum blockchain.
            </p>
            <p className="">
              No developer or entity involved in creating the Web3 Savings Cards
              protocol will be liable for any claims or damages whatsoever
              associated with your use, inability to use, or your interaction
              with other users of, the Web3 Savings Cards NFT collection,
              including any direct, indirect, incidental, special, exemplary,
              punitive or consequential damages, or loss of profits,
              cryptocurrencies, tokens, or anything else of value.
            </p>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default TermsOfService;
