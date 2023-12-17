import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/stack-logo.png";
import { SubmitHandler, useForm } from "react-hook-form";
import Inputs from "../../components/Inputs/Inputs";
import { useLoginMutation } from "../../lib/redux/feature/auth/authApiSlice";
import toast from "react-hot-toast";
interface Inputs {
  email: string;
  password: string;
}
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const [login] = useLoginMutation({});

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await login(data);

    if (res) {
      toast.success("Login successfully!");
      navigate("/users");
    } else {
      toast.error("Login failed!");
    }
  };

  return (
    <div className="mt-24">
      <div className="grid grid-cols-1 place-content-center place-items-center">
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
                Sign in to continue with Stack
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
                  registerForm={{ ...register("password", { required: true }) }}
                />
              </div>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
            <div>
              <button
                type="submit"
                className="bg-primary text-white w-full mt-4 py-1 rounded-md font-"
              >
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
