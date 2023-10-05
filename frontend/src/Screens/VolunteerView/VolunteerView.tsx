import { useEffect, useState } from "react";
import { ISessionData } from "../../data/sessionData";


import Booking from "../../Components/Booking/Booking";


const VolunteerView = () => {
  const [sessions, setSessions] = useState<ISessionData[] | null>(null);

  useEffect(() => {
    const dataHandler = async () => {
      const response = await fetch("/sessions");
      const data = await response.json();
      setSessions(data);
    };
    dataHandler();
  }, []);
  
  return (
    // <div className="grid gap-6 overflow-y-hidden">
    <>
    {/* <MobileHeader /> */}
    {/* <Navigation /> */}

    {/* <Outlet /> */}
    
    <Booking />
  </>
  )
}

export default VolunteerView
