// import { useEffect, useState } from "react";
// import { ISessionData } from "./data/sessionData";
import "./App.css";
import { generateWeek } from "./utils/calendar";

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
  // const [sessions, setSessions] = useState<ISessionData[] | null>(null);

  // useEffect(() => {
  //   const dataHandler = async () => {
  //     const response = await fetch("/sessions");
  //     const data = await response.json();
  //     setSessions(data);
  //   };
  //   dataHandler();
  // }, []);

  /*
    Keep a single column design until you get to xl.
  
      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }
  */ 
//  we know that 2 = wednesday

  generateWeek()

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
