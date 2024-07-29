import { useState, useEffect } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { Header } from "./Header";
import { Shimmer } from "./Shimmer";
function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.title?.toLowerCase().includes(searchTxt?.toLowerCase())
  );
  return filterData;
}
export const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const searchClick = false;
  // const [searchClicked, setSearchclicked] = useState("false");
  const [restaurants, setRestuarants] = useState([]);
  const [allrestaurants, setAllRestuarants] = useState([]);

  useEffect(() => {
    console.log("heeloo");
    setRestuarants(restaurantList);
    setAllRestuarants(restaurantList);
    getRestarants();
  }, [searchTxt]);
 
  async function getRestarants() {
    const data = await fetch(
      "https://www.bigbasket.com/listing-svc/v2/products?type=pc&slug=dairy&page=1"
    );
    const json = await data.json();
    console.log(",jhsdf", json);
    // setRestuarants(json.data.cards)
  }

  // if (restaurants?.length === 0) {
  //   return <h1> No product is match to your search</h1>;
  // }
  return allrestaurants.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <>
      {/* <Header/> */}

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
        {/* <h1>{searchClicked}</h1> */}
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, allrestaurants);
            setRestuarants(data);
            // setAllRestuarants(restaurantList)
          }}
        >
          Search
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {restaurants?.length === 0 ? (
          <h1> No product is match to your search</h1>
        ) : (
          restaurants.map((res) => {
            return <RestaurantCard restaurantList={res} />;
          })
        )}
      </div>
    </>
  );
};
