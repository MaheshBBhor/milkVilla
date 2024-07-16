// import { restaurantList } from "../constant";
 
 
 const RestaurantCard = ({ restaurantList }) => {
  
    return (
      <div className="card">
        <img src={restaurantList.image} />
        <h4> {restaurantList.title}</h4>
        <h3>{restaurantList.category}</h3>
        <h4> {restaurantList?.rating?.rate}</h4>
      </div>
    );
  };
  export default RestaurantCard