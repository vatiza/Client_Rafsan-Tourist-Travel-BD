import { Helmet } from "react-helmet-async";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { RiHotelLine, RiTeamLine } from "react-icons/ri";

const Chooseus = () => {
  return (
    <div>
      
      <div className="text-center">
        {" "}
        <h1 className=" text-xl font-bold lg:text-6xl mt-4">Why Choose Us</h1>
        <p className="mt-2">Our services have been trusted by travelers.</p>
      </div>
      <div className="mx-6">
        <div className="text-center">
          <div className=" stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="flex justify-center text-5xl">
                <RiTeamLine />
              </div>
              <div className="font-bold text-xl">Best Service</div>
              <div className="">
                our service is reliable and convenient, our service is quality.
              </div>
            </div>

            <div className="stat">
              <div className="flex justify-center text-5xl">
                <FaCircleDollarToSlot />{" "}
              </div>
              <div className="font-bold text-xl">Price Guarantee</div>
              <div className="">
                our service is reliable and convenient, our service is quality.
              </div>
            </div>

            <div className="stat">
              <div className="flex justify-center text-5xl">
                <RiHotelLine />
              </div>
              <div className="font-bold text-xl">Handpicked Hotels</div>
              <div className="">
                our service is reliable and convenient, our service is quality.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
