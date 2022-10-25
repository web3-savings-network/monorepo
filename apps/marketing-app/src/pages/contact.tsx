import TermsOfServiceCore from "@/components/TermsOfServiceCore";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import Link from "next/link";

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
      <section className="bg-white content">
        <div className="container mx-auto max-w-screen-md text-left py-32">
          <div>
            <h1 className="title-font font-bold text-5xl mb-2 ">Contact Us</h1>
            <hr className="my-10" />
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us:
            <div className="my-10" />
            <h2 className="title-font font-bold text-3xl mb-2 ">Twitter</h2>
            <hr className="my-5" />
            <a
              href="https://twitter.com/KamesGeraghty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-blue-500">@KamesGeraghty</span>
            </a>
            <div className="my-10" />
            <h2 className="title-font font-bold text-3xl mb-2 ">Email</h2>
            <hr className="my-5" />
            <a href="mailto:">
              <span className="text-blue-500">hello@web3savings.cards</span>
            </a>
            {/* <hr className="my-5" /> */}
            <div className="my-10" />
            <h2 className="title-font font-bold text-3xl mb-2 ">Join</h2>
            <hr className="my-5" />
            <div className="flex items-center">
              <Link href="/partner">
                <button className="btn btn-green">Partner</button>
              </Link>
              <div className="mx-2" />
              <Link href="/institution">
                <button className="btn btn-indigo">Institution</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default TermsOfService;
