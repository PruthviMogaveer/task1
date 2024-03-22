import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import data from "../constants/stagesData";
import useSelectedValue from "../hooks/useSelectedValue";

const DashboardLayout = () => {
  const [selectedValue, handleValueClick] = useSelectedValue();
  const [isHoverd, setIsHoverd] = useState(null);

  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <ul className="flex gap-8 justify-start items-start mt-8 ml-8 max-md:justify-center flex-wrap">
          {value.map((item, index) => (
            <div key={index} className="relative">
              <li
                className=" flex items-center justify-center p-6 h-24 w-28 rounded-md bg-slate-50 shadow-md text-base font-semibold text-slate-800 hover:scale-105 transition-all duration-100 cursor-pointer max-md:font-medium max-md:text-[1rem] max-md:p-4 max-md:w-24 max-md:h-20 max-sm:text-sm max-sm:w-20 max-sm:h-[5rem]"
                onMouseEnter={() => setIsHoverd(index)}
                onMouseLeave={() => setIsHoverd(null)}
              >
                {item}
              </li>
              {isHoverd === index && (
                <div className="absolute -top-11 -right-8 bg-slate-900 bg-opacity-30 rounded-sm w-32 h-20 p-1 text-slate-950 text-sm max-md:w-24 max-md:h-16">
                  info - {item}
                </div>
              )}
            </div>
          ))}
        </ul>
      );
    } else if (typeof value === "object" && value !== null) {
      return (
        <ul className="flex gap-8 justify-start items-start mt-8 ml-8 max-md:justify-center flex-wrap">
          {Object.keys(value).map((key) => (
            <div key={key} className="relative">
              <li
                className=" flex items-center justify-center p-6 h-24 w-28 rounded-md bg-slate-50 shadow-md text-base font-semibold text-slate-800 hover:scale-105 transition-all duration-100 cursor-pointer max-md:font-medium max-md:text-[1rem] max-md:p-4 max-md:w-24 max-md:h-20 max-sm:text-sm max-sm:w-20 max-sm:h-[5rem]"
                onClick={() => handleValueClick(value[key])}
                onMouseEnter={() => setIsHoverd(key)}
                onMouseLeave={() => setIsHoverd(null)}
              >
                {key}
              </li>
              {isHoverd === key && (
                <div className="absolute -top-11 -right-8 bg-slate-900 bg-opacity-30 rounded-sm w-32 h-20 p-1 text-slate-950 text-sm max-md:w-24 max-md:h-16">
                  info - {key}
                </div>
              )}
            </div>
          ))}
        </ul>
      );
    } else {
      return <div>{value}</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-x-hidden">
      <div className="md:w-1/5">
        <LeftSide data={data} setSelectedValue={handleValueClick} />
      </div>
      <div className="md:w-4/5">
        <RightSide renderValue={renderValue} selectedValue={selectedValue} />
      </div>
    </div>
  );
};

export default DashboardLayout;
