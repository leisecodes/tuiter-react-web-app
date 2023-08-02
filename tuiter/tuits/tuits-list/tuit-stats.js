import React from "react";
import { BiMessageRounded } from "react-icons/bi"
import { AiOutlineRetweet } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { likeTuit } from "../../reducers/tuits-reducer";
import {useDispatch, useSelector} from "react-redux";

const TuitStats = (
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
 const like = () =>
 dispatch({type: 'LIKE_TUIT'});
const unlike = () =>
 dispatch({type: 'UNLIKE_TUIT'});


 return(
  <li className="list-group-item border-0">
     <div className="row">
        <div className="col-10">
        <BiMessageRounded className=" ms-0 ps-0 me-2"/>{tuit.replies}
        <AiOutlineRetweet className="ms-5 me-2"/>{tuit.retuits}
        <i onClick={()=>tuit.liked ? unlike(tuit) : like(tuit)} className=" text-danger ms-5 me-2"><AiFillHeart/></i>{tuit.likes}
        <FiShare className="ms-5"/>
        </div>
     </div>
  </li>
 );
};
export default TuitStats;