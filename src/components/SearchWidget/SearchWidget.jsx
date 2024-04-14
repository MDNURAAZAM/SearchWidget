import React, { useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";

const SearchWidget = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className=" flex lg:mt-24 md: mt-16">
      <div className="flex w-5/6 gap-2 ">
        <SearchComponent text={"From"} value={from} setValue={setFrom} />
        <div>
          <button className="bg-green-500 p-4" onClick={handleSwap}>
            swap
          </button>
        </div>
        <SearchComponent text={"To"} value={to} setValue={setTo} />
        <SearchComponent text={"To"} />
        <SearchComponent text={"To"} />
        <SearchComponent text={"To"} />
        <div>
          <button className="bg-green-500 p-4">scrach</button>
        </div>
      </div>
    </div>
  );
};

export default SearchWidget;
