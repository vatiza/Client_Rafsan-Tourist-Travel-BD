/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../Components/Header/Header";
import bgimg from "../../assets/img/img4.png";
const Contactus = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const loadingToastId = toast.loading("Sending message...");

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
          toast.dismiss(loadingToastId);
          console.log("SUCCESS!");
          toast.success("Message Send!");
          setIsLoading(false);
        },
        (error) => {
          toast.dismiss(loadingToastId);
          console.log("FAILED...", error.text);
          toast.error("Message Send Fail.");
          setIsLoading(false);
        }
      );
  };
  return (
    <div>
      <Helmet>
        <title>Rafsan Tourist ... || Contact Us</title>
      </Helmet>
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
                    <div className="flex-grow border-b border-dashed border-gray-300 mr-2"></div>
                    <div>
                      <section>
                        <div className="mx-auto mt-10 border-4 border-indigo-600 shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 max-w-5xl  p-4 md:p-10 flex flex-col items-center justify-center text-center">
                          <p className="text-indigo-900 text-xl md:text-2xl font-bold border-b-4 border-b-indigo-300">
                            Social Link
                          </p>

                          <ul className="flex flex-row items-center justify-center text-center mt-5">
                            <li className="mx-2">
                              <a
                                href=""
                                target="_blank"
                                aria-label="Share on Twitter"
                              >
                                <svg
                                  className="h-8 text-indigo-700 hover:text-indigo-300"
                                  fill="currentColor"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>Twitter</title>
                                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                                </svg>
                              </a>
                            </li>

                            <li className="mx-2">
                              <a
                                href=""
                                target="_blank"
                                aria-label="Share on LinkedIn"
                              >
                                <svg
                                  className="h-8 text-indigo-700 hover:text-indigo-300"
                                  fill="currentColor"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>LinkedIn</title>
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                </svg>
                              </a>
                            </li>

                            <li className="mx-2">
                              <a
                                href="https://www.facebook.com/Rafsantourist"
                                target="_blank"
                                aria-label="Share on Facebook"
                              >
                                <svg
                                  className="h-8 text-indigo-700 hover:text-indigo-300"
                                  fill="currentColor"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>Facebook</title>
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </section>
                    </div>
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
                            required
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
                            required
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
                          required
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
