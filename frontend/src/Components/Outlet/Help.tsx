import Card from "../Generic/Card";
import { instructionsVolunteer, instructionsManager } from "../../config";

interface IHelp {
  role: "volunteer" | "manager" | false;
}

const Help = ({ role }: IHelp) => {
  return (
    <Card>
      <h1 className="text-3xl font-medium">How to use this app</h1>

      {role === "volunteer" ? (
        <h2 className="text-xl">This application allows the volunteer to do the following:</h2>
      ) : (
        <h2 className="text-xl">This application allows the manager to do the following:</h2>
      )}

      <ul className="text-left">
        {role === "volunteer" ? (
          instructionsVolunteer.map((instruction, index) => {
            return (
              <li>{index + 1}. {instruction}</li>
            )
          })
        ) : (
          instructionsManager.map((instruction, index) => {
            return (
              <li>{index + 1}. {instruction}</li>
            )
          })
        )}
      </ul>
    </Card>
  );
};

export default Help;
