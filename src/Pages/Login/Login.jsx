import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import loginBg from "../../assets/svg/undraw_secure_login_pdn4.svg";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { loginWithEmailPass } = useAuth();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;
    loginWithEmailPass(email, pass)
      .then((result) => {
        toast.success("Successfully Login!");
        navigate(from, { replace: true });
      })
      .catch((e) => console.log(e.massage));
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <h1 className="w-auto text-center font-bold text-3xl mx-auto">
              Rafsan Tourist & Travel BD
            </h1>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>

            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  <div className="relative w-full">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is Required",
                        minLength: {
                          value: 8,
                          message:
                            "Password must be at least 8 characters long",
                        },
                      })}
                    />
                    <p
                      className="absolute  inset-y-0 right-0 pr-4 pt-5 flex items-center text-sm leading-5 "
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </p>
                  </div>

                  <div>
                    <p className="mt-6 text-xs text-gray-600 text-center">
                      I agree to terms
                      <a
                        href="#"
                        className="border-b border-gray-500 border-dotted"
                      >
                        Terms of Service
                      </a>
                      and its
                      <a
                        href="#"
                        className="border-b border-gray-500 border-dotted"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                  <input
                    type="submit"
                    className="mt-5 btn tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    value="Login"
                  />
                </div>
              </form>
              <div>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Do not have an account?{" "}
                  <Link className="btn btn-link" to="/signup">
                    Create New Account
                  </Link>
                </p>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  or use one of these options
                </div>
              </div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${loginBg})`,
            }}
          ></div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Login;
