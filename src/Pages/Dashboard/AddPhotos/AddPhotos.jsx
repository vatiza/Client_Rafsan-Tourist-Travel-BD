import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import { FaTrash } from "react-icons/fa6";
import useGallery from "../../../Hook/useGallery";
import moment from "moment";

const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const AddPhotos = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [gallery, refetch, loading] = useGallery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic
      .post(img_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .catch((e) => {
        toast.error("Something Wrong! Try Again!");
      });
    if (res.data.success) {
      const photoUrl = res.data.data.display_url;
      const eventsData = {
        img: photoUrl,
        placesName: data.name,
        date: new Date(),
      };

      axiosSecure.post("/gallery", eventsData).then((res) => {
        if (res.data.insertedId) {
          toast.success("Successfully Add New Events!");
        } else {
          toast.error("Something Wrong! Try Again!");
        }
      });
    }
  };
  console.log(gallery);
  const handleDelete = () => {};
  return (
    <div>
      <div className="text-center my-4">
        <h1 className="text-2xl font-bold lg:text-4xl">Add Photo to Gallery</h1>
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
          <div className="label ">
            <span className="label-text">Name</span>
          </div>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input className="btn ms-5 " type="submit" value="Upload" />
      </form>

      <div className="mt-6">
        <h1 className="ms-5 text-2xl font-bold">Manage Events</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {gallery.map((g, index) => (
                <tr key={g._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-24 rounded-xl hover:w-40">
                          <img
                            src={g?.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {g.placesName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {moment(g?.date).format("LLL")}
                    </span>
                  </td>

                  <td>
                    <button onClick={() => handleDelete()} className="btn">
                      <FaTrash className="text-red-600 " />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AddPhotos;
