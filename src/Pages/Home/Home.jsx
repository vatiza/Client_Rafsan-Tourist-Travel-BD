import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import UpComingEvents from "../../Components/UpComingEvents/UpComingEvents";
import img from "../../assets/img/img3.png";
import Chooseus from "../Chooseus/Chooseus";
import GallerySliders from "../Gallery/GallerySliders";
import ExploreNewPlace from "./ExploreNewPlace/ExploreNewPlace";
const Home = () => {
  return (
    <div>
      <div className="relative w-full">
        <img className="w-full" src={img} alt="Background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-2xl md:text-8xl font-bold">Home</h1>
          <p className="text-center text-white mt-4">
            Explore the world with what you love beautiful natural beauty.
          </p>
        </div>
      </div>

      <UpComingEvents></UpComingEvents>

      <ExploreNewPlace></ExploreNewPlace>
      <GallerySliders></GallerySliders>
      <Chooseus></Chooseus>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
