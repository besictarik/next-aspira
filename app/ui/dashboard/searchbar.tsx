import React from "react";
import SearchIcon from "../icons/search-icon";

const SearchBar = () => {
  return (
    <div className="inline-flex w-[300px] items-center rounded-full bg-[#e3e3e3]">
      <input
        type="text"
        id="text"
        name="text"
        placeholder="Search something here..."
        className="h-14 w-full bg-transparent py-[6px] pl-5 pr-3 text-sm font-normal text-[#b1b1b1] placeholder:text-sm placeholder:text-[#b1b1b1] focus:outline-none active:outline-none"
      />
      <SearchIcon className="ml-3 mr-6" />
    </div>
  );
};

export default SearchBar;
