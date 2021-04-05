import React from "react";

const FavoriteComponent = ({ city, selectCity, removeCity }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-xs-12 city-text">
        {`location: ${city.LocalizedName}, locationId: ${city.Key}`}
      </div>

      <div className="col-md-6 col-xs-12">
        <button className="button " onClick={selectCity}>
          click to see the Weather!
        </button>
        <button className="delete" onClick={removeCity}>
          Delete
        </button>
      </div>
    </div>
  </div>
);
export default FavoriteComponent;
