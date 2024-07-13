import useManageAllBooking from "../../../Hook/useManageAllBooking";

const ManageAllBooking = () => {
  const [allbooking, refetch, loading] = useManageAllBooking();
  console.log(allbooking);
  return <div></div>;
};

export default ManageAllBooking;
