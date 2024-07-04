import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utillity/useRestaurantMenu";
import RestaurantCategory from "../Component/RestaurantCategory";
import { CDN_URL } from "../utillity/constant";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuItems = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (menuItems === null) return <Shimmer />;

  // destructuring name, cuisines and costForTwo
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    menuItems?.data?.cards[2]?.card?.card?.info;

  // fetching categories.
  const categories =
    menuItems?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-6/12 text-center mx-auto my-2">
      <div className="flex justify-between">
        <div className="w-9/12">
          <div className="text-left  font-bold">{name}</div>
          <div className="text-left flex ">
            {cuisines.join(", ")} - {costForTwoMessage}
          </div>
        </div>
        <img className="w-3/12" src={CDN_URL + cloudinaryImageId} />
      </div>
      {categories.map((c, index) => (
        <RestaurantCategory
          key={c?.card?.card?.title}
          category={c?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
