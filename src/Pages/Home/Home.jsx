import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import UpComingEvents from "../../Components/UpComingEvents/UpComingEvents";
import img from "../../assets/img/img3.png";
import Chooseus from "../Chooseus/Chooseus";
import ExploreNewPlace from "./ExploreNewPlace/ExploreNewPlace";
const Home = () => {
  return (
    <div>
      <div className="relative w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Background image"
        />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-black bg-opacity-50  p-1  lg:p-6 text-center text-white w-full lg:w-auto">
          <h1 className="text-xl lg:text-3xl font-bold">
            Rafsan Tourist & Travel BD
          </h1>
          <p className="">
            Explore the world with what you love beautiful natural beauty.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center my-5 font-bold text-2xl lg:text-5xl">
          Up Coming Events
        </h1>
        <UpComingEvents></UpComingEvents>
      </div>
      <ExploreNewPlace></ExploreNewPlace>
      <Chooseus></Chooseus>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
