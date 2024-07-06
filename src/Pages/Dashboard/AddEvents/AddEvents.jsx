import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const AddEvents = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(img_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const photoUrl = res.data.data.display_url;
      const eventsData = {
        img: photoUrl,
      };
      axiosPublic.post("/events", eventsData).then((res) => {
        if (res.data.insertedId) {
          toast.success("Successfully Add New Events!");
        }
        toast.error("Something Wrong! Try Again!");
      });
    }
  };
  return (
    <div>
      <div className="text-center my-4">
        <h1 className="text-2xl font-bold lg:text-4xl">Add Up Coming Events</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="ms-5 my-4">
          <div className="label ">
            <span className="label-text">Photo</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs text-white"
            {...register("image", { required: true })}
          />
        </div>
        <input className="btn ms-5 " type="submit" value="Upload" />
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AddEvents;
