import { useEffect, useState } from "react";
import { ISessionData } from "../../data/sessionData";

import MobileHeader from "../../Components/Header/Header";
import Navigation from "../../Components/Navigation/Navigation";
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
    <div className="overflow-y-hidden">
    <MobileHeader />
    <Navigation />
    <Booking />
  </div>
  )
}

export default VolunteerView
