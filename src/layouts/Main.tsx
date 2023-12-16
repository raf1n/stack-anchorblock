import { Outlet } from "react-router-dom";
import TopNavbar from "../components/Navbar/TopNavbar";
import { useState } from "react";

const Main = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section>
      <div className="">
        <TopNavbar toggle={toggle} setToggle={setToggle} />
        <div className="lg:p-8 md:p-4 p-2 w-[100vw] md:w-full overflow-hidden md:overflow-auto">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Main;
