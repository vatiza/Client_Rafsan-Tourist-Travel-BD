import React from "react";
import useBookData from "../../../Hook/useBookData";
import { FaTrashCan } from "react-icons/fa6";

const MyBooking = () => {
  const [booking, refetch] = useBookData();
  console.log(booking);
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
                  <button className="btn">
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
