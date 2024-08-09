const RestaurantCard = ({ restaurantList }) => {
  return (
    <div className="w-40 p-2 m-2 shadow-2xl bg-pink-50 hover:bg-pink-300 justify-center sm:w-48 md:w-56">
      <img src={restaurantList.image} alt={`${restaurantList.title} image`} className="h-24 w-full object-cover md:h-32" />
      <h4 className="font-bold text-xs md:text-sm mt-2"> {restaurantList.title}</h4>
      <h3 className="text-xs md:text-sm">{restaurantList.category}</h3>
      <h4 className="text-xs md:text-sm"> Rating: {restaurantList?.rating?.rate}</h4>
    </div>
  );
};

export default RestaurantCard;
