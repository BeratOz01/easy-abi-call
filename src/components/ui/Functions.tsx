import React from "react";

// React Redux
import { useSelector } from "react-redux";

// Custom Component
import FunctionCard from "./FunctionCard";

const Functions = () => {
  const abi = useSelector((state: any) => state.abi);
  return (
    <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4`}>
      {abi &&
        abi.abi.map((elem: any, idx: number) => {
          return <FunctionCard key={idx} elem={elem} />;
        })}
    </div>
  );
};

export default Functions;
