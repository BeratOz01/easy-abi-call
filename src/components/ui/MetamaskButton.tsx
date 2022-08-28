import React from "react";

// Use Account Hook
import { useAccount } from "../hooks";

function MetamaskButton({ onClick }: { onClick: () => void }) {
  const { account } = useAccount();

  return (
    <button
      type="button"
      className="border mono-regular my-auto text-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ocus:ring-gray-600 bg-gray-800 border-gray-700 hover:bg-gray-700 mr-2 mb-2"
      onClick={onClick}
    >
      {account && account?.data ? <>{account?.data}</> : <p>Connect</p>}
    </button>
  );
}

export default MetamaskButton;
