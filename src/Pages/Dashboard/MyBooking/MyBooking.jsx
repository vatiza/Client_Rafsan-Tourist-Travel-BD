import React from "react";
import useBookData from "../../../Hook/useBookData";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const MyBooking = () => {
  const [booking, refetch] = useBookData();
  console.log(booking);
  const axiosSecure = useAxiosSecure();
  const handleRemoveBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Cancel Your Booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/booking/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Canceled!",
              text: "Your Booking has been canceled.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-bold lg:text-3xl my-3">
        My Booking List
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Place Name</th>
              <th>Price</th>
              <th>Messages</th>
              <th>Process</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((b, index) => (
              <tr key={b._id}>
                <th>{index + 1}</th>
                <td>
                  {b?.placesName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {b?.division}
                  </span>
                </td>
                <td>
                  Members : {b?.members}
                  <br />
                  BDT : {b?.totalPrice}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Per Person : {b?.perPersonPrice}
                  </span>
                </td>
                <td>{b?.cMessage}</td>
                <td>
                  <button>Payment Now</button>
                </td>
                <td>
                  <button className="btn">Details</button>
                </td>
                <td>
                  <button
                    onClick={() => handleRemoveBooking(b?._id)}
                    className="btn"
                  >
                    <FaTrashCan />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
