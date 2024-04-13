import React from "react";
import data from "../../data.json";
import SingleCity from "../SingleCity/SingleCity";

const SuggestionComponent = ({ value }) => {
  const filteredData =
    value?.length > 0 &&
    data?.filter((d) => d?.city?.toLowerCase()?.includes(value?.toLowerCase()));

  console.log(filteredData);
  return (
    <div>
      {filteredData?.length > 0 &&
        filteredData?.map((data) => (
          <SingleCity key={data?.code} data={data} />
        ))}
    </div>
  );
};

export default SuggestionComponent;
