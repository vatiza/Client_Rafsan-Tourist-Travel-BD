import { useLoaderData } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import SimpleParallax from "simple-parallax-js";

const Details = () => {
  const details = useLoaderData();
  const {
    _id,
    name,
    img,
    price,
    best_time_to_travel,
    description,
    division,
    days,
    sub_place_name,
    activity,
    itinerary,
  } = details;
  console.log(details);
  return (
    <div>
      <Header img={img} text={name} subText={division}></Header>
      <div>
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-auto rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <SimpleParallax>
                    <img
                      className=" w-full h-ful object-cover rounded-lg"
                      src={img}
                      alt="Product Image"
                    />
                  </SimpleParallax>
                </div>
                <div className="flex -mx-2 mb-4 mt-7">
                  <div className="w-1/2 px-2">
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Add to Cart
                    </button>
                  </div>
                  <div className="w-1/2 px-2">
                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {description}
                </p>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Price:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {price} (per person)
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Days :
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {days}
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Best Time To Travel :
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {best_time_to_travel}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    What Will We Cover?
                  </span>
                  <div className="flex items-center mt-2">{sub_place_name}</div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Activity
                  </span>
                  <div className="flex items-center mt-2">{activity}</div>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Itinerary:
                  </span>
                  <div className=" mt-2">
                    {Object.keys(itinerary).map((day, index) => (
                      <div key={index}>
                        <ul className="timeline timeline-vertical">
                          <li>
                            <div className="timeline-start">{[day]}</div>
                            <div className="timeline-middle">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className="timeline-end timeline-box hover:text-xl">
                              {itinerary[day]}
                            </div>
                            <hr />
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
