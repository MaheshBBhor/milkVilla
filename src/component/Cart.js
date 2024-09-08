import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
export function Cart() {
  const [isItemRemoved, setIsItemRemoved] = useState(false);

  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    setIsItemRemoved(true);
    setTimeout(() => setIsItemRemoved(false), 1000);
  };

  return (
    <>
      <div className="border bg-pink-100 shadow-2xl p-5 m-1 ">
        {" "}
        <div>Cart Items-{cartItems.length}</div>
        {isItemRemoved && (
          <div className="text-red-600 font-bold text-xs">One Item removed</div>
        )}
      </div>

      <div className="flex flex-wrap">
        {cartItems.length == 0 ? (
          <div className="border bg-pink-100 shadow-2xl p-5 m-1 ">
            Please add Items
          </div>
        ) : (
          cartItems.map((items) => {
            return (
              <RestaurantCard
                key={items.id}
                restaurantList={items}
                handleAddItem={handleRemoveItem}
              />
            );
          })
        )}
      </div>
    </>
  );
}
