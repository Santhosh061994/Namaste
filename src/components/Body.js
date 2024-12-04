import RestaurantCard from "./RestaurantCard";
import resData1 from "../../utils/mockData";
import React, { useState , useEffect} from 'react';



const Body = () => {

    //let listOfRestaurants;
    const [listOfRestaurants, setListOfRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.51024246413905&lng=78.36948774755001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json  = await data.json();
        console.log("json data");        
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };
    return(
        <div className="body">

            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList =listOfRestaurants.filter(
                        (res)=>res.info.avgRating > 4
                );
                    setListOfRestaurant(filteredList);
                    
                }}>Top Rated Restauramts</button>
            </div>
            <div className="res-container">
                {
                  listOfRestaurants.map(restaurant => (<RestaurantCard key ={restaurant.info.id} res1={restaurant}/>))
                }
        
            </div>
        </div>
            
    );
    
};

export default Body;