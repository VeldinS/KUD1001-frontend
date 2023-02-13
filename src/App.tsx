import React, {useCallback, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthContext} from "./authentication/authContext";
import { Provider } from "react-redux";
import store from "./store/store";

import Home from "./components/HomePage/Home";
import About from "./components/About/AboutPage/AboutUs";
import Location from "./components/About/Location/Location";
import Contact from "./components/About/Contact/Contact";
import AllActivities from "./components/Activities/AllActivities/AllActivities";
import Activity from "./components/Activities/SpecificActivity/Activity";
import Register from "./components/BecomeMember/Register";
import Redirect from "./components/BecomeMember/RedirectPage/Redirect";
import Login from "./components/Admin/login/Login";
import Control_panel from "./components/Admin/control-panel/ControlPanel";
import AddActivity from "./components/Admin/activities-add/AddActivity";
import Activities from "./components/Admin/activities-edit/Activities";
import CheckMemberships from "./components/Admin/memberships/CheckMemeberships";
import DeleteActivity from "./components/Admin/activities-edit/activity-delete/DeleteActivity";
import EditActivity from "./components/Admin/activities-edit/activity-edit/EditActivity";
import OpenActivity from "./components/Admin/activities-edit/activity-open/OpenActivity";
import AllNotifications from "./components/Notifications/AllNotifications";
import AddNotification from "./components/Admin/notifications-add/AddNotification";
import Notifications from "./components/Admin/notifications-edit/Notifications";
import EditNotification from "./components/Admin/notifications-edit/notification-edit/EditNotification";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

  let routes;

    if(isLoggedIn){
        routes = (
            <Provider store={store}>
            <Routes>
                <Route path='/' element={<Home/> }  />
                <Route path='/About' element={<About/> } />
                <Route path='/Location' element={<Location/> } />
                <Route path='/Contact' element={<Contact/> } />
                <Route path='/Activities' element={<AllActivities/>} />
                <Route path='/Activities/:activityId' element={<Activity/>} />
                <Route path='/Notifications' element={<AllNotifications/> } />
                <Route path='/Register' element={<Register/>} />
                <Route path='/Redirect' element={<Redirect/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/Admin/Control-panel' element={<Control_panel/>} />
                <Route path='/Admin/Control-panel/Activities/Add' element={<AddActivity/>} />
                <Route path='/Admin/Control-panel/Activities/Select' element={<Activities/>} />
                <Route path='/Admin/Control-panel/Activities/:activityId' element={<OpenActivity/>} />
                <Route path='/Admin/Control-panel/Activities/Edit/:activityId' element={<EditActivity/>} />
                <Route path='/Admin/Control-panel/Activities/Delete/:activityId' element={<DeleteActivity/>} />
                <Route path='/Admin/Control-panel/Notifications/Add' element={<AddNotification/>} />
                <Route path='/Admin/Control-panel/Notifications/Select' element={<Notifications/>} />
                <Route path='/Admin/Control-panel/Notifications/Edit/:notificationId' element={<EditNotification/>} />
                <Route path='/Admin/Control-panel/Notifications/Delete/:notificationId' element={<DeleteActivity/>} />
                <Route path='/Admin/Control-panel/Memberships' element={<CheckMemberships/>} />
            </Routes>
            </Provider>
        )}else{
        routes = (
            <Provider store={store}>
            <Routes>
                {/*<Route path='/' element={<Home/> }  />*/}
                {/*<Route path='/About' element={<About/> } />*/}
                {/*<Route path='/Location' element={<Location/> } />*/}
                {/*<Route path='/Contact' element={<Contact/> } />*/}
                {/*<Route path='/Activities' element={<AllActivities/>} />*/}
                {/*<Route path='/Activities/:activityId' element={<Activity/>} />*/}
                {/*<Route path='/Notifications' element={<AllNotifications/> } />*/}
                {/*<Route path='/Register' element={<Register/>} />*/}
                {/*<Route path='/Redirect' element={<Redirect/>} />*/}
                {/*<Route path='/Login' element={<Login/>} />*/}

                <Route path='/' element={<Home/> }  />
                <Route path='/About' element={<About/> } />
                <Route path='/Location' element={<Location/> } />
                <Route path='/Contact' element={<Contact/> } />
                <Route path='/Activities' element={<AllActivities/>} />
                <Route path='/Activities/:activityId' element={<Activity/>} />
                <Route path='/Notifications' element={<AllNotifications/> } />
                <Route path='/Register' element={<Register/>} />
                <Route path='/Redirect' element={<Redirect/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/Admin/Control-panel' element={<Control_panel/>} />
                <Route path='/Admin/Control-panel/Activities/Add' element={<AddActivity/>} />
                <Route path='/Admin/Control-panel/Activities/Select' element={<Activities/>} />
                <Route path='/Admin/Control-panel/Activities/:activityId' element={<OpenActivity/>} />
                <Route path='/Admin/Control-panel/Activities/Edit/:activityId' element={<EditActivity/>} />
                <Route path='/Admin/Control-panel/Activities/Delete/:activityId' element={<DeleteActivity/>} />
                <Route path='/Admin/Control-panel/Notifications/Add' element={<AddNotification/>} />
                <Route path='/Admin/Control-panel/Notifications/Select' element={<Notifications/>} />
                <Route path='/Admin/Control-panel/Notifications/Edit/:notificationId' element={<EditNotification/>} />
                <Route path='/Admin/Control-panel/Notifications/Delete/:notificationId' element={<DeleteActivity/>} />
                <Route path='/Admin/Control-panel/Memberships' element={<CheckMemberships/>} />
            </Routes>
    </Provider>
        )
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                login: login,
                logout: logout }}
        >
            <Router>
                <main>{routes}</main>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
