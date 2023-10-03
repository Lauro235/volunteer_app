import { Routes, Route } from "react-router-dom";

import LoginView from "./Screens/LoginView/LoginView";
import VolunteerView from "./Screens/VolunteerView/VolunteerView";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="volunteer" element={<VolunteerView />} />
      </Routes>
    </div>
  )
}

export default AppRoutes