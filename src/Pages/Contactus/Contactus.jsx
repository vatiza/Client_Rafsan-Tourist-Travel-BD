/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../Components/Header/Header";
import bgimg from "../../assets/img/img4.png";
const Contactus = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message Send!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message Send Fail.");
        }
      );
  };
  return (
    <div>
      <Header
        img={bgimg}
        text={"Contact Us"}
        subText={"Home > Contact Us"}
      ></Header>
      <div>
        <section className="bg-blue-50 dark:bg-slate-800" id="contact">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="">
              <div className=" max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-xl font-bold  ">
                  Your safe travel companion, Rafsan Tourist and Travel BD
                </p>
              </div>
            </div>
            <div className="flex items-stretch justify-center">
              <div className="grid md:grid-cols-2">
                <div className="h-full pr-6">
                  <p className="mt-3 mb-2 text-lg text-gray-600 dark:text-slate-400">
                    University tours, corporate tours, or group tours. We offer
                    the best service at the lowest rates. Our services are
                    available in any part of the country, including Bandarban,
                    Sajek, Rangamati, Cox's Bazar, and Saint Martin. You can
                    call us to learn more details. Tours are arranged according
                    to your budget and requirements. <br />
                    <span className="ms-2">
                      We have experienced tour guides and a history of
                      organizing tours for various universities and corporate
                      clients every year. Your preferred resorts, buses, and
                      ships will be given priority.
                    </span>
                  </p>

                  <Slide>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        alt="profile picture"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          Rafsan
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          CEO at Rafsan Tourist and Travel BD
                        </div>
                      </div>
                    </figcaption>
                  </Slide>

                  <ul className="mt-10 md:mb-0">
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                          Head Office
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400">
                          Sayedabad Super Market, 2nd Floor, Office No 33.
                        </p>
                        <p className="text-gray-600 dark:text-slate-400">
                          Bangladesh
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                          Sub Office
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400">
                          Magura District
                        </p>
                        <p className="text-gray-600 dark:text-slate-400">
                          Bangladesh
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                          <path d="M15 7a2 2 0 0 1 2 2"></path>
                          <path d="M15 3a6 6 0 0 1 6 6"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                          Contact
                        </h3>
                        <p className=" ">Mobile: 01933-335653</p>
                        <p className="flex gap-2  items-center">
                          Mail: mdsobujahammed88@gmail.com
                        </p>
                      </div>
                    </li>
                    <li className="flex"></li>
                  </ul>
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                  <h2 className="mb-4 text-2xl font-bold dark:text-white">
                    Ready to Get Started?
                  </h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-6">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label className="pb-1 text-xs uppercase tracking-wider"></label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                            name="name"
                          />
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label className="pb-1 text-xs uppercase tracking-wider"></label>
                          <input
                            type="email"
                            placeholder="Your email address"
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label className="pb-1 text-xs uppercase tracking-wider"></label>
                        <textarea
                          name="message"
                          cols="30"
                          rows="5"
                          placeholder="Write your message..."
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-center">
                      <input
                        type="submit"
                        className="w-full btn bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                        value="Send Message"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Contactus;
