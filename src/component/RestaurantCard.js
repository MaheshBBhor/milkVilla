// import { restaurantList } from "../constant";

const RestaurantCard = ({ restaurantList }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-2xl bg-pink-50 hover:bg-pink-300 justify-center">
      {/* <div > */}
      <img src={restaurantList.image} />
      {/* </div> */}
      <h4 className="font-bold text-sm"> {restaurantList.title}</h4>
      <h3>{restaurantList.category}</h3>
      <h4> Rating: {restaurantList?.rating?.rate}</h4>
    </div>
  );
};
export default RestaurantCard;
