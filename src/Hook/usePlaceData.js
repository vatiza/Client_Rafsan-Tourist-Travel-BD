import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const usePlaceData = () => {
  const axiosSecure = useAxiosPublic();
  const {
    refetch,
    data: places = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["places"],
    queryFn: async () => {
      const res = await axiosSecure.get("/places");
      return res.data;
    },
  });
  return [places, refetch, loading];
};

export default usePlaceData;
