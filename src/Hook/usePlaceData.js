import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const usePlaceData = () => {
  const {
    refetch,
    data: places = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["places"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/places");
      return res.json();
    },
  });
  return [places, refetch, loading];
};

export default usePlaceData;
