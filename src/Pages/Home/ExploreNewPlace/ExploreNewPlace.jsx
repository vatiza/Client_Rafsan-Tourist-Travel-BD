import usePlaceData from "../../../Hook/usePlaceData";
import { Swiper, SwiperSlide } from "swiper/react";
import SimpleParallax from "simple-parallax-js";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

const ExploreNewPlace = () => {
  const [places] = usePlaceData();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const slidesPerView = isMobile ? 1 : 3;

  return (
    <div>
      <div className="-mb-5 text-center">
        <h1 className=" text-center my-5 font-bold text-3xl lg:text-5xl ">
          Explore New{" "}
          <span className=" text-3xl lg:text-6xl text-green-600">Area</span>{" "}
          With Exotic Natural Scenery
        </h1>
      </div>
      <div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {places.map((p) => (
            <SwiperSlide key={p._id}>
              <div className="-mt-10">
                <div className="relative    flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                  <SimpleParallax>
                    <img
                      src={p.img}
                      alt="coxbazar"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </SimpleParallax>

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                    {p.name}
                  </h3>
                  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    {p.division}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ExploreNewPlace;
