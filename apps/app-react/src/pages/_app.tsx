import "../styles/global.css";
import "../styles/app.css";
import "@web3-savings-cards/framework-react/src/tailwind.css";
import "@rainbow-me/rainbowkit/styles.css";
import React from "react";

import {
  RainbowKitProvider,
  connectorsForWallets,
  getDefaultWallets,
  wallet,
} from "@rainbow-me/rainbowkit";
import { ChanceCardsProvider } from "@web3-savings-cards/framework-react";
import type { AppProps } from "next/app";
import { ModalProvider } from "react-modal-hook";
import { WagmiConfig, chain, configureChains, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

import IsMounted from "@/components/IsMounted";
import { AppConfig } from "@/utils/AppConfig";
import {
  ALCHEMY_ID,
  ENABLE_TESTNETS,
  FORKING_ENABLED,
} from "@/utils/constants";

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.optimism,
    chain.polygon,
    chain.arbitrum,
    ...(ENABLE_TESTNETS === "true"
      ? [chain.hardhat, chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
      : []),
  ],
  FORKING_ENABLED
    ? [
        // jsonRpcProvider({
        //   priority: 0,
        //   rpc: () => ({
        //     http: "http://127.0.0.1:8545",
        //   }),
        // }),
        // alchemyProvider({
        //   apiKey: "PNrcp92HqtUIfo4SEQGG38gkGzHUglS5",
        //   priority: 1,
        // }),
        jsonRpcProvider({
          rpc: () => ({
            http: "https://eth-mainnet.g.alchemy.com/v2/5oRK-2Gt3A6sKHfISqsC15ozeRyyXjU5",
          }),
        }),
        jsonRpcProvider({
          rpc: () => ({
            http: "https://opt-mainnet.g.alchemy.com/v2/PNrcp92HqtUIfo4SEQGG38gkGzHUglS5",
          }),
        }),
        jsonRpcProvider({
          rpc: () => ({
            http: "https://polygon-mainnet.g.alchemy.com/v2/2diTMz1D4GTasTYOiBnErNhZqyXcCOA0",
          }),
        }),
        alchemyProvider({
          apiKey: "PNrcp92HqtUIfo4SEQGG38gkGzHUglS5",
          priority: 1,
        }),
        publicProvider(),
      ]
    : [
        jsonRpcProvider({
          priority: 0,
          rpc: () => ({
            http: "https://polygon-mainnet.g.alchemy.com/v2/2diTMz1D4GTasTYOiBnErNhZqyXcCOA0",
          }),
        }),
        jsonRpcProvider({
          rpc: () => ({
            http: "https://eth-mainnet.g.alchemy.com/v2/5oRK-2Gt3A6sKHfISqsC15ozeRyyXjU5",
          }),
        }),
        jsonRpcProvider({
          priority: 0,
          rpc: () => ({
            http: "https://opt-mainnet.g.alchemy.com/v2/PNrcp92HqtUIfo4SEQGG38gkGzHUglS5",
          }),
        }),
        // alchemyProvider({
        //   apiKey: "PNrcp92HqtUIfo4SEQGG38gkGzHUglS5",
        //   // priority: 1,
        // }),
        publicProvider(),
      ]
);

const { wallets } = getDefaultWallets({
  appName: AppConfig.title,
  chains,
});

const dappInfo = {
  appName: AppConfig.title,
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      wallet.argent({ chains }),
      wallet.trust({ chains }),
      wallet.ledger({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  // const [mode, setMode] = React.useState<"light" | "dark">("light");
  // const [defaultChecked, setDefaultChecked] = React.useState<boolean>(false);
  // useEffect(() => {
  //   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //     document.documentElement.classList.remove("light");
  //     setMode("dark");
  //     setDefaultChecked(true);
  //   } else {
  //     document.documentElement.classList.add("light");
  //     document.documentElement.classList.remove("dark");
  //     setMode("light");
  //     setDefaultChecked(false);
  //   }
  // }, []);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider appInfo={dappInfo} chains={chains}>
        <ModalProvider>
          <IsMounted>
            <ChanceCardsProvider>
              <Component {...pageProps} />
            </ChanceCardsProvider>
          </IsMounted>
        </ModalProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
