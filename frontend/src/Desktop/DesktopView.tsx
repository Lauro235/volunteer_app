import Layout from "../Layout";

interface IDesktopView {
  role: "volunteer" | "manager" | null;
}

const DesktopView = ({role}: IDesktopView) => {
  console.log(role);
  
  return (
    <Layout>
      <div className="grid grid-rows-9 gap-4 overflow-clip items-stretch row-span-full rounded-3xl m-5">
        <div className="row-start-1 bg-red-600 row-span-5"></div>
        <div className="row-span-4 bg-gray-600"></div>
        {/* <p>Some text</p> */}
      </div>
    </Layout>
  );
}

export default DesktopView