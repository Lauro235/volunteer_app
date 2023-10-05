import Layout from "../../Layout";
import MobileHeader from "../../Components/Header/Header";
import Navigation from "../../Components/Navigation/Navigation";

// interface IRoot {

// }

// const Root = ({children}: PropsWithChildren) => {
const Root = () => {
  return (
    <Layout>
      <MobileHeader />
      <Navigation />
    </Layout>
  );
};

export default Root;
