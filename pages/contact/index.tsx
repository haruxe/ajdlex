import Image from "next/image";
import React from "react";
import GoogleMapReact from "google-map-react";

function index() {
  //@ts-ignore
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  //@ts-ignore
  const Map = () => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact bootstrapURLKeys={{ key: "" }} defaultCenter={location}>
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
  return (
    <div className="md:mb-[14rem] mt-5 place-content-center flex flex-col">
      <div className="mx-auto my-auto flex">
        <div className="mx-auto flex flex-col">
          <div className="max-w-[1100px] p-6 text-black flex flex-col mx-auto place-content-between">
            <h1 className="text-5xl font-bold md:mb-[8rem] mb-10">CONTACT</h1>
            {/* <div className="h-[2px] bg-black w-[6rem] my-4 mb-[10rem]" /> */}
            <div className="flex md:flex-row flex-col md:space-x-[10rem]">
              <div className="flex flex-col md:w-2/3">
                <div className="flex flex-col w-full ">
                  <div className="space-y-4">
                    <div className="space-y-3 font-serif ">
                      <h1 className="font-bold text-xl md:mt-[4rem]">
                        Location
                      </h1>
                      1001 Dove Street
                      <br /> Suite 250 Newport Beach, <br /> CA 92660
                    </div>
                    <div className="space-y-3 font-serif ">
                      <h1 className="font-bold text-xl mt-[4rem]">
                        Alan J. Droste
                      </h1>
                      Telephone: (949) 939-3484 <br />
                      <p>
                        {" "}
                        E-Mail:{" "}
                        <a
                          href="mailto:alan@ajdlex.com"
                          className="underline font-serif tracking-wide"
                        >
                          alan@ajdlex.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="place-content-center space-y-10 mt-10 md:mt-0 my-auto place-items-center">
                <div className="relative place-content-center flex md:w-[500px] w-full md:ml-10 mx-auto my-auto md:my-auto mb-5">
                  <Image
                    src={"/images/newport2.jpg"}
                    alt={"placeholder"}
                    width={"1925"}
                    height={"1211"}
                    className="flex ml-auto"
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
