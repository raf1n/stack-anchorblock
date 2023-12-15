import { Link } from "react-router-dom";
import Logo from "../../assets/images/stack-logo.png";
import { useState } from "react";
import zxcvbn from "zxcvbn";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [passwordScore, setPasswordScore] = useState(0);

  const checkStrength = () => {
    if (!password) return setPasswordScore(0);
    setPasswordScore(zxcvbn(password).score + 1);
  };

  return (
    <div className="mt-24">
      <div className="grid grid-cols-1 place-content-center place-items-center">
        <div className="shadow-lg p-10 rounded-xl">
          <div className="flex items-center gap-2">
            <img className="w-14 h-10 -ml-2" src={Logo} alt="" />
            <h1 className="text-[#4E5D78] font-bold text-2xl">Stack</h1>
          </div>
          <div>
            <h1 className="font-semibold text-xl mt-2 text-[#404040]">
              Sign up to join with Stack
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
                type="text"
              />
            </div>
            <div>
              <h1 className="text-[#344054] text-start text-sm mb-1 font-medium">
                Password
              </h1>
              <input
                className="w-full px-3 py-1 mb-1 border-2 border-gray-200 rounded-md focus:outline-none 
              focus:border-red-500 focus:ring focus:ring-red-200"
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  checkStrength();
                }}
              />
              {password && (
                <div className="flex -mx-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1/5 px-1">
                      <div
                        className={`h-[2px] rounded-xl transition-colors ${
                          i < passwordScore
                            ? passwordScore <= 2
                              ? "bg-red-400"
                              : passwordScore <= 4
                              ? "bg-yellow-400"
                              : "bg-green-500"
                            : "bg-gray-200"
                        }`}
                      ></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <button className="bg-primary text-white w-full mt-4 py-1 rounded-md font-">
              Sign Up
            </button>
          </div>
          <div className="mt-4">
            <h1 className="text-[13px] font-normal text-gray-400 text-start">
              Already have an account?{" "}
              <Link className="text-[#377DFF] font-medium" to={"/"}>
                Sign In
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
