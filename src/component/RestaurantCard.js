import { useState } from "react";

const RestaurantCard = ({ restaurantList, handleAddItem, isAddItem }) => {
  const [isItemAdded, setIsItemAdded] = useState(false);

  const handleClick = (id) => {
    handleAddItem(id);
    setIsItemAdded(true);
    setTimeout(() => setIsItemAdded(false), 500);
  };

  return (
    <div className="w-40 p-1 m-1 shadow-2xl bg-pink-50 hover:bg-pink-100 justify-center sm:w-48 md:w-56">
      <img
        src={restaurantList?.image}
        alt={`${restaurantList?.title} image`}
        className="h-24 w-full object-contain md:h-32"
      />
      <div className="h-15 w-full object-contain md:h-32">
        <h4 className="font-bold text-xs md:text-sm mt-2">
          {" "}
          {restaurantList?.title}
        </h4>
        <h3 className="text-xs md:text-sm">{restaurantList?.category}</h3>
        <h4 className="text-xs md:text-sm">
          {" "}
          Rating: {restaurantList?.rating?.rate}
        </h4>
      </div>
      <div className="mb-5 text-green-600 font-bold text-xs absolute ">
        {isItemAdded ? <div> item added successfully in cart</div> : ""}
      </div>

      <div>
        {isAddItem ? (
          <button
            className="p-2 m-5 bg-indigo-600 text-white  hover:bg-indigo-900"
            onClick={() => handleClick(restaurantList?.id)}
            // console.log("Hello",restaurantList.id)
          >
            Add Item
          </button>
        ) : (
          <button
            className="p-2 m-5 bg-indigo-600 text-white  hover:bg-indigo-900"
            onClick={() => handleAddItem(restaurantList?.id)}
            // console.log("Hello",restaurantList.id)
          >
            Remove Item
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
