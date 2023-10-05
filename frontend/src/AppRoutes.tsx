import { Routes, Route, Outlet } from "react-router-dom";
import Root from "./Screens/Root/Root";
import Help from "./Components/Outlet/Help";

import LoginView from "./Screens/LoginView/LoginView";

// import VolunteerView from "./Screens/VolunteerView/VolunteerView";
import Booking from "./Components/Booking/Booking";
import Urgent from "./Components/Urgent/Urgent";

/*
  React Router Dom 6 is not intuitive yet when it comes to nested routes.

  Good SO 👉 https://stackoverflow.com/questions/64291991/nested-routing-is-not-working-in-react-router-v6
*/

interface IAppRoutes {
  role: "volunteer" | "manager" | null;
}

const AppRoutes = ({ role }: IAppRoutes) => {
  const roleNotNull = role !== null && role;
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/app">
          <Route index path="/app" element={<Root />} />
          <Route path="/app/volunteer">
            <Route index={true} element={<Help role={roleNotNull} />} />
            <Route path="booking" element={<Booking />} />
            <Route path="urgent" element={<Urgent />} />
          </Route>
          <Route path="/app/manager">
            <Route index={true} element={<Help role={roleNotNull} />} />
            {/* <Route path="booking" element={<Booking />} /> */}
            {/* <Route path="urgent" element={<Urgent />} /> */}
          </Route>
        </Route>
        {/* Create route for both volunteer and manager Mostly will have shared UI */}
      </Routes>
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AppRoutes;
