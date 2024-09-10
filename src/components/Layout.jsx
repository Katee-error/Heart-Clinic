import Header from "./Header";
import Footer from "./Footer";
import Routers from "../router/Routers";
import { Flex } from "@chakra-ui/react";
import StickyHeader from "./StickyHeader";

const Layout = () => {
  return (
    <Flex flexDirection={"column"} minH={"100vh"} overflowX={"hidden"}>
      <Header />
      <StickyHeader />
      <div>
        <Routers />
      </div>
      <Footer />
    </Flex>
  );
};

export default Layout;
// overflow????
