import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import signupBg from "../../assets/svg/undraw_undraw_undraw_undraw_sign_up_ln1s_-1-_s4bc_-1-_ee41_-1-_kf4d.svg";
import useAuth from "../../Hook/useAuth";
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createNewUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
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
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>

            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true, maxLength: 80 })}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />

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
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    value="Sign up"
                  />
                </div>
              </form>
              <div>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  All ready You Have an Account?{" "}
                  <Link className="btn btn-link" to="/login">
                    Please Login
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
              backgroundImage: `url(${signupBg})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
