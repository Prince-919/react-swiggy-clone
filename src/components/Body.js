import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "./../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants?.filter(
              (res) => res?.info?.avgRatingString > 4
            );
            console.log(filteredListOfRestaurants);
            setListOfRestaurants(filteredListOfRestaurants);
          }}>
          To Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
