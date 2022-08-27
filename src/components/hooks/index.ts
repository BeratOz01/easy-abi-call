import { useHooks } from "../providers/web3";

const _isEmpty = (data: any) => {
  return (
    data == null ||
    data === "" ||
    (Array.isArray(data) && data.length === 0) ||
    (data.constructor === Object && Object.keys(data).length === 0)
  );
};

const enhanceHook = (swrRes: any) => {
  const { data, error } = swrRes;
  const hasInitialResponse = !!(data || error);
  const isEmpty = hasInitialResponse && _isEmpty(data);

  return {
    ...swrRes,
    hasInitialResponse,
    isEmpty,
  };
};

export const useAccount = () => {
  const res = enhanceHook(useHooks((hooks: any) => hooks.useAccount)());

  return res;
};
