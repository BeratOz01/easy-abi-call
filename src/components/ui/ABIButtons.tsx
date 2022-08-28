import React from "react";

// Constant
import { ABI_BUTTONS, SECTION_INDEXES } from "../constants";

// Redux
import { useSelector, useDispatch } from "react-redux";

type IProps = {
  className?: string;
};

const ABIButton: React.FC<IProps> = ({ className = "" }) => {
  const dispatch = useDispatch();
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
    <div
      className={`grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ${className}`}
    >
      {ABI_BUTTONS.map((abi, idx: number) => (
        <React.Fragment key={idx}>
          {SECTION_INDEXES[idx] && (
            <React.Fragment>
              {idx !== 0 && <div className=" lg:col-span-2" />}
              <div className="flex justify-center">
                <p>{SECTION_INDEXES[idx]}</p>
              </div>
            </React.Fragment>
          )}
          <button
            type="button"
            className={`border mono-regular text-green-500 font-medium rounded-lg text-sm h-full bg-gray-800 border-gray-700 hover:bg-gray-700 mr-2 mb-2 ${
              indexes.includes(idx) ? "bg-green-500 text-black" : ""
            }`}
            onClick={() => {
              if (isExistOnABI(idx))
                dispatch({
                  type: "REMOVE_FROM_ABI",
                  payload: {
                    abi: abi.abi,
                    idx: idx,
                  },
                });
              else onClickAdd(abi, idx);
            }}
          >
            {abi.name}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ABIButton;
