import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import React, { useState , useEffect} from 'react';



const Body = () => {

    //let listOfRestaurants;
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const[searchText, setSearchText]=useState("");
    const[filteredRestaurant, SetFilteredRestaurant]=useState([]);
    
// if no dependency array use Effect is called everytime the component renders.
    useEffect(()=>{
        console.log("use Effect is called");
        fetchData();
        
    },[]);


// whenever there is a change in state variable it rerenders consistently
    console.log("body is executed");

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.51024246413905&lng=78.36948774755001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json  = await data.json();
        console.log("json data");        
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        SetFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // conditional rendering
    if(listOfRestaurants == 0){
        return(
            <Shimmer/>
        )
    }
    return(
        <div className="body">

            <div className="filter">
                <div className="search-box">
                    <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value);}}></input>
                    <button onClick={()=>{
                        const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                        SetFilteredRestaurant(filteredRestaurant);
                        

                    }}>
                        Search
                    </button>
                </div>
    
                <button className="filter-btn" onClick={()=>{
                    const filteredList =listOfRestaurants.filter(
                        (res)=>res.info.avgRating > 4
                );
                    setListOfRestaurant(filteredList);
                    
                }}>Top Rated Restauramts</button>
            </div>
            <div className="res-container">
                {
                  filteredRestaurant.map(restaurant => (<RestaurantCard key ={restaurant.info.id} res1={restaurant}/>))
                }
        
            </div>
        </div>
            
    );
    
};

export default Body;