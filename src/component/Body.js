import { useState, useEffect } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import useOnline from "../utils/useOnline";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

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
    setRestuarants(restaurantList);
    setAllRestuarants(restaurantList);
  }, [searchTxt]);
  console.log("restaurantList", restaurantList);
  const dispatch = useDispatch();
 
  const handleAddItem = (restIdToFind) => {
    const itemInCart = restaurantList.find(
      (restaurantList) => restaurantList.id === restIdToFind
    );
    console.log("itemInCart11", itemInCart);
    if (itemInCart) {
      dispatch(addItem(itemInCart));
    }
  };
 
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
      <div className="search-container p-5 bg-pink-100 my-5 shadow-xl rounded-lg ">
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2 border-cyan-950"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn p-2 m-2 bg-purple-900 hover:bg-purple-500 text-white rounded-lg"
          onClick={() => {
            const data = filterData(searchTxt, allrestaurants);
            setRestuarants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap content-center">
        {restaurants?.length === 0 ? (
          <h1 className="  p-5 bg-pink-100 my-5 shadow-xl rounded-lg">
            {" "}
            No product is match to your search
          </h1>
        ) : (
          restaurants.map((res) => {
            return (
              <RestaurantCard handleAddItem={handleAddItem} restaurantList={res} isAddItem={true} />
            );
          })
        )}
      </div>
    </>
  );
};
