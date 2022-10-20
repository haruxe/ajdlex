import Image from "next/image";
import React from "react";

function index() {
  return (
    <div className="md:mb-[14rem] mt-5 place-content-center flex flex-col">
      <div className="mx-auto my-auto flex">
        <div className="mx-auto flex flex-col">
          <div className="max-w-[1100px] p-6 text-black flex flex-col mx-auto place-content-between">
            <h1 className="text-5xl font-bold mb-[8rem]">COUNSEL</h1>
            {/* <div className="h-[2px] bg-black w-[6rem] my-4 mb-[10rem]" /> */}
            <div className="flex md:flex-row flex-col">
              <div className="flex flex-col md:w-2/3">
                <div className="flex flex-col w-full ">
                  <div className="space-y-4">
                    <h1 className="text-xl font-bold font-serif">
                      Experienced Business Litigation Attorney
                    </h1>
                    <p className="font-serif indent-5 tracking-wide">
                      Alan J. Droste, APLC offers the services with outstandiing
                      lawyers with top acedemic credentials, big firm
                      experience, and reasonable rates.
                    </p>
                    <p className="font-serif indent-5 tracking-wide">
                      Alan J. Droste, APLC has over 40 years of legal
                      experience. He is AV rated under Martindale-Hubbell's
                      peer-review legal rating system. This highest rating
                      demonstrates the top level of professional excellence and
                      legal ethics. He also has been selected as a California
                      Super Lawyer.
                    </p>
                    <div className="space-y-3 font-serif ">
                      <h1 className="font-bold text-xl mt-[4rem]">
                        Alan J. Droste
                      </h1>
                      <p>Phone: (949) 939-3484</p>
                      <p>E-mail: alan@ajdlex.com</p>
                      <p>Business and Commercial Litigation</p>
                      <p>Real Property/Real Property Security Litigation</p>
                      <p>Partnership Disputes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="place-content-center space-y-10 my-auto place-items-center md:mt-0 mt-10">
                <div className="relative place-content-center flex md:w-[400px] w-full md:ml-10 mx-auto my-auto md:my-auto mb-5 ">
                  <Image
                    src={"/images/droste-location.jpg"}
                    alt={"placeholder"}
                    width={"484"}
                    height={"322"}
                    className="flex ml-auto"
                  />

                  {/* <h1 className="absolute bottom-5 right-5 font-bold text-md md:text-2xl bg-opacity-40 backdrop-blur-2xl text-black bg-white shadow-3xl px-2 py-1 rounded-md font-righteous">
                  Location
                </h1> */}
                </div>
                <div className="relative place-content-center flex md:w-[300px] w-2/3 my-auto md:my-auto mx-auto">
                  <Image
                    src={"/images/martindale.png"}
                    alt={"placeholder"}
                    width={"577"}
                    height={"169"}
                    className="flex"
                  />
                </div>
                <div className="relative place-content-center flex md:w-[300px] w-2/3 my-auto md:my-auto mx-auto">
                  <Image
                    src={"/images/lawyers.png"}
                    alt={"placeholder"}
                    width={"395"}
                    height={"95"}
                    className="flex"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
