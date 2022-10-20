import Image from "next/image";
import React from "react";

function index() {
  return (
    <div className="md:mb-[14rem] mt-5 place-content-center flex flex-col">
      <div className="mx-auto my-auto flex">
        <div className="mx-auto flex flex-col">
          <div className="max-w-[1100px] p-6 text-black flex flex-col mx-auto place-content-between">
            <h1 className="text-5xl font-bold mb-[8rem]">CONTACT</h1>
            {/* <div className="h-[2px] bg-black w-[6rem] my-4 mb-[10rem]" /> */}
            <div className="flex md:flex-row flex-col md:space-x-[25rem]">
              <div className="flex flex-col md:w-2/3">
                <div className="flex flex-col w-full ">
                  <div className="space-y-4">
                    <div className="space-y-3 font-serif ">
                      <h1 className="font-bold text-xl mt-[4rem]">Location</h1>
                      450 Newport Center Drive,
                      <br /> Suite 500 Newport Beach, <br /> CA 92660
                    </div>
                    <div className="space-y-3 font-serif ">
                      <h1 className="font-bold text-xl mt-[4rem]">Contact</h1>
                      Alan J. Droste <br /> Direct: (949) 644-3484 <br />
                      Cell: (949) 939-3484 <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="place-content-center space-y-10 mt-10 md:mt-0 my-auto place-items-center">
                <div className="relative place-content-center flex md:w-[400px] w-full md:ml-10 mx-auto my-auto md:my-auto mb-5 outline outline-1 outline-black">
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
    </div>
  );
}

export default index;
