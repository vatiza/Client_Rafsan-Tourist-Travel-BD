import { useEffect, useState } from "react";

const usePlaceData = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return [places, loading];
};

export default usePlaceData;
