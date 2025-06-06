
import Nav from "../pages/Shared Pages/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared Pages/Footer";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Nav></Nav>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Main;
