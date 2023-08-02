import { useDispatch } from "react-redux";
import { deleteTuit } from "../../reducers/tuits-reducer";
import React from "react";
import TuitStats from "./tuit-stats";
import { BiX } from "react-icons/bi";
const TuitItem = (
 {
    tuit = {
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
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
}

 return(
    <div className="container">
  <li className="list-group-item">
    <div className="row">
    <div className="col-2">
       <img width={50} className="rounded-circle" src={`${tuit.image}`}/>
    </div>
     <div className="col-10">
       <div>
       <BiX className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}/>
       <span className="fw-bolder ms-0 me-2"> {tuit.userName}</span> 
       {tuit.handle} . {tuit.time}
       <div className="row">
       {tuit.tuit}
       </div>
       </div>
       <TuitStats tuit={tuit}/>
     </div>
     </div>
  </li>
  </div>
 );
};
export default TuitItem;