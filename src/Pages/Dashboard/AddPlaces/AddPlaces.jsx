import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddPlaces = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [days, setDays] = useState(1);
  const [fields, setFields] = useState([{ name: `day_${days}`, value: "" }]);
  const fieldIncremnet = () => {
    const newDays = days + 1;
    setDays(newDays);
    setFields([...fields, { name: `day_${newDays}`, value: "" }]);
  };
  const fieldDecrement = () => {
    if (days > 1) {
      const newDays = days - 1;
      setDays(newDays);
      setFields(fields.slice(0, -1));
    }
  };

  const handleFields = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(img_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.data.display_url) {
      const itinerary = fields.reduce((acc, field) => {
        acc[field.name] = field.value;
        return acc;
      }, {});
      const placeInfo = {
        name: data.pname,
        division: data.division,
        description: data.description,
        img: res.data.data.display_url,
        sub_place_name: data.subplacename,
        activity: data.activity,
        price: data.price,
        include: data.include,
        not_include: data.notInclude,
        best_time_to_travel: data.bestTimeToTravel,
        days: days,
        itinerary: itinerary
      };
      console.log(placeInfo);
      // const postPlace = await axiosSecure.post("/places", placeInfo);
    }
  };
  return (
    <div>
      <div>
        <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Add New Place
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Introducing Your Next Adventure
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-x-8  gap-y-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Place Name
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("pname", {})}
                    type="text"
                    placeholder="Cox's Bazar"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Division Name
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("division", {})}
                    placeholder="Khulna"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2.5">
                  <textarea
                    {...register("description", {})}
                    placeholder="Cox's Bazar is the longest natural sea beach in the world..."
                    className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:bg-white focus:ring-blue-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Sub Place Name
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("subplacename", {})}
                    placeholder="Inani Beach, Himchari National Park"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Activity
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("activity", {})}
                    placeholder="Beach activities, hiking, photography"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Include
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("include", {})}
                    placeholder="Hotel stay, breakfast, guided tour"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Not Include
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("notInclude", {})}
                    placeholder="Lunch, dinner, personal expenses"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Best_time_to_travel
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("bestTimeToTravel", {})}
                    placeholder="November to February"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 flex gap-3 items-center">
                <label className="block text-sm font-semibold leading-6 text-gray-900">
                  Days
                </label>
                <div className="">
                  <div>
                    <a
                      onClick={fieldDecrement}
                      className="px-4 btn btn-sm py-2 bg-gray-200"
                    >
                      -
                    </a>
                    <span className="px-4">{days}</span>
                    <a
                      onClick={fieldIncremnet}
                      className="px-4 py-2 btn btn-sm bg-gray-200"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 flex gap-3 items-center">
                <label className="block  font-bold leading-6 text-gray-900">
                  Itinerary
                </label>
              </div>
              <div>
                {fields.map((field, index) => (
                  <div key={index} className="mb-2">
                    <label className="mr-2">{field.name}</label>
                    <input
                      onChange={(e) => handleFields(index, e)}
                      placeholder="Arrival at Kuakata, check-in at hotel, visit the beach in the evening"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="label">
              <span className="label-text font-bold">Price</span>
            </div>
            <input
              {...register("amount", {})}
              placeholder="BDT: 1200"
              className="block  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-white"
            />

            <div className="label">
              <span className="label-text font-bold">Photo</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered block  rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-white"
              {...register("image")}
            />

            <div className="mt-10">
              <input
                value="Submit"
                type="submit"
                className="bg-blue-600 btn text-white rounded-sm py-2 w-full block"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlaces;
