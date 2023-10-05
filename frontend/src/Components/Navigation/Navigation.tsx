import { Link } from "react-router-dom";
import { navigationVolunteer, navigationManager } from "../../config";

interface INavigation {
  role: "volunteer" | "manager";
}

const Navigation = ({role}: INavigation) => {

  const navigationInstance = role === "volunteer" ? navigationVolunteer : navigationManager;
  
  return (
    <div className="flex items-center justify-between flex-1 app-margin">
      {
        navigationInstance.map(anchor => {
          return (
            <Link to={anchor.path} className="flex flex-col items-center p-2 text-clr-primary hover:bg-hover hover:cursor-pointer hover:text-clr-primary">
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
