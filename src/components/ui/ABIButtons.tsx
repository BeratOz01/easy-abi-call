import { ABI_BUTTONS } from "../constants";

// Redux
import { useSelector, useDispatch } from "react-redux";

const ABIButton = () => {
  const dispatch = useDispatch();
  const abi = useSelector((state: any) => state.abi.abi);
  const indexes = useSelector((state: any) => state.abi.indexes);

  const onClickAdd = (elem: any, idx: number) => {
    dispatch({
      type: "ADD_TO_ABI",
      payload: {
        abi: elem,
        idx: idx,
      },
    });
  };

  const isExistOnABI = (idx: number) => {
    return indexes.includes(idx);
  };

  return (
    <>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        onClick={() => console.log(abi)}
      >
        {ABI_BUTTONS.map((abi, idx) => (
          <button
            key={idx}
            type="button"
            className={`border mono-regular text-green-500 font-medium rounded-lg text-sm h-full focus:ring-gray-600 bg-gray-800 border-gray-700 hover:bg-gray-700 mr-2 mb-2 ${
              indexes.includes(idx) ? "bg-green-500 text-black" : ""
            }`}
            onClick={() => {
              if (isExistOnABI(idx))
                dispatch({
                  type: "REMOVE_FROM_ABI",
                  payload: {
                    idx: idx,
                    abi,
                  },
                });
              else onClickAdd(abi, idx);
            }}
          >
            {abi.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default ABIButton;
