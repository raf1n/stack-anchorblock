import { Link } from "react-router-dom";
import Logo from "../../assets/images/stack-logo.png";

const SignIn = () => {
  return (
    <div className="mt-24">
      <div className="grid grid-cols-1 place-content-center place-items-center">
        <form className="shadow-lg p-10 rounded-xl">
          <div className="flex items-center gap-2">
            <img className="w-14 h-10 -ml-2" src={Logo} alt="" />
            <h1 className="text-[#4E5D78] font-bold text-2xl">Stack</h1>
          </div>
          <div>
            <h1 className="font-semibold text-xl mt-2 text-[#404040]">
              Sign in to continue with Stack
            </h1>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <h1 className="text-[#344054] text-start text-sm mb-1 font-medium">
                Email
              </h1>
              <input
                className="w-full px-3 py-1 mb-1 border-2 border-gray-200 rounded-md focus:outline-none 
              focus:border-violet-400 focus:ring focus:ring-violet-200"
                placeholder="Enter Email"
                type="email"
              />
            </div>
            <div>
              <h1 className="text-[#344054] text-start text-sm mb-1 font-medium">
                Password
              </h1>
              <input
                className="w-full px-3 py-1 mb-1 border-2 border-gray-200 rounded-md focus:outline-none 
                focus:border-violet-400 focus:ring focus:ring-violet-200"
                placeholder="Enter Password"
                type="password"
              />
            </div>
          </div>
          <div>
            <button className="bg-primary text-white w-full mt-4 py-1 rounded-md font-">
              Sign In
            </button>
          </div>
          <div className="mt-4">
            <h1 className="text-[13px] font-normal text-gray-400 text-start">
              Don't have an account?{" "}
              <Link className="text-[#377DFF] font-medium" to={"/sign-up"}>
                Sign Up
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
