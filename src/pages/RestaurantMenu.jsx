import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock,faWallet,faPlus,faMinus} from "@fortawesome/free-solid-svg-icons"

export default function RestaurantMenu() {
    const [restaurantMenu,setRestaurantMenu]=useState([]);
    const [restaurantMenu2,setRestaurantMenu2]=useState([]);
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
getMenuData();
console.log("useEffect called")
    },[])

    const getMenuData= async()=>{
  const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9698893&lng=73.78696889999999&restaurantId=616889&catalog_qa=undefined&submitAction=ENTER")
  const jsonData= await data.json();
  console.log("jsondata: ",jsonData)
  

  setRestaurantMenu(jsonData?.data?.cards)
  setRestaurantMenu2(jsonData)
  
    }

    const myStyle={
      marginLeft:'15px'
    }




  return (

    restaurantMenu.length===0?
    <div style={{marginTop:'100px'}}>Loading...</div>:
    <div  className='RestaurantMENU'>
        <br /><br /><br /><br />
      
      <h3 style={{marginBottom:'20px',color:'green',  marginLeft:'15px'}}>Restaurant Menu</h3>
      <h4 style={myStyle}>{restaurantMenu[0]?.card?.card?.info?.name}</h4>
      <div className="vegicon"><div className="circle"></div></div>
      <h4 style={myStyle}>{restaurantMenu[0]?.card?.card?.info?.cuisines.toString().replaceAll(",",", ")}</h4>
      <h4 style={myStyle}><FontAwesomeIcon icon={faWallet} /> {restaurantMenu[0]?.card?.card?.info?.costForTwoMessage}  <FontAwesomeIcon icon={faClock} /> {restaurantMenu[0]?.card?.card?.info?.sla.deliveryTime} mins</h4>
      <div className="accordion">
        <div className="accordion-title" onClick={()=>setIsActive(!isActive)}>





          

  <div className='accordion-title'>
  <h4 >{restaurantMenu2?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title}</h4>
    </div> 
    <div className='accordion-icon'>{isActive?<FontAwesomeIcon icon={faMinus} />:<FontAwesomeIcon icon={faPlus} />}</div>       
        </div>

     {isActive &&  <div className="accordionItem">
       <h4 style={{color:'black',marginLeft:'15px'}}>{restaurantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.category }</h4> 
       <h4 style={{color:'black',marginLeft:'15px'}}>{restaurantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.category }</h4> 
      <h5 style={{color:'gray', marginLeft:'15px'}}>{restaurantMenu[0]?.card?.card?.info?.areaName}</h5>
      
      </div>}

      </div>
     
     
      
    </div>
  )
}