import Image from "next/image";
import React from "react";

function index() {
  return (
    <div className="md:mb-[14rem] mt-5 place-content-center flex flex-col">
      <div className="mx-auto my-auto flex">
        <div className="mx-auto flex flex-col">
          <div className="max-w-[1100px] p-6 text-black flex flex-col mx-auto place-content-between">
            <h1 className="text-5xl font-bold md:mb-[8rem] mb-10">FIRM</h1>
            {/* <div className="h-[2px] bg-black w-[6rem] my-4 mb-[10rem]" /> */}
            <div className="flex md:flex-row flex-col">
              <div className="flex flex-col md:w-2/3">
                <div className="flex flex-col w-full ">
                  <div className="space-y-4">
                    <h1 className="text-xl font-bold font-serif">
                      Business Litigation Firm in Newport Beach, California
                    </h1>
                    <p className="font-serif indent-5 tracking-wide">
                      Alan J. Droste spent a significant portion of his career
                      practicing at a large international law firm, handling
                      commercial litigation for publicly traded companies,
                      small, medium and large private companies, entrepreneurs
                      and high net-worth individuals. Today, he brings his
                      big-firm expertise and experience to a small-firm
                      environment where he can charge less for personalized,
                      high-quality legal services.
                    </p>
                    <p className="font-serif indent-5 tracking-wide">
                      At Alan J. Droste, APLC, your important legal matter will
                      not be delegated to less experienced associates, as often
                      happens at other firms. Instead you will work with a
                      senior attorney who has over 40 years of experience.
                    </p>
                    <p className="font-serif indent-5 tracking-wide">
                      While Mr. Droste has a wide range of experience,
                      litigation practice focuses on business and real estate
                      matters.
                    </p>
                    <p className="font-serif indent-5 tracking-wide">
                      Mr. Droste believes that aggressive representation is the
                      best way to get you the results you expect in a
                      negotiation, arbitration, or trial, and he puts that
                      belief into action every day. By showing adversaries he is
                      prepared for trial, he achieves far better settlements
                      than attorneys who take cases merely to settle them. If
                      your case does go to trial, Mr. Droste has a proven record
                      of success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="place-content-center space-y-10 my-auto place-items-center md:mt-0 mt-10">
                <div className="relative place-content-center flex md:w-[400px] w-full md:ml-10 mx-auto my-auto md:my-auto mb-5 ">
                  <Image
                    src={"/images/newport3.jpg"}
                    alt={"placeholder"}
                    width={"1925"}
                    height={"1211"}
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
