import Web3 from "web3";

// Hooks
import { handler as createAccountHook } from "./useAccount"; // useAccount
import { handler as createNetworkHook } from "./useNetwork"; // useNetwork

export const setupHooks = (
  web3: Web3,
  provider: any
): { useAccount: any; useNetwork: any } => {
  return {
    useAccount: createAccountHook(web3, provider),
    useNetwork: createNetworkHook(web3, provider),
  };
};
