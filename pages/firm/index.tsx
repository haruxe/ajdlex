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
                <div className="flex flex-col w-full my-8">
                  <h1 className="text-3xl font-bold">Firm</h1>
                  <div className="h-[2px] bg-black w-10 my-4" />
                  <div className="space-y-4">
                    <p className="font-serif indent-5 tracking-wide">
                      Alan J. Droste spent a significant portion of his career
                      practicing at a large international law firm, handling
                      commercial litigation for publicly traded companies,
                      small, medium and large private companies, entrepreneurs
                      and high net-worth individuals. Today, we bring our
                      big-firm expertise and experience to a small-firm
                      environment where we can charge less for personalized,
                      high-quality legal services.
                    </p>
                    <p className="font-serif indent-5 tracking-wide">
                      At Alan J. Droste, APLC, your important legal matter will
                      not be delegated to less experienced associates, as often
                      happens at other firms. Instead you will work with a
                      senior attorney who has over 30 years of experience.
                    </p>
                    <p className="font-serif indent-5 tracking-wide">
                      While we have a wide range of experience, our litigation
                      practice focuses on business and real estate matters.
                    </p>
                    <p className="font-serif indent-5 tracking-wide">
                      We believe that aggressive representation is the best way
                      to get you the results you expect in a negotiation,
                      arbitration, or trial, and we put that belief into action
                      every day. By showing our adversaries we are prepared for
                      trial, we achieve far better settlements than attorneys
                      who take cases merely to settle them. If your case does go
                      to trial, we have a proven record of success.
                    </p>
                  </div>
                </div>
              </div>
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
  );
}

export default index;
