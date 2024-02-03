import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f8f9fa" }}>
      <img
        className="restaurant-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="burger king"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
