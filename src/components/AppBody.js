import { useEffect, useState } from "react";
import { allRestaurants } from "./restaurantData";
import "bootstrap/dist/css/bootstrap.css";
import { Header } from "./Header";
import { RestaurantCard } from "./RestaurantCard";
import { ShimmerSimpleGallery } from "react-shimmer-effects";



export const AppBody = () => {
  //const [cardData, setCardData] = useState(allRestaurants);
  const [cardData, setCardData] = useState([]);
  const [inputText, setInputText] = useState('');
  const [filtersearchData, setFiltersearchData] = useState([]);

  useEffect(() => { 
    console.log("useEffect called");
    getCardData();
  },[]);

 
 

  const getCardData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.968232&lng=73.731191&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  //  console.log("data is ", data);

    const jsonData = await data.json();
  //  console.log("jsondata", jsonData);
    setCardData(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setFiltersearchData(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


  };

  const filterData = () => {
    const filteredData = cardData.filter(
      (res) => parseFloat(res.info.avgRating) > 4.1
    );
    setFiltersearchData(filteredData);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
   };

  const searchData=()=>{
    // console.log(e)

    const searchData= cardData.filter((res)=>
      res.info.name.toLowerCase().includes(inputText.toLowerCase())
     // res.info.name.toLowerCase().includes(inputText.toLowerCase())  //(try with substring)
    )
    setFiltersearchData(searchData)

     
  }


 

//conditional rendering
return(
  filtersearchData.length===0 ?  //------------>> if part
     <>
        <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption />
        <ShimmerSimpleGallery card imageHeight={300} />
        <ShimmerSimpleGallery card imageHeight={300} caption />
      </>
  :  //--------------->> else part
    <>
      <Header />
      <div className="appBody">
        <input
          type="text"
          className="searchInp"
          placeholder="   restaurant on your mind?"
          value={inputText}
          onChange={handleInputChange}
        />
        <button type="button" className="searchBtn" onClick={searchData}>
          Search
        </button>
        <button className="searchBtn2" onClick={filterData}>
          Filter by rating {">"} 4.1
        </button>
      </div>

      <div className="resBody">
        {Array.isArray(filtersearchData) &&  filtersearchData.map((restaurantData) => {
          return (
            <RestaurantCard 
              key={restaurantData.info.id}
              resData={restaurantData}
            ></RestaurantCard>
          );         
        })}
      </div>
    </>

);
  
};
