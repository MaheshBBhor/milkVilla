import { useState } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

export const Body = () => {
  // const searchText="Mens Casual "
  const [searchTxt, setSearchTxt] = useState("");
  const searchClick = false;
  const [searchClicked, setSearchclicked] = useState("false");
  //   const [searchTxt, setSearchTxt] =searchVar
  console.log("searchTxt", searchTxt);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <h1>{searchClicked}</h1>
        <button
          className="search-btn"
          onClick={() => {
            if (searchClicked === "true") {
                setSearchclicked("false");
            } else {
              setSearchclicked("true");
            }
          }}
        >
          Search
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {restaurantList.map((res) => {
          return <RestaurantCard restaurantList={res} />;
        })}
      </div>
    </>
  );
};
