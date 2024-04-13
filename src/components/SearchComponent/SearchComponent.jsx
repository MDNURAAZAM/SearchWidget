import React, { useState } from "react";
import SuggestionComponent from "../SuggestionComponent/SuggestionComponent";

const SearchComponent = ({text}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "200px" }}>
      <input placeholder={text} value={value} onChange={handleChange} />
      {value?.length > 0 && <SuggestionComponent value={value} />}
    </div>
  );
};

export default SearchComponent;
