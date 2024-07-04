import { CDN_URL } from "../utillity/constant";

const ItemList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-gray-200 border-b-2 p-2 m-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <div className="font-semibold">{item?.card?.info?.name}</div>
              <div className="font-semibold">
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </div>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute  align-bottom">
              <button className="p-3 mx-11 bg-white shadow-lg text-green-700 rounded-lg font-extrabold font-serif">
                ADD
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
