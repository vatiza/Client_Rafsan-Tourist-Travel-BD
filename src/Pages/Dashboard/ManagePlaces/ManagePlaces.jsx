import { FaTrash } from "react-icons/fa6";
import Header from "../../../Components/Header/Header";
import usePlaceData from "../../../Hook/usePlaceData";
import { FaRegEdit } from "react-icons/fa";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const ManagePlaces = () => {
  const [places, refetch] = usePlaceData();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (p) => {
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
        const res = await axiosSecure.delete(`/places/${p._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${p.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="text-center my-5">
        <h1 className="text-2xl font-bold lg:text-3xl">Manage Places</h1>
      </div>
      <div>
        <h1 className="text-xl ms-3">Total Places : {places.length}</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Places Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {places.map((p, index) => (
              <tr key={p._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={p.img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      {/* TODO: Full Details page showing when click name */}
                      <div className="font-bold">{p.name}</div>
                      <div className="text-sm opacity-50">{p.division}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="badge badge-accent badge-outline">
                    {" "}
                    {p.price} BDT
                  </div>{" "}
                  {p.days}
                  <br />
                  <span className="badge badge-ghost badge-sm">Per Person</span>
                </td>
                <td>
                  <button onClick={() => handleDelete(p)} className="btn">
                    <FaTrash className="text-red-700" />
                  </button>
                </td>
                <th>
                  <button className="btn ">
                    <FaRegEdit />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePlaces;
