import React from "react";

const AddFavoritsComponent = ({ isFavorits, addToFavorits }) => (
  <div className="add-Favorits">
    <h3 className="list-item_title">
      {isFavorits ? (
        <i className="fas fa-heart">
          <br />
          <span>is Favorit</span>
        </i>
      ) : (
        <i className="far fa-heart">
          <br />
          <span>not in Favorites</span>
        </i>
      )}
    </h3>

    <button disabled={isFavorits} onClick={addToFavorits}>
      Add To Favorites
    </button>
  </div>
);

export default AddFavoritsComponent;
