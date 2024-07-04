import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClickEvent = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div className="my-4 shadow-lg  bg-gray-50">
      <div
        className="flex justify-between p-4 my-4 mx-auto cursor-pointer"
        onClick={handleClickEvent}
      >
        <span className="font-semibold text-lg">
          {category?.title} ({category?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList data={category.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
