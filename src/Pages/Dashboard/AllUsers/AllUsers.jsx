import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaTrash, FaUsers } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      {
        if (res.data.modifiedCount > 0) {
          toast.success("Successfully Make Admin!");
          refetch();
        }
      }
    });
  };
  const handleDeleteuser = (id) => {
    axiosSecure.delete(`/users/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.success("Successfully User Delete!");
        refetch();
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>isAdmin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={u._id}>
              <th>{index + 1}</th>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                {u.role === "admin" ? (
                  <>
                    <MdAdminPanelSettings className="text-2xl text-green-700" />
                  </>
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(u._id)}
                    className="btn btn-lg bg-orange-500"
                  >
                    <FaUsers className="text-white text-2xl"></FaUsers>
                  </button>
                )}
              </td>
              <td>
                <button
                  className="btn btn-ghost text-red-600"
                  onClick={() => handleDeleteuser(u._id)}
                >
                  {" "}
                  <FaTrash></FaTrash>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AllUsers;
