import React from "react";
import ReactDOM from "react-dom/client";
const Header=()=>{
    return (
        <div className="header">
            <div className="Logo_container">
                <img className="Logo" src="https://img.magnific.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?semt=ais_hybrid&w=740&q=80"></img>
            </div>
            <div className="nav_items">
                <ul>
                    <li>Home</li>
                     <li>About us</li>
                      <li>Contact us</li>
                       <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const stylecard={
    backgroundColor:"#f0f0f0",
}
const Restrocard=(props)=>{
    return(
        <div className="res_card" style={stylecard}>
            <img 
            className="res_img"
            alt="res_img"
            src={props.image}
            />
            <h3>{props.restroname}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time}</h4>
            <h4>{props.price}</h4>
        </div>
    )
}


const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restrocnt">
                 {resObj.map((restaurant) => {
                    const resInfo = restaurant.card.card.info;

                    return (
                        <Restrocard
                            key={resInfo.id}
                            restroname={resInfo.name}
                            cuisine={resInfo.cuisines.join(", ")}
                            rating={resInfo.avgRating + "*"}
                            time={resInfo.sla.deliveryTime + " mins"}
                            image={
                                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                                resInfo.cloudinaryImageId
                            }
                            price={resInfo.costForTwo}
                        />
                    );
                })}
            </div>
        </div>
    )
}
const resObj=[
  {

    "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "728528",
              "name": "Goila Butter Chicken",
              "cloudinaryImageId": "2acf0681a049dea7dac7271cf7ccc560",
              "locality": "UNICEF OFFICE",
              "areaName": "Patliputra",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "North Indian",
                "Biryani",
                "Kebabs",
                "Desserts"
              ],
              "avgRating": 4,
              "parentId": "322587",
              "avgRatingString": "4.0",
              "totalRatingsString": "1.0K+",
              "promoted": true,
              "adTrackingId": "cid=7c812765-7b43-4a95-bef2-e6cd45f60723~p=0~adgrpid=7c812765-7b43-4a95-bef2-e6cd45f60723#ag14~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=728528~bid_price=48.87~plpr=COLLECTION~eid=e7bbac7a-d994-4efb-bd2d-db97ef5a35c2~srvts=1793559513820~collid=83649",
              "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-45 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-11-02 01:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "theme": "",
                          "imageId": "newg.png",
                          "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                        }
                      }
                    ]
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

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
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "7c812765-7b43-4a95-bef2-e6cd45f60723",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=728528&source=collection&query=Biryani",
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
        },
         {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1019001",
              "name": "Big Bowl",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/31/24ee99f4-8296-44e4-a1fd-ab9d9dbcc4c7_1019001.jpg",
              "locality": "Boring Road",
              "areaName": "Chandra Kutir Complex",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Chinese",
                "Tibetan",
                "Desserts"
              ],
              "avgRating": 4.2,
              "parentId": "434792",
              "avgRatingString": "4.2",
              "totalRatingsString": "1.8K+",
              "promoted": true,
              "adTrackingId": "cid=3db75ada-6ce9-46c0-8bb0-d3b3c65d13a5~p=3~adgrpid=3db75ada-6ce9-46c0-8bb0-d3b3c65d13a5#ag42~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1019001~bid_price=12~plpr=COLLECTION~eid=d3729a3c-7348-4a9d-b919-0ba472f7d9a4~srvts=1793559513820~collid=83649",
              "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-11-02 01:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

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
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "3db75ada-6ce9-46c0-8bb0-d3b3c65d13a5",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1019001&source=collection&query=Biryani",
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
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "254859",
              "name": "Biryani By Kilo",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/1/dab8899e-40b1-447d-8d89-c0444ef716ea_254859.JPG",
              "locality": "Opp. UNICEF OFFICE",
              "areaName": "Patliputra Colony",
              "costForTwo": "₹499 for two",
              "cuisines": [
                "Biryani",
                "Hyderabadi",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Desserts"
              ],
              "avgRating": 4.2,
              "parentId": "130",
              "avgRatingString": "4.2",
              "totalRatingsString": "8.5K+",
              "promoted": true,
              "adTrackingId": "cid=da540f7a-74ca-471e-80c5-0ac7ca3bcc10~p=4~adgrpid=da540f7a-74ca-471e-80c5-0ac7ca3bcc10#ag40~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=254859~bid_price=45~plpr=COLLECTION~eid=6f1da7f3-5fcb-4c2f-9213-dcc0145bac4b~srvts=1793559513820~collid=83649",
              "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-45 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-11-02 01:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                    "description": "Top-rated for Biryani, based on user votes."
                  },
                  {
                    "imageId": "newg.png",
                    "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "theme": "",
                          "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                          "description": "Top-rated for Biryani, based on user votes."
                        }
                      },
                      {
                        "attributes": {
                          "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                          "theme": "",
                          "imageId": "newg.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

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
                  "rating": "3.7",
                  "ratingCount": "1.3K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "da540f7a-74ca-471e-80c5-0ac7ca3bcc10",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=254859&source=collection&query=Biryani",
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
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "468800",
              "name": "Barbeque Nation",
              "cloudinaryImageId": "eb4v3nu6x1ehcoxbjf1h",
              "locality": "Bailey Road",
              "areaName": "Khajpura",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "North Indian",
                "Barbecue",
                "Kebabs",
                "Biryani",
                "Street Food",
                "Snacks"
              ],
              "avgRating": 4.1,
              "parentId": "2438",
              "avgRatingString": "4.1",
              "totalRatingsString": "2.7K+",
              "promoted": true,
              "adTrackingId": "cid=6379dba5-e0cc-431f-bfae-f5e6af0ec95d~p=12~adgrpid=6379dba5-e0cc-431f-bfae-f5e6af0ec95d#ag66~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=468800~bid_price=40~plpr=COLLECTION~eid=4c983b3a-55c9-4258-b603-836c5dbd3a56~srvts=1793559513821~collid=83649",
              "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-40 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-11-02 01:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                          "theme": "",
                          "imageId": "newg.png"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

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
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "6379dba5-e0cc-431f-bfae-f5e6af0ec95d",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=468800&source=collection&query=Biryani",
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
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "591315",
              "name": "Dum Safar Biryani",
              "cloudinaryImageId": "oppowpndyrjawwntjdww",
              "locality": "Durga Infinity",
              "areaName": "Khajpura",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Hyderabadi",
                "Kebabs",
                "North Indian",
                "barbeque"
              ],
              "avgRating": 3.9,
              "parentId": "351013",
              "avgRatingString": "3.9",
              "totalRatingsString": "4.1K+",
              "promoted": true,
              "adTrackingId": "cid=0e6033a5-b3c1-401f-83ab-cb171fc195bf~p=13~adgrpid=0e6033a5-b3c1-401f-83ab-cb171fc195bf#ag65~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=591315~bid_price=40~plpr=COLLECTION~eid=c0a159be-ad62-4408-b7b9-d937c7a10939~srvts=1793559513821~collid=83649",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-11-02 01:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

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
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "0e6033a5-b3c1-401f-83ab-cb171fc195bf",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=591315&source=collection&query=Biryani",
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
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "962005",
              "name": "Biryani Mahal",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/10/2c815d74-e64b-423d-a908-90117f0dbb96_f5c8d88d-e609-4458-a1b6-ad44a06ddc17.jpg",
              "locality": "Srikrishnapuri",
              "areaName": "Srikrishnapuri",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Chinese",
                "Biryani",
                "Mughlai"
              ],
              "avgRating": 4.3,
              "parentId": "9902",
              "avgRatingString": "4.3",
              "totalRatingsString": "2.3K+",
              "promoted": true,
              "adTrackingId": "cid=df13eec9-9a2a-4f39-885f-dbfbdd4b0bf9~p=15~adgrpid=df13eec9-9a2a-4f39-885f-dbfbdd4b0bf9#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=962005~bid_price=35~plpr=COLLECTION~eid=50385e40-728c-4def-9cfa-34fc94e6c1d9~srvts=1793559513821~collid=83649",
              "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-11-02 02:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "android/static-assets/icons/big_rx.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "android/static-assets/icons/big_rx.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

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
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "df13eec9-9a2a-4f39-885f-dbfbdd4b0bf9",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=962005&source=collection&query=Biryani",
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
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "927100",
              "name": "Chinese Grill Restaurant & Cafe",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/4/9e558480-b5ea-4af0-a9ab-6a950c046e02_a399a4c2-8111-494c-bc51-52bf563b5e1e.jpg",
              "locality": "Srinivas Path Bandar Bagicha",
              "areaName": "Srikrishnapuri",
              "costForTwo": "₹399 for two",
              "cuisines": [
                "Chinese",
                "Momos",
                "North Indian",
                "Seafood",
                "Biryani",
                "rolls"
              ],
              "avgRating": 3.7,
              "parentId": "537799",
              "avgRatingString": "3.7",
              "totalRatingsString": "2.8K+",
              "promoted": true,
              "adTrackingId": "cid=eeb7967b-acfb-4753-b24c-495f7bc88f8e~p=16~adgrpid=eeb7967b-acfb-4753-b24c-495f7bc88f8e#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=927100~bid_price=35~plpr=COLLECTION~eid=6b30ef37-0533-4e2c-9e4d-a09278d1d114~srvts=1793559513821~collid=83649",
              "sla": {
                "deliveryTime": 46,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "40-50 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-11-02 06:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {

              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

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
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "eeb7967b-acfb-4753-b24c-495f7bc88f8e",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=927100&source=collection&query=Biryani",
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
      }
    
]
;

const Applayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>)