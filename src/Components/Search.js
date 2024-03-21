import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";

function Search({ setQuery }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ location: city });
  };
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justifiy-center space-x-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          placeholder="Search for city"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase "
        />
        <UilSearch
          size={25}
          onClick={handleSearchClick}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
    </div>
  );
}

export default Search;
