import { FaLocationArrow } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { MdLocationCity, MdOutlinePreview, MdPreview } from "react-icons/md";
import { TbCoinTakaFilled, TbSunMoon } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoLocation } from "react-icons/io5";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import useBookData from "../../Hook/useBookData";

const BookNow = () => {
  const { user } = useAuth();
  const places = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useBookData();
  const { _id, img, name, division, activity, price, days } = places;
  const [members, setMembers] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const calculateTotalPrice = members * price;
  const onSubmit = async (data) => {
    console.log(data);
    if (user && user?.email) {
      const bookingInfo = {
        placeId: _id,
        cName: user?.displayName,
        cEmail: user?.email,
        cPhone: data.phone,
        members: members,
        cMessage: data.message,
        placesName: name,
        division: division,
        perPersonPrice: parseFloat(price),
        totalPrice: parseFloat(calculateTotalPrice),
      };
      axiosSecure
        .post("/booking", bookingInfo)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Successfully Book Your Seat!");
          }
        })
        .catch((e) => {
          toast.error("Something Wrong! Please Try Again.");
        });
    }
  };

  return (
    <div>
      <div className="text-center text-2xl font-bold">Checkout ...</div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src={img}
                    alt="ContactUs tailwind section"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
                  />

                  <div className="absolute top-0 w-full p-2">
                    <div className="bg-white bg-opacity-85 rounded-lg p-6 block">
                      <a className="flex items-center text-2xl text-blue-700 mb-6">
                        <IoLocation />
                        <h5 className="text-black  leading-6 ml-5">
                          {name} ({days})
                        </h5>
                      </a>
                      <a className="flex items-center text-2xl text-blue-700 mb-6">
                        <MdLocationCity />
                        <h5 className="text-black  leading-6 ml-5">
                          {division}
                        </h5>
                      </a>
                      <a className="flex items-center text-2xl text-blue-700 mb-6">
                        <MdPreview />
                        <h5 className="text-black  leading-6 ml-5">
                          {activity}
                        </h5>
                      </a>
                      <a className="flex items-center text-2xl text-blue-700 mb-6">
                        <TbCoinTakaFilled />
                        <h5 className="text-black  leading-6 ml-5">
                          BDT : {price} (Per Person)
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                <h2 className="text-blue-700  text-4xl font-bold leading-10 ">
                  Checkout ...
                </h2>

                <input
                  readOnly
                  type="text"
                  className="w-full  h-12 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-5"
                  placeholder={user?.displayName}
                />

                <input
                  readOnly
                  type="text"
                  className="w-full h-12 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-5"
                  placeholder={user?.email}
                />
                <input
                  {...register("phone", { required: true, maxLength: 11 })}
                  type="number"
                  className="w-full h-12 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-5"
                  placeholder="01629563621"
                />
                {errors.phone?.type === "required" && (
                  <p className="text-red-600">Phone Number is required</p>
                )}
                {errors.phone?.type === "maxLength" && (
                  <p className="text-red-600">Please Valid Phone Number </p>
                )}

                <div className="flex justify-between    mb-5 items-center">
                  <div>
                    {" "}
                    <h1>Members</h1>
                  </div>
                  <div>
                    <a
                      onClick={() => setMembers(members - 1)}
                      className="px-4 btn btn-sm py-2 bg-gray-200"
                    >
                      -
                    </a>
                    <span className="px-4">{members}</span>
                    <a
                      onClick={() => setMembers(members + 1)}
                      className="px-4 py-2 btn btn-sm bg-gray-200"
                    >
                      +
                    </a>
                  </div>
                </div>

                <textarea
                  {...register("message")}
                  placeholder="Message "
                  className="textarea textarea-bordered textarea-lg w-full  "
                ></textarea>
                <input
                  value="Confirm"
                  type="submit"
                  className="w-full h-12 btn text-white text-base font-semibold leading-6 rounded-lg transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Booking Summary */}
      <div className=" ">
        <h2 className="text-xl font-bold mb-2 text-center">Booking Summary</h2>
        <div className="p-4 border">
          <div className="flex items-center justify-between  ">
            <p> Customer Name:</p>
            <div className="flex-grow border-b border-dashed border-gray-300 mr-2"></div>
            <span className="float-right"> {user?.displayName} </span>
          </div>
          <div className="flex items-center justify-between  ">
            <p> Customer Email:</p>
            <div className="flex-grow border-b border-dashed border-gray-300 mr-2"></div>
            <span className="float-right"> {user?.email} </span>
          </div>
          <div className="flex items-center justify-between  ">
            <p> Place Name:</p>
            <div className="flex-grow border-b border-dashed border-gray-300 mr-2"></div>
            <span className="float-right"> {name} </span>
          </div>
          <div className="flex items-center justify-between  ">
            <p> Days:</p>
            <div className="flex-grow border-b border-dashed border-gray-300 mr-2"></div>
            <span className="float-right"> {days} </span>
          </div>
          <div className="flex items-center justify-between  ">
            <p> Totals Members:</p>
            <div className="flex-grow border-b border-dashed border-gray-300 mr-2"></div>
            <span className="float-right"> {members} </span>
          </div>
          <div className="flex items-center justify-between  ">
            <p> Price (Per Person):</p>
            <div className="flex-grow border-b border-dashed border-gray-300 mr-2"></div>
            <span className="float-right">BDT : {price} TK</span>
          </div>
          <div className="flex items-center justify-between font-bold text-xl">
            <p>Total Price:</p>
            <div className="flex-grow border-b border-dashed border-gray-300 mr-2"></div>
            <span className="float-right">BDT : {calculateTotalPrice} TK</span>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default BookNow;
