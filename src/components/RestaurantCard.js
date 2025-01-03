import { cloudinaryImageId_url } from "../../utils/constants";

const RestaurantCard = (props)=>{
    const{res1}=props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo} = res1?.info;
    const{deliveryTime}=res1?.info?.sla;

    return (
       <div className="res-card">
            <img className="reslogo"
             alt="res-logo"
             src= {cloudinaryImageId_url+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
       </div> 
    );
};

export default RestaurantCard;