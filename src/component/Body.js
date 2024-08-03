import { useState, useEffect } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import useOnline from "../utils/useOnline";
function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.title?.toLowerCase().includes(searchTxt?.toLowerCase())
  );
  return filterData;
}
export const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestuarants] = useState([]);
  const [allrestaurants, setAllRestuarants] = useState([]);

  useEffect(() => {
    console.log("heeloo");
    setRestuarants(restaurantList);
    setAllRestuarants(restaurantList);
    // getRestarants();
  }, [searchTxt]);

  // async function getRestarants() {
  //   const data = await fetch(
  //     "https://www.bigbasket.com/listing-svc/v2/products?type=pc&slug=dairy&page=1"
  //   );
  //   const json = await data.json();
  //   console.log(",jhsdf", json);
  //   // setRestuarants(json.data.cards)
  // }

  // if (restaurants?.length === 0) {
  //   return <h1> No product is match to your search</h1>;
  // }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴Offline,Please check your internet connection</h1>;
  }
  return allrestaurants.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <>
      <div className="search-container p-5 bg-pink-100 my-5 shadow-xl rounded-lg">
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2 border-cyan-950"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        {/* <h1>{searchClicked}</h1> */}
        <button
          className="search-btn p-2 m-2 bg-purple-900 hover:bg-purple-500 text-white rounded-lg"
          onClick={() => {
            const data = filterData(searchTxt, allrestaurants);
            setRestuarants(data);
            // setAllRestuarants(restaurantList)
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
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
