import WeekView from "../Components/Generic/WeekView/WeekView";
import Layout from "../Layout";
import DesktopAppRoutes from "./DesktopAppRoutes";

interface IDesktopView {
  role: "volunteer" | "manager" | null;
}

const DesktopView = ({ role }: IDesktopView) => {

  return (
    <div className="hidden md:block">
      <Layout>
        <div className="grid grid-rows-9 gap-4 overflow-clip items-stretch max-h- row-span-full m-6 rounded-3xl">
          <div className="grid grid-cols-9 gap-3 row-start-1 row-span-5 hideweek:row-span-full">
            <div className="bg-clr-contrast col-start-1 col-span-3 rounded-br-3xl"></div>
            <div className="col-span-4 bg-white/20">
              <DesktopAppRoutes role={role}/>
            </div>
            <div className="bg-clr-contrast col-span-2 rounded-bl-3xl"></div>
          </div>
          <WeekView />
        </div>
      </Layout>
    </div>
  );
};

export default DesktopView;
