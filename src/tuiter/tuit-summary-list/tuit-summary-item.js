import React from "react";
const TuitSummaryItem = (
 {
   tuit = {
    "_id": 123,
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla.png",
     "liked": true,
     "replies": 20,
    "retuits": 5,
    "likes": 2607,
    "handle": "@spacex",
    "tuit": "This morning at 12:34 EST Earth time, a convoy of Tesla CyberTrucks drove across the Martian Landscape after picking up the Curiosity, Sojourner, Spirit, and Perseverance on their 6' beds" 
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>
     <div className="col-2">
       <img width={70} className="float-end rounded-3" src={`${tuit.image}`}/>
     </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;