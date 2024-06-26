import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import Tilt from "react-parallax-tilt";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const UpComingEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/carousel")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const slidesPerView = isMobile ? 1 : 3;

  return (
    <>
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
