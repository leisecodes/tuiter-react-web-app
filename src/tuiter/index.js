import React from 'react';
import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./user/profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from './reducers/who-reducer';
import tuitsReducer from './reducers/tuits-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authReducer from './reducers/auth-reducer';
import LoginScreen from './user/login-screen';
import RegisterScreen from './user/register-screen';

const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer, user: authReducer}}
);
function Tuiter() {
 return (
   <div>
    <Provider store = {store}>

    
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-7">
         <Routes>
           <Route path="/home" element={<HomeScreen />} />
           <Route path="/explore" element={<ExploreScreen />} />
           <Route path="/notifications" element={<h1>Notifications</h1>}/>
           <Route path="/messages" element={<h1>Messages</h1>}/>
           <Route path="/bookmarks" element={<BookmarksScreen/>}/>
           <Route path="/lists" element={<h1>Lists</h1>}/>
           <Route path="/login" element={<LoginScreen/>}/>
           <Route path= "/register" element={<RegisterScreen/>}/>
           <Route path="/profile" element={<ProfileScreen/>}/>
           <Route path="/more" element={<h1>More</h1>}/>
         </Routes>
       </div>
       <div className="col-3">
         <WhoToFollowList/>
       </div>
     </div>
     </Provider>
   </div>
 );
}
export default Tuiter;