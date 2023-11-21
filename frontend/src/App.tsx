import "./App.css";

import { useLocation } from "react-router-dom";

import MobileAppRoutes from "./Mobile/MobileAppRoutes";
import { useEffect, useState } from "react";
import MobileView from "./Mobile/MobileView";
import DesktopView from "./Desktop/DesktopView";

function App() {
  const location = useLocation();
  const [role, setRole] = useState<"volunteer" | "manager" | null>(null);

  useEffect(() => {
    function checkRole() {
      const path = location.pathname;
      if (
        path === "/app/volunteer" ||
        path === "/app/volunteer/booking" ||
        path === "/app/volunteer/urgent"
      ) {
        setRole("volunteer");
      }
      if (path === "/app/manager") {
        setRole("manager");
      }
    }
    checkRole();
  }, [location]);

  return (
    <div className="overflow-y-hidden">
      {location.pathname !== "/" && location.pathname !== "/app" ? (
        <div className="contents">
          <MobileView role={role} />
          <DesktopView role={role} />
        </div>
      ) : (
        <MobileAppRoutes role={role} />
      )}
    </div>
  );
}

export default App;
