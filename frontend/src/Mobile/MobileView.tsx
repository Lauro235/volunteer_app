import MobileAppRoutes from "./MobileAppRoutes";
import Layout from "../Layout";
import MobileHeader from "../Components/Header/MobileHeader";
import MobileNavigation from "../Components/Generic/MobileNavigation/MobileNavigation";

interface IMobileProps {
  role: "volunteer" | "manager" | null;
}

const MobileView = ({role}: IMobileProps) => {
  return (
    <div className="md:hidden">
      <Layout>
        <MobileHeader />
        <MobileNavigation role={role} />
        <div className="grid items-stretch h-full row-span-5 md:row-span-full md:py-5">
          <MobileAppRoutes role={role} />
        </div>
      </Layout>
    </div>
  );
};

export default MobileView;
