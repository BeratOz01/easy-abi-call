import React from "react";

// React Helmet
import { Helmet } from "react-helmet";

// Metamask Button
import MetamaskButton from "./components/ui/MetamaskButton";

// ABI Buttons
import ABIButton from "./components/ui/ABIButtons";

// Web3 Hooks
import { useWeb3 } from "./components/providers";

// React Icons
import { FiArrowUpRight } from "react-icons/fi";

// Abi Display Component
import AbiDisplay from "./components/ui/AbiDisplay";
import Functions from "./components/ui/Functions";

// React-redux
import { useDispatch } from "react-redux";

function App() {
  const { connect } = useWeb3();
  const dispatch = useDispatch();
  const [inputAddress, setInputAddress] = React.useState<string>("");

  React.useEffect(() => {
    const address = localStorage.getItem("address");
    if (address) {
      setInputAddress(address);
      dispatch({ type: "SET_ADDRESS", payload: address });
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <Helmet>
        <style>{"body { background-color:black }"}</style>
      </Helmet>
      {/* Header */}
      <nav>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 my-20 flex-col lg:flex-row">
          <div className="flex items-center">
            <p className="self-center text-white mono-regular whitespace-nowrap text-2xl mb-0">
              # Easy ABI Call #
            </p>
          </div>
          <div className="flex items-center mt-5 lg:mt-0">
            <MetamaskButton onClick={() => connect()} />
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="px-4 md:px-6 py-2.5 text-white mx-auto max-w-screen-xl mono-regular space-y-2 text-center lg:text-left">
        <p>
          Easy ABI Call is a web application for reading data from blockchain or
          sending transactions via UI. It is a simple way to read data from the
          blockchain with partial ABI.
        </p>
        <p>
          Currently Easy ABI Call only available for{" "}
          <a
            className="text-green-500 underline underline-offset-8"
            href="https://www.avax.network/"
            target={"_blank"}
            rel="noreferrer"
          >
            Avalanche C-Chain
            <FiArrowUpRight className="inline-block ml-0.5 my-auto" />
          </a>
          . As development of Easy ABI Call is in progress, we are going to add
          other networks.
        </p>
      </main>

      {/* Content */}
      <main className="px-4 md:px-6 py-2.5 text-white mx-auto max-w-screen-xl mono-regular space-y-2 text-center lg:text-left">
        <p className="text-3xl my-5">Usage</p>
        <p>1. Enter the address of the contract you want to interact with.</p>
        <p>2. Paste ABI of the contract or select built-in ABI fragments.</p>
        <p>
          3. Functions represented by the ABI, will appear on the right side of
          the screen.
        </p>
        <p className="">
          4.a Pass parameters (if any) and click
          <kbd className="mx-1.5 px-2 py-1 text-sm rounded-lg bg-gray-900 text-green-500">
            Query
          </kbd>
          !
        </p>
        <p className="text-red-600">
          4.b In order to send transaction from Easy ABI Call, do not forget to
          connect your Metamask account! Otherwise you will not be able to send
          transaction.
        </p>
        <p className="text-red-600">
          !! After adding custom ABI to text area, make sure to click paint icon
          for format check & update the ABI.
        </p>
      </main>

      {/* Application */}
      <main className="px-4 md:px-6 py-2.5 mt-5 text-white mx-auto max-w-screen-xl mono-regular space-y-2 text-center lg:text-left">
        <div className="flex flex-col mb-12">
          <p className="text-center mb-4">Contract Address</p>
          <input
            type="text"
            className="flex mx-auto w-3/6 mb-8 text-center h-10 bg-gray-900 border-4 border-green-500 focus:outline-none"
            placeholder="0x..."
            onChange={(e) => {
              setInputAddress(e.target.value);
            }}
            value={inputAddress}
            onBlur={(e) => {
              window.localStorage.setItem("address", e.target.value);
              dispatch({ type: "SET_ADDRESS", payload: e.target.value });
            }}
          />
          <ABIButton className="mb-8" />
          <AbiDisplay />
        </div>
        <Functions />
      </main>
    </React.Fragment>
  );
}

export default App;
