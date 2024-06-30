import { CiLocationOn } from "react-icons/ci";
import { MdModeOfTravel } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";

const PackagesCard = ({ place }) => {
  const { name, img, price, description, division, days, sub_place_name } =
    place;
  return (
    <div className="mt-6">
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img className="w-full h-72" src={img} alt="Product Image" />
          <div className="absolute top-0 right-0 bg-red-500 flex items-center text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            BDT : {price} <TbCurrencyTaka /> / {days}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{name}</h3>
          <p className="flex items-center italic">
            <CiLocationOn /> Division : {division}
          </p>

          <p className="text-gray-600 text-sm mb-4">
            {description?.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </p>
          <div className="flex ">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
