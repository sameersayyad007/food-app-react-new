 import React from "react"
 import  ReactDOM  from "react-dom/client";
 import '../src/index.css'
 import 'bootstrap/dist/css/bootstrap.css';

 
 

import { AppBody } from "./components/AppBody";
import { RestaurantCard } from "./components/RestaurantCard";
import { allRestaurants } from "./components/restaurantData";
import { Outlet, RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import ErrorPage from "./pages/ErrorPage";
import ProfilePage from "./pages/ProfilePage";
import { Header } from "./components/Header";
import Cart from "./pages/Cart";
import RestaurantMenu from './pages/RestaurantMenu';



// const parent= React.createElement(
//     "div",
//     {class: "parent"},
//     React.createElement("div",{class:"child"},
//     [
//         React.createElement("h1",{class:"par"},"i am h1 nested"),
//         React.createElement("p",{class:"par"},"i am p nested")
//     ]   
//     )
// );

// console.log("heading: "+parent)
// const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent)


// const parent= React.createElement(
//     "h1",
//     {className:"heading"},
//     "hi i am a heading"
// );






//    ******************************************************    AppBody component end   **************************************************************************

//    ******************************************************    Restaurant card component end   *******************************************************************





// restaurants array start

const getComponentLocation=(url)=>{
    if(url==='/aboutus'){
        return <Aboutus/>
    }
   else if(url==='/profile'){
        return <ProfilePage/>
        
    }
}

const AppMain=()=>{

    const location= useLocation();
    console.log("location: ",location)

   
return(
    <div>
    {/* <AppBody></AppBody> */}
    {/* <AppMain></AppMain> */}
<Header></Header>

{/* {getComponentLocation(location.pathname)}    */}
<Outlet/>
    </div>
)

}
const appRouter= createBrowserRouter([
    {
        path: '/',
        element: <AppMain/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: '/home',
                element: <AppBody/>,
                errorElement: <ErrorPage/>
            },
            {
                path: '/aboutus',
                element: <Aboutus/>,
                errorElement: <ErrorPage/>
            },
            {
                path: '/profile',
                element: <ProfilePage/>,
                errorElement: <ErrorPage/>
            },
            {
                path: '/cart',
                element: <Cart/>,
                errorElement: <ErrorPage/>
            },
            {
                path: '/restaurantmenu',
                element: <RestaurantMenu/>,
                errorElement: <ErrorPage/>
            },

        ]
    },
    // {
    //     path: '/home-ani',
    //     element: <AppMain/>,
    //     errorElement: <ErrorPage/>
    // },
    
])




//    ******************************************************    AppMain component end   ****************************************************************************





const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)