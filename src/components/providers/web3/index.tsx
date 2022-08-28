import React, { ReactNode, createContext } from "react";

// Metamask Detect Provider
import detectEthereumProvider from "@metamask/detect-provider";

// Web3
import Web3 from "web3";

// Web3 Types
import { HttpProvider } from "web3-core";

// Setup Hooks
import { setupHooks } from "./hooks/setupHooks";

// Context Value Type
type Web3State = {
  connect: () => void;
};

const Web3Context = createContext<any | Partial<Web3State>>(null);

const createWeb3State = ({
  web3,
  provider,
  isLoading,
}: {
  web3: Web3 | null;
  provider: any;
  isLoading: boolean;
}) => {
  return {
    web3,
    provider,
    isLoading,
    hooks: setupHooks(web3 as Web3, provider),
  };
};

export default function Web3Provider({ children }: { children: ReactNode }) {
  const [web3Api, setWeb3Api] = React.useState(
    createWeb3State({
      web3: null,
      provider: null,
      isLoading: true,
    })
  );

  React.useEffect(() => {
    const loadProvider = async () => {
      const Provider = await detectEthereumProvider();

      if (Provider) {
        const web3 = new Web3(Provider as HttpProvider);
        setWeb3Api(
          createWeb3State({
            web3,
            provider: Provider as HttpProvider,
            isLoading: false,
          })
        );
      } else {
        const publicWeb3 = new Web3("https://api.avax.network/ext/bc/C/rpc");
        setWeb3Api((api) => ({
          ...api,
          web3: publicWeb3,
          isLoading: false,
        }));
        console.error("Please, install Metamask.");
      }
    };
    loadProvider();
  }, []);

  const _web3Api = React.useMemo(() => {
    const { web3, provider, isLoading } = web3Api;
    return {
      ...web3Api,
      isWeb3Loaded: web3 != null,
      requireInstall: !isLoading && !web3,
      connect: provider
        ? async () => {
            try {
              await provider.request({ method: "eth_requestAccounts" });
            } catch (error) {
              window.location.reload();
            }
          }
        : () => {
            console.error(
              "Can not connect to metamask, try to reload your browser please."
            );
          },
      switchNetwork: provider
        ? async () => {
            try {
              await provider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0xa86a" }],
              });
            } catch (error) {
              // console.error(error);
              window.location.reload();
            }
          }
        : () => {
            console.error("Can not change network");
          },
    };
  }, [web3Api]);

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return React.useContext(Web3Context);
}

export function useHooks(cb: any) {
  const { hooks } = useWeb3();

  return cb(hooks);
}
