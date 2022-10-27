import AffiliateFormPreRegister from "@/components/Affiliate/AffiliateFormPreRegister";
import TermsOfServiceCore from "@/components/TermsOfServiceCore";
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
      <section className="py-32 card">
        <div className="container mx-auto max-w-screen-md text-left py-32">
          <div>
            <h1 className="title-font font-bold text-5xl mb-2 ">
              Terms of Services
            </h1>
            <hr className="my-10" />
            <h5 className="font-bold text-3xl">tl;dr:</h5> <br />
            <p className="leading-relaxed text-lg">
              <span className="font-bold">Web3 Savings Network is a free service.</span>{" "}
              We do not collect any personal information. We do not sell your
              data. We do not use cookies. We do not use tracking pixels. We do
              not use analytics. We do not use third-party services. We do not
              use ads. We do not use affiliate links. We do not use affiliate
              tracking.
            </p>
            <h3 className="font-normal text-lg">What Chances Cards IS NOT.</h3>
            <ul className="list-disc pl-8">
              <li>
                <span className="">
                  Web3 Savings Network is NOT a real savings account.
                </span>
              </li>
              <li>
                <span className="">
                  Web3 Savings Network is NOT a replacement for a real savings account.
                </span>
              </li>
              <li>
                <span className="">
                  Web3 Savings Network is NOT a financial service.
                </span>
              </li>
              <li>
                <span className="">
                  Web3 Savings Network is NOT an investment service.
                </span>
              </li>
              <li>
                <span className="">
                  Web3 Savings Network is NOT responsible for your actions on blockchain
                  networks i.e Ethereum, etc...
                </span>
              </li>
            </ul>
            <h3 className="font-normal text-lg">What Web3 Savings Network IS.</h3>
            <ul className="list-disc pl-8">
              <li>
                <span className="">Web3 Savings Network is a FREE website.</span>
              </li>
              <li>
                <span className="">
                  Web3 Savings Network is a FREE to activate NFT with no monetary value.
                </span>
              </li>
              <li>
                <span className="">
                  Web3 Savings Network is a graphical representation of a blockchain
                  account actions.
                </span>
              </li>
            </ul>
            <TermsOfServiceCore />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default TermsOfService;
