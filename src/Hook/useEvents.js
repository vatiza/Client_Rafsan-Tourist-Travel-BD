import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

const useEvents = () => {
  const axiosSecure = useAxiosPublic();
  const {
    refetch,
    data: events = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosSecure.get("/events");
      return res.data;
    },
  });
  return [events, refetch, loading];
};

export default useEvents;
