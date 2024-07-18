import { CDN_URL } from "../utillity/constant";
const RestaurantCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRatingString } =
    restData?.info;
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        alt="res-logo"
        className="rounded-lg w-[100%] h-[200px]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl overflow-hidden text-ellipsis whitespace-nowrap max-w-xs">
        {name}
      </h3>
      <h4 className="overflow-hidden text-ellipsis whitespace-nowrap max-w-xs text-gray-700">
        {cuisines.join(", ")}
      </h4>
      <h4 className="overflow-hidden text-ellipsis whitespace-nowrap max-w-xs text-gray-700">
        {costForTwo}
      </h4>
      <h4 className="overflow-hidden text-ellipsis whitespace-nowrap max-w-xs text-gray-700">
        {avgRatingString} stars
      </h4>
    </div>
  );
};

export const RestaurantCardLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 m-4 text-white bg-black">Label</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
