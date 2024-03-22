import React from "react";

const RightSide = ({ selectedValue, renderValue }) => {
  return (
    <div className="bg-gray-200 p-4 md:h-screen max-md:h-screen">
      {selectedValue && renderValue(selectedValue)}
    </div>
  );
};

export default RightSide;
