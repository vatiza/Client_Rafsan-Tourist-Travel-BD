import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBookData = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: booking = [] } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booking?email=${user.email}`);
      return res.data;
    },
  });
  return [booking, refetch];
};

export default useBookData;
