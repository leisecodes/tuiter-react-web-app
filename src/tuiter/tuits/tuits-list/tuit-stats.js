import React from "react";
import { BiMessageRounded } from "react-icons/bi"
import { AiOutlineRetweet } from "react-icons/ai"
import { FaHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { FaThumbsDown } from "react-icons/fa";
import { updateTuitThunk } from "../../services/tuits-thunks";
import {useDispatch, useSelector} from "react-redux";


const TuitStats = (
   {tuit}
) => {
 const dispatch = useDispatch();


 return(

  <div classname="wd-stats">
      

     <div className="row">
        <div className="col-10">
        <BiMessageRounded className=" ms-0 ps-0 me-2"/>{tuit.replies}
        <AiOutlineRetweet className="ms-4 me-2"/>{tuit.retuits}
        <FaHeart
  className="text-danger ms-4 me-2"
  onClick={() =>
    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
  }
/>
   
   <span className="me-4">{tuit.likes}</span>
        <FaThumbsDown classname="ms-5"
        onClick={()=>dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1 }))}></FaThumbsDown>
        <span className="ms-2 me-4">{tuit.dislikes}</span>

        <FiShare className=" "/>
      
        </div>
     </div>
     </div>
 );
};
export default TuitStats;