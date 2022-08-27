import React from "react";

// React Helmet
import { Helmet } from "react-helmet";

// Metamask Button
import MetamaskButton from "./components/ui/MetamaskButton";

// Web3 Hooks
import { useWeb3 } from "./components/providers";

function App() {
  const { connect } = useWeb3();

  return (
    <React.Fragment>
      <Helmet>
        <style>{"body { background-color:black }"}</style>
      </Helmet>
      <nav>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 my-20 flex-col lg:flex-row">
          <div className="flex items-center">
            <p className="self-center text-white mono-regular whitespace-nowrap text-2xl">
              # Easy ABI Call #
            </p>
          </div>
          <div className="flex items-center mt-5 lg:mt-0">
            <MetamaskButton onClick={() => connect()} />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default App;
