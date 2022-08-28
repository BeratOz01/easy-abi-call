import React from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";

// React Icons
import { FaPaintRoller } from "react-icons/fa";

const AbiDisplay = () => {
  const abi = useSelector((state: any) => state.abi.abi);
  const [abiInput, setAbiInput] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length === 0) {
      setAbiInput("");
      setError(false);
      dispatch({ type: "REMOVE_ALL" });
    }
    setAbiInput(e.target.value);
  };

  React.useEffect(() => {
    if (abi) setAbiInput(JSON.stringify(abi, null, 2));
  }, [abi]);

  return (
    <>
      <textarea
        rows={10}
        className={`bg-gray-800 border-2 py-2 px-4 border-green-500 text-white w-full resize-none h-full focus:outline-none ${
          error ? "border-red-500" : ""
        }`}
        placeholder="Enter your ABI here..."
        onChange={onChange}
        value={abiInput}
      />
      <FaPaintRoller
        className="text-white mt-2 cursor-pointer bg-green-500 p-2 rounded-lg hover:bg-black hover:text-green-500 transition duration-500 ease-linear"
        size={35}
        onClick={() => {
          try {
            JSON.parse(abiInput);
            dispatch({ type: "SET_ABI", payload: JSON.parse(abiInput) });
            setError(false);
          } catch (e) {
            setError(true);
          }
        }}
      />
    </>
  );
};

export default AbiDisplay;
