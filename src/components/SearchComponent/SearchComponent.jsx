import React, { useState } from "react";
import SuggestionComponent from "../SuggestionComponent/SuggestionComponent";

const SearchComponent = ({ text, value, setValue }) => {
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue?.length > 0) {
      setShow(true);
    }
    setValue(inputValue);
  };
  const handleCityClick = (data) => {
    setShow(false);
    setValue(`${data?.city} (${data?.code})`);
  };
  return (
    <div>
      <input
        className="p-4"
        placeholder={text}
        value={value}
        onChange={handleChange}
      />
      {show && (
        <SuggestionComponent value={value} handleCityClick={handleCityClick} />
      )}
    </div>
  );
};

export default SearchComponent;
