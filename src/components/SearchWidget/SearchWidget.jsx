import React, { useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import DatePickerComponent from "../DatePicker/DatePickerComponent";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import WrapperComponent from "../WrapperComponent/WrapperComponent";

const SearchWidget = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 mt-8 md:mt-20">
        <div className="flex gap-1 relative">
          <WrapperComponent text={"From"}>
            <SearchComponent value={from} setValue={setFrom} />
          </WrapperComponent>
          <div className="absolute left-[46%] top-3 bg-white z-10">
            <button className="" onClick={handleSwap}>
              <MdOutlineSwapHorizontalCircle className="text-4xl" />
            </button>
          </div>
          <WrapperComponent text={"To"}>
            <SearchComponent value={to} setValue={setTo} />
          </WrapperComponent>
        </div>
        <div className="flex gap-2">
          <WrapperComponent text={"Depart"}>
            <DatePickerComponent />
          </WrapperComponent>
          <WrapperComponent text={"Return"}>
            <DatePickerComponent />
          </WrapperComponent>
          <SearchComponent text={"To"} />
        </div>
        {/* <div className="flex">
          <button className="bg-green-500 p-4">Search</button>
        </div> */}
      </div>
    </div>
  );
};

export default SearchWidget;
