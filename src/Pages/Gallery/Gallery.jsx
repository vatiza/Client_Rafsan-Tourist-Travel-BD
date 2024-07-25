import moment from "moment/moment";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SimpleParallax from "simple-parallax-js";
import Header from "../../Components/Header/Header";
import useGallery from "../../Hook/useGallery";
import bgimg from "../../assets/img/img6.png";
const Gallery = () => {
  const [gallery, refetch, loading] = useGallery();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Helmet>
        <title>Rafsan Tourist ... || Gallery</title>
      </Helmet>
      
      <Header img={bgimg} text={"Gallery"} subText={"Home > Gallery"} />
      <div className="mx-2 md:mx-24 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {gallery.map((g) => (
            <div
              key={g._id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(g.img)}
            >
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <SimpleParallax>
                  <img
                    className="h-auto max-w-full rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                    src={g.img}
                    alt="Gallery image"
                  />
                </SimpleParallax>

                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div>
                    <h1 className="text-white font-bold text-lg">
                      {g?.placesName}
                    </h1>
                    <p className="text-white">{moment(g?.date).format("LL")}</p>
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

export default Gallery;
