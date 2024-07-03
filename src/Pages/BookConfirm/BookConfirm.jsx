import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const BookConfirm = () => {
  const data = useLoaderData();
  const { user } = useAuth();

  console.log(user);
  return <div></div>;
};

export default BookConfirm;
