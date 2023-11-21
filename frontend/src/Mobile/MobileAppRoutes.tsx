import { Routes, Route, Outlet } from "react-router-dom";
import ProfilePicker from "../Components/Generic/ProfilePicker/ProfilePicker";
import Help from "../Components/Generic/Help";

import LoginView from "../Components/LoginView/LoginView";

// import VolunteerView from "./Screens/VolunteerView/VolunteerView";
import Booking from "../Components/VolunteerView/Booking/Booking";
import Urgent from "../Components/VolunteerView/Urgent/Urgent";

/*
  React Router Dom 6 is not intuitive yet when it comes to nested routes.

  Good SO 👉 https://stackoverflow.com/questions/64291991/nested-routing-is-not-working-in-react-router-v6
*/

interface IAppRoutes {
  role: "volunteer" | "manager" | null;
}

const MobileAppRoutes = ({ role }: IAppRoutes) => {
  return (
    <div className="contents">
      <div className="md:hidden">
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/app">
            <Route index path="/app" element={<ProfilePicker />} />
            <Route path="/app/volunteer">
              <Route index={true} element={<Help role={role} />} />
              <Route path="booking" element={<Booking />} />
              <Route path="urgent" element={<Urgent />} />
            </Route>
            <Route path="/app/manager">
              <Route index={true} element={<Help role={role} />} />
              {/* <Route path="booking" element={<Booking />} /> */}
              {/* <Route path="urgent" element={<Urgent />} /> */}
            </Route>
          </Route>
          
        </Routes>

        <Outlet />

      </div>
    </div>
  );
};

export default MobileAppRoutes;
