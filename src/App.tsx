import React, {Suspense, useCallback, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthContext} from "./authentication/authContext";
import { Provider } from "react-redux";
import store from "./store/store";
import LoadingSpinner from "./components/UIElements/LoadingSpinner";

const Home = React.lazy(() => import('./components/HomePage/Home'));
const About = React.lazy(() => import("./components/About/AboutPage/AboutUs"));
const Location = React.lazy(() => import("./components/About/Location/Location"));
const Contact = React.lazy(() => import("./components/About/Contact/Contact"));
const AllActivities = React.lazy(() => import("./components/Activities/AllActivities/AllActivities"));
const Activity = React.lazy(() => import("./components/Activities/SpecificActivity/Activity"));
const Register =  React.lazy(() => import("./components/BecomeMember/Register"));
const Redirect = React.lazy(() => import("./components/BecomeMember/RedirectPage/Redirect"));
const Login = React.lazy(() => import("./components/Admin/login/Login"));
const Control_panel = React.lazy(() => import("./components/Admin/control-panel/ControlPanel"));
const AddActivity = React.lazy(() => import("./components/Admin/activities-add/AddActivity"));
const Activities = React.lazy(() => import("./components/Admin/activities-edit/Activities"));
const CheckMemberships = React.lazy(() => import("./components/Admin/memberships/CheckMemberships"));
const DeleteActivity = React.lazy(() => import("./components/Admin/activities-edit/activity-delete/DeleteActivity"));
const EditActivity = React.lazy(() => import("./components/Admin/activities-edit/activity-edit/EditActivity"));
const OpenActivity = React.lazy(() => import("./components/Admin/activities-edit/activity-open/OpenActivity"));
const AllNotifications = React.lazy(() => import("./components/Notifications/AllNotifications"));
const AddNotification = React.lazy(() => import("./components/Admin/notifications-add/AddNotification"));
const Notifications = React.lazy(() => import("./components/Admin/notifications-edit/Notifications"));
const EditNotification = React.lazy(() => import("./components/Admin/notifications-edit/notification-edit/EditNotification"));

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
                <main>
                    <Suspense fallback={
                        <div className={"center"}>
                            <LoadingSpinner asOverlay={undefined} />
                        </div>}>{routes}
                    </Suspense>
                </main>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
