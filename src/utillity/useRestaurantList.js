import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const swiggyData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9257252&lng=77.7002566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const jsonData = await swiggyData.json();
      setListOfRestaurants(
        jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilterRestaurant(
        jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } finally {
      setLoading(false);
    }
  };

  return { listOfRestaurants, filterRestaurant, setFilterRestaurant, loading };
};

export default useRestaurantList;
