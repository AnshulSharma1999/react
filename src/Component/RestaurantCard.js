import { CDN_URL } from "../utillity/constant";
const RestaurantCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRatingString } =
    restData?.info;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString} stars</h4>
    </div>
  );
};

export default RestaurantCard;
