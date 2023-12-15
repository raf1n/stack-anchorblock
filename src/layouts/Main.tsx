import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <section>
      {/* <div
        className={`${toggle ? "left-0" : "left-[-100%]"} 
        transition-all duration-500 md:left-0 w-[60%] md:w-[13%] lg:w-[120px] z-[100]
        fixed top-0 bottom-0 scroll-smooth 
        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white 
        scrollbar-thumb-rounded-full scrollbar-track-rounded-full
        overflow-y-auto scrollbar-hide hover:scrollbar-auto
        `}
      >
        <SideNavbar toggle={toggle} setToggle={setToggle} />
      </div> */}
      <div className="">
        {/* <TopNavbar toggle={toggle} setToggle={setToggle} />
        <div className="lg:p-8 md:p-4 p-2 w-[100vw] md:w-full overflow-hidden md:overflow-auto"> */}
        <Outlet />
      </div>
      {/* </div> */}
    </section>
  );
};

export default Main;
