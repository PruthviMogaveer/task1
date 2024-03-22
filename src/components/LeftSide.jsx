import React, { useState } from "react";

const LeftSide = ({ data, setSelectedValue }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (key) => {
    setSelectedOption(key === selectedOption ? null : key);
    setSelectedValue(data[key]);
  };

  return (
    <div className="bg-gray-900 text-white md:h-screen">
      <ul className="max-sm:py-4 w-full flex flex-wrap flex-col items-start relative py-4 max-md:py-0 max-md:flex-row max-md:items-center max-md:justify-center">
        {Object.keys(data).map((key) => (
          <li
            key={key}
            className={`${
              selectedOption === key
                ? "md:w-full md:bg-slate-700 md:h-full"
                : ""
            }group max-md:flex flex-col items-center justify-center w-full p-2 md:hover:bg-slate-700 pl-[16%] max-md:px-4 max-md:w-auto max-md:py-6 max-sm:py-4 max-sm:text-center py-4 transition-all duration-200 text-slate-100 text-base font-semibold max-md:text-sm max-md:font-medium max-sm:text-xs`}
            onClick={() => handleOptionClick(key)}
          >
            {key}
            <div
              className={`${
                selectedOption === key
                  ? "max-md:w-full max-md:h-[0.05rem] max-md:bg-slate-100 max-md:mt-1"
                  : "max-md:group-hover:w-full max-md:h-[0.05rem] max-md:bg-slate-100 max-md:mt-1 "
              }`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSide;
