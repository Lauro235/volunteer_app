import { Routes, Route, Outlet } from "react-router-dom";
import ProfilePicker from "../Components/Generic/ProfilePicker/ProfilePicker";
import Help from "../Components/Generic/Help";

import LoginView from "../Components/LoginView/LoginView";

// import VolunteerView from "./Screens/VolunteerView/VolunteerView";
import Booking from "../Components/VolunteerView/Booking/Booking";
import Urgent from "../Components/VolunteerView/Urgent/Urgent";

interface IAppRoutes {
  role: "volunteer" | "manager" | null;
}

const DesktopAppRoutes = ({ role }: IAppRoutes) => {
  return (
    <div className="contents">
      <div className="hidden md:block">
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
          {/* Create route for both volunteer and manager Mostly will have shared UI */}
        </Routes>
        {/* <div className="flex"> */}
        <Outlet />
        {/* </div> */}
      </div>
    </div>
  );
};

export default DesktopAppRoutes;
