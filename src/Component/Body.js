import { useContext, useState } from "react";
import RestaurantCard,{RestaurantCardLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utillity/useOnlineStatus";
import useRestaurantList from "../utillity/useRestaurantList";
import UserContext from "../utillity/UserContext";

const Body = () => {
  const { listOfRestaurants, filterRestaurant, setFilterRestaurant, loading } =
    useRestaurantList();
  const [searchText, setSearchText] = useState("");
  // const {loggedInUser,setUserName} = useContext(UserContext);

  const LabeledRestaurantCard = RestaurantCardLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>
        Hi, You are currently in offline mode. Please check your internet
        connection.
      </h1>
    );

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex">
        <div className="p-4 items-center">
          <input
            className="border border-solid border-gray-700"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="m-4 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded-lg"
            onClick={() => {
              if (searchText.trim() == "") {
                setFilterRestaurant(listOfRestaurants);
              } else {
                const filteredRestaurant = listOfRestaurants.filter((item) =>
                  item?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilterRestaurant(filteredRestaurant);
              }
            }}
          >
            Search
          </button>
          <button
            className="m-4 px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              console.log(filteredList);
              setFilterRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        {/* <div>
          <input className="m-4 px-4 py-1 border-solid border rounded-md border-black" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
        </div> */}
      </div>
      <div className="flex flex-wrap">
        {filterRestaurant.map((restaurant) => (
          <Link
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.isOpen ? <LabeledRestaurantCard restData={restaurant}/> : <RestaurantCard restData={restaurant} />}           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
