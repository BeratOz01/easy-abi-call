import Web3 from "web3";
import { handler as createAccountHook } from "./useAccount";

export const setupHooks = (web3: Web3, provider: any): { useAccount: any } => {
  return {
    useAccount: createAccountHook(web3, provider),
  };
};
