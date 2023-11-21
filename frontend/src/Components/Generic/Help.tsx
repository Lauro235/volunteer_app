import Card from "./Card";
import { instructionsVolunteer, instructionsManager } from "../../config";

interface IHelp {
  role: "volunteer" | "manager" | null;
}

const Help = ({ role }: IHelp) => {
  return (
    <Card className={{
      outer: "",
      inner: "w-full"
    }}>
      <h1 className="text-3xl font-medium md:text-xl">How to use this app</h1>

      {role === "volunteer" ? (
        <h2 className="text-xl md:text-lg">
          This application allows the volunteer to do the following:
        </h2>
      ) : (
        <h2 className="text-xl md:text-lg">
          This application allows the manager to do the following:
        </h2>
      )}

      <ul className="text-left text-base">
        {role === "volunteer"
          ? instructionsVolunteer.map((instruction, index) => {
              return (
                <li key={`${index}v`}>
                  {index + 1}. {instruction}
                </li>
              );
            })
          : instructionsManager.map((instruction, index) => {
              return (
                <li key={`${index}m`}>
                  {index + 1}. {instruction}
                </li>
              );
            })}
      </ul>
    </Card>
  );
};

export default Help;
