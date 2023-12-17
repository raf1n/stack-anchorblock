import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/stack-logo.png";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Inputs from "../../components/Inputs/Inputs";
import { useSignUpMutation } from "../../lib/redux/feature/auth/authApiSlice";
import toast from "react-hot-toast";
interface Inputs {
  email: string;
  password: string;
}

const SignUp = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordScore, setPasswordScore] = useState<number>(0);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [signUp] = useSignUpMutation({});

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await signUp(data);

    if (res) {
      toast.success("Signup successfully!");
      navigate("/users");
    } else {
      toast.error("Signup failed!");
    }
  };

  const checkStrength = () => {
    if (watch("password").length <= 2) {
      setPasswordScore(1);
    } else if (watch("password").length <= 3) {
      setPasswordScore(2);
    } else if (watch("password").length <= 4) {
      setPasswordScore(3);
    } else if (watch("password").length <= 5) {
      setPasswordScore(4);
    } else {
      setPasswordScore(5);
    }
  };

  useEffect(() => {
    checkStrength();
  }, [watch("password")]);

  return (
    <div className="mt-24">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 place-content-center place-items-center "
      >
        <div className="shadow-lg p-10 rounded-xl ">
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
              <Inputs
                placeholder="Email"
                type="email"
                error={errors.email}
                registerForm={{ ...register("email", { required: true }) }}
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
            <div>
              <h1 className="text-[#344054] text-start text-sm mb-1 font-medium">
                Password
              </h1>
              <Inputs
                placeholder="Password"
                error={errors.password}
                type="password"
                setValue={setPassword}
                value={password}
                func={checkStrength}
                registerForm={{ ...register("password", { required: true }) }}
              />

              {watch("password") && (
                <div className="flex -mx-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1/5 px-1">
                      <div
                        className={`h-[2px] rounded-xl transition-colors ${
                          passwordScore
                            ? passwordScore <= 2
                              ? i + 1 <= passwordScore
                                ? "bg-red-400"
                                : "bg-gray-200"
                              : passwordScore <= 4
                              ? i + 1 <= passwordScore
                                ? "bg-yellow-400"
                                : "bg-gray-200"
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
          {errors.password && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
          <div>
            <button
              type="submit"
              className="bg-primary text-white w-full mt-4 py-1 rounded-md font-"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4">
            <h1 className="text-[13px] font-normal text-gray-400 text-start">
              Already have an account?{" "}
              <Link className="text-[#377DFF] font-medium" to={"/sign-in"}>
                Sign In
              </Link>
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
