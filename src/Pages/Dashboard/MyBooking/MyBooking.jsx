import React from "react";
import { MdOutlineCancel, MdOutlinePerson } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useBookData from "../../../Hook/useBookData";
import moment from "moment";

const MyBooking = () => {
  const [booking, refetch] = useBookData();

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  // TODO: Payment is Loading.just fun mode in running.
  const handlePayment = (bookingData) => {
    Swal.fire({
      title: "Choose The Payment Gateway 🤣just fun!🤣 ",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Bkash",
      denyButtonText: `Nagad`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          axiosPublic
            .post("/bkash-checkout", {
              amount: bookingData.totalPrice,
              callbackURL:
                "https://server-rafsan-tourist-travel-bd.vercel.app/bkash-callback",
              orderID: 1223,
              reference: bookingData._id,
            })
            .then((res) => {
              console.log(res);
              window.location.href = res?.data;
            })
            .catch((e) => {
              console.log(e);
            });
        } catch (error) {
          console.log(error);
        }
      } else if (result.isDenied) {
        Swal.fire("Nagad is Coming...", "", "info");
      }
    });
  };

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
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((b, index) => (
              <tr key={b._id}>
                <th>{index + 1}</th>
                <td>
                  {b?.placesName}
                  <br />
                  <span className="badge badge-ghost badge-sm ">
                    {b?.division}
                  </span>
                  <br />
                  <span className="badge badge-ghost badge-sm ">
                    {moment(b?.date).format("ll")}
                  </span>
                </td>
                <td>
                  BDT: {b?.totalPrice}
                  <br />
                  <span className="flex items-center">
                    <MdOutlinePerson />
                    {b?.members}
                  </span>
                  <br />
                </td>
                <td>{b?.cMessage}</td>
                <td>
                  <button
                    className="btn btn-outline btn-sm btn-warning"
                    onClick={() => handlePayment(b)}
                  >
                    Pay Now
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline btn-info btn-sm">
                    Details
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleRemoveBooking(b?._id)}
                    className="btn btn-outline btn-sm  btn-error"
                  >
                    <MdOutlineCancel />
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
