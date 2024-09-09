import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
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

  const onClearCart = () => {
  
    dispatch(clearCart());
  };
  return (
    <>
      <div className="border bg-pink-100 shadow-2xl p-5 m-1 ">
        {" "}
        <div className="flex justify-between items-center">
          <div>Cart Items-{cartItems.length}</div>
          {cartItems.length > 0 && (
            <button
              className="content-end p-2 m-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
              onClick={onClearCart}
            >
              Clear Cart
            </button>
          )}
        </div>
        {isItemRemoved && (
          <div className="text-red-600 font-bold text-xs">
            One Item removed from cart
          </div>
        )}
      </div>

      <div className="flex flex-wrap">
        {cartItems.length == 0 ? (
          <div className="border bg-pink-100 shadow-2xl p-5 m-1 ">
            Please add Items
          </div>
        ) : (
          cartItems.map((item, index) => {
            return (
              <RestaurantCard
                key={`${item.id}-${index}`}
                restaurantList={item}
                handleAddItem={handleRemoveItem}
              />
            );
          })
        )}
      </div>
    </>
  );
}
