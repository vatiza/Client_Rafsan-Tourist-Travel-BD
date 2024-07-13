import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGallery = () => {
  const axiosSecure = useAxiosPublic();
  const {
    refetch,
    data: gallery = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axiosSecure.get("/gallery");
      return res.data;
    },
  });
  return [gallery, refetch, loading];
};

export default useGallery;
