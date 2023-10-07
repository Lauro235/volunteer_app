import { Link } from "react-router-dom";
import { navigationVolunteer, navigationManager } from "../../../config";

interface INavigation {
  role: "volunteer" | "manager" | null;
}

const Navigation = ({role}: INavigation) => {
  const roleNotNull = role !== null && role;
  const navigationInstance = roleNotNull === "volunteer" ? navigationVolunteer : navigationManager;
  
  return (
    <div className="flex items-center justify-between flex-1 app-margin">
      {
        navigationInstance.map(anchor => {
          return (
            <Link key={anchor.path} to={anchor.path} className="flex flex-col items-center p-2 text-clr-primary hover:bg-hover hover:cursor-pointer hover:text-clr-primary">
              {<anchor.icon className="text-4xl"/>}
              <p>{anchor.label}</p>
            </Link>
          )
        })
      }
    </div>
  );
};

export default Navigation;
