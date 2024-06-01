import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utillity/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuItems = useRestaurantMenu(resId);

  if (menuItems === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuItems?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuItems?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card;

  return (
    <div className="restaurant-menu-conatiner">
      <h1>{name}</h1>
      <h3>
        {" "}
        {cuisines.join(",")} : {costForTwoMessage}
      </h3>

      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <p>
              {item.card.info.name} : Rs{" "}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
