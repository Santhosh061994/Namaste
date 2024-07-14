import React from "react";
import ReactDOM from "react-dom";

/**
 * Header
 *  - Logo
 *  - Nav items 
 * Body
 *  - search
 *  -RestaurantContainer
 *    - RestaurantCard
 *          - Img
 *          -name of Res, star rating, cuisines, cost for two
 * Foooter
 *  - contact
 *  -Address
 *  -copurightk
 *   -links* 
 * 
 */

const Header = () => {
    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://logowik.com/content/uploads/images/free-food-delivery6258.logowik.com.webp"/>

        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

const resData1 = {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "121603",
          "name": "Kannur Food Point",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/22/af30541d-f748-4ae2-a747-933e6331513a_e111c758-48b5-44a6-b847-7df0176500f3.jpg",
          "locality": "BTM Layout",
          "areaName": "BTM Layout",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Kerala",
            "Chinese"
          ],
          "avgRating": 4.1,
          "parentId": "20974",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=15295787~p=0~adgrpid=15295787#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=121603~eid=acba3b9a-cffc-4ebe-acd7-b2c19a5b643e~srvts=1720975471178~collid=83639",
          "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-07-15 02:30:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=121603&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  };

const RestaurantCard = (props)=>{
    const{restData}=props;
    return (
       <div className="res-card">
            <img className="reslogo"
             alt="res-logo"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/27/bc960282-e31e-4e77-97e9-6c6ec9cec813_c46e6499-a9ca-43e8-91d5-85aa6f0afa15.jpg"/>
            <h3>{restData.card.card.info.name}</h3>
            <h4>{restData.card.card.info.cuisines.join(", ")}</h4>
            <h4>{restData.card.card.info.avgRating}</h4>
            <h4>{restData.card.card.info.costForTwo}</h4>
            <h4>{restData.card.card.info.sla.deliveryTime}</h4>
       </div> 
    );
};

const Body = () => {

    return(
        <div className="body">

            <div className="search">Search</div>
            <div className="res-containerr">
                <RestaurantCard restData={resData1}/>
        
            </div>
        </div>
            
    );
    
};

const Applayout = () => {

    return(
        <div className="App">
            <Header/>
            <Body/>
        </div>

    );

};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);