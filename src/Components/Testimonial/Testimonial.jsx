import { Swiper, SwiperSlide } from "swiper/react";
import Tilt from "react-parallax-tilt";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import { Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("https://server-rafsan-tourist-travel-bd.vercel.app/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const perpageShow = isMobile ? 1 : 3;
  return (
    <div className="my-6 mx-2">
      <div className="text-center ">
        <p>Testimonial</p>
        <h1 className=" my-1 font-bold text-2xl lg:text-5xl">
          What our client say
        </h1>
      </div>
      <Swiper
        slidesPerView={perpageShow}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t._id}>
            <Tilt tiltEnable={false} scale={1.1} transitionSpeed={2500}>
              <div className="relative "></div>
              <div className="flex justify-center items-center p-8">
                <div className="w-full w mx-3 hover:shadow-indigo-300 hover:shadow-lg rounded-lg border">
                  <div className="flex justify-center items-start flex-col p-5 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="icon icon-tabler icon-tabler-quote rotate-180 text-sky-500"
                      viewBox="0 0 24 24"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5"></path>
                    </svg>

                    <div className="flex justify-center items-start flex-col text-left gap-5">
                      <p className="italic text-sm md:text-base">
                        {t.testimonial}
                      </p>

                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold">
                          {t.name}
                        </h3>

                        <Rating
                          className=""
                          style={{ maxWidth: 80 }}
                          value={t.rating}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-sky-500 p-0.5 rounded-b-lg"></div>
                </div>
              </div>
            </Tilt>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
