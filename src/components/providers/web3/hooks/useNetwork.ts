import React from "react";

// Web3
import Web3 from "web3";

// SWR
import useSWR from "swr";

const targetNetwork = 43114; // Mainnet
// const targetNetwork = 43113; // FUJI Tesnet

export const handler = (web3: Web3, provider: any) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/network" : null),
    async () => {
      const chainId = await web3.eth.getChainId();

      if (!chainId) {
        throw new Error("Cannot retreive network. Please refresh the browser.");
      }

      return chainId;
    }
  );

  React.useEffect(() => {
    provider &&
      provider.on("chainChanged", (chainId: string) => {
        mutate(parseInt(chainId, 16));
      });
  }, [mutate]);

  return {
    data,
    mutate,
    target: targetNetwork,
    isSupported: data === targetNetwork,
    ...rest,
  };
};
