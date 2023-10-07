import { Link } from "react-router-dom";
import Button from "../Button";

const ProfilePicker = () => {
  return (
    <div className="grid gap-12">
      <h1 className="text-2xl">Welcome to the Volunteer App!</h1>
      <div className="grid gap-6 pb-2 justify-items-center">
        <p>Please choose a role.</p>
        <div className="flex gap-5">
          <Link to="/app/volunteer">
            <Button text="Volunteer" />
          </Link>
          <Link to="/app/manager">
            <Button text="Manager" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicker;
