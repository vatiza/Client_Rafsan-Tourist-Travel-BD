import img from "../../assets/img/img3.png";
import Chooseus from "./Chooseus/Chooseus";
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
      <Chooseus></Chooseus>
    </div>
  );
};

export default Home;
