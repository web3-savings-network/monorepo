import FormMintChanceCard from "@/components/FormMintChanceCard";
import { ERC721KPreview } from "@chance-cards/framework-react";
import { Dashboard } from "@/templates/Dashboard";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { useNetworkContract } from "@chance-cards/deployments";

const Card = () => {
  const contract = useNetworkContract("localhost", "Web3Card");

  return (
    <Dashboard
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="dark: mx-auto bg-gradient-to-br from-neutral-100 via-neutral-100 to-neutral-200 py-32 text-center text-neutral-500 shadow-sm dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 dark:text-white">
        <div className="container mx-auto max-w-screen-sm">
          yo
          {/* <ERC721KPreview
            contractAddress={contract?.address}
            args={["0x761d584f1C2d43cBc3F42ECd739701a36dFFAa31"]}
          />
          <FormMintChanceCard className="flex flex-col" /> */}
        </div>
      </div>
    </Dashboard>
  );
};

export default Card;
