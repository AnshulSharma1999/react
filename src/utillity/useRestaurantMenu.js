import { useEffect, useState } from "react";
import { REST_MENU } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const menuData = await fetch(REST_MENU + resId);
    const restaurantMenuData = await menuData.json();
    setResInfo(restaurantMenuData);
  };

  return resInfo;
};

export default useRestaurantMenu;
