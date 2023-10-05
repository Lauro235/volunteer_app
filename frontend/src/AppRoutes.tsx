import { Routes, Route, Outlet } from "react-router-dom";
import Root from "./Screens/Root/Root";

import LoginView from "./Screens/LoginView/LoginView";

import VolunteerView from "./Screens/VolunteerView/VolunteerView";
import Booking from "./Components/Booking/Booking";

/*
  React Router Dom 6 is not intuitive yet when it comes to nested routes.

  Good SO 👉 https://stackoverflow.com/questions/64291991/nested-routing-is-not-working-in-react-router-v6
*/

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/app">
          <Route index path="/app" element={<Root />} />
          <Route path="/app/volunteer" element={<VolunteerView />}>
            {/* <Route index={true}  /> */}
            <Route path="booking" element={<Booking />}/>
          </Route>
        </Route>
        {/* Create route for both volunteer and manager Mostly will have shared UI */}

      </Routes>
      <Outlet />
    </div>
  );
};

export default AppRoutes;
