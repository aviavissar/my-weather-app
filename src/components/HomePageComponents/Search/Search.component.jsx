import React, { useState, useEffect } from "react";
import { fetchCitiesArr } from "../../../services/fetch.js";
import useDebounce from "../../../services/useDebounce";

const SearchComponent = ({ sendCityObj }) => {
  const [display, setDisplay] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDisplay, setselectedDisplay] = useState("");
  const [citiesArr, setCitiesArr] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const doAsync = async () => {
        setCitiesArr(await fetchCitiesArr(debouncedSearchTerm));
      };
      doAsync();
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }, [debouncedSearchTerm]);

  const selectItem = (city) => {
    setselectedDisplay(`${city.LocalizedName}, ${city.Country.LocalizedName}`);
    sendCityObj(city);
    setDisplay("none");
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
            value={selectedDisplay}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setselectedDisplay(e.target.value);
            }}
          />

          <div className="select-box--items" style={{ display: display }}>
            {console.log("citarr", citiesArr)}
            {citiesArr.length > 0
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
