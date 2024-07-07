import useGallery from "../../Hook/useGallery";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import { useEffect, useState } from "react";
import moment from "moment/moment";
const Gallery = () => {
  const [gallery, refetch, loading] = useGallery();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (img) => {
    setSelectedImage(img);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mx-4 md:mx-32 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {gallery.map((g) => (
          <div
            key={g._id}
            className="relative group cursor-pointer"
            onClick={() => handleClick(g.img)}
          >
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <img
                className="h-auto max-w-full rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                src={g.img}
                alt="Gallery image"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg">View Image</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <img
            className="h-auto max-w-full rounded-lg transform transition-transform duration-500 ease-in-out scale-110"
            src={selectedImage}
            alt="Full screen image"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
