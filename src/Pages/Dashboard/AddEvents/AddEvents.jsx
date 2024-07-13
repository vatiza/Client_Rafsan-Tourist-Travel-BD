import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import useEvents from "../../../Hook/useEvents";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import moment from "moment";

const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const AddEvents = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [events, refetch] = useEvents();
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
        date: data.date,
      };
      console.log(eventsData);
      axiosSecure.post("/events", eventsData).then((res) => {
        if (res.data.insertedId) {
          refetch();
          toast.success("Successfully Add New Events!");
        } else {
          toast.error("Something Wrong! Try Again!");
        }
      });
    }
  };
  const handleDelete = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/events/${e._id}`);
        console.log(res);
        if (res.data?.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your Events has been deleted.",
            icon: "success",
          });
        }
      }
    });
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
            className="file-input file-input-bordered w-full max-w-xs "
            {...register("image", { required: true })}
          />
          <div className="label ">
            <span className="label-text">Date</span>
          </div>
          <input
            type="date"
            className="file-input file-input-bordered w-full max-w-xs "
            {...register("date", { required: true })}
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
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e, index) => (
                <tr key={e._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-24 rounded-xl hover:w-40">
                          <img
                            src={e.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{moment(e?.date).format("MMM Do YY")}</td>
                  <td>
                    <button onClick={() => handleDelete(e)} className="btn">
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

export default AddEvents;
