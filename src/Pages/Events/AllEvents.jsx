import moment from "moment";
import useEvents from "../../Hook/useEvents";
import { useState } from "react";

const AllEvents = () => {
  const [events] = useEvents();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <h1 className="text-center font-bold text-2xl lg:text-4xl mt-5">
        Events
      </h1>
      <div className="mx-2 md:mx-24 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {events.map((e) => (
            <div
              key={e._id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(e.img)}
            >
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <img
                  className="h-auto max-w-full rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                  src={e.img}
                  alt="Gallery image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div>
                    <h1 className="text-white font-bold text-lg">
                      {moment(e?.date).format("LL")}
                    </h1>
                    <button className="btn btn-outline  mt-7">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => {
              setSelectedImage(null);
            }}
          >
            <img
              className="h-auto max-w-full rounded-lg transform transition-transform duration-500 ease-in-out scale-110"
              src={selectedImage}
              alt="Full screen image"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AllEvents;
