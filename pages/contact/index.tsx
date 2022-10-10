import Image from "next/image";
import React from "react";

function index() {
  return (
    <div className="md:my-[12rem] place-content-center flex flex-col">
      <div className="mx-auto my-auto flex">
        <div className="mx-auto flex flex-col">
          <div className="max-w-[1100px] p-6 text-black flex flex-col mx-auto md:space-x-5 place-content-between">
            <div className="flex md:flex-row flex-col">
              <div className="flex flex-col md:w-2/3">
                <div className="flex flex-col w-full md:w-1/2 my-8">
                  <h1 className="text-3xl font-bold">Location</h1>
                  <div className="h-[2px] bg-black w-10 my-4" />
                  <p className="font-serif tracking-wide">
                    450 Newport Center Drive,
                    <br /> Suite 500 Newport Beach, <br /> CA 92660
                  </p>
                </div>
                <div className="flex flex-col w-full md:w-1/2 my-8">
                  <h1 className="text-3xl font-bold">Contact</h1>
                  <div className="h-[2px] bg-black w-10 my-4" />
                  <p className="font-serif tracking-wide">
                    Alan J. Droste <br /> Direct: (949) 644-3484 <br />
                    Cell: (949) 939-3484 <br />
                  </p>
                  <a
                    href="mailto:ad@mcqueendroste.com"
                    className="text-blue-700 font-serif tracking-wide"
                  >
                    ad@mcqueendroste.com
                  </a>
                </div>
              </div>
              <div className="relative place-content-center flex md:w-[700px] w-full ml-auto my-auto md:my-auto mb-5 outline outline-1 outline-black">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
