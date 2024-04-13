import React from "react";

const SingleCity = ({ data }) => {
  const { city, country, code } = data || {};
  return (
    <div>
      <div>
        {city} {` (${code})`}
      </div>
      <div>{country} </div>
    </div>
  );
};

export default SingleCity;
