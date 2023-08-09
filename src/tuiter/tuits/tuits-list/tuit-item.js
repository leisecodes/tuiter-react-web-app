import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import React from "react";
import TuitStats from "./tuit-stats";
import { BiX } from "react-icons/bi";
const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
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