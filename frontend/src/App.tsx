// import { useEffect, useState } from "react";
// import { ISessionData } from "./data/sessionData";
import "./App.css";

import { useLocation } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import MobileHeader from "./Components/Header/Header";
import Navigation from "./Components/Generic/Navigation/Navigation";

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

  // console.log(sessions);

  /*
    Keep a single column design until you get to xl.
  
      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }
  */

  return (
    <div className="overflow-y-hidden">
      {location.pathname !== "/" && location.pathname !== "/app" ? (
        <Layout>
          <MobileHeader />
          <Navigation role={role} />
          <div className="grid items-stretch h-full row-span-6 row-start-3">
            <AppRoutes role={role} />
          </div>
        </Layout>
      ) : (
        <AppRoutes role={role} />
      )}
    </div>
  );
}

export default App;
