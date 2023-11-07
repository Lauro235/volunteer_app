import Layout from "../Layout";

interface IDesktopView {
  role: "volunteer" | "manager" | null;
}

const DesktopView = ({ role }: IDesktopView) => {
  console.log(role);

  return (
    <div className="hidden md:block">
      <Layout>
        <div className="grid grid-rows-9 gap-4 overflow-clip items-stretch row-span-full rounded-3xl m-5">
          <div className="grid grid-cols-9 gap-3 row-start-1 row-span-5">
            <div className="bg-clr-contrast col-start-1 col-span-2 rounded-br-3xl"></div>
            <div className="col-span-4 bg-white/20"></div>
            <div className="bg-clr-contrast col-span-3 rounded-bl-3xl"></div>
          </div>
          <div className="row-span-4 text-left gap-2 grid grid-cols-7 bg-gray-600">
            <div className="bg-[#eee]">
              <p>Mon</p>
              <p>1</p>
            </div>
            <div className="bg-[#eee]">
              <p>Tue</p>
              <p>2</p>
            </div>
            <div className="bg-[#eee]">
              <p>Wed</p>
              <p>3</p>
            </div>
            <div className="bg-[#eee]">
              <p>Thu</p>
              <p>4</p>
            </div>
            <div className="bg-[#eee]">
              <p>Fri</p>
              <p>5</p>
            </div>
            <div className="bg-[#eee]">
              <p>Sat</p>
              <p>6</p>
            </div>
            <div className="bg-[#eee]">
              <p>Sun</p>
              <p>7</p>
            </div>
          </div>
          {/* <p>Some text</p> */}
        </div>
      </Layout>
    </div>
  );
};

export default DesktopView;
