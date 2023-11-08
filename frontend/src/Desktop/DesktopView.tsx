import WeekView from "../Components/Generic/WeekView/WeekView";
import Layout from "../Layout";

interface IDesktopView {
  role: "volunteer" | "manager" | null;
}

const DesktopView = ({ role }: IDesktopView) => {
  console.log(role);

  return (
    <div className="hidden md:block">
      <Layout>
        <div className="grid gap-4 overflow-clip items-stretch row-span-full rounded-3xl">
          <div className="grid grid-cols-9 gap-3 row-start-1 row-span-5">
            <div className="bg-clr-contrast col-start-1 col-span-2 rounded-br-3xl"></div>
            <div className="col-span-4 bg-white/20"></div>
            <div className="bg-clr-contrast col-span-3 rounded-bl-3xl"></div>
          </div>
          <WeekView />
          {/* <p>Some text</p> */}
        </div>
      </Layout>
    </div>
  );
};

export default DesktopView;
