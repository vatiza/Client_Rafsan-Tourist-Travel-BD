import { Swiper, SwiperSlide } from "swiper/react";
import useGallery from "../../Hook/useGallery";

// Import Swiper styles
import moment from "moment";
import { useMediaQuery } from "react-responsive";
import SimpleParallax from "simple-parallax-js";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const GallerySliders = () => {
  const [gallery, loading] = useGallery();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const slidesPerView = isMobile ? 1 : 3;
  return (
    <div className="mt-9">
      <h1 className=" text-center my-8 font-bold text-3xl lg:text-5xl ">
        Captured{" "}
        <span className=" text-3xl lg:text-6xl text-green-600">Best </span>
        Moments
      </h1>
      <div className="flex justify-end my-4">
        {" "}
        <Link className=" btn" to="/gallery">
          See All -Photos
        </Link>
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidesPerView}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {gallery.map((g) => (
            <SwiperSlide key={g._id}>
              <div className="-mt-10">
                <div className="relative flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                  <SimpleParallax>
                    <img
                      src={g.img}
                      alt="coxbazar"
                      className="absolute inset-0  object-cover"
                    />
                  </SimpleParallax>

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                    {g.placesName}
                  </h3>
                  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    {moment(g?.date).format("LL")}
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

export default GallerySliders;
