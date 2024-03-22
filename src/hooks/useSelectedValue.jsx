import { useState } from "react";

const useSelectedValue = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueClick = (value) => {
    if (Array.isArray(value) && value.length === 0) {
      setSelectedValue(selectedValue);
    } else {
      setSelectedValue(value);
    }
  };

  return [selectedValue, handleValueClick];
};

export default useSelectedValue;
