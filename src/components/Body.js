import RestaurantCard from "./RestaurantCard";
import resData1 from "../../utils/mockData";
import React, { useState } from 'react';



const Body = () => {

    //let listOfRestaurants;
    const [listOfRestaurants, setListOfRestaurant] = useState(resData1);

    return(
        <div className="body">

            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList =resData1.filter(
                        (res)=>res.card.card.info.avgRating > 4
                );
                    setListOfRestaurant(filteredList);
                    
                }}>Top Rated Restauramts</button>
            </div>
            <div className="res-container">
                {
                  listOfRestaurants.map(restaurant => (<RestaurantCard key ={restaurant.card.card.info.id} res1={restaurant}/>))
                }
        
            </div>
        </div>
            
    );
    
};

export default Body;