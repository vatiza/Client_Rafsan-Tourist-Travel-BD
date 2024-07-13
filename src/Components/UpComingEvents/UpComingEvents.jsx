import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useEvents from "../../Hook/useEvents";
import { Link } from "react-router-dom";
const UpComingEvents = () => {
  const [events] = useEvents();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const slidesPerView = isMobile ? 1 : 3;

  return (
    <>
      <div>
        <h1 className=" text-center my-8 font-bold text-3xl lg:text-5xl ">
          Up Coming
          <span className=" text-3xl lg:text-6xl text-green-600">Events </span>
        </h1>
        <div className="flex justify-end my-4">
          {" "}
          <Link className=" btn btn-outline btn-sm me-11" to="/allevents">
            See All -Events
          </Link>
        </div>
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={-30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {events.map((e) => (
          <SwiperSlide key={e._id}>
            <Tilt tiltEnable={false} scale={1.1} transitionSpeed={2500}>
              <div className="relative p-6 mx-11 lg:p-0">
                <img className="p-5 w-full " src={e.img} alt="Image" />
              </div>
            </Tilt>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default UpComingEvents;
