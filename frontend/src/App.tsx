// import { useEffect, useState } from "react";
// import { ISessionData } from "./data/sessionData";
import "./App.css";

import { useLocation } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import { useEffect } from "react";
import Layout from "./Layout";
import MobileHeader from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
// import Booking from "./Components/Booking/Booking";

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
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
      {location.pathname !== "/login" ? (
        <Layout>
          <MobileHeader />
          <Navigation role="volunteer" />
          <AppRoutes />
        </Layout>
      ) : (
        <AppRoutes />
      )}

      {/* <Booking /> */}
    </div>
  );
}

export default App;
