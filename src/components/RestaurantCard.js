export const RestaurantCard = (
  /* name,cuisine,rating , imgUrl,resData, */ { resData }
) => {
  console.log("resdata", resData);
  const {
    name,
    cloudinaryImageId,
    locality,
    avgRatingString,
    areaName,
    cuisines,
  } = resData.info;
  return (
    <div className="rest_card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="restaurant image"
        className="rest1img"
      />
      <div className="restaurantInfo">
        <h3>{name}</h3>
        <h3>{locality}</h3>
        <h3>{avgRatingString}</h3>
        <h3>{cuisines.toString().replaceAll(",", ", ")}</h3>
        <h4>{areaName}</h4>
        {/* <h3>{rating}</h3>
         <h4>{cuisine}</h4> */}
      </div>
    </div>
  );
};
