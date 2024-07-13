import { Helmet } from "react-helmet-async";
import Header from "../../Components/Header/Header";
import usePlaceData from "../../Hook/usePlaceData";
import bgimg from "../../assets/img/img7.png";
import PackagesCard from "./PackagesCard";

const Packages = () => {
  const [places] = usePlaceData();

  return (
    <div>
      <Helmet>
        <title>Rafsan Tourist ... || Packages</title>
      </Helmet>
      <Header
        img={bgimg}
        text={"Packages"}
        subText={"Home > Packages"}
      ></Header>
      <div className="mx-7 mt-5">
        <h1 className="text-2xl font-bold lg:text-4xl  ">Popular Places</h1>

        <div className="grid grid-flow-row lg:grid-cols-3 gap-5">
          {places.map((place) => (
            <PackagesCard key={place._id} place={place}></PackagesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
