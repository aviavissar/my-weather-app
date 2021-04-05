import React, { useState, useEffect } from "react";
import useFetch from "../../../services/fetch.js";
import { useSelector } from "react-redux";

const SearchComponent = ({ sendCityObj }) => {
  let { fetchCitiesArr } = useFetch();
  const [display, setDisplay] = useState("none");
  const [inputValue, setInputValue] = useState("");

  let citiesArr = useSelector((state) => state.citiesInfo);

  const onSearchChange = (e) => {
    const cti = fetchCitiesArr(e.target.value);
    setInputValue(e.target.value);
    setDisplay("block");
    if (e.target.value === "") {
      setDisplay("none");
    }
  };

  const selectItem = (city) => {
    setInputValue(`${city.LocalizedName}, ${city.Country.LocalizedName}`);
    setDisplay("none");
    sendCityObj(city);
  };

  return (
    <div className="search">
      <div className=" row">
        <div className="col-12 find-location">
          <input
            type="text"
            autoComplete="off"
            placeholder="Find your location..."
            id="search"
            name="search"
            value={inputValue}
            onChange={onSearchChange}
          />

          <div className="select-box--items" style={{ display: display }}>
            {citiesArr !== undefined
              ? citiesArr.map((city, index) => {
                  return (
                    <div
                      key={city.Key}
                      className=""
                      onClick={() => selectItem(city)}
                      value={`${city.LocalizedName} ${city.Country.LocalizedName}`}
                    >
                      {`${city.LocalizedName} ${city.Country.LocalizedName}`}
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
